module.exports = {
  urls: {
    loginPage: 'https://kpmg-dpp-system.com',
    dashboard: 'https://kpmg-dpp-system.com/dashboard',
    coreAsk: 'https://kpmg-dpp-system.com/core-ask',
    createCoreAsk: 'https://kpmg-dpp-system.com/core-ask/create'
  },
  credentials: {
    dppOps: {
      username: 'dpp_ops_user',
      password: 'SecurePass@123',
      role: 'DPP Ops'
    },
    userA: {
      username: 'user_a',
      password: 'SecurePass@123'
    }
  },
  coreAsk: {
    dppGroup: 'Audit - General',
    reasonForNeed: 'Addition',
    levelNeeded: 'Director',
    headcountAmount: '2',
    dppFteAmount: '2.0',
    projectStartDate: '01/15/2025',
    roleSummary: 'Test Summary',
    roleResponsibilities: 'Test Responsibilities',
    roleQualifications: 'Test Qualifications',
    routeToNBL: 'NBL',
    routeToOptions: {
      nbl: 'NBL',
      dppLeadershipAudit: 'DPP Leadership - Audit',
      dppLeadershipASG: 'DPP Leadership - ASG',
      dppLeadershipNationalBusiness: 'DPP Leadership - National Business'
    },
    assignedTo: 'DPP Ops User B'
  },
  messages: {
    loginSuccess: 'User is logged in successfully',
    formSubmitSuccess: 'Form is submitted successfully',
    confirmationMessage: 'confirmation message is displayed'
  },
  validationErrors: {
    dppGroupRequired: 'DPP Group is required',
    reasonForNeedRequired: 'Reason for DPP Need is required',
    levelNeededRequired: 'Level Needed is required',
    headcountRequired: 'Headcount Amount is required',
    dppFteRequired: 'DPP FTE Amount is required',
    projectStartDateRequired: 'Project Start Date is required',
    roleSummaryRequired: 'Role Summary is required',
    roleResponsibilitiesRequired: 'Role Responsibilities is required',
    roleQualificationsRequired: 'Role Qualifications is required'
  },
  auditHistory: {
    submittedByUserA: 'User A',
    assignedToUserB: 'DPP Ops User B'
  }
};