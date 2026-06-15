const loc = require('./locators/kpmg-dpp-core-ask.locators');

class KPMGDPPCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToCoreAsk() {
    await loc.coreAskMenu(this.page).waitFor({ state: 'visible' });
    await loc.coreAskMenu(this.page).click();
  }

  async clickCreateCoreAsk() {
    await loc.createCoreAskButton(this.page).waitFor({ state: 'visible' });
    await loc.createCoreAskButton(this.page).click();
  }

  async isCreateCoreAskFormDisplayed() {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.dppGroupDropdown(this.page).isVisible();
  }

  async fillDppGroup(value) {
    await loc.dppGroupDropdown(this.page).selectOption({ label: value });
  }

  async fillReasonForNeed(value) {
    await loc.reasonForNeedDropdown(this.page).selectOption({ label: value });
  }

  async fillLevelNeeded(value) {
    await loc.levelNeededDropdown(this.page).selectOption({ label: value });
  }

  async fillHeadcountAmount(value) {
    await loc.headcountAmountInput(this.page).fill(value);
  }

  async fillDppFteAmount(value) {
    await loc.dppFteAmountInput(this.page).fill(value);
  }

  async fillProjectStartDate(value) {
    await loc.projectStartDateInput(this.page).fill(value);
  }

  async fillRoleSummary(value) {
    await loc.roleSummaryTextarea(this.page).fill(value);
  }

  async fillRoleResponsibilities(value) {
    await loc.roleResponsibilitiesTextarea(this.page).fill(value);
  }

  async fillRoleQualifications(value) {
    await loc.roleQualificationsTextarea(this.page).fill(value);
  }

  async fillAllMandatoryFields(data) {
    await this.fillDppGroup(data.dppGroup);
    await this.fillReasonForNeed(data.reasonForNeed);
    await this.fillLevelNeeded(data.levelNeeded);
    await this.fillHeadcountAmount(data.headcountAmount);
    await this.fillDppFteAmount(data.dppFteAmount);
    await this.fillProjectStartDate(data.projectStartDate);
    await this.fillRoleSummary(data.roleSummary);
    await this.fillRoleResponsibilities(data.roleResponsibilities);
    await this.fillRoleQualifications(data.roleQualifications);
  }

  async clickRouteToDropdown() {
    await loc.routeToDropdown(this.page).click();
  }

  async isRouteToDropdownExpanded() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible' });
    return await loc.routeToDropdown(this.page).isVisible();
  }

  async selectRouteTo(value) {
    await loc.routeToDropdown(this.page).selectOption({ label: value });
  }

  async getRouteToSelectedValue() {
    return await loc.routeToDropdown(this.page).inputValue();
  }

  async clickSubmit() {
    await loc.submitButton(this.page).click();
  }

  async isConfirmationMessageDisplayed() {
    await loc.confirmationMessage(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.confirmationMessage(this.page).isVisible();
  }

  async getConfirmationMessageText() {
    return await loc.confirmationMessage(this.page).textContent();
  }

  async isValidationErrorVisible(errorLocator) {
    return await errorLocator(this.page).isVisible();
  }

  async getValidationErrorText(errorLocator) {
    return await errorLocator(this.page).textContent();
  }

  async navigateToAuditHistory() {
    await loc.auditHistoryTab(this.page).waitFor({ state: 'visible' });
    await loc.auditHistoryTab(this.page).click();
  }

  async isAuditHistoryDisplayed() {
    await loc.submittedByField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.submittedByField(this.page).isVisible();
  }

  async getSubmittedBy() {
    return await loc.submittedByField(this.page).textContent();
  }

  async getSubmissionTimestamp() {
    return await loc.submissionTimestamp(this.page).textContent();
  }

  async getAssignedTo() {
    return await loc.assignedToField(this.page).textContent();
  }

  async isTaskCreated() {
    await loc.taskCreated(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.taskCreated(this.page).isVisible();
  }
}

module.exports = KPMGDPPCoreAskPage;