import { Locator } from "@playwright/test";
import { HeadingElement, HtmlElement } from "../../../pcom/atoms";

export  class UiAHeadingElement extends HtmlElement {

    heading: HeadingElement;


    constructor(element: Locator) {
        super();
        this._element = element;
        this.heading = new HeadingElement(element.locator('h1'));
    }
}