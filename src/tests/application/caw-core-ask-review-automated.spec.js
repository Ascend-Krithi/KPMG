const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-test-data');

test.describe('[UI] QE-911: Core ASK Review - NBL and DPP Leadership Workflows', { tag: ['@smoke', '@regression', '@qe-911'] }, () => {
  let cawPage;

  test('[QE-911 TS-001 TC-001] Core ASK Review – NBL role read-only review of CAW_FRM_CoreAskReview form', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL role credentials
    await cawPage.login(TD.users.nblUser.username, TD.users.nblUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    expect(await cawPage.isPendingTasksListDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isCoreAskReviewTaskDisplayed()).toBeTruthy();
    
    // Step 5: View CAW_FRM_CoreAskReview form
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    expect(await cawPage.isAskIdVisible()).toBeTruthy();
    expect(await cawPage.isSubmitterDetailsVisible()).toBeTruthy();
    expect(await cawPage.isBuPlanningGridVisible()).toBeTruthy();
    expect(await cawPage.isFiscalYearVisible()).toBeTruthy();
    
    // Step 6: Verify all fields are read-only
    expect(await cawPage.areAllFieldsReadOnly()).toBeTruthy();
  });

  test('[QE-911 TS-001 TC-002] Core ASK Review – DPP Leadership role read-only review of CAW_FRM_CoreAskReview form', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with DPP Leadership role credentials
    await cawPage.login(TD.users.dppLeadershipUser.username, TD.users.dppLeadershipUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    expect(await cawPage.isPendingTasksListDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isCoreAskReviewTaskDisplayed()).toBeTruthy();
    
    // Step 5: View CAW_FRM_CoreAskReview form
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 6: Verify all fields are read-only
    expect(await cawPage.areAllFieldsReadOnly()).toBeTruthy();
  });

  test('[QE-911 TS-002 TC-001] Core ASK Review – NBL approver approves Core ASK', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL approver credentials
    await cawPage.login(TD.users.nblApprover.username, TD.users.nblApprover.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Review Core ASK details
    expect(await cawPage.isAskIdVisible()).toBeTruthy();
    
    // Step 6: Click Approve button
    await cawPage.clickApprove();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 7: Verify status updated to Approved
    expect(await cawPage.isAskStatusApproved()).toBeTruthy();
    expect(await cawPage.getAskStatus()).toContain(TD.statuses.approved);
    
    // Step 8: Verify process completed
    expect(await cawPage.isCoreAskReviewTaskInPendingList()).toBeFalsy();
  });

  test('[QE-911 TS-003 TC-001] Core ASK Review – DPP Leadership returns Core ASK with comment', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with DPP Leadership credentials
    await cawPage.login(TD.users.dppLeadershipUser.username, TD.users.dppLeadershipUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Review Core ASK details
    expect(await cawPage.isAskIdVisible()).toBeTruthy();
    
    // Step 6: Add comment
    await cawPage.addComment(TD.comments.revisionRequest);
    
    // Step 7: Click Return button
    await cawPage.clickReturn();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 8: Verify status updated to Returned
    expect(await cawPage.isAskStatusReturned()).toBeTruthy();
    expect(await cawPage.getAskStatus()).toContain(TD.statuses.returned);
    
    // Step 9: Verify comment is saved
    await cawPage.navigateToAskRecordDetails();
    await cawPage.openAuditHistoryTab();
    expect(await cawPage.getLatestAuditEntryComment()).toContain(TD.comments.revisionRequest);
  });

  test('[QE-911 TS-004 TC-001] Core ASK Review – NBL role return without mandatory comment validation', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL credentials
    await cawPage.login(TD.users.nblUser.username, TD.users.nblUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Leave comment field empty
    await cawPage.clearComment();
    
    // Step 6: Click Return button
    await cawPage.clickReturn();
    expect(await cawPage.isValidationErrorDisplayed()).toBeTruthy();
    const errorText = await cawPage.getValidationErrorText();
    expect(errorText).toMatch(/comment.*required|comment.*mandatory/i);
    
    // Step 7: Verify status remains unchanged
    expect(await cawPage.isAskStatusReview()).toBeTruthy();
    
    // Step 8: Verify validation error is displayed
    expect(await cawPage.isValidationErrorDisplayed()).toBeTruthy();
  });

  test('[QE-911 TS-005 TC-001] Core ASK Review – NBL role cancels review without changing status', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL credentials
    await cawPage.login(TD.users.nblUser.username, TD.users.nblUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Review Core ASK details
    expect(await cawPage.isAskIdVisible()).toBeTruthy();
    
    // Step 6: Click Cancel button
    await cawPage.clickCancel();
    
    // Step 7: Verify status remains in Review
    await cawPage.navigateToTasks();
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isAskStatusReview()).toBeTruthy();
    
    // Step 8: Verify no changes made to record
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 9: Verify task remains in pending list
    await cawPage.navigateToTasks();
    expect(await cawPage.isCoreAskReviewTaskInPendingList()).toBeTruthy();
  });

  test('[QE-911 TS-006 TC-001] Core ASK Review – NBL approver approval triggers Ops team task creation', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL approver credentials
    await cawPage.login(TD.users.nblApprover.username, TD.users.nblApprover.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Click Approve button
    await cawPage.clickApprove();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 6: Verify expression rule executed (implicit through approval)
    expect(await cawPage.isAskStatusApproved()).toBeTruthy();
    
    // Step 7: Navigate to Ops team task list
    await cawPage.navigateToOpsTeamTaskList();
    expect(await cawPage.isOpsTeamTaskListDisplayed()).toBeTruthy();
    
    // Step 8: Verify new task created for Ops team
    expect(await cawPage.isNewOpsTeamTaskCreated()).toBeTruthy();
    const taskAssignment = await cawPage.getTaskAssignment();
    expect(taskAssignment).toContain(TD.taskAssignments.dppOpsTeam);
    
    // Step 9: Verify task contains Core ASK information
    const taskDetails = await cawPage.getTaskDetails();
    expect(taskDetails).toBeTruthy();
    const coreAskId = await cawPage.getTaskCoreAskIdReference();
    expect(coreAskId).toBeTruthy();
  });

  test('[QE-911 TS-007 TC-001] Core ASK Review – DPP Leadership return triggers Ops team task creation', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with DPP Leadership credentials
    await cawPage.login(TD.users.dppLeadershipUser.username, TD.users.dppLeadershipUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Add comment
    await cawPage.addComment(TD.comments.additionalInfo);
    
    // Step 6: Click Return button
    await cawPage.clickReturn();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 7: Verify expression rule executed
    expect(await cawPage.isAskStatusReturned()).toBeTruthy();
    
    // Step 8: Navigate to Ops team task list
    await cawPage.navigateToOpsTeamTaskList();
    expect(await cawPage.isOpsTeamTaskListDisplayed()).toBeTruthy();
    
    // Step 9: Verify new task created for Ops team
    expect(await cawPage.isNewOpsTeamTaskCreated()).toBeTruthy();
    const taskAssignment = await cawPage.getTaskAssignment();
    expect(taskAssignment).toContain(TD.taskAssignments.opsTeam);
  });

  test('[QE-911 TS-008 TC-001] Core ASK Review – NBL approver approval creates audit entry in CAW Data Store', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL approver credentials
    await cawPage.login(TD.users.nblApprover.username, TD.users.nblApprover.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Click Approve button
    await cawPage.clickApprove();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 6: Verify audit constructor rule executed (implicit)
    expect(await cawPage.isAskStatusApproved()).toBeTruthy();
    
    // Step 7: Navigate to ASK Record details
    await cawPage.navigateToAskRecordDetails();
    
    // Step 8: View Audit History
    await cawPage.openAuditHistoryTab();
    expect(await cawPage.isAuditHistoryDisplayed()).toBeTruthy();
    
    // Step 9: Verify User ID in audit entry
    const userId = await cawPage.getLatestAuditEntryUserId();
    expect(userId).toContain(TD.users.nblApprover.username);
    
    // Step 10: Verify Action is Approved
    const action = await cawPage.getLatestAuditEntryAction();
    expect(action).toContain(TD.actions.approve);
    
    // Step 11: Verify Timestamp is present
    const timestamp = await cawPage.getLatestAuditEntryTimestamp();
    expect(timestamp).toBeTruthy();
    
    // Step 12: Verify audit entry stored in CAW Data Store
    expect(await cawPage.getAuditEntriesCount()).toBeGreaterThan(0);
  });

  test('[QE-911 TS-009 TC-001] Core ASK Review – DPP Leadership return with comment creates detailed audit entry', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with DPP Leadership credentials
    await cawPage.login(TD.users.dppLeadershipUser.username, TD.users.dppLeadershipUser.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Add comment
    await cawPage.addComment(TD.comments.fiscalYearUpdate);
    
    // Step 6: Click Return button
    await cawPage.clickReturn();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 7: Verify audit constructor rule executed
    expect(await cawPage.isAskStatusReturned()).toBeTruthy();
    
    // Step 8: Navigate to ASK Record details
    await cawPage.navigateToAskRecordDetails();
    
    // Step 9: View Audit History
    await cawPage.openAuditHistoryTab();
    expect(await cawPage.isAuditHistoryDisplayed()).toBeTruthy();
    
    // Step 10: Verify User ID
    const userId = await cawPage.getLatestAuditEntryUserId();
    expect(userId).toContain(TD.users.dppLeadershipUser.username);
    
    // Step 11: Verify Action is Returned
    const action = await cawPage.getLatestAuditEntryAction();
    expect(action).toContain(TD.actions.return);
    
    // Step 12: Verify Timestamp
    const timestamp = await cawPage.getLatestAuditEntryTimestamp();
    expect(timestamp).toBeTruthy();
    
    // Step 13: Verify Comment details
    const comment = await cawPage.getLatestAuditEntryComment();
    expect(comment).toContain(TD.comments.fiscalYearUpdate);
    
    // Step 14: Verify audit entry stored in CAW Data Store
    expect(await cawPage.getAuditEntriesCount()).toBeGreaterThan(0);
  });

  test('[QE-911 TS-010 TC-001] Core ASK Review – NBL approver approval with optional comment', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL approver credentials
    await cawPage.login(TD.users.nblApprover.username, TD.users.nblApprover.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Add optional comment
    await cawPage.addComment(TD.comments.approvalRecommendation);
    
    // Step 6: Click Approve button
    await cawPage.clickApprove();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 7: Verify status updated to Approved
    expect(await cawPage.isAskStatusApproved()).toBeTruthy();
    
    // Step 8: Navigate to Core ASK record details
    await cawPage.navigateToAskRecordDetails();
    
    // Step 9: Verify comment is saved
    await cawPage.openAuditHistoryTab();
    const comment = await cawPage.getLatestAuditEntryComment();
    expect(comment).toContain(TD.comments.approvalRecommendation);
    
    // Step 10: Verify comment associated with approval action
    const action = await cawPage.getLatestAuditEntryAction();
    expect(action).toContain(TD.actions.approve);
    const userId = await cawPage.getLatestAuditEntryUserId();
    expect(userId).toContain(TD.users.nblApprover.username);
  });

  test('[QE-911 TS-010 TC-002] Core ASK Review – NBL approver approval without comment (comment optional)', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto(TD.urls.loginPage);
    
    // Step 2: Login with NBL approver credentials
    await cawPage.login(TD.users.nblApprover.username, TD.users.nblApprover.password);
    expect(await cawPage.isDashboardDisplayed()).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    expect(await cawPage.isTasksPageDisplayed()).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task
    await cawPage.openCoreAskReviewTask();
    expect(await cawPage.isFormDisplayed()).toBeTruthy();
    
    // Step 5: Leave comment field empty
    await cawPage.clearComment();
    
    // Step 6: Click Approve button
    await cawPage.clickApprove();
    expect(await cawPage.isConfirmationMessageDisplayed()).toBeTruthy();
    
    // Step 7: Verify status updated to Approved
    expect(await cawPage.isAskStatusApproved()).toBeTruthy();
    
    // Step 8: Verify approval processed successfully
    await cawPage.navigateToTasks();
    expect(await cawPage.isCoreAskReviewTaskInPendingList()).toBeFalsy();
  });
});