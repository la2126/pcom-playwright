import { expect } from '@playwright/test';
import { Settings } from '../../Settings';
import { test } from '../fixtures/pages';

test.beforeEach(async ({ welcomePage }) => {
    await welcomePage.goToPage();
})

test.describe('some flow', async () => {
    test.only('some criteria', async ({ welcomePage }) => {
        await welcomePage.uiAScreensaverElement.startButton.click();
        await welcomePage.uiAColumnsElement.uiSStoreRoomsElement.tilesGridElement.tileElement.nth(0).click();
    });


});