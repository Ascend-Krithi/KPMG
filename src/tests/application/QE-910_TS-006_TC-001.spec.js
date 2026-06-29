const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-006: Specialty Selection Shows Detail Textbox', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-006 TC-001] Verify Specialty detail textbox appears when Specialty is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectGeneralSpecialty(TD.generalSpecialtyOptions.specialty);

    const isDetailVisible = await createCoreAsk.isSpecialtyDetailVisible();
    await expect(isDetailVisible).toBe(true);

    await createCoreAsk.fillSpecialtyDetail('Financial Services Audit Specialist');
  });
});