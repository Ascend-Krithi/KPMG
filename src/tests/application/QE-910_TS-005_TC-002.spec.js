const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-005: Role Posting Visible for Multiple Levels', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-005 TC-002] Verify Role Posting field is visible for Sr. Director through Associate levels', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    const levelsToTest = [
      TD.levelNeeded.srDirector,
      TD.levelNeeded.director,
      TD.levelNeeded.associateDirector,
      TD.levelNeeded.srManager,
      TD.levelNeeded.manager,
      TD.levelNeeded.srAssociate,
      TD.levelNeeded.associate
    ];

    for (const level of levelsToTest) {
      await createCoreAsk.selectLevelNeeded(level);
      const isRolePostingVisible = await createCoreAsk.isRolePostingVisible();
      await expect(isRolePostingVisible).toBe(true);
    }
  });
});