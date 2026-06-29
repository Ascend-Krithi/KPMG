const loc = require('./locators/login.locators');
const TD = require('../data/kpmg-coreask-test-data');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.login, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameInput(this.page).fill(username);
    await loc.passwordInput(this.page).fill(password);
    await loc.loginButton(this.page).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async loginAsDppOps() {
    await this.login(TD.credentials.dppOps.username, TD.credentials.dppOps.password);
  }

  async loginAsDppLeadership() {
    await this.login(TD.credentials.dppLeadership.username, TD.credentials.dppLeadership.password);
  }

  async isLoginPageLoaded() {
    return await loc.loginPage(this.page).isVisible();
  }
}

module.exports = LoginPage;