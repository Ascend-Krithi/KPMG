const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-003: Core ASK Return with Comment by DPP Leadership', { tag: ['@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-003 TC-001] Verify DPP Leadership can return Core ASK with comment', async ({ page }) => {
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
    
    // Expected Result 4: Core ASK Review Task opens successfully with form displayed
    const isTaskOpened = await cawPage.isCoreAskReviewTaskOpened();
    expect(isTaskOpened).toBeTruthy();
    
    // Step 5: Review the Core ASK details
    const isFormDisplayed = await cawPage.isCoreAskReviewFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();
    
    // Expected Result 5: All Core ASK details are visible
    const coreAskId = await cawPage.getCoreAskId();
    expect(coreAskId).toBeTruthy();
    
    // Step 6: Add comment in the comment field
    await cawPage.enterComment(TD.COMMENT_REVISE_BU_GRID);
    
    // Expected Result 6: Comment is successfully entered
    const commentValue = await cawPage.getCommentValue();
    expect(commentValue).toBe(TD.COMMENT_REVISE_BU_GRID);
    
    // Step 7: Click on Return button
    await cawPage.clickReturn();
    
    // Expected Result 7: Return action is triggered and confirmation message is displayed
    const isConfirmationDisplayed = await cawPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    
    // Step 8: Verify that the Core ASK status is updated to 'Returned'
    const status = await cawPage.getStatus();
    expect(status).toContain(TD.STATUS_RETURNED);
    
    // Expected Result 8: Core ASK status is changed to 'Returned' and sent back to submitter
    // Status verification completed above
    
    // Step 9: Verify that the comment is saved and visible in the ASK record
    await cawPage.navigateToAskRecordDetails();
    await cawPage.clickAuditHistoryTab();
    
    // Expected Result 9: Comment is saved and displayed in the Core ASK record history
    const isCommentDisplayed = await cawPage.isAuditEntryCommentDisplayed(TD.COMMENT_REVISE_BU_GRID);
    expect(isCommentDisplayed).toBeTruthy();
  });
});