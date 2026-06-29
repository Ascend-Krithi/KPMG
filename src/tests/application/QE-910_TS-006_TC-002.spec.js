const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-006: Leadership Position Shows Detail Textbox', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-006 TC-002] Verify detail textbox appears when Leadership position is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectGeneralSpecialty(TD.generalSpecialtyOptions.leadership);

    const isDetailVisible = await createCoreAsk.isSpecialtyDetailVisible();
    await expect(isDetailVisible).toBe(true);

    await createCoreAsk.fillSpecialtyDetail('Regional Practice Leader - Audit');
  });
});