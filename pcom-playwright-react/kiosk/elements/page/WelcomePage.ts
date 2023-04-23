import { Page } from "@playwright/test";
import { UiAScreenSaverElement, UiAColumnsElement, UiAQuestionFlowResetElement } from "../";

export class WelcomePage {
    page: Page;
    uiAScreenSaverElement: UiAScreenSaverElement;
    uiAColumnsElement: UiAColumnsElement;
    uiAQuestionFlowResetElement: UiAQuestionFlowResetElement;

    constructor(page: Page) {
        this.page = page;
        this.uiAScreenSaverElement = new UiAScreenSaverElement(page.locator('.UiAScreenSaver'));
        this.uiAColumnsElement = new UiAColumnsElement(page.locator('.UiAColumns'));
        this.uiAQuestionFlowResetElement = new UiAQuestionFlowResetElement(page.locator('.UiAQuestionFlowReset'));
    }

    async goToPage() {
        await this.page.goto('https://abg-kiosk-develop.vercel.app/st1234/welcome');
    }

}