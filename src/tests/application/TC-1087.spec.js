const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Succession - Outgoing Resource and Retirement Date Editable', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1087] Verify Outgoing Resource and Retirement Date are editable when Succession is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Succession from Reason For DPP Need
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeed.succession);

    // Step 4: Verify Outgoing Resource is editable
    const isOutgoingEditable = await coreAskPage.isOutgoingResourceEditable();
    expect(isOutgoingEditable).toBe(true);

    // Step 5: Enter text in Outgoing Resource field
    await coreAskPage.fillOutgoingResource(TD.testData.outgoingResourceSuccession);
    const outgoingValue = await coreAskPage.getOutgoingResourceValue();
    expect(outgoingValue).toBe(TD.testData.outgoingResourceSuccession);

    // Step 6: Verify Retirement Date shows date picker
    const isDatePickerVisible = await coreAskPage.isDatePickerVisible();
    expect(isDatePickerVisible).toBe(true);

    // Step 7: Select a date
    await coreAskPage.selectRetirementDate(TD.testData.retirementDateSuccession);
    const retirementValue = await coreAskPage.getRetirementDateValue();
    expect(retirementValue).toContain('2026');
  });
});