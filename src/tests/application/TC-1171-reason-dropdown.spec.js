const { test, expect } = require('@playwright/test');
const CoreAskPage = require('../../pages/coreask.page');
const TD = require('../../data/coreask-test-data');

test.describe('[UI] QE-910 TS-002: Reason For DPP Need Dropdown Validation', { tag: ['@smoke', '@regression', '@kpmg-coreask'] }, () => {
  let coreAsk;

  test('[TC-1171] Test Case - QE-910 TS-002 TC-001: Verify Reason For DPP Need dropdown displays all 3 options', async ({ page }) => {
    coreAsk = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAsk.gotoBase();
    await coreAsk.waitForPageLoad();
    await expect(page).toHaveURL(TD.urls.base);

    // Step 2: Navigate to Create Core ASK page
    await coreAsk.gotoCreateCoreAsk();
    await coreAsk.waitForPageLoad();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Step 3: Locate the Reason For DPP Need dropdown field
    await expect(await coreAsk.isReasonDropdownVisible()).toBeTruthy();

    // Step 4: Click on the Reason For DPP Need dropdown
    await coreAsk.clickReasonDropdown();

    // Step 5: Verify exactly three options are displayed
    const optionCount = await coreAsk.getDropdownOptionCount();
    await expect(optionCount).toBe(TD.expectedCounts.reasonForDppNeed);

    const allOptions = await coreAsk.getAllDropdownOptions();
    
    // Verify all three expected options are present
    await expect(allOptions).toContain('Addition');
    await expect(allOptions).toContain('Replacement');
    await expect(allOptions).toContain('Succession');

    // Step 6: Select 'Addition' from the dropdown
    await coreAsk.selectDropdownOption('Addition');
    let selectedValue = await coreAsk.getSelectedDropdownValue('reason');
    await expect(selectedValue).toContain('Addition');

    // Step 7: Select 'Replacement' from the dropdown
    await coreAsk.clickReasonDropdown();
    await coreAsk.selectDropdownOption('Replacement');
    selectedValue = await coreAsk.getSelectedDropdownValue('reason');
    await expect(selectedValue).toContain('Replacement');

    // Step 8: Select 'Succession' from the dropdown
    await coreAsk.clickReasonDropdown();
    await coreAsk.selectDropdownOption('Succession');
    selectedValue = await coreAsk.getSelectedDropdownValue('reason');
    await expect(selectedValue).toContain('Succession');
  });
});
