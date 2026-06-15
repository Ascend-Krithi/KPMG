module.exports = {
  urls: {
    login: 'https://kpmg-dpp-system.com',
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
  coreAskForm: {
    dppGroup: 'Audit - General',
    reasonForNeed: 'Addition',
    levelNeeded: 'Director',
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
    dppLeadershipNationalBusiness: 'DPP Leadership - National Business',
    dppOpsUserB: 'DPP Ops User B'
  },
  validationMessages: {
    dppGroupRequired: 'DPP Group is required',
    reasonForNeedRequired: 'Reason for DPP Need is required',
    levelNeededRequired: 'Level Needed is required',
    headcountAmountRequired: 'Headcount Amount is required',
    dppFteAmountRequired: 'DPP FTE Amount is required',
    projectStartDateRequired: 'Project Start Date is required',
    roleSummaryRequired: 'Role Summary is required',
    roleResponsibilitiesRequired: 'Role Responsibilities is required',
    roleQualificationsRequired: 'Role Qualifications is required'
  },
  successMessages: {
    formSubmitted: 'Form is submitted successfully',
    confirmationDisplayed: 'confirmation message is displayed'
  },
  auditHistory: {
    submittedByLabel: 'Submitted By',
    assignedToLabel: 'Assigned To',
    submissionTimestampLabel: 'Submission Timestamp'
  },
  pageTitles: {
    login: /login/i,
    dashboard: /dashboard/i,
    createCoreAsk: /create core ask/i,
    auditHistory: /audit history/i
  }
};