const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Specialty - Additional Textbox Appears', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1109] Verify additional textbox appears when Specialty is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Specialty
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialtyNeeded.specialty);

    // Step 5: Verify textbox appears
    const isVisible = await coreAskPage.isSpecialtyTextBoxVisible();
    expect(isVisible).toBe(true);

    // Step 6: Enter text
    await coreAskPage.fillSpecialtyDetails('Financial Services Audit Specialist');
    await expect(page.locator('input[name*="specialtyDetails"], textarea[name*="specialty"]')).toHaveValue('Financial Services Audit Specialist');
  });
});