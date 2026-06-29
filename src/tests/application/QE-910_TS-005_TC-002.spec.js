const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-005: Verify Role Posting field is hidden for Principal level', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-005 TC-002] Verify Role Posting field is not visible when Level Needed is Principal', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate Level Needed dropdown and select 'Principal'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.principal);
    const selectedLevel = await coreAskPage.getSelectedLevelNeeded();
    expect(selectedLevel).toBe(TD.levelNeeded.principal);

    // Step 5: Verify Role Posting field is not visible on the form
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBe(false);
  });
});