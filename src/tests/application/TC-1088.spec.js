const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Level Needed Dropdown Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1088] Verify all 11 role levels are displayed in Level Needed dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Locate Level Needed field
    await expect(page.locator('select[name*="levelNeeded"]')).toBeVisible();

    // Step 4: Click Level Needed dropdown
    await coreAskPage.clickLevelNeededDropdown();

    // Step 5: Verify all 11 options are displayed
    const options = await coreAskPage.getLevelNeededOptions();
    expect(options.length).toBe(11);
    expect(options).toEqual(TD.levelNeeded.all);
  });
});