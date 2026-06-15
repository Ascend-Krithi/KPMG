const loc = require('./locators/kpmg-dpp-core-ask.locators');
const URL = 'https://kpmg-dpp-system.com';

class KpmgDppCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameInput(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.usernameInput(this.page).fill(username);
    await loc.passwordInput(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await loc.dashboard(this.page).waitFor({ state: 'visible', timeout: 15000 });
  }

  async navigateToCoreAsk() {
    await loc.coreAskMenu(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.coreAskMenu(this.page).click();
  }

  async clickCreateCoreAsk() {
    await loc.createCoreAskButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.createCoreAskButton(this.page).click();
  }

  async isDashboardVisible() {
    return await loc.dashboard(this.page).isVisible();
  }

  async isCoreAskFormVisible() {
    return await loc.dppGroupDropdown(this.page).isVisible();
  }

  async clickDppGroupDropdown() {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.dppGroupDropdown(this.page).click();
  }

  async getDppGroupOptions() {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.dppGroupDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectDppGroup(optionText) {
    await loc.dppGroupDropdown(this.page).selectOption({ label: optionText });
  }

  async selectReasonForDppNeed(optionText) {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.reasonForDppNeedDropdown(this.page).selectOption({ label: optionText });
  }

  async getReasonForDppNeedOptions() {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.reasonForDppNeedDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async getOutgoingResourceValue() {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.outgoingResourceField(this.page).inputValue();
  }

  async isOutgoingResourceReadOnly() {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.outgoingResourceField(this.page).isDisabled() || 
           await loc.outgoingResourceField(this.page).getAttribute('readonly') !== null;
  }

  async fillOutgoingResource(text) {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.outgoingResourceField(this.page).fill(text);
  }

  async getRetirementDateValue() {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.retirementDateField(this.page).inputValue();
  }

  async isRetirementDateReadOnly() {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.retirementDateField(this.page).isDisabled() || 
           await loc.retirementDateField(this.page).getAttribute('readonly') !== null;
  }

  async clickRetirementDateField() {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.retirementDateField(this.page).click();
  }

  async isDatePickerVisible() {
    return await loc.datePickerCalendar(this.page).isVisible();
  }

  async fillRetirementDate(date) {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.retirementDateField(this.page).fill(date);
  }

  async selectGeneralSpecialtyNeeded(optionText) {
    await loc.generalSpecialtyNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.generalSpecialtyNeededDropdown(this.page).selectOption({ label: optionText });
  }

  async getGeneralSpecialtyNeededOptions() {
    await loc.generalSpecialtyNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.generalSpecialtyNeededDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async isSpecialtyDetailsVisible() {
    return await loc.specialtyDetailsTextbox(this.page).isVisible();
  }

  async fillSpecialtyDetails(text) {
    await loc.specialtyDetailsTextbox(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.specialtyDetailsTextbox(this.page).fill(text);
  }

  async isLeadershipPositionDetailsVisible() {
    return await loc.leadershipPositionDetailsTextbox(this.page).isVisible();
  }

  async fillLeadershipPositionDetails(text) {
    await loc.leadershipPositionDetailsTextbox(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.leadershipPositionDetailsTextbox(this.page).fill(text);
  }

  async selectLevelNeeded(optionText) {
    await loc.levelNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.levelNeededDropdown(this.page).selectOption({ label: optionText });
  }

  async isRolePostingVisible() {
    return await loc.rolePostingDropdown(this.page).isVisible();
  }

  async getRolePostingOptions() {
    await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.rolePostingDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectRolePosting(optionText) {
    await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.rolePostingDropdown(this.page).selectOption({ label: optionText });
  }

  async fillMandatoryFields(data) {
    if (data.dppGroup) await this.selectDppGroup(data.dppGroup);
    if (data.reasonForDppNeed) await this.selectReasonForDppNeed(data.reasonForDppNeed);
    if (data.levelNeeded) await this.selectLevelNeeded(data.levelNeeded);
    if (data.headcountAmount) {
      await loc.headcountAmountField(this.page).fill(data.headcountAmount);
    }
    if (data.dppFteAmount) {
      await loc.dppFteAmountField(this.page).fill(data.dppFteAmount);
    }
    if (data.projectStartDate) {
      await loc.projectStartDateField(this.page).fill(data.projectStartDate);
    }
    if (data.roleSummary) {
      await loc.roleSummaryField(this.page).fill(data.roleSummary);
    }
    if (data.roleResponsibilities) {
      await loc.roleResponsibilitiesField(this.page).fill(data.roleResponsibilities);
    }
    if (data.roleQualifications) {
      await loc.roleQualificationsField(this.page).fill(data.roleQualifications);
    }
  }

  async getRouteToOptions() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.routeToDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectRouteTo(optionText) {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.routeToDropdown(this.page).selectOption({ label: optionText });
  }

  async clickSubmit() {
    await loc.submitButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.submitButton(this.page).click();
  }

  async isConfirmationMessageVisible() {
    return await loc.confirmationMessage(this.page).isVisible();
  }

  async getValidationMessages() {
    const messages = await this.page.locator('.error-message, .validation-error, [class*="error"]').allTextContents();
    return messages.filter(msg => msg.trim() !== '');
  }

  async navigateToAuditHistory() {
    await loc.auditHistorySection(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.auditHistorySection(this.page).click();
  }

  async getSubmittedBy() {
    await loc.submittedByField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.submittedByField(this.page).textContent();
  }

  async getAssignedTo() {
    await loc.assignedToField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.assignedToField(this.page).textContent();
  }
}

module.exports = KpmgDppCoreAskPage;