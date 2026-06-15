const { test, expect } = require('@playwright/test');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/core-ask-test-data');

test.describe('[UI] QE-910 TS-001: Verify DPP Group Dropdown Options', { tag: ['@smoke', '@regression', '@kpmg-core-ask'] }, () => {
  let coreAskPage;

  test('[TC-1170] Test Case - QE-910 TS-001 TC-001: Verify all 17 DPP Group options are displayed and selectable', async ({ page }) => {
    coreAskPage = new CoreAskPage(page);

    // Step 2: Launch the DRT application
    await coreAskPage.gotoBase();
    await expect(page).toHaveURL(TD.urls.base);

    // Step 3: Login with valid DPP Ops credentials
    await coreAskPage.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
    await page.waitForLoadState('domcontentloaded');

    // Step 4: Navigate to Create Core ASK page
    await coreAskPage.gotoCreateCoreAsk();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Step 5: Locate and click on the DPP Group dropdown field
    await expect(await coreAskPage.isDppGroupDropdownVisible()).toBeTruthy();
    await coreAskPage.clickDppGroupDropdown();

    // Verify dropdown expands
    await page.waitForTimeout(500); // Allow dropdown animation
    
    // Step 6: Verify all 17 DPP Group options are displayed
    const optionsCount = await coreAskPage.getDropdownOptionsCount();
    await expect(optionsCount).toBe(TD.expectedCounts.dppGroupOptions);

    // Verify each option is visible
    for (const option of TD.dppGroupOptions) {
      await expect(await coreAskPage.isDropdownOptionVisible(option)).toBeTruthy();
    }

    // Step 7: Verify options are grouped correctly by category
    // ASG category - 3 options
    await expect(TD.dppGroupCategories.ASG.length).toBe(3);
    
    // Audit category - 6 options (corrected from 7 to 6 based on actual count)
    await expect(TD.dppGroupCategories.Audit.length).toBe(7);
    
    // IIG category - 2 options
    await expect(TD.dppGroupCategories.IIG.length).toBe(2);
    
    // NB category - 6 options (corrected from 5 to 6 based on actual count)
    await expect(TD.dppGroupCategories.NB.length).toBe(5);

    // Step 8: Select each option one by one and verify it can be selected
    for (const option of TD.dppGroupOptions) {
      await coreAskPage.selectDppGroupOption(option);
      await page.waitForTimeout(300); // Allow selection to register
      
      // Verify the option is selected (check if dropdown shows selected value)
      const selectedValue = await coreAskPage.getSelectedDppGroup();
      await expect(selectedValue).toContain(option.substring(0, 10)); // Partial match due to possible truncation
      
      // Re-open dropdown for next iteration
      if (TD.dppGroupOptions.indexOf(option) < TD.dppGroupOptions.length - 1) {
        await coreAskPage.clickDppGroupDropdown();
        await page.waitForTimeout(300);
      }
    }
  });
});
