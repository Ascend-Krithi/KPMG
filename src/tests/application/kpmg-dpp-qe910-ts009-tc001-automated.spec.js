const { test, expect } = require('../../fixtures');
const KPMGDPPLoginPage = require('../../pages/kpmg-dpp-login.page');
const KPMGDPPCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-009: Core ASK Audit Trail and Task Assignment Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[QE-910 TS-009 TC-001] Verify audit trail captures submission details and task assignment', async ({ page }) => {
    loginPage = new KPMGDPPLoginPage(page);
    coreAskPage = new KPMGDPPCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await loginPage.goto(TD.urls.loginPage);
    await expect(page).toHaveURL(TD.urls.loginPage);

    // Step 2: Login with valid user credentials
    await loginPage.login(TD.credentials.userA.username, TD.credentials.userA.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    await expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCreateCoreAskFormDisplayed();
    await expect(isFormDisplayed).toBeTruthy();

    // Step 4: Fill all mandatory fields in the form
    await coreAskPage.fillAllMandatoryFields(TD.coreAsk);

    // Step 5: Select assignee from 'Route To' dropdown
    await coreAskPage.selectRouteTo(TD.coreAsk.assignedTo);
    const selectedValue = await coreAskPage.getRouteToSelectedValue();
    await expect(selectedValue).toContain(TD.coreAsk.assignedTo);

    // Step 6: Click Submit button
    await coreAskPage.clickSubmit();
    const isConfirmationDisplayed = await coreAskPage.isConfirmationMessageDisplayed();
    await expect(isConfirmationDisplayed).toBeTruthy();

    // Step 7: Navigate to Audit History section for the submitted Core ASK
    await coreAskPage.navigateToAuditHistory();
    const isAuditHistoryDisplayed = await coreAskPage.isAuditHistoryDisplayed();
    await expect(isAuditHistoryDisplayed).toBeTruthy();

    // Step 8: Verify submission details in audit trail
    const submittedBy = await coreAskPage.getSubmittedBy();
    await expect(submittedBy).toContain(TD.auditHistory.submittedByUserA);

    const submissionTimestamp = await coreAskPage.getSubmissionTimestamp();
    await expect(submissionTimestamp).toBeTruthy();

    const assignedTo = await coreAskPage.getAssignedTo();
    await expect(assignedTo).toContain(TD.auditHistory.assignedToUserB);

    // Step 9: Verify task creation for assigned user
    const isTaskCreated = await coreAskPage.isTaskCreated();
    await expect(isTaskCreated).toBeTruthy();
  });
});