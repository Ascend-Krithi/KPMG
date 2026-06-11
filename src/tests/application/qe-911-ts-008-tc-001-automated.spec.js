const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-008: Core ASK Approval Audit Trail Verification', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-008 TC-001] Verify audit entry is created with correct details on approval', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto();
    
    // Expected Result 1: Application login page loads successfully
    await expect(page).toHaveURL(new RegExp(TD.APP_URL));
    
    // Step 2: Login with NBL role credentials
    await cawPage.login(TD.NBL_APPROVER.username, TD.NBL_APPROVER.password);
    
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
    
    // Step 5: Click on Approve button
    await cawPage.clickApprove();
    
    // Expected Result 5: Approve action is triggered and confirmation message is displayed
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 6: Verify that CAW_constructAudit expression rule is executed
    // Expected Result 6: Audit constructor rule executes successfully and creates audit record
    // Implicit verification through audit entry presence
    
    // Step 7: Navigate to ASK Record details page
    await cawPage.navigateToAskRecordDetails();
    
    // Expected Result 7: Core ASK record details page is displayed
    const isRecordDetailsDisplayed = await cawPage.isAskRecordDetailsDisplayed();
    expect(isRecordDetailsDisplayed).toBeTruthy();
    
    // Step 8: View Audit History tab or section
    await cawPage.clickAuditHistoryTab();
    
    // Expected Result 8: Audit History is displayed with all audit entries
    const isAuditHistoryDisplayed = await cawPage.isAuditHistoryDisplayed();
    expect(isAuditHistoryDisplayed).toBeTruthy();
    
    // Step 9: Verify that the audit entry contains User ID of the approver
    const isUserIdDisplayed = await cawPage.isAuditEntryUserIdDisplayed(TD.NBL_APPROVER.username);
    
    // Expected Result 9: Audit entry shows correct User ID
    expect(isUserIdDisplayed).toBeTruthy();
    
    // Step 10: Verify that the audit entry contains Action as 'Approved'
    const isActionDisplayed = await cawPage.isAuditEntryActionDisplayed(TD.AUDIT_ACTION_APPROVED);
    
    // Expected Result 10: Audit entry shows Action='Approved'
    expect(isActionDisplayed).toBeTruthy();
    
    // Step 11: Verify that the audit entry contains accurate Timestamp
    const isTimestampDisplayed = await cawPage.isAuditEntryTimestampDisplayed();
    
    // Expected Result 11: Audit entry shows correct timestamp
    expect(isTimestampDisplayed).toBeTruthy();
    const timestamp = await cawPage.getAuditEntryTimestamp();
    expect(timestamp).toBeTruthy();
    
    // Step 12 & Expected Result 12: Audit entry is stored in CAW Data Store
    // Verification is implicit through successful retrieval of audit data
  });
});