const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Role Posting Hidden for Principal and Managing Director', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1115] Verify Role Posting field is hidden for Principal and Managing Director', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Principal
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.principal);

    // Step 5: Verify Role Posting is hidden
    let isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(false);

    // Step 6: Select Managing Director
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.managingDirector);

    // Step 7: Verify Role Posting remains hidden
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(false);
  });
});