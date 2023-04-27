import { Locator } from "@playwright/test";
import { ButtonElement, HtmlElement } from "../../../pcom/atoms";

export  class UiAScreensaverElement extends HtmlElement {

    startButton: ButtonElement;


    constructor(element: Locator) {
        super();
        this._element = element;
        this.startButton = new ButtonElement(element.getByText('Start'));
    }
}