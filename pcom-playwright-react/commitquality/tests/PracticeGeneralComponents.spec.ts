import { test } from '../fixtures/pages';

test.beforeEach(async ({ generalComponentsPage }) => {
  await generalComponentsPage.goToPage();
})

test.describe('Button Container', async () => {
  test('Container has heading "Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.buttons.heading.expect().toHaveText('Buttons');
  });

  test('Notification text shown when "Click me" button is clicked', async ({ generalComponentsPage }) => {
    await generalComponentsPage.buttons.basicClickNotification.expect().toBeHidden();
    await generalComponentsPage.buttons.basicClick.click();
    await generalComponentsPage.buttons.basicClickNotification.expect().toBeVisible();
  });
});


test.describe('Radio Buttons Container', async () => {
  test('Container has heading "Radio buttons"', async ({ generalComponentsPage }) => {
    await generalComponentsPage.radioButtons.heading.expect().toHaveText('Radio buttons');
  });

  test('Notification text displayed when Radio button 1 is clicked', async ({ generalComponentsPage }) => {
    await generalComponentsPage.radioButtons.optionOneNotification.expect().toBeHidden();
    await generalComponentsPage.radioButtons.radioButtonList.nth(0).click();
    await generalComponentsPage.radioButtons.optionOneNotification.expect().toBeVisible();
  });

  test('Notification text displayed when Radio button 2 is clicked', async ({ generalComponentsPage }) => {
    await generalComponentsPage.radioButtons.optionTwoNotification.expect().toBeHidden();
    await generalComponentsPage.radioButtons.radioButtonList.nth(1).click();
    await generalComponentsPage.radioButtons.optionTwoNotification.expect().toBeVisible();
  });
});