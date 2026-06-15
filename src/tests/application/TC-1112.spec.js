const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Replacement - Retirement Date Date Picker', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1112] Verify Retirement Date displays date picker for Replacement', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Replacement
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeed.replacement);

    // Step 5: Verify date picker is enabled
    const isEditable = await coreAskPage.isRetirementDateEditable();
    expect(isEditable).toBe(true);

    // Step 6: Click date picker
    const isDatePickerVisible = await coreAskPage.isDatePickerVisible();
    expect(isDatePickerVisible).toBe(true);

    // Step 7: Select date
    await coreAskPage.selectRetirementDate('12/31/2024');
    const value = await coreAskPage.getRetirementDateValue();
    expect(value).toContain('2024');
  });
});