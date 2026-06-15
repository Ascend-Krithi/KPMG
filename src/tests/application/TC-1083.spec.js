const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Core ASK DPP Group Dropdown Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1083] Verify all 17 DPP Group options are displayed in dropdown', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch the application
    await loginPage.goto();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Enter valid username
    await page.locator('input[name="username"]').fill(TD.credentials.dppOps.username);
    await expect(page.locator('input[name="username"]')).toHaveValue(TD.credentials.dppOps.username);

    // Step 3: Enter valid password
    await page.locator('input[name="password"]').fill(TD.credentials.dppOps.password);
    await expect(page.locator('input[name="password"]')).toHaveValue(TD.credentials.dppOps.password);

    // Step 4: Click Login button
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 5: Navigate to Core ASK module
    await coreAskPage.navigateToCoreAskModule();
    await page.waitForLoadState('domcontentloaded');

    // Step 6: Click Create Core ASK button
    await coreAskPage.clickCreateCoreAsk();
    await expect(page.locator('form, [class*="form-container"]')).toBeVisible();

    // Step 7: Click DPP Group dropdown
    await coreAskPage.clickDppGroupDropdown();
    await expect(page.locator('select[name*="dppGroup"], select[id*="dppGroup"]')).toBeVisible();

    // Step 8: Verify all 17 options are displayed
    const options = await coreAskPage.getDppGroupOptions();
    expect(options.length).toBe(17);
    
    TD.dppGroups.all.forEach(expectedOption => {
      expect(options).toContain(expectedOption);
    });
  });
});