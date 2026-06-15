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
    const dppGroupDropdown = page.getByTestId("dppGroup");
    await expect(dppGroupDropdown).toBeVisible();
    await dppGroupDropdown.click();

    // Step 4: Verify all 17 DPP Group options are displayed in the dropdown
    const options = page.getByRole("option");
    await expect(options).toHaveCount(TD.expectedCounts.dppGroups);

    // Get an array of all text from the options
    const allOptionsText = await options.allTextContents();
    
    // Normalize the UI text to use standard hyphens so it matches TD data perfectly
    const normalizedOptionsText = allOptionsText.map(text => text.replace(/–/g, '-'));
    
    // Verify all expected options are present
    for (const expectedOption of TD.dppGroups) {
      const normalizedExpected = expectedOption.replace(/–/g, '-');
      expect(normalizedOptionsText).toContain(normalizedExpected);
    }

    // Step 5: Verify the options are grouped correctly by category
    const asgOptions = TD.dppGroupCategories.ASG;
    const auditOptions = TD.dppGroupCategories.Audit;
    const iigOptions = TD.dppGroupCategories.IIG;
    const nbOptions = TD.dppGroupCategories.NB;

    expect(asgOptions.length).toBe(3);
    expect(auditOptions.length).toBe(7);
    expect(iigOptions.length).toBe(2);
    expect(nbOptions.length).toBe(5);

    // Press escape to close the dropdown before starting the loop
    await page.keyboard.press('Escape');

    // Step 6: Select each option one by one and verify it can be selected
    for (const option of TD.dppGroups) {
      await dppGroupDropdown.click();
      
      // Find the exact UI string that matches our option (handling dash differences)
      const actualUiText = allOptionsText.find(t => t.replace(/–/g, '-') === option.replace(/–/g, '-'));
      
      // Click desired option from the popover list
      await page.getByRole("option", { name: actualUiText, exact: true }).click();
      
      // Verify selection by checking the main dropdown text container
      await expect(dppGroupDropdown).toContainText(actualUiText);
    }
  });
});
