import { Locator } from "@playwright/test";
import { InputTextElement, ButtonElement, TextElement, HtmlElement } from "../../../pcom/atoms";

export  class StoreLoginFirstScreenElement extends HtmlElement {

    storeNumberInput: InputTextElement;
    submitButton: ButtonElement;
    validationText: TextElement;

    constructor(element: Locator) {
        super();
        this._element = element;
        this.storeNumberInput = new InputTextElement(element.getByTestId('Input-Store-Number'));
        this.submitButton = new ButtonElement(element.getByTestId("Button-Submit"));
        this.validationText = new TextElement(element.getByTestId('Error'));
    }
    
    async searchForStore(storeId: string) {
        await this.storeNumberInput.setText(storeId);
        await this.submitButton.click();
    }
}