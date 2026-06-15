const TD = {
  urls: {
    login: 'https://app.example.com',
    dashboard: 'https://app.example.com/dashboard',
    coreAsk: 'https://app.example.com/core-ask',
    createCoreAsk: 'https://app.example.com/core-ask/create'
  },
  credentials: {
    dppOps: {
      username: 'dpp_ops_user',
      password: 'SecurePass@123'
    },
    dppLeadership: {
      username: 'dpp_leadership_user',
      password: 'SecurePass@123'
    }
  },
  dppGroups: {
    all: [
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
    asg: [
      'ASG - Communications/Content Management',
      'ASG - TT member',
      'ASG - Group support'
    ],
    audit: [
      'Audit - General',
      'Audit - Banking',
      'Audit - SAT',
      'Audit - Public Sector',
      'Audit - PSG',
      'Audit - GAMG',
      'Audit - Group support'
    ],
    iigAndNb: [
      'IIG - Inquiry focused',
      'IIG - Group support',
      'NB - RCCG - Root Cause Analysis',
      'NB - RCCG - Other',
      'NB - SOQC - US',
      'NB - SOQM - Global',
      'NB - National Business Other'
    ]
  },
  reasonForDppNeed: {
    all: ['Addition', 'Replacement', 'Succession'],
    addition: 'Addition',
    replacement: 'Replacement',
    succession: 'Succession'
  },
  levelNeeded: {
    all: [
      'Partner',
      'Principal',
      'Managing Director',
      'Executive Director',
      'Sr. Director',
      'Director',
      'Associate Director',
      'Sr. Manager',
      'Manager',
      'Sr. Associate',
      'Associate'
    ],
    partner: 'Partner',
    principal: 'Principal',
    managingDirector: 'Managing Director',
    executiveDirector: 'Executive Director',
    srDirector: 'Sr. Director',
    director: 'Director',
    associateDirector: 'Associate Director',
    srManager: 'Sr. Manager',
    manager: 'Manager',
    srAssociate: 'Sr. Associate',
    associate: 'Associate'
  },
  generalSpecialtyNeeded: {
    all: ['General', 'Specialty', 'Leadership position'],
    general: 'General',
    specialty: 'Specialty',
    leadership: 'Leadership position'
  },
  rolePosting: {
    all: [
      'Internal (within KPMG)',
      'External (outside KPMG)',
      'Both (internal and external)',
      'N/A (determined to be only a transitional core role recruited through BU)'
    ],
    internal: 'Internal (within KPMG)',
    external: 'External (outside KPMG)',
    both: 'Both (internal and external)',
    na: 'N/A (determined to be only a transitional core role recruited through BU)'
  },
  fieldValues: {
    notApplicable: 'N/A'
  },
  routingOptions: {
    dppOps: 'DPP Ops',
    nbl: 'NBL',
    auditLeadership: 'Audit',
    asgLeadership: 'ASG',
    nationalBusinessLeadership: 'National Business'
  },
  testData: {
    outgoingResource: 'John Doe',
    outgoingResourceSuccession: 'Jane Smith',
    retirementDate: '12/31/2025',
    retirementDateSuccession: '06/30/2026',
    specialtyDetails: 'Financial Services Audit',
    leadershipDetails: 'Practice Leader',
    headcountAmount: '2',
    dppFteAmount: '2.0',
    projectStartDate: '01/15/2025',
    roleSummary: 'Test Role',
    roleResponsibilities: 'Test Responsibilities',
    roleQualifications: 'Test Qualifications'
  },
  pageTitles: {
    login: /login/i,
    dashboard: /dashboard/i,
    coreAsk: /core ask/i,
    createCoreAsk: /create core ask/i
  },
  messages: {
    loginSuccess: 'successfully logged in',
    formSubmitted: 'successfully submitted',
    routedToDppOps: 'routed to DPP Ops',
    routedToNbl: 'routed to NBL'
  }
};

module.exports = TD;