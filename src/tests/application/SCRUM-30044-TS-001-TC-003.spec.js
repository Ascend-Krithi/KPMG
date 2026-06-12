const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-001: Mandatory and Optional Fields Verification', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-001 TC-003] Verify mandatory and optional fields are correctly indicated on request creation form', async ({ page }) => {
    loginPage = new LoginPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Launch the application in a browser
    await loginPage.goto();
    await expect(page).toHaveURL(/.*app\.example\.com.*/);

    // Step 2: Login with valid user credentials
    await loginPage.login(TD.credentials.testUser.username, TD.credentials.testUser.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Request Creation Page
    await requestFormPage.navigateToRequestCreation();
    await expect(page).toHaveURL(/.*request-creation.*/);

    // Step 4: Open the request creation form
    await requestFormPage.clickCreateNewRequest();
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();

    // Step 5: Verify that mandatory fields are marked with asterisk (*) or 'Required' label
    const mandatoryFields = [
      TD.customFields.requestTitle,
      TD.customFields.priority,
      TD.customFields.department
    ];

    for (const field of mandatoryFields) {
      const isMandatory = await requestFormPage.isFieldMandatory(field);
      expect(isMandatory).toBeTruthy();
    }

    // Step 6: Verify that optional fields do not have mandatory indicators
    const optionalFields = [
      TD.customFields.additionalNotes,
      TD.customFields.attachments
    ];

    for (const field of optionalFields) {
      const isMandatory = await requestFormPage.isFieldMandatory(field);
      expect(isMandatory).toBeFalsy();
    }
  });
});