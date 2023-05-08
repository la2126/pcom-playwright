import { Page } from "@playwright/test";
import { UiAColumnsElement } from "../";


export class FindProductsPage {
    page: Page;
    uiAColumnsElement: UiAColumnsElement;


    constructor(page: Page) {
        this.page = page;
        this.uiAColumnsElement = new UiAColumnsElement(page.locator(".UiAColumns"));
    }
}