const { test, expect } = require('../../fixtures');
const KPMGDPPLoginPage = require('../../pages/kpmg-dpp-login.page');
const KPMGDPPCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const loc = require('../../pages/locators/kpmg-dpp-core-ask.locators');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-010: Core ASK Mandatory Field Validation', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let loginPage;
  let coreAskPage;

  test('[QE-910 TS-010 TC-001] Verify validation errors for all mandatory fields when left blank', async ({ page }) => {
    loginPage = new KPMGDPPLoginPage(page);
    coreAskPage = new KPMGDPPCoreAskPage(page);

    // Step 1: Launch the KPMG DPP System application
    await loginPage.goto(TD.urls.loginPage);
    await expect(page).toHaveURL(TD.urls.loginPage);

    // Step 2: Login with valid user credentials
    await loginPage.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    await expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormDisplayed = await coreAskPage.isCreateCoreAskFormDisplayed();
    await expect(isFormDisplayed).toBeTruthy();

    // Step 4: Leave all mandatory fields blank
    // All fields are already blank by default

    // Step 5: Click Submit button
    await coreAskPage.clickSubmit();

    // Step 6: Verify validation messages for each mandatory field
    await expect(loc.dppGroupError(page)).toBeVisible();
    const dppGroupErrorText = await loc.dppGroupError(page).textContent();
    await expect(dppGroupErrorText).toContain(TD.validationErrors.dppGroupRequired);

    await expect(loc.reasonForNeedError(page)).toBeVisible();
    const reasonForNeedErrorText = await loc.reasonForNeedError(page).textContent();
    await expect(reasonForNeedErrorText).toContain(TD.validationErrors.reasonForNeedRequired);

    await expect(loc.levelNeededError(page)).toBeVisible();
    const levelNeededErrorText = await loc.levelNeededError(page).textContent();
    await expect(levelNeededErrorText).toContain(TD.validationErrors.levelNeededRequired);

    await expect(loc.headcountError(page)).toBeVisible();
    const headcountErrorText = await loc.headcountError(page).textContent();
    await expect(headcountErrorText).toContain(TD.validationErrors.headcountRequired);

    await expect(loc.dppFteError(page)).toBeVisible();
    const dppFteErrorText = await loc.dppFteError(page).textContent();
    await expect(dppFteErrorText).toContain(TD.validationErrors.dppFteRequired);

    await expect(loc.projectStartDateError(page)).toBeVisible();
    const projectStartDateErrorText = await loc.projectStartDateError(page).textContent();
    await expect(projectStartDateErrorText).toContain(TD.validationErrors.projectStartDateRequired);

    await expect(loc.roleSummaryError(page)).toBeVisible();
    const roleSummaryErrorText = await loc.roleSummaryError(page).textContent();
    await expect(roleSummaryErrorText).toContain(TD.validationErrors.roleSummaryRequired);

    await expect(loc.roleResponsibilitiesError(page)).toBeVisible();
    const roleResponsibilitiesErrorText = await loc.roleResponsibilitiesError(page).textContent();
    await expect(roleResponsibilitiesErrorText).toContain(TD.validationErrors.roleResponsibilitiesRequired);

    await expect(loc.roleQualificationsError(page)).toBeVisible();
    const roleQualificationsErrorText = await loc.roleQualificationsError(page).textContent();
    await expect(roleQualificationsErrorText).toContain(TD.validationErrors.roleQualificationsRequired);
  });
});