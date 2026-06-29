/**
 * KPMG Core ASK Page Locators
 * Page: Create Core ASK
 */

const locators = {
  // DPP Group Field
  dppGroupDropdown: (page) => page.locator('[data-testid="dpp-group-dropdown"], #dppGroup, select[name="dppGroup"]').first(),
  dppGroupOption: (page, value) => page.locator(`option:has-text("${value}")`).first(),

  // Reason for DPP Need
  reasonForNeedDropdown: (page) => page.locator('[data-testid="reason-dropdown"], #reasonForNeed, select[name="reasonForNeed"]').first(),
  reasonOption: (page, value) => page.locator(`option:has-text("${value}")`).first(),

  // Outgoing Resource
  outgoingResourceField: (page) => page.locator('[data-testid="outgoing-resource"], #outgoingResource, input[name="outgoingResource"]').first(),

  // Level Needed
  levelNeededDropdown: (page) => page.locator('[data-testid="level-needed-dropdown"], #levelNeeded, select[name="levelNeeded"]').first(),
  levelOption: (page, value) => page.locator(`option:has-text("${value}")`).first(),

  // Role Posting
  rolePostingDropdown: (page) => page.locator('[data-testid="role-posting-dropdown"], #rolePosting, select[name="rolePosting"]').first(),
  rolePostingOption: (page, value) => page.locator(`option:has-text("${value}")`).first(),

  // General/Specialty Needed
  generalSpecialtyDropdown: (page) => page.locator('[data-testid="general-specialty-dropdown"], #generalSpecialty, select[name="generalSpecialty"]').first(),
  generalSpecialtyOption: (page, value) => page.locator(`option:has-text("${value}")`).first(),
  specialtyDetailsTextbox: (page) => page.locator('[data-testid="specialty-details"], #specialtyDetails, input[name="specialtyDetails"]').first(),

  // Route To
  routeToDropdown: (page) => page.locator('[data-testid="route-to-dropdown"], #routeTo, select[name="routeTo"]').first(),
  routeToOption: (page, value) => page.locator(`option:has-text("${value}")`).first(),

  // Other Form Fields
  headcountField: (page) => page.locator('[data-testid="headcount"], #headcount, input[name="headcount"]').first(),
  fteField: (page) => page.locator('[data-testid="fte"], #fte, input[name="fte"]').first(),
  startDateField: (page) => page.locator('[data-testid="start-date"], #startDate, input[name="startDate"]').first(),
  retirementDateField: (page) => page.locator('[data-testid="retirement-date"], #retirementDate, input[name="retirementDate"]').first(),
  roleSummaryField: (page) => page.locator('[data-testid="role-summary"], #roleSummary, textarea[name="roleSummary"]').first(),
  roleResponsibilitiesField: (page) => page.locator('[data-testid="role-responsibilities"], #roleResponsibilities, textarea[name="roleResponsibilities"]').first(),
  roleQualificationsField: (page) => page.locator('[data-testid="role-qualifications"], #roleQualifications, textarea[name="roleQualifications"]').first(),

  // Buttons
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit")').first(),
  cancelButton: (page) => page.locator('button:has-text("Cancel")').first(),

  // Messages and Validation
  errorMessage: (page) => page.locator('.error-message, [role="alert"], .alert-danger').first(),
  successMessage: (page) => page.locator('.success-message, .alert-success').first(),

  // Page Elements
  pageTitle: (page) => page.locator('h1, .page-title').first(),
  formContainer: (page) => page.locator('form, .form-container').first()
};

module.exports = locators;