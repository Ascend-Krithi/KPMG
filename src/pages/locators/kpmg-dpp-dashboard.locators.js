const locators = {
  dashboardContainer: (page) => page.locator('.dashboard, #dashboard, [data-testid="dashboard"]').first(),
  coreAskMenu: (page) => page.locator('a:has-text("Core ASK"), button:has-text("Core ASK"), [data-menu="core-ask"]').first(),
  mainMenu: (page) => page.locator('nav, .main-menu, .navigation').first()
};

module.exports = locators;