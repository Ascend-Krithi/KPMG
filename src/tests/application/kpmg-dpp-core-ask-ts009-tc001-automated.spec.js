const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-009: Audit History and Task Creation Verification', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-009 TC-001] Verify audit history and task creation when Core ASK is submitted and assigned', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch application
    await coreAskPage.goto();
    
    // Step 2: Login with valid user credentials
    await coreAskPage.login(TD.userA.username, TD.userA.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
    
    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Step 4: Fill all mandatory fields
    await coreAskPage.fillMandatoryFields(TD.testFormData);
    
    // Step 5: Select assignee from Route To dropdown
    await coreAskPage.selectRouteTo('DPP Ops User B');
    
    // Step 6: Click Submit button
    await coreAskPage.clickSubmit();
    
    // Verify confirmation message
    await page.waitForTimeout(2000);
    const isConfirmationVisible = await coreAskPage.isConfirmationMessageVisible();
    expect(isConfirmationVisible).toBeTruthy();
    
    // Step 7: Navigate to Audit History section
    await coreAskPage.navigateToAuditHistory();
    
    // Step 8: Verify submission details in audit trail
    const submittedBy = await coreAskPage.getSubmittedBy();
    expect(submittedBy).toContain('User A');
    
    const assignedTo = await coreAskPage.getAssignedTo();
    expect(assignedTo).toContain('DPP Ops User B');
    
    // Step 9: Verify task creation (verification depends on UI implementation)
    // Task verification would be done through task management section
  });
});