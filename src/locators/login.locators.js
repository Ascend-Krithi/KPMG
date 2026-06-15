const locators = {
  usernameField: (page) => page.locator('input[name="username"], input[id="username"], input[type="text"]').first(),
  passwordField: (page) => page.locator('input[name="password"], input[id="password"], input[type="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), input[type="submit"]').first(),
  dashboardContainer: (page) => page.locator('[class*="dashboard"], [id*="dashboard"], main').first()
};

module.exports = locators;