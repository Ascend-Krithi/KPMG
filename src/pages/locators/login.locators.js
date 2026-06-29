const locators = {
  usernameInput: (page) => page.locator('input[name="username"], input[type="text"][id*="user"], input[placeholder*="username" i]').first(),
  passwordInput: (page) => page.locator('input[name="password"], input[type="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In")').first(),
  loginPage: (page) => page.locator('body').first()
};

module.exports = locators;