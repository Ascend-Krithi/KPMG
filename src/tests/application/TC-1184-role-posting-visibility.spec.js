const { test, expect } = require('@playwright/test');
const CoreAskPage = require('../../pages/core-ask.page');
const TD = require('../../data/core-ask-test-data');

test.describe('[UI] QE-910 TS-010: Verify Role Posting Field Visibility and Options', { tag: ['@smoke', '@regression', '@kpmg-core-ask'] }, () => {
  let coreAskPage;

  test('[TC-1184] Test Case - QE-910 TS-010 TC-003: Verify Role Posting field visibility for Executive Director and below', async ({ page }) => {
    coreAskPage = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAskPage.gotoBase();
    await expect(page).toHaveURL(TD.urls.base);

    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.credentials.testUser.username, TD.credentials.testUser.password);
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Navigate to Create Core ASK page
    await coreAskPage.gotoCreateCoreAsk();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Step 4: Locate the Level Needed dropdown and select 'Executive Director'
    await expect(await coreAskPage.isLevelNeededDropdownVisible()).toBeTruthy();
    await coreAskPage.selectLevelNeededOption('Executive Director');
    await page.waitForTimeout(500); // Allow conditional field to appear

    // Step 5: Verify the Role Posting field becomes visible
    await expect(await coreAskPage.isRolePostingFieldVisible()).toBeTruthy();

    // Step 6: Click on the Role Posting dropdown
    await page.getByTestId('generalSpecialty').click();
    await page.waitForTimeout(500);

    // Step 7: Verify all four options are displayed
    const optionsCount = await coreAskPage.getDropdownOptionsCount();
    await expect(optionsCount).toBe(TD.expectedCounts.rolePostingOptions);

    // Verify each option is visible
    for (const option of TD.rolePostingOptions) {
      await expect(await coreAskPage.isDropdownOptionVisible(option)).toBeTruthy();
    }

    // Step 8: Test visibility for other levels below Executive Director
    const levelsToTest = ['Sr. Director', 'Director', 'Associate Director', 'Sr. Manager', 'Manager', 'Sr. Associate', 'Associate'];
    
    for (const level of levelsToTest) {
      // Select the level
      await coreAskPage.selectLevelNeededOption(level);
      await page.waitForTimeout(500);
      
      // Verify Role Posting field remains visible
      await expect(await coreAskPage.isRolePostingFieldVisible()).toBeTruthy();
    }

    // Verify Role Posting is hidden for Partner, Principal, Managing Director
    const hiddenLevels = ['Partner', 'Principal', 'Managing Director'];
    
    for (const level of hiddenLevels) {
      await coreAskPage.selectLevelNeededOption(level);
      await page.waitForTimeout(500);
      
      // Verify Role Posting field is NOT visible
      await expect(await coreAskPage.isRolePostingFieldVisible()).toBeFalsy();
    }
  });
});
