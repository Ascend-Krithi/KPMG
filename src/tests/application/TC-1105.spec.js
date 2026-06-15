const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Replacement - Outgoing Resource Editable', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1105] Verify Outgoing Resource is editable textbox for Replacement', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Replacement
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeed.replacement);

    // Step 5: Verify field is editable
    const isEditable = await coreAskPage.isOutgoingResourceEditable();
    expect(isEditable).toBe(true);

    // Step 6: Enter text
    await coreAskPage.fillOutgoingResource('John Doe - Senior Manager');
    const value = await coreAskPage.getOutgoingResourceValue();
    expect(value).toBe('John Doe - Senior Manager');
  });
});