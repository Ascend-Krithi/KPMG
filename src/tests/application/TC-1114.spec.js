const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Role Posting Hidden for Partner', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1114] Verify Role Posting field is hidden when Partner is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Partner
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.partner);

    // Step 5: Verify Role Posting is hidden
    const isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(false);
  });
});