const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Add Custom Field', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;

  test('[SCRUM-30044 TS-002 TC-002] Verify admin can add a new custom field in form configuration', async ({ page }) => {
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

    // Step 3: Click on 'Add New Field' or '+' button
    await adminFormConfigPage.clickAddFieldButton();
    const isDialogVisible = await adminFormConfigPage.isFieldCreationDialogVisible();
    expect(isDialogVisible).toBeTruthy();

    // Step 4: Enter field name
    await adminFormConfigPage.enterFieldName(TD.customFields.budgetCode);

    // Step 5: Select field type from dropdown
    await adminFormConfigPage.selectFieldType('Text Input');

    // Step 6: Set field as mandatory or optional
    await adminFormConfigPage.setFieldAsMandatory();

    // Step 7: Add help text or description for the field
    await adminFormConfigPage.enterHelpText(TD.helpText.budgetCode);

    // Step 8: Click on 'Save' or 'Add Field' button
    await adminFormConfigPage.clickSaveFieldButton();
    const isSuccessMessageVisible = await adminFormConfigPage.isSuccessMessageVisible();
    expect(isSuccessMessageVisible).toBeTruthy();

    // Step 9: Verify that the new field appears in the list of configured fields
    const isFieldInList = await adminFormConfigPage.isFieldInList(TD.customFields.budgetCode);
    expect(isFieldInList).toBeTruthy();
  });
});