const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-008: DPP Ops Role - Route To Options', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-008 TC-001] Verify DPP Ops user can route to multiple options including NBL', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    dashboardPage = new KpmgDppDashboardPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch application
    await loginPage.goto();
    expect(await loginPage.isLoginPageLoaded()).toBeTruthy();

    // Step 2: Login with DPP Ops credentials
    await loginPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);
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

    // Step 5: Click on Route To dropdown
    await coreAskPage.clickRouteToDropdown();
    const options = await coreAskPage.getRouteToOptions();
    
    // Verify multiple options are available
    expect(options.length).toBeGreaterThan(1);
    expect(options).toContain(TD.coreAsk.routeTo.nbl);
    expect(options).toContain(TD.coreAsk.routeTo.dppLeadershipAudit);
    expect(options).toContain(TD.coreAsk.routeTo.dppLeadershipAsg);
    expect(options).toContain(TD.coreAsk.routeTo.dppLeadershipNationalBusiness);

    // Step 6: Select NBL
    await coreAskPage.selectRouteTo(TD.coreAsk.routeTo.nbl);

    // Step 7: Submit form
    await coreAskPage.clickSubmitButton();
    const isSuccessDisplayed = await coreAskPage.isSuccessMessageDisplayed();
    expect(isSuccessDisplayed).toBeTruthy();
  });
});