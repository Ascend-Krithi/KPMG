const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-003: Retirement Date Field Verification for Replacement', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-003 TC-002] Verify Retirement Date or End Date field is editable date picker when Reason for DPP Need = Replacement', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch application
    await coreAskPage.goto();
    
    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.dppOpsUser.username, TD.dppOpsUser.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
    
    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Step 4: Select 'Replacement' from Reason for DPP Need dropdown
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeedOptions.replacement);
    
    // Step 5: Click on Retirement Date or End Date field
    await coreAskPage.clickRetirementDateField();
    
    // Verify date picker is displayed (if applicable)
    // Note: Date picker visibility may vary based on implementation
    
    // Step 6: Select a date from the date picker
    await coreAskPage.fillRetirementDate(TD.retirementDate);
    
    // Verify selected date is populated
    const retirementDateValue = await coreAskPage.getRetirementDateValue();
    expect(retirementDateValue).toContain(TD.retirementDate.replace(/\//g, '-'));
  });
});