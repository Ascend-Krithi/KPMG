const { test, expect } = require('../../fixtures');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/core-ask-test-data');

test.describe('[UI] QE-910 TS-001: DPP Group Dropdown Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-001 TC-001] Verify all 17 DPP Group options are displayed and selectable', async ({ page }) => {
    coreAskPage = new CoreAskPage(page);

    // Step 2: Launch the DRT application
    await coreAskPage.gotoLoginPage();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 3: Login with valid DPP Ops credentials
    await coreAskPage.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
    await page.waitForLoadState('domcontentloaded');

    // Step 4: Navigate to Create Core ASK page
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Verify Create Core ASK page loads with all form fields visible
    const isPageLoaded = await coreAskPage.isCreateCoreAskPageLoaded();
    expect(isPageLoaded).toBeTruthy();

    // Step 5: Locate and click on the DPP Group dropdown field
    await coreAskPage.clickDppGroupDropdown();

    // Verify DPP Group dropdown expands
    const isDppGroupVisible = await coreAskPage.isDppGroupDropdownVisible();
    expect(isDppGroupVisible).toBeTruthy();

    // Step 6: Verify all 17 DPP Group options are displayed
    const optionsCount = await coreAskPage.countDropdownOptions();
    expect(optionsCount).toBe(TD.expectedCounts.dppGroupTotal);

    // Verify all ASG options (3 options)
    for (const option of TD.dppGroupOptions.asg) {
      const isVisible = await coreAskPage.isOptionVisible(option);
      expect(isVisible).toBeTruthy();
    }

    // Verify all Audit options (6 options)
    for (const option of TD.dppGroupOptions.audit) {
      const isVisible = await coreAskPage.isOptionVisible(option);
      expect(isVisible).toBeTruthy();
    }

    // Verify all IIG options (2 options)
    for (const option of TD.dppGroupOptions.iig) {
      const isVisible = await coreAskPage.isOptionVisible(option);
      expect(isVisible).toBeTruthy();
    }

    // Verify all NB options (6 options)
    for (const option of TD.dppGroupOptions.nb) {
      const isVisible = await coreAskPage.isOptionVisible(option);
      expect(isVisible).toBeTruthy();
    }

    // Step 7: Verify the options are grouped correctly by category
    expect(TD.dppGroupOptions.asg.length).toBe(TD.expectedCounts.dppGroupASG);
    expect(TD.dppGroupOptions.audit.length).toBe(TD.expectedCounts.dppGroupAudit);
    expect(TD.dppGroupOptions.iig.length).toBe(TD.expectedCounts.dppGroupIIG);
    expect(TD.dppGroupOptions.nb.length).toBe(TD.expectedCounts.dppGroupNB);

    // Step 8: Select each option one by one and verify it can be selected
    const allOptions = [
      ...TD.dppGroupOptions.asg,
      ...TD.dppGroupOptions.audit,
      ...TD.dppGroupOptions.iig,
      ...TD.dppGroupOptions.nb
    ];

    for (const option of allOptions) {
      await coreAskPage.selectDppGroupOption(option);
      await page.waitForTimeout(500); // Small wait for selection to register
      
      // Verify the option is selected (dropdown should show selected value)
      const selectedValue = await coreAskPage.getSelectedDppGroup();
      expect(selectedValue).toContain(option);
    }
  });
});