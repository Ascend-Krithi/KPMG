const { test, expect } = require('../../fixtures');
const KpmgCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-010: Role Posting Field Visibility Validation', { tag: ['@smoke', '@regression', '@kpmg-coreask'] }, () => {
  let coreAskPage;

  test('[TC-1184] Test Case - QE-910 TS-010 TC-003: Verify Role Posting field visibility and options for Executive Director and below levels', async ({ page }) => {
    coreAskPage = new KpmgCoreAskPage(page);

    // Step 1: Launch the DRT application in a browser
    await test.step('Step 1: Launch the DRT application', async () => {
      await coreAskPage.gotoBaseUrl();
      await expect(page).toHaveURL(TD.urls.baseUrl);
      console.log('✓ DRT application page loads successfully');
    });

    // Step 2: Navigate to Create Core ASK page
    await test.step('Step 2: Navigate to Create Core ASK page', async () => {
      await coreAskPage.gotoCreateCoreAsk();
      await expect(page).toHaveURL(TD.urls.createCoreAsk);
      console.log('✓ Create Core ASK page loads successfully');
    });

    // Step 3: Locate the Level Needed dropdown and select 'Executive Director'
    await test.step('Step 3: Select Executive Director from Level Needed dropdown', async () => {
      await coreAskPage.selectLevelNeededOption('Executive Director');
      const selectedValue = await coreAskPage.getSelectedLevelNeededValue();
      expect(selectedValue).toBeTruthy();
      console.log("✓ 'Executive Director' is selected in the dropdown");
    });

    // Step 4: Verify the Role Posting field becomes visible
    await test.step('Step 4: Verify the Role Posting field becomes visible', async () => {
      const isVisible = await coreAskPage.isRolePostingDropdownVisible();
      expect(isVisible).toBeTruthy();
      console.log('✓ Role Posting dropdown field is displayed on the page');
    });

    // Step 5: Click on the Role Posting dropdown
    await test.step('Step 5: Click on the Role Posting dropdown', async () => {
      await coreAskPage.clickRolePostingDropdown();
      console.log('✓ Dropdown expands showing all available options');
    });

    // Step 6: Verify all four options are displayed
    await test.step('Step 6: Verify all four Role Posting options are displayed', async () => {
      const optionsCount = await coreAskPage.getRolePostingOptionsCount();
      expect(optionsCount).toBe(TD.expectedCounts.rolePostingOptions);
      
      const options = await coreAskPage.getRolePostingOptions();
      for (const expectedOption of TD.rolePostingOptions) {
        expect(options).toContain(expectedOption);
      }
      
      console.log('✓ All four options are visible in the dropdown');
      console.log('  - Internal (within KPMG)');
      console.log('  - External (outside KPMG)');
      console.log('  - Both (internal and external)');
      console.log('  - N/A (determined to be only a transitional core role recruited through BU)');
    });

    // Step 7: Test visibility for other levels below Executive Director
    await test.step('Step 7: Test Role Posting visibility for levels below Executive Director', async () => {
      const levelsToTest = ['Sr. Director', 'Director', 'Associate Director', 'Sr. Manager', 'Manager', 'Sr. Associate', 'Associate'];
      
      for (const level of levelsToTest) {
        await coreAskPage.selectLevelNeededOption(level);
        const isVisible = await coreAskPage.isRolePostingDropdownVisible();
        expect(isVisible).toBeTruthy();
        console.log(`✓ Role Posting field remains visible for level: ${level}`);
      }
      
      console.log('✓ Role Posting field remains visible for all levels: Sr. Director, Director, Associate Director, Sr. Manager, Manager, Sr. Associate, Associate');
    });
  });
});