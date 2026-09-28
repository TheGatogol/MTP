import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page('monthlyStatementEnquiry')
class MonthlyStatementEnquiry extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-monthlyStatementEnquiry[state="active"]',
            elements: {
                header: {
                    properties: {
                        root: '[data-tag-name="card-information-monthly-statement-enquiry-card-flexible-financing-mx"]',
                    },
                    headerElement: '[data-tag-name="bbva-header-main"][variant="modal-initial"]',
                    closeHeader: '[data-tag-name="bbva-header-main"][variant="modal-initial"] #btn-close'
                },
                modalSuccess: '[data-tag-name="card-information-monthly-statement-enquiry-card-flexible-financing-mx-section"]',
                statusAccountTittle: '.body-content-wrapper [data-tag-name="bbva-type-text"]',
                lastStatusRadioButton: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][tabindex="0"][info-message*="Fecha de corte:"]',
                otherStatusRadioButton: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][tabindex="0"][label*="estados de cuenta"]',
                consultButton: '.body-content-wrapper div.button [data-tag-name="bbva-button-default"]',
                noAccountStatementButton: '[mode="noAccountStatements"] [data-tag-name="bbva-help-modal"] .modal-footer [data-tag-name="bbva-button-default"].footer-button',
                signConnector: CellsSignOperationModalSpherica,
                monthListButton: '[data-tag-name="bbva-form-select"].months-selector button',
                monthSelectorButton: '[data-tag-name="bbva-form-option"][value="__MONTH__"]',
                yearListButton: '[data-tag-name="bbva-form-select"].years-selector button',
                yearSelectorButton: '[data-tag-name="bbva-form-option"][value="__YEAR__"]',
                successIcon: '[data-tag-name="bbva-clip-box-item"]',
                cautionIcon: '.modal-main #helpModalTitle [icon="spherica:caution"]',
                statusMessage: '[data-tag-name="bbva-type-text"][text="card-information-monthly-statement-enquiry-card-flexible-financing-mx-section-receipt-option-download-receipt-title-text"]',
                cutOffDate: '[data-tag-name="bbva-type-text"][text="card-information-monthly-statement-enquiry-card-flexible-financing-mx-section-receipt-option-download-receipt-subtitle-text"]',
                downloadAccountStatusButton: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                infoFirstAccountStatusMessage: '[data-tag-name="bbva-type-text"][text="card-information-monthly-statement-enquiry-card-flexible-financing-mx-description-key"]',
                lastStatusAccount: '[data-tag-name="bbva-type-text"][text="card-information-monthly-statement-enquiry-card-flexible-financing-mx-last-account-statement-key"]',
                continueOnlyOneAccountStatement: '.body-content-wrapper .button [data-tag-name="bbva-button-default"]',
                downloadOnlyOneAccountStatement: '[data-selector="modal-receiptModal"] .footer .label-container',
                flexibleFinancingSection: {
                    properties: {
                        root: '[data-tag-name="card-information-monthly-statement-enquiry-card-flexible-financing-mx-section"][visible]'
                    },
                    errorRetryButton: '[data-selector="modal-errorFullHeightRetryModal"] .help-modal .modal-main [data-tag-name="bbva-button-default"]',
                },
                errorDisabledCallBbva: {
                    properties: {
                        root: '[data-selector="modal-errorMaximumRetriesModalDisabledCallBbva"]'
                    },
                }
            },

            requiredElements: [
                'statusAccountTittle'
            ],
        });
    }

    async accessMonthlyStatement(action, status) {
        if (status === 'last account') {
            await this.accessLastStatus();
        } else {
            await this.accessOtherStatus();
        }

        switch (action) {
            case 'consults':
                await this.consultsAccount();
                await this.fillOtp('05204372');
                await this.modalSuccess.scrollIntoView({ block: 'nearest' });
                await this.downloadAccountStatusButton.scrollIntoView({ block: 'nearest' });
                break;
            default:
                throw new Error(`Unknown action: ${action}`);
        }
    }

    async consultsAccount() {
        await this.consultButton.waitForDisplayed({timeout: config.wait.L});
        await this.consultButton.waitForAnimation({timeout: config.wait.L});
        await this.consultButton.waitForEnabled({timeout: config.wait.L});
        await this.consultButton.click({useActions: false, scrollOptions: false});
    }

    async viewsAvailableAccountStatement() {
        await this.continueOnlyOneAccountStatement.waitForAnimation({timeout: config.wait.M});
        await this.continueOnlyOneAccountStatement.waitForDisplayed({timeout: config.wait.M});
        await this.continueOnlyOneAccountStatement.click();
    }

    async downloadsAvailableAccountStatement() {
        await this.downloadOnlyOneAccountStatement.waitForAnimation({timeout: config.wait.M});
        await this.downloadOnlyOneAccountStatement.waitForDisplayed({timeout: config.wait.M});
        await this.downloadOnlyOneAccountStatement.click();
    }

    async accessLastStatus() {
        await this.lastStatusRadioButton.waitForDisplayed({timeout: config.wait.L});
        await this.lastStatusRadioButton.waitForAnimation({timeout: config.wait.L});
        await this.lastStatusRadioButton.waitForEnabled({timeout: config.wait.L});
        await this.lastStatusRadioButton.click({useActions: false, scrollOptions: false});
    }

    async accessOtherStatus() {
        await this.otherStatusRadioButton.waitForDisplayed({timeout: config.wait.L});
        await this.otherStatusRadioButton.waitForAnimation({timeout: config.wait.L});
        await this.otherStatusRadioButton.waitForEnabled({timeout: config.wait.L});
        await this.otherStatusRadioButton.click({useActions: false, scrollOptions: false});
        await this.dateSelection();
    }

    async accessAcounts(entryPoint) {
        switch(entryPoint.toLowerCase()) {
            case 'accesses':
                await this.viewsAvailableAccountStatement();
                break;
            case 'last status':
                await this.accessLastStatus();
                await this.consultsAccount();
                break;
            default:
                throw new Error(`${entryPoint} option is not available to navigate.`);
        }
    }

    async monthListSelection() {
        await this.monthListButton.waitForDisplayed({timeout: config.wait.L});
        await this.monthListButton.waitForAnimation({timeout: config.wait.L});
        await this.monthListButton.waitForEnabled({timeout: config.wait.L});
        await this.monthListButton.click({useActions: false, scrollOptions: false});
    }

    async yearListSelection() {
        await this.yearListButton.waitForDisplayed({timeout: config.wait.L});
        await this.yearListButton.waitForAnimation({timeout: config.wait.L});
        await this.yearListButton.waitForEnabled({timeout: config.wait.L});
        await this.yearListButton.click({useActions: false, scrollOptions: false});
    }

    async dateSelection(month = 'Mayo', year = '2026') {
        await this.monthListSelection();
        const monthSelector = this.monthSelectorButton.specifySelector({placeholder: '__MONTH__', value: month});
        await monthSelector.waitForDisplayed({timeout: config.wait.L});
        await monthSelector.waitForAnimation({timeout: config.wait.L});
        await monthSelector.waitForEnabled({timeout: config.wait.L});
        await monthSelector.click({useActions: false, scrollOptions: false});
        await this.yearListSelection();
        const yearSelector = this.yearSelectorButton.specifySelector({placeholder: '__YEAR__', value: year});
        await yearSelector.waitForDisplayed({timeout: config.wait.L});
        await yearSelector.waitForAnimation({timeout: config.wait.L});
        await yearSelector.waitForEnabled({timeout: config.wait.L});
        await yearSelector.click({useActions: false, scrollOptions: false});
    }

    async downloadReceipt() {
        await this.downloadAccountStatusButton.waitForDisplayed({timeout: config.wait.L});
        await this.downloadAccountStatusButton.waitForAnimation({timeout: config.wait.L});
        await this.downloadAccountStatusButton.waitForEnabled({timeout: config.wait.L});
        await this.downloadAccountStatusButton.click();
    }

    async retryModal() {
        await this.flexibleFinancingSection.errorRetryButton.waitForDisplayed({timeout: config.wait.L});
        await this.flexibleFinancingSection.errorRetryButton.waitForAnimation({timeout: config.wait.L});
        await this.flexibleFinancingSection.errorRetryButton.waitForEnabled({timeout: config.wait.L});
        await this.flexibleFinancingSection.errorRetryButton.click({useActions: false, scrollOptions: false});
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.waitForElementsExist(this.header.headerElement);
                await (await this.header.headerElement.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'successful image':
                await this.successIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'status message':
                await this.statusMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cut-off date':
                await this.cutOffDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'download account status report button':
                await this.downloadAccountStatusButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info first account status':
                await this.infoFirstAccountStatusMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'status account title':
                await this.statusAccountTittle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last account status radio button':
                await this.lastStatusRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other account status radio button':
                await this.otherStatusRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'consult button':
                await this.consultButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no account statement button':
                await this.noAccountStatementButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon caution':
                await this.cautionIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'last status account':
                await this.lastStatusAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitFlow() {
        await this.waitForElementsExist(this.header.closeHeader);
        await (await this.header.closeHeader.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
        await (await this.header.closeHeader.elements()).value[0].waitForAnimation({timeout: config.wait.L});
        await (await this.header.closeHeader.elements()).value[0].waitForEnabled({timeout: config.wait.L});
        await (await this.header.closeHeader.elements()).value[0].click();
    }
}

export default new MonthlyStatementEnquiry();
