const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-001: No Custom Fields Configuration Verification', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-001 TC-005] Verify behavior when no custom fields are configured (only default fields visible)', async ({ page }) => {
    loginPage = new LoginPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Ensure admin has not configured any custom fields (precondition setup)
    // Note: This is a precondition that should be set up before test execution
    
    // Step 2: Launch the application in a browser
    await loginPage.goto();
    await expect(page).toHaveURL(/.*app\.example\.com.*/);

    // Step 3: Login with valid user credentials
    await loginPage.login(TD.credentials.testUser.username, TD.credentials.testUser.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 4: Navigate to Request Creation Page
    await requestFormPage.navigateToRequestCreation();
    await expect(page).toHaveURL(/.*request-creation.*/);

    // Step 5: Open the request creation form
    await requestFormPage.clickCreateNewRequest();
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();

    // Step 6: Verify that only default system fields are displayed
    const defaultFields = [
      TD.defaultFields.title,
      TD.defaultFields.description
    ];

    for (const field of defaultFields) {
      const isVisible = await requestFormPage.isFieldVisible(field);
      expect(isVisible).toBeTruthy();
    }

    // Step 7: Verify that no custom configured fields are present
    const allVisibleFields = await requestFormPage.getAllVisibleFields();
    
    // Check that only default fields are present
    const customFields = [
      TD.customFields.requestType,
      TD.customFields.priority,
      TD.customFields.department,
      TD.customFields.attachments
    ];

    for (const customField of customFields) {
      const isCustomFieldVisible = await requestFormPage.isFieldVisible(customField);
      expect(isCustomFieldVisible).toBeFalsy();
    }
  });
});