const locators = {
  createCoreAskButton: (page) => page.locator('button:has-text("Create Core ASK"), a:has-text("Create Core ASK")').first(),
  coreAskForm: (page) => page.locator('form, .core-ask-form, [data-form="core-ask"]').first(),
  
  // Form Fields
  dppGroupDropdown: (page) => page.locator('select[name="dppGroup"], [data-field="dpp-group"], #dppGroup').first(),
  dppGroupOption: (page, optionText) => page.locator(`select[name="dppGroup"] option:has-text("${optionText}"), [data-field="dpp-group"] option:has-text("${optionText}")`).first(),
  
  reasonForDppNeedDropdown: (page) => page.locator('select[name="reasonForDppNeed"], [data-field="reason-for-dpp-need"], #reasonForDppNeed').first(),
  reasonForDppNeedOption: (page, optionText) => page.locator(`select[name="reasonForDppNeed"] option:has-text("${optionText}"), [data-field="reason-for-dpp-need"] option:has-text("${optionText}")`).first(),
  
  outgoingResourceField: (page) => page.locator('input[name="outgoingResource"], [data-field="outgoing-resource"], #outgoingResource').first(),
  retirementDateField: (page) => page.locator('input[name="retirementDate"], [data-field="retirement-date"], #retirementDate').first(),
  
  generalSpecialtyNeededDropdown: (page) => page.locator('select[name="generalSpecialtyNeeded"], [data-field="general-specialty-needed"], #generalSpecialtyNeeded').first(),
  generalSpecialtyNeededOption: (page, optionText) => page.locator(`select[name="generalSpecialtyNeeded"] option:has-text("${optionText}"), [data-field="general-specialty-needed"] option:has-text("${optionText}")`).first(),
  specialtyDetailsField: (page) => page.locator('input[name="specialtyDetails"], textarea[name="specialtyDetails"], [data-field="specialty-details"]').first(),
  leadershipPositionDetailsField: (page) => page.locator('input[name="leadershipPositionDetails"], textarea[name="leadershipPositionDetails"], [data-field="leadership-position-details"]').first(),
  
  levelNeededDropdown: (page) => page.locator('select[name="levelNeeded"], [data-field="level-needed"], #levelNeeded').first(),
  levelNeededOption: (page, optionText) => page.locator(`select[name="levelNeeded"] option:has-text("${optionText}"), [data-field="level-needed"] option:has-text("${optionText}")`).first(),
  
  rolePostingDropdown: (page) => page.locator('select[name="rolePosting"], [data-field="role-posting"], #rolePosting').first(),
  rolePostingOption: (page, optionText) => page.locator(`select[name="rolePosting"] option:has-text("${optionText}"), [data-field="role-posting"] option:has-text("${optionText}")`).first(),
  
  headcountAmountField: (page) => page.locator('input[name="headcountAmount"], [data-field="headcount-amount"], #headcountAmount').first(),
  dppFteAmountField: (page) => page.locator('input[name="dppFteAmount"], [data-field="dpp-fte-amount"], #dppFteAmount').first(),
  projectStartDateField: (page) => page.locator('input[name="projectStartDate"], [data-field="project-start-date"], #projectStartDate').first(),
  
  roleSummaryField: (page) => page.locator('textarea[name="roleSummary"], [data-field="role-summary"], #roleSummary').first(),
  roleResponsibilitiesField: (page) => page.locator('textarea[name="roleResponsibilities"], [data-field="role-responsibilities"], #roleResponsibilities').first(),
  roleQualificationsField: (page) => page.locator('textarea[name="roleQualifications"], [data-field="role-qualifications"], #roleQualifications').first(),
  
  routeToDropdown: (page) => page.locator('select[name="routeTo"], [data-field="route-to"], #routeTo').first(),
  routeToOption: (page, optionText) => page.locator(`select[name="routeTo"] option:has-text("${optionText}"), [data-field="route-to"] option:has-text("${optionText}")`).first(),
  
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit")').first(),
  
  // Validation Messages
  validationMessage: (page, fieldName) => page.locator(`.error-message:has-text("${fieldName}"), .validation-error:has-text("${fieldName}"), [data-error="${fieldName}"]`).first(),
  
  // Success Messages
  successMessage: (page) => page.locator('.success-message, .confirmation-message, [data-message="success"]').first(),
  
  // Audit History
  auditHistorySection: (page) => page.locator('[data-section="audit-history"], .audit-history, #auditHistory').first(),
  auditHistoryLink: (page) => page.locator('a:has-text("Audit History"), button:has-text("Audit History")').first()
};

module.exports = locators;