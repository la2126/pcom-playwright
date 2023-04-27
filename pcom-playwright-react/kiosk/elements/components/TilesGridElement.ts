import { Locator } from "@playwright/test";
import { ButtonElement, HtmlElement } from "../../../pcom/atoms";
import { ElementCollection } from "../../../pcom/ElementCollection";
import { TileElement } from "./TileElement";

export  class TilesGridElement extends HtmlElement {

    tileElement: ElementCollection<TileElement>;
    


    constructor(element: Locator) {
        super();
        this._element = element;
        this.tileElement = new ElementCollection<TileElement>(element.locator('[data-testid^="tile-container-"'), TileElement);
    }
}







