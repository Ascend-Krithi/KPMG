const loc = require('./locators/caw-core-ask-review.locators');
const { expect } = require('@playwright/test');

class CAWCoreAskReviewPage {
  constructor(page) {
    this.page = page;
  }

  // Navigation methods
  async goto(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async navigateToTasks() {
    await loc.tasksSection(this.page).click();
    await loc.tasksPageHeader(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  async openCoreAskReviewTask() {
    await loc.coreAskReviewTaskLink(this.page).click();
    await loc.coreAskReviewForm(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  async navigateToAskRecordDetails() {
    await loc.askRecordDetailsPage(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  async navigateToOpsTeamTaskList() {
    await loc.opsTeamTaskList(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  // Login methods
  async login(username, password) {
    await loc.usernameField(this.page).fill(username);
    await loc.passwordField(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await loc.dashboard(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  // Form interaction methods
  async viewCoreAskReviewForm() {
    return await loc.coreAskReviewForm(this.page).isVisible();
  }

  async addComment(comment) {
    await loc.commentTextArea(this.page).fill(comment);
  }

  async clearComment() {
    await loc.commentTextArea(this.page).clear();
  }

  async clickApprove() {
    await loc.approveButton(this.page).click();
  }

  async clickReturn() {
    await loc.returnButton(this.page).click();
  }

  async clickCancel() {
    await loc.cancelButton(this.page).click();
  }

  // Validation methods
  async isFormDisplayed() {
    return await loc.coreAskReviewForm(this.page).isVisible();
  }

  async isDashboardDisplayed() {
    return await loc.dashboard(this.page).isVisible();
  }

  async isTasksPageDisplayed() {
    return await loc.tasksPageHeader(this.page).isVisible();
  }

  async isPendingTasksListDisplayed() {
    return await loc.pendingTasksList(this.page).isVisible();
  }

  async isCoreAskReviewTaskDisplayed() {
    return await loc.coreAskReviewTask(this.page).isVisible();
  }

  async areAllFieldsReadOnly() {
    const readOnlyCount = await loc.readOnlyFields(this.page).count();
    const editableCount = await loc.editableFields(this.page).count();
    return readOnlyCount > 0 && editableCount === 0;
  }

  async isConfirmationMessageDisplayed() {
    return await loc.confirmationMessage(this.page).isVisible();
  }

  async isValidationErrorDisplayed() {
    return await loc.validationErrorMessage(this.page).isVisible();
  }

  async getValidationErrorText() {
    return await loc.validationErrorMessage(this.page).textContent();
  }

  async getAskStatus() {
    return await loc.askStatusField(this.page).textContent();
  }

  async isAskStatusApproved() {
    return await loc.askStatusApproved(this.page).isVisible();
  }

  async isAskStatusReturned() {
    return await loc.askStatusReturned(this.page).isVisible();
  }

  async isAskStatusReview() {
    return await loc.askStatusReview(this.page).isVisible();
  }

  // Form field visibility methods
  async isAskIdVisible() {
    return await loc.askIdField(this.page).isVisible();
  }

  async isSubmitterDetailsVisible() {
    return await loc.submitterDetailsField(this.page).isVisible();
  }

  async isBuPlanningGridVisible() {
    return await loc.buPlanningGridField(this.page).isVisible();
  }

  async isFiscalYearVisible() {
    return await loc.fiscalYearField(this.page).isVisible();
  }

  // Audit history methods
  async openAuditHistoryTab() {
    await loc.auditHistoryTab(this.page).click();
    await loc.auditHistorySection(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  async isAuditHistoryDisplayed() {
    return await loc.auditHistorySection(this.page).isVisible();
  }

  async getAuditEntriesCount() {
    return await loc.auditEntries(this.page).count();
  }

  async getLatestAuditEntryUserId() {
    return await loc.auditEntryUserId(this.page).first().textContent();
  }

  async getLatestAuditEntryAction() {
    return await loc.auditEntryAction(this.page).first().textContent();
  }

  async getLatestAuditEntryTimestamp() {
    return await loc.auditEntryTimestamp(this.page).first().textContent();
  }

  async getLatestAuditEntryComment() {
    return await loc.auditEntryComment(this.page).first().textContent();
  }

  async isAuditEntryPresent(userId, action) {
    const entries = await loc.auditEntries(this.page).count();
    for (let i = 0; i < entries; i++) {
      const entryUserId = await loc.auditEntryUserId(this.page).nth(i).textContent();
      const entryAction = await loc.auditEntryAction(this.page).nth(i).textContent();
      if (entryUserId.includes(userId) && entryAction.includes(action)) {
        return true;
      }
    }
    return false;
  }

  // Ops team task methods
  async isOpsTeamTaskListDisplayed() {
    return await loc.opsTeamTaskList(this.page).isVisible();
  }

  async isNewOpsTeamTaskCreated() {
    return await loc.opsTeamNewTask(this.page).isVisible();
  }

  async getTaskAssignment() {
    return await loc.taskAssignment(this.page).textContent();
  }

  async getTaskDetails() {
    return await loc.taskDetails(this.page).textContent();
  }

  async getTaskCoreAskIdReference() {
    return await loc.taskCoreAskIdReference(this.page).textContent();
  }

  // Task list methods
  async isCoreAskReviewTaskInPendingList() {
    return await loc.coreAskReviewTask(this.page).isVisible();
  }
}

module.exports = CAWCoreAskReviewPage;