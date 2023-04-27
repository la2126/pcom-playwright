import { Page } from "@playwright/test";
import { UiAScreensaverElement, UiAColumnsElement, UiAQuestionFlowResetElement } from "../";
import { Settings } from "../../../Settings";

export class WelcomePage {
    page: Page;
    uiAScreensaverElement: UiAScreensaverElement;
    uiAColumnsElement: UiAColumnsElement;
    uiAQuestionFlowResetElement: UiAQuestionFlowResetElement;

    constructor(page: Page) {
        this.page = page;
        this.uiAScreensaverElement = new UiAScreensaverElement(page.locator('.UiAScreensaver'));
        this.uiAColumnsElement = new UiAColumnsElement(page.locator('.UiAColumns'));
        this.uiAQuestionFlowResetElement = new UiAQuestionFlowResetElement(page.locator('.UiAQuestionFlowReset'));
    }

    async goToPage() {
        await this.page.goto(`${Settings.domain}st1234/welcome`);
    }

}