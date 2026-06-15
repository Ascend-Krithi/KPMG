const loc = require('../locators/core-ask.locators');
const TD = require('../data/drt-test-data');

class CoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToCoreAskModule() {
    await loc.coreAskMenuLink(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.coreAskMenuLink(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickCreateCoreAsk() {
    await loc.createCoreAskButton(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.createCoreAskButton(this.page).click();
    await loc.formContainer(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  async clickDppGroupDropdown() {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.dppGroupDropdown(this.page).click();
  }

  async getDppGroupOptions() {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const options = await loc.dppGroupDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectDppGroup(groupName) {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.dppGroupDropdown(this.page).selectOption({ label: groupName });
  }

  async clickReasonForDppNeedDropdown() {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.reasonForDppNeedDropdown(this.page).click();
  }

  async getReasonForDppNeedOptions() {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const options = await loc.reasonForDppNeedDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectReasonForDppNeed(reason) {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.reasonForDppNeedDropdown(this.page).selectOption({ label: reason });
    await this.page.waitForTimeout(1000);
  }

  async getOutgoingResourceValue() {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.outgoingResourceField(this.page).inputValue();
  }

  async isOutgoingResourceReadOnly() {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.outgoingResourceField(this.page).isDisabled();
  }

  async isOutgoingResourceEditable() {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const isDisabled = await loc.outgoingResourceField(this.page).isDisabled();
    return !isDisabled;
  }

  async fillOutgoingResource(text) {
    await loc.outgoingResourceField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.outgoingResourceField(this.page).fill(text);
  }

  async getRetirementDateValue() {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.retirementDateField(this.page).inputValue();
  }

  async isRetirementDateReadOnly() {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.retirementDateField(this.page).isDisabled();
  }

  async isRetirementDateEditable() {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const isDisabled = await loc.retirementDateField(this.page).isDisabled();
    return !isDisabled;
  }

  async isDatePickerVisible() {
    return await loc.datePickerIcon(this.page).isVisible();
  }

  async selectRetirementDate(date) {
    await loc.retirementDateField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.retirementDateField(this.page).fill(date);
  }

  async clickLevelNeededDropdown() {
    await loc.levelNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.levelNeededDropdown(this.page).click();
  }

  async getLevelNeededOptions() {
    await loc.levelNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const options = await loc.levelNeededDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectLevelNeeded(level) {
    await loc.levelNeededDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.levelNeededDropdown(this.page).selectOption({ label: level });
    await this.page.waitForTimeout(1000);
  }

  async clickGeneralSpecialtyDropdown() {
    await loc.generalSpecialtyDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.generalSpecialtyDropdown(this.page).click();
  }

  async getGeneralSpecialtyOptions() {
    await loc.generalSpecialtyDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const options = await loc.generalSpecialtyDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectGeneralSpecialty(option) {
    await loc.generalSpecialtyDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.generalSpecialtyDropdown(this.page).selectOption({ label: option });
    await this.page.waitForTimeout(1000);
  }

  async isSpecialtyTextBoxVisible() {
    return await loc.specialtyTextBox(this.page).isVisible();
  }

  async isLeadershipTextBoxVisible() {
    return await loc.leadershipTextBox(this.page).isVisible();
  }

  async fillSpecialtyDetails(text) {
    await loc.specialtyTextBox(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.specialtyTextBox(this.page).fill(text);
  }

  async fillLeadershipDetails(text) {
    await loc.leadershipTextBox(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.leadershipTextBox(this.page).fill(text);
  }

  async isRolePostingVisible() {
    return await loc.rolePostingDropdown(this.page).isVisible();
  }

  async clickRolePostingDropdown() {
    await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.rolePostingDropdown(this.page).click();
  }

  async getRolePostingOptions() {
    await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    const options = await loc.rolePostingDropdown(this.page).locator('option').allTextContents();
    return options.filter(opt => opt.trim() !== '');
  }

  async selectRolePosting(option) {
    await loc.rolePostingDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.rolePostingDropdown(this.page).selectOption({ label: option });
  }

  async fillMandatoryFields(data) {
    if (data.dppGroup) await this.selectDppGroup(data.dppGroup);
    if (data.reasonForDppNeed) await this.selectReasonForDppNeed(data.reasonForDppNeed);
    if (data.outgoingResource) await this.fillOutgoingResource(data.outgoingResource);
    if (data.levelNeeded) await this.selectLevelNeeded(data.levelNeeded);
    if (data.generalSpecialty) await this.selectGeneralSpecialty(data.generalSpecialty);
    if (data.specialtyDetails) await this.fillSpecialtyDetails(data.specialtyDetails);
    if (data.headcount) await loc.headcountAmountField(this.page).fill(data.headcount);
    if (data.dppFte) await loc.dppFteAmountField(this.page).fill(data.dppFte);
    if (data.retirementDate) await this.selectRetirementDate(data.retirementDate);
    if (data.projectStartDate) await loc.projectStartDateField(this.page).fill(data.projectStartDate);
    if (data.roleSummary) await loc.roleSummaryField(this.page).fill(data.roleSummary);
    if (data.roleResponsibilities) await loc.roleResponsibilitiesField(this.page).fill(data.roleResponsibilities);
    if (data.roleQualifications) await loc.roleQualificationsField(this.page).fill(data.roleQualifications);
    if (data.rolePosting) await this.selectRolePosting(data.rolePosting);
  }

  async clickSubmitButton() {
    await loc.submitButton(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.submitButton(this.page).click();
  }

  async selectRoutingOption(option) {
    await loc.routingOptionRadio(this.page, option).waitFor({ state: 'visible', timeout: 30000 });
    await loc.routingOptionRadio(this.page, option).click();
  }

  async getAvailableRoutingOptions() {
    const options = [];
    for (const option of Object.values(TD.routingOptions)) {
      const isVisible = await loc.routingOptionRadio(this.page, option).isVisible().catch(() => false);
      if (isVisible) {
        options.push(option);
      }
    }
    return options;
  }

  async isConfirmationMessageVisible() {
    return await loc.confirmationMessage(this.page).isVisible();
  }
}

module.exports = CoreAskPage;