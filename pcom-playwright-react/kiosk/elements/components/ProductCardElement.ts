import { Locator } from "@playwright/test";
import { ButtonElement, TextElement } from "../../../pcom/atoms";

export class ProductCardElement extends ButtonElement {

    title: TextElement;

    constructor(element: Locator) {
        super(element);
        this._element = element;
        this.title = new TextElement(element.locator('.longTitle'));
    }

    async saveProductTitle(product: ProductCardElement): Promise<string> {
        return await product.getAttribute('h3');
    }
}
