const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Non-Admin Access Restriction', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-002 TC-006] Verify non-admin users cannot access form configuration and can only use configured fields', async ({ page }) => {
    loginPage = new LoginPage(page);
    adminFormConfigPage = new AdminFormConfigPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Launch the application in a browser
    await loginPage.goto();
    await expect(page).toHaveURL(/.*app\.example\.com.*/);

    // Step 2: Login with non-admin user credentials
    await loginPage.login(TD.credentials.regularUser.username, TD.credentials.regularUser.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 3: Attempt to navigate to Administration section from main menu
    const isAdminMenuVisible = await adminFormConfigPage.isAdministrationMenuVisible();
    expect(isAdminMenuVisible).toBeFalsy();

    // Step 4: If Administration menu is visible, attempt to access Form Configuration
    // This step is conditional based on step 3

    // Step 5: Attempt to access form configuration directly via URL manipulation
    await page.goto(TD.urls.adminFormConfig, { waitUntil: 'domcontentloaded' });
    
    const isAccessDenied = await adminFormConfigPage.isAccessDenied();
    expect(isAccessDenied).toBeTruthy();

    // Step 6: Verify that user can only view and use the configured form fields without modification rights
    await page.goto(TD.urls.login, { waitUntil: 'domcontentloaded' });
    await loginPage.login(TD.credentials.regularUser.username, TD.credentials.regularUser.password);
    
    await requestFormPage.navigateToRequestCreation();
    await requestFormPage.clickCreateNewRequest();
    
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Verify no edit/configuration options are available on the form
    const configButtons = page.locator('button:has-text("Configure"), button:has-text("Edit Fields"), button:has-text("Manage Fields")');
    const configButtonCount = await configButtons.count();
    expect(configButtonCount).toBe(0);
  });
});