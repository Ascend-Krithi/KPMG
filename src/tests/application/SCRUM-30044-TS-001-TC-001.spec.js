const { test, expect } = require('../../fixtures');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-001: Verify Custom Fields Display on Request Creation Form', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let requestPage;

  test('[SCRUM-30044 TS-001 TC-001] Verify all admin-configured custom fields are displayed on request creation form', async ({ page }) => {
    requestPage = new RequestCreationPage(page);

    // Step 1: Launch the application
    await requestPage.goto();
    await expect(page).toHaveURL(TD.urls.appUrl);

    // Step 2: Enter valid username
    await requestPage.login(TD.credentials.regularUser.username, TD.credentials.regularUser.password);

    // Step 4: User is successfully logged in and redirected to dashboard
    await expect(page).toHaveURL(/dashboard|home/i);

    // Step 5: Navigate to Request Creation Page
    await requestPage.navigateToRequestCreationPage();
    await expect(page).toHaveURL(/request.*creation|create.*request/i);

    // Step 6: Click on 'Create New Request' or 'Open Form' button
    await requestPage.clickCreateNewRequest();
    const isFormDisplayed = await requestPage.isRequestFormDisplayed();
    await expect(isFormDisplayed).toBeTruthy();

    // Step 7: Verify that all custom fields configured by admin are visible
    const isRequestTypeVisible = await requestPage.isRequestTypeFieldVisible();
    await expect(isRequestTypeVisible).toBeTruthy();

    const isPriorityVisible = await requestPage.isPriorityFieldVisible();
    await expect(isPriorityVisible).toBeTruthy();

    const isDepartmentVisible = await requestPage.isDepartmentFieldVisible();
    await expect(isDepartmentVisible).toBeTruthy();

    const isDescriptionVisible = await requestPage.isDescriptionFieldVisible();
    await expect(isDescriptionVisible).toBeTruthy();

    const isAttachmentsVisible = await requestPage.isAttachmentsFieldVisible();
    await expect(isAttachmentsVisible).toBeTruthy();
  });
});