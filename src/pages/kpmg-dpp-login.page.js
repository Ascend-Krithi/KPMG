const loc = require('./locators/kpmg-dpp-login.locators');
const TD = require('../data/kpmg-dpp-test-data');

class KpmgDppLoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.loginPage, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async isLoginPageLoaded() {
    return await loc.loginPageContainer(this.page).isVisible();
  }

  async enterUsername(username) {
    await loc.usernameInput(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.usernameInput(this.page).fill(username);
  }

  async enterPassword(password) {
    await loc.passwordInput(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.passwordInput(this.page).fill(password);
  }

  async clickLoginButton() {
    await loc.loginButton(this.page).waitFor({ state: 'visible', timeout: 10000 });
    await loc.loginButton(this.page).click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = KpmgDppLoginPage;