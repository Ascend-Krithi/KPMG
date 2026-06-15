const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-002: Retirement Date Field Verification for Addition', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-002 TC-002] Verify Retirement Date or End Date field is N/A and read-only when Reason for DPP Need = Addition', async ({ page }) => {
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
    
    // Step 4: Select 'Addition' from Reason for DPP Need dropdown
    await coreAskPage.selectReasonForDppNeed(TD.reasonForDppNeedOptions.addition);
    
    // Step 5: Verify Retirement Date or End Date field value is N/A
    const retirementDateValue = await coreAskPage.getRetirementDateValue();
    expect(retirementDateValue).toBe(TD.naValue);
    
    // Step 6: Verify field is read-only
    const isReadOnly = await coreAskPage.isRetirementDateReadOnly();
    expect(isReadOnly).toBeTruthy();
  });
});