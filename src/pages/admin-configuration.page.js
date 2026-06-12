const loc = require('./locators/admin-configuration.locators');
const TD = require('../data/test-data');

class AdminConfigurationPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.appUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async loginAsAdmin(username, password) {
    await loc.adminUsernameField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.adminUsernameField(this.page).fill(username);
    await loc.adminPasswordField(this.page).fill(password);
    await loc.adminLoginButton(this.page).click();
    await loc.adminDashboard(this.page).waitFor({ state: 'visible', timeout: 15000 });
  }

  async navigateToAdministration() {
    await loc.administrationMenu(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.administrationMenu(this.page).click();
  }

  async isAdministrationMenuVisible() {
    return await loc.administrationMenu(this.page).isVisible();
  }

  async clickFormConfiguration() {
    await loc.formConfigurationOption(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.formConfigurationOption(this.page).click();
    await loc.formConfigurationPage(this.page).waitFor({ state: 'visible', timeout: 10000 });
  }

  async isFormConfigurationPageDisplayed() {
    return await loc.formConfigurationPage(this.page).isVisible();
  }

  async clickAddNewField() {
    await loc.addFieldButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.addFieldButton(this.page).click();
    await loc.fieldCreationDialog(this.page).waitFor({ state: 'visible', timeout: 10000 });
  }

  async isFieldCreationDialogDisplayed() {
    return await loc.fieldCreationDialog(this.page).isVisible();
  }

  async enterFieldName(fieldName) {
    await loc.fieldNameInput(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.fieldNameInput(this.page).fill(fieldName);
  }

  async selectFieldType(fieldType) {
    await loc.fieldTypeDropdown(this.page).selectOption({ label: fieldType });
  }

  async setFieldAsMandatory(isMandatory) {
    const checkbox = loc.mandatoryToggle(this.page);
    const isChecked = await checkbox.isChecked();
    if (isMandatory && !isChecked) {
      await checkbox.check();
    } else if (!isMandatory && isChecked) {
      await checkbox.uncheck();
    }
  }

  async enterHelpText(helpText) {
    await loc.helpTextInput(this.page).fill(helpText);
  }

  async clickSaveField() {
    await loc.saveFieldButton(this.page).click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 });
  }

  async isSuccessMessageDisplayed() {
    return await loc.successMessage(this.page).isVisible();
  }

  async isFieldInConfigurationList(fieldName) {
    return await loc.fieldListItem(this.page, fieldName).isVisible();
  }

  async selectFieldFromList(fieldName) {
    await loc.fieldListItem(this.page, fieldName).click();
  }

  async clickEditField() {
    await loc.editFieldButton(this.page).click();
    await loc.fieldCreationDialog(this.page).waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickDeleteField() {
    await loc.deleteFieldButton(this.page).click();
    await loc.confirmationDialog(this.page).waitFor({ state: 'visible', timeout: 5000 });
  }

  async confirmDeletion() {
    await loc.confirmButton(this.page).click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 });
  }

  async isFieldDeletedFromList(fieldName) {
    const isVisible = await loc.fieldListItem(this.page, fieldName).isVisible().catch(() => false);
    return !isVisible;
  }

  async logout() {
    await loc.logoutButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async loginAsRegularUser(username, password) {
    await loc.adminUsernameField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.adminUsernameField(this.page).fill(username);
    await loc.adminPasswordField(this.page).fill(password);
    await loc.adminLoginButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isUnauthorizedMessageDisplayed() {
    return await loc.unauthorizedMessage(this.page).isVisible();
  }

  async attemptDirectUrlAccess(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }

  async configureRoleSpecificField(fieldName, role) {
    await this.enterFieldName(fieldName);
    await loc.roleSpecificFieldConfig(this.page).selectOption({ label: role });
  }
}

module.exports = AdminConfigurationPage;