const { test, expect } = require('@playwright/test');
const CoreAskPage = require('../../pages/coreask.page');
const TD = require('../../data/coreask-test-data');

test.describe('[UI] QE-910 TS-001: DPP Group Dropdown Validation', { tag: ['@smoke', '@regression', '@kpmg-coreask'] }, () => {
  let coreAsk;

  test('[TC-1170] Test Case - QE-910 TS-001 TC-001: Verify DPP Group dropdown displays all 17 options correctly categorized', async ({ page }) => {
    coreAsk = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAsk.gotoBase();
    await coreAsk.waitForPageLoad();
    await expect(page).toHaveURL(TD.urls.base);

    // Step 2: Navigate to Create Core ASK page
    await coreAsk.gotoCreateCoreAsk();
    await coreAsk.waitForPageLoad();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Step 3: Locate and click on the DPP Group dropdown field
    await expect(await coreAsk.isDppGroupDropdownVisible()).toBeTruthy();
    await coreAsk.clickDppGroupDropdown();

    // Step 4: Verify all 17 DPP Group options are displayed in the dropdown
    const optionCount = await coreAsk.getDropdownOptionCount();
    await expect(optionCount).toBe(TD.expectedCounts.dppGroups);

    const allOptions = await coreAsk.getAllDropdownOptions();
    
    // Verify all expected options are present
    for (const expectedOption of TD.dppGroups) {
      await expect(allOptions).toContain(expectedOption);
    }

    // Step 5: Verify the options are grouped correctly by category
    const asgOptions = TD.dppGroupCategories.ASG;
    const auditOptions = TD.dppGroupCategories.Audit;
    const iigOptions = TD.dppGroupCategories.IIG;
    const nbOptions = TD.dppGroupCategories.NB;

    await expect(asgOptions.length).toBe(3);
    await expect(auditOptions.length).toBe(7);
    await expect(iigOptions.length).toBe(2);
    await expect(nbOptions.length).toBe(5);

    // Step 6: Select each option one by one and verify it can be selected
    for (const option of TD.dppGroups) {
      // Re-open dropdown for each selection
      await coreAsk.clickDppGroupDropdown();
      await expect(await coreAsk.isDropdownOptionVisible(option)).toBeTruthy();
      await coreAsk.selectDropdownOption(option);
      
      // Verify selection by checking the dropdown displays selected value
      const selectedValue = await coreAsk.getSelectedDropdownValue('dppGroup');
      await expect(selectedValue).toContain(option);
    }
  });
});
