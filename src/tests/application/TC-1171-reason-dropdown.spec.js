const { test, expect } = require('@playwright/test');
const CoreAskPage = require('../../pages/coreask.page');
const TD = require('../../data/coreask-test-data');

test.describe('[UI] QE-910 TS-002: Reason For DPP Need Dropdown Validation', { tag: ['@kpmg-coreask'] }, () => {
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
    const reasonDropdown = page.getByTestId("reason");
    await expect(reasonDropdown).toBeVisible();

    // Step 4: Click on the Reason For DPP Need dropdown
    await reasonDropdown.click();

    // Step 5: Verify exactly three options are displayed
    const options = page.getByRole("option");
    await expect(options).toHaveCount(TD.expectedCounts.reasonForDppNeed);

    const allOptionsText = await options.allTextContents();
    
    // Verify all three expected options are present
    expect(allOptionsText).toContain('Addition');
    expect(allOptionsText).toContain('Replacement');
    expect(allOptionsText).toContain('Succession');

    // Step 6: Select 'Addition' from the dropdown
    await page.getByRole("option", { name: 'Addition', exact: true }).click();
    await expect(reasonDropdown).toContainText('Addition');

    // Step 7: Select 'Replacement' from the dropdown
    await reasonDropdown.click();
    await page.getByRole("option", { name: 'Replacement', exact: true }).click();
    await expect(reasonDropdown).toContainText('Replacement');

    // Step 8: Select 'Succession' from the dropdown
    await reasonDropdown.click();
    await page.getByRole("option", { name: 'Succession', exact: true }).click();
    await expect(reasonDropdown).toContainText('Succession');
  });
});
