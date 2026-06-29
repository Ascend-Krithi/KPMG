const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const DetailPage = require('../../pages/detailPage.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-007: DPP Ops Submit to NBL', { tag: ['@e2e', '@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;
  let detailPage;

  test('[QE-910 TS-007 TC-001] Verify DPP Ops user can submit Core ASK routed to NBL with task creation', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);
    detailPage = new DetailPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.fillMandatoryFields({
      dppGroup: 'Audit - Banking',
      reason: TD.reasonForDppNeed.addition,
      level: TD.levelNeeded.manager,
      generalSpecialty: TD.generalSpecialtyOptions.general,
      headcount: '2',
      fte: '2.0',
      startDate: '2025-01-15',
      roleSummary: 'Audit Manager for Banking sector',
      roleResponsibilities: 'Lead audit engagements',
      roleQualifications: 'CPA required'
    });

    await createCoreAsk.selectRouteTo(TD.routeToOptions.nbl);
    await createCoreAsk.clickSubmit();

    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(TD.urlPatterns.detailPage);

    const taskId = await detailPage.getTaskId();
    await expect(taskId).toMatch(TD.taskIdPattern);

    const submitter = await detailPage.getSubmitter();
    await expect(submitter).toContain('dpp_ops_user');

    const assignee = await detailPage.getAssignee();
    await expect(assignee).toContain('NBL');
  });
});