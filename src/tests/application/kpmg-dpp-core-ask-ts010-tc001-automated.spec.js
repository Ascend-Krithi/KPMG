const { test, expect } = require('../../fixtures');
const KpmgDppCoreAskPage = require('../../pages/kpmg-dpp-core-ask.page');
const TD = require('../../data/kpmg-dpp-test-data');

test.describe('[UI] QE-910 TS-010: Validation Messages Verification', { tag: ['@regression', '@kpmg-dpp'] }, () => {
  let coreAskPage;

  test('[QE-910 TS-010 TC-001] Verify validation messages when mandatory fields are left blank in Create Core ASK', async ({ page }) => {
    coreAskPage = new KpmgDppCoreAskPage(page);
    
    // Step 1: Launch application
    await coreAskPage.goto();
    
    // Step 2: Login with valid credentials
    await coreAskPage.login(TD.dppOpsUser.username, TD.dppOpsUser.password);
    const isDashboardVisible = await coreAskPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
    
    // Step 3: Navigate to Core ASK and click Create Core ASK
    await coreAskPage.navigateToCoreAsk();
    await coreAskPage.clickCreateCoreAsk();
    const isFormVisible = await coreAskPage.isCoreAskFormVisible();
    expect(isFormVisible).toBeTruthy();
    
    // Step 4: Leave all mandatory fields blank (no action needed)
    
    // Step 5: Click Submit button
    await coreAskPage.clickSubmit();
    
    // Wait for validation messages to appear
    await page.waitForTimeout(1000);
    
    // Step 6: Verify validation messages for each mandatory field
    const validationMessages = await coreAskPage.getValidationMessages();
    
    // Verify that validation messages are displayed
    expect(validationMessages.length).toBeGreaterThan(0);
    
    // Verify specific validation messages (based on implementation)
    const allMessages = validationMessages.join(' ');
    expect(allMessages).toContain('required');
  });
});