const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: General/Specialty Needed - Textbox Hidden for General', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1091] Verify additional textbox is hidden when General is selected after Specialty', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Specialty
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialtyNeeded.specialty);
    await expect(await coreAskPage.isSpecialtyTextBoxVisible()).toBe(true);

    // Step 4: Change to General
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialtyNeeded.general);

    // Step 5: Verify textbox is hidden
    const isTextBoxVisible = await coreAskPage.isSpecialtyTextBoxVisible();
    expect(isTextBoxVisible).toBe(false);
  });
});