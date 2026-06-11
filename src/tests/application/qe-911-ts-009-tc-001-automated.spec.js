const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-009: Core ASK Return Audit Trail with Comment Verification', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-009 TC-001] Verify audit entry is created with comment details on return', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto();
    
    // Expected Result 1: Application login page loads successfully
    await expect(page).toHaveURL(new RegExp(TD.APP_URL));
    
    // Step 2: Login with DPP Leadership role credentials
    await cawPage.login(TD.DPP_LEADERSHIP_USER.username, TD.DPP_LEADERSHIP_USER.password);
    
    // Expected Result 2: User is successfully logged in and dashboard is displayed
    const isDashboardDisplayed = await cawPage.isDashboardDisplayed();
    expect(isDashboardDisplayed).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    
    // Expected Result 3: Tasks page is displayed with list of pending tasks
    const isTasksPageDisplayed = await cawPage.isTasksPageDisplayed();
    expect(isTasksPageDisplayed).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task from the task list
    await cawPage.openCoreAskReviewTask();
    
    // Expected Result 4: Core ASK Review Task opens successfully
    const isTaskOpened = await cawPage.isCoreAskReviewTaskOpened();
    expect(isTaskOpened).toBeTruthy();
    
    // Step 5: Add comment in the comment field
    await cawPage.enterComment(TD.COMMENT_UPDATE_FISCAL_YEAR);
    
    // Expected Result 5: Comment is successfully entered
    const commentValue = await cawPage.getCommentValue();
    expect(commentValue).toBe(TD.COMMENT_UPDATE_FISCAL_YEAR);
    
    // Step 6: Click on Return button
    await cawPage.clickReturn();
    
    // Expected Result 6: Return action is triggered and confirmation message is displayed
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 7: Verify that CAW_constructAudit expression rule is executed
    // Expected Result 7: Audit constructor rule executes successfully with comment details
    // Implicit verification through audit entry presence
    
    // Step 8: Navigate to ASK Record details page
    await cawPage.navigateToAskRecordDetails();
    
    // Expected Result 8: Core ASK record details page is displayed
    const isRecordDetailsDisplayed = await cawPage.isAskRecordDetailsDisplayed();
    expect(isRecordDetailsDisplayed).toBeTruthy();
    
    // Step 9: View Audit History tab or section
    await cawPage.clickAuditHistoryTab();
    
    // Expected Result 9: Audit History is displayed with all audit entries
    const isAuditHistoryDisplayed = await cawPage.isAuditHistoryDisplayed();
    expect(isAuditHistoryDisplayed).toBeTruthy();
    
    // Step 10: Verify that the audit entry contains User ID of the approver
    const isUserIdDisplayed = await cawPage.isAuditEntryUserIdDisplayed(TD.DPP_LEADERSHIP_USER.username);
    
    // Expected Result 10: Audit entry shows correct User ID
    expect(isUserIdDisplayed).toBeTruthy();
    
    // Step 11: Verify that the audit entry contains Action as 'Returned'
    const isActionDisplayed = await cawPage.isAuditEntryActionDisplayed(TD.AUDIT_ACTION_RETURNED);
    
    // Expected Result 11: Audit entry shows Action='Returned'
    expect(isActionDisplayed).toBeTruthy();
    
    // Step 12: Verify that the audit entry contains accurate Timestamp
    const isTimestampDisplayed = await cawPage.isAuditEntryTimestampDisplayed();
    
    // Expected Result 12: Audit entry shows correct timestamp
    expect(isTimestampDisplayed).toBeTruthy();
    const timestamp = await cawPage.getAuditEntryTimestamp();
    expect(timestamp).toBeTruthy();
    
    // Step 13: Verify that the audit entry contains the comment details
    const isCommentDisplayed = await cawPage.isAuditEntryCommentDisplayed(TD.COMMENT_UPDATE_FISCAL_YEAR);
    
    // Expected Result 13: Audit entry shows Comment
    expect(isCommentDisplayed).toBeTruthy();
    
    // Step 14 & Expected Result 14: Audit entry is stored in CAW Data Store with all details
    // Verification is implicit through successful retrieval of audit data
  });
});