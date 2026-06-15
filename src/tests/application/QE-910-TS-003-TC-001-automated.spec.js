const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-003: Replacement Reason - Outgoing Resource Field Behavior', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-003 TC-001] Verify Outgoing Resource field is editable when Replacement is selected', async ({ page }) => {
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

    // Step 4: Select Replacement
    await coreAskPage.selectReasonForDppNeed(TD.coreAsk.reasonForDppNeed.replacement);

    // Step 5: Verify Outgoing Resource field is editable
    const isReadOnly = await coreAskPage.isOutgoingResourceReadOnly();
    expect(isReadOnly).toBeFalsy();

    // Step 6: Enter text in Outgoing Resource field
    await coreAskPage.enterOutgoingResource('John Doe');
    const value = await coreAskPage.getOutgoingResourceValue();
    expect(value).toBe('John Doe');
  });
});