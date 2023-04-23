import { Locator } from "@playwright/test";
import { HtmlElement } from "./HtmlElement";

export class InputTextElement extends HtmlElement {
    constructor(element: Locator) {
        super();
        this._element = element;
    }

    async setText(text: string): Promise<void> {
        return this._element.fill(text);
    }
    async getText(text: string): Promise<string> {
        return this._element.inputValue();
    }
}


