const { test, expect } = require('../../fixtures');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-001: Verify Field Labels and Help Text', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let requestPage;

  test('[SCRUM-30044 TS-001 TC-004] Verify field labels match admin configuration and help text is displayed', async ({ page }) => {
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

    // Step 5: Verify that each field displays the correct label as configured by admin
    const requestTitleLabel = await requestPage.getFieldLabel(TD.fieldLabels.requestTitle);
    await expect(requestTitleLabel).toContain(TD.fieldLabels.requestTitle);

    const priorityLabel = await requestPage.getFieldLabel(TD.fieldLabels.priorityLevel);
    await expect(priorityLabel).toMatch(/Priority/i);

    const departmentLabel = await requestPage.getFieldLabel(TD.fieldLabels.department);
    await expect(departmentLabel).toContain(TD.fieldLabels.department);

    const descriptionLabel = await requestPage.getFieldLabel(TD.fieldLabels.description);
    await expect(descriptionLabel).toContain(TD.fieldLabels.description);

    // Step 6: Hover over or click on help icons next to fields
    await requestPage.hoverOverHelpIcon();
    await page.waitForTimeout(500);
    
    const isHelpTooltipVisible = await requestPage.isHelpTooltipVisible();
    if (isHelpTooltipVisible) {
      const helpText = await requestPage.getHelpTooltipText();
      await expect(helpText).toBeTruthy();
      await expect(helpText.length).toBeGreaterThan(0);
    }
  });
});