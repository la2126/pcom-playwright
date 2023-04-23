import { Locator } from "@playwright/test";
import { HtmlElement } from "./HtmlElement";

export class HeadingElement extends HtmlElement {
    constructor(element: Locator) {
        super();
        this._element = element;
    }

    async getText(text: string): Promise<string> {
        return this._element.textContent();
    }
}