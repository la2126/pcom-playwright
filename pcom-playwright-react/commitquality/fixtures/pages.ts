import { test as base } from "@playwright/test";
import { GeneralComponentsPage } from "../elements/page/GeneralComponentsPage";
 

type MyFixtures = {
    generalComponentsPage: GeneralComponentsPage;
    };

    export const test = base.extend<MyFixtures>({
        generalComponentsPage: async ({ page }, use) => {
            const generalComponentsPage = new GeneralComponentsPage(page);
            await use(generalComponentsPage);
        }
    });
    export {expect} from '@playwright/test';



