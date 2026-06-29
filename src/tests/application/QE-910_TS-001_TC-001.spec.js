const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-001: Verify DPP Group dropdown displays all 17 values', { tag: ['@smoke', '@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-001 TC-001] Verify all 17 DPP Group dropdown values are present and selectable', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with DPP Ops or DPP Leadership role credentials
    // Note: Login implementation depends on authentication mechanism
    // Assuming user is already logged in or SSO is handled

    // Step 3: Navigate to Create Core ASK page (already on page from goto)
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate and click on DPP Group dropdown field
    await coreAskPage.clickDppGroupDropdown();

    // Step 5: Verify all 17 dropdown values are present
    const allOptions = await coreAskPage.getAllDppGroupOptions();
    
    // Verify count
    expect(allOptions.length).toBeGreaterThanOrEqual(17);
    
    // Verify each expected value is present
    for (const expectedValue of TD.allDppGroups) {
      expect(allOptions).toContain(expectedValue);
    }

    // Step 6: Select any value from the dropdown and verify it is populated
    await coreAskPage.selectDppGroup(TD.dppGroups.auditBanking);
    const selectedValue = await coreAskPage.getSelectedDppGroup();
    expect(selectedValue).toBe(TD.dppGroups.auditBanking);
  });
});