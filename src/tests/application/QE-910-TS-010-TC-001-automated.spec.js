const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-010: Mandatory Field Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-010 TC-001] Verify validation messages are displayed for all mandatory fields when form is submitted blank', async ({ page }) => {
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

    // Step 4: Leave all mandatory fields blank (no action needed)

    // Step 5: Click Submit button
    await coreAskPage.clickSubmitButton();

    // Step 6: Verify validation messages for each mandatory field
    const validationChecks = [
      { field: 'DPP Group', message: TD.validationMessages.dppGroupRequired },
      { field: 'Reason for DPP Need', message: TD.validationMessages.reasonForDppNeedRequired },
      { field: 'Level Needed', message: TD.validationMessages.levelNeededRequired },
      { field: 'Headcount Amount', message: TD.validationMessages.headcountAmountRequired },
      { field: 'DPP FTE Amount', message: TD.validationMessages.dppFteAmountRequired },
      { field: 'Project Start Date', message: TD.validationMessages.projectStartDateRequired },
      { field: 'Role Summary', message: TD.validationMessages.roleSummaryRequired },
      { field: 'Role Responsibilities', message: TD.validationMessages.roleResponsibilitiesRequired },
      { field: 'Role Qualifications', message: TD.validationMessages.roleQualificationsRequired }
    ];

    // Verify each validation message is displayed
    for (const check of validationChecks) {
      const isDisplayed = await coreAskPage.isValidationMessageDisplayed(check.field);
      expect(isDisplayed).toBeTruthy();
    }

    // Verify form is not submitted (success message should not be displayed)
    const isSuccessDisplayed = await coreAskPage.isSuccessMessageDisplayed();
    expect(isSuccessDisplayed).toBeFalsy();
  });
});