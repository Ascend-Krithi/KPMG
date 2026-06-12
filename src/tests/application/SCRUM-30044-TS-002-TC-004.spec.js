const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Delete Custom Field', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;

  test('[SCRUM-30044 TS-002 TC-004] Verify admin can delete a custom field from form configuration', async ({ page }) => {
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

    // Step 3: Select a custom field to delete from the list
    const isFieldInList = await adminFormConfigPage.isFieldInList(TD.customFields.additionalNotes);
    expect(isFieldInList).toBeTruthy();

    // Step 4: Click on 'Delete' or trash icon for the selected field
    await adminFormConfigPage.clickDeleteField(TD.customFields.additionalNotes);
    await page.waitForTimeout(1000); // Wait for confirmation dialog

    // Step 5: Click on 'Confirm' or 'Yes' button in the confirmation dialog
    await adminFormConfigPage.confirmDeletion();
    const isSuccessMessageVisible = await adminFormConfigPage.isSuccessMessageVisible();
    expect(isSuccessMessageVisible).toBeTruthy();

    // Step 6: Verify that the deleted field is no longer visible in the form configuration list
    const isFieldStillInList = await adminFormConfigPage.isFieldInList(TD.customFields.additionalNotes);
    expect(isFieldStillInList).toBeFalsy();
  });
});