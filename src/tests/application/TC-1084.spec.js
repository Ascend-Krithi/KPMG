const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Reason For DPP Need Dropdown Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1084] Verify exactly 3 options are displayed in Reason For DPP Need dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 3: Navigate to Core ASK module
    await coreAskPage.navigateToCoreAskModule();

    // Step 4: Click Create Core ASK button
    await coreAskPage.clickCreateCoreAsk();
    await expect(page.locator('form')).toBeVisible();

    // Step 5: Locate Reason For DPP Need field
    await expect(page.locator('select[name*="reasonForDppNeed"]')).toBeVisible();

    // Step 6: Click Reason For DPP Need dropdown
    await coreAskPage.clickReasonForDppNeedDropdown();

    // Step 7: Verify exactly 3 options are displayed
    const options = await coreAskPage.getReasonForDppNeedOptions();
    expect(options.length).toBe(3);
    expect(options).toEqual(expect.arrayContaining(TD.reasonForDppNeed.all));
  });
});