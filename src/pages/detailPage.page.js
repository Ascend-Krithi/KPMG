const loc = require('./locators/detailPage.locators');
const TD = require('../data/kpmg-coreask-test-data');

class DetailPage {
  constructor(page) {
    this.page = page;
  }

  async getTaskId() {
    return await loc.taskIdLabel(this.page).textContent();
  }

  async getSubmitter() {
    return await loc.submitterLabel(this.page).textContent();
  }

  async getAssignee() {
    return await loc.assigneeLabel(this.page).textContent();
  }

  async isAuditTrailVisible() {
    return await loc.auditTrail(this.page).isVisible();
  }

  async getPageTitle() {
    return await loc.pageTitle(this.page).textContent();
  }
}

module.exports = DetailPage;