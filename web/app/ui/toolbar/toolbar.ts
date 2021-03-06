import Storage from "app/_sys/storage";
import { 
    publish, subscribe, 
    STATE_CHANGED_ON, 
    STATE_CHANGED_OFF, 
    STATE_CHANGED, 
    SIDEBAR_DOCKED, 
    SIDEBAR_UNDOCKED, 
    ITEM_COUNT_CHANGED, 
    TAB_SELECTED,
    CONNECTION_SET
} from "app/_sys/pubsub";
import { ContextMenuCtorArgs, MenuItemType } from "app/controls/context-menu";
import MonacoContextMenu from "app/controls/monaco-context-menu";
import { Position, IMain, Keys, getCurrentSchema, getCurrentConnection, classes, getConnectionColor } from "app/api";

enum ButtonRoles { switch="switch", toggle="toggle" };
const 
    _isInRole: (e: Element, role: ButtonRoles) => boolean = (e, role) => e.dataAttr("role") === role,
    _isSwitch: (e: Element) => boolean = e => _isInRole(e, ButtonRoles.switch),
    _moveText = (position: Position) => position === Position.LEFT ? "Move Toolbar to Right" : "Move Toolbar to Left";

interface IStorage {
    scripts: boolean;
    tables: boolean;
    views: boolean;
    routines: boolean;
    search: boolean;
    previousKey: string;
    pgcode: boolean;
}

const 
    _storage = new Storage({
        scripts: false, 
        tables: false, 
        views: false,
        routines: false, 
        search: false, 
        previousKey: Keys.SCRIPTS, 
        pgcode: false
    }, 
    "state", 
    (name, value) => {
        if (name !== "previousKey") {
            return JSON.parse(value) as boolean;
        }
        return value;
    }) as any as IStorage;

const
    _items = [
        {id: `btn-${Keys.SCRIPTS}`, icon: "icon-doc-text", key: Keys.SCRIPTS, label: Keys.SCRIPTS, text: "Scripts", keyBinding: "Ctrl+S", role: ButtonRoles.switch},
        {id: `btn-${Keys.TABLES}`, icon: "icon-database", key: Keys.TABLES, label: Keys.TABLES, text: "Tables", keyBinding: "Ctrl+T", role: ButtonRoles.switch},
        {id: `btn-${Keys.VIEWS}`, icon: "icon-database", key: Keys.VIEWS, label: Keys.VIEWS, text: "Views", keyBinding: "Ctrl+V", role: ButtonRoles.switch},
        {id: `btn-${Keys.ROUTINES}`, icon: "icon-database", key: Keys.ROUTINES, label: Keys.ROUTINES, text: "Routines", keyBinding: "Ctrl+R", role: ButtonRoles.switch},
        {id: `btn-${Keys.SEARCH}`, icon: "icon-search", key: Keys.SEARCH, label: Keys.SEARCH, text: "Search", keyBinding: "Ctrl+F", role: ButtonRoles.switch},
        //{id: "btn-pgcode", icon: "icon-terminal", key: "pgcode", label: "pgcode", text: null, keyBinding: null, role: ButtonRoles.toggle}
    ];

export default class  {
    private readonly buttons: HTMLCollection;
    private toolbar: Element;
    private menu: MonacoContextMenu;

    constructor(element: Element, position: Position, index: IMain) {
        let html = "";
        let menuItems = new Array<MenuItemType>();
        for(let item of _items) {
            
            html = html + `
            <div class="${item.icon} ${item.id}" id="${item.id}" data-key="${item.key}" data-role="${item.role}" title="${item.label} (${item.keyBinding})">
                <div class="marker"></div>
                <div class="lbl">${item.label}</div>
                <div class="count" style="display: none"></div>
            </div>`;

            if (item.text) {
                menuItems.push({
                    id: item.key,
                    text: item.text,
                    keyBindingsInfo: item.keyBinding,
                    action: () => element.find("#" + item.id).trigger("click")
                } as MenuItemType);
            }
        }
        this.toolbar = element.addClass("toolbar").html(html);
        if (position === Position.RIGHT) {
            this.toolbar.addClass("right");
        }

        menuItems.push({ splitter: true }, {
            id: "move", 
            text: _moveText(position), 
            action: () => {
                let newPosition = position == Position.LEFT ? Position.RIGHT : Position.LEFT;
                if (index.moveToolbar(newPosition)) {
                    position = newPosition;
                    if (position === Position.RIGHT) {
                        this.toolbar.addClass("right");
                    } else {
                        this.toolbar.removeClass("right");
                    }
                    this.menu.updateMenuItem("move", {text: _moveText(position)});
                }
            }
        } as MenuItemType);
        this.menu = new MonacoContextMenu({id: "ctx-menu-toolbar", items: menuItems, target: element} as ContextMenuCtorArgs);
        
        this.buttons = this.toolbar.children.on("click", (e: Event) => this.buttonClicked(e.currentTarget as HTMLElement));
        
        for(let e of this.buttons) {
            const key = e.dataAttr("key");
            this.setButtonState(e as HTMLElement, _storage[key], key);
        }

        subscribe(SIDEBAR_DOCKED, () => this.sidebarDocked());
        subscribe(SIDEBAR_UNDOCKED, () => this.sidebarUndocked());

        subscribe(ITEM_COUNT_CHANGED, (key, count) => {
            let btn = this.buttons.namedItem("btn-" + key);
            let e = btn.find(".count").html(count).showElement();
            if (count.toString().length > 2) {
                e.css("width", "16px");
            } else {
                e.css("width", "10px");
            }
            let hint = btn.attr("title").split("\n");
            btn.attr("title", hint[0] + "\n" + count + " items");
        });
        subscribe(TAB_SELECTED, (_, key: Keys, schema: string, connection: string) => { //!!
            if (!key) {
                return;
            } 
            if (schema !== getCurrentSchema() || connection !== getCurrentConnection()) {
                return;
            }
            for(let btn of this.buttons) {
                const active = btn.hasClass(classes.active);
                if (key === btn.dataAttr("key")) {
                    if (!active) {
                        btn.addClass(classes.active);
                    }
                } else {
                    if (active) {
                        btn.removeClass(classes.active);
                    }
                }
            }
        });

        subscribe(CONNECTION_SET, (name: string) => {
            this.toolbar.findAll(".marker").css("background-color", getConnectionColor(name))
        });
    }

    private sidebarDocked() {
        this.toolbar.addClass(classes.docked);
        for(let btn of this.buttons) {
            if (btn.hasClass(classes.active) && _isSwitch(btn)) {
                this.menu.updateMenuItem(btn.dataAttr("key"), {checked: false} as MenuItemType);
            }
        }
    }

    private sidebarUndocked() {
        let hasActive = false
        for(let item of _items) {
            if (item.role !== ButtonRoles.switch) {
                continue;
            }
            let btn = this.buttons.namedItem(item.id);
            if (btn.hasClass(classes.active)) {
                hasActive = true;
                this.menu.updateMenuItem(btn.dataAttr("key"), {checked: true} as MenuItemType);
                break;
            }
        }
        if (!hasActive && _storage.previousKey) {
            let key = _storage.previousKey;
            for(let btn of this.buttons) {
                if (btn.dataAttr("key") === key) {
                    btn.addClass(classes.active);
                    _storage[key] = true;
                    publish(STATE_CHANGED + key, key, true);
                    this.menu.updateMenuItem(key, {checked: true} as MenuItemType);
                    break;
                }
            }
        }
        this.toolbar.removeClass(classes.docked);
    } 

    private setButtonState(e: HTMLElement, state: boolean, key: string) {
        if (e.hasClass(classes.active) && !state) {
            e.removeClass(classes.active);
            setTimeout(() => publish(STATE_CHANGED + key, key, false));
        } else if (!e.hasClass(classes.active) && state) {
            e.addClass(classes.active);
            setTimeout(() => publish(STATE_CHANGED + key, key, true));
        }
        if (_isSwitch(e)) {
            this.menu.updateMenuItem(key, {checked: state} as MenuItemType);
        }
    }

    private buttonClicked(e: HTMLElement) {
        const key = e.dataAttr("key");
        let switchRole = _isSwitch(e);
        
        const toggle = (state?: boolean): void => {
            if (state === undefined) {
                state = e.hasClass(classes.active);
            }
            if (state) {
                e.removeClass(classes.active);
                if (switchRole) {
                    _storage.previousKey = key;
                }
            } else {
                e.addClass(classes.active);
            }
            state = !state;
            _storage[key] = state;
            publish(STATE_CHANGED + key, key, state);
            if (switchRole) {
                this.menu.updateMenuItem(key, {checked: state} as MenuItemType);
            }
        };

        if (!switchRole) {
            toggle();
        } else {
            const isDocked = this.toolbar.hasClass(classes.docked);

            for(let btn of this.buttons) {
                if (_isSwitch(btn) && e.id !== btn.id) {
                    const key = btn.dataAttr("key");
                    if (_storage[key]) {
                        _storage[key] = false;
                    }
                    if (btn.hasClass(classes.active)) {
                        btn.removeClass("active");
                        publish(STATE_CHANGED + key, key, false);
                        this.menu.updateMenuItem(key, {checked: false} as MenuItemType);
                    }
                }
            }
            if (isDocked) {
                toggle(false);
            } else {
                toggle();
            }

            if (!e.hasClass(classes.active)) {
                publish(STATE_CHANGED_OFF);
            } else {
                publish(STATE_CHANGED_ON);
            }
        }
    }
}