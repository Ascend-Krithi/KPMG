const testData = {
  urls: {
    login: 'https://kpmg-dpp-system.com',
    dashboard: 'https://kpmg-dpp-system.com/dashboard',
    coreAsk: 'https://kpmg-dpp-system.com/core-ask',
    createCoreAsk: 'https://kpmg-dpp-system.com/core-ask/create'
  },

  credentials: {
    dppOpsUser: {
      username: 'dpp_ops_user',
      password: 'SecurePass@123',
      role: 'DPP Ops'
    },
    userA: {
      username: 'user_a',
      password: 'SecurePass@123'
    }
  },

  coreAskForm: {
    dppGroup: {
      auditGeneral: 'Audit - General'
    },
    reasonForDppNeed: {
      addition: 'Addition'
    },
    levelNeeded: {
      director: 'Director'
    },
    headcountAmount: '2',
    dppFteAmount: '2.0',
    projectStartDate: '01/15/2025',
    roleSummary: 'Test Summary',
    roleResponsibilities: 'Test Responsibilities',
    roleQualifications: 'Test Qualifications'
  },

  routeToOptions: {
    nbl: 'NBL',
    dppLeadershipAudit: 'DPP Leadership - Audit',
    dppLeadershipAsg: 'DPP Leadership - ASG',
    dppLeadershipNationalBusiness: 'DPP Leadership - National Business'
  },

  assignees: {
    dppOpsUserB: 'DPP Ops User B'
  },

  validationErrors: {
    dppGroupRequired: 'DPP Group is required',
    reasonForDppNeedRequired: 'Reason for DPP Need is required',
    levelNeededRequired: 'Level Needed is required',
    headcountAmountRequired: 'Headcount Amount is required',
    dppFteAmountRequired: 'DPP FTE Amount is required',
    projectStartDateRequired: 'Project Start Date is required',
    roleSummaryRequired: 'Role Summary is required',
    roleResponsibilitiesRequired: 'Role Responsibilities is required',
    roleQualificationsRequired: 'Role Qualifications is required'
  },

  messages: {
    loginSuccess: 'User is logged in successfully',
    dashboardDisplayed: 'dashboard is displayed',
    formDisplayed: 'Create Core ASK form is displayed',
    formSubmitted: 'Form is submitted successfully',
    confirmationDisplayed: 'confirmation message is displayed'
  },

  auditHistory: {
    submittedByLabel: 'Submitted By',
    submissionTimestampLabel: 'Submission Timestamp',
    assignedToLabel: 'Assigned To'
  }
};

module.exports = testData;