const locators = {
  // Login Page
  usernameInput: (page) => page.locator('input[name="username"], input[id="username"], input[type="text"]').first(),
  passwordInput: (page) => page.locator('input[name="password"], input[id="password"], input[type="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), input[type="submit"]').first(),
  
  // Dashboard
  dashboard: (page) => page.locator('[data-testid="dashboard"], .dashboard, #dashboard').first(),
  coreAskMenu: (page) => page.locator('a:has-text("Core ASK"), [data-testid="core-ask-menu"], nav a:has-text("Core ASK")').first(),
  
  // Core ASK Page
  createCoreAskButton: (page) => page.locator('button:has-text("Create Core ASK"), [data-testid="create-core-ask"], a:has-text("Create Core ASK")').first(),
  
  // Core ASK Form Fields
  dppGroupDropdown: (page) => page.locator('select[name="dppGroup"], [data-testid="dpp-group"], #dppGroup, select:has-text("DPP Group")').first(),
  dppGroupOption: (page, optionText) => page.locator(`select[name="dppGroup"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  reasonForDppNeedDropdown: (page) => page.locator('select[name="reasonForDppNeed"], [data-testid="reason-for-dpp-need"], #reasonForDppNeed').first(),
  reasonForDppNeedOption: (page, optionText) => page.locator(`select[name="reasonForDppNeed"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  outgoingResourceField: (page) => page.locator('input[name="outgoingResource"], [data-testid="outgoing-resource"], #outgoingResource, textarea[name="outgoingResource"]').first(),
  
  retirementDateField: (page) => page.locator('input[name="retirementDate"], [data-testid="retirement-date"], #retirementDate, input[type="date"][name*="retirement"]').first(),
  datePickerCalendar: (page) => page.locator('.date-picker, [role="dialog"], .calendar-popup').first(),
  
  generalSpecialtyNeededDropdown: (page) => page.locator('select[name="generalSpecialtyNeeded"], [data-testid="general-specialty-needed"], #generalSpecialtyNeeded').first(),
  generalSpecialtyNeededOption: (page, optionText) => page.locator(`select[name="generalSpecialtyNeeded"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  specialtyDetailsTextbox: (page) => page.locator('input[name="specialtyDetails"], textarea[name="specialtyDetails"], [data-testid="specialty-details"], #specialtyDetails').first(),
  leadershipPositionDetailsTextbox: (page) => page.locator('input[name="leadershipPositionDetails"], textarea[name="leadershipPositionDetails"], [data-testid="leadership-position-details"], #leadershipPositionDetails').first(),
  
  levelNeededDropdown: (page) => page.locator('select[name="levelNeeded"], [data-testid="level-needed"], #levelNeeded').first(),
  levelNeededOption: (page, optionText) => page.locator(`select[name="levelNeeded"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  rolePostingDropdown: (page) => page.locator('select[name="rolePosting"], [data-testid="role-posting"], #rolePosting').first(),
  rolePostingOption: (page, optionText) => page.locator(`select[name="rolePosting"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  headcountAmountField: (page) => page.locator('input[name="headcountAmount"], [data-testid="headcount-amount"], #headcountAmount').first(),
  dppFteAmountField: (page) => page.locator('input[name="dppFteAmount"], [data-testid="dpp-fte-amount"], #dppFteAmount').first(),
  projectStartDateField: (page) => page.locator('input[name="projectStartDate"], [data-testid="project-start-date"], #projectStartDate').first(),
  
  roleSummaryField: (page) => page.locator('textarea[name="roleSummary"], [data-testid="role-summary"], #roleSummary').first(),
  roleResponsibilitiesField: (page) => page.locator('textarea[name="roleResponsibilities"], [data-testid="role-responsibilities"], #roleResponsibilities').first(),
  roleQualificationsField: (page) => page.locator('textarea[name="roleQualifications"], [data-testid="role-qualifications"], #roleQualifications').first(),
  
  routeToDropdown: (page) => page.locator('select[name="routeTo"], [data-testid="route-to"], #routeTo, select:has-text("Route To")').first(),
  routeToOption: (page, optionText) => page.locator(`select[name="routeTo"] option:has-text("${optionText}"), option:has-text("${optionText}")`).first(),
  
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit"), [data-testid="submit-button"]').first(),
  
  // Validation Messages
  validationMessage: (page, fieldName) => page.locator(`[data-testid="${fieldName}-error"], .error-message:has-text("${fieldName}"), .validation-error`).first(),
  confirmationMessage: (page) => page.locator('.success-message, [data-testid="success-message"], .confirmation').first(),
  
  // Audit History
  auditHistorySection: (page) => page.locator('[data-testid="audit-history"], .audit-history, #auditHistory').first(),
  auditTrailEntry: (page) => page.locator('.audit-trail-entry, [data-testid="audit-entry"]').first(),
  submittedByField: (page) => page.locator('[data-testid="submitted-by"], .submitted-by').first(),
  assignedToField: (page) => page.locator('[data-testid="assigned-to"], .assigned-to').first()
};

module.exports = locators;