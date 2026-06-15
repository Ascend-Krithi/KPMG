const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppDashboardPage = require('../../pages/kpmg-dpp-dashboard.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-005: Partner Level - Role Posting Field Visibility', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let dashboardPage;
  let coreAskPage;

  test('[QE-910 TS-005 TC-001] Verify Role Posting field is not displayed when Partner is selected', async ({ page }) => {
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

    // Step 4: Select Partner from Level Needed
    await coreAskPage.selectLevelNeeded(TD.coreAsk.levelNeeded.partner);

    // Step 5: Verify Role Posting field is not visible
    const isRolePostingVisible = await coreAskPage.isRolePostingFieldVisible();
    expect(isRolePostingVisible).toBeFalsy();
  });
});