const loc = require('./locators/kpmg-dpp-core-ask.locators');
const TD = require('../data/kpmg-dpp-test-data');

class KpmgDppCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToCoreAsk() {
    await loc.coreAskMenu(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.coreAskMenu(this.page).click();
  }

  async clickCreateCoreAsk() {
    await loc.createCoreAskButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.createCoreAskButton(this.page).click();
  }

  async isCreateCoreAskFormDisplayed() {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.dppGroupDropdown(this.page).isVisible();
  }

  async fillMandatoryFields(formData) {
    await loc.dppGroupDropdown(this.page).selectOption(formData.dppGroup);
    await loc.reasonForNeedDropdown(this.page).selectOption(formData.reasonForNeed);
    await loc.levelNeededDropdown(this.page).selectOption(formData.levelNeeded);
    await loc.headcountAmountInput(this.page).fill(formData.headcountAmount);
    await loc.dppFteAmountInput(this.page).fill(formData.dppFteAmount);
    await loc.projectStartDateInput(this.page).fill(formData.projectStartDate);
    await loc.roleSummaryTextarea(this.page).fill(formData.roleSummary);
    await loc.roleResponsibilitiesTextarea(this.page).fill(formData.roleResponsibilities);
    await loc.roleQualificationsTextarea(this.page).fill(formData.roleQualifications);
  }

  async selectRouteToOption(option) {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.routeToDropdown(this.page).selectOption(option);
  }

  async clickRouteToDropdown() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.routeToDropdown(this.page).click();
  }

  async getRouteToOptions() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible', timeout: 10000 });
    const options = await loc.routeToDropdown(this.page).locator('option').allTextContents();
    return options;
  }

  async isRouteToDropdownExpanded() {
    const dropdown = loc.routeToDropdown(this.page);
    const isExpanded = await dropdown.evaluate(el => el.matches(':focus') || el.hasAttribute('aria-expanded'));
    return isExpanded;
  }

  async clickSubmit() {
    await loc.submitButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.submitButton(this.page).click();
  }

  async isConfirmationMessageDisplayed() {
    await loc.confirmationMessage(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.confirmationMessage(this.page).isVisible();
  }

  async getConfirmationMessage() {
    await loc.confirmationMessage(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.confirmationMessage(this.page).textContent();
  }

  async getAllValidationErrors() {
    await this.page.waitForTimeout(1000);
    const errors = await loc.allValidationErrors(this.page).allTextContents();
    return errors;
  }

  async isValidationErrorVisible(errorMessage) {
    const errorLocator = this.page.locator(`.error:has-text("${errorMessage}"), .validation-error:has-text("${errorMessage}")`);
    return await errorLocator.isVisible();
  }

  async navigateToAuditHistory() {
    await loc.auditHistoryLink(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.auditHistoryLink(this.page).click();
  }

  async isAuditHistoryPageDisplayed() {
    await loc.auditHistorySubmittedBy(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.auditHistorySubmittedBy(this.page).isVisible();
  }

  async getAuditHistorySubmittedBy() {
    await loc.auditHistorySubmittedBy(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.auditHistorySubmittedBy(this.page).textContent();
  }

  async getAuditHistoryAssignedTo() {
    await loc.auditHistoryAssignedTo(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.auditHistoryAssignedTo(this.page).textContent();
  }

  async getAuditHistoryTimestamp() {
    await loc.auditHistoryTimestamp(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.auditHistoryTimestamp(this.page).textContent();
  }

  async navigateToTaskList() {
    await loc.taskListLink(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.taskListLink(this.page).click();
  }

  async isTaskAssignedToUser(userName) {
    await loc.taskAssignedToUser(this.page, userName).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.taskAssignedToUser(this.page, userName).isVisible();
  }
}

module.exports = KpmgDppCoreAskPage;