define(["require", "exports", "app/_sys/pubsub", "app/types", "app/ui/side-panel/panel"], function (require, exports, pubsub_1, types_1, panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class default_1 extends panel_1.default {
        constructor(element) {
            super(element, types_1.keys.routines.toUpperCase());
            pubsub_1.subscribe(pubsub_1.WS_CHANGED, (data) => {
                pubsub_1.publish(pubsub_1.ITEM_COUNT_CHANGED, types_1.keys.routines, data.routines.length);
                this.items.html("");
                for (let item of data.routines) {
                    String.html `<div>${item.name}</div>`.toElement().appendElementTo(this.items);
                }
            });
        }
    }
    exports.default = default_1;
});
//# sourceMappingURL=routines.js.map