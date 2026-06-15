const loc = require('./locators/kpmg-dpp-core-ask.locators');

class KpmgDppCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateCoreAsk() {
    await loc.createCoreAskButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.createCoreAskButton(this.page).click();
  }

  async isCoreAskFormDisplayed() {
    await loc.coreAskForm(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.coreAskForm(this.page).isVisible();
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
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.dppGroupDropdown(this.page).selectOption({ label: optionText });
  }

  async clickReasonForDppNeedDropdown() {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.reasonForDppNeedDropdown(this.page).click();
  }

  async getReasonForDppNeedOptions() {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.reasonForDppNeedDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectReasonForDppNeed(optionText) {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.reasonForDppNeedDropdown(this.page).selectOption({ label: optionText });
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

  async enterOutgoingResource(text) {
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

  async selectRetirementDate(date) {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.retirementDateField(this.page).fill(date);
  }

  async clickGeneralSpecialtyNeededDropdown() {
    await loc.generalSpecialtyNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.generalSpecialtyNeededDropdown(this.page).click();
  }

  async getGeneralSpecialtyNeededOptions() {
    await loc.generalSpecialtyNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.generalSpecialtyNeededDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectGeneralSpecialtyNeeded(optionText) {
    await loc.generalSpecialtyNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.generalSpecialtyNeededDropdown(this.page).selectOption({ label: optionText });
  }

  async isSpecialtyDetailsFieldVisible() {
    try {
      await loc.specialtyDetailsField(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async enterSpecialtyDetails(text) {
    await loc.specialtyDetailsField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.specialtyDetailsField(this.page).fill(text);
  }

  async isLeadershipPositionDetailsFieldVisible() {
    try {
      await loc.leadershipPositionDetailsField(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async enterLeadershipPositionDetails(text) {
    await loc.leadershipPositionDetailsField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.leadershipPositionDetailsField(this.page).fill(text);
  }

  async selectLevelNeeded(optionText) {
    await loc.levelNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.levelNeededDropdown(this.page).selectOption({ label: optionText });
  }

  async isRolePostingFieldVisible() {
    try {
      await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clickRolePostingDropdown() {
    await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.rolePostingDropdown(this.page).click();
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
    if (data.headcountAmount) await this.enterHeadcountAmount(data.headcountAmount);
    if (data.dppFteAmount) await this.enterDppFteAmount(data.dppFteAmount);
    if (data.projectStartDate) await this.enterProjectStartDate(data.projectStartDate);
    if (data.roleSummary) await this.enterRoleSummary(data.roleSummary);
    if (data.roleResponsibilities) await this.enterRoleResponsibilities(data.roleResponsibilities);
    if (data.roleQualifications) await this.enterRoleQualifications(data.roleQualifications);
  }

  async enterHeadcountAmount(amount) {
    await loc.headcountAmountField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.headcountAmountField(this.page).fill(amount);
  }

  async enterDppFteAmount(amount) {
    await loc.dppFteAmountField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.dppFteAmountField(this.page).fill(amount);
  }

  async enterProjectStartDate(date) {
    await loc.projectStartDateField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.projectStartDateField(this.page).fill(date);
  }

  async enterRoleSummary(text) {
    await loc.roleSummaryField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.roleSummaryField(this.page).fill(text);
  }

  async enterRoleResponsibilities(text) {
    await loc.roleResponsibilitiesField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.roleResponsibilitiesField(this.page).fill(text);
  }

  async enterRoleQualifications(text) {
    await loc.roleQualificationsField(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.roleQualificationsField(this.page).fill(text);
  }

  async clickRouteToDropdown() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.routeToDropdown(this.page).click();
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

  async clickSubmitButton() {
    await loc.submitButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.submitButton(this.page).click();
  }

  async isValidationMessageDisplayed(fieldName) {
    try {
      await loc.validationMessage(this.page, fieldName).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async getValidationMessageText(fieldName) {
    await loc.validationMessage(this.page, fieldName).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.validationMessage(this.page, fieldName).textContent();
  }

  async isSuccessMessageDisplayed() {
    try {
      await loc.successMessage(this.page).waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  async navigateToAuditHistory() {
    await loc.auditHistoryLink(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.auditHistoryLink(this.page).click();
  }

  async isAuditHistoryDisplayed() {
    await loc.auditHistorySection(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.auditHistorySection(this.page).isVisible();
  }
}

module.exports = KpmgDppCoreAskPage;