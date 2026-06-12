const locators = {
  requestCreationMenu: (page) => page.locator('a:has-text("Request Creation"), button:has-text("Request Creation"), [href*="request-creation"]').first(),
  createNewRequestButton: (page) => page.locator('button:has-text("Create New Request"), button:has-text("Open Form"), button:has-text("New Request")').first(),
  requestForm: (page) => page.locator('form, [class*="request-form"], [id*="request-form"]').first(),
  
  // Dynamic field locators
  fieldByLabel: (page, label) => page.locator(`label:has-text("${label}"), [aria-label="${label}"]`).first(),
  inputFieldByLabel: (page, label) => page.locator(`label:has-text("${label}") + input, input[name*="${label.toLowerCase().replace(/\s+/g, '-')}"], input[placeholder*="${label}"]`).first(),
  dropdownByLabel: (page, label) => page.locator(`label:has-text("${label}") + select, select[name*="${label.toLowerCase().replace(/\s+/g, '-')}"]`).first(),
  checkboxByLabel: (page, label) => page.locator(`label:has-text("${label}") input[type="checkbox"], input[type="checkbox"][name*="${label.toLowerCase().replace(/\s+/g, '-')}"]`).first(),
  datePickerByLabel: (page, label) => page.locator(`label:has-text("${label}") + input[type="date"], input[type="date"][name*="${label.toLowerCase().replace(/\s+/g, '-')}"]`).first(),
  
  // Mandatory field indicators
  mandatoryIndicator: (page, label) => page.locator(`label:has-text("${label}"):has-text("*"), label:has-text("${label}") span.required, label:has-text("${label}") + span:has-text("Required")`).first(),
  
  // Help text and tooltips
  helpIcon: (page, label) => page.locator(`label:has-text("${label}") ~ [class*="help"], label:has-text("${label}") ~ [class*="tooltip"], label:has-text("${label}") [class*="info-icon"]`).first(),
  helpText: (page) => page.locator('[class*="help-text"], [class*="tooltip-content"], [role="tooltip"]').first(),
  
  // Form validation
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit")').first(),
  
  // Custom field verification
  customFieldContainer: (page, fieldName) => page.locator(`[data-field="${fieldName}"], [class*="field-${fieldName.toLowerCase().replace(/\s+/g, '-')}"]`).first()
};

module.exports = locators;