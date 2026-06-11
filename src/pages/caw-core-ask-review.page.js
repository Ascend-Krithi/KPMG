const loc = require('./locators/caw-core-ask-review.locators');
const URL = process.env.APP_URL || 'https://application-url.com';

class CAWCoreAskReviewPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  // Login Methods
  async login(username, password) {
    await loc.usernameInput(this.page).fill(username);
    await loc.passwordInput(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await this.page.waitForLoadState('networkidle');
  }

  async isDashboardDisplayed() {
    return await loc.dashboardContainer(this.page).isVisible();
  }

  // Navigation Methods
  async navigateToTasks() {
    await loc.tasksNavLink(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isTasksPageDisplayed() {
    return await loc.tasksPageContainer(this.page).isVisible();
  }

  async isPendingTasksListDisplayed() {
    return await loc.pendingTasksList(this.page).isVisible();
  }

  // Task Operations
  async openCoreAskReviewTask() {
    await loc.coreAskReviewTask(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openTaskByName(taskName) {
    await loc.taskListItem(taskName)(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isCoreAskReviewTaskOpened() {
    return await loc.coreAskReviewForm(this.page).isVisible();
  }

  // Form Viewing Methods
  async isCoreAskReviewFormDisplayed() {
    return await loc.coreAskReviewForm(this.page).isVisible();
  }

  async getCoreAskId() {
    return await loc.coreAskIdField(this.page).textContent();
  }

  async getSubmitterDetails() {
    return await loc.submitterDetailsField(this.page).textContent();
  }

  async isBuPlanningGridVisible() {
    return await loc.buPlanningGrid(this.page).isVisible();
  }

  async getFiscalYear() {
    return await loc.fiscalYearField(this.page).textContent();
  }

  // Read-only Verification Methods
  async isFieldReadOnly(fieldName) {
    const field = loc.readOnlyField(fieldName)(this.page);
    const isDisabled = await field.isDisabled().catch(() => false);
    const isReadOnly = await field.getAttribute('readonly').then(attr => attr !== null).catch(() => false);
    return isDisabled || isReadOnly;
  }

  async areAllFieldsReadOnly() {
    const fields = await loc.allFormFields(this.page).all();
    for (const field of fields) {
      const isDisabled = await field.isDisabled().catch(() => false);
      const isReadOnly = await field.getAttribute('readonly').then(attr => attr !== null).catch(() => false);
      if (!isDisabled && !isReadOnly) {
        return false;
      }
    }
    return true;
  }

  // Comment Methods
  async enterComment(comment) {
    await loc.commentField(this.page).fill(comment);
  }

  async isCommentFieldEmpty() {
    const value = await loc.commentField(this.page).inputValue();
    return value === '' || value === null;
  }

  async getCommentValue() {
    return await loc.commentField(this.page).inputValue();
  }

  // Decision Button Methods
  async clickApprove() {
    await loc.approveButton(this.page).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickReturn() {
    await loc.returnButton(this.page).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickCancel() {
    await loc.cancelButton(this.page).click();
    await this.page.waitForLoadState('networkidle');
  }

  // Status and Message Methods
  async getStatus() {
    return await loc.statusField(this.page).textContent();
  }

  async isConfirmationMessageDisplayed() {
    return await loc.confirmationMessage(this.page).isVisible();
  }

  async getConfirmationMessage() {
    return await loc.confirmationMessage(this.page).textContent();
  }

  async isValidationErrorDisplayed() {
    return await loc.validationErrorMessage(this.page).isVisible();
  }

  async getValidationErrorMessage() {
    return await loc.validationErrorMessage(this.page).textContent();
  }

  // Task List Verification
  async isTaskInPendingList(taskName) {
    return await loc.taskListItem(taskName)(this.page).isVisible();
  }

  // ASK Record Methods
  async navigateToAskRecordDetails() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isAskRecordDetailsDisplayed() {
    return await loc.askRecordDetailsPage(this.page).isVisible();
  }

  async clickAuditHistoryTab() {
    await loc.auditHistoryTab(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isAuditHistoryDisplayed() {
    return await loc.auditHistorySection(this.page).isVisible();
  }

  // Audit Entry Verification Methods
  async isAuditEntryUserIdDisplayed(userId) {
    return await loc.auditEntryUserId(userId)(this.page).isVisible();
  }

  async isAuditEntryActionDisplayed(action) {
    return await loc.auditEntryAction(action)(this.page).isVisible();
  }

  async isAuditEntryTimestampDisplayed() {
    return await loc.auditEntryTimestamp(this.page).isVisible();
  }

  async getAuditEntryTimestamp() {
    return await loc.auditEntryTimestamp(this.page).textContent();
  }

  async isAuditEntryCommentDisplayed(comment) {
    return await loc.auditEntryComment(comment)(this.page).isVisible();
  }

  // Ops Team Task Methods
  async navigateToOpsTeamTaskList() {
    await this.page.goto(`${URL}/ops-team-tasks`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async isOpsTeamTaskListDisplayed() {
    return await loc.opsTeamTaskList(this.page).isVisible();
  }

  async isNewTaskAssignmentDisplayed() {
    return await loc.newTaskAssignment(this.page).isVisible();
  }

  async getTaskAssignmentDetails() {
    return await loc.taskAssignmentDetails(this.page).textContent();
  }

  async isTaskCoreAskIdReferenceDisplayed() {
    return await loc.taskCoreAskIdReference(this.page).isVisible();
  }

  async getTaskCoreAskIdReference() {
    return await loc.taskCoreAskIdReference(this.page).textContent();
  }
}

module.exports = CAWCoreAskReviewPage;