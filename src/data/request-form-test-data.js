module.exports = {
  urls: {
    login: 'https://app.example.com',
    requestCreation: 'https://app.example.com/request-creation',
    adminFormConfig: 'https://app.example.com/admin/form-configuration'
  },
  credentials: {
    testUser: {
      username: 'testuser@example.com',
      password: 'Test@123'
    },
    admin: {
      username: 'admin@example.com',
      password: 'Admin@123'
    },
    regularUser: {
      username: 'regularuser@example.com',
      password: 'User@123'
    },
    user1: {
      username: 'user1@example.com',
      password: 'User@123'
    },
    user2: {
      username: 'user2@example.com',
      password: 'User@123'
    },
    leader: {
      username: 'leader@example.com',
      password: 'Leader@123',
      role: 'Leadership'
    },
    dppOps: {
      username: 'dppops@example.com',
      password: 'Ops@123',
      role: 'DPP Ops'
    }
  },
  customFields: {
    requestType: 'Request Type',
    priority: 'Priority',
    department: 'Department',
    description: 'Description',
    attachments: 'Attachments',
    requestTitle: 'Request Title',
    urgentRequest: 'Urgent Request',
    requiredByDate: 'Required By Date',
    additionalNotes: 'Additional Notes',
    budgetCode: 'Budget Code',
    costCenter: 'Cost Center',
    budgetApproval: 'Budget Approval'
  },
  fieldTypes: {
    textInput: 'text',
    dropdown: 'dropdown',
    checkbox: 'checkbox',
    datePicker: 'date'
  },
  dropdownOptions: {
    priority: ['High', 'Medium', 'Low']
  },
  helpText: {
    priority: 'Select the urgency level for your request',
    budgetCode: 'Enter the budget code for this request'
  },
  fieldLabels: {
    requestTitle: 'Request Title',
    priorityLevel: 'Priority Level',
    department: 'Department',
    description: 'Description'
  },
  defaultFields: {
    title: 'Request Title',
    description: 'Description'
  },
  messages: {
    loginSuccess: 'dashboard',
    formLoadSuccess: 'Request Creation',
    fieldAddedSuccess: 'Field added successfully',
    configSavedSuccess: 'Configuration saved successfully',
    fieldDeletedSuccess: 'Field deleted successfully',
    changesSavedSuccess: 'Changes saved successfully',
    accessDenied: 'You do not have permission to access this page',
    unauthorized: 'Unauthorized'
  }
};