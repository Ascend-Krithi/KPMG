const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-003: Succession Reason Field Behavior', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-003 TC-002] Verify Succession enables Outgoing Resource and Retirement Date fields', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectReasonForDppNeed(TD.reasonForDppNeed.succession);

    const isOutgoingDisabled = await createCoreAsk.isOutgoingResourceDisabled();
    await expect(isOutgoingDisabled).toBe(false);

    await createCoreAsk.fillOutgoingResource('Sarah Johnson');
    const outgoingValue = await createCoreAsk.getOutgoingResourceValue();
    await expect(outgoingValue).toBe('Sarah Johnson');

    const isRetirementDisabled = await createCoreAsk.isRetirementDateDisabled();
    await expect(isRetirementDisabled).toBe(false);

    await createCoreAsk.fillRetirementDate('2025-06-30');
    const retirementValue = await createCoreAsk.getRetirementDateValue();
    await expect(retirementValue).toBeTruthy();
  });
});