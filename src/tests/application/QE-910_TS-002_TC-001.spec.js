const { test, expect } = require('../../fixtures');
const KPMGCoreAskPage = require('../../pages/kpmg-coreask.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-002: Verify Outgoing Resource field behavior for Addition reason', { tag: ['@regression', '@kpmg'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-002 TC-001] Verify Outgoing Resource field is non-editable and displays N/A when Reason is Addition', async ({ page }) => {
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

    // Step 5: Select 'Addition' from the Reason for DPP Need dropdown
    await coreAskPage.selectReasonForNeed(TD.reasonForNeed.addition);
    const selectedReason = await coreAskPage.getSelectedReasonForNeed();
    expect(selectedReason).toBe(TD.reasonForNeed.addition);

    // Step 6: Observe the Outgoing Resource field
    const outgoingResourceValue = await coreAskPage.getOutgoingResourceValue();
    expect(outgoingResourceValue).toBe(TD.outgoingResource.na);

    // Step 7: Attempt to click on the Outgoing Resource field and try to edit
    const isEditable = await coreAskPage.isOutgoingResourceEditable();
    expect(isEditable).toBe(false);

    // Step 8: Verify the field remains as 'N/A' and is disabled
    const isDisabled = await coreAskPage.isOutgoingResourceDisabled();
    expect(isDisabled).toBe(true);
    
    const finalValue = await coreAskPage.getOutgoingResourceValue();
    expect(finalValue).toBe(TD.outgoingResource.na);
  });
});