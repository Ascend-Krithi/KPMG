const locators = {
  // Login Page
  usernameInput: (page) => page.locator('input[name="username"]').first(),
  passwordInput: (page) => page.locator('input[name="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"]').first(),
  
  // Dashboard
  dashboardContainer: (page) => page.locator('[data-testid="dashboard"]').first(),
  
  // Tasks Section
  tasksNavLink: (page) => page.locator('a:has-text("Tasks")').first(),
  tasksPageContainer: (page) => page.locator('[data-testid="tasks-page"]').first(),
  pendingTasksList: (page) => page.locator('[data-testid="pending-tasks-list"]').first(),
  
  // Core ASK Review Task
  coreAskReviewTask: (page) => page.locator('text=Core ASK Review Task').first(),
  taskListItem: (taskName) => (page) => page.locator(`[data-testid="task-item"]:has-text("${taskName}")`).first(),
  
  // CAW_FRM_CoreAskReview Form
  coreAskReviewForm: (page) => page.locator('[data-testid="CAW_FRM_CoreAskReview"]').first(),
  coreAskIdField: (page) => page.locator('[data-testid="core-ask-id"]').first(),
  submitterDetailsField: (page) => page.locator('[data-testid="submitter-details"]').first(),
  buPlanningGrid: (page) => page.locator('[data-testid="bu-planning-grid"]').first(),
  fiscalYearField: (page) => page.locator('[data-testid="fiscal-year"]').first(),
  
  // Form Fields - Read-only verification
  readOnlyField: (fieldName) => (page) => page.locator(`[data-testid="${fieldName}"][readonly], [data-testid="${fieldName}"][disabled]`).first(),
  allFormFields: (page) => page.locator('[data-testid^="field-"]'),
  
  // CAW_FRM_CoreAskDecisionButtons Component
  approveButton: (page) => page.locator('button:has-text("Approve")').first(),
  returnButton: (page) => page.locator('button:has-text("Return")').first(),
  cancelButton: (page) => page.locator('button:has-text("Cancel")').first(),
  
  // Comment Field (CAW_Comment CDT)
  commentField: (page) => page.locator('[data-testid="comment-field"], textarea[name="comment"]').first(),
  
  // Status and Messages
  statusField: (page) => page.locator('[data-testid="status-field"]').first(),
  confirmationMessage: (page) => page.locator('[data-testid="confirmation-message"], .success-message').first(),
  validationErrorMessage: (page) => page.locator('[data-testid="validation-error"], .error-message').first(),
  
  // ASK Record Details
  askRecordDetailsPage: (page) => page.locator('[data-testid="ask-record-details"]').first(),
  auditHistoryTab: (page) => page.locator('a:has-text("Audit History"), button:has-text("Audit History")').first(),
  auditHistorySection: (page) => page.locator('[data-testid="audit-history-section"]').first(),
  
  // Audit Entry Fields
  auditEntryUserId: (userId) => (page) => page.locator(`[data-testid="audit-user"]:has-text("${userId}")`).first(),
  auditEntryAction: (action) => (page) => page.locator(`[data-testid="audit-action"]:has-text("${action}")`).first(),
  auditEntryTimestamp: (page) => page.locator('[data-testid="audit-timestamp"]').first(),
  auditEntryComment: (comment) => (page) => page.locator(`[data-testid="audit-comment"]:has-text("${comment}")`).first(),
  
  // Ops Team Task List
  opsTeamTaskList: (page) => page.locator('[data-testid="ops-team-tasks"]').first(),
  newTaskAssignment: (page) => page.locator('[data-testid="new-task-assignment"]').first(),
  taskAssignmentDetails: (page) => page.locator('[data-testid="task-assignment-details"]').first(),
  
  // CAW_V_Task View
  cawTaskView: (page) => page.locator('[data-testid="CAW_V_Task"]').first(),
  taskCoreAskIdReference: (page) => page.locator('[data-testid="task-core-ask-id"]').first()
};

module.exports = locators;