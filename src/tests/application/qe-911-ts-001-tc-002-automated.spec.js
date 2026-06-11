const { test, expect } = require('../../fixtures');
const CAWCoreAskReviewPage = require('../../pages/caw-core-ask-review.page');
const TD = require('../../data/caw-core-ask-review-test-data');

test.describe('[UI] QE-911 TS-001: Core ASK Review Form Display - DPP Leadership Role', { tag: ['@smoke', '@regression', '@caw-core-ask'] }, () => {
  let cawPage;

  test('[QE-911 TS-001 TC-002] Verify DPP Leadership role can view CAW_FRM_CoreAskReview form in read-only mode', async ({ page }) => {
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
    const isPendingTasksListDisplayed = await cawPage.isPendingTasksListDisplayed();
    expect(isPendingTasksListDisplayed).toBeTruthy();
    
    // Step 4: Open Core ASK Review Task from the task list
    await cawPage.openCoreAskReviewTask();
    
    // Expected Result 4: Core ASK Review Task opens successfully
    const isTaskOpened = await cawPage.isCoreAskReviewTaskOpened();
    expect(isTaskOpened).toBeTruthy();
    
    // Step 5: View CAW_FRM_CoreAskReview form
    const isFormDisplayed = await cawPage.isCoreAskReviewFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();
    
    // Expected Result 5: Form is displayed in read-only mode with all submitted details visible
    const coreAskId = await cawPage.getCoreAskId();
    expect(coreAskId).toBeTruthy();
    
    // Step 6: Verify that all form fields are in read-only mode
    const areFieldsReadOnly = await cawPage.areAllFieldsReadOnly();
    
    // Expected Result 6: All fields are displayed as read-only and no edit functionality is available
    expect(areFieldsReadOnly).toBeTruthy();
  });
});