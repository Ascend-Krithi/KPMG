const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-003: Replacement Reason Field Behavior', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-003 TC-001] Verify Replacement enables Outgoing Resource and Retirement Date fields', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectReasonForDppNeed(TD.reasonForDppNeed.replacement);

    const isOutgoingDisabled = await createCoreAsk.isOutgoingResourceDisabled();
    await expect(isOutgoingDisabled).toBe(false);

    await createCoreAsk.fillOutgoingResource('John Smith');
    const outgoingValue = await createCoreAsk.getOutgoingResourceValue();
    await expect(outgoingValue).toBe('John Smith');

    const isRetirementDisabled = await createCoreAsk.isRetirementDateDisabled();
    await expect(isRetirementDisabled).toBe(false);

    await createCoreAsk.clickRetirementDatePicker();
    await createCoreAsk.fillRetirementDate('2024-12-31');
    const retirementValue = await createCoreAsk.getRetirementDateValue();
    await expect(retirementValue).toBeTruthy();
  });
});