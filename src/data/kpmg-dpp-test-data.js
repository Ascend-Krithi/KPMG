const testData = {
  urls: {
    baseUrl: 'https://kpmg-dpp-system.com',
    loginPage: 'https://kpmg-dpp-system.com',
    dashboard: 'https://kpmg-dpp-system.com/dashboard',
    coreAskCreate: 'https://kpmg-dpp-system.com/core-ask/create'
  },
  credentials: {
    dppOpsUser: {
      username: 'dpp_ops_user',
      password: 'SecurePass@123',
      role: 'DPP Ops'
    },
    dppLeadershipUser: {
      username: 'dpp_leadership_user',
      password: 'SecurePass@123',
      role: 'DPP Leadership'
    },
    userA: {
      username: 'user_a',
      password: 'SecurePass@123'
    }
  },
  coreAsk: {
    dppGroupOptions: [
      'ASG - Communications/Content Management',
      'ASG - TT member',
      'ASG - Group support',
      'Audit - General',
      'Audit - Banking',
      'Audit - SAT',
      'Audit - Public Sector',
      'Audit - PSG',
      'Audit - GAMG',
      'Audit - Group support',
      'IIG - Inquiry focused',
      'IIG - Group support',
      'NB - RCCG - Root Cause Analysis',
      'NB - RCCG - Other',
      'NB - SOQC - US',
      'NB - SOQM - Global',
      'NB - National Business Other'
    ],
    reasonForDppNeed: {
      addition: 'Addition',
      replacement: 'Replacement',
      succession: 'Succession'
    },
    levelNeeded: {
      partner: 'Partner',
      principal: 'Principal',
      managingDirector: 'Managing Director',
      executiveDirector: 'Executive Director',
      director: 'Director'
    },
    generalSpecialtyNeeded: {
      general: 'General',
      specialty: 'Specialty',
      leadershipPosition: 'Leadership position'
    },
    rolePosting: {
      internal: 'Internal (within KPMG)',
      external: 'External (outside KPMG)',
      both: 'Both (internal and external)',
      na: 'N/A (determined to be only a transitional core role recruited through BU)'
    },
    routeTo: {
      dppOps: 'DPP Ops',
      nbl: 'NBL',
      dppLeadershipAudit: 'DPP Leadership - Audit',
      dppLeadershipAsg: 'DPP Leadership - ASG',
      dppLeadershipNationalBusiness: 'DPP Leadership - National Business'
    },
    fieldValues: {
      naValue: 'N/A'
    }
  },
  validationMessages: {
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
  pageTitles: {
    loginPage: /login/i,
    dashboard: /dashboard/i,
    coreAskCreate: /create core ask/i
  },
  successMessages: {
    formSubmitted: 'Form is submitted successfully',
    confirmationDisplayed: 'confirmation message is displayed'
  }
};

module.exports = testData;