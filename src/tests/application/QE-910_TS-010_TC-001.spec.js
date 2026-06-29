const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-010: Field Reset When Reason Changes', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-010 TC-001] Verify fields reset to N/A when changing from Replacement to Addition', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectReasonForDppNeed(TD.reasonForDppNeed.replacement);
    await createCoreAsk.fillOutgoingResource('Jane Doe');
    await createCoreAsk.fillRetirementDate('2025-06-30');

    let outgoingValue = await createCoreAsk.getOutgoingResourceValue();
    await expect(outgoingValue).toBe('Jane Doe');

    let retirementValue = await createCoreAsk.getRetirementDateValue();
    await expect(retirementValue).toBeTruthy();

    await createCoreAsk.selectReasonForDppNeed(TD.reasonForDppNeed.addition);

    outgoingValue = await createCoreAsk.getOutgoingResourceValue();
    await expect(outgoingValue).toBe(TD.fieldValues.na);

    const isOutgoingDisabled = await createCoreAsk.isOutgoingResourceDisabled();
    await expect(isOutgoingDisabled).toBe(true);

    retirementValue = await createCoreAsk.getRetirementDateValue();
    await expect(retirementValue).toBe(TD.fieldValues.na);

    const isRetirementDisabled = await createCoreAsk.isRetirementDateDisabled();
    await expect(isRetirementDisabled).toBe(true);
  });
});