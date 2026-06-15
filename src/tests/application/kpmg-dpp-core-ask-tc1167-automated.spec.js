const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-008: Core ASK Route To Dropdown Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[TC-1167] Verify Route To dropdown displays NBL, DPP Leadership - Audit, DPP Leadership - ASG, DPP Leadership - National Business options', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Login with DPP Ops role credentials
    await coreAskPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    await expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click 'Create Core ASK'
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    await expect(isFormVisible).toBeTruthy();

    // Step 4: Fill all mandatory fields in the form
    const formData = {
      dppGroup: TD.coreAskForm.dppGroup.auditGeneral,
      reasonForDppNeed: TD.coreAskForm.reasonForDppNeed.addition,
      levelNeeded: TD.coreAskForm.levelNeeded.director,
      headcountAmount: TD.coreAskForm.headcountAmount,
      dppFteAmount: TD.coreAskForm.dppFteAmount,
      projectStartDate: TD.coreAskForm.projectStartDate,
      roleSummary: TD.coreAskForm.roleSummary,
      roleResponsibilities: TD.coreAskForm.roleResponsibilities,
      roleQualifications: TD.coreAskForm.roleQualifications
    };
    await coreAskPage.fillCoreAskForm(formData);

    // Step 5: Click on 'Route To' dropdown
    await coreAskPage.clickRouteToDropdown();
    const isDropdownExpanded = await coreAskPage.isRouteToDropdownExpanded();
    await expect(isDropdownExpanded).toBeTruthy();

    // Verify dropdown options
    const routeToOptions = await coreAskPage.getRouteToOptions();
    await expect(routeToOptions).toContain(TD.routeToOptions.nbl);
    await expect(routeToOptions).toContain(TD.routeToOptions.dppLeadershipAudit);
    await expect(routeToOptions).toContain(TD.routeToOptions.dppLeadershipAsg);
    await expect(routeToOptions).toContain(TD.routeToOptions.dppLeadershipNationalBusiness);

    // Step 6: Select 'NBL' from the 'Route To' dropdown
    await coreAskPage.selectRouteTo(TD.routeToOptions.nbl);

    // Step 7: Click Submit button
    await coreAskPage.clickSubmit();
    const isConfirmationVisible = await coreAskPage.isConfirmationMessageVisible();
    await expect(isConfirmationVisible).toBeTruthy();

    const confirmationMessage = await coreAskPage.getConfirmationMessage();
    await expect(confirmationMessage).toContain(TD.messages.confirmationDisplayed);
  });
});