const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-008: DPP Ops Routing Verification', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-008 TC-001] Verify DPP Ops user can route Core ASK to multiple leadership options', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch application
    await coreAskPage.goto();
    
    // Step 2: Login with DPP Ops role credentials
    await coreAskPage.login(TD.dppOpsUser.username, TD.dppOpsUser.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
    
    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Step 4: Fill all mandatory fields
    await coreAskPage.fillMandatoryFields(TD.testFormData);
    
    // Step 5: Click on Route To dropdown
    const routeToOptions = await coreAskPage.getRouteToOptions();
    
    // Verify multiple leadership options are available
    for (const expectedOption of TD.routeToOptions.dppOps) {
      expect(routeToOptions).toContain(expectedOption);
    }
    
    // Step 6: Select 'NBL' from the dropdown
    await coreAskPage.selectRouteTo(TD.routeToOptions.dppOps[0]);
    
    // Step 7: Click Submit button
    await coreAskPage.clickSubmit();
    
    // Verify confirmation message
    await page.waitForTimeout(2000);
    const isConfirmationVisible = await coreAskPage.isConfirmationMessageVisible();
    expect(isConfirmationVisible).toBeTruthy();
  });
});