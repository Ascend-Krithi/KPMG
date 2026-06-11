const testData = {
  // URLs
  APP_URL: process.env.APP_URL || 'https://application-url.com',
  
  // User Credentials
  NBL_USER: {
    username: 'NBL_User',
    password: 'Valid_Password',
    role: 'NBL'
  },
  NBL_APPROVER: {
    username: 'NBL_Approver',
    password: 'Valid_Password',
    role: 'NBL Approver'
  },
  DPP_LEADERSHIP_USER: {
    username: 'DPP_Leadership_User',
    password: 'Valid_Password',
    role: 'DPP Leadership'
  },
  
  // Task Names
  CORE_ASK_REVIEW_TASK: 'Core ASK Review Task',
  
  // Core ASK Data
  VALID_SUBMITTED_ASK: 'Valid submitted ASK',
  VALID_ASK_IN_REVIEW: 'Valid submitted ASK in review status',
  
  // Status Values
  STATUS_APPROVED: 'Approved',
  STATUS_RETURNED: 'Returned',
  STATUS_REVIEW: 'Review',
  
  // Comments
  COMMENT_REVISE_BU_GRID: 'Please revise the BU planning grid details',
  COMMENT_ADDITIONAL_INFO: 'Requires additional information',
  COMMENT_APPROVED_WITH_RECOMMENDATIONS: 'Approved with recommendations for next cycle',
  COMMENT_UPDATE_FISCAL_YEAR: 'Please update fiscal year details',
  COMMENT_EMPTY: '',
  
  // Validation Messages
  VALIDATION_COMMENT_REQUIRED: 'Comment is required when returning the ASK',
  
  // Confirmation Messages
  CONFIRMATION_APPROVE: 'Approve action is triggered and confirmation message is displayed',
  CONFIRMATION_RETURN: 'Return action is triggered and confirmation message is displayed',
  
  // Audit Actions
  AUDIT_ACTION_APPROVED: 'Approved',
  AUDIT_ACTION_RETURNED: 'Returned',
  
  // Expected Task Assignment
  EXPECTED_TASK_ASSIGNMENT: 'DPP Ops team',
  
  // Form Components
  FORM_CAW_FRM_CORE_ASK_REVIEW: 'CAW_FRM_CoreAskReview',
  COMPONENT_DECISION_BUTTONS: 'CAW_FRM_CoreAskDecisionButtons',
  CDT_COMMENT: 'CAW_Comment',
  CDT_AUDIT: 'CAW_Audit',
  
  // Expression Rules
  EXPRESSION_RULE_START_PROCESS: 'CAW_returnStartProcessLinkForTasks',
  EXPRESSION_RULE_CONSTRUCT_AUDIT: 'CAW_constructAudit',
  
  // Data Store
  DATA_STORE_CAW: 'CAW Data Store',
  
  // View
  VIEW_CAW_TASK: 'CAW_V_Task',
  
  // Acceptance Criteria
  AC_001: 'AC-001',
  AC_002: 'AC-002',
  AC_003: 'AC-003',
  AC_004: 'AC-004',
  AC_005: 'AC-005'
};

module.exports = testData;