const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-007: Verify additional textbox appears when Specialty is selected', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-007 TC-001] Verify specialty details textbox appears and accepts input when Specialty is selected', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate General/Specialty Needed dropdown and click on it
    await coreAskPage.clickGeneralSpecialtyDropdown();

    // Step 5: Select 'Specialty' from the dropdown
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialty.specialty);
    const selectedValue = await coreAskPage.getSelectedGeneralSpecialty();
    expect(selectedValue).toBe(TD.generalSpecialty.specialty);

    // Step 6: Verify that an additional textbox appears
    const isTextboxVisible = await coreAskPage.isSpecialtyDetailsVisible();
    expect(isTextboxVisible).toBe(true);

    // Step 7: Click on the specialty textbox and enter specialty details
    await coreAskPage.fillSpecialtyDetails(TD.testData.specialtyDetails);

    // Step 8: Verify the entered specialty details are retained
    const enteredValue = await coreAskPage.getSpecialtyDetailsValue();
    expect(enteredValue).toBe(TD.testData.specialtyDetails);
  });
});