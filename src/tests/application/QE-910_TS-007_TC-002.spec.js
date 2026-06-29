const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const DetailPage = require('../../pages/detailPage.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-007: DPP Ops Submit to DPP Leadership', { tag: ['@e2e', '@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;
  let detailPage;

  test('[QE-910 TS-007 TC-002] Verify DPP Ops user can submit Core ASK routed to DPP Leadership', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);
    detailPage = new DetailPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppOps();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.fillMandatoryFields({
      dppGroup: 'IIG - Inquiry focused',
      reason: TD.reasonForDppNeed.replacement,
      outgoingResource: 'Mike Davis',
      level: TD.levelNeeded.director,
      generalSpecialty: TD.generalSpecialtyOptions.specialty,
      specialtyDetail: 'Risk Advisory',
      headcount: '1',
      fte: '1.0',
      startDate: '2025-04-01',
      roleSummary: 'Director for IIG',
      roleResponsibilities: 'Manage inquiry projects',
      roleQualifications: '10+ years experience'
    });

    await createCoreAsk.fillRetirementDate('2025-03-31');
    await createCoreAsk.selectRouteTo(TD.routeToOptions.dppLeadership);
    await createCoreAsk.clickSubmit();

    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(TD.urlPatterns.detailPage);

    const taskId = await detailPage.getTaskId();
    await expect(taskId).toMatch(TD.taskIdPattern);

    const submitter = await detailPage.getSubmitter();
    await expect(submitter).toContain('dpp_ops_user');

    const assignee = await detailPage.getAssignee();
    await expect(assignee).toContain('DPP Leadership');
  });
});