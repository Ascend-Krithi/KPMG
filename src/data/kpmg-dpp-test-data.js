const testData = {
  // URLs
  baseUrl: 'https://kpmg-dpp-system.com',
  
  // User Credentials
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
  },
  
  // DPP Group Options (17 options)
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
  
  // Reason for DPP Need Options
  reasonForDppNeedOptions: {
    addition: 'Addition',
    replacement: 'Replacement',
    succession: 'Succession'
  },
  
  // General/Specialty Needed Options
  generalSpecialtyNeededOptions: {
    general: 'General',
    specialty: 'Specialty',
    leadershipPosition: 'Leadership position'
  },
  
  // Level Needed Options
  levelNeededOptions: {
    partner: 'Partner',
    principal: 'Principal',
    managingDirector: 'Managing Director',
    executiveDirector: 'Executive Director',
    director: 'Director'
  },
  
  // Role Posting Options
  rolePostingOptions: [
    'Internal (within KPMG)',
    'External (outside KPMG)',
    'Both (internal and external)',
    'N/A (determined to be only a transitional core role recruited through BU)'
  ],
  
  // Route To Options
  routeToOptions: {
    dppLeadership: ['DPP Ops'],
    dppOps: ['NBL', 'DPP Leadership - Audit', 'DPP Leadership - ASG', 'DPP Leadership - National Business']
  },
  
  // Test Data Values
  testFormData: {
    dppGroup: 'Audit - General',
    reasonForDppNeed: 'Addition',
    levelNeeded: 'Director',
    headcountAmount: '2',
    dppFteAmount: '2.0',
    projectStartDate: '01/15/2025',
    roleSummary: 'Test Summary',
    roleResponsibilities: 'Test Responsibilities',
    roleQualifications: 'Test Qualifications'
  },
  
  // Field Values
  naValue: 'N/A',
  outgoingResourceName: 'John Doe',
  retirementDate: '12/31/2024',
  specialtyDetails: 'Financial Services Audit Specialist',
  leadershipPositionDetails: 'Regional Audit Leader',
  
  // Validation Messages
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
  
  // Expected Counts
  expectedDppGroupCount: 17
};

module.exports = testData;