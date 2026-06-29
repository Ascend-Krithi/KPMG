const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-009: Verify DPP Leadership can only route to DPP Ops', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-009 TC-001] Verify DPP Leadership user can only see DPP Ops option in Route To dropdown', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with DPP Leadership role credentials
    // Assuming DPP Leadership user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Fill all mandatory fields with valid data
    await coreAskPage.selectDppGroup(TD.dppGroups.nbSOQMGlobal);
    await coreAskPage.selectReasonForNeed(TD.reasonForNeed.succession);
    await coreAskPage.fillOutgoingResource('Senior Leader');
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.srManager);
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialty.leadership);
    await coreAskPage.fillSpecialtyDetails('Team Lead');
    await coreAskPage.fillHeadcount('1');
    await coreAskPage.fillFTE('1.0');
    await coreAskPage.fillRetirementDate('06/30/2025');
    await coreAskPage.fillStartDate('07/01/2025');
    await coreAskPage.fillRoleSummary('Test');
    await coreAskPage.fillRoleResponsibilities('Test');
    await coreAskPage.fillRoleQualifications('Test');

    // Step 5: Locate Route To dropdown and click on it
    await coreAskPage.clickRouteToDropdown();

    // Step 6: Verify that only 'DPP Ops' option is available
    const allOptions = await coreAskPage.getAllRouteToOptions();
    expect(allOptions).toContain(TD.routeTo.dppOps);
    // Verify NBL and DPP Leadership are NOT available
    expect(allOptions).not.toContain(TD.routeTo.nbl);
    expect(allOptions).not.toContain(TD.routeTo.dppLeadership);

    // Step 7: Select 'DPP Ops' from the Route To dropdown
    await coreAskPage.selectRouteTo(TD.routeTo.dppOps);
    const selectedValue = await coreAskPage.getSelectedRouteTo();
    expect(selectedValue).toBe(TD.routeTo.dppOps);

    // Step 8: Click on Submit button
    await coreAskPage.clickSubmit();

    // Step 9: Verify task creation and assignment
    // Note: Actual verification depends on application behavior
  });
});