const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-003: Outgoing Resource Field Verification for Replacement', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-003 TC-001] Verify Outgoing Resource field is editable when Reason for DPP Need = Replacement', async ({ page }) => {
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
    
    // Step 5: Verify Outgoing Resource field is editable
    const isReadOnly = await coreAskPage.isOutgoingResourceReadOnly();
    expect(isReadOnly).toBeFalsy();
    
    // Step 6: Enter text in Outgoing Resource field
    await coreAskPage.fillOutgoingResource(TD.outgoingResourceName);
    
    // Verify text is accepted and displayed
    const outgoingResourceValue = await coreAskPage.getOutgoingResourceValue();
    expect(outgoingResourceValue).toBe(TD.outgoingResourceName);
  });
});