const locators = {
  // Login Page Locators
  usernameInput: (page) => page.locator('#username').first(),
  passwordInput: (page) => page.locator('#password').first(),
  loginButton: (page) => page.locator('button[type="submit"]').first(),
  
  // Dashboard Locators
  dashboardContainer: (page) => page.locator('[data-testid="dashboard"]').first(),
  coreAskMenu: (page) => page.locator('a:has-text("Core ASK")').first(),
  createCoreAskButton: (page) => page.locator('button:has-text("Create Core ASK")').first(),
  
  // Core ASK Form Locators
  coreAskForm: (page) => page.locator('form[name="coreAskForm"]').first(),
  dppGroupDropdown: (page) => page.locator('#dppGroup').first(),
  reasonForDppNeedDropdown: (page) => page.locator('#reasonForDppNeed').first(),
  levelNeededDropdown: (page) => page.locator('#levelNeeded').first(),
  headcountAmountInput: (page) => page.locator('#headcountAmount').first(),
  dppFteAmountInput: (page) => page.locator('#dppFteAmount').first(),
  projectStartDateInput: (page) => page.locator('#projectStartDate').first(),
  roleSummaryTextarea: (page) => page.locator('#roleSummary').first(),
  roleResponsibilitiesTextarea: (page) => page.locator('#roleResponsibilities').first(),
  roleQualificationsTextarea: (page) => page.locator('#roleQualifications').first(),
  routeToDropdown: (page) => page.locator('#routeTo').first(),
  submitButton: (page) => page.locator('button[type="submit"]:has-text("Submit")').first(),
  
  // Validation Error Locators
  dppGroupError: (page) => page.locator('#dppGroup-error').first(),
  reasonForDppNeedError: (page) => page.locator('#reasonForDppNeed-error').first(),
  levelNeededError: (page) => page.locator('#levelNeeded-error').first(),
  headcountAmountError: (page) => page.locator('#headcountAmount-error').first(),
  dppFteAmountError: (page) => page.locator('#dppFteAmount-error').first(),
  projectStartDateError: (page) => page.locator('#projectStartDate-error').first(),
  roleSummaryError: (page) => page.locator('#roleSummary-error').first(),
  roleResponsibilitiesError: (page) => page.locator('#roleResponsibilities-error').first(),
  roleQualificationsError: (page) => page.locator('#roleQualifications-error').first(),
  
  // Confirmation and Messages
  confirmationMessage: (page) => page.locator('.confirmation-message').first(),
  successMessage: (page) => page.locator('.success-message').first(),
  
  // Audit History Locators
  auditHistoryLink: (page) => page.locator('a:has-text("Audit History")').first(),
  auditHistoryTable: (page) => page.locator('table[data-testid="audit-history"]').first(),
  submittedByField: (page) => page.locator('[data-field="submittedBy"]').first(),
  submissionTimestampField: (page) => page.locator('[data-field="submissionTimestamp"]').first(),
  assignedToField: (page) => page.locator('[data-field="assignedTo"]').first(),
  
  // Task Management
  taskListLink: (page) => page.locator('a:has-text("Tasks")').first(),
  taskAssignedTo: (page) => page.locator('[data-testid="task-assigned-to"]').first()
};

module.exports = locators;