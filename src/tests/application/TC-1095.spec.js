const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Role Posting Visible for Executive Director Level', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1095] Verify Role Posting field is visible with 4 options when Executive Director is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Executive Director from Level Needed
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.executiveDirector);

    // Step 4: Verify Role Posting is visible
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBe(true);

    // Step 5: Click Role Posting dropdown
    await coreAskPage.clickRolePostingDropdown();

    // Step 6: Verify all 4 options are displayed
    const options = await coreAskPage.getRolePostingOptions();
    expect(options.length).toBe(4);
    expect(options).toEqual(expect.arrayContaining(TD.rolePosting.all));
  });
});