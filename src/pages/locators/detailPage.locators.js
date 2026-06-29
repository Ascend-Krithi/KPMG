const locators = {
  taskIdLabel: (page) => page.locator('[data-field="taskId"], .task-id, #taskId, text=/TSK-\d{5}/').first(),
  submitterLabel: (page) => page.locator('[data-field="submitter"], .submitter-name').first(),
  assigneeLabel: (page) => page.locator('[data-field="assignee"], .assignee-name').first(),
  auditTrail: (page) => page.locator('[data-section="audit"], .audit-trail, #auditTrail').first(),
  pageTitle: (page) => page.locator('h1, .page-title').first()
};

module.exports = locators;