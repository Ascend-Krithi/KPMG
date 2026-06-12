const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Delete Custom Field', { tag: ['@regression', '@SCRUM-30044'] }, () => {
  let adminPage;

  test('[SCRUM-30044 TS-002 TC-004] Verify admin can delete a custom field from the form', async ({ page }) => {
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

    // Step 3: Select field to delete
    await adminPage.selectFieldFromList(TD.customFields.additionalNotes);

    // Step 4: Click Delete
    await adminPage.clickDeleteField();

    // Step 5: Confirm deletion
    await adminPage.confirmDeletion();
    const isSuccessDisplayed = await adminPage.isSuccessMessageDisplayed();
    await expect(isSuccessDisplayed).toBeTruthy();

    // Step 6: Verify field is removed from list
    const isFieldDeleted = await adminPage.isFieldDeletedFromList(TD.customFields.additionalNotes);
    await expect(isFieldDeleted).toBeTruthy();
  });
});