import { Locator } from "@playwright/test";
import { InputTextElement, ButtonElement, TextElement, HtmlElement } from "../../../pcom/atoms";

export  class UiAStoreLoginElement extends HtmlElement {

    storeNumberInput: InputTextElement;
    submitButton: ButtonElement;
    validationText: TextElement;
    storeNameText: TextElement;
    emailText: TextElement;
    phoneNumberText: TextElement;
    backButton: ButtonElement;
    confirmButton: ButtonElement;
    storeFoundText: TextElement;

    constructor(element: Locator) {
        super();
        this._element = element;
        this.storeNumberInput = new InputTextElement(element.locator('[name="storeId"]'));
        this.submitButton = new ButtonElement(element.getByText("Submit"));
        this.validationText = new TextElement(element.locator('.error-message'));
        this.storeNameText = new TextElement(element.getByText('Name: Cashway'));
        this.emailText = new TextElement(element.getByText('Email: hannah.cormier@konabos.com'));
        this.phoneNumberText = new TextElement(element.getByText('Tel: +12345678910'));
        this.backButton = new ButtonElement(element.getByText('Back'));
        this.confirmButton = new ButtonElement(element.getByText('Confirm'));
        this.storeFoundText = new TextElement(element.getByText('Store Found:'));
    }
    
    async searchForStore(storeId: string) {
        await this.storeNumberInput.setText(storeId);
        await this.submitButton.click();
    }
}