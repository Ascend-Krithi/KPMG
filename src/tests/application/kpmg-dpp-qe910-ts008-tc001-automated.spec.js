const { test, expect } = require('../../fixtures');
const KPMGDPPLoginPage = require('../../pages/kpmg-dpp-login.page');
const KPMGDPPCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-008: Core ASK Route To Dropdown Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[QE-910 TS-008 TC-001] Verify Route To dropdown displays multiple options including NBL', async ({ page }) => {
    loginPage = new KPMGDPPLoginPage(page);
    coreAskPage = new KPMGDPPCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await loginPage.goto(TD.urls.loginPage);
    await expect(page).toHaveURL(TD.urls.loginPage);

    // Step 2: Login with DPP Ops role credentials
    await loginPage.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    await expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCreateCoreAskFormDisplayed();
    await expect(isFormDisplayed).toBeTruthy();

    // Step 4: Fill all mandatory fields in the form
    await coreAskPage.fillAllMandatoryFields(TD.coreAsk);

    // Step 5: Click on 'Route To' dropdown
    await coreAskPage.clickRouteToDropdown();
    const isDropdownExpanded = await coreAskPage.isRouteToDropdownExpanded();
    await expect(isDropdownExpanded).toBeTruthy();

    // Verify dropdown options are available
    await expect(page.locator(`option:has-text("${TD.coreAsk.routeToOptions.nbl}")`)).toBeVisible();
    await expect(page.locator(`option:has-text("${TD.coreAsk.routeToOptions.dppLeadershipAudit}")`)).toBeVisible();
    await expect(page.locator(`option:has-text("${TD.coreAsk.routeToOptions.dppLeadershipASG}")`)).toBeVisible();
    await expect(page.locator(`option:has-text("${TD.coreAsk.routeToOptions.dppLeadershipNationalBusiness}")`)).toBeVisible();

    // Step 6: Select 'NBL' from the dropdown
    await coreAskPage.selectRouteTo(TD.coreAsk.routeToNBL);
    const selectedValue = await coreAskPage.getRouteToSelectedValue();
    await expect(selectedValue).toContain(TD.coreAsk.routeToNBL);

    // Step 7: Click Submit button
    await coreAskPage.clickSubmit();
    const isConfirmationDisplayed = await coreAskPage.isConfirmationMessageDisplayed();
    await expect(isConfirmationDisplayed).toBeTruthy();
  });
});