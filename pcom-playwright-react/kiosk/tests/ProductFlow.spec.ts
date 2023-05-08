import { expect } from '@playwright/test';;
import { test } from '../fixtures/pages';

test.beforeEach(async ({ welcomePage }) => {
    await welcomePage.goToPage();
})

test.describe('Navigate from Welcome page to products', async () => {
    test.only('some criteria', async ({ welcomePage, findProductsPage }) => {
        await welcomePage.uiAScreensaverElement.startButton.click();
        await welcomePage.uiAColumnsElement.uiSStoreRoomsElement.tilesGridElement.tileElement.nth(1).click();
        const secondQuestionContainer = findProductsPage.uiAColumnsElement.uiAProductSearchElement.questionSlideElement.questionsContainerElement.nth(1);
        await secondQuestionContainer.optionComponentElement.nth(0).click();
        const thirdQuestionContainer = findProductsPage.uiAColumnsElement.uiAProductSearchElement.questionSlideElement.questionsContainerElement.nth(2);
        await thirdQuestionContainer.optionComponentElement.nth(0).click();
        await findProductsPage.uiAColumnsElement.uiAProductSearchElement.questionSlideElement.productsResultsElement.productCardsElement.nth(0).click();
const locator = findProductsPage.uiAColumnsElement.uiAProductSearchElement.questionSlideElement.productsResultsElement.productCardsElement.nth(0);
const title = await findProductsPage.uiAColumnsElement.uiAProductSearchElement.questionSlideElement.productsResultsElement.productCardsElement.nth(0).saveProductTitle(locator)
    });


});