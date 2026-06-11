const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-010: Core ASK Approval with Optional Comment', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-010 TC-001] Verify optional comment can be added during approval and is saved', async ({ page }) => {
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
    
    // Step 5: Add optional comment in the comment field
    await cawPage.enterComment(TD.COMMENT_APPROVED_WITH_RECOMMENDATIONS);
    
    // Expected Result 5: Comment is successfully entered
    const commentValue = await cawPage.getCommentValue();
    expect(commentValue).toBe(TD.COMMENT_APPROVED_WITH_RECOMMENDATIONS);
    
    // Step 6: Click on Approve button
    await cawPage.clickApprove();
    
    // Expected Result 6: Approve action is triggered and confirmation message is displayed
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 7: Verify that the Core ASK status is updated to 'Approved'
    const status = await cawPage.getStatus();
    
    // Expected Result 7: Core ASK status is changed to 'Approved'
    expect(status).toContain(TD.STATUS_APPROVED);
    
    // Step 8: Navigate to Core ASK record details page
    await cawPage.navigateToAskRecordDetails();
    
    // Expected Result 8: Core ASK record details page is displayed
    const isRecordDetailsDisplayed = await cawPage.isAskRecordDetailsDisplayed();
    expect(isRecordDetailsDisplayed).toBeTruthy();
    
    // Step 9: Verify that the comment is saved in the ASK record
    await cawPage.clickAuditHistoryTab();
    const isCommentDisplayed = await cawPage.isAuditEntryCommentDisplayed(TD.COMMENT_APPROVED_WITH_RECOMMENDATIONS);
    
    // Expected Result 9: Comment is visible in the Core ASK record
    expect(isCommentDisplayed).toBeTruthy();
    
    // Step 10: Verify that the comment is associated with the approval action in audit history
    const isActionDisplayed = await cawPage.isAuditEntryActionDisplayed(TD.AUDIT_ACTION_APPROVED);
    
    // Expected Result 10: Comment is linked to approval action in audit trail
    expect(isActionDisplayed).toBeTruthy();
    expect(isCommentDisplayed).toBeTruthy();
  });
});