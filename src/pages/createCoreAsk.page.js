const loc = require('./locators/createCoreAsk.locators');
const TD = require('../data/kpmg-coreask-test-data');

class CreateCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.createCoreAsk, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async selectDppGroup(option) {
    await loc.dppGroupDropdown(this.page).selectOption(option);
  }

  async clickDppGroupDropdown() {
    await loc.dppGroupDropdown(this.page).click();
  }

  async getDppGroupOptions() {
    return await loc.dppGroupDropdown(this.page).locator('option').allTextContents();
  }

  async getSelectedDppGroup() {
    return await loc.dppGroupDropdown(this.page).inputValue();
  }

  async selectReasonForDppNeed(reason) {
    await loc.reasonForDppNeedDropdown(this.page).selectOption(reason);
  }

  async getOutgoingResourceValue() {
    return await loc.outgoingResourceField(this.page).inputValue();
  }

  async isOutgoingResourceDisabled() {
    return await loc.outgoingResourceField(this.page).isDisabled();
  }

  async fillOutgoingResource(name) {
    await loc.outgoingResourceField(this.page).fill(name);
  }

  async getRetirementDateValue() {
    return await loc.retirementDateField(this.page).inputValue();
  }

  async isRetirementDateDisabled() {
    return await loc.retirementDateField(this.page).isDisabled();
  }

  async fillRetirementDate(date) {
    await loc.retirementDateField(this.page).fill(date);
  }

  async clickRetirementDatePicker() {
    await loc.retirementDateField(this.page).click();
  }

  async selectLevelNeeded(level) {
    await loc.levelNeededDropdown(this.page).selectOption(level);
  }

  async isRolePostingVisible() {
    return await loc.rolePostingDropdown(this.page).isVisible();
  }

  async getRolePostingOptions() {
    return await loc.rolePostingDropdown(this.page).locator('option').allTextContents();
  }

  async selectRolePosting(option) {
    await loc.rolePostingDropdown(this.page).selectOption(option);
  }

  async selectGeneralSpecialty(option) {
    await loc.generalSpecialtyDropdown(this.page).selectOption(option);
  }

  async isSpecialtyDetailVisible() {
    return await loc.specialtyDetailTextbox(this.page).isVisible();
  }

  async fillSpecialtyDetail(detail) {
    await loc.specialtyDetailTextbox(this.page).fill(detail);
  }

  async fillHeadcountAmount(amount) {
    await loc.headcountAmountField(this.page).fill(amount);
  }

  async fillDppFteAmount(amount) {
    await loc.dppFteAmountField(this.page).fill(amount);
  }

  async fillProjectStartDate(date) {
    await loc.projectStartDateField(this.page).fill(date);
  }

  async fillRoleSummary(summary) {
    await loc.roleSummaryField(this.page).fill(summary);
  }

  async fillRoleResponsibilities(responsibilities) {
    await loc.roleResponsibilitiesField(this.page).fill(responsibilities);
  }

  async fillRoleQualifications(qualifications) {
    await loc.roleQualificationsField(this.page).fill(qualifications);
  }

  async selectRouteTo(option) {
    await loc.routeToDropdown(this.page).selectOption(option);
  }

  async clickSubmit() {
    await loc.submitButton(this.page).click();
  }

  async clickCancel() {
    await loc.cancelButton(this.page).click();
  }

  async fillMandatoryFields(data) {
    await this.selectDppGroup(data.dppGroup);
    await this.selectReasonForDppNeed(data.reason);
    if (data.outgoingResource) {
      await this.fillOutgoingResource(data.outgoingResource);
    }
    if (data.retirementDate) {
      await this.fillRetirementDate(data.retirementDate);
    }
    await this.selectLevelNeeded(data.level);
    await this.selectGeneralSpecialty(data.generalSpecialty);
    if (data.specialtyDetail) {
      await this.fillSpecialtyDetail(data.specialtyDetail);
    }
    await this.fillHeadcountAmount(data.headcount);
    await this.fillDppFteAmount(data.fte);
    await this.fillProjectStartDate(data.startDate);
    await this.fillRoleSummary(data.roleSummary);
    await this.fillRoleResponsibilities(data.roleResponsibilities);
    await this.fillRoleQualifications(data.roleQualifications);
  }
}

module.exports = CreateCoreAskPage;