const locators = {
  adminUsernameField: (page) => page.locator('input[name="username"], input[type="email"]').first(),
  adminPasswordField: (page) => page.locator('input[name="password"], input[type="password"]').first(),
  adminLoginButton: (page) => page.locator('button[type="submit"], button:has-text("Login")').first(),
  adminDashboard: (page) => page.locator('[class*="admin-dashboard"], [id*="admin"], main').first(),
  administrationMenu: (page) => page.locator('a:has-text("Administration"), nav a:has-text("Admin")').first(),
  formConfigurationOption: (page) => page.locator('a:has-text("Form Configuration"), a:has-text("Request Form Settings")').first(),
  formConfigurationPage: (page) => page.locator('[class*="form-config"], [id*="form-config"]').first(),
  addFieldButton: (page) => page.locator('button:has-text("Add New Field"), button:has-text("Add Field"), button:has-text("+")').first(),
  fieldCreationDialog: (page) => page.locator('[role="dialog"], [class*="modal"], [class*="dialog"]').first(),
  fieldNameInput: (page) => page.locator('input[name*="field-name" i], input[name*="name" i], [label*="Field Name"] input').first(),
  fieldTypeDropdown: (page) => page.locator('select[name*="field-type" i], select[name*="type" i], [label*="Field Type"] select').first(),
  mandatoryToggle: (page) => page.locator('input[type="checkbox"][name*="required" i], input[type="checkbox"][name*="mandatory" i], [label*="Required"] input[type="checkbox"]').first(),
  helpTextInput: (page) => page.locator('textarea[name*="help" i], input[name*="help" i], [label*="Help Text"] textarea, [label*="Help Text"] input').first(),
  saveFieldButton: (page) => page.locator('button:has-text("Save"), button:has-text("Add Field")').first(),
  fieldListContainer: (page) => page.locator('[class*="field-list"], table, [role="grid"]').first(),
  fieldListItem: (page, fieldName) => page.locator(`tr:has-text("${fieldName}"), [class*="field-item"]:has-text("${fieldName}")`).first(),
  editFieldButton: (page) => page.locator('button:has-text("Edit"), [title="Edit"], [class*="edit-icon"]').first(),
  deleteFieldButton: (page) => page.locator('button:has-text("Delete"), [title="Delete"], [class*="delete-icon"], [class*="trash-icon"]').first(),
  confirmationDialog: (page) => page.locator('[role="alertdialog"], [class*="confirm"]').first(),
  confirmButton: (page) => page.locator('button:has-text("Confirm"), button:has-text("Yes")').first(),
  successMessage: (page) => page.locator('[class*="success"], [role="alert"][class*="success"], .toast-success').first(),
  logoutButton: (page) => page.locator('button:has-text("Logout"), a:has-text("Logout"), [class*="logout"]').first(),
  unauthorizedMessage: (page) => page.locator('[class*="unauthorized"], [class*="error"]:has-text("permission")').first(),
  roleSpecificFieldConfig: (page) => page.locator('[class*="role-config"], [label*="Role"] select').first()
};

module.exports = locators;