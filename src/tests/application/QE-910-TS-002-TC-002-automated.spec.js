const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-002: Addition Reason - Retirement Date Field Behavior', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-002 TC-002] Verify Retirement Date field is auto-populated with N/A and read-only when Addition is selected', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    dashboardPage = new KpmgDppDashboardPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch application
    await loginPage.goto();
    expect(await loginPage.isLoginPageLoaded()).toBeTruthy();

    // Step 2: Login
    await loginPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);
    expect(await dashboardPage.isDashboardDisplayed()).toBeTruthy();

    // Step 3: Navigate to Create Core ASK
    await dashboardPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    expect(await coreAskPage.isCoreAskFormDisplayed()).toBeTruthy();

    // Step 4: Select Addition from Reason for DPP Need
    await coreAskPage.selectReasonForDppNeed(TD.coreAsk.reasonForDppNeed.addition);

    // Step 5: Verify Retirement Date field is auto-populated with N/A
    const retirementDateValue = await coreAskPage.getRetirementDateValue();
    expect(retirementDateValue).toBe(TD.coreAsk.fieldValues.naValue);

    // Step 6: Verify field is read-only
    const isReadOnly = await coreAskPage.isRetirementDateReadOnly();
    expect(isReadOnly).toBeTruthy();
  });
});