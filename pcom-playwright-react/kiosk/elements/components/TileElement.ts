import { Locator } from "@playwright/test";
import { ButtonElement, TextElement } from "../../../pcom/atoms";

export  class TileElement extends ButtonElement {

    title: TextElement;


    constructor(element: Locator) {
        super(element);
        this._element = element;
        this.title = new TextElement(element.locator(`[data-testid$='-title']`));
    }
}