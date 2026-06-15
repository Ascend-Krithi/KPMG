const locators = {
  usernameInput: (page) => page.locator('input[name="username"], input[id="username"], input[type="text"]').first(),
  passwordInput: (page) => page.locator('input[name="password"], input[id="password"], input[type="password"]').first(),
  loginButton: (page) => page.locator('button[type="submit"], button:has-text("Login"), input[type="submit"]').first(),
  loginPageContainer: (page) => page.locator('form, .login-form, #login-form').first()
};

module.exports = locators;