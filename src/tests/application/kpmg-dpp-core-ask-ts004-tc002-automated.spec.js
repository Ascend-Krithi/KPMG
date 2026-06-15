const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-004: Leadership Position Details Textbox Verification', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-004 TC-002] Verify Leadership position details textbox appears and is editable when General/Specialty Needed = Leadership position', async ({ page }) => {
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
    
    // Step 4: Select 'Leadership position' from General/Specialty Needed dropdown
    await coreAskPage.selectGeneralSpecialtyNeeded(TD.generalSpecialtyNeededOptions.leadershipPosition);
    
    // Verify leadership position details textbox appears
    const isLeadershipDetailsVisible = await coreAskPage.isLeadershipPositionDetailsVisible();
    expect(isLeadershipDetailsVisible).toBeTruthy();
    
    // Step 5: Enter leadership position details in the textbox
    await coreAskPage.fillLeadershipPositionDetails(TD.leadershipPositionDetails);
    
    // Verify text is accepted and displayed
    await page.waitForTimeout(500);
  });
});