const { test, expect } = require('../../fixtures');
const KpmgDppLoginPage = require('../../pages/kpmg-dpp-login.page');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-010: Core ASK Mandatory Field Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[TC-1169] Test Case - QE-910 TS-010 TC-001: Verify Mandatory Field Validation', async ({ page }) => {
    loginPage = new KpmgDppLoginPage(page);
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application in a browser
    await loginPage.goto();
    const isLoginPageLoaded = await loginPage.isLoginPageLoaded();
    expect(isLoginPageLoaded).toBeTruthy();

    // Step 2: Login with valid user credentials
    await loginPage.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click 'Create Core ASK'
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCreateCoreAskFormDisplayed();
    expect(isFormDisplayed).toBeTruthy();

    // Step 4: Leave all mandatory fields blank
    // All fields remain empty by default
    const dppGroupValue = await page.locator('select[name="dppGroup"]').inputValue();
    expect(dppGroupValue).toBe('');

    // Step 5: Click Submit button
    await coreAskPage.clickSubmit();
    
    // Form should not be submitted - verify we're still on the form page
    const isStillOnForm = await coreAskPage.isCreateCoreAskFormDisplayed();
    expect(isStillOnForm).toBeTruthy();

    // Step 6: Verify validation messages for each mandatory field
    const validationErrors = await coreAskPage.getAllValidationErrors();
    expect(validationErrors.length).toBeGreaterThan(0);

    // Verify specific validation messages
    const isDppGroupErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.dppGroupRequired);
    expect(isDppGroupErrorVisible).toBeTruthy();

    const isReasonForNeedErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.reasonForNeedRequired);
    expect(isReasonForNeedErrorVisible).toBeTruthy();

    const isLevelNeededErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.levelNeededRequired);
    expect(isLevelNeededErrorVisible).toBeTruthy();

    const isHeadcountAmountErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.headcountAmountRequired);
    expect(isHeadcountAmountErrorVisible).toBeTruthy();

    const isDppFteAmountErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.dppFteAmountRequired);
    expect(isDppFteAmountErrorVisible).toBeTruthy();

    const isProjectStartDateErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.projectStartDateRequired);
    expect(isProjectStartDateErrorVisible).toBeTruthy();

    const isRoleSummaryErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.roleSummaryRequired);
    expect(isRoleSummaryErrorVisible).toBeTruthy();

    const isRoleResponsibilitiesErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.roleResponsibilitiesRequired);
    expect(isRoleResponsibilitiesErrorVisible).toBeTruthy();

    const isRoleQualificationsErrorVisible = await coreAskPage.isValidationErrorVisible(TD.validationMessages.roleQualificationsRequired);
    expect(isRoleQualificationsErrorVisible).toBeTruthy();
  });
});