import { test, expect } from '@playwright/test';

test.only('has title buttons', async ({ page }) => {
  await page.goto('https://commitquality.com/');
  await page.getByTestId('navbar-practice').click();
  await page.getByTestId('practice-general').click();


  // Expect a title "to contain" a substring.
  await expect(page.getByText('Buttons', { exact: true })).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
