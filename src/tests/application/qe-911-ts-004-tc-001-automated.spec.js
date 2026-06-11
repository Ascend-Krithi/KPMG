const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-004: Core ASK Return Validation - Comment Required', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-004 TC-001] Verify validation error when returning Core ASK without comment', async ({ page }) => {
    cawPage = new CAWCoreAskReviewPage(page);
    
    // Step 1: Launch the application
    await cawPage.goto();
    
    // Expected Result 1: Application login page loads successfully
    await expect(page).toHaveURL(new RegExp(TD.APP_URL));
    
    // Step 2: Login with NBL role credentials
    await cawPage.login(TD.NBL_USER.username, TD.NBL_USER.password);
    
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
    
    // Expected Result 4: Core ASK Review Task opens successfully with form displayed
    const isTaskOpened = await cawPage.isCoreAskReviewTaskOpened();
    expect(isTaskOpened).toBeTruthy();
    
    // Step 5: Leave the Comment field empty or null
    const isCommentEmpty = await cawPage.isCommentFieldEmpty();
    
    // Expected Result 5: Comment field remains empty
    expect(isCommentEmpty).toBeTruthy();
    
    // Step 6: Click on Return button
    await cawPage.clickReturn();
    
    // Expected Result 6: System displays validation error message
    const isValidationErrorDisplayed = await cawPage.isValidationErrorDisplayed();
    expect(isValidationErrorDisplayed).toBeTruthy();
    
    const errorMessage = await cawPage.getValidationErrorMessage();
    expect(errorMessage).toContain('Comment');
    expect(errorMessage).toContain('required');
    
    // Step 7: Verify that the Core ASK status remains unchanged
    const status = await cawPage.getStatus();
    expect(status).toContain(TD.STATUS_REVIEW);
    
    // Expected Result 7: Core ASK status remains in 'Review' status and return action is not processed
    // Status verification completed above
    
    // Step 8: Verify that the validation error message is clearly displayed
    // Expected Result 8: Error message is displayed with appropriate text
    expect(isValidationErrorDisplayed).toBeTruthy();
  });
});