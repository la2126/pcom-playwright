import { Locator } from "@playwright/test";
import { InputTextElement, ButtonElement, TextElement, HtmlElement } from "../../../pcom/atoms";
import { TilesGridElement } from "../components/tilesGridElement";

export  class UiSStoreRoomsElement extends HtmlElement {

    tilesGridElement: TilesGridElement;


    constructor(element: Locator) {
        super();
        this._element = element;
        this.tilesGridElement = new TilesGridElement(element.locator('.Tiles-buttons'));
       

    }
}