import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { StoreLoginFirstScreenElement, StoreLoginSecondScreenElement } from "../components";

export  class UiAStoreLoginElement extends HtmlElement {

    firstScreen: StoreLoginFirstScreenElement;
    secondScreen: StoreLoginSecondScreenElement;

    constructor(element: Locator) {
        super();
        this._element = element;
        this.firstScreen = new StoreLoginFirstScreenElement(element.locator('.StoreLoginFirstScreen'));
        this.secondScreen = new StoreLoginSecondScreenElement(element.locator(".StoreLoginSecondScreen"));
    }
}