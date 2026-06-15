const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-009: Core ASK Audit History and Task Assignment Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[TC-1168] Verify audit trail shows submission details and task is created for assigned user', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Login with valid user credentials
    await coreAskPage.login(TD.credentials.userA.username, TD.credentials.userA.password);
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

    // Step 5: Select assignee from 'Route To' dropdown
    await coreAskPage.selectRouteTo(TD.assignees.dppOpsUserB);

    // Step 6: Click Submit button
    await coreAskPage.clickSubmit();
    const isConfirmationVisible = await coreAskPage.isConfirmationMessageVisible();
    await expect(isConfirmationVisible).toBeTruthy();

    // Step 7: Navigate to Audit History section for the submitted Core ASK
    await coreAskPage.navigateToAuditHistory();
    const isAuditHistoryVisible = await coreAskPage.isAuditHistoryVisible();
    await expect(isAuditHistoryVisible).toBeTruthy();

    // Step 8: Verify submission details in audit trail
    const submittedBy = await coreAskPage.getSubmittedBy();
    await expect(submittedBy).toContain('User A');

    const submissionTimestamp = await coreAskPage.getSubmissionTimestamp();
    await expect(submissionTimestamp).toBeTruthy();

    const assignedTo = await coreAskPage.getAssignedTo();
    await expect(assignedTo).toContain(TD.assignees.dppOpsUserB);

    // Step 9: Verify task creation for assigned user
    await coreAskPage.navigateToTaskList();
    const taskAssignedTo = await coreAskPage.getTaskAssignedTo();
    await expect(taskAssignedTo).toContain(TD.assignees.dppOpsUserB);
  });
});