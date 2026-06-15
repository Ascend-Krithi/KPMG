const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: General/Specialty Needed - Specialty Additional Textbox', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1089] Verify additional textbox appears when Specialty is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Select Specialty from General/Specialty Needed
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialtyNeeded.specialty);

    // Step 4: Verify additional textbox appears
    const isTextBoxVisible = await coreAskPage.isSpecialtyTextBoxVisible();
    expect(isTextBoxVisible).toBe(true);

    // Step 5: Enter specialty details
    await coreAskPage.fillSpecialtyDetails(TD.testData.specialtyDetails);
    await expect(page.locator('input[name*="specialtyDetails"], textarea[name*="specialty"]')).toHaveValue(TD.testData.specialtyDetails);
  });
});