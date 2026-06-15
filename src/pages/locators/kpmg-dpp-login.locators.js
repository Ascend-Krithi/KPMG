const locators = {
  usernameInput: (page) => page.locator('input[name="username"], input[id="username"], input[type="text"][placeholder*="username" i]').first(),
  passwordInput: (page) => page.locator('input[name="password"], input[id="password"], input[type="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In")').first(),
  dashboardContainer: (page) => page.locator('[data-testid="dashboard"], .dashboard, #dashboard').first(),
  errorMessage: (page) => page.locator('.error-message, .alert-danger, [role="alert"]').first()
};

module.exports = locators;