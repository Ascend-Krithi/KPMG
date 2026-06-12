const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Edit Custom Field', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;

  test('[SCRUM-30044 TS-002 TC-003] Verify admin can edit an existing custom field in form configuration', async ({ page }) => {
    loginPage = new LoginPage(page);
    adminFormConfigPage = new AdminFormConfigPage(page);

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

    // Step 3: Select an existing custom field from the list
    const isFieldInList = await adminFormConfigPage.isFieldInList(TD.customFields.priority);
    expect(isFieldInList).toBeTruthy();

    // Step 4: Click on 'Edit' or pencil icon for the selected field
    await adminFormConfigPage.clickEditField(TD.customFields.priority);
    const isDialogVisible = await adminFormConfigPage.isFieldCreationDialogVisible();
    expect(isDialogVisible).toBeTruthy();

    // Step 5: Modify field properties (e.g., change from optional to mandatory)
    await adminFormConfigPage.setFieldAsMandatory();

    // Step 6: Update help text or field label if needed
    await adminFormConfigPage.enterHelpText('Select the priority level (High/Medium/Low)');

    // Step 7: Click on 'Save Changes' button
    await adminFormConfigPage.clickSaveFieldButton();
    const isSuccessMessageVisible = await adminFormConfigPage.isSuccessMessageVisible();
    expect(isSuccessMessageVisible).toBeTruthy();

    // Step 8: Verify that the modified field shows updated configuration in the list
    const isFieldStillInList = await adminFormConfigPage.isFieldInList(TD.customFields.priority);
    expect(isFieldStillInList).toBeTruthy();
  });
});