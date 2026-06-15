const loc = require('./locators/kpmg-dpp-core-ask.locators');
const LOGIN_URL = 'https://kpmg-dpp-system.com';

class KpmgDppCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameInput(this.page).waitFor({ state: 'visible' });
    await loc.usernameInput(this.page).fill(username);
    await loc.passwordInput(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await loc.dashboardContainer(this.page).waitFor({ state: 'visible' });
  }

  async isDashboardVisible() {
    return await loc.dashboardContainer(this.page).isVisible();
  }

  async navigateToCoreAsk() {
    await loc.coreAskMenu(this.page).waitFor({ state: 'visible' });
    await loc.coreAskMenu(this.page).click();
  }

  async clickCreateCoreAsk() {
    await loc.createCoreAskButton(this.page).waitFor({ state: 'visible' });
    await loc.createCoreAskButton(this.page).click();
    await loc.coreAskForm(this.page).waitFor({ state: 'visible' });
  }

  async isCoreAskFormVisible() {
    return await loc.coreAskForm(this.page).isVisible();
  }

  async fillDppGroup(value) {
    await loc.dppGroupDropdown(this.page).waitFor({ state: 'visible' });
    await loc.dppGroupDropdown(this.page).selectOption(value);
  }

  async fillReasonForDppNeed(value) {
    await loc.reasonForDppNeedDropdown(this.page).waitFor({ state: 'visible' });
    await loc.reasonForDppNeedDropdown(this.page).selectOption(value);
  }

  async fillLevelNeeded(value) {
    await loc.levelNeededDropdown(this.page).waitFor({ state: 'visible' });
    await loc.levelNeededDropdown(this.page).selectOption(value);
  }

  async fillHeadcountAmount(value) {
    await loc.headcountAmountInput(this.page).waitFor({ state: 'visible' });
    await loc.headcountAmountInput(this.page).fill(value);
  }

  async fillDppFteAmount(value) {
    await loc.dppFteAmountInput(this.page).waitFor({ state: 'visible' });
    await loc.dppFteAmountInput(this.page).fill(value);
  }

  async fillProjectStartDate(value) {
    await loc.projectStartDateInput(this.page).waitFor({ state: 'visible' });
    await loc.projectStartDateInput(this.page).fill(value);
  }

  async fillRoleSummary(value) {
    await loc.roleSummaryTextarea(this.page).waitFor({ state: 'visible' });
    await loc.roleSummaryTextarea(this.page).fill(value);
  }

  async fillRoleResponsibilities(value) {
    await loc.roleResponsibilitiesTextarea(this.page).waitFor({ state: 'visible' });
    await loc.roleResponsibilitiesTextarea(this.page).fill(value);
  }

  async fillRoleQualifications(value) {
    await loc.roleQualificationsTextarea(this.page).waitFor({ state: 'visible' });
    await loc.roleQualificationsTextarea(this.page).fill(value);
  }

  async clickRouteToDropdown() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible' });
    await loc.routeToDropdown(this.page).click();
  }

  async selectRouteTo(value) {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible' });
    await loc.routeToDropdown(this.page).selectOption(value);
  }

  async isRouteToDropdownExpanded() {
    const dropdown = loc.routeToDropdown(this.page);
    const isExpanded = await dropdown.getAttribute('aria-expanded');
    return isExpanded === 'true';
  }

  async getRouteToOptions() {
    await loc.routeToDropdown(this.page).waitFor({ state: 'visible' });
    const options = await loc.routeToDropdown(this.page).locator('option').allTextContents();
    return options;
  }

  async clickSubmit() {
    await loc.submitButton(this.page).waitFor({ state: 'visible' });
    await loc.submitButton(this.page).click();
  }

  async isConfirmationMessageVisible() {
    return await loc.confirmationMessage(this.page).isVisible();
  }

  async getConfirmationMessage() {
    await loc.confirmationMessage(this.page).waitFor({ state: 'visible' });
    return await loc.confirmationMessage(this.page).textContent();
  }

  async getValidationErrorMessage(fieldName) {
    const errorLocatorMap = {
      dppGroup: loc.dppGroupError,
      reasonForDppNeed: loc.reasonForDppNeedError,
      levelNeeded: loc.levelNeededError,
      headcountAmount: loc.headcountAmountError,
      dppFteAmount: loc.dppFteAmountError,
      projectStartDate: loc.projectStartDateError,
      roleSummary: loc.roleSummaryError,
      roleResponsibilities: loc.roleResponsibilitiesError,
      roleQualifications: loc.roleQualificationsError
    };
    
    const errorLocator = errorLocatorMap[fieldName];
    if (errorLocator) {
      await errorLocator(this.page).waitFor({ state: 'visible' });
      return await errorLocator(this.page).textContent();
    }
    return null;
  }

  async isValidationErrorVisible(fieldName) {
    const errorLocatorMap = {
      dppGroup: loc.dppGroupError,
      reasonForDppNeed: loc.reasonForDppNeedError,
      levelNeeded: loc.levelNeededError,
      headcountAmount: loc.headcountAmountError,
      dppFteAmount: loc.dppFteAmountError,
      projectStartDate: loc.projectStartDateError,
      roleSummary: loc.roleSummaryError,
      roleResponsibilities: loc.roleResponsibilitiesError,
      roleQualifications: loc.roleQualificationsError
    };
    
    const errorLocator = errorLocatorMap[fieldName];
    if (errorLocator) {
      return await errorLocator(this.page).isVisible();
    }
    return false;
  }

  async navigateToAuditHistory() {
    await loc.auditHistoryLink(this.page).waitFor({ state: 'visible' });
    await loc.auditHistoryLink(this.page).click();
    await loc.auditHistoryTable(this.page).waitFor({ state: 'visible' });
  }

  async isAuditHistoryVisible() {
    return await loc.auditHistoryTable(this.page).isVisible();
  }

  async getSubmittedBy() {
    await loc.submittedByField(this.page).waitFor({ state: 'visible' });
    return await loc.submittedByField(this.page).textContent();
  }

  async getSubmissionTimestamp() {
    await loc.submissionTimestampField(this.page).waitFor({ state: 'visible' });
    return await loc.submissionTimestampField(this.page).textContent();
  }

  async getAssignedTo() {
    await loc.assignedToField(this.page).waitFor({ state: 'visible' });
    return await loc.assignedToField(this.page).textContent();
  }

  async navigateToTaskList() {
    await loc.taskListLink(this.page).waitFor({ state: 'visible' });
    await loc.taskListLink(this.page).click();
  }

  async getTaskAssignedTo() {
    await loc.taskAssignedTo(this.page).waitFor({ state: 'visible' });
    return await loc.taskAssignedTo(this.page).textContent();
  }

  async fillCoreAskForm(formData) {
    if (formData.dppGroup) await this.fillDppGroup(formData.dppGroup);
    if (formData.reasonForDppNeed) await this.fillReasonForDppNeed(formData.reasonForDppNeed);
    if (formData.levelNeeded) await this.fillLevelNeeded(formData.levelNeeded);
    if (formData.headcountAmount) await this.fillHeadcountAmount(formData.headcountAmount);
    if (formData.dppFteAmount) await this.fillDppFteAmount(formData.dppFteAmount);
    if (formData.projectStartDate) await this.fillProjectStartDate(formData.projectStartDate);
    if (formData.roleSummary) await this.fillRoleSummary(formData.roleSummary);
    if (formData.roleResponsibilities) await this.fillRoleResponsibilities(formData.roleResponsibilities);
    if (formData.roleQualifications) await this.fillRoleQualifications(formData.roleQualifications);
  }
}

module.exports = KpmgDppCoreAskPage;