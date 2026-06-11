const testData = {
  // Application URLs
  urls: {
    loginPage: 'https://application-url/login',
    dashboard: 'https://application-url/dashboard',
    tasks: 'https://application-url/tasks',
    coreAskReview: 'https://application-url/core-ask-review',
    askRecordDetails: 'https://application-url/ask-record-details',
    opsTeamTasks: 'https://application-url/ops-team-tasks'
  },

  // User credentials
  users: {
    nblUser: {
      username: 'NBL_User',
      password: 'Valid_Password',
      role: 'NBL'
    },
    nblApprover: {
      username: 'NBL_Approver',
      password: 'Valid_Password',
      role: 'NBL Approver'
    },
    dppLeadershipUser: {
      username: 'DPP_Leadership_User',
      password: 'Valid_Password',
      role: 'DPP Leadership'
    }
  },

  // Core ASK data
  coreAsk: {
    validSubmittedAsk: 'Valid submitted ASK',
    validSubmittedAskInReview: 'Valid submitted ASK in review status',
    taskName: 'Core ASK Review Task'
  },

  // Comments
  comments: {
    revisionRequest: 'Please revise the BU planning grid details',
    additionalInfo: 'Requires additional information',
    fiscalYearUpdate: 'Please update fiscal year details',
    approvalRecommendation: 'Approved with recommendations for next cycle',
    empty: '',
    null: null
  },

  // Status values
  statuses: {
    approved: 'Approved',
    returned: 'Returned',
    review: 'Review',
    draft: 'Draft'
  },

  // Actions
  actions: {
    approve: 'Approved',
    return: 'Returned',
    cancel: 'Cancel'
  },

  // Validation messages
  validationMessages: {
    commentRequired: 'Comment is required when returning the ASK',
    commentMandatory: 'Comment is mandatory when returning the ASK'
  },

  // Expected messages
  messages: {
    approvalConfirmation: 'Approve action is triggered and confirmation message is displayed',
    returnConfirmation: 'Return action is triggered and confirmation message is displayed',
    cancelConfirmation: 'Cancel action is triggered'
  },

  // Acceptance criteria
  acceptanceCriteria: {
    ac001: 'AC-001',
    ac002: 'AC-002',
    ac003: 'AC-003',
    ac004: 'AC-004',
    ac005: 'AC-005'
  },

  // Task assignments
  taskAssignments: {
    dppOpsTeam: 'DPP Ops team',
    opsTeam: 'Ops team'
  },

  // Page titles
  pageTitles: {
    tasks: 'Tasks',
    dashboard: 'Dashboard',
    coreAskReview: 'Core ASK Review'
  },

  // Form fields
  formFields: {
    askId: 'ASK ID',
    submitterDetails: 'Submitter Details',
    buPlanningGrid: 'BU Planning Grid',
    fiscalYear: 'Fiscal Year'
  },

  // Test case IDs
  testCaseIds: {
    ts001tc001: 'QE-911 TS-001 TC-001',
    ts001tc002: 'QE-911 TS-001 TC-002',
    ts002tc001: 'QE-911 TS-002 TC-001',
    ts003tc001: 'QE-911 TS-003 TC-001',
    ts004tc001: 'QE-911 TS-004 TC-001',
    ts005tc001: 'QE-911 TS-005 TC-001',
    ts006tc001: 'QE-911 TS-006 TC-001',
    ts007tc001: 'QE-911 TS-007 TC-001',
    ts008tc001: 'QE-911 TS-008 TC-001',
    ts009tc001: 'QE-911 TS-009 TC-001',
    ts010tc001: 'QE-911 TS-010 TC-001',
    ts010tc002: 'QE-911 TS-010 TC-002'
  }
};

module.exports = testData;