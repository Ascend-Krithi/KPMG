const loc = require('./locators/kpmg-dpp-login.locators');

class KPMGDPPLoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(username, password) {
    await loc.usernameInput(this.page).waitFor({ state: 'visible' });
    await loc.usernameInput(this.page).fill(username);
    await loc.passwordInput(this.page).fill(password);
    await loc.loginButton(this.page).click();
  }

  async isDashboardVisible() {
    await loc.dashboard(this.page).waitFor({ state: 'visible', timeout: 30000 });
    return await loc.dashboard(this.page).isVisible();
  }
}

module.exports = KPMGDPPLoginPage;