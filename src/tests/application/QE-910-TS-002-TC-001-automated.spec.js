const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-002: Addition Reason - Outgoing Resource Field Behavior', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-002 TC-001] Verify Outgoing Resource field is auto-populated with N/A and read-only when Addition is selected', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    dashboardPage = new KpmgDppDashboardPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch application
    await loginPage.goto();
    expect(await loginPage.isLoginPageLoaded()).toBeTruthy();

    // Step 2: Login with valid credentials
    await loginPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);
    expect(await dashboardPage.isDashboardDisplayed()).toBeTruthy();

    // Step 3: Navigate to Core ASK > Click Create Core ASK
    await dashboardPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    expect(await coreAskPage.isCoreAskFormDisplayed()).toBeTruthy();

    // Step 4: Click on Reason for DPP Need dropdown
    await coreAskPage.clickReasonForDppNeedDropdown();
    const options = await coreAskPage.getReasonForDppNeedOptions();
    expect(options).toContain(TD.coreAsk.reasonForDppNeed.addition);
    expect(options).toContain(TD.coreAsk.reasonForDppNeed.replacement);
    expect(options).toContain(TD.coreAsk.reasonForDppNeed.succession);

    // Step 5: Select Addition
    await coreAskPage.selectReasonForDppNeed(TD.coreAsk.reasonForDppNeed.addition);

    // Step 6: Verify Outgoing Resource field is auto-populated with N/A
    const outgoingResourceValue = await coreAskPage.getOutgoingResourceValue();
    expect(outgoingResourceValue).toBe(TD.coreAsk.fieldValues.naValue);

    // Step 7: Verify field is read-only
    const isReadOnly = await coreAskPage.isOutgoingResourceReadOnly();
    expect(isReadOnly).toBeTruthy();
  });
});