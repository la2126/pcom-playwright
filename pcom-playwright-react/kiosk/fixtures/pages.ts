import { test as base } from "@playwright/test";
import { StoreLoginPage } from "../elements/page/StoreLoginPage";
import { WelcomePage } from "../elements/page/WelcomePage";

type MyFixtures = {
    storeLoginPage: StoreLoginPage;
    welcomePage: WelcomePage;
    };

    export const test = base.extend<MyFixtures>({
        storeLoginPage: async ({ page }, use) => {
            const storeLoginPage = new StoreLoginPage(page);
            await use(storeLoginPage);
        },
        welcomePage: async ({page }, use) => {
            const welcomePage = new WelcomePage(page);
            await use(welcomePage);
        }
    });
    export {expect} from '@playwright/test';



