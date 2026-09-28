import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page()
class OnboardingBbvaTrader extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-onboardingBbvaTrader[state="active"] [data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx"]',
            elements: {
                offerPage: {
                    properties: {root: '#modal-offer-contracting[visible]'},
                    panelOffer: 'stock-configuration-digital-onboarding-bbva-trader-mx-panel-offer',
                    btnContinue: '.btn-container [data-tag-name="bbva-button-default"]'
                },
                accountsModal: {
                    properties: {root: '#modal-accounts[visible]'},
                    firstAccountCard: '[data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-card"]',
                },
                beneficiaryModal: {
                    properties: {root: '#beneficiary-modal[visible]'},
                    fieldsContainer: {
                        properties: {root: '.content-edit-beneficiary'},
                        fieldName: '#name input',
                        fieldFirstLastName: '#firstLastName input',
                        fieldSecondLastName: '#secondLastName input',
                        fieldPostalCode: '#postalCode input',
                        fieldBirthDate: '#birthDate [data-tag-name="bbva-form-date"]',
                        fieldPercentage: '#percentage input',
                    },
                    saveButton: '.buttons-actions [data-tag-name="bbva-button-default"]:not([variant])',
                    cancelButton: '.buttons-actions [data-tag-name="bbva-button-default"][variant="link"]',
                },
                successPage: {
                    properties: {root: '#success-modal[visible]'},
                    successTitle: '[data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-panel-offer"]',
                    successResume: '[data-tag-name="bbva-panel-container"]',
                    entryPointBtrader: '[data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-offer"]',
                    successButtonRow: '[data-tag-name="bbva-button-row"].button-row',
                },
                multistepPage: {
                    properties: {root: '#main-modal[visible]'},
                    accountStep: '#account-step',
                    accountCard: '#account-step [data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-card"]',
                    seeAllAccountsLink: '[option-link="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-account-see-all"] [data-tag-name="bbva-type-link"]',
                    beneficiariesStepHeader: '#beneficiaries-step',
                    beneficiariesDescription: '[data-tag-name="bbva-type-text"][text="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-beneficiaries-description-complete"]',
                    beneficiariesDescriptionZero: '[data-tag-name="bbva-type-text"][text="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-beneficiaries-description-zero"]',
                    beneficiaryItem: '.content-step [data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-contact"]',
                    beneficiaryItemEditButton: '.content-step [part="card-contact-info-header-actions"] [data-tag-name="bbva-type-link"]:nth-of-type(1)',
                    beneficiaryItemTrashButton: '.content-step [part="card-contact-info-header-actions"] [data-tag-name="bbva-type-link"]:nth-of-type(2)',
                    totalAssignedLabel: '[data-tag-name="bbva-type-text"][text="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-beneficiaries-total-assigned"]',
                    totalAssignedValue: '[data-tag-name="bbva-type-text"][alignment="right"]',
                    addBeneficiaryLink: '.add-beneficiary [data-tag-name="bbva-type-link"]',
                    notificationMessage: '[data-tag-name="bbva-notification-message"]',
                    continueButton: '#beneficiaries-step [data-tag-name="bbva-button-default"][text="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-panel-button-personal-plus-button-text"]',
                    termsAndConditionsStep:  {
                        properties: {root: '#terms-and-conditions-step'},
                        summaryTermsContainer: '[slot="summary"] [data-tag-name="bbva-badge-icon"]',
                        termsAndConditionsContinueButton: '[data-tag-name="bbva-button-default"][text="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-panel-button-personal-plus-button-text"]',
                        termsAndConditionsStepHeader: '[data-tag-name="bbva-header-category"]',
                        termsBulletItem: '[data-tag-name="bbva-list-bullet"]',
                        termsDocumentsContainer: '.accordion-terms-and-conditions',
                        termsDocumentsToggle: '.accordion-terms-and-conditions [data-tag-name="bbva-header-category"]',
                        termsFileItem: '.accordion-terms-and-conditions [data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-file"]',
                        termsIndividualCheckbox: '[data-tag-name="bbva-form-checkbox"].checkbox-file',
                        termsKeyPointsLabel: '[data-tag-name="bbva-header-category"][text="stock-configuration-digital-onboarding-bbva-trader-mx-multistep-terms-key-points"]',
                        termsSelectAllCheckbox: '.checkbox-file-principal [data-tag-name="bbva-form-checkbox"]',
                    },
                    summaryAccountContainer: '#account-step [slot="summary"] [data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-card"]',
                    summaryAccountEditLink: '#account-step[completed] #editButton',
                    summaryBeneficiariesContainer: '#beneficiaries-step [slot="summary"] [data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-list-contact"]',
                    summaryBeneficiariesEditLink: '#beneficiaries-step[completed] #editButton',
                    summaryTermsEditLink: '#terms-and-conditions-step[completed] #editButton',
                    confirmButton: '.confirm-step [data-tag-name="bbva-button-default"][variant="positive"]',
                },
                errorModal: '[data-tag-name="stock-configuration-digital-onboarding-bbva-trader-mx-error-modal"][visible]',
                deleteConfirmModalConfirmButton: '#deleteBeneficiaryModal[visible] [data-tag-name="bbva-help-modal"] .modal-footer [data-tag-name="bbva-button-default"].footer-button:not(.link)',
                exitBeneficiaryFormModal: {
                    properties: {root: '#exitBeneficiaryFormModal[visible] [data-tag-name="bbva-help-modal"]'},
                    exitBeneficiaryFormHeader: '#helpModalHeader',
                    exitBeneficiaryFormTitle: '#helpModalTitle [data-tag-name="bbva-type-text"]',
                    exitBeneficiaryFormDescription: '#helpModalContent [data-tag-name="bbva-type-text"]',
                    exitBeneficiaryFormConfirmButton: '.modal-footer [data-tag-name="bbva-button-default"].footer-button:not(.link)',
                    exitBeneficiaryFormCancelButton: '.modal-footer [data-tag-name="bbva-button-default"].footer-button.link',
                },
                loaderTextStay: '#main-loader [text="No actualices o salgas de la pantalla..."]',
            },
            requiredElements: [
                'offerPage',
                'offerPage.panelOffer',
            ]
        });
    }

    async _screenValidation({ item, value }) {
        const ms = this.multistepPage;

        switch (item.toLowerCase()) {
            case 'step beneficiaries':
                await ms.beneficiariesStepHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'beneficiaries description':
                if (value === 'zero') {
                    await ms.beneficiariesDescriptionZero.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await ms.beneficiariesDescription.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'beneficiary item':
                await ms.beneficiaryItem.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not displayed' });
                break;
            case 'total assigned label':
                await ms.totalAssignedLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'total assigned value':
                await ms.totalAssignedValue.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'add beneficiary link':
                await ms.addBeneficiaryLink.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not displayed' });
                break;
            case 'continue button':
                await (await ms.continueButton.waitForDisplayed({ timeout: config.wait.M }))
                    .waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                break;
            case 'notification message':
                await ms.notificationMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'step terms and conditions':
                await ms.termsAndConditionsStep.termsAndConditionsStepHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'terms key points label':
                await ms.termsAndConditionsStep.termsKeyPointsLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'terms bullet item':
                await ms.termsAndConditionsStep.termsBulletItem.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'terms documents container':
                await ms.termsAndConditionsStep.termsDocumentsContainer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'terms select all checkbox':
                await ms.termsAndConditionsStep.termsSelectAllCheckbox.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'terms individual checkbox':
                await ms.termsAndConditionsStep.termsIndividualCheckbox.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary account container':
                await ms.summaryAccountContainer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary account edit link':
                if (value === 'not displayed') {
                    await ms.summaryAccountEditLink.waitForExist({ timeout: config.wait.M, reverse: true });
                } else {
                    await this.waitForElementsExist(ms.summaryAccountEditLink);
                    await (await ms.summaryAccountEditLink.elements()).value[0].waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'summary beneficiaries container':
                await ms.summaryBeneficiariesContainer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary terms container':
                await ms.termsAndConditionsStep.summaryTermsContainer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'confirm button':
                await ms.confirmButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button on terms':
                await (await ms.termsAndConditionsStep.termsAndConditionsContinueButton.waitForDisplayed({ timeout: config.wait.M }))
                    .waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                break;
            case 'exit beneficiary form modal':
                await this.exitBeneficiaryFormModal.exitBeneficiaryFormHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit beneficiary form modal title':
                await this.exitBeneficiaryFormModal.exitBeneficiaryFormTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit beneficiary form modal description':
                await this.exitBeneficiaryFormModal.exitBeneficiaryFormDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit beneficiary form modal confirm button':
                await this.exitBeneficiaryFormModal.exitBeneficiaryFormConfirmButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit beneficiary form modal cancel button':
                await this.exitBeneficiaryFormModal.exitBeneficiaryFormCancelButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success title':
                await this.successPage.successTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success resume':
                await this.successPage.successResume.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'entry point btrader':
                await this.successPage.entryPointBtrader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success button row':
                await this.successPage.successButtonRow.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async chooseAccount() {
        const ms = this.multistepPage;
        await ms.accountStep.waitForDisplayed({ timeout: config.wait.M });
        await ms.accountCard.click();
    }

    async _selectAccountInSeeAll(selectedAccount = false) {
        await (await this.multistepPage.seeAllAccountsLink.waitForDisplayed({ timeout: config.wait.M })).click();
        if (selectedAccount) {
            await (await this.accountsModal.firstAccountCard.waitForDisplayed({ timeout: config.wait.M })).click();
        }
    }

    async acceptOffer() {
        const { btnContinue } = this.offerPage;
        await btnContinue.waitForDisplayed({ timeout: config.wait.M });
        await btnContinue.click();
    }

    async completeFlow(condition = '', addBeneficiaries = false) {
        if (condition === 'by selecting an account in all accounts') {
            await this._selectAccountInSeeAll(true);
        } else if (condition === 'by selecting an account') {
            await this.chooseAccount();
        }

        if (addBeneficiaries || condition === 'adding beneficiaries') {
            await this.addBeneficiary();
        }

        await this.continueWithBeneficiaries();
        await this.acceptTermsAndConditionsAndContinue();
    }

    async _completeDataBeneficiary({ name, firstLastName, secondLastName, postalCode, birthDate, percentage }, register = false) {
        const bm = this.beneficiaryModal.fieldsContainer;

        if (name) {
            await bm.fieldName.waitForDisplayed({ timeout: config.wait.M });
            await bm.fieldName.setValue({ value: name, slow: true });
        }

        if (firstLastName) {
            await bm.fieldFirstLastName.waitForDisplayed({ timeout: config.wait.M });
            await bm.fieldFirstLastName.setValue({ value: firstLastName, slow: true });
        }

        if (secondLastName) {
            await bm.fieldSecondLastName.waitForDisplayed({ timeout: config.wait.M });
            await bm.fieldSecondLastName.setValue({ value: secondLastName, slow: true });
        }

        if (postalCode) {
            await bm.fieldPostalCode.waitForDisplayed({ timeout: config.wait.M });
            await bm.fieldPostalCode.setValue({ value: postalCode, slow: true });
        }

        if (birthDate) {
            await (await bm.fieldBirthDate.waitForDisplayed({ timeout: config.wait.M }))
                .sendKeys({ keys: birthDate.split('/').reverse().join('') });
        }

        if (percentage) {
            await bm.fieldPercentage.waitForDisplayed({ timeout: config.wait.M });
            await bm.fieldPercentage.setValue({ value: percentage, slow: true });
        }

        if (register) {
            await (await this.beneficiaryModal.saveButton.waitForDisplayed({ timeout: config.wait.M })).click();
        }
    }

    async addBeneficiary(partiallyFilled = false) {
        let beneficiaryData = global.user.participants;
        if (partiallyFilled) {
            beneficiaryData = [{
                name: beneficiaryData[0].name,
                firstLastName: beneficiaryData[0].firstLastName,
            }];
        }
        for (const beneficiary of beneficiaryData) {
            await (await this.multistepPage.addBeneficiaryLink.waitForDisplayed({ timeout: config.wait.M })).click();
            await this._completeDataBeneficiary(beneficiary, !partiallyFilled);
        }
    }

    async openBeneficiaryForm(type) {
        const ms = this.multistepPage;
        switch (type) {
            case 'add':
                await (await ms.addBeneficiaryLink.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'edit':
                await ms.beneficiaryItem.waitForDisplayed({ timeout: config.wait.M });
                await ms.beneficiaryItemEditButton.click();
                break;
            case 'delete':
                await ms.beneficiaryItem.waitForDisplayed({ timeout: config.wait.M });
                await (await ms.beneficiaryItemTrashButton.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${type} is not a valid option`);
        }
    }

    async deleteBeneficiary() {
        const ms = this.multistepPage;
        await (await ms.beneficiaryItemTrashButton.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.deleteConfirmModalConfirmButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async completeEditionOfBeneficiary() {
        const { participants } = global.user;
        await this._completeDataBeneficiary(participants[0], false);
        await (await this.beneficiaryModal.saveButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async addSingleBeneficiary() {
        await (await this.multistepPage.addBeneficiaryLink.waitForDisplayed({ timeout: config.wait.M })).click();
        await this._completeDataBeneficiary(global.user.participants[0], true);
    }

    async acceptTermsAndConditionsAndContinue() {
        await this.acceptTermsAndConditions();
        const continueBtn = this.multistepPage.termsAndConditionsStep.termsAndConditionsContinueButton;
        await continueBtn.waitForDisplayed({ timeout: config.wait.M });
        await continueBtn.waitForEnabled({ timeout: config.wait.M });
        await continueBtn.click();
    }

    async acceptTermsAndConditions() {
        const checkbox = this.multistepPage.termsAndConditionsStep.termsSelectAllCheckbox;
        await checkbox.waitForDisplayed({ timeout: config.wait.M });
        await checkbox.click();
    }

    async openTermsDocument(documentIndex = 0) {
        await this.openDocumentsSection();
        const ms = this.multistepPage;
        await this.waitForElementsExist(ms.termsAndConditionsStep.termsFileItem);
        const documents = await ms.termsAndConditionsStep.termsFileItem.elements();
        const doc = documents.value[documentIndex];
        await doc.waitForDisplayed({ timeout: config.wait.M });
        await doc.click();
    }

    async openDocumentsSection() {
        const ms = this.multistepPage;
        await ms.termsAndConditionsStep.termsDocumentsToggle.waitForDisplayed({ timeout: config.wait.M });
        await ms.termsAndConditionsStep.termsDocumentsToggle.click();
    }

    async continueWithBeneficiaries() {
        const continueBtn = this.multistepPage.continueButton;
        await continueBtn.waitForDisplayed({ timeout: config.wait.M });
        await continueBtn.waitForEnabled({ timeout: config.wait.M });
        await continueBtn.click();
    }

    async confirmOnboardingProcessSummary() {
        await (await this.multistepPage.confirmButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async contractingWithError() {
        await this.confirmOnboardingProcessSummary();
        await this.errorModal.waitForExist({ timeout: config.wait.M });
    }

    async confirmOperationOnboarding() {
        await (await this.multistepPage.confirmButton.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.fillSmsInput({code: '12345678'});
    }

    async changeAccountInSummary() {
        await this.returnToSectionFromSummary('account');
        await this.waitForElementsExist(this.multistepPage.accountCard);
        const cards = (await this.multistepPage.accountCard.elements()).value;
        await cards[1].waitForDisplayed({ timeout: config.wait.M });
        await cards[1].click();
    }

    async returnToSectionFromSummary(section) {
        const ms = this.multistepPage;
        switch (section) {
            case 'account': {
                await this.waitForElementsExist(ms.summaryAccountEditLink);
                const [accountLink] = (await ms.summaryAccountEditLink.elements()).value;
                await accountLink.waitForDisplayed({ timeout: config.wait.M });
                await accountLink.click();
                break;
            }
            case 'beneficiaries': {
                await this.waitForElementsExist(ms.summaryBeneficiariesEditLink);
                const [firstLink] = (await ms.summaryBeneficiariesEditLink.elements()).value;
                await firstLink.waitForDisplayed({ timeout: config.wait.M });
                await firstLink.click();
                break;
            }
            case 'terms and conditions': {
                await this.waitForElementsExist(ms.summaryTermsEditLink);
                const [termsLink] = (await ms.summaryTermsEditLink.elements()).value;
                await termsLink.waitForDisplayed({ timeout: config.wait.M });
                await termsLink.click();
                break;
            }
            default:
                throw new Error(`Section '${section}' not recognized. Valid sections are 'account', 'beneficiaries' and 'terms and conditions'.`);
        }
    }

    async closeBeneficiaryForm() {
        await (await this.beneficiaryModal.cancelButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }
}

export default new OnboardingBbvaTrader();
