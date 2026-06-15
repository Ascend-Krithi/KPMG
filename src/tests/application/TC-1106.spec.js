const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Succession - Outgoing Resource Editable', { tag: ['@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1106] Verify Outgoing Resource is editable textbox for Succession', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1-3: Launch, login, navigate
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Select Succession
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeed.succession);

    // Step 5: Verify field is editable
    const isEditable = await coreAskPage.isOutgoingResourceEditable();
    expect(isEditable).toBe(true);

    // Step 6: Enter text
    await coreAskPage.fillOutgoingResource('Jane Smith - Director');
    const value = await coreAskPage.getOutgoingResourceValue();
    expect(value).toBe('Jane Smith - Director');
  });
});