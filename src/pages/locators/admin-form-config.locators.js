const locators = {
  administrationMenu: (page) => page.locator('a:has-text("Administration"), button:has-text("Administration"), [href*="admin"]').first(),
  formConfigurationOption: (page) => page.locator('a:has-text("Form Configuration"), a:has-text("Request Form Settings"), [href*="form-configuration"]').first(),
  
  // Form configuration interface
  formConfigPage: (page) => page.locator('[class*="form-config"], [id*="form-config"]').first(),
  addFieldButton: (page) => page.locator('button:has-text("Add New Field"), button:has-text("Add Field"), button:has-text("+")').first(),
  
  // Field creation dialog
  fieldCreationDialog: (page) => page.locator('[role="dialog"], [class*="modal"], [class*="dialog"]').first(),
  fieldNameInput: (page) => page.locator('input[name="fieldName"], input[placeholder*="Field Name"], input[label*="Field Name"]').first(),
  fieldTypeDropdown: (page) => page.locator('select[name="fieldType"], select[label*="Field Type"]').first(),
  fieldRequiredCheckbox: (page) => page.locator('input[type="checkbox"][name*="required"], input[type="checkbox"][label*="Required"], input[type="checkbox"][label*="Mandatory"]').first(),
  fieldHelpTextInput: (page) => page.locator('input[name="helpText"], textarea[name="helpText"], input[placeholder*="Help Text"]').first(),
  saveFieldButton: (page) => page.locator('button:has-text("Save"), button:has-text("Add Field")').first(),
  
  // Field list management
  fieldListItem: (page, fieldName) => page.locator(`[data-field="${fieldName}"], tr:has-text("${fieldName}"), li:has-text("${fieldName}")`).first(),
  editFieldButton: (page, fieldName) => page.locator(`[data-field="${fieldName}"] button:has-text("Edit"), [data-field="${fieldName}"] [class*="edit-icon"]`).first(),
  deleteFieldButton: (page, fieldName) => page.locator(`[data-field="${fieldName}"] button:has-text("Delete"), [data-field="${fieldName}"] [class*="delete-icon"], [data-field="${fieldName}"] [class*="trash-icon"]`).first(),
  
  // Confirmation dialogs
  confirmationDialog: (page) => page.locator('[role="alertdialog"], [class*="confirm-dialog"]').first(),
  confirmButton: (page) => page.locator('button:has-text("Confirm"), button:has-text("Yes")').first(),
  cancelButton: (page) => page.locator('button:has-text("Cancel"), button:has-text("No")').first(),
  
  // Success messages
  successMessage: (page) => page.locator('[class*="success"], [class*="alert-success"], [role="alert"]:has-text("success")').first(),
  
  // Save configuration
  saveConfigButton: (page) => page.locator('button:has-text("Save Changes"), button:has-text("Save Configuration")').first(),
  
  // Access denied
  accessDeniedMessage: (page) => page.locator('text=/access denied|unauthorized|permission/i, [class*="error"], [class*="unauthorized"]').first()
};

module.exports = locators;