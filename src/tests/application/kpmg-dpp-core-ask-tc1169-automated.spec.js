const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-010: Core ASK Mandatory Field Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[TC-1169] Verify validation error messages are displayed when mandatory fields are left blank', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Login with valid user credentials
    await coreAskPage.login(TD.credentials.dppOpsUser.username, TD.credentials.dppOpsUser.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    await expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click 'Create Core ASK'
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    await expect(isFormVisible).toBeTruthy();

    // Step 4: Leave all mandatory fields blank
    // No action needed - fields are already blank

    // Step 5: Click Submit button
    await coreAskPage.clickSubmit();

    // Step 6: Verify validation messages for each mandatory field
    const dppGroupErrorVisible = await coreAskPage.isValidationErrorVisible('dppGroup');
    await expect(dppGroupErrorVisible).toBeTruthy();
    const dppGroupError = await coreAskPage.getValidationErrorMessage('dppGroup');
    await expect(dppGroupError).toContain(TD.validationErrors.dppGroupRequired);

    const reasonForDppNeedErrorVisible = await coreAskPage.isValidationErrorVisible('reasonForDppNeed');
    await expect(reasonForDppNeedErrorVisible).toBeTruthy();
    const reasonForDppNeedError = await coreAskPage.getValidationErrorMessage('reasonForDppNeed');
    await expect(reasonForDppNeedError).toContain(TD.validationErrors.reasonForDppNeedRequired);

    const levelNeededErrorVisible = await coreAskPage.isValidationErrorVisible('levelNeeded');
    await expect(levelNeededErrorVisible).toBeTruthy();
    const levelNeededError = await coreAskPage.getValidationErrorMessage('levelNeeded');
    await expect(levelNeededError).toContain(TD.validationErrors.levelNeededRequired);

    const headcountAmountErrorVisible = await coreAskPage.isValidationErrorVisible('headcountAmount');
    await expect(headcountAmountErrorVisible).toBeTruthy();
    const headcountAmountError = await coreAskPage.getValidationErrorMessage('headcountAmount');
    await expect(headcountAmountError).toContain(TD.validationErrors.headcountAmountRequired);

    const dppFteAmountErrorVisible = await coreAskPage.isValidationErrorVisible('dppFteAmount');
    await expect(dppFteAmountErrorVisible).toBeTruthy();
    const dppFteAmountError = await coreAskPage.getValidationErrorMessage('dppFteAmount');
    await expect(dppFteAmountError).toContain(TD.validationErrors.dppFteAmountRequired);

    const projectStartDateErrorVisible = await coreAskPage.isValidationErrorVisible('projectStartDate');
    await expect(projectStartDateErrorVisible).toBeTruthy();
    const projectStartDateError = await coreAskPage.getValidationErrorMessage('projectStartDate');
    await expect(projectStartDateError).toContain(TD.validationErrors.projectStartDateRequired);

    const roleSummaryErrorVisible = await coreAskPage.isValidationErrorVisible('roleSummary');
    await expect(roleSummaryErrorVisible).toBeTruthy();
    const roleSummaryError = await coreAskPage.getValidationErrorMessage('roleSummary');
    await expect(roleSummaryError).toContain(TD.validationErrors.roleSummaryRequired);

    const roleResponsibilitiesErrorVisible = await coreAskPage.isValidationErrorVisible('roleResponsibilities');
    await expect(roleResponsibilitiesErrorVisible).toBeTruthy();
    const roleResponsibilitiesError = await coreAskPage.getValidationErrorMessage('roleResponsibilities');
    await expect(roleResponsibilitiesError).toContain(TD.validationErrors.roleResponsibilitiesRequired);

    const roleQualificationsErrorVisible = await coreAskPage.isValidationErrorVisible('roleQualifications');
    await expect(roleQualificationsErrorVisible).toBeTruthy();
    const roleQualificationsError = await coreAskPage.getValidationErrorMessage('roleQualifications');
    await expect(roleQualificationsError).toContain(TD.validationErrors.roleQualificationsRequired);
  });
});