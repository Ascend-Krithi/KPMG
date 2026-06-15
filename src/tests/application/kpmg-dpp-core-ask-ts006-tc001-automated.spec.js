const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-006: Role Posting Field Options for Executive Director', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-006 TC-001] Verify Role Posting field options when Level Needed = Executive Director', async ({ page }) => {
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
    
    // Step 4: Select 'Executive Director' from Level Needed dropdown
    await coreAskPage.selectLevelNeeded(TD.levelNeededOptions.executiveDirector);
    
    // Verify Role Posting field becomes visible
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBeTruthy();
    
    // Step 5: Click on Role Posting dropdown and verify options
    const rolePostingOptions = await coreAskPage.getRolePostingOptions();
    
    // Verify all expected options are present
    for (const expectedOption of TD.rolePostingOptions) {
      expect(rolePostingOptions).toContain(expectedOption);
    }
    
    // Step 6: Select 'Internal (within KPMG)' from the dropdown
    await coreAskPage.selectRolePosting(TD.rolePostingOptions[0]);
  });
});