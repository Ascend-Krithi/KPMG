const { test, expect } = require('../../fixtures');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/core-ask-test-data');

test.describe('[UI] QE-910 TS-002: Reason For DPP Need Dropdown Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-002 TC-001] Verify Reason For DPP Need dropdown displays exactly three options', async ({ page }) => {
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAskPage.gotoLoginPage();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.credentials.validUser.username, TD.credentials.validUser.password);
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Navigate to Create Core ASK page
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Verify Create Core ASK page loads successfully with all form fields
    const isPageLoaded = await coreAskPage.isCreateCoreAskPageLoaded();
    expect(isPageLoaded).toBeTruthy();

    // Step 4: Locate the Reason For DPP Need dropdown field
    const isReasonVisible = await coreAskPage.isReasonDropdownVisible();
    expect(isReasonVisible).toBeTruthy();

    // Verify Reason For DPP Need dropdown is enabled
    const isReasonEnabled = await coreAskPage.isReasonDropdownEnabled();
    expect(isReasonEnabled).toBeTruthy();

    // Step 5: Click on the Reason For DPP Need dropdown
    await coreAskPage.clickReasonDropdown();

    // Verify dropdown expands showing all available options
    await page.waitForTimeout(500);

    // Step 6: Verify exactly three options are displayed
    const optionsCount = await coreAskPage.countDropdownOptions();
    expect(optionsCount).toBe(TD.expectedCounts.reasonForDppNeed);

    // Verify Addition option is visible
    const isAdditionVisible = await coreAskPage.isOptionVisible(TD.reasonForDppNeed.addition);
    expect(isAdditionVisible).toBeTruthy();

    // Verify Replacement option is visible
    const isReplacementVisible = await coreAskPage.isOptionVisible(TD.reasonForDppNeed.replacement);
    expect(isReplacementVisible).toBeTruthy();

    // Verify Succession option is visible
    const isSuccessionVisible = await coreAskPage.isOptionVisible(TD.reasonForDppNeed.succession);
    expect(isSuccessionVisible).toBeTruthy();

    // Step 7: Select 'Addition' from the dropdown
    await coreAskPage.selectReasonOption(TD.reasonForDppNeed.addition);
    await page.waitForTimeout(500);

    // Verify 'Addition' is selected and displayed
    let selectedValue = await coreAskPage.getSelectedReason();
    expect(selectedValue).toContain(TD.reasonForDppNeed.addition);

    // Step 8: Select 'Replacement' from the dropdown
    await coreAskPage.selectReasonOption(TD.reasonForDppNeed.replacement);
    await page.waitForTimeout(500);

    // Verify 'Replacement' is selected and displayed
    selectedValue = await coreAskPage.getSelectedReason();
    expect(selectedValue).toContain(TD.reasonForDppNeed.replacement);

    // Step 9: Select 'Succession' from the dropdown
    await coreAskPage.selectReasonOption(TD.reasonForDppNeed.succession);
    await page.waitForTimeout(500);

    // Verify 'Succession' is selected and displayed
    selectedValue = await coreAskPage.getSelectedReason();
    expect(selectedValue).toContain(TD.reasonForDppNeed.succession);
  });
});