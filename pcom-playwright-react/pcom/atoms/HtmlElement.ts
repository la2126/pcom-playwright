import { Locator, MakeMatchers } from "@playwright/test";
import { test, expect as exp } from "@playwright/test";

export class HtmlElement {
    protected _element: Locator;

    expect(message?: string): MakeMatchers<void, Locator> {
        return exp(this._element, { message: message });
    }

    async waitFor(
        state: "attached" | "detached" | "visible" | "hidden"
    ): Promise<void> {
        return this._element.waitFor({ state: state });
    }
}