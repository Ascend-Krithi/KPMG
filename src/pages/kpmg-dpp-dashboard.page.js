const loc = require('./locators/kpmg-dpp-dashboard.locators');

class KpmgDppDashboardPage {
  constructor(page) {
    this.page = page;
  }

  async isDashboardDisplayed() {
    await loc.dashboardContainer(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.dashboardContainer(this.page).isVisible();
  }

  async navigateToCoreAsk() {
    await loc.coreAskMenu(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.coreAskMenu(this.page).click();
  }
}

module.exports = KpmgDppDashboardPage;