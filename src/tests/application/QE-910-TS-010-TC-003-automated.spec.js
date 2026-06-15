const { test, expect } = require('../../fixtures');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/core-ask-test-data');

test.describe('[UI] QE-910 TS-010: Role Posting Field Visibility and Options Validation', { tag: ['@smoke', '@regression', '@core-ask'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-010 TC-003] Verify Role Posting field visibility and four options for Executive Director and below', async ({ page }) => {
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAskPage.gotoLoginPage();
    await expect(page).toHaveURL(TD.urls.login);

    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.credentials.testUser.username, TD.credentials.testUser.password);
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Navigate to Create Core ASK page
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Verify Create Core ASK page loads successfully
    const isPageLoaded = await coreAskPage.isCreateCoreAskPageLoaded();
    expect(isPageLoaded).toBeTruthy();

    // Step 4: Locate the Level Needed dropdown and select 'Executive Director'
    await coreAskPage.selectLevelNeededOption(TD.levelNeeded.executiveDirector);
    await page.waitForTimeout(500);

    // Verify 'Executive Director' is selected
    const selectedLevel = await coreAskPage.getSelectedLevelNeeded();
    expect(selectedLevel).toContain(TD.levelNeeded.executiveDirector);

    // Step 5: Verify the Role Posting field becomes visible
    const isRolePostingVisible = await coreAskPage.isRolePostingVisible();
    expect(isRolePostingVisible).toBeTruthy();

    // Step 6: Click on the Role Posting dropdown
    await coreAskPage.clickRolePostingDropdown();
    await page.waitForTimeout(500);

    // Verify dropdown expands showing all available options
    const optionsCount = await coreAskPage.countDropdownOptions();
    expect(optionsCount).toBe(TD.expectedCounts.rolePosting);

    // Step 7: Verify all four options are displayed
    // Verify 'Internal (within KPMG)' option
    const isInternalVisible = await coreAskPage.isOptionVisible(TD.rolePosting.internal);
    expect(isInternalVisible).toBeTruthy();

    // Verify 'External (outside KPMG)' option
    const isExternalVisible = await coreAskPage.isOptionVisible(TD.rolePosting.external);
    expect(isExternalVisible).toBeTruthy();

    // Verify 'Both (internal and external)' option
    const isBothVisible = await coreAskPage.isOptionVisible(TD.rolePosting.both);
    expect(isBothVisible).toBeTruthy();

    // Verify 'N/A' option
    const isNAVisible = await coreAskPage.isOptionVisible(TD.rolePosting.na);
    expect(isNAVisible).toBeTruthy();

    // Step 8: Test visibility for other levels below Executive Director
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
      // Select the level
      await coreAskPage.selectLevelNeededOption(level);
      await page.waitForTimeout(500);

      // Verify Role Posting field remains visible
      const isVisible = await coreAskPage.isRolePostingVisible();
      expect(isVisible).toBeTruthy();
    }

    // Additional test: Verify Role Posting is hidden for Partner, Principal, Managing Director
    const seniorLevels = [
      TD.levelNeeded.partner,
      TD.levelNeeded.principal,
      TD.levelNeeded.managingDirector
    ];

    for (const level of seniorLevels) {
      // Select the senior level
      await coreAskPage.selectLevelNeededOption(level);
      await page.waitForTimeout(500);

      // Verify Role Posting field is NOT visible for these levels
      const isVisible = await coreAskPage.isRolePostingVisible();
      expect(isVisible).toBeFalsy();
    }
  });
});