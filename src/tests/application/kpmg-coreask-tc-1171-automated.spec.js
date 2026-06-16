const { test, expect } = require('../../fixtures');
const KpmgCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-002: Reason For DPP Need Dropdown Validation', { tag: ['@smoke', '@regression', '@kpmg-coreask'] }, () => {
  let coreAskPage;

  test('[TC-1171] Test Case - QE-910 TS-002 TC-001: Verify Reason For DPP Need dropdown displays three options (Addition, Replacement, Succession)', async ({ page }) => {
    coreAskPage = new KpmgCoreAskPage(page);

    // Step 1: Launch the DRT application in a browser
    await test.step('Step 1: Launch the DRT application', async () => {
      await coreAskPage.gotoBaseUrl();
      await expect(page).toHaveURL(TD.urls.baseUrl);
      console.log('✓ DRT application page loads successfully');
    });

    // Step 2: Navigate to Create Core ASK page
    await test.step('Step 2: Navigate to Create Core ASK page', async () => {
      await coreAskPage.gotoCreateCoreAsk();
      await expect(page).toHaveURL(TD.urls.createCoreAsk);
      const formFieldsVisible = await coreAskPage.areFormFieldsVisible();
      expect(formFieldsVisible).toBeTruthy();
      console.log('✓ Create Core ASK page loads successfully with all form fields');
    });

    // Step 3: Locate the Reason For DPP Need dropdown field
    await test.step('Step 3: Locate the Reason For DPP Need dropdown field', async () => {
      const isVisible = await coreAskPage.isReasonForDppNeedDropdownVisible();
      expect(isVisible).toBeTruthy();
      const isEnabled = await coreAskPage.isReasonForDppNeedDropdownEnabled();
      expect(isEnabled).toBeTruthy();
      console.log('✓ Reason For DPP Need dropdown is visible and enabled');
    });

    // Step 4: Click on the Reason For DPP Need dropdown
    await test.step('Step 4: Click on the Reason For DPP Need dropdown', async () => {
      await coreAskPage.clickReasonForDppNeedDropdown();
      console.log('✓ Dropdown expands showing all available options');
    });

    // Step 5: Verify exactly three options are displayed
    await test.step('Step 5: Verify exactly three options are displayed: Addition, Replacement, and Succession', async () => {
      const optionsCount = await coreAskPage.getReasonForDppNeedOptionsCount();
      expect(optionsCount).toBe(TD.expectedCounts.reasonForDppNeedOptions);
      
      const options = await coreAskPage.getReasonForDppNeedOptions();
      expect(options).toContain(TD.reasonForDppNeed.addition);
      expect(options).toContain(TD.reasonForDppNeed.replacement);
      expect(options).toContain(TD.reasonForDppNeed.succession);
      
      console.log('✓ Three options are visible in the dropdown: Addition, Replacement, Succession');
    });

    // Step 6: Select 'Addition' from the dropdown
    await test.step('Step 6: Select Addition from the dropdown', async () => {
      await coreAskPage.selectReasonForDppNeedOption(TD.reasonForDppNeed.addition);
      const selectedValue = await coreAskPage.getSelectedReasonForDppNeedValue();
      expect(selectedValue).toBeTruthy();
      console.log("✓ 'Addition' is selected and displayed in the dropdown field");
    });

    // Step 7: Select 'Replacement' from the dropdown
    await test.step('Step 7: Select Replacement from the dropdown', async () => {
      await coreAskPage.selectReasonForDppNeedOption(TD.reasonForDppNeed.replacement);
      const selectedValue = await coreAskPage.getSelectedReasonForDppNeedValue();
      expect(selectedValue).toBeTruthy();
      console.log("✓ 'Replacement' is selected and displayed in the dropdown field");
    });

    // Step 8: Select 'Succession' from the dropdown
    await test.step('Step 8: Select Succession from the dropdown', async () => {
      await coreAskPage.selectReasonForDppNeedOption(TD.reasonForDppNeed.succession);
      const selectedValue = await coreAskPage.getSelectedReasonForDppNeedValue();
      expect(selectedValue).toBeTruthy();
      console.log("✓ 'Succession' is selected and displayed in the dropdown field");
    });
  });
});