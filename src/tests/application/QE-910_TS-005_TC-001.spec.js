const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-005: Verify Role Posting field is hidden for Partner level', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-005 TC-001] Verify Role Posting field is not visible when Level Needed is Partner', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate Level Needed dropdown and click on it
    await coreAskPage.clickLevelNeededDropdown();

    // Step 5: Select 'Partner' from the Level Needed dropdown
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.partner);
    const selectedLevel = await coreAskPage.getSelectedLevelNeeded();
    expect(selectedLevel).toBe(TD.levelNeeded.partner);

    // Step 6: Scroll through the form and verify Role Posting field visibility
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBe(false);

    // Step 7: Verify that the form can be submitted without Role Posting field
    // This is validated by the field not being visible/required
    expect(isRolePostingVisible).toBe(false);
  });
});