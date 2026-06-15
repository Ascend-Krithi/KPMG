const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Role Posting Hidden for Managing Director Level', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1094] Verify Role Posting field is hidden when Managing Director is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Managing Director from Level Needed
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.managingDirector);

    // Step 4: Verify Role Posting is not visible
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBe(false);
  });
});