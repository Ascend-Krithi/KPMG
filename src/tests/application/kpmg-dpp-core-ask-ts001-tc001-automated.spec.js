const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-001: DPP Group Dropdown Verification', { tag: ['@smoke', '@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-001 TC-001] Verify DPP Group dropdown shows all 17 options in Create Core ASK', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch the KPMG DPP System application
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.baseUrl);
    
    // Step 2 & 3: Login with DPP Ops user credentials
    await coreAskPage.login(TD.dppOpsUser.username, TD.dppOpsUser.password);
    
    // Verify dashboard is displayed
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
    
    // Step 4: Navigate to Core ASK section
    await coreAskPage.navigateToCoreAsk();
    
    // Step 5: Click on Create Core ASK button
    await coreAskPage.clickCreateCoreAsk();
    
    // Verify Create Core ASK form is displayed
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Step 6: Click on DPP Group dropdown
    await coreAskPage.clickDppGroupDropdown();
    
    // Step 7: Verify all 17 options are displayed
    const dppGroupOptions = await coreAskPage.getDppGroupOptions();
    
    // Verify count
    expect(dppGroupOptions.length).toBe(TD.expectedDppGroupCount);
    
    // Verify all expected options are present
    for (const expectedOption of TD.dppGroupOptions) {
      expect(dppGroupOptions).toContain(expectedOption);
    }
  });
});