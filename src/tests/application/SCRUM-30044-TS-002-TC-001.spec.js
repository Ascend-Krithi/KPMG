const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Access to Form Configuration', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let adminPage;

  test('[SCRUM-30044 TS-002 TC-001] Verify admin can access form configuration interface', async ({ page }) => {
    adminPage = new AdminConfigurationPage(page);

    // Step 1: Launch the application
    await adminPage.goto();
    await expect(page).toHaveURL(TD.urls.appUrl);

    // Step 2-4: Login as admin
    await adminPage.loginAsAdmin(TD.credentials.adminUser.username, TD.credentials.adminUser.password);
    await expect(page).toHaveURL(/admin|dashboard/i);

    // Step 5: Navigate to Administration section
    await adminPage.navigateToAdministration();
    const isAdminMenuVisible = await adminPage.isAdministrationMenuVisible();
    await expect(isAdminMenuVisible).toBeTruthy();

    // Step 6: Click on 'Form Configuration' option
    await adminPage.clickFormConfiguration();
    await expect(page).toHaveURL(/form.*config|config.*form/i);

    // Step 7: Verify form configuration interface is accessible
    const isFormConfigPageDisplayed = await adminPage.isFormConfigurationPageDisplayed();
    await expect(isFormConfigPageDisplayed).toBeTruthy();
  });
});