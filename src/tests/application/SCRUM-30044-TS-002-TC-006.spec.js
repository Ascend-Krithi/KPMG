const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Non-Admin User Access Restriction', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let adminPage;

  test('[SCRUM-30044 TS-002 TC-006] Verify non-admin users cannot access form configuration', async ({ page }) => {
    adminPage = new AdminConfigurationPage(page);

    // Step 1: Launch application
    await adminPage.goto();
    await expect(page).toHaveURL(TD.urls.appUrl);

    // Step 2: Login with non-admin user
    await adminPage.loginAsRegularUser(TD.credentials.regularNonAdminUser.username, TD.credentials.regularNonAdminUser.password);

    // Step 3: Attempt to navigate to Administration section
    const isAdminMenuVisible = await adminPage.isAdministrationMenuVisible().catch(() => false);
    await expect(isAdminMenuVisible).toBeFalsy();

    // Step 5: Attempt direct URL access
    await adminPage.attemptDirectUrlAccess(TD.urls.adminFormConfigUrl);
    
    // Step 5: Verify access is denied
    const isUnauthorizedDisplayed = await adminPage.isUnauthorizedMessageDisplayed();
    await expect(isUnauthorizedDisplayed).toBeTruthy();
  });
});