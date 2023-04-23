import { Page } from "@playwright/test";
import { RadioButtonElement } from "../../../pcom/atoms/RadioButtonElement";
import { ButtonContainerElement } from "../components/ButtonContainerElement";
import { RadioButtonContainerElement } from "../components/RadioButtonContainerElement";

export class GeneralComponentsPage {
     page: Page;
     buttons: ButtonContainerElement;
     radioButtons: RadioButtonContainerElement;

    constructor(page: Page) {
        this.page = page;
        this.buttons = new ButtonContainerElement(page.locator(".buttons-container"));
        this.radioButtons = new RadioButtonContainerElement(page.locator(".radio-buttons-container"));
        
    }

    async goToPage() {
        await this.page.goto('https://commitquality.com/practice-general-components');
    } 

}