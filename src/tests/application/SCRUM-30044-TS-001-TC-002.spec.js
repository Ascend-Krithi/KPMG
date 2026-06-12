const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const RequestFormPage = require('../../pages/request-form.page');
const TD = require('../../data/request-form-test-data');

test.describe('[UI] SCRUM-30044 TS-001: Request Form Field Types Verification', { tag: ['@smoke', '@regression'] }, () => {
  let loginPage;
  let requestFormPage;

  test('[SCRUM-30044 TS-001 TC-002] Verify different field types (text, dropdown, checkbox, date picker) are displayed correctly', async ({ page }) => {
    loginPage = new LoginPage(page);
    requestFormPage = new RequestFormPage(page);

    // Step 1: Launch the application in a browser
    await loginPage.goto();
    await expect(page).toHaveURL(/.*app\.example\.com.*/);

    // Step 2: Login with valid user credentials
    await loginPage.login(TD.credentials.testUser.username, TD.credentials.testUser.password);
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();

    // Step 3: Navigate to Request Creation Page
    await requestFormPage.navigateToRequestCreation();
    await expect(page).toHaveURL(/.*request-creation.*/);

    // Step 4: Open the request creation form
    await requestFormPage.clickCreateNewRequest();
    const isFormVisible = await requestFormPage.isRequestFormVisible();
    expect(isFormVisible).toBeTruthy();

    // Step 5: Verify that text input fields are displayed with correct input type
    const isTextFieldDisplayed = await requestFormPage.isTextFieldDisplayed(TD.customFields.requestTitle);
    expect(isTextFieldDisplayed).toBeTruthy();

    // Step 6: Verify that dropdown fields display with selectable options
    const isDropdownDisplayed = await requestFormPage.isDropdownDisplayed(TD.customFields.priority);
    expect(isDropdownDisplayed).toBeTruthy();
    
    const dropdownOptions = await requestFormPage.getDropdownOptions(TD.customFields.priority);
    expect(dropdownOptions.length).toBeGreaterThan(0);
    expect(dropdownOptions).toEqual(expect.arrayContaining(['High', 'Medium', 'Low']));

    // Step 7: Verify that checkbox fields are displayed correctly
    const isCheckboxDisplayed = await requestFormPage.isCheckboxDisplayed(TD.customFields.urgentRequest);
    expect(isCheckboxDisplayed).toBeTruthy();
    
    await requestFormPage.checkCheckbox(TD.customFields.urgentRequest);
    const checkbox = page.locator(`input[type="checkbox"]`).first();
    await expect(checkbox).toBeChecked();
    
    await requestFormPage.uncheckCheckbox(TD.customFields.urgentRequest);
    await expect(checkbox).not.toBeChecked();

    // Step 8: Verify that date picker fields display calendar widget
    const isDatePickerDisplayed = await requestFormPage.isDatePickerDisplayed(TD.customFields.requiredByDate);
    expect(isDatePickerDisplayed).toBeTruthy();
    
    await requestFormPage.clickDatePicker(TD.customFields.requiredByDate);
    const isCalendarVisible = await requestFormPage.isCalendarWidgetVisible();
    expect(isCalendarVisible).toBeTruthy();
  });
});