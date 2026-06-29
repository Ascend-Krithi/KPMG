const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-007: Verify no additional textbox appears when General is selected', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-007 TC-003] Verify no additional textbox appears when General is selected', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate General/Specialty Needed dropdown and select 'General'
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialty.general);
    const selectedValue = await coreAskPage.getSelectedGeneralSpecialty();
    expect(selectedValue).toBe(TD.generalSpecialty.general);

    // Step 5: Verify that no additional textbox appears
    const isTextboxVisible = await coreAskPage.isSpecialtyDetailsVisible();
    expect(isTextboxVisible).toBe(false);
  });
});