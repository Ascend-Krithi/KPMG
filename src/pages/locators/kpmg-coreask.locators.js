const locators = {
  // DPP Group dropdown
  dppGroupDropdown: (page) => page.locator('[data-testid="dpp-group-dropdown"], select[name="dppGroup"], #dppGroup, [aria-label*="DPP Group"]').first(),
  dppGroupOptions: (page) => page.locator('[data-testid="dpp-group-dropdown"] option, select[name="dppGroup"] option, #dppGroup option').all(),
  dppGroupOption: (page, optionText) => page.locator(`[data-testid="dpp-group-dropdown"] option:has-text("${optionText}"), select[name="dppGroup"] option:has-text("${optionText}"), #dppGroup option:has-text("${optionText}")`).first(),

  // Reason For DPP Need dropdown
  reasonForDppNeedDropdown: (page) => page.locator('[data-testid="reason-for-dpp-need-dropdown"], select[name="reasonForDppNeed"], #reasonForDppNeed, [aria-label*="Reason For DPP Need"]').first(),
  reasonForDppNeedOptions: (page) => page.locator('[data-testid="reason-for-dpp-need-dropdown"] option, select[name="reasonForDppNeed"] option, #reasonForDppNeed option').all(),
  reasonForDppNeedOption: (page, optionText) => page.locator(`[data-testid="reason-for-dpp-need-dropdown"] option:has-text("${optionText}"), select[name="reasonForDppNeed"] option:has-text("${optionText}"), #reasonForDppNeed option:has-text("${optionText}")`).first(),

  // Level Needed dropdown
  levelNeededDropdown: (page) => page.locator('[data-testid="level-needed-dropdown"], select[name="levelNeeded"], #levelNeeded, [aria-label*="Level Needed"]').first(),
  levelNeededOptions: (page) => page.locator('[data-testid="level-needed-dropdown"] option, select[name="levelNeeded"] option, #levelNeeded option').all(),
  levelNeededOption: (page, optionText) => page.locator(`[data-testid="level-needed-dropdown"] option:has-text("${optionText}"), select[name="levelNeeded"] option:has-text("${optionText}"), #levelNeeded option:has-text("${optionText}")`).first(),

  // Role Posting dropdown
  rolePostingDropdown: (page) => page.locator('[data-testid="role-posting-dropdown"], select[name="rolePosting"], #rolePosting, [aria-label*="Role Posting"]').first(),
  rolePostingOptions: (page) => page.locator('[data-testid="role-posting-dropdown"] option, select[name="rolePosting"] option, #rolePosting option').all(),
  rolePostingOption: (page, optionText) => page.locator(`[data-testid="role-posting-dropdown"] option:has-text("${optionText}"), select[name="rolePosting"] option:has-text("${optionText}"), #rolePosting option:has-text("${optionText}")`).first(),

  // Form fields
  formFields: (page) => page.locator('input, select, textarea').all(),
  pageTitle: (page) => page.locator('h1, [data-testid="page-title"]').first(),
  pageContent: (page) => page.locator('body').first()
};

module.exports = locators;