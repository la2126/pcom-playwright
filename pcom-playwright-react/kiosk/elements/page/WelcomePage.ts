import { Page } from "@playwright/test";
import { UiAScreenSaverElement, UiAColumnsElement, UiAQuestionFlowResetElement } from "../";
import { Settings } from "../../../Settings";

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
        await this.page.goto(Settings.domain);
    }

}