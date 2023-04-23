import { Locator } from "@playwright/test";
import { InputTextElement, ButtonElement, TextElement, HtmlElement } from "../../../pcom/atoms";

export  class UiSStoreRoomsElement extends HtmlElement {

    storeNumberInput: InputTextElement;
   


    constructor(element: Locator) {
        super();
        this._element = element;
        this.storeNumberInput = new InputTextElement(element.locator('[name="storeId"]'));
       

    }
}