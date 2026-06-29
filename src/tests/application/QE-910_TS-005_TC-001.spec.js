const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-005: Role Posting Visible for Executive Director', { tag: ['@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;

  test('[QE-910 TS-005 TC-001] Verify Role Posting field is visible with all options for Executive Director level', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.selectLevelNeeded(TD.levelNeeded.executiveDirector);

    const isRolePostingVisible = await createCoreAsk.isRolePostingVisible();
    await expect(isRolePostingVisible).toBe(true);

    const options = await createCoreAsk.getRolePostingOptions();
    await expect(options).toContain(TD.rolePostingOptions.internal);
    await expect(options).toContain(TD.rolePostingOptions.external);
    await expect(options).toContain(TD.rolePostingOptions.both);
    await expect(options).toContain(TD.rolePostingOptions.na);

    await createCoreAsk.selectRolePosting(TD.rolePostingOptions.internal);
  });
});