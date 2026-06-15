const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-007: DPP Leadership Routing Verification', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-007 TC-001] Verify DPP Leadership user can route Core ASK only to DPP Ops', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch application
    await coreAskPage.goto();
    
    // Step 2: Login with DPP Leadership role credentials
    await coreAskPage.login(TD.dppLeadershipUser.username, TD.dppLeadershipUser.password);
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
    
    // Verify only DPP Ops is available
    expect(routeToOptions.length).toBe(1);
    expect(routeToOptions).toContain(TD.routeToOptions.dppLeadership[0]);
    
    // Step 6: Select DPP Ops from the dropdown
    await coreAskPage.selectRouteTo(TD.routeToOptions.dppLeadership[0]);
    
    // Step 7: Click Submit button
    await coreAskPage.clickSubmit();
    
    // Verify confirmation message
    await page.waitForTimeout(2000);
    const isConfirmationVisible = await coreAskPage.isConfirmationMessageVisible();
    expect(isConfirmationVisible).toBeTruthy();
  });
});