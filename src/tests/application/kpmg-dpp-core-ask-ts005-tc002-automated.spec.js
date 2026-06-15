const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-005: Role Posting Field Visibility for Principal', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-005 TC-002] Verify Role Posting field is not displayed when Level Needed = Principal', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch application
    await coreAskPage.goto();
    
    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.dppOpsUser.username, TD.dppOpsUser.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
    
    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Step 4: Select 'Principal' from Level Needed dropdown
    await coreAskPage.selectLevelNeeded(TD.levelNeededOptions.principal);
    
    // Step 5: Verify Role Posting field is not displayed
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBeFalsy();
  });
});