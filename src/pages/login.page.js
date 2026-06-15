const loc = require('../locators/login.locators');
const TD = require('../data/drt-test-data');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.login, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.usernameField(this.page).fill(username);
    await loc.passwordField(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await loc.dashboardContainer(this.page).waitFor({ state: 'visible', timeout: 30000 });
  }

  async loginAsDppOps() {
    await this.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
  }

  async loginAsDppLeadership() {
    await this.login(TD.credentials.dppLeadership.username, TD.credentials.dppLeadership.password);
  }

  async isLoginPageVisible() {
    return await loc.usernameField(this.page).isVisible();
  }

  async isDashboardVisible() {
    return await loc.dashboardContainer(this.page).isVisible();
  }
}

module.exports = LoginPage;