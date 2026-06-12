const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const AdminFormConfigPage = require('../../pages/admin-form-config.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-002: Role-Based Field Visibility', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let adminFormConfigPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-002 TC-007] Verify role-based visibility of fields on request creation form', async ({ page }) => {
    loginPage = new LoginPage(page);
    adminFormConfigPage = new AdminFormConfigPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Login as admin and configure role-specific fields
    await loginPage.goto();
    await loginPage.login(TD.credentials.admin.username, TD.credentials.admin.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    await adminFormConfigPage.navigateToAdministration();
    await adminFormConfigPage.navigateToFormConfiguration();
    
    // Note: Role-specific field configuration would be done here
    // For this test, we assume 'Budget Approval' field is configured for Leadership role only

    // Step 2: Save the role-based field configuration
    await adminFormConfigPage.clickSaveConfiguration();
    const isSuccessMessageVisible = await adminFormConfigPage.isSuccessMessageVisible();
    expect(isSuccessMessageVisible).toBeTruthy();

    // Step 3: Logout from admin account
    await loginPage.logout();

    // Step 4: Login with a user having Leadership role
    await loginPage.goto();
    await loginPage.login(TD.credentials.leader.username, TD.credentials.leader.password);
    const isLeaderDashboardVisible = await loginPage.isDashboardVisible();
    expect(isLeaderDashboardVisible).toBeTruthy();

    // Step 5: Navigate to Request Creation Page and open the form
    await requestFormPage.navigateToRequestCreation();
    await requestFormPage.clickCreateNewRequest();
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();

    // Step 6: Verify that role-specific field 'Budget Approval' is visible
    const isBudgetApprovalVisible = await requestFormPage.isFieldVisible(TD.customFields.budgetApproval);
    expect(isBudgetApprovalVisible).toBeTruthy();

    // Step 7: Logout and login with a user having DPP Ops role
    await loginPage.logout();
    await loginPage.goto();
    await loginPage.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
    const isDppOpsDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDppOpsDashboardVisible).toBeTruthy();

    // Step 8: Navigate to Request Creation Page and open the form
    await requestFormPage.navigateToRequestCreation();
    await requestFormPage.clickCreateNewRequest();
    const isFormVisibleForDppOps = await requestFormPage.isRequestFormVisible();
    expect(isFormVisibleForDppOps).toBeTruthy();

    // Step 9: Verify that role-specific field 'Budget Approval' is NOT visible for DPP Ops role
    const isBudgetApprovalVisibleForDppOps = await requestFormPage.isFieldVisible(TD.customFields.budgetApproval);
    expect(isBudgetApprovalVisibleForDppOps).toBeFalsy();
  });
});