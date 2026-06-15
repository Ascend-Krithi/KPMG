const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-008: Core ASK Route To NBL', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1167] Test Case - QE-910 TS-008 TC-001: Create Core ASK and Route to NBL', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application in a browser
    await loginPage.goto();
    const isLoginPageLoaded = await loginPage.isLoginPageLoaded();
    expect(isLoginPageLoaded).toBeTruthy();

    // Step 2: Login with DPP Ops role credentials
    await loginPage.loginWithDppOps();
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click 'Create Core ASK'
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCreateCoreAskFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();

    // Step 4: Fill all mandatory fields in the form
    await coreAskPage.fillMandatoryFields(TD.coreAskForm);
    const dppGroupValue = await page.locator('select[name="dppGroup"]').inputValue();
    expect(dppGroupValue).toBe(TD.coreAskForm.dppGroup);

    // Step 5: Click on 'Route To' dropdown
    await coreAskPage.clickRouteToDropdown();
    const options = await coreAskPage.getRouteToOptions();
    expect(options.length).toBeGreaterThan(0);
    expect(options).toContain(TD.routeToOptions.nbl);
    expect(options).toContain(TD.routeToOptions.dppLeadershipAudit);
    expect(options).toContain(TD.routeToOptions.dppLeadershipAsg);
    expect(options).toContain(TD.routeToOptions.dppLeadershipNationalBusiness);

    // Step 6: Select 'NBL' from the 'Route To' dropdown
    await coreAskPage.selectRouteToOption(TD.routeToOptions.nbl);
    const selectedValue = await page.locator('select[name="routeTo"]').inputValue();
    expect(selectedValue).toBe(TD.routeToOptions.nbl);

    // Step 7: Click Submit button
    await coreAskPage.clickSubmit();
    const isConfirmationDisplayed = await coreAskPage.isConfirmationMessageDisplayed();
    expect(isConfirmationDisplayed).toBeTruthy();
    const confirmationText = await coreAskPage.getConfirmationMessage();
    expect(confirmationText).toContain(TD.successMessages.formSubmitted);
  });
});