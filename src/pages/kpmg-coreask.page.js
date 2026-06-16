const loc = require('./locators/kpmg-coreask.locators');
const TD = require('../data/kpmg-coreask-test-data');

class KpmgCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async gotoBaseUrl() {
    await this.page.goto(TD.urls.baseUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  }

  async gotoCreateCoreAsk() {
    await this.page.goto(TD.urls.createCoreAsk, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  }

  async isDppGroupDropdownVisible() {
    const dropdown = loc.dppGroupDropdown(this.page);
    return await dropdown.isVisible();
  }

  async clickDppGroupDropdown() {
    const dropdown = loc.dppGroupDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.click();
  }

  async getDppGroupOptions() {
    const options = await loc.dppGroupOptions(this.page);
    const optionTexts = [];
    for (const option of options) {
      const text = await option.textContent();
      if (text && text.trim()) {
        optionTexts.push(text.trim());
      }
    }
    return optionTexts;
  }

  async getDppGroupOptionsCount() {
    const options = await this.getDppGroupOptions();
    return options.length;
  }

  async selectDppGroupOption(optionText) {
    const dropdown = loc.dppGroupDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.selectOption({ label: optionText });
  }

  async getSelectedDppGroupValue() {
    const dropdown = loc.dppGroupDropdown(this.page);
    return await dropdown.inputValue();
  }

  async isReasonForDppNeedDropdownVisible() {
    const dropdown = loc.reasonForDppNeedDropdown(this.page);
    return await dropdown.isVisible();
  }

  async isReasonForDppNeedDropdownEnabled() {
    const dropdown = loc.reasonForDppNeedDropdown(this.page);
    return await dropdown.isEnabled();
  }

  async clickReasonForDppNeedDropdown() {
    const dropdown = loc.reasonForDppNeedDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.click();
  }

  async getReasonForDppNeedOptions() {
    const options = await loc.reasonForDppNeedOptions(this.page);
    const optionTexts = [];
    for (const option of options) {
      const text = await option.textContent();
      if (text && text.trim()) {
        optionTexts.push(text.trim());
      }
    }
    return optionTexts;
  }

  async getReasonForDppNeedOptionsCount() {
    const options = await this.getReasonForDppNeedOptions();
    return options.length;
  }

  async selectReasonForDppNeedOption(optionText) {
    const dropdown = loc.reasonForDppNeedDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.selectOption({ label: optionText });
  }

  async getSelectedReasonForDppNeedValue() {
    const dropdown = loc.reasonForDppNeedDropdown(this.page);
    return await dropdown.inputValue();
  }

  async isLevelNeededDropdownVisible() {
    const dropdown = loc.levelNeededDropdown(this.page);
    return await dropdown.isVisible();
  }

  async clickLevelNeededDropdown() {
    const dropdown = loc.levelNeededDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.click();
  }

  async selectLevelNeededOption(optionText) {
    const dropdown = loc.levelNeededDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.selectOption({ label: optionText });
  }

  async getSelectedLevelNeededValue() {
    const dropdown = loc.levelNeededDropdown(this.page);
    return await dropdown.inputValue();
  }

  async isRolePostingDropdownVisible() {
    const dropdown = loc.rolePostingDropdown(this.page);
    return await dropdown.isVisible();
  }

  async clickRolePostingDropdown() {
    const dropdown = loc.rolePostingDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.click();
  }

  async getRolePostingOptions() {
    const options = await loc.rolePostingOptions(this.page);
    const optionTexts = [];
    for (const option of options) {
      const text = await option.textContent();
      if (text && text.trim()) {
        optionTexts.push(text.trim());
      }
    }
    return optionTexts;
  }

  async getRolePostingOptionsCount() {
    const options = await this.getRolePostingOptions();
    return options.length;
  }

  async selectRolePostingOption(optionText) {
    const dropdown = loc.rolePostingDropdown(this.page);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.selectOption({ label: optionText });
  }

  async getSelectedRolePostingValue() {
    const dropdown = loc.rolePostingDropdown(this.page);
    return await dropdown.inputValue();
  }

  async areFormFieldsVisible() {
    const fields = await loc.formFields(this.page);
    return fields.length > 0;
  }
}

module.exports = KpmgCoreAskPage;