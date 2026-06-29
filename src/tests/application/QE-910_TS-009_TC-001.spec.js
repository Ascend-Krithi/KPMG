const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-009: Empty Route To Group Validation', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-009 TC-001] Verify validation error when Route To group has no active users', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.fillMandatoryFields({
      dppGroup: 'ASG - TT member',
      reason: TD.reasonForDppNeed.addition,
      level: TD.levelNeeded.associate,
      generalSpecialty: TD.generalSpecialtyOptions.general,
      headcount: '3',
      fte: '3.0',
      startDate: '2025-02-01',
      roleSummary: 'Associate for TT member',
      roleResponsibilities: 'Support team activities',
      roleQualifications: 'Bachelor\'s degree'
    });

    await createCoreAsk.selectRouteTo('Test_Group_No_Users');
    await createCoreAsk.clickSubmit();

    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    const errorMessage = page.locator('text=/no active users/i, .error-message, .validation-error');
    await expect(errorMessage).toBeVisible();
  });
});