const { test, expect } = require('@playwright/test');
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
    const levelNeededDropdown = page.getByTestId("levelNeeded");
    await expect(levelNeededDropdown).toBeVisible();
    await levelNeededDropdown.click();
    
    await page.getByRole("option", { name: 'Executive Director', exact: true }).click();
    await expect(levelNeededDropdown).toContainText('Executive Director');

    // Step 4: Verify the Role Posting field becomes visible
    const rolePostingDropdown = page.getByTestId("rolePosting"); 
    await expect(rolePostingDropdown).toBeVisible();

    // Step 5: Click on the Role Posting dropdown
    await rolePostingDropdown.click();

    // Step 6: Verify all four options are displayed
    const options = page.getByRole("option");
    await expect(options).toHaveCount(TD.expectedCounts.rolePosting);

    const allOptionsText = await options.allTextContents();
    
    // Verify all four expected options are present using the actual UI labels
    expect(allOptionsText).toContain('Internal');
    expect(allOptionsText).toContain('External');
    expect(allOptionsText).toContain('Both');
    expect(allOptionsText).toContain('N/A');

    // Close the dropdown
    await page.keyboard.press('Escape');

    // Step 7: Test visibility for other levels below Executive Director
    const levelsToTest = ['Sr. Director', 'Director', 'Associate Director', 'Sr. Manager', 'Manager', 'Sr. Associate', 'Associate'];

    for (const level of levelsToTest) {
      // Select the level
      await levelNeededDropdown.click();
      await page.getByRole("option", { name: level, exact: true }).click();
      
      await expect(levelNeededDropdown).toContainText(level);

      // Verify Role Posting field remains visible
      await expect(rolePostingDropdown).toBeVisible();
    }

    // Additional validation: Verify Role Posting is hidden for Partner, Principal, Managing Director
    const levelsWithoutRolePosting = ['Partner', 'Principal', 'Managing Director'];

    for (const level of levelsWithoutRolePosting) {
      await levelNeededDropdown.click();
      await page.getByRole("option", { name: level, exact: true }).click();
      
      await expect(levelNeededDropdown).toContainText(level);

      // Verify Role Posting field is hidden
      await expect(rolePostingDropdown).toBeHidden(); 
    }
  });
});
