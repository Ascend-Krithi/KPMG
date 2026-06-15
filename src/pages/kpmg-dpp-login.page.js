const loc = require('./locators/kpmg-dpp-login.locators');
const TD = require('../data/kpmg-dpp-test-data');

class KpmgDppLoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.login, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameInput(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.usernameInput(this.page).fill(username);
    await loc.passwordInput(this.page).fill(password);
    await loc.loginButton(this.page).click();
  }

  async loginWithDppOps() {
    await this.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
  }

  async loginWithUserA() {
    await this.login(TD.credentials.userA.username, TD.credentials.userA.password);
  }

  async isDashboardVisible() {
    await loc.dashboardContainer(this.page).waitFor({ state: 'visible', timeout: 15000 });
    return await loc.dashboardContainer(this.page).isVisible();
  }

  async isLoginPageLoaded() {
    await loc.usernameInput(this.page).waitFor({ state: 'visible', timeout: 10000 });
    return await loc.usernameInput(this.page).isVisible();
  }
}

module.exports = KpmgDppLoginPage;