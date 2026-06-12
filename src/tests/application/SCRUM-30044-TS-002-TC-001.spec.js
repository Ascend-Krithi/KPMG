const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Admin Form Configuration Access', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;

  test('[SCRUM-30044 TS-002 TC-001] Verify admin can access form configuration interface', async ({ page }) => {
    loginPage = new LoginPage(page);
    adminFormConfigPage = new AdminFormConfigPage(page);

    // Step 1: Launch the application in a browser
    await loginPage.goto();
    await expect(page).toHaveURL(/.*app\.example\.com.*/);

    // Step 2: Enter admin username
    await loginPage.enterUsername(TD.credentials.admin.username);
    const usernameField = page.locator('input[name="username"], input[type="email"]').first();
    await expect(usernameField).toHaveValue(TD.credentials.admin.username);

    // Step 3: Enter admin password
    await loginPage.enterPassword(TD.credentials.admin.password);
    const passwordField = page.locator('input[type="password"]').first();
    await expect(passwordField).toHaveValue(TD.credentials.admin.password);

    // Step 4: Click on Login button
    await loginPage.clickLoginButton();
    await page.waitForLoadState('domcontentloaded');
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 5: Navigate to Administration section from main menu
    await adminFormConfigPage.navigateToAdministration();
    const isAdminMenuVisible = await adminFormConfigPage.isAdministrationMenuVisible();
    expect(isAdminMenuVisible).toBeTruthy();

    // Step 6: Click on 'Form Configuration' or 'Request Form Settings' option
    await adminFormConfigPage.navigateToFormConfiguration();
    await expect(page).toHaveURL(/.*form-configuration.*/);

    // Step 7: Verify that form configuration interface is accessible and displays options
    const isFormConfigPageVisible = await adminFormConfigPage.isFormConfigPageVisible();
    expect(isFormConfigPageVisible).toBeTruthy();
    
    const isAddFieldButtonVisible = await adminFormConfigPage.isAddFieldButtonVisible();
    expect(isAddFieldButtonVisible).toBeTruthy();
  });
});