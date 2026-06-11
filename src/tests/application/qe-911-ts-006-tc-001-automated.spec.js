const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-006: Core ASK Approval Creates Task for Ops Team', { tag: ['@regression', '@e2e', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-006 TC-001] Verify approval creates new task for DPP Ops team', async ({ page }) => {
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
    
    // Step 6: Verify that CAW_returnStartProcessLinkForTasks expression rule is executed
    // Expected Result 6: Expression rule executes successfully and determines next process
    // Implicit verification through successful task creation
    
    // Step 7: Navigate to Ops team task list
    await cawPage.navigateToOpsTeamTaskList();
    
    // Expected Result 7: Ops team task list is displayed
    const isOpsTaskListDisplayed = await cawPage.isOpsTeamTaskListDisplayed();
    expect(isOpsTaskListDisplayed).toBeTruthy();
    
    // Step 8: Verify that a new task is created and assigned to DPP Ops team
    const isNewTaskDisplayed = await cawPage.isNewTaskAssignmentDisplayed();
    expect(isNewTaskDisplayed).toBeTruthy();
    
    // Expected Result 8: New task is visible with correct assignment and task details
    const taskDetails = await cawPage.getTaskAssignmentDetails();
    expect(taskDetails).toContain(TD.EXPECTED_TASK_ASSIGNMENT);
    
    // Step 9: Verify that the task contains all relevant Core ASK information
    const isCoreAskIdDisplayed = await cawPage.isTaskCoreAskIdReferenceDisplayed();
    expect(isCoreAskIdDisplayed).toBeTruthy();
    
    // Expected Result 9: Task contains Core ASK ID and all necessary information
    const coreAskIdReference = await cawPage.getTaskCoreAskIdReference();
    expect(coreAskIdReference).toBeTruthy();
  });
});