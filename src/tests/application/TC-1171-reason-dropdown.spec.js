const { test, expect } = require('@playwright/test');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/core-ask-test-data');

test.describe('[UI] QE-910 TS-002: Verify Reason For DPP Need Dropdown Options', { tag: ['@smoke', '@regression', '@kpmg-core-ask'] }, () => {
  let coreAskPage;

  test('[TC-1171] Test Case - QE-910 TS-002 TC-001: Verify Reason For DPP Need dropdown displays three options', async ({ page }) => {
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAskPage.gotoBase();
    await expect(page).toHaveURL(TD.urls.base);

    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.credentials.validUser.username, TD.credentials.validUser.password);
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Navigate to Create Core ASK page
    await coreAskPage.gotoCreateCoreAsk();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Step 4: Locate the Reason For DPP Need dropdown field
    await expect(await coreAskPage.isReasonDropdownVisible()).toBeTruthy();

    // Step 5: Click on the Reason For DPP Need dropdown
    await coreAskPage.clickReasonDropdown();
    await page.waitForTimeout(500); // Allow dropdown animation

    // Verify dropdown expands
    await expect(await coreAskPage.isReasonDropdownExpanded()).toBeTruthy();

    // Step 6: Verify exactly three options are displayed
    const optionsCount = await coreAskPage.getDropdownOptionsCount();
    await expect(optionsCount).toBe(TD.expectedCounts.reasonOptions);

    // Verify all three options are visible
    for (const option of TD.reasonOptions) {
      await expect(await coreAskPage.isDropdownOptionVisible(option)).toBeTruthy();
    }

    // Step 7: Select 'Addition' from the dropdown
    await coreAskPage.selectReasonOption('Addition');
    await page.waitForTimeout(300);
    let selectedValue = await coreAskPage.getSelectedReason();
    await expect(selectedValue).toContain('Addition');

    // Step 8: Select 'Replacement' from the dropdown
    await coreAskPage.selectReasonOption('Replacement');
    await page.waitForTimeout(300);
    selectedValue = await coreAskPage.getSelectedReason();
    await expect(selectedValue).toContain('Replacement');

    // Step 9: Select 'Succession' from the dropdown
    await coreAskPage.selectReasonOption('Succession');
    await page.waitForTimeout(300);
    selectedValue = await coreAskPage.getSelectedReason();
    await expect(selectedValue).toContain('Succession');
  });
});
