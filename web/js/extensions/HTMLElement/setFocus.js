define(["js/extensions/test-proto"], test => {

    test(HTMLElement, ["setFocus"]);

    HTMLElement.prototype.setFocus = function() {
        this.focus();
        return this;
    }
});