const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Newly Added Field Visibility', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-002 TC-005] Verify newly added custom field is visible to all users on request creation form', async ({ page }) => {
    loginPage = new LoginPage(page);
    adminFormConfigPage = new AdminFormConfigPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Launch the application and login as admin
    await loginPage.goto();
    await loginPage.login(TD.credentials.admin.username, TD.credentials.admin.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 2: Navigate to Administration > Form Configuration
    await adminFormConfigPage.navigateToAdministration();
    await adminFormConfigPage.navigateToFormConfiguration();
    const isFormConfigPageVisible = await adminFormConfigPage.isFormConfigPageVisible();
    expect(isFormConfigPageVisible).toBeTruthy();

    // Step 3: Add a new custom field to the request form
    await adminFormConfigPage.addNewField(TD.customFields.costCenter, 'Text Input', true, '');

    // Step 4: Click on 'Save' button to save the configuration changes
    await adminFormConfigPage.clickSaveConfiguration();
    const isSuccessMessageVisible = await adminFormConfigPage.isSuccessMessageVisible();
    expect(isSuccessMessageVisible).toBeTruthy();

    // Step 5: Logout from admin account
    await loginPage.logout();

    // Step 6: Login with a regular user account
    await loginPage.goto();
    await loginPage.login(TD.credentials.user1.username, TD.credentials.user1.password);
    const isUser1DashboardVisible = await loginPage.isDashboardVisible();
    expect(isUser1DashboardVisible).toBeTruthy();

    // Step 7: Navigate to Request Creation Page
    await requestFormPage.navigateToRequestCreation();
    await expect(page).toHaveURL(/.*request-creation.*/);

    // Step 8: Open the request creation form
    await requestFormPage.clickCreateNewRequest();
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();

    // Step 9: Verify that the newly added field 'Cost Center' is visible on the form
    const isNewFieldVisible = await requestFormPage.isFieldVisible(TD.customFields.costCenter);
    expect(isNewFieldVisible).toBeTruthy();
    
    const isFieldMandatory = await requestFormPage.isFieldMandatory(TD.customFields.costCenter);
    expect(isFieldMandatory).toBeTruthy();

    // Step 10: Logout and login with another user account
    await loginPage.logout();
    await loginPage.goto();
    await loginPage.login(TD.credentials.user2.username, TD.credentials.user2.password);
    const isUser2DashboardVisible = await loginPage.isDashboardVisible();
    expect(isUser2DashboardVisible).toBeTruthy();

    // Step 11: Navigate to Request Creation Page and open the form
    await requestFormPage.navigateToRequestCreation();
    await requestFormPage.clickCreateNewRequest();
    const isFormVisibleForUser2 = await requestFormPage.isRequestFormVisible();
    expect(isFormVisibleForUser2).toBeTruthy();

    // Step 12: Verify that the new field is visible for this user as well
    const isNewFieldVisibleForUser2 = await requestFormPage.isFieldVisible(TD.customFields.costCenter);
    expect(isNewFieldVisibleForUser2).toBeTruthy();
  });
});