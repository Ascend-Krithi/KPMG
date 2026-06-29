const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-006: Verify Role Posting field displays for Executive Director and below', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-006 TC-001] Verify Role Posting field is visible with all 4 options for Executive Director level', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate Level Needed dropdown and select 'Executive Director'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.executiveDirector);
    const selectedLevel = await coreAskPage.getSelectedLevelNeeded();
    expect(selectedLevel).toBe(TD.levelNeeded.executiveDirector);

    // Step 5: Verify Role Posting field is visible on the form
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBe(true);

    // Step 6: Click on Role Posting dropdown to expand options
    await coreAskPage.clickRolePostingDropdown();

    // Step 7: Verify all four options are present
    const allOptions = await coreAskPage.getAllRolePostingOptions();
    expect(allOptions).toContain(TD.rolePosting.internal);
    expect(allOptions).toContain(TD.rolePosting.external);
    expect(allOptions).toContain(TD.rolePosting.both);
    expect(allOptions).toContain(TD.rolePosting.na);

    // Step 8: Select 'Internal (within KPMG)' and verify it is populated
    await coreAskPage.selectRolePosting(TD.rolePosting.internal);
    const selectedValue = await coreAskPage.getSelectedRolePosting();
    expect(selectedValue).toBe(TD.rolePosting.internal);
  });
});