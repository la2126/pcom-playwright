import { Page } from "@playwright/test";
import { UiAHeadingElement, UiAStoreLoginElement } from "../";
import { Settings } from "../../../Settings";


export class StoreLoginPage {
    page: Page;
    uiAHeadingElement: UiAHeadingElement;
    uiAStoreLoginElement: UiAStoreLoginElement;

    constructor(page: Page) {
        this.page = page;
        this.uiAHeadingElement = new UiAHeadingElement(page.locator(".UiAHeading"));
        this.uiAStoreLoginElement = new UiAStoreLoginElement(page.locator(".UiAStoreLogin"));
    }

    async goToPage() {
        await this.page.goto(Settings.domain);
    }
}