const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Add New Custom Field', { tag: ['@regression', '@SCRUM-30044'] }, () => {
  let adminPage;

  test('[SCRUM-30044 TS-002 TC-002] Verify admin can add a new custom field to the request form', async ({ page }) => {
    adminPage = new AdminConfigurationPage(page);

    // Step 1: Launch and login as admin
    await adminPage.goto();
    await adminPage.loginAsAdmin(TD.credentials.adminUser.username, TD.credentials.adminUser.password);
    await expect(page).toHaveURL(/admin|dashboard/i);

    // Step 2: Navigate to Administration > Form Configuration
    await adminPage.navigateToAdministration();
    await adminPage.clickFormConfiguration();
    const isFormConfigPageDisplayed = await adminPage.isFormConfigurationPageDisplayed();
    await expect(isFormConfigPageDisplayed).toBeTruthy();

    // Step 3: Click on 'Add New Field' button
    await adminPage.clickAddNewField();
    const isDialogDisplayed = await adminPage.isFieldCreationDialogDisplayed();
    await expect(isDialogDisplayed).toBeTruthy();

    // Step 4: Enter field name
    await adminPage.enterFieldName(TD.newFields.budgetCode.name);

    // Step 5: Select field type
    await adminPage.selectFieldType(TD.newFields.budgetCode.type);

    // Step 6: Set field as mandatory
    await adminPage.setFieldAsMandatory(TD.newFields.budgetCode.mandatory);

    // Step 7: Add help text
    await adminPage.enterHelpText(TD.newFields.budgetCode.helpText);

    // Step 8: Click Save
    await adminPage.clickSaveField();
    const isSuccessDisplayed = await adminPage.isSuccessMessageDisplayed();
    await expect(isSuccessDisplayed).toBeTruthy();

    // Step 9: Verify new field appears in configuration list
    const isFieldVisible = await adminPage.isFieldInConfigurationList(TD.newFields.budgetCode.name);
    await expect(isFieldVisible).toBeTruthy();
  });
});