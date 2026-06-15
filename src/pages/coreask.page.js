const loc = require('./locators/coreask.locators');
const TD = require('../data/coreask-test-data');

class CoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async gotoBase() {
    await this.page.goto(TD.urls.base, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async gotoCreateCoreAsk() {
    await this.page.goto(TD.urls.createCoreAsk, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async clickDppGroupDropdown() {
    await loc.dropdownDppGroup(this.page).click();
  }

  async clickReasonDropdown() {
    await loc.dropdownReason(this.page).click();
  }

  async clickLevelNeededDropdown() {
    await loc.dropdownLevelNeeded(this.page).click();
  }

  async clickRolePostingDropdown() {
    await loc.dropdownRolePosting(this.page).click();
  }

  async selectDropdownOption(optionName) {
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

  async isRolePostingDropdownVisible() {
    return await loc.dropdownRolePosting(this.page).isVisible();
  }

  async getDropdownOptionCount() {
    const options = await this.page.getByRole('option').all();
    return options.length;
  }

  async getAllDropdownOptions() {
    const options = await this.page.getByRole('option').all();
    const optionTexts = [];
    for (const option of options) {
      const text = await option.textContent();
      optionTexts.push(text);
    }
    return optionTexts;
  }

  async isDropdownOptionVisible(optionName) {
    return await loc.dropdownOption(this.page, optionName).isVisible();
  }

  async getSelectedDropdownValue(dropdownTestId) {
    const dropdown = this.page.getByTestId(dropdownTestId);
    return await dropdown.textContent();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = CoreAskPage;