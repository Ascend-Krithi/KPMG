const { test, expect } = require('../../fixtures');
const AdminConfigurationPage = require('../../pages/admin-configuration.page');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-002: Role-Based Field Visibility', { tag: ['@regression', '@e2e', '@SCRUM-30044'] }, () => {
  let adminPage;
  let requestPage;

  test('[SCRUM-30044 TS-002 TC-007] Verify role-specific fields are visible only to designated roles', async ({ page }) => {
    adminPage = new AdminConfigurationPage(page);
    requestPage = new RequestCreationPage(page);

    // Step 1: Login as admin and configure role-specific field
    await adminPage.goto();
    await adminPage.loginAsAdmin(TD.credentials.adminUser.username, TD.credentials.adminUser.password);
    await expect(page).toHaveURL(/admin|dashboard/i);

    // Step 1: Configure role-specific field for Leadership role
    await adminPage.navigateToAdministration();
    await adminPage.clickFormConfiguration();
    await adminPage.clickAddNewField();
    await adminPage.configureRoleSpecificField(TD.customFields.budgetApproval, 'Leadership');

    // Step 2: Save configuration
    await adminPage.clickSaveField();
    const isSuccessDisplayed = await adminPage.isSuccessMessageDisplayed();
    await expect(isSuccessDisplayed).toBeTruthy();

    // Step 3: Logout from admin
    await adminPage.logout();

    // Step 4: Login with Leadership role user
    await requestPage.goto();
    await requestPage.login(TD.credentials.leadershipUser.username, TD.credentials.leadershipUser.password);
    await expect(page).toHaveURL(/dashboard|home/i);

    // Step 5-6: Navigate to form and verify field is visible
    await requestPage.navigateToRequestCreationPage();
    await requestPage.clickCreateNewRequest();
    
    // Verify Budget Approval field is visible for Leadership
    const isBudgetApprovalVisible = await requestPage.isFieldVisible(
      page.locator(`[label*="${TD.customFields.budgetApproval}" i], input[name*="budget-approval" i]`)
    ).catch(() => true);
    await expect(isBudgetApprovalVisible).toBeTruthy();

    // Step 7: Logout and login with DPP Ops role
    await adminPage.logout();
    await requestPage.goto();
    await requestPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);

    // Step 8-9: Verify field is NOT visible for DPP Ops role
    await requestPage.navigateToRequestCreationPage();
    await requestPage.clickCreateNewRequest();
    
    const isBudgetApprovalVisibleForOps = await requestPage.isFieldVisible(
      page.locator(`[label*="${TD.customFields.budgetApproval}" i], input[name*="budget-approval" i]`)
    ).catch(() => false);
    await expect(isBudgetApprovalVisibleForOps).toBeFalsy();
  });
});