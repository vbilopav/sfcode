var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    main_1 = __importDefault(main_1);
    class default_1 {
        render() {
            return String.html `
        <div class="sf-main">
            <div>toolbar</div>
            <div>sidebar</div>
            <div></div>
            <div id="main"></div>
            <div>footer</div>
        </div>
        `;
        }
        rendered() {
            new main_1.default(this.model.main);
        }
    }
    exports.default = default_1;
});
//# sourceMappingURL=index.js.map