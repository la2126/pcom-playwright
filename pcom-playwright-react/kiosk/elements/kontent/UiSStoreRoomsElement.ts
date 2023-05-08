import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { TilesGridElement } from "../components";

export  class UiSStoreRoomsElement extends HtmlElement {

    tilesGridElement: TilesGridElement;


    constructor(element: Locator) {
        super();
        this._element = element;
        this.tilesGridElement = new TilesGridElement(element.locator('.Tiles-buttons'));
       

    }
}