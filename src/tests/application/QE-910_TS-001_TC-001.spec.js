const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-001: DPP Group Dropdown Verification', { tag: ['@smoke', '@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-001 TC-001] Verify DPP Group dropdown displays all 17 options and allows selection', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.login);

    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.clickDppGroupDropdown();
    const options = await createCoreAsk.getDppGroupOptions();
    
    await expect(options.length).toBeGreaterThanOrEqual(17);
    
    for (const expectedOption of TD.dppGroupOptions) {
      await expect(options).toContain(expectedOption);
    }

    await createCoreAsk.selectDppGroup('Audit - Banking');
    const selectedValue = await createCoreAsk.getSelectedDppGroup();
    await expect(selectedValue).toContain('Audit - Banking');
  });
});