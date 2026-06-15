const TD = {
  urls: {
    login: 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/',
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

  dppGroupOptions: {
    asg: [
      'ASG – Communications/Content Management',
      'ASG – TT member',
      'ASG – Group support'
    ],
    audit: [
      'Audit – General',
      'Audit – Banking',
      'Audit – SAT',
      'Audit – Public Sector',
      'Audit – PSG',
      'Audit – GAMG',
      'Audit – Group support'
    ],
    iig: [
      'IIG – Inquiry focused',
      'IIG – Group support'
    ],
    nb: [
      'NB – RCCG – Root Cause Analysis',
      'NB – RCCG – Other',
      'NB – SOQC – US',
      'NB – SOQM – Global',
      'NB – National Business Other'
    ]
  },

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

  rolePosting: {
    internal: 'Internal (within KPMG)',
    external: 'External (outside KPMG)',
    both: 'Both (internal and external)',
    na: 'N/A (determined to be only a transitional core role recruited through BU)'
  },

  expectedCounts: {
    dppGroupTotal: 17,
    dppGroupASG: 3,
    dppGroupAudit: 6,
    dppGroupIIG: 2,
    dppGroupNB: 6,
    reasonForDppNeed: 3,
    rolePosting: 4
  },

  pageTitles: {
    createCoreAsk: /Create Core ASK/i,
    dashboard: /Dashboard/i
  },

  messages: {
    loginSuccess: 'User is successfully authenticated',
    pageLoadSuccess: 'DRT application login page loads successfully',
    createPageLoadSuccess: 'Create Core ASK page loads successfully'
  }
};

module.exports = TD;