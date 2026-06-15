const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/drt-test-data');

test.describe('[UI] QE-910: DPP Ops Routing to Multiple Groups', { tag: ['@regression', '@core-ask', '@routing'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1097] Verify DPP Ops can route to NBL and Leadership groups', async ({ page }) => {
    loginPage = new LoginPage(page);
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch and login with DPP Ops
    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await expect(await loginPage.isDashboardVisible()).toBe(true);

    // Step 2: Navigate to Core ASK and click Create
    await coreAskPage.navigateToCoreAskModule();
    await coreAskPage.clickCreateCoreAsk();

    // Step 3: Fill all mandatory fields
    await coreAskPage.fillMandatoryFields({
      dppGroup: 'ASG - Group support',
      reasonForDppNeed: TD.reasonForDppNeed.replacement,
      outgoingResource: TD.testData.outgoingResource,
      levelNeeded: TD.levelNeeded.director,
      generalSpecialty: TD.generalSpecialtyNeeded.general,
      headcount: '1',
      dppFte: '1.0',
      retirementDate: TD.testData.retirementDate,
      projectStartDate: '02/01/2025',
      roleSummary: TD.testData.roleSummary,
      roleResponsibilities: TD.testData.roleResponsibilities,
      roleQualifications: TD.testData.roleQualifications
    });

    // Step 4: Click Submit button
    await coreAskPage.clickSubmitButton();

    // Step 5: Verify multiple routing options are available
    const routingOptions = await coreAskPage.getAvailableRoutingOptions();
    expect(routingOptions.length).toBeGreaterThan(1);
    expect(routingOptions).toEqual(expect.arrayContaining([
      TD.routingOptions.nbl,
      TD.routingOptions.auditLeadership,
      TD.routingOptions.asgLeadership,
      TD.routingOptions.nationalBusinessLeadership
    ]));

    // Step 6: Select NBL and submit
    await coreAskPage.selectRoutingOption(TD.routingOptions.nbl);
    await coreAskPage.clickSubmitButton();
    await expect(await coreAskPage.isConfirmationMessageVisible()).toBe(true);
  });
});