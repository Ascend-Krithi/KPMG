const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Level Needed 11 Options Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1107] Verify all 11 hierarchical options in Level Needed dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Locate Level Needed field
    await expect(page.locator('select[name*="levelNeeded"]')).toBeVisible();

    // Step 5: Click dropdown
    await coreAskPage.clickLevelNeededDropdown();

    // Step 6: Verify all 11 options in order
    const options = await coreAskPage.getLevelNeededOptions();
    expect(options).toEqual(TD.levelNeeded.all);
  });
});