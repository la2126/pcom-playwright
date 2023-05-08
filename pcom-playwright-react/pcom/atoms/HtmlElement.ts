import { Locator } from "@playwright/test";
import { expect as exp } from "@playwright/test";

export class HtmlElement {
    protected _element: Locator;

    expect(message?: string) {
        return exp(this._element, { message: message });
    }

    async waitFor(
        state: "attached" | "detached" | "visible" | "hidden"
    ): Promise<void> {
        return this._element.waitFor({ state: state });
    }

}