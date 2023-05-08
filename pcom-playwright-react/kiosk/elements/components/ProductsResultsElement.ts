import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { ElementCollection } from "../../../pcom/ElementCollection";
import { ProductCardElement } from ".";

export  class ProductsResultsElement extends HtmlElement {

    productCardsElement: ElementCollection<ProductCardElement>;
    


    constructor(element: Locator) {
        super();
        this._element = element;
        this.productCardsElement = new ElementCollection<ProductCardElement>(element.locator('.ProductCard'), ProductCardElement);
    }
}







