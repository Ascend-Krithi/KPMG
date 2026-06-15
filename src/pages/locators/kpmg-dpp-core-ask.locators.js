const locators = {
  coreAskMenu: (page) => page.locator('a:has-text("Core ASK"), [href*="core-ask"]').first(),
  createCoreAskButton: (page) => page.locator('button:has-text("Create Core ASK"), a:has-text("Create Core ASK")').first(),
  dppGroupDropdown: (page) => page.locator('select[name="dppGroup"], select[id="dppGroup"], [data-testid="dppGroup"]').first(),
  reasonForNeedDropdown: (page) => page.locator('select[name="reasonForNeed"], select[id="reasonForNeed"], [data-testid="reasonForNeed"]').first(),
  levelNeededDropdown: (page) => page.locator('select[name="levelNeeded"], select[id="levelNeeded"], [data-testid="levelNeeded"]').first(),
  headcountAmountInput: (page) => page.locator('input[name="headcountAmount"], input[id="headcountAmount"], [data-testid="headcountAmount"]').first(),
  dppFteAmountInput: (page) => page.locator('input[name="dppFteAmount"], input[id="dppFteAmount"], [data-testid="dppFteAmount"]').first(),
  projectStartDateInput: (page) => page.locator('input[name="projectStartDate"], input[id="projectStartDate"], input[type="date"], [data-testid="projectStartDate"]').first(),
  roleSummaryTextarea: (page) => page.locator('textarea[name="roleSummary"], textarea[id="roleSummary"], [data-testid="roleSummary"]').first(),
  roleResponsibilitiesTextarea: (page) => page.locator('textarea[name="roleResponsibilities"], textarea[id="roleResponsibilities"], [data-testid="roleResponsibilities"]').first(),
  roleQualificationsTextarea: (page) => page.locator('textarea[name="roleQualifications"], textarea[id="roleQualifications"], [data-testid="roleQualifications"]').first(),
  routeToDropdown: (page) => page.locator('select[name="routeTo"], select[id="routeTo"], [data-testid="routeTo"]').first(),
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit")').first(),
  confirmationMessage: (page) => page.locator('.success-message, .alert-success, [role="status"]').first(),
  validationError: (page, fieldName) => page.locator(`[data-field="${fieldName}"] .error, .error:has-text("${fieldName}"), .validation-error`).first(),
  allValidationErrors: (page) => page.locator('.error, .validation-error, .field-error'),
  auditHistoryLink: (page) => page.locator('a:has-text("Audit History"), [href*="audit-history"]').first(),
  auditHistorySubmittedBy: (page) => page.locator('[data-field="submittedBy"], .audit-submitted-by, td:has-text("Submitted By") + td').first(),
  auditHistoryAssignedTo: (page) => page.locator('[data-field="assignedTo"], .audit-assigned-to, td:has-text("Assigned To") + td').first(),
  auditHistoryTimestamp: (page) => page.locator('[data-field="timestamp"], .audit-timestamp, td:has-text("Timestamp") + td').first(),
  taskListLink: (page) => page.locator('a:has-text("Tasks"), a:has-text("My Tasks"), [href*="tasks"]').first(),
  taskAssignedToUser: (page, userName) => page.locator(`tr:has-text("${userName}"), .task-item:has-text("${userName}")`).first()
};

module.exports = locators;