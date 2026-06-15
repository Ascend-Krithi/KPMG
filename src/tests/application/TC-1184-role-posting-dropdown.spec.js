const { test, expect } = require('../../fixtures');
const CoreAskPage = require('../../pages/coreask.page');
const TD = require('../../data/coreask-test-data');

test.describe('[UI] QE-910 TS-010: Role Posting Dropdown Validation', { tag: ['@smoke', '@regression', '@kpmg-coreask'] }, () => {
  let coreAsk;

  test('[TC-1184] Test Case - QE-910 TS-010 TC-003: Verify Role Posting field visibility and options for Executive Director and below', async ({ page }) => {
    coreAsk = new CoreAskPage(page);

    // Step 1: Launch the DRT application
    await coreAsk.gotoBase();
    await coreAsk.waitForPageLoad();
    await expect(page).toHaveURL(TD.urls.base);

    // Step 2: Navigate to Create Core ASK page
    await coreAsk.gotoCreateCoreAsk();
    await coreAsk.waitForPageLoad();
    await expect(page).toHaveURL(TD.urls.createCoreAsk);

    // Step 3: Locate the Level Needed dropdown and select 'Executive Director'
    await expect(await coreAsk.isLevelNeededDropdownVisible()).toBeTruthy();
    await coreAsk.clickLevelNeededDropdown();
    await coreAsk.selectDropdownOption('Executive Director');
    
    const selectedLevel = await coreAsk.getSelectedDropdownValue('levelNeeded');
    await expect(selectedLevel).toContain('Executive Director');

    // Step 4: Verify the Role Posting field becomes visible
    await expect(await coreAsk.isRolePostingDropdownVisible()).toBeTruthy();

    // Step 5: Click on the Role Posting dropdown
    await coreAsk.clickRolePostingDropdown();

    // Step 6: Verify all four options are displayed
    const optionCount = await coreAsk.getDropdownOptionCount();
    await expect(optionCount).toBe(TD.expectedCounts.rolePosting);

    const allOptions = await coreAsk.getAllDropdownOptions();
    
    // Verify all four expected options are present
    await expect(allOptions).toContain('Internal (within KPMG)');
    await expect(allOptions).toContain('External (outside KPMG)');
    await expect(allOptions).toContain('Both (internal and external)');
    await expect(allOptions).toContain('N/A (determined to be only a transitional core role recruited through BU)');

    // Close the dropdown
    await page.keyboard.press('Escape');

    // Step 7: Test visibility for other levels below Executive Director
    const levelsToTest = ['Sr. Director', 'Director', 'Associate Director', 'Sr. Manager', 'Manager', 'Sr. Associate', 'Associate'];

    for (const level of levelsToTest) {
      // Select the level
      await coreAsk.clickLevelNeededDropdown();
      await coreAsk.selectDropdownOption(level);
      
      const currentLevel = await coreAsk.getSelectedDropdownValue('levelNeeded');
      await expect(currentLevel).toContain(level);

      // Verify Role Posting field remains visible
      await expect(await coreAsk.isRolePostingDropdownVisible()).toBeTruthy();
    }

    // Additional validation: Verify Role Posting is hidden for Partner, Principal, Managing Director
    const levelsWithoutRolePosting = ['Partner', 'Principal', 'Managing Director'];

    for (const level of levelsWithoutRolePosting) {
      await coreAsk.clickLevelNeededDropdown();
      await coreAsk.selectDropdownOption(level);
      
      const currentLevel = await coreAsk.getSelectedDropdownValue('levelNeeded');
      await expect(currentLevel).toContain(level);

      // Verify Role Posting field is hidden
      await expect(await coreAsk.isRolePostingDropdownVisible()).toBeFalsy();
    }
  });
});