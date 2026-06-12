const { test, expect } = require('../../fixtures');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-001: Verify Mandatory and Optional Field Indicators', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let requestPage;

  test('[SCRUM-30044 TS-001 TC-003] Verify mandatory fields are marked with asterisk and optional fields are not', async ({ page }) => {
    requestPage = new RequestCreationPage(page);

    // Step 1: Launch the application
    await requestPage.goto();
    await expect(page).toHaveURL(TD.urls.appUrl);

    // Step 2: Login with valid user credentials
    await requestPage.login(TD.credentials.regularUser.username, TD.credentials.regularUser.password);
    await expect(page).toHaveURL(/dashboard|home/i);

    // Step 3: Navigate to Request Creation Page
    await requestPage.navigateToRequestCreationPage();
    await expect(page).toHaveURL(/request.*creation|create.*request/i);

    // Step 4: Open the request creation form
    await requestPage.clickCreateNewRequest();
    const isFormDisplayed = await requestPage.isRequestFormDisplayed();
    await expect(isFormDisplayed).toBeTruthy();

    // Step 5: Verify that mandatory fields are marked with asterisk (*) or 'Required' label
    const mandatoryIndicatorCount = await requestPage.getMandatoryIndicators();
    await expect(mandatoryIndicatorCount).toBeGreaterThan(0);

    // Verify specific mandatory fields
    for (const field of ['Request Title', 'Priority', 'Department']) {
      const fieldLabel = await requestPage.getFieldLabel(field);
      await expect(fieldLabel).toMatch(/\*|Required/i);
    }

    // Step 6: Verify that optional fields do not have mandatory indicators
    const isAdditionalNotesVisible = await requestPage.isAdditionalNotesFieldVisible();
    if (isAdditionalNotesVisible) {
      const additionalNotesLabel = await requestPage.getFieldLabel('Additional Notes');
      await expect(additionalNotesLabel).not.toMatch(/\*/i);
    }

    const isAttachmentsVisible = await requestPage.isAttachmentsFieldVisible();
    if (isAttachmentsVisible) {
      const attachmentsLabel = await requestPage.getFieldLabel('Attachments');
      await expect(attachmentsLabel).not.toMatch(/\*/i);
    }
  });
});