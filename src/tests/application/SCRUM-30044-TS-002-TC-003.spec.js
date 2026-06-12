const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Modify Existing Field', { tag: ['@regression', '@SCRUM-30044'] }, () => {
  let adminPage;

  test('[SCRUM-30044 TS-002 TC-003] Verify admin can modify an existing custom field', async ({ page }) => {
    adminPage = new AdminConfigurationPage(page);

    // Step 1: Launch and login as admin
    await adminPage.goto();
    await adminPage.loginAsAdmin(TD.credentials.adminUser.username, TD.credentials.adminUser.password);
    await expect(page).toHaveURL(/admin|dashboard/i);

    // Step 2: Navigate to Form Configuration
    await adminPage.navigateToAdministration();
    await adminPage.clickFormConfiguration();
    const isFormConfigPageDisplayed = await adminPage.isFormConfigurationPageDisplayed();
    await expect(isFormConfigPageDisplayed).toBeTruthy();

    // Step 3: Select an existing field
    await adminPage.selectFieldFromList(TD.customFields.priority);

    // Step 4: Click Edit
    await adminPage.clickEditField();
    const isDialogDisplayed = await adminPage.isFieldCreationDialogDisplayed();
    await expect(isDialogDisplayed).toBeTruthy();

    // Step 5: Modify field properties (change to mandatory)
    await adminPage.setFieldAsMandatory(true);

    // Step 6: Update help text
    await adminPage.enterHelpText('Select the priority level (High/Medium/Low)');

    // Step 7: Click Save Changes
    await adminPage.clickSaveField();
    const isSuccessDisplayed = await adminPage.isSuccessMessageDisplayed();
    await expect(isSuccessDisplayed).toBeTruthy();

    // Step 8: Verify modified field shows updated configuration
    const isFieldVisible = await adminPage.isFieldInConfigurationList(TD.customFields.priority);
    await expect(isFieldVisible).toBeTruthy();
  });
});