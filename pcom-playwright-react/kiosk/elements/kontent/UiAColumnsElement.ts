import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { UiSStoreRoomsElement, UiAProductModalElement, UiAWelcomeFooterElement, UiAMiniCartElement, UiAProductSearchElement } from "..";

export  class UiAColumnsElement extends HtmlElement {
    uiSStoreRoomsElement: UiSStoreRoomsElement;
    uiAProductModalElement: UiAProductModalElement;
    uiAWelcomeFooterElement: UiAWelcomeFooterElement;
    uiAMiniCartElement: UiAMiniCartElement;
    uiAProductSearchElement: UiAProductSearchElement;


    constructor(element: Locator) {
        super();
        this._element = element;
        this.uiSStoreRoomsElement = new UiSStoreRoomsElement(element.locator('.UiSStoreRooms'));
        this.uiAProductModalElement = new UiAProductModalElement(element.locator('.UiAProductModal'));
        this.uiAWelcomeFooterElement = new UiAWelcomeFooterElement(element.locator('.UiAWelcomeFooter'));
        this.uiAMiniCartElement = new UiAMiniCartElement(element.locator('.UiAMiniCart'));
        this.uiAProductSearchElement = new UiAProductSearchElement(element.locator('.UiAProductSearch'));
    }
}