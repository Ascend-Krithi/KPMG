const loc = require('./locators/login.locators');
const TD = require('../data/request-form-test-data');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(TD.urls.login, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async enterUsername(username) {
    await loc.usernameField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.usernameField(this.page).fill(username);
  }

  async enterPassword(password) {
    await loc.passwordField(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.passwordField(this.page).fill(password);
  }

  async clickLoginButton() {
    await loc.loginButton(this.page).waitFor({ state: 'visible', timeout: 30000 });
    await loc.loginButton(this.page).click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async isDashboardVisible() {
    try {
      await loc.dashboardIndicator(this.page).waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  async logout() {
    const logoutButton = this.page.locator('button:has-text("Logout"), a:has-text("Logout"), button:has-text("Sign Out")').first();
    if (await logoutButton.isVisible({ timeout: 5000 }).catch(() => false)) {
      await logoutButton.click();
      await this.page.waitForLoadState('domcontentloaded');
    }
  }
}

module.exports = LoginPage;