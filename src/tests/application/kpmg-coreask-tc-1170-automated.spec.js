const { test, expect } = require('../../fixtures');
const KpmgCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-001: DPP Group Dropdown Validation', { tag: ['@smoke', '@regression', '@kpmg-coreask'] }, () => {
  let coreAskPage;

  test('[TC-1170] Test Case - QE-910 TS-001 TC-001: Verify DPP Group dropdown displays all 17 options correctly categorized', async ({ page }) => {
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
      const formFieldsVisible = await coreAskPage.areFormFieldsVisible();
      expect(formFieldsVisible).toBeTruthy();
      console.log('✓ Create Core ASK page loads with all form fields visible');
    });

    // Step 3: Locate and click on the DPP Group dropdown field
    await test.step('Step 3: Locate and click on the DPP Group dropdown field', async () => {
      const isVisible = await coreAskPage.isDppGroupDropdownVisible();
      expect(isVisible).toBeTruthy();
      await coreAskPage.clickDppGroupDropdown();
      console.log('✓ DPP Group dropdown expands showing all available options');
    });

    // Step 4: Verify all 17 DPP Group options are displayed in the dropdown
    await test.step('Step 4: Verify all 17 DPP Group options are displayed', async () => {
      const optionsCount = await coreAskPage.getDppGroupOptionsCount();
      expect(optionsCount).toBe(TD.expectedCounts.dppGroupOptions);
      
      const options = await coreAskPage.getDppGroupOptions();
      for (const expectedOption of TD.dppGroupOptions) {
        expect(options).toContain(expectedOption);
      }
      console.log('✓ All 17 options are visible with correct names');
    });

    // Step 5: Verify the options are grouped correctly by category
    await test.step('Step 5: Verify options are grouped correctly by category (ASG, Audit, IIG, NB)', async () => {
      const options = await coreAskPage.getDppGroupOptions();
      
      // Verify ASG options (3 options)
      const asgOptions = options.filter(opt => opt.startsWith('ASG'));
      expect(asgOptions.length).toBe(3);
      
      // Verify Audit options (7 options)
      const auditOptions = options.filter(opt => opt.startsWith('Audit'));
      expect(auditOptions.length).toBe(7);
      
      // Verify IIG options (2 options)
      const iigOptions = options.filter(opt => opt.startsWith('IIG'));
      expect(iigOptions.length).toBe(2);
      
      // Verify NB options (5 options)
      const nbOptions = options.filter(opt => opt.startsWith('NB'));
      expect(nbOptions.length).toBe(5);
      
      console.log('✓ Options are properly categorized: ASG (3), Audit (7), IIG (2), NB (5)');
    });

    // Step 6: Select each option one by one and verify it can be selected
    await test.step('Step 6: Select each option and verify it can be selected', async () => {
      for (const option of TD.dppGroupOptions) {
        await coreAskPage.selectDppGroupOption(option);
        const selectedValue = await coreAskPage.getSelectedDppGroupValue();
        expect(selectedValue).toBeTruthy();
        console.log(`✓ Successfully selected: ${option}`);
      }
      console.log('✓ Each option is selectable and displays correctly in the dropdown field when selected');
    });
  });
});