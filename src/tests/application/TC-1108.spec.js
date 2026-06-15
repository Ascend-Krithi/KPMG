const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: General/Specialty Needed Three Options Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1108] Verify all three options in General/Specialty Needed dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Click dropdown
    await coreAskPage.clickGeneralSpecialtyDropdown();

    // Step 5: Verify all three options
    const options = await coreAskPage.getGeneralSpecialtyOptions();
    expect(options).toEqual(expect.arrayContaining(['General', 'Specialty', 'Leadership position']));
  });
});