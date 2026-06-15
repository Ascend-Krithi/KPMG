const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-006: Executive Director Level - Role Posting Field Visibility and Options', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-006 TC-001] Verify Role Posting field is displayed with all options when Executive Director is selected', async ({ page }) => {
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

    // Step 4: Select Executive Director and verify Role Posting field becomes visible
    await coreAskPage.selectLevelNeeded(TD.coreAsk.levelNeeded.executiveDirector);
    const isRolePostingVisible = await coreAskPage.isRolePostingFieldVisible();
    expect(isRolePostingVisible).toBeTruthy();

    // Step 5: Click on Role Posting dropdown
    await coreAskPage.clickRolePostingDropdown();
    const options = await coreAskPage.getRolePostingOptions();
    
    // Verify all options are present
    expect(options).toContain(TD.coreAsk.rolePosting.internal);
    expect(options).toContain(TD.coreAsk.rolePosting.external);
    expect(options).toContain(TD.coreAsk.rolePosting.both);
    expect(options).toContain(TD.coreAsk.rolePosting.na);

    // Step 6: Select Internal option
    await coreAskPage.selectRolePosting(TD.coreAsk.rolePosting.internal);
  });
});