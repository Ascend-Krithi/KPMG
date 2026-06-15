const locators = {
  // Navigation
  coreAskMenu: (page) => page.locator('a:has-text("Core ASK"), [href*="core-ask"]').first(),
  createCoreAskButton: (page) => page.locator('button:has-text("Create Core ASK"), a:has-text("Create Core ASK")').first(),
  
  // Form Fields
  dppGroupDropdown: (page) => page.locator('select[name="dppGroup"], [id*="dppGroup"], [data-testid="dppGroup"]').first(),
  reasonForNeedDropdown: (page) => page.locator('select[name="reasonForNeed"], [id*="reasonForNeed"], [data-testid="reasonForNeed"]').first(),
  levelNeededDropdown: (page) => page.locator('select[name="levelNeeded"], [id*="levelNeeded"], [data-testid="levelNeeded"]').first(),
  headcountAmountInput: (page) => page.locator('input[name="headcountAmount"], [id*="headcount"], [data-testid="headcountAmount"]').first(),
  dppFteAmountInput: (page) => page.locator('input[name="dppFteAmount"], [id*="dppFte"], [data-testid="dppFteAmount"]').first(),
  projectStartDateInput: (page) => page.locator('input[name="projectStartDate"], [id*="startDate"], input[type="date"]').first(),
  roleSummaryTextarea: (page) => page.locator('textarea[name="roleSummary"], [id*="roleSummary"], [data-testid="roleSummary"]').first(),
  roleResponsibilitiesTextarea: (page) => page.locator('textarea[name="roleResponsibilities"], [id*="responsibilities"], [data-testid="roleResponsibilities"]').first(),
  roleQualificationsTextarea: (page) => page.locator('textarea[name="roleQualifications"], [id*="qualifications"], [data-testid="roleQualifications"]').first(),
  
  // Route To Dropdown
  routeToDropdown: (page) => page.locator('select[name="routeTo"], [id*="routeTo"], [data-testid="routeTo"]').first(),
  routeToOption: (page, optionText) => page.locator(`select[name="routeTo"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  // Buttons
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit")').first(),
  
  // Confirmation & Messages
  confirmationMessage: (page) => page.locator('.success-message, .confirmation, [role="alert"]').first(),
  
  // Validation Errors
  validationError: (page, fieldName) => page.locator(`[data-error="${fieldName}"], .error:near(${fieldName}), .validation-error`).first(),
  dppGroupError: (page) => page.locator('text="DPP Group is required"').first(),
  reasonForNeedError: (page) => page.locator('text="Reason for DPP Need is required"').first(),
  levelNeededError: (page) => page.locator('text="Level Needed is required"').first(),
  headcountError: (page) => page.locator('text="Headcount Amount is required"').first(),
  dppFteError: (page) => page.locator('text="DPP FTE Amount is required"').first(),
  projectStartDateError: (page) => page.locator('text="Project Start Date is required"').first(),
  roleSummaryError: (page) => page.locator('text="Role Summary is required"').first(),
  roleResponsibilitiesError: (page) => page.locator('text="Role Responsibilities is required"').first(),
  roleQualificationsError: (page) => page.locator('text="Role Qualifications is required"').first(),
  
  // Audit History
  auditHistoryTab: (page) => page.locator('a:has-text("Audit History"), button:has-text("Audit History")').first(),
  submittedByField: (page) => page.locator('[data-testid="submittedBy"], .submitted-by, label:has-text("Submitted By") + *').first(),
  submissionTimestamp: (page) => page.locator('[data-testid="submissionTimestamp"], .submission-timestamp, label:has-text("Submission Timestamp") + *').first(),
  assignedToField: (page) => page.locator('[data-testid="assignedTo"], .assigned-to, label:has-text("Assigned To") + *').first(),
  taskCreated: (page) => page.locator('.task-created, [data-testid="taskCreated"]').first()
};

module.exports = locators;