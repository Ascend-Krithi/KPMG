const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-001: DPP Group Dropdown Options Verification', { tag: ['@smoke', '@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-001 TC-001] Verify all 17 DPP Group options are displayed in dropdown', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    dashboardPage = new KpmgDppDashboardPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await loginPage.goto();
    const isLoginPageLoaded = await loginPage.isLoginPageLoaded();
    expect(isLoginPageLoaded).toBeTruthy();

    // Step 2 & 3: Enter credentials and login
    await loginPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);
    
    // Verify dashboard is displayed
    const isDashboardDisplayed = await dashboardPage.isDashboardDisplayed();
    expect(isDashboardDisplayed).toBeTruthy();

    // Step 4: Navigate to Core ASK section
    await dashboardPage.navigateToCoreAsk();

    // Step 5: Click on Create Core ASK button
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCoreAskFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();

    // Step 6: Click on DPP Group dropdown
    await coreAskPage.clickDppGroupDropdown();

    // Step 7: Verify all 17 options are displayed
    const options = await coreAskPage.getDppGroupOptions();
    expect(options.length).toBe(17);
    
    // Verify each expected option is present
    TD.coreAsk.dppGroupOptions.forEach(expectedOption => {
      expect(options).toContain(expectedOption);
    });
  });
});