const locators = {
  usernameField: (page) => page.locator('input[name="username"], input[type="email"], input[placeholder*="username" i], input[id*="username" i]').first(),
  passwordField: (page) => page.locator('input[name="password"], input[type="password"], input[placeholder*="password" i], input[id*="password" i]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In"), input[type="submit"]').first(),
  dashboardIndicator: (page) => page.locator('text=/dashboard|home/i, [class*="dashboard"], [id*="dashboard"]').first(),
  errorMessage: (page) => page.locator('[class*="error"], [class*="alert"], [role="alert"]').first()
};

module.exports = locators;