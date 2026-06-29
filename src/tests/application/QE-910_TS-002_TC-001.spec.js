const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-002: Addition Reason Auto-populates N/A Fields', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-002 TC-001] Verify Outgoing Resource and Retirement Date auto-populate with N/A when Addition is selected', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectReasonForDppNeed(TD.reasonForDppNeed.addition);

    const outgoingResourceValue = await createCoreAsk.getOutgoingResourceValue();
    await expect(outgoingResourceValue).toBe(TD.fieldValues.na);

    const isOutgoingDisabled = await createCoreAsk.isOutgoingResourceDisabled();
    await expect(isOutgoingDisabled).toBe(true);

    const retirementDateValue = await createCoreAsk.getRetirementDateValue();
    await expect(retirementDateValue).toBe(TD.fieldValues.na);

    const isRetirementDisabled = await createCoreAsk.isRetirementDateDisabled();
    await expect(isRetirementDisabled).toBe(true);
  });
});