const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Leadership Position - Additional Textbox Appears', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1110] Verify additional textbox appears when Leadership position is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Leadership position
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialtyNeeded.leadership);

    // Step 5: Verify textbox appears
    const isVisible = await coreAskPage.isLeadershipTextBoxVisible();
    expect(isVisible).toBe(true);

    // Step 6: Enter text
    await coreAskPage.fillLeadershipDetails('Regional Practice Leader');
    await expect(page.locator('input[name*="leadershipDetails"], textarea[name*="leadership"]')).toHaveValue('Regional Practice Leader');
  });
});