const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-007: Core ASK Return Creates Task for Ops Team', { tag: ['@regression', '@e2e', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-007 TC-001] Verify return with comment creates new task for Ops team', async ({ page }) => {
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
    await cawPage.enterComment(TD.COMMENT_ADDITIONAL_INFO);
    
    // Expected Result 5: Comment is successfully entered
    const commentValue = await cawPage.getCommentValue();
    expect(commentValue).toBe(TD.COMMENT_ADDITIONAL_INFO);
    
    // Step 6: Click on Return button
    await cawPage.clickReturn();
    
    // Expected Result 6: Return action is triggered and confirmation message is displayed
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 7: Verify that CAW_returnStartProcessLinkForTasks expression rule is executed
    // Expected Result 7: Expression rule executes successfully
    // Implicit verification through successful task creation
    
    // Step 8: Navigate to Ops team task list
    await cawPage.navigateToOpsTeamTaskList();
    
    // Expected Result 8: Ops team task list is displayed
    const isOpsTaskListDisplayed = await cawPage.isOpsTeamTaskListDisplayed();
    expect(isOpsTaskListDisplayed).toBeTruthy();
    
    // Step 9: Verify that a new task is created and assigned to Ops team for the returned ASK
    const isNewTaskDisplayed = await cawPage.isNewTaskAssignmentDisplayed();
    expect(isNewTaskDisplayed).toBeTruthy();
    
    // Expected Result 9: New task is visible with correct assignment, task details, and return comment
    const taskDetails = await cawPage.getTaskAssignmentDetails();
    expect(taskDetails).toContain(TD.EXPECTED_TASK_ASSIGNMENT);
    expect(taskDetails).toContain(TD.COMMENT_ADDITIONAL_INFO);
  });
});