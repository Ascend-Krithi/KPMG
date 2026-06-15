const TD = {
  urls: {
    base: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/',
    createCoreAsk: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create'
  },

  credentials: {
    dppOps: {
      username: 'dpp_ops_user',
      password: 'Valid_Password123'
    },
    validUser: {
      username: 'valid_user',
      password: 'Valid_Pass123'
    },
    testUser: {
      username: 'test_user',
      password: 'Test@123'
    }
  },

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

  dppGroupCategories: {
    ASG: ['ASG - Communications/Content Management', 'ASG - TT member', 'ASG - Group support'],
    Audit: ['Audit - General', 'Audit - Banking', 'Audit - SAT', 'Audit - Public Sector', 'Audit - PSG', 'Audit - GAMG', 'Audit - Group support'],
    IIG: ['IIG - Inquiry focused', 'IIG - Group support'],
    NB: ['NB - RCCG - Root Cause Analysis', 'NB - RCCG - Other', 'NB - SOQC - US', 'NB - SOQM - Global', 'NB - National Business Other']
  },

  reasonOptions: ['Addition', 'Replacement', 'Succession'],

  levelNeededOptions: [
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

  rolePostingOptions: [
    'Internal (within KPMG)',
    'External (outside KPMG)',
    'Both (internal and external)',
    'N/A (determined to be only a transitional core role recruited through BU)'
  ],

  expectedCounts: {
    dppGroupOptions: 17,
    reasonOptions: 3,
    rolePostingOptions: 4
  },

  messages: {
    loginSuccess: 'User is successfully authenticated',
    pageLoadSuccess: 'DRT application login page loads successfully',
    createPageLoadSuccess: 'Create Core ASK page loads with all form fields visible'
  }
};

module.exports = TD;