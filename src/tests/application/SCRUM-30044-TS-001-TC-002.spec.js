const { test, expect } = require('../../fixtures');
const RequestCreationPage = require('../../pages/request-creation.page');
const TD = require('../../data/test-data');

test.describe('[UI] SCRUM-30044 TS-001: Verify Field Types Display Correctly', { tag: ['@smoke', '@regression', '@SCRUM-30044'] }, () => {
  let requestPage;

  test('[SCRUM-30044 TS-001 TC-002] Verify different field types (text, dropdown, checkbox, date picker) display correctly', async ({ page }) => {
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

    // Step 5: Verify that text input fields are displayed with correct input type
    const isRequestTitleVisible = await requestPage.isRequestTitleFieldVisible();
    await expect(isRequestTitleVisible).toBeTruthy();

    // Step 6: Verify that dropdown fields display with selectable options
    const isPriorityDropdownVisible = await requestPage.isPriorityDropdownVisible();
    await expect(isPriorityDropdownVisible).toBeTruthy();
    
    await requestPage.clickPriorityDropdown();
    const priorityOptions = await requestPage.getPriorityOptions();
    await expect(priorityOptions.length).toBeGreaterThan(0);
    await expect(priorityOptions.join(',')).toContain('High');

    // Step 7: Verify that checkbox fields are displayed correctly
    const isUrgentCheckboxVisible = await requestPage.isUrgentCheckboxVisible();
    await expect(isUrgentCheckboxVisible).toBeTruthy();
    
    await requestPage.checkUrgentCheckbox();
    const isChecked = await requestPage.isUrgentCheckboxChecked();
    await expect(isChecked).toBeTruthy();
    
    await requestPage.uncheckUrgentCheckbox();
    const isUnchecked = await requestPage.isUrgentCheckboxChecked();
    await expect(isUnchecked).toBeFalsy();

    // Step 8: Verify that date picker fields display calendar widget
    const isDatePickerVisible = await requestPage.isDatePickerFieldVisible();
    await expect(isDatePickerVisible).toBeTruthy();
    
    await requestPage.clickDatePickerField();
    await page.waitForTimeout(1000);
    const isCalendarVisible = await requestPage.isDatePickerWidgetVisible();
    await expect(isCalendarVisible).toBeTruthy();
  });
});