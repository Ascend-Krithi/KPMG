const testData = {
  urls: {
    appUrl: 'https://app.example.com',
    adminFormConfigUrl: 'https://app.example.com/admin/form-configuration'
  },
  credentials: {
    regularUser: {
      username: 'testuser@example.com',
      password: 'Test@123'
    },
    adminUser: {
      username: 'admin@example.com',
      password: 'Admin@123'
    },
    user1: {
      username: 'user1@example.com',
      password: 'User@123'
    },
    user2: {
      username: 'user2@example.com',
      password: 'User@123'
    },
    regularNonAdminUser: {
      username: 'regularuser@example.com',
      password: 'User@123'
    },
    leadershipUser: {
      username: 'leader@example.com',
      password: 'Leader@123',
      role: 'Leadership'
    },
    dppOpsUser: {
      username: 'dppops@example.com',
      password: 'Ops@123',
      role: 'DPP Ops'
    }
  },
  customFields: {
    expectedFields: ['Request Type', 'Priority', 'Department', 'Description', 'Attachments'],
    requestTitle: 'Request Title',
    priority: 'Priority',
    priorityOptions: ['High', 'Medium', 'Low'],
    urgentRequest: 'Urgent Request',
    requiredByDate: 'Required By Date',
    mandatoryFields: ['Request Title*', 'Priority*', 'Department*'],
    optionalFields: ['Additional Notes', 'Attachments'],
    budgetCode: 'Budget Code',
    costCenter: 'Cost Center',
    budgetApproval: 'Budget Approval',
    additionalNotes: 'Additional Notes'
  },
  fieldLabels: {
    requestTitle: 'Request Title',
    priorityLevel: 'Priority Level',
    department: 'Department',
    description: 'Description'
  },
  helpText: {
    priorityHelp: 'Select the urgency level for your request',
    budgetCodeHelp: 'Enter the budget code for this request'
  },
  fieldTypes: {
    textInput: 'Text Input',
    dropdown: 'Dropdown',
    checkbox: 'Checkbox',
    datePicker: 'Date Picker'
  },
  defaultFields: ['Request Title', 'Description'],
  newFields: {
    budgetCode: {
      name: 'Budget Code',
      type: 'Text Input',
      mandatory: true,
      helpText: 'Enter the budget code for this request'
    },
    costCenter: {
      name: 'Cost Center',
      type: 'Text Input',
      mandatory: true
    }
  },
  messages: {
    successFieldAdded: 'Field added successfully',
    successFieldUpdated: 'Changes saved successfully',
    successFieldDeleted: 'Field deleted successfully',
    unauthorizedAccess: 'You do not have permission to access this page'
  }
};

module.exports = testData;