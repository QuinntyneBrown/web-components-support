import "core-js/es6";
import "@webcomponents/custom-elements/custom-elements.min";

class MyComponent extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "<h1>Too much sauce!</h1>";
    }
}

customElements.define("my-component", MyComponent);