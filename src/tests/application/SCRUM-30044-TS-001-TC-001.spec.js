const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-001: Request Form Custom Fields Display', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-001 TC-001] Verify request creation form displays all admin-configured custom fields', async ({ page }) => {
    loginPage = new LoginPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Launch the application in a browser
    await loginPage.goto();
    await expect(page).toHaveURL(/.*app\.example\.com.*/);

    // Step 2: Enter valid username
    await loginPage.enterUsername(TD.credentials.testUser.username);
    const usernameField = page.locator('input[name="username"], input[type="email"]').first();
    await expect(usernameField).toHaveValue(TD.credentials.testUser.username);

    // Step 3: Enter valid password
    await loginPage.enterPassword(TD.credentials.testUser.password);
    const passwordField = page.locator('input[type="password"]').first();
    await expect(passwordField).toHaveValue(TD.credentials.testUser.password);

    // Step 4: Click on Login button
    await loginPage.clickLoginButton();
    await page.waitForLoadState('domcontentloaded');
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 5: Navigate to Request Creation Page from the main menu
    await requestFormPage.navigateToRequestCreation();
    await expect(page).toHaveURL(/.*request-creation.*/);

    // Step 6: Click on 'Create New Request' or 'Open Form' button
    await requestFormPage.clickCreateNewRequest();
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();

    // Step 7: Verify that all custom fields configured by admin are visible on the form
    const expectedFields = [
      TD.customFields.requestType,
      TD.customFields.priority,
      TD.customFields.department,
      TD.customFields.description,
      TD.customFields.attachments
    ];

    for (const field of expectedFields) {
      const isVisible = await requestFormPage.isFieldVisible(field);
      expect(isVisible).toBeTruthy();
    }
  });
});