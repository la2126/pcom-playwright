import { expect } from '@playwright/test';
import { test } from '../fixtures/pages';

test.beforeEach(async ({ storeLoginPage }) => {
    await storeLoginPage.goToPage();
})

test.describe('Store login validation', async () => {
    test('Validation text shown when input submitted with no content', async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.searchForStore('');
        await storeLoginPage.uiAStoreLoginElement.validationText.expect().toBeVisible();
    });

    test('Validation text shown when input submitted with storeId that doesnt exist', async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.searchForStore('abcd');
        await storeLoginPage.uiAStoreLoginElement.validationText.expect().toBeVisible();
    });
});

test.describe('Store login confirmation text', async () => {
    test.beforeEach(async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.searchForStore('1234');
        await storeLoginPage.uiAStoreLoginElement.storeFoundText.waitFor('visible');
    });

    test('Correct store name shown when storeId is found', async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.storeNameText.expect().toBeVisible();
    });

    test('Correct store email shown when storeId is found', async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.emailText.expect().toBeVisible();
    });

    test('Correct store phone number shown when storeId is found', async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.phoneNumberText.expect().toBeVisible();
    });
});

test.describe('Store login navigation', async () => {
    test.beforeEach(async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.searchForStore('1234');
        await storeLoginPage.uiAStoreLoginElement.storeFoundText.waitFor('visible');
    });

    test('Clicking Back button takes user back to input page', async ({ storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.backButton.click();
        await storeLoginPage.uiAStoreLoginElement.storeNumberInput.expect().toBeVisible();
    });

    test('Clicking Confirm button takes user to Kiosk site for store', async ({ page, storeLoginPage }) => {
        await storeLoginPage.uiAStoreLoginElement.confirmButton.click();
        await expect(page).toHaveURL('https://abg-kiosk-develop.vercel.app/st1234/welcome');
    });
});