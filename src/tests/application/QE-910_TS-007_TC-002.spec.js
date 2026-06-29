const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-007: Verify additional textbox appears when Leadership position is selected', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-007 TC-002] Verify leadership position details textbox appears and accepts input when Leadership position is selected', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate General/Specialty Needed dropdown and select 'Leadership position'
    await coreAskPage.selectGeneralSpecialty(TD.generalSpecialty.leadership);
    const selectedValue = await coreAskPage.getSelectedGeneralSpecialty();
    expect(selectedValue).toBe(TD.generalSpecialty.leadership);

    // Step 5: Verify that an additional textbox appears
    const isTextboxVisible = await coreAskPage.isSpecialtyDetailsVisible();
    expect(isTextboxVisible).toBe(true);

    // Step 6: Enter leadership position details in the textbox
    await coreAskPage.fillSpecialtyDetails(TD.testData.leadershipDetails);

    // Step 7: Verify the entered details are retained
    const enteredValue = await coreAskPage.getSpecialtyDetailsValue();
    expect(enteredValue).toBe(TD.testData.leadershipDetails);
  });
});