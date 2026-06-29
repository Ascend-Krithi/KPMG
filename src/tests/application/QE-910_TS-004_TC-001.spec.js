const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-004: Verify Outgoing Resource field behavior for Succession reason', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-004 TC-001] Verify Outgoing Resource field is editable textbox when Reason is Succession', async ({ page }) => {
    coreAskPage = new KPMGCoreAskPage(page);

    // Step 1: Launch the application URL
    await coreAskPage.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    // Step 2: Login with valid user credentials
    // Assuming user is already authenticated

    // Step 3: Navigate to Create Core ASK page
    await expect(coreAskPage.isFormVisible()).resolves.toBe(true);

    // Step 4: Locate Reason for DPP Need dropdown and click on it
    await coreAskPage.clickReasonForNeedDropdown();

    // Step 5: Select 'Succession' from the Reason for DPP Need dropdown
    await coreAskPage.selectReasonForNeed(TD.reasonForNeed.succession);
    const selectedReason = await coreAskPage.getSelectedReasonForNeed();
    expect(selectedReason).toBe(TD.reasonForNeed.succession);

    // Step 6: Observe the Outgoing Resource field
    const isVisible = await coreAskPage.isOutgoingResourceVisible();
    expect(isVisible).toBe(true);
    
    const isEditable = await coreAskPage.isOutgoingResourceEditable();
    expect(isEditable).toBe(true);

    // Step 7: Click on the Outgoing Resource textbox and enter resource details
    await coreAskPage.fillOutgoingResource(TD.outgoingResource.sampleSuccession);

    // Step 8: Verify the entered text is retained in the Outgoing Resource field
    const enteredValue = await coreAskPage.getOutgoingResourceValue();
    expect(enteredValue).toBe(TD.outgoingResource.sampleSuccession);
  });
});