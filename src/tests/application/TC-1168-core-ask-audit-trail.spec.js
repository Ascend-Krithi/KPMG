const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-009: Core ASK Audit Trail and Task Assignment', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1168] Test Case - QE-910 TS-009 TC-001: Verify Audit Trail and Task Creation', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application in a browser
    await loginPage.goto();
    const isLoginPageLoaded = await loginPage.isLoginPageLoaded();
    expect(isLoginPageLoaded).toBeTruthy();

    // Step 2: Login with valid user credentials
    await loginPage.loginWithUserA();
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click 'Create Core ASK'
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCreateCoreAskFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();

    // Step 4: Fill all mandatory fields in the form
    await coreAskPage.fillMandatoryFields(TD.coreAskForm);
    const dppGroupValue = await page.locator('select[name="dppGroup"]').inputValue();
    expect(dppGroupValue).toBe(TD.coreAskForm.dppGroup);

    // Step 5: Select assignee from 'Route To' dropdown
    await coreAskPage.selectRouteToOption(TD.routeToOptions.dppOpsUserB);
    const selectedValue = await page.locator('select[name="routeTo"]').inputValue();
    expect(selectedValue).toBe(TD.routeToOptions.dppOpsUserB);

    // Step 6: Click Submit button
    await coreAskPage.clickSubmit();
    const isConfirmationDisplayed = await coreAskPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    const confirmationText = await coreAskPage.getConfirmationMessage();
    expect(confirmationText).toContain(TD.successMessages.formSubmitted);

    // Step 7: Navigate to Audit History section for the submitted Core ASK
    await coreAskPage.navigateToAuditHistory();
    const isAuditHistoryDisplayed = await coreAskPage.isAuditHistoryPageDisplayed();
    expect(isAuditHistoryDisplayed).toBeTruthy();

    // Step 8: Verify submission details in audit trail
    const submittedBy = await coreAskPage.getAuditHistorySubmittedBy();
    expect(submittedBy).toContain('User A');
    
    const assignedTo = await coreAskPage.getAuditHistoryAssignedTo();
    expect(assignedTo).toContain('DPP Ops User B');
    
    const timestamp = await coreAskPage.getAuditHistoryTimestamp();
    expect(timestamp).toBeTruthy();
    
    const currentDate = new Date().toLocaleDateString();
    expect(timestamp).toContain(currentDate);

    // Step 9: Verify task creation for assigned user
    await coreAskPage.navigateToTaskList();
    const isTaskAssigned = await coreAskPage.isTaskAssignedToUser('DPP Ops User B');
    expect(isTaskAssigned).toBeTruthy();
  });
});