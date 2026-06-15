const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Addition - Outgoing Resource and Retirement Date Auto-population', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1085] Verify Outgoing Resource and Retirement Date are auto-populated with N/A when Addition is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Addition from Reason For DPP Need
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeed.addition);

    // Step 4: Verify Outgoing Resource is auto-populated with N/A
    const outgoingResourceValue = await coreAskPage.getOutgoingResourceValue();
    expect(outgoingResourceValue).toBe(TD.fieldValues.notApplicable);

    // Step 5: Verify Outgoing Resource is read-only
    const isOutgoingReadOnly = await coreAskPage.isOutgoingResourceReadOnly();
    expect(isOutgoingReadOnly).toBe(true);

    // Step 6: Verify Retirement Date is auto-populated with N/A
    const retirementDateValue = await coreAskPage.getRetirementDateValue();
    expect(retirementDateValue).toBe(TD.fieldValues.notApplicable);

    // Step 7: Verify Retirement Date is read-only
    const isRetirementReadOnly = await coreAskPage.isRetirementDateReadOnly();
    expect(isRetirementReadOnly).toBe(true);
  });
});