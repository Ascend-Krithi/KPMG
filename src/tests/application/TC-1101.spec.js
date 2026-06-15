const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: DPP Group Audit Category Options Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1101] Verify Audit category options are displayed in DPP Group dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch DRT Application
    await loginPage.goto();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Login with DPP Ops credentials
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 3: Navigate to Create Core ASK Page
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 4: Click DPP Group dropdown
    await coreAskPage.clickDppGroupDropdown();

    // Step 5: Verify Audit options
    const options = await coreAskPage.getDppGroupOptions();
    TD.dppGroups.audit.forEach(auditOption => {
      expect(options).toContain(auditOption);
    });
  });
});