const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-004: Specialty Selection - Additional Field Display', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-004 TC-001] Verify additional textbox appears when Specialty is selected', async ({ page }) => {
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

    // Step 4: Click on General/Specialty Needed dropdown
    await coreAskPage.clickGeneralSpecialtyNeededDropdown();
    const options = await coreAskPage.getGeneralSpecialtyNeededOptions();
    expect(options).toContain(TD.coreAsk.generalSpecialtyNeeded.general);
    expect(options).toContain(TD.coreAsk.generalSpecialtyNeeded.specialty);
    expect(options).toContain(TD.coreAsk.generalSpecialtyNeeded.leadershipPosition);

    // Step 5: Select Specialty
    await coreAskPage.selectGeneralSpecialtyNeeded(TD.coreAsk.generalSpecialtyNeeded.specialty);
    
    // Verify additional textbox appears
    const isSpecialtyDetailsVisible = await coreAskPage.isSpecialtyDetailsFieldVisible();
    expect(isSpecialtyDetailsVisible).toBeTruthy();

    // Step 6: Enter specialty details
    await coreAskPage.enterSpecialtyDetails('Financial Services Audit Specialist');
  });
});