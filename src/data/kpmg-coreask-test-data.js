const TD = {
  urls: {
    login: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/',
    createCoreAsk: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create',
    detailPage: 'Detail_Page.html'
  },

  urlPatterns: {
    login: /yellow-mushroom.*azurestaticapps\.net\/?$/,
    createCoreAsk: /experience-studio\/create/,
    detailPage: /Detail_Page\.html/
  },

  credentials: {
    dppOps: {
      username: 'dpp_ops_user',
      password: 'ValidPass@123'
    },
    dppLeadership: {
      username: 'dpp_leadership_user',
      password: 'ValidPass@123'
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
    srDirector: 'Sr. Director',
    director: 'Director',
    associateDirector: 'Associate Director',
    srManager: 'Sr. Manager',
    manager: 'Manager',
    srAssociate: 'Sr. Associate',
    associate: 'Associate'
  },

  levelsThatHideRolePosting: ['Partner', 'Principal', 'Managing Director'],

  rolePostingOptions: {
    internal: 'Internal (within KPMG)',
    external: 'External (outside KPMG)',
    both: 'Both (internal and external)',
    na: 'N/A (determined to be only a transitional core role recruited through BU)'
  },

  generalSpecialtyOptions: {
    general: 'General',
    specialty: 'Specialty',
    leadership: 'Leadership position'
  },

  routeToOptions: {
    nbl: 'NBL',
    dppLeadership: 'DPP Leadership',
    dppOps: 'DPP Ops'
  },

  fieldValues: {
    na: 'N/A'
  },

  taskIdPattern: /TSK-\d{5}/,

  pageTitles: {
    login: /login/i,
    createCoreAsk: /Create Core ASK/i,
    detailPage: /Detail.*Page/i
  },

  errors: {
    emptyRouteToGroup: 'The selected Route To group has no active users. Please select a different group.'
  }
};

module.exports = TD;