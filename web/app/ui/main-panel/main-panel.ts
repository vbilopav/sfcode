import "vs/editor/editor.main";

export default class  {
    constructor(element: Element){
        element.addClass("main-panel").html(String.html`<div></div><div></div>`);
        //console.log("main-panel", element);
        /*
        monaco.editor.create(element as HTMLElement, {
            value: "",
            language: "pgsql",
            theme: "vs-dark",
            renderWhitespace: "all",
            automaticLayout: false
        });
        */
    }
}
