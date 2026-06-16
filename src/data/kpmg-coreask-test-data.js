const TD = {
  urls: {
    baseUrl: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/',
    createCoreAsk: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create'
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

  reasonForDppNeed: {
    addition: 'Addition',
    replacement: 'Replacement',
    succession: 'Succession'
  },

  levelNeeded: [
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
    reasonForDppNeedOptions: 3,
    rolePostingOptions: 4
  },

  pageLoadMessages: {
    drtApplicationLoaded: 'DRT application page loads successfully',
    createCoreAskLoaded: 'Create Core ASK page loads successfully'
  }
};

module.exports = TD;