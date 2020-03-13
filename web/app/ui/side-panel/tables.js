define(["require", "exports", "app/api", "app/ui/side-panel/panel"], function (require, exports, api_1, panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class default_1 extends panel_1.default {
        constructor(element) {
            super(element, api_1.Keys.TABLES, [
                { text: "Filter" },
                { text: "Order ascending" },
                { text: "Order descending" },
            ]);
        }
        schemaChanged(data, schema) {
            this.items.html("");
            for (let item of data.tables) {
                this.addNewItem({ schema: schema, connection: data.connection, ...item });
            }
            this.publishLength();
        }
        addNewItem(item) {
            let title = `${item.name}\nestimated row count: ${item.estimate}`;
            if (item.comment) {
                title = title + `\n\n${item.comment.substring(0, 200)}`;
            }
            this.createItemElement(String.html `
            <div>
                <i class="icon-database"></i>
                <span>${item.name}</span>
            </div>
            <div>
                <div class="item-subtext">count=${item.estimate}</div>
            </div>
        `)
                .dataAttr("item", item)
                .attr("title", title)
                .attr("id", api_1.TableId(item.id))
                .appendElementTo(this.items);
        }
        itemSelected(element) {
            const item = element.dataAttr("item");
            this.mainPanel.activate(api_1.TableId(item.id), api_1.Keys.TABLES, item);
        }
        ;
    }
    exports.default = default_1;
});
//# sourceMappingURL=tables.js.map