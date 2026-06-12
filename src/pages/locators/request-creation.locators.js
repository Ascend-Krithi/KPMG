const locators = {
  usernameField: (page) => page.locator('input[name="username"], input[type="email"][placeholder*="username" i], input[id*="username" i]').first(),
  passwordField: (page) => page.locator('input[name="password"], input[type="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In")').first(),
  dashboardContainer: (page) => page.locator('[class*="dashboard"], [id*="dashboard"], main, [role="main"]').first(),
  requestCreationMenu: (page) => page.locator('a:has-text("Request Creation"), a:has-text("Create Request"), nav a:has-text("Request")').first(),
  createNewRequestButton: (page) => page.locator('button:has-text("Create New Request"), button:has-text("Open Form"), button:has-text("New Request")').first(),
  requestForm: (page) => page.locator('form[class*="request"], form[id*="request"], [role="form"]').first(),
  requestTypeField: (page) => page.locator('select[name*="type" i], select[id*="type" i], [label*="Request Type"] select').first(),
  priorityField: (page) => page.locator('select[name*="priority" i], select[id*="priority" i], [label*="Priority"] select').first(),
  departmentField: (page) => page.locator('select[name*="department" i], input[name*="department" i], [label*="Department"] select, [label*="Department"] input').first(),
  descriptionField: (page) => page.locator('textarea[name*="description" i], textarea[id*="description" i], [label*="Description"] textarea').first(),
  attachmentsField: (page) => page.locator('input[type="file"], [label*="Attachment"] input[type="file"]').first(),
  requestTitleField: (page) => page.locator('input[name*="title" i], input[id*="title" i], [label*="Request Title"] input').first(),
  priorityDropdown: (page) => page.locator('select[name*="priority" i], [label*="Priority"] select').first(),
  priorityOptions: (page) => page.locator('select[name*="priority" i] option, [label*="Priority"] select option'),
  urgentCheckbox: (page) => page.locator('input[type="checkbox"][name*="urgent" i], [label*="Urgent"] input[type="checkbox"]').first(),
  requiredByDateField: (page) => page.locator('input[type="date"][name*="required" i], input[name*="date" i], [label*="Required By"] input').first(),
  datePickerWidget: (page) => page.locator('[class*="datepicker"], [role="dialog"][class*="calendar"]').first(),
  mandatoryIndicator: (page) => page.locator('span.required, span:has-text("*"), label:has(span.required)'),
  fieldLabel: (page, labelText) => page.locator(`label:has-text("${labelText}"), [class*="label"]:has-text("${labelText}")`).first(),
  helpIcon: (page) => page.locator('[class*="help-icon"], [class*="tooltip-icon"], [title*="help" i]').first(),
  helpTooltip: (page) => page.locator('[role="tooltip"], [class*="tooltip"], [class*="help-text"]').first(),
  budgetCodeField: (page) => page.locator('input[name*="budget" i], [label*="Budget Code"] input').first(),
  additionalNotesField: (page) => page.locator('textarea[name*="notes" i], [label*="Additional Notes"] textarea').first(),
  costCenterField: (page) => page.locator('input[name*="cost" i], [label*="Cost Center"] input').first()
};

module.exports = locators;