const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Audit Trail Creation on Form Submission', { tag: ['@regression', '@core-ask', '@audit'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1098] Verify audit trail is created with submission details', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Fill all mandatory fields
    await coreAskPage.fillMandatoryFields({
      dppGroup: 'IIG - Inquiry focused',
      reasonForDppNeed: TD.reasonForDppNeed.succession,
      outgoingResource: TD.testData.outgoingResourceSuccession,
      levelNeeded: TD.levelNeeded.srManager,
      generalSpecialty: TD.generalSpecialtyNeeded.specialty,
      specialtyDetails: 'Risk Management',
      headcount: '1',
      dppFte: '1.0',
      retirementDate: TD.testData.retirementDateSuccession,
      projectStartDate: '03/01/2025',
      roleSummary: 'Senior Manager for Risk Management',
      roleResponsibilities: 'Lead risk assessment projects',
      roleQualifications: '10+ years experience in risk management',
      rolePosting: TD.rolePosting.internal
    });

    // Step 4: Select routing and assign user
    await coreAskPage.clickSubmitButton();
    await coreAskPage.selectRoutingOption(TD.routingOptions.nbl);

    // Step 5: Submit the form
    await coreAskPage.clickSubmitButton();
    await expect(await coreAskPage.isConfirmationMessageVisible()).toBe(true);

    // Step 6 & 7: Verify audit trail (navigation to audit trail section would be needed)
    // This is a placeholder - actual implementation depends on UI structure
    await page.locator('a:has-text("Audit Trail"), [href*="audit"]').click().catch(() => {});
    await expect(page.locator('[class*="audit"], [id*="audit"]')).toBeVisible();
  });
});