const locators = {
  // Login page elements
  usernameField: (page) => page.locator('input[name="username"]').first(),
  passwordField: (page) => page.locator('input[name="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"]').first(),
  
  // Dashboard elements
  dashboard: (page) => page.locator('[data-testid="dashboard"]').first(),
  
  // Tasks section elements
  tasksSection: (page) => page.locator('[data-testid="tasks-section"]').first(),
  tasksPageHeader: (page) => page.locator('h1:has-text("Tasks")').first(),
  pendingTasksList: (page) => page.locator('[data-testid="pending-tasks-list"]').first(),
  
  // Core ASK Review Task elements
  coreAskReviewTask: (page) => page.locator('[data-testid="core-ask-review-task"]').first(),
  coreAskReviewTaskLink: (page) => page.locator('a:has-text("Core ASK Review Task")').first(),
  
  // CAW_FRM_CoreAskReview form elements
  coreAskReviewForm: (page) => page.locator('[data-testid="CAW_FRM_CoreAskReview"]').first(),
  askIdField: (page) => page.locator('[data-testid="ask-id-field"]').first(),
  submitterDetailsField: (page) => page.locator('[data-testid="submitter-details-field"]').first(),
  buPlanningGridField: (page) => page.locator('[data-testid="bu-planning-grid-field"]').first(),
  fiscalYearField: (page) => page.locator('[data-testid="fiscal-year-field"]').first(),
  
  // Read-only validation elements
  readOnlyFields: (page) => page.locator('[readonly], [disabled], [aria-readonly="true"]'),
  editableFields: (page) => page.locator('input:not([readonly]):not([disabled]), textarea:not([readonly]):not([disabled]), select:not([readonly]):not([disabled])'),
  
  // CAW_FRM_CoreAskDecisionButtons component elements
  approveButton: (page) => page.locator('button:has-text("Approve")').first(),
  returnButton: (page) => page.locator('button:has-text("Return")').first(),
  cancelButton: (page) => page.locator('button:has-text("Cancel")').first(),
  
  // Comment field using CAW_Comment CDT
  commentField: (page) => page.locator('[data-testid="comment-field"]').first(),
  commentTextArea: (page) => page.locator('textarea[name="comment"]').first(),
  
  // Confirmation and validation messages
  confirmationMessage: (page) => page.locator('[data-testid="confirmation-message"]').first(),
  validationErrorMessage: (page) => page.locator('[data-testid="validation-error"]').first(),
  errorMessage: (page) => page.locator('.error-message, [role="alert"]').first(),
  
  // Core ASK status elements
  askStatusField: (page) => page.locator('[data-testid="ask-status"]').first(),
  askStatusApproved: (page) => page.locator('[data-testid="ask-status"]:has-text("Approved")').first(),
  askStatusReturned: (page) => page.locator('[data-testid="ask-status"]:has-text("Returned")').first(),
  askStatusReview: (page) => page.locator('[data-testid="ask-status"]:has-text("Review")').first(),
  
  // Core ASK record elements
  askRecordDetailsPage: (page) => page.locator('[data-testid="ask-record-details"]').first(),
  auditHistoryTab: (page) => page.locator('[data-testid="audit-history-tab"]').first(),
  auditHistorySection: (page) => page.locator('[data-testid="audit-history-section"]').first(),
  auditEntries: (page) => page.locator('[data-testid="audit-entry"]'),
  
  // Audit entry fields
  auditEntryUserId: (page) => page.locator('[data-testid="audit-user-id"]'),
  auditEntryAction: (page) => page.locator('[data-testid="audit-action"]'),
  auditEntryTimestamp: (page) => page.locator('[data-testid="audit-timestamp"]'),
  auditEntryComment: (page) => page.locator('[data-testid="audit-comment"]'),
  
  // Ops team task elements
  opsTeamTaskList: (page) => page.locator('[data-testid="ops-team-task-list"]').first(),
  opsTeamNewTask: (page) => page.locator('[data-testid="ops-team-new-task"]').first(),
  taskAssignment: (page) => page.locator('[data-testid="task-assignment"]').first(),
  taskDetails: (page) => page.locator('[data-testid="task-details"]').first(),
  taskCoreAskIdReference: (page) => page.locator('[data-testid="task-core-ask-id"]').first()
};

module.exports = locators;