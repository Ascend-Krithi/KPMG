const locators = {
  dppGroupDropdown: (page) => page.locator('select[name*="dppGroup" i], select[id*="dppGroup" i], [data-field="dppGroup"]').first(),
  reasonForDppNeedDropdown: (page) => page.locator('select[name*="reason" i], select[id*="reason" i], [data-field="reasonForDppNeed"]').first(),
  outgoingResourceField: (page) => page.locator('input[name*="outgoing" i], input[id*="outgoing" i], [data-field="outgoingResource"]').first(),
  retirementDateField: (page) => page.locator('input[name*="retirement" i], input[name*="endDate" i], input[type="date"][id*="retirement" i], [data-field="retirementDate"]').first(),
  levelNeededDropdown: (page) => page.locator('select[name*="level" i], select[id*="level" i], [data-field="levelNeeded"]').first(),
  rolePostingDropdown: (page) => page.locator('select[name*="rolePosting" i], select[id*="posting" i], [data-field="rolePosting"]').first(),
  generalSpecialtyDropdown: (page) => page.locator('select[name*="specialty" i], select[id*="specialty" i], [data-field="generalSpecialty"]').first(),
  specialtyDetailTextbox: (page) => page.locator('input[name*="specialtyDetail" i], textarea[name*="specialtyDetail" i], [data-field="specialtyDetail"]').first(),
  headcountAmountField: (page) => page.locator('input[name*="headcount" i], input[id*="headcount" i]').first(),
  dppFteAmountField: (page) => page.locator('input[name*="fte" i], input[id*="fte" i]').first(),
  projectStartDateField: (page) => page.locator('input[name*="startDate" i], input[type="date"][id*="start" i]').first(),
  roleSummaryField: (page) => page.locator('textarea[name*="summary" i], textarea[id*="summary" i]').first(),
  roleResponsibilitiesField: (page) => page.locator('textarea[name*="responsib" i], textarea[id*="responsib" i]').first(),
  roleQualificationsField: (page) => page.locator('textarea[name*="qualif" i], textarea[id*="qualif" i]').first(),
  routeToDropdown: (page) => page.locator('select[name*="routeTo" i], select[id*="route" i], [data-field="routeTo"]').first(),
  submitButton: (page) => page.locator('button[type="submit"], button:has-text("Submit"), input[type="submit"]').first(),
  cancelButton: (page) => page.locator('button:has-text("Cancel")').first()
};

module.exports = locators;