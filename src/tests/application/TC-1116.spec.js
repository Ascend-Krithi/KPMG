const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Role Posting Visible for Executive Director with 4 Options', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1116] Verify Role Posting field is visible with 4 options for Executive Director', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Executive Director
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.executiveDirector);

    // Step 5: Verify Role Posting is visible
    const isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 6: Click dropdown
    await coreAskPage.clickRolePostingDropdown();

    // Step 7: Verify all 4 options
    const options = await coreAskPage.getRolePostingOptions();
    expect(options.length).toBe(4);
    expect(options).toEqual(expect.arrayContaining(TD.rolePosting.all));
  });
});