const loc = require('./locators/request-creation.locators');
const TD = require('../data/test-data');

class RequestCreationPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.appUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.usernameField(this.page).fill(username);
    await loc.passwordField(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await loc.dashboardContainer(this.page).waitFor({ state: 'visible', timeout: 15000 });
  }

  async navigateToRequestCreationPage() {
    await loc.requestCreationMenu(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.requestCreationMenu(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickCreateNewRequest() {
    await loc.createNewRequestButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.createNewRequestButton(this.page).click();
    await loc.requestForm(this.page).waitFor({ state: 'visible', timeout: 10000 });
  }

  async isRequestFormDisplayed() {
    return await loc.requestForm(this.page).isVisible();
  }

  async isFieldVisible(fieldLocator) {
    return await fieldLocator.isVisible();
  }

  async isRequestTypeFieldVisible() {
    return await loc.requestTypeField(this.page).isVisible();
  }

  async isPriorityFieldVisible() {
    return await loc.priorityField(this.page).isVisible();
  }

  async isDepartmentFieldVisible() {
    return await loc.departmentField(this.page).isVisible();
  }

  async isDescriptionFieldVisible() {
    return await loc.descriptionField(this.page).isVisible();
  }

  async isAttachmentsFieldVisible() {
    return await loc.attachmentsField(this.page).isVisible();
  }

  async isRequestTitleFieldVisible() {
    return await loc.requestTitleField(this.page).isVisible();
  }

  async enterTextInField(fieldLocator, text) {
    await fieldLocator.waitFor({ state: 'visible', timeout: 5000 });
    await fieldLocator.fill(text);
  }

  async getFieldPlaceholder(fieldLocator) {
    return await fieldLocator.getAttribute('placeholder');
  }

  async isPriorityDropdownVisible() {
    return await loc.priorityDropdown(this.page).isVisible();
  }

  async clickPriorityDropdown() {
    await loc.priorityDropdown(this.page).click();
  }

  async getPriorityOptions() {
    return await loc.priorityOptions(this.page).allTextContents();
  }

  async isUrgentCheckboxVisible() {
    return await loc.urgentCheckbox(this.page).isVisible();
  }

  async checkUrgentCheckbox() {
    await loc.urgentCheckbox(this.page).check();
  }

  async uncheckUrgentCheckbox() {
    await loc.urgentCheckbox(this.page).uncheck();
  }

  async isUrgentCheckboxChecked() {
    return await loc.urgentCheckbox(this.page).isChecked();
  }

  async isDatePickerFieldVisible() {
    return await loc.requiredByDateField(this.page).isVisible();
  }

  async clickDatePickerField() {
    await loc.requiredByDateField(this.page).click();
  }

  async isDatePickerWidgetVisible() {
    return await loc.datePickerWidget(this.page).isVisible();
  }

  async getMandatoryIndicators() {
    return await loc.mandatoryIndicator(this.page).count();
  }

  async isFieldMarkedMandatory(fieldName) {
    const label = loc.fieldLabel(this.page, fieldName);
    const mandatoryMarker = label.locator('span.required, span:has-text("*")');
    return await mandatoryMarker.isVisible();
  }

  async getFieldLabel(labelText) {
    return await loc.fieldLabel(this.page, labelText).textContent();
  }

  async hoverOverHelpIcon() {
    await loc.helpIcon(this.page).hover();
  }

  async clickHelpIcon() {
    await loc.helpIcon(this.page).click();
  }

  async getHelpTooltipText() {
    await loc.helpTooltip(this.page).waitFor({ state: 'visible', timeout: 5000 });
    return await loc.helpTooltip(this.page).textContent();
  }

  async isHelpTooltipVisible() {
    return await loc.helpTooltip(this.page).isVisible();
  }

  async isBudgetCodeFieldVisible() {
    return await loc.budgetCodeField(this.page).isVisible();
  }

  async isAdditionalNotesFieldVisible() {
    return await loc.additionalNotesField(this.page).isVisible();
  }

  async isCostCenterFieldVisible() {
    return await loc.costCenterField(this.page).isVisible();
  }
}

module.exports = RequestCreationPage;