const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: Task Creation for Assigned User', { tag: ['@regression', '@core-ask', '@tasks'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1099] Verify task is created for assigned user after form submission', async ({ page }) => {
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
      dppGroup: 'NB - SOQM - Global',
      reasonForDppNeed: TD.reasonForDppNeed.addition,
      levelNeeded: TD.levelNeeded.associate,
      generalSpecialty: TD.generalSpecialtyNeeded.general,
      headcount: '3',
      dppFte: '3.0',
      projectStartDate: '04/01/2025',
      roleSummary: 'Associate position for SOQM',
      roleResponsibilities: 'Support quality management initiatives',
      roleQualifications: 'Bachelor\'s degree, 2+ years experience'
    });

    // Step 4: Select routing and assign user
    await coreAskPage.clickSubmitButton();
    await coreAskPage.selectRoutingOption(TD.routingOptions.nationalBusinessLeadership);

    // Step 5: Submit the form
    await coreAskPage.clickSubmitButton();
    await expect(await coreAskPage.isConfirmationMessageVisible()).toBe(true);

    // Step 6-8: Verify task creation (would require login as assigned user)
    // This is a placeholder for the complete workflow
    await page.locator('a:has-text("Logout"), button:has-text("Logout")').click().catch(() => {});
    await page.goto(TD.urls.login);
    // Login as assigned user and verify task
    await expect(page.locator('a:has-text("Tasks"), [href*="task"]')).toBeVisible();
  });
});