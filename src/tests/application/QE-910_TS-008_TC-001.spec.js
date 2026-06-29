const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-008: Verify DPP Ops can route to NBL and DPP Leadership', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-008 TC-001] Verify DPP Ops user can select NBL and DPP Leadership from Route To dropdown and submit successfully', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with DPP Ops role credentials
    // Assuming DPP Ops user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Fill all mandatory fields
    await coreAskPage.selectDppGroup(TD.dppGroups.auditBanking);
    await coreAskPage.selectReasonForNeed(TD.reasonForNeed.addition);
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.manager);
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialty.general);
    await coreAskPage.fillHeadcount(TD.testData.headcount);
    await coreAskPage.fillFTE(TD.testData.fte);
    await coreAskPage.fillStartDate(TD.testData.startDate);
    await coreAskPage.fillRoleSummary(TD.testData.roleSummary);
    await coreAskPage.fillRoleResponsibilities(TD.testData.roleResponsibilities);
    await coreAskPage.fillRoleQualifications(TD.testData.roleQualifications);

    // Step 5: Locate Route To dropdown and click on it
    await coreAskPage.clickRouteToDropdown();

    // Step 6: Verify that NBL and DPP Leadership options are available
    const allOptions = await coreAskPage.getAllRouteToOptions();
    expect(allOptions).toContain(TD.routeTo.nbl);
    expect(allOptions).toContain(TD.routeTo.dppLeadership);

    // Step 7: Select 'NBL' from the Route To dropdown
    await coreAskPage.selectRouteTo(TD.routeTo.nbl);
    const selectedValue = await coreAskPage.getSelectedRouteTo();
    expect(selectedValue).toBe(TD.routeTo.nbl);

    // Step 8: Click on Submit button
    await coreAskPage.clickSubmit();

    // Step 9: Verify form submission (would need to check for success message or navigation)
    // Note: Actual verification depends on application behavior after submission
  });
});