import { Locator } from "@playwright/test";
import { ButtonElement, HtmlElement, InputTextElement, TextElement } from "../../../pcom/atoms";

export  class StoreLoginSecondScreenElement extends HtmlElement {

    storeNameText: TextElement;
    emailText: TextElement;
    phoneNumberText: TextElement;
    backButton: ButtonElement;
    confirmButton: ButtonElement;
    storeFoundText: TextElement;

    constructor(element: Locator) {
        super();
        this._element = element;

        this.storeFoundText = new TextElement(element.getByTestId('Title'));

        this.storeNameText = new TextElement(element.getByTestId('Store-Name'));
        this.emailText = new TextElement(element.getByTestId('Store-Email'));
        this.phoneNumberText = new TextElement(element.getByTestId('Store-Telephone'));

        this.backButton = new ButtonElement(element.getByTestId('Button-Back'));
        this.confirmButton = new ButtonElement(element.getByTestId('Button-Confirm'));
    }
}