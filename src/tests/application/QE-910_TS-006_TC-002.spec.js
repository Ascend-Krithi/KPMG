const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-006: Verify Role Posting field visibility for all levels below Executive Director', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-006 TC-002] Verify Role Posting field is visible for Sr. Director, Director, Associate Director, Sr. Manager, Manager, Sr. Associate, and Associate', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Test with 'Sr. Director'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.srDirector);
    let isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 5: Test with 'Director'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.director);
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 6: Test with 'Associate Director'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.associateDirector);
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 7: Test with 'Sr. Manager'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.srManager);
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 8: Test with 'Manager'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.manager);
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 9: Test with 'Sr. Associate'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.srAssociate);
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);

    // Step 10: Test with 'Associate'
    await coreAskPage.selectLevelNeeded(TD.levelNeeded.associate);
    isVisible = await coreAskPage.isRolePostingVisible();
    expect(isVisible).toBe(true);
  });
});