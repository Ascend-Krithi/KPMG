const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: DPP Leadership Routing to DPP Ops Only', { tag: ['@regression', '@core-ask', '@routing'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1096] Verify DPP Leadership can only route to DPP Ops', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login with DPP Leadership
    await loginPage.goto();
    await loginPage.loginAsDppLeadership();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Fill all mandatory fields
    await coreAskPage.fillMandatoryFields({
      dppGroup: 'Audit - General',
      reasonForDppNeed: TD.reasonForDppNeed.addition,
      levelNeeded: TD.levelNeeded.manager,
      generalSpecialty: TD.generalSpecialtyNeeded.general,
      headcount: TD.testData.headcountAmount,
      dppFte: TD.testData.dppFteAmount,
      projectStartDate: TD.testData.projectStartDate,
      roleSummary: TD.testData.roleSummary,
      roleResponsibilities: TD.testData.roleResponsibilities,
      roleQualifications: TD.testData.roleQualifications
    });

    // Step 4: Click Submit button
    await coreAskPage.clickSubmitButton();

    // Step 5: Verify only DPP Ops is available
    const routingOptions = await coreAskPage.getAvailableRoutingOptions();
    expect(routingOptions.length).toBe(1);
    expect(routingOptions).toContain(TD.routingOptions.dppOps);

    // Step 6: Select DPP Ops and submit
    await coreAskPage.selectRoutingOption(TD.routingOptions.dppOps);
    await coreAskPage.clickSubmitButton();
    await expect(await coreAskPage.isConfirmationMessageVisible()).toBe(true);
  });
});