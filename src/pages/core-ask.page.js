const loc = require('./locators/core-ask.locators');
const TD = require('../data/core-ask-test-data');

class CoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.createCoreAsk, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async gotoLoginPage() {
    await this.page.goto(TD.urls.login, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  // Login method - placeholder for actual login implementation
  async login(username, password) {
    // Note: Actual login implementation depends on the login page structure
    // This is a placeholder that navigates to the create page after login
    await this.gotoLoginPage();
    // Add actual login steps here based on login page locators
    await this.page.waitForLoadState('domcontentloaded');
  }

  // DPP Group Dropdown Methods
  async clickDppGroupDropdown() {
    await loc.dropdownDppGroup(this.page).click();
  }

  async isDppGroupDropdownVisible() {
    return await loc.dropdownDppGroup(this.page).isVisible();
  }

  async selectDppGroupOption(optionName) {
    await this.clickDppGroupDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  async getDppGroupDropdownOptions() {
    await this.clickDppGroupDropdown();
    const options = await this.page.getByRole('option').allTextContents();
    return options;
  }

  async getSelectedDppGroup() {
    return await loc.dropdownDppGroup(this.page).textContent();
  }

  // Reason For DPP Need Dropdown Methods
  async clickReasonDropdown() {
    await loc.dropdownReason(this.page).click();
  }

  async isReasonDropdownVisible() {
    return await loc.dropdownReason(this.page).isVisible();
  }

  async isReasonDropdownEnabled() {
    return await loc.dropdownReason(this.page).isEnabled();
  }

  async selectReasonOption(optionName) {
    await this.clickReasonDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  async getReasonDropdownOptions() {
    await this.clickReasonDropdown();
    const options = await this.page.getByRole('option').allTextContents();
    return options;
  }

  async getSelectedReason() {
    return await loc.dropdownReason(this.page).textContent();
  }

  // Level Needed Dropdown Methods
  async clickLevelNeededDropdown() {
    await loc.dropdownLevelNeeded(this.page).click();
  }

  async selectLevelNeededOption(optionName) {
    await this.clickLevelNeededDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  async getSelectedLevelNeeded() {
    return await loc.dropdownLevelNeeded(this.page).textContent();
  }

  // Role Posting Dropdown Methods
  async isRolePostingVisible() {
    return await loc.dropdownRolePosting(this.page).isVisible();
  }

  async clickRolePostingDropdown() {
    await loc.dropdownRolePosting(this.page).click();
  }

  async getRolePostingDropdownOptions() {
    await this.clickRolePostingDropdown();
    const options = await this.page.getByRole('option').allTextContents();
    return options;
  }

  async selectRolePostingOption(optionName) {
    await this.clickRolePostingDropdown();
    await loc.dropdownOption(this.page, optionName).click();
  }

  // Form Field Methods
  async isCreateCoreAskPageLoaded() {
    return await loc.dropdownDppGroup(this.page).isVisible() &&
           await loc.dropdownReason(this.page).isVisible() &&
           await loc.btnSubmitRequest(this.page).isVisible();
  }

  // Navigation Methods
  async navigateToDashboard() {
    await loc.btnDashboard(this.page).click();
  }

  // Helper method to count visible options
  async countDropdownOptions() {
    const options = await this.page.getByRole('option').count();
    return options;
  }

  // Helper method to verify option exists
  async isOptionVisible(optionName) {
    return await loc.dropdownOption(this.page, optionName).isVisible();
  }
}

module.exports = CoreAskPage;