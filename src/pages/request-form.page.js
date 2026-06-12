const loc = require('./locators/request-form.locators');
const TD = require('../data/request-form-test-data');

class RequestFormPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToRequestCreation() {
    await loc.requestCreationMenu(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.requestCreationMenu(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickCreateNewRequest() {
    await loc.createNewRequestButton(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.createNewRequestButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isRequestFormVisible() {
    try {
      await loc.requestForm(this.page).waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  async isFieldVisible(fieldLabel) {
    try {
      await loc.fieldByLabel(this.page, fieldLabel).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async isTextFieldDisplayed(fieldLabel) {
    try {
      const field = loc.inputFieldByLabel(this.page, fieldLabel);
      await field.waitFor({ state: 'visible', timeout: 5000 });
      const inputType = await field.getAttribute('type');
      return inputType === 'text' || inputType === 'email' || !inputType;
    } catch {
      return false;
    }
  }

  async isDropdownDisplayed(fieldLabel) {
    try {
      await loc.dropdownByLabel(this.page, fieldLabel).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async getDropdownOptions(fieldLabel) {
    const dropdown = loc.dropdownByLabel(this.page, fieldLabel);
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    const options = await dropdown.locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async isCheckboxDisplayed(fieldLabel) {
    try {
      await loc.checkboxByLabel(this.page, fieldLabel).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async checkCheckbox(fieldLabel) {
    const checkbox = loc.checkboxByLabel(this.page, fieldLabel);
    await checkbox.waitFor({ state: 'visible', timeout: 5000 });
    await checkbox.check();
  }

  async uncheckCheckbox(fieldLabel) {
    const checkbox = loc.checkboxByLabel(this.page, fieldLabel);
    await checkbox.waitFor({ state: 'visible', timeout: 5000 });
    await checkbox.uncheck();
  }

  async isDatePickerDisplayed(fieldLabel) {
    try {
      await loc.datePickerByLabel(this.page, fieldLabel).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clickDatePicker(fieldLabel) {
    const datePicker = loc.datePickerByLabel(this.page, fieldLabel);
    await datePicker.waitFor({ state: 'visible', timeout: 5000 });
    await datePicker.click();
  }

  async isCalendarWidgetVisible() {
    try {
      const calendar = this.page.locator('[class*="calendar"], [class*="datepicker"], [role="dialog"]:has([class*="date"])').first();
      await calendar.waitFor({ state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  async isFieldMandatory(fieldLabel) {
    try {
      const mandatoryIndicator = loc.mandatoryIndicator(this.page, fieldLabel);
      return await mandatoryIndicator.isVisible({ timeout: 3000 });
    } catch {
      return false;
    }
  }

  async hoverOverHelpIcon(fieldLabel) {
    const helpIcon = loc.helpIcon(this.page, fieldLabel);
    await helpIcon.waitFor({ state: 'visible', timeout: 5000 });
    await helpIcon.hover();
  }

  async clickHelpIcon(fieldLabel) {
    const helpIcon = loc.helpIcon(this.page, fieldLabel);
    await helpIcon.waitFor({ state: 'visible', timeout: 5000 });
    await helpIcon.click();
  }

  async getHelpText() {
    try {
      await loc.helpText(this.page).waitFor({ state: 'visible', timeout: 3000 });
      return await loc.helpText(this.page).textContent();
    } catch {
      return '';
    }
  }

  async getFieldLabel(fieldLabel) {
    const field = loc.fieldByLabel(this.page, fieldLabel);
    await field.waitFor({ state: 'visible', timeout: 5000 });
    return await field.textContent();
  }

  async getAllVisibleFields() {
    const fields = await this.page.locator('label, [class*="field-label"]').allTextContents();
    return fields.filter(f => f.trim() !== '');
  }
}

module.exports = RequestFormPage;