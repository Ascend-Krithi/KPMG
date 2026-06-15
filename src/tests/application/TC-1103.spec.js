const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Reason For DPP Need Three Options Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1103] Verify all three options are displayed in Reason for DPP Need dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch DRT Application
    await loginPage.goto();

    // Step 2: Login
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 3: Navigate to Create Core ASK Page
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Locate Reason for DPP Need field
    await expect(page.locator('select[name*="reasonForDppNeed"]')).toBeVisible();

    // Step 5: Click dropdown
    await coreAskPage.clickReasonForDppNeedDropdown();

    // Step 6: Verify all three options
    const options = await coreAskPage.getReasonForDppNeedOptions();
    expect(options).toEqual(expect.arrayContaining(['Addition', 'Replacement', 'Succession']));
  });
});