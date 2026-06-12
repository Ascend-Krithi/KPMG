const { test, expect } = require('../../fixtures');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-001: Verify Form with No Custom Fields', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let requestPage;

  test('[SCRUM-30044 TS-001 TC-005] Verify only default fields are displayed when no custom fields are configured', async ({ page }) => {
    requestPage = new RequestCreationPage(page);

    // Step 2: Launch the application
    await requestPage.goto();
    await expect(page).toHaveURL(TD.urls.appUrl);

    // Step 3: Login with valid user credentials
    await requestPage.login(TD.credentials.regularUser.username, TD.credentials.regularUser.password);
    await expect(page).toHaveURL(/dashboard|home/i);

    // Step 4: Navigate to Request Creation Page
    await requestPage.navigateToRequestCreationPage();
    await expect(page).toHaveURL(/request.*creation|create.*request/i);

    // Step 5: Open the request creation form
    await requestPage.clickCreateNewRequest();
    const isFormDisplayed = await requestPage.isRequestFormDisplayed();
    await expect(isFormDisplayed).toBeTruthy();

    // Step 6: Verify that only default system fields are displayed
    const isRequestTitleVisible = await requestPage.isRequestTitleFieldVisible();
    await expect(isRequestTitleVisible).toBeTruthy();

    const isDescriptionVisible = await requestPage.isDescriptionFieldVisible();
    await expect(isDescriptionVisible).toBeTruthy();

    // Step 7: Verify that no custom configured fields are present
    // This test assumes no custom fields are configured
    // In a real scenario, this would be verified by checking specific custom fields are NOT present
    const isBudgetCodeVisible = await requestPage.isBudgetCodeFieldVisible().catch(() => false);
    await expect(isBudgetCodeVisible).toBeFalsy();

    const isCostCenterVisible = await requestPage.isCostCenterFieldVisible().catch(() => false);
    await expect(isCostCenterVisible).toBeFalsy();
  });
});