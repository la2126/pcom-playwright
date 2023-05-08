import { test as base } from "@playwright/test";
import { StoreLoginPage } from "../elements/page/StoreLoginPage";
import { WelcomePage } from "../elements/page/WelcomePage";
import { FindProductsPage } from "../elements/page/FindProductsPage";

type MyFixtures = {
    storeLoginPage: StoreLoginPage;
    welcomePage: WelcomePage;
    findProductsPage: FindProductsPage;
    };

    export const test = base.extend<MyFixtures>({
        storeLoginPage: async ({ page }, use) => {
            const storeLoginPage = new StoreLoginPage(page);
            await use(storeLoginPage);
        },
        welcomePage: async ({ page }, use) => {
            const welcomePage = new WelcomePage(page);
            await use(welcomePage);
        },
        findProductsPage: async ({ page}, use) => {
            const findProductsPage = new FindProductsPage(page);
            await use(findProductsPage);
        }

    });
    export {expect} from '@playwright/test';



