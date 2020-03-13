define(["require", "exports", "app/api", "app/ui/side-panel/panel"], function (require, exports, api_1, panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class default_1 extends panel_1.default {
        constructor(element) {
            super(element, api_1.Keys.ROUTINES, [
                { text: "Filter" },
                { text: "Order ascending" },
                { text: "Order descending" },
            ]);
        }
        schemaChanged(data, schema) {
            this.items.html("");
            for (let item of data.routines) {
                this.addNewItem({ schema: schema, connection: data.connection, ...item });
            }
            this.publishLength();
        }
        addNewItem(item) {
            let title = `${item.signature}\nreturns ${item.returns}\n${item.language} ${item.type}`;
            if (item.comment) {
                title = title + `\n\n${item.comment.substring(0, 200)}`;
            }
            this.createItemElement(String.html `
            <div>
                <i class="icon-database"></i>
                <span>${item.signature}</span>
            </div>
            <div>
                <div class="item-subtext">returns ${item.returns}</div>
                <div class="item-subtext">${item.language} ${item.type}</div>
            </div>
        `)
                .dataAttr("item", item)
                .attr("title", title)
                .attr("id", api_1.RoutineId(item.id))
                .appendElementTo(this.items);
        }
        itemSelected(element) {
            const item = element.dataAttr("item");
            this.mainPanel.activate(api_1.RoutineId(item.id), api_1.Keys.ROUTINES, item);
        }
        ;
    }
    exports.default = default_1;
});
//# sourceMappingURL=routines.js.map