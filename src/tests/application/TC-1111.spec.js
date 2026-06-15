const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Addition - Retirement Date Auto-populated N/A', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1111] Verify Retirement Date is auto-populated with N/A and read-only for Addition', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Addition
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeed.addition);

    // Step 5: Verify value is N/A
    const value = await coreAskPage.getRetirementDateValue();
    expect(value).toBe(TD.fieldValues.notApplicable);

    // Step 6: Verify field is read-only
    const isReadOnly = await coreAskPage.isRetirementDateReadOnly();
    expect(isReadOnly).toBe(true);
  });
});