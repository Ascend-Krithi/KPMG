const coreAskTestData = {
  urls: {
    base: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/',
    createCoreAsk: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create'
  },
  dppGroups: [
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
  reasonForDppNeed: [
    'Addition',
    'Replacement',
    'Succession'
  ],
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
  rolePosting: [
    'Internal (within KPMG)',
    'External (outside KPMG)',
    'Both (internal and external)',
    'N/A (determined to be only a transitional core role recruited through BU)'
  ],
  levelsWithRolePosting: ['Executive Director', 'Sr. Director', 'Director', 'Associate Director', 'Sr. Manager', 'Manager', 'Sr. Associate', 'Associate'],
  levelsWithoutRolePosting: ['Partner', 'Principal', 'Managing Director'],
  expectedCounts: {
    dppGroups: 17,
    reasonForDppNeed: 3,
    rolePosting: 4
  }
};

module.exports = coreAskTestData;