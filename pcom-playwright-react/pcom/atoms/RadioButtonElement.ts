import { Locator } from "@playwright/test";
import { HtmlElement } from "./HtmlElement";

export class RadioButtonElement extends HtmlElement {
    constructor(element: Locator) {
        super();
        this._element = element;
    }

    async click(): Promise<void> {
        return this._element.click();
    }
    async getText(): Promise<string> {
        return this._element.textContent();
    }
}


