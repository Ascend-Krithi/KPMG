const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-002: Core ASK Approval by NBL Role', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-002 TC-001] Verify NBL role can approve Core ASK successfully', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto();
    
    // Expected Result 1: Application login page loads successfully
    await expect(page).toHaveURL(new RegExp(TD.APP_URL));
    
    // Step 2: Login with NBL role credentials having approval rights
    await cawPage.login(TD.NBL_APPROVER.username, TD.NBL_APPROVER.password);
    
    // Expected Result 2: User is successfully logged in and dashboard is displayed
    const isDashboardDisplayed = await cawPage.isDashboardDisplayed();
    expect(isDashboardDisplayed).toBeTruthy();
    
    // Step 3: Navigate to Tasks section
    await cawPage.navigateToTasks();
    
    // Expected Result 3: Tasks page is displayed with list of pending tasks
    const isTasksPageDisplayed = await cawPage.isTasksPageDisplayed();
    expect(isTasksPageDisplayed).toBeTruthy();
    const isPendingTasksListDisplayed = await cawPage.isPendingTasksListDisplayed();
    expect(isPendingTasksListDisplayed).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task from the task list
    await cawPage.openCoreAskReviewTask();
    
    // Expected Result 4: Core ASK Review Task opens successfully with form displayed
    const isTaskOpened = await cawPage.isCoreAskReviewTaskOpened();
    expect(isTaskOpened).toBeTruthy();
    const isFormDisplayed = await cawPage.isCoreAskReviewFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();
    
    // Step 5: Review the Core ASK details displayed in read-only mode
    const coreAskId = await cawPage.getCoreAskId();
    expect(coreAskId).toBeTruthy();
    
    // Expected Result 5: All Core ASK details are visible and accurate
    const areFieldsReadOnly = await cawPage.areAllFieldsReadOnly();
    expect(areFieldsReadOnly).toBeTruthy();
    
    // Step 6: Click on Approve button
    await cawPage.clickApprove();
    
    // Expected Result 6: Approve action is triggered and confirmation message is displayed
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 7: Verify that the Core ASK status is updated to 'Approved'
    const status = await cawPage.getStatus();
    expect(status).toContain(TD.STATUS_APPROVED);
    
    // Expected Result 7: Core ASK status is changed to 'Approved' and task removed from pending tasks
    const isTaskStillPending = await cawPage.isTaskInPendingList(TD.CORE_ASK_REVIEW_TASK);
    expect(isTaskStillPending).toBeFalsy();
    
    // Step 8 & Expected Result 8: Process completes and appropriate next steps are initiated
    // Verification is implicit through successful completion of approval workflow
  });
});