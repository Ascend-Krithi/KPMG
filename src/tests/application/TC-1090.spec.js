const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: General/Specialty Needed - Leadership Position Additional Textbox', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1090] Verify additional textbox appears when Leadership position is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Leadership position from General/Specialty Needed
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialtyNeeded.leadership);

    // Step 4: Verify additional textbox appears
    const isTextBoxVisible = await coreAskPage.isLeadershipTextBoxVisible();
    expect(isTextBoxVisible).toBe(true);

    // Step 5: Enter leadership details
    await coreAskPage.fillLeadershipDetails(TD.testData.leadershipDetails);
    await expect(page.locator('input[name*="leadershipDetails"], textarea[name*="leadership"]')).toHaveValue(TD.testData.leadershipDetails);
  });
});