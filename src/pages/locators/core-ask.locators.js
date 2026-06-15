const locators = {
  // Header Navigation & Controls
  navHome: (page) => page.getByRole('button', { name: 'Home' }),
  navAsk: (page) => page.getByRole('button', { name: 'ASK' }),
  navResources: (page) => page.getByRole('button', { name: 'Resources' }),
  navReports: (page) => page.getByRole('button', { name: 'Reports' }),
  navAdmin: (page) => page.getByRole('button', { name: 'Admin' }),
  btnNotifications: (page) => page.getByLabel('Notifications'),
  btnAlerts: (page) => page.getByLabel('Alerts'),
  btnDashboard: (page) => page.getByRole('button', { name: 'Dashboard' }),
  btnActivity: (page) => page.getByRole('button', { name: 'Activity' }),
  btnViewDensity: (page) => page.getByRole('button', { name: 'Comfortable' }),

  // Form Inputs (Role Need Details)
  dropdownDppGroup: (page) => page.getByTestId('dppGroup'),
  dropdownReason: (page) => page.getByTestId('reason'),
  dropdownLevelNeeded: (page) => page.getByTestId('levelNeeded'),
  inputOutgoingResource: (page) => page.getByTestId('outgoingResource'),
  inputHeadcount: (page) => page.getByTestId('headcount'),
  inputDppFte: (page) => page.getByTestId('dppFte'),
  dropdownGeneralSpecialty: (page) => page.getByTestId('generalSpecialty'),
  inputRetirementDate: (page) => page.getByTestId('retirementDate'),
  inputProjectStartDate: (page) => page.getByTestId('projectStartDate'),
  inputPostingReqNo: (page) => page.getByTestId('postingReqNo'),

  // Textareas (Role Description)
  textareaRoleSummary: (page) => page.getByTestId('roleSummary'),
  textareaRoleResponsibilities: (page) => page.getByTestId('roleResponsibilities'),
  textareaRoleQualifications: (page) => page.getByTestId('roleQualifications'),
  textareaComments: (page) => page.getByTestId('comments'),

  // Rich Text Formatting Toolbar
  responsibilitiesBullets: (page) => page.locator('div').filter({ hasText: 'Role Responsibilities' }).getByRole('button', { name: 'Bullets' }),
  responsibilitiesNumbered: (page) => page.locator('div').filter({ hasText: 'Role Responsibilities' }).getByRole('button', { name: 'Numbered' }),
  qualificationsBullets: (page) => page.locator('div').filter({ hasText: 'Role Qualifications' }).getByRole('button', { name: 'Bullets' }),
  qualificationsNumbered: (page) => page.locator('div').filter({ hasText: 'Role Qualifications' }).getByRole('button', { name: 'Numbered' }),

  // Initiator & Assignment Fields
  dropdownInitiatorRole: (page) => page.getByTestId('initiatorRole'),
  dropdownRouteTo: (page) => page.getByTestId('routeTo'),

  // Action Buttons
  btnSubmitRequest: (page) => page.getByTestId('submitRequest'),
  btnCancelRequest: (page) => page.getByTestId('cancelRequest'),

  // Dropdown Options (dynamic)
  dropdownOption: (page, optionName) => page.getByRole('option', { name: optionName })
};

module.exports = locators;