define(["require", "exports", "app/_sys/pubsub"], function (require, exports, pubsub_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ContextMenu {
        constructor({ id, items, target, event = "contextmenu", menuItemsCallback = items => items, }) {
            this.element = document.body.find("#" + id);
            if (!this.element.length) {
                this.element = this.menuElement(id);
                document.body.append(this.element);
            }
            this.actions = this.getActionsContainerElement(this.element);
            this.items = {};
            let count = 0;
            for (let item of items) {
                item.order = count++;
                this.updateItemElement(item);
                let menuItem = item;
                this.items[!menuItem.id ? count.toString() : menuItem.id] = item;
            }
            this.element.on("click", () => this.close());
            window.on("resize", () => this.close());
            window.on("mousedown", (e) => {
                let path = e.composedPath();
                if (!path.includes(this.element) && !path.includes(this.target)) {
                    this.close();
                }
            }).on("keyup", (e) => {
                if (e.keyCode === 27) {
                    this.close();
                }
            });
            this.target = target.on(event, (e) => {
                if (this.isVisible) {
                    this.close();
                    return;
                }
                this.actions.html("");
                for (let item of menuItemsCallback(Object.values(this.items).sort((a, b) => a.order - b.order))) {
                    this.actions.append(item.element);
                }
                this.element.css("top", e.y + "px").css("left", e.x + "px").showElement();
                this.adjust(e);
                e.preventDefault();
            });
            pubsub_1.subscribe(pubsub_1.CLOSE_CONTEXT_MENU, () => this.close());
        }
        menuSplitterElement() { return new Element(); }
        ;
        close() {
            if (!this.isVisible) {
                return;
            }
            this.element.hideElement();
            this.actions.html("");
        }
        triggerById(id, args) {
            const item = this.items[id];
            if (item) {
                item.action(args);
            }
        }
        updateMenuItem(id, data) {
            const item = this.items[id];
            const newItem = { ...(item ? item : {}), ...data };
            this.updateItemElement(newItem);
            this.items[id] = newItem;
            return this;
        }
        adjust(e) {
            const rect = this.actions.getBoundingClientRect(), winWidth = window.innerWidth, winHeight = window.innerHeight, right = e.x + rect.width, bottom = rect.top + rect.height;
            if (right >= (winWidth + 1)) {
                let left = (winWidth - rect.width - 1);
                this.element.css("left", (left > 0 ? left : 0) + "px");
            }
            if (bottom >= (winHeight + 1)) {
                let top = e.y - rect.height - 1;
                this.element.css("top", (top > 0 ? top : 0) + "px");
            }
        }
        getActionsContainerElement(element) {
            return element;
        }
        get isVisible() {
            if (this.actions.childNodes.length === 1 && this.actions.childNodes[0].nodeType === Node.TEXT_NODE) {
                return false;
            }
            return this.element.css("display") !== "none" && this.actions.childNodes.length !== 0;
        }
        updateItemElement(item) {
            let menuItem = item;
            if (item.splitter) {
                item.element = this.menuSplitterElement();
            }
            else {
                item.element = this.menuItemElement(menuItem).on("click", () => {
                    menuItem.action(menuItem.args);
                });
            }
        }
    }
    exports.ContextMenu = ContextMenu;
    class MonacoContextMenu extends ContextMenu {
        getActionsContainerElement(element) {
            return element.find("ul");
        }
        menuElement(id) {
            return String.html `
        <div id="${id}" style="display: none; position: fixed;">
            <div class="context-view monaco-menu-container pgmenu-container ">
                <div class="monaco-menu">
                    <div class="monaco-action-bar animated vertical">
                        <ul class="actions-container"></ul>
                    </div>
                </div>
            </div>
        </div>`.toElement();
        }
        menuSplitterElement() {
            return String.html `
        <li class="action-item pgaction disabled">
            <a class="action-label icon separator disabled"></a>
        </li>`.toElement();
        }
        menuItemElement(menuItem) {
            return String.html `
        <li class="action-item pgaction">
            ${menuItem.checked ? '<span class="checked">&check;</span>' : ""}
            <a class="action-label" tabindex="0">${menuItem.text}</a>
            ${menuItem.keyBindingsInfo ? '<span class="keybinding">' + menuItem.keyBindingsInfo + '</span>' : ""}
        </li>`.toElement();
        }
    }
    exports.MonacoContextMenu = MonacoContextMenu;
});
//# sourceMappingURL=context-menu.js.map