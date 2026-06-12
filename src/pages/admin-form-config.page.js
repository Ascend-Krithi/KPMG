const loc = require('./locators/admin-form-config.locators');
const TD = require('../data/request-form-test-data');

class AdminFormConfigPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToAdministration() {
    await loc.administrationMenu(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.administrationMenu(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async navigateToFormConfiguration() {
    await loc.formConfigurationOption(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.formConfigurationOption(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isFormConfigPageVisible() {
    try {
      await loc.formConfigPage(this.page).waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  async isAddFieldButtonVisible() {
    try {
      await loc.addFieldButton(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clickAddFieldButton() {
    await loc.addFieldButton(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.addFieldButton(this.page).click();
  }

  async isFieldCreationDialogVisible() {
    try {
      await loc.fieldCreationDialog(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async enterFieldName(fieldName) {
    await loc.fieldNameInput(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.fieldNameInput(this.page).fill(fieldName);
  }

  async selectFieldType(fieldType) {
    await loc.fieldTypeDropdown(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.fieldTypeDropdown(this.page).selectOption(fieldType);
  }

  async setFieldAsMandatory() {
    const checkbox = loc.fieldRequiredCheckbox(this.page);
    await checkbox.waitFor({ state: 'visible', timeout: 5000 });
    await checkbox.check();
  }

  async setFieldAsOptional() {
    const checkbox = loc.fieldRequiredCheckbox(this.page);
    await checkbox.waitFor({ state: 'visible', timeout: 5000 });
    await checkbox.uncheck();
  }

  async enterHelpText(helpText) {
    await loc.fieldHelpTextInput(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.fieldHelpTextInput(this.page).fill(helpText);
  }

  async clickSaveFieldButton() {
    await loc.saveFieldButton(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.saveFieldButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async addNewField(fieldName, fieldType, isMandatory, helpText = '') {
    await this.clickAddFieldButton();
    await this.enterFieldName(fieldName);
    await this.selectFieldType(fieldType);
    if (isMandatory) {
      await this.setFieldAsMandatory();
    } else {
      await this.setFieldAsOptional();
    }
    if (helpText) {
      await this.enterHelpText(helpText);
    }
    await this.clickSaveFieldButton();
  }

  async isFieldInList(fieldName) {
    try {
      await loc.fieldListItem(this.page, fieldName).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clickEditField(fieldName) {
    await loc.editFieldButton(this.page, fieldName).waitFor({ state: 'visible', timeout: 5000 });
    await loc.editFieldButton(this.page, fieldName).click();
  }

  async clickDeleteField(fieldName) {
    await loc.deleteFieldButton(this.page, fieldName).waitFor({ state: 'visible', timeout: 5000 });
    await loc.deleteFieldButton(this.page, fieldName).click();
  }

  async confirmDeletion() {
    await loc.confirmButton(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.confirmButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isSuccessMessageVisible() {
    try {
      await loc.successMessage(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clickSaveConfiguration() {
    await loc.saveConfigButton(this.page).waitFor({ state: 'visible', timeout: 5000 });
    await loc.saveConfigButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isAccessDenied() {
    try {
      await loc.accessDeniedMessage(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async isAdministrationMenuVisible() {
    try {
      await loc.administrationMenu(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = AdminFormConfigPage;