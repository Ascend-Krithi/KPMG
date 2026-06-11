const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-010: Core ASK Approval without Comment', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-010 TC-002] Verify approval can be completed without comment', async ({ page }) => {
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
    
    // Step 5: Leave the comment field empty
    const isCommentEmpty = await cawPage.isCommentFieldEmpty();
    
    // Expected Result 5: Comment field remains empty
    expect(isCommentEmpty).toBeTruthy();
    
    // Step 6: Click on Approve button
    await cawPage.clickApprove();
    
    // Expected Result 6: Approve action is triggered without validation error
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 7: Verify that the Core ASK status is updated to 'Approved'
    const status = await cawPage.getStatus();
    
    // Expected Result 7: Core ASK status is changed to 'Approved' without requiring comment
    expect(status).toContain(TD.STATUS_APPROVED);
    
    // Step 8: Verify that the approval is processed successfully without any errors
    await cawPage.navigateToTasks();
    const isTaskStillPending = await cawPage.isTaskInPendingList(TD.CORE_ASK_REVIEW_TASK);
    
    // Expected Result 8: Approval process completes and task is removed from pending tasks
    expect(isTaskStillPending).toBeFalsy();
  });
});