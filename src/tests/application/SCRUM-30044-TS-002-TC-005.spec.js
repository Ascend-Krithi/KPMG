const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Verify Field Changes Reflect for All Users', { tag: ['@regression', '@e2e', '@SCRUM-30044'] }, () => {
  let adminPage;
  let requestPage;

  test('[SCRUM-30044 TS-002 TC-005] Verify new field added by admin is visible to all users', async ({ page }) => {
    adminPage = new AdminConfigurationPage(page);
    requestPage = new RequestCreationPage(page);

    // Step 1: Login as admin
    await adminPage.goto();
    await adminPage.loginAsAdmin(TD.credentials.adminUser.username, TD.credentials.adminUser.password);
    await expect(page).toHaveURL(/admin|dashboard/i);

    // Step 2: Navigate to Form Configuration
    await adminPage.navigateToAdministration();
    await adminPage.clickFormConfiguration();

    // Step 3: Add new field 'Cost Center'
    await adminPage.clickAddNewField();
    await adminPage.enterFieldName(TD.newFields.costCenter.name);
    await adminPage.selectFieldType(TD.newFields.costCenter.type);
    await adminPage.setFieldAsMandatory(TD.newFields.costCenter.mandatory);

    // Step 4: Save configuration
    await adminPage.clickSaveField();
    const isSuccessDisplayed = await adminPage.isSuccessMessageDisplayed();
    await expect(isSuccessDisplayed).toBeTruthy();

    // Step 5: Logout from admin
    await adminPage.logout();

    // Step 6: Login with regular user
    await requestPage.goto();
    await requestPage.login(TD.credentials.user1.username, TD.credentials.user1.password);
    await expect(page).toHaveURL(/dashboard|home/i);

    // Step 7-8: Navigate to Request Creation and open form
    await requestPage.navigateToRequestCreationPage();
    await requestPage.clickCreateNewRequest();

    // Step 9: Verify new field is visible
    const isCostCenterVisible = await requestPage.isCostCenterFieldVisible();
    await expect(isCostCenterVisible).toBeTruthy();

    // Step 10: Logout and login with another user
    await adminPage.logout();
    await requestPage.goto();
    await requestPage.login(TD.credentials.user2.username, TD.credentials.user2.password);

    // Step 11-12: Verify field is visible for second user
    await requestPage.navigateToRequestCreationPage();
    await requestPage.clickCreateNewRequest();
    const isCostCenterVisibleForUser2 = await requestPage.isCostCenterFieldVisible();
    await expect(isCostCenterVisibleForUser2).toBeTruthy();
  });
});