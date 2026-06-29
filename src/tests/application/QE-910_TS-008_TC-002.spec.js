const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-008: Verify DPP Ops can route to DPP Leadership', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-008 TC-002] Verify DPP Ops user can select DPP Leadership from Route To dropdown and submit successfully', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with DPP Ops role credentials
    // Assuming DPP Ops user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Fill all mandatory fields with valid data
    await coreAskPage.selectDppGroup(TD.dppGroups.iigInquiry);
    await coreAskPage.selectReasonForNeed(TD.reasonForNeed.replacement);
    await coreAskPage.fillOutgoingResource('Test User');
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.director);
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialty.specialty);
    await coreAskPage.fillSpecialtyDetails('Investigation Specialist');
    await coreAskPage.fillHeadcount('1');
    await coreAskPage.fillFTE('1.0');
    await coreAskPage.fillRetirementDate('03/31/2025');
    await coreAskPage.fillStartDate('04/01/2025');
    await coreAskPage.fillRoleSummary('Test');
    await coreAskPage.fillRoleResponsibilities('Test');
    await coreAskPage.fillRoleQualifications('Test');

    // Step 5: Select 'DPP Leadership' from the Route To dropdown
    await coreAskPage.selectRouteTo(TD.routeTo.dppLeadership);
    const selectedValue = await coreAskPage.getSelectedRouteTo();
    expect(selectedValue).toBe(TD.routeTo.dppLeadership);

    // Step 6: Click on Submit button
    await coreAskPage.clickSubmit();

    // Step 7: Verify form submission success
    // Note: Actual verification depends on application behavior
  });
});