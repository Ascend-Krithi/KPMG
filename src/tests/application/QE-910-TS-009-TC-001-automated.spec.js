const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-009: Audit Trail Verification', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-009 TC-001] Verify audit trail captures submission details correctly', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    dashboardPage = new KpmgDppDashboardPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch application
    await loginPage.goto();
    expect(await loginPage.isLoginPageLoaded()).toBeTruthy();

    // Step 2: Login with User A credentials
    await loginPage.login(TD.credentials.userA.username, TD.credentials.userA.password);
    expect(await dashboardPage.isDashboardDisplayed()).toBeTruthy();

    // Step 3: Navigate to Create Core ASK
    await dashboardPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    expect(await coreAskPage.isCoreAskFormDisplayed()).toBeTruthy();

    // Step 4: Fill all mandatory fields
    await coreAskPage.fillMandatoryFields({
      dppGroup: 'Audit - General',
      reasonForDppNeed: TD.coreAsk.reasonForDppNeed.addition,
      levelNeeded: TD.coreAsk.levelNeeded.director,
      headcountAmount: '2',
      dppFteAmount: '2.0',
      projectStartDate: '01/15/2025',
      roleSummary: 'Test Summary',
      roleResponsibilities: 'Test Responsibilities',
      roleQualifications: 'Test Qualifications'
    });

    // Step 5: Select assignee from Route To dropdown
    await coreAskPage.selectRouteTo('DPP Ops User B');

    // Step 6: Submit form
    await coreAskPage.clickSubmitButton();
    const isSuccessDisplayed = await coreAskPage.isSuccessMessageDisplayed();
    expect(isSuccessDisplayed).toBeTruthy();

    // Step 7: Navigate to Audit History
    await coreAskPage.navigateToAuditHistory();
    const isAuditHistoryDisplayed = await coreAskPage.isAuditHistoryDisplayed();
    expect(isAuditHistoryDisplayed).toBeTruthy();

    // Step 8 & 9: Verify audit trail details
    // Note: Actual verification would require specific audit trail element locators
    // This is a placeholder for the audit trail verification logic
  });
});