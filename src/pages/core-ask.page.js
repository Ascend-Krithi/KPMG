const loc = require('./locators/core-ask.locators');
const URL_CREATE = 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create';
const URL_BASE = 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/';

class CoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async gotoBase() {
    await this.page.goto(URL_BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async gotoCreateCoreAsk() {
    await this.page.goto(URL_CREATE, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    // Placeholder for login implementation
    // Actual login selectors would need to be added to locators file
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickDppGroupDropdown() {
    await loc.dropdownDppGroup(this.page).click();
  }

  async selectDppGroupOption(optionName) {
    await this.clickDppGroupDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  async clickReasonDropdown() {
    await loc.dropdownReason(this.page).click();
  }

  async selectReasonOption(optionName) {
    await this.clickReasonDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  async clickLevelNeededDropdown() {
    await loc.dropdownLevelNeeded(this.page).click();
  }

  async selectLevelNeededOption(optionName) {
    await this.clickLevelNeededDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  async isDppGroupDropdownVisible() {
    return await loc.dropdownDppGroup(this.page).isVisible();
  }

  async isReasonDropdownVisible() {
    return await loc.dropdownReason(this.page).isVisible();
  }

  async isLevelNeededDropdownVisible() {
    return await loc.dropdownLevelNeeded(this.page).isVisible();
  }

  async isDppGroupDropdownExpanded() {
    const dropdown = loc.dropdownDppGroup(this.page);
    const ariaExpanded = await dropdown.getAttribute('aria-expanded');
    return ariaExpanded === 'true';
  }

  async isReasonDropdownExpanded() {
    const dropdown = loc.dropdownReason(this.page);
    const ariaExpanded = await dropdown.getAttribute('aria-expanded');
    return ariaExpanded === 'true';
  }

  async getSelectedDppGroup() {
    return await loc.dropdownDppGroup(this.page).inputValue();
  }

  async getSelectedReason() {
    return await loc.dropdownReason(this.page).inputValue();
  }

  async getSelectedLevelNeeded() {
    return await loc.dropdownLevelNeeded(this.page).inputValue();
  }

  async isDropdownOptionVisible(optionName) {
    return await loc.dropdownOption(this.page, optionName).isVisible();
  }

  async getDropdownOptionsCount() {
    return await this.page.getByRole('option').count();
  }

  async isRolePostingFieldVisible() {
    return await loc.dropdownGeneralSpecialty(this.page).isVisible();
  }
}

module.exports = CoreAskPage;