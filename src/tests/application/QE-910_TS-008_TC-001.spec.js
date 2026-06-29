const { test, expect } = require('../../fixtures');
const LoginPage = require('../../pages/login.page');
const CreateCoreAskPage = require('../../pages/createCoreAsk.page');
const DetailPage = require('../../pages/detailPage.page');
const TD = require('../../data/kpmg-coreask-test-data');

test.describe('[UI] QE-910 TS-008: DPP Leadership Submit to DPP Ops', { tag: ['@e2e', '@regression', '@kpmg'] }, () => {
  let loginPage;
  let createCoreAsk;
  let detailPage;

  test('[QE-910 TS-008 TC-001] Verify DPP Leadership user can only route to DPP Ops', async ({ page }) => {
    loginPage = new LoginPage(page);
    createCoreAsk = new CreateCoreAskPage(page);
    detailPage = new DetailPage(page);

    await loginPage.goto();
    await loginPage.loginAsDppLeadership();
    await page.waitForLoadState('domcontentloaded');

    await createCoreAsk.goto();
    await expect(page).toHaveURL(TD.urlPatterns.createCoreAsk);

    await createCoreAsk.fillMandatoryFields({
      dppGroup: 'NB - SOQM - Global',
      reason: TD.reasonForDppNeed.succession,
      outgoingResource: 'Lisa Brown',
      level: TD.levelNeeded.srManager,
      generalSpecialty: TD.generalSpecialtyOptions.leadership,
      specialtyDetail: 'Team Lead',
      headcount: '1',
      fte: '1.0',
      startDate: '2026-01-01',
      roleSummary: 'Sr. Manager for SOQM',
      roleResponsibilities: 'Lead quality management initiatives',
      roleQualifications: 'MBA preferred'
    });

    await createCoreAsk.fillRetirementDate('2025-12-31');
    await createCoreAsk.selectRouteTo(TD.routeToOptions.dppOps);
    await createCoreAsk.clickSubmit();

    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(TD.urlPatterns.detailPage);

    const taskId = await detailPage.getTaskId();
    await expect(taskId).toMatch(TD.taskIdPattern);

    const submitter = await detailPage.getSubmitter();
    await expect(submitter).toContain('dpp_leadership_user');

    const assignee = await detailPage.getAssignee();
    await expect(assignee).toContain('DPP Ops');
  });
});