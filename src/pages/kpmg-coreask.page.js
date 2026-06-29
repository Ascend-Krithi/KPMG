const loc = require('./locators/kpmg-coreask.locators');
const URL = 'https://yellow-mushroom-0bbe5cc0f.6.azurestaticapps.net/experience-studio/create';

class KPMGCoreAskPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  // DPP Group Methods
  async clickDppGroupDropdown() {
    await loc.dppGroupDropdown(this.page).click();
  }

  async selectDppGroup(value) {
    await loc.dppGroupDropdown(this.page).selectOption({ label: value });
  }

  async getSelectedDppGroup() {
    return await loc.dppGroupDropdown(this.page).inputValue();
  }

  async isDppGroupDropdownExpanded() {
    const dropdown = loc.dppGroupDropdown(this.page);
    return await dropdown.evaluate(el => el.getAttribute('aria-expanded') === 'true');
  }

  async getAllDppGroupOptions() {
    const dropdown = loc.dppGroupDropdown(this.page);
    return await dropdown.locator('option').allTextContents();
  }

  // Reason for DPP Need Methods
  async clickReasonForNeedDropdown() {
    await loc.reasonForNeedDropdown(this.page).click();
  }

  async selectReasonForNeed(value) {
    await loc.reasonForNeedDropdown(this.page).selectOption({ label: value });
  }

  async getSelectedReasonForNeed() {
    return await loc.reasonForNeedDropdown(this.page).inputValue();
  }

  // Outgoing Resource Methods
  async getOutgoingResourceValue() {
    return await loc.outgoingResourceField(this.page).inputValue();
  }

  async fillOutgoingResource(value) {
    await loc.outgoingResourceField(this.page).fill(value);
  }

  async isOutgoingResourceEditable() {
    return await loc.outgoingResourceField(this.page).isEditable();
  }

  async isOutgoingResourceDisabled() {
    return await loc.outgoingResourceField(this.page).isDisabled();
  }

  async isOutgoingResourceVisible() {
    return await loc.outgoingResourceField(this.page).isVisible();
  }

  // Level Needed Methods
  async clickLevelNeededDropdown() {
    await loc.levelNeededDropdown(this.page).click();
  }

  async selectLevelNeeded(value) {
    await loc.levelNeededDropdown(this.page).selectOption({ label: value });
  }

  async getSelectedLevelNeeded() {
    return await loc.levelNeededDropdown(this.page).inputValue();
  }

  // Role Posting Methods
  async isRolePostingVisible() {
    return await loc.rolePostingDropdown(this.page).isVisible();
  }

  async clickRolePostingDropdown() {
    await loc.rolePostingDropdown(this.page).click();
  }

  async selectRolePosting(value) {
    await loc.rolePostingDropdown(this.page).selectOption({ label: value });
  }

  async getSelectedRolePosting() {
    return await loc.rolePostingDropdown(this.page).inputValue();
  }

  async getAllRolePostingOptions() {
    const dropdown = loc.rolePostingDropdown(this.page);
    return await dropdown.locator('option').allTextContents();
  }

  // General/Specialty Needed Methods
  async clickGeneralSpecialtyDropdown() {
    await loc.generalSpecialtyDropdown(this.page).click();
  }

  async selectGeneralSpecialty(value) {
    await loc.generalSpecialtyDropdown(this.page).selectOption({ label: value });
  }

  async getSelectedGeneralSpecialty() {
    return await loc.generalSpecialtyDropdown(this.page).inputValue();
  }

  async isSpecialtyDetailsVisible() {
    return await loc.specialtyDetailsTextbox(this.page).isVisible();
  }

  async fillSpecialtyDetails(value) {
    await loc.specialtyDetailsTextbox(this.page).fill(value);
  }

  async getSpecialtyDetailsValue() {
    return await loc.specialtyDetailsTextbox(this.page).inputValue();
  }

  // Route To Methods
  async clickRouteToDropdown() {
    await loc.routeToDropdown(this.page).click();
  }

  async selectRouteTo(value) {
    await loc.routeToDropdown(this.page).selectOption({ label: value });
  }

  async getSelectedRouteTo() {
    return await loc.routeToDropdown(this.page).inputValue();
  }

  async getAllRouteToOptions() {
    const dropdown = loc.routeToDropdown(this.page);
    return await dropdown.locator('option').allTextContents();
  }

  // Other Form Field Methods
  async fillHeadcount(value) {
    await loc.headcountField(this.page).fill(value);
  }

  async fillFTE(value) {
    await loc.fteField(this.page).fill(value);
  }

  async fillStartDate(value) {
    await loc.startDateField(this.page).fill(value);
  }

  async fillRetirementDate(value) {
    await loc.retirementDateField(this.page).fill(value);
  }

  async fillRoleSummary(value) {
    await loc.roleSummaryField(this.page).fill(value);
  }

  async fillRoleResponsibilities(value) {
    await loc.roleResponsibilitiesField(this.page).fill(value);
  }

  async fillRoleQualifications(value) {
    await loc.roleQualificationsField(this.page).fill(value);
  }

  // Button Methods
  async clickSubmit() {
    await loc.submitButton(this.page).click();
  }

  async clickCancel() {
    await loc.cancelButton(this.page).click();
  }

  async isSubmitButtonEnabled() {
    return await loc.submitButton(this.page).isEnabled();
  }

  // Message Methods
  async getErrorMessage() {
    return await loc.errorMessage(this.page).textContent();
  }

  async isErrorMessageVisible() {
    return await loc.errorMessage(this.page).isVisible();
  }

  async getSuccessMessage() {
    return await loc.successMessage(this.page).textContent();
  }

  // Page Verification Methods
  async getPageTitle() {
    return await loc.pageTitle(this.page).textContent();
  }

  async isFormVisible() {
    return await loc.formContainer(this.page).isVisible();
  }

  // Complex Action Methods
  async fillMandatoryFields(data) {
    await this.selectDppGroup(data.dppGroup);
    await this.selectReasonForNeed(data.reason);
    await this.selectLevelNeeded(data.level);
    await this.selectGeneralSpecialty(data.generalSpecialty);
    await this.fillHeadcount(data.headcount);
    await this.fillFTE(data.fte);
    await this.fillStartDate(data.startDate);
    await this.fillRoleSummary(data.roleSummary);
    await this.fillRoleResponsibilities(data.roleResponsibilities);
    await this.fillRoleQualifications(data.roleQualifications);
  }
}

module.exports = KPMGCoreAskPage;