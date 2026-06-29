/**
 * KPMG Core ASK Test Data Module
 * Application: Experience Studio - DPP Talent Demand Management
 * All assertion values, URLs, dropdown options, and error messages
 */

const TD = {
  // URLs
  urls: {
    createCoreAsk: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create',
    coreAskDetail: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/Detail_Page.html'
  },

  // URL Patterns
  urlPatterns: {
    createCoreAsk: /\/experience-studio\/create$/,
    coreAskDetail: /\/experience-studio\/Detail_Page\.html/
  },

  // Page Titles
  pageTitles: {
    createCoreAsk: /Create Core ASK/i,
    coreAskDetail: /Core ASK Detail/i
  },

  // DPP Group Values (17 options)
  dppGroups: {
    asgComms: 'ASG - Communications/Content Management',
    asgTT: 'ASG - TT member',
    asgSupport: 'ASG - Group support',
    auditGeneral: 'Audit - General',
    auditBanking: 'Audit - Banking',
    auditSAT: 'Audit - SAT',
    auditPublicSector: 'Audit - Public Sector',
    auditPSG: 'Audit - PSG',
    auditGAMG: 'Audit - GAMG',
    auditSupport: 'Audit - Group support',
    iigInquiry: 'IIG - Inquiry focused',
    iigSupport: 'IIG - Group support',
    nbRCCGRoot: 'NB - RCCG - Root Cause Analysis',
    nbRCCGOther: 'NB - RCCG - Other',
    nbSOQCUS: 'NB - SOQC - US',
    nbSOQMGlobal: 'NB - SOQM - Global',
    nbOther: 'NB - National Business Other'
  },

  // All 17 DPP Group values as array
  allDppGroups: [
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

  // Reason for DPP Need
  reasonForNeed: {
    addition: 'Addition',
    replacement: 'Replacement',
    succession: 'Succession'
  },

  // Level Needed Values
  levelNeeded: {
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

  // Levels where Role Posting is hidden
  levelsSuppressingRolePosting: ['Partner', 'Principal', 'Managing Director'],

  // Levels where Role Posting is visible
  levelsRequiringRolePosting: [
    'Executive Director',
    'Sr. Director',
    'Director',
    'Associate Director',
    'Sr. Manager',
    'Manager',
    'Sr. Associate',
    'Associate'
  ],

  // Role Posting Options
  rolePosting: {
    internal: 'Internal (within KPMG)',
    external: 'External (outside KPMG)',
    both: 'Both (internal and external)',
    na: 'N/A (determined to be only a transitional core role recruited through BU)'
  },

  // General/Specialty Needed
  generalSpecialty: {
    general: 'General',
    specialty: 'Specialty',
    leadership: 'Leadership position'
  },

  // Route To Options
  routeTo: {
    nbl: 'NBL',
    dppLeadership: 'DPP Leadership',
    dppOps: 'DPP Ops'
  },

  // Outgoing Resource
  outgoingResource: {
    na: 'N/A',
    sampleReplacement: 'John Doe, Senior Manager',
    sampleSuccession: 'Jane Smith, Director'
  },

  // Test Data Values
  testData: {
    headcount: '2',
    fte: '2.0',
    startDate: '01/15/2025',
    retirementDate: '03/31/2025',
    roleSummary: 'Test Summary',
    roleResponsibilities: 'Test Responsibilities',
    roleQualifications: 'Test Qualifications',
    specialtyDetails: 'Banking Audit Specialist',
    leadershipDetails: 'Regional Audit Lead - Northeast'
  },

  // Credentials
  credentials: {
    dppOps: 'Valid DPP Ops/Leadership credentials',
    dppLeadership: 'DPP Leadership user credentials',
    valid: 'Valid credentials'
  },

  // Expected Messages
  messages: {
    loadSuccess: 'Application loads successfully',
    loginSuccess: 'User is successfully logged in',
    pageDisplayed: 'Create Core ASK page is displayed with all form fields',
    submitSuccess: 'Form is successfully submitted',
    emptyGroupError: 'The selected Route To group has no active users. Please select a different group.'
  },

  // Statuses
  statuses: {
    draft: 'Draft',
    submitted: 'Submitted'
  }
};

module.exports = TD;