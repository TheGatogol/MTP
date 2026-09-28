import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../../components/bbva-header-main-spherica.js';
import GlomoAlertManager from '../../../components/glomo-alert-manager.js';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica.js';

@page('payrollAccountLinkBenefits')
class PayrollAccountLinkBenefits extends AbstractGlomoPage {

    constructor() {
        const companyDataSection = (element) => (`bbva-multistep-onboarding-payroll-account [data-tag-name="${element}"]`);

        super({
            root: '#cells-template-payrollLinkBenefits[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                back: 'bbva-header-main #btn-right-primary',
                banner: 'bbva-card-banner',

                inputCompanyCode: 'bbva-multistep-onboarding-payroll-account-spherica #code-company input',
                infoMessageToChangePayroll: `${companyDataSection('bbva-notification-message')}`,
                requestChangeLink: 'bbva-multistep-onboarding-payroll-account #notification-message-link',
                sendCompanyCodeButton: 'bbva-multistep-onboarding-payroll-account #stepOfferDetail > div.expandable-step-content #btn-get-company',
                linkOpenQr: 'bbva-multistep-onboarding-payroll-account #link-qr',

                dataFund: 'bbva-multistep-onboarding-payroll-account #stepOfferDetail > div.expandable-step-content > div.margin-up > bbva-notification-message',
                companyName: '#stepOfferDetail > div.expandable-step-content > div.margin-up > [data-tag-name="bbva-list-simple"]',
                companyCode: 'bbva-multistep-onboarding-payroll-account #stepOfferDetail > div.expandable-step-content [data-tag-name="bbva-list-simple"][label="Código de empresa"]',
                confirmCompanyButton: 'bbva-multistep-onboarding-payroll-account #stepOfferDetail > div.expandable-step-content > div.action > bbva-button-default[id="btn-next-step"]',
                isNotMyCompanyButton: 'bbva-multistep-onboarding-payroll-account #stepOfferDetail > div.expandable-step-content > div.action > bbva-button-default[id="btn-company-not-found"]',

                linkTcClabe: 'bbva-multistep-onboarding-payroll-account #link-terms',
                linkAdviceOfPrivacy: 'bbva-multistep-onboarding-payroll-account #link-privacy',
                checkButtonAcceptTC: 'bbva-multistep-onboarding-payroll-account #checkbox-terms',
                checkButtonAcceptAdviceOfPrivacy: 'bbva-multistep-onboarding-payroll-account #checkbox-privacy',
                continueButton: 'bbva-multistep-onboarding-payroll-account #btn-terms-and-conditions',

                editCompanyData: 'bbva-multistep-onboarding-payroll-account #stepOfferDetail #editButton',
                consultTC: 'bbva-multistep-onboarding-payroll-account #stepTermsConditions #editButton',
                requestLinkButton: 'bbva-button-default[id=btnVinculation]',

                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            helpModalHeader: '#modal #modal #header',
                            helpModalExitButton: '#modal #modal #closeButton',
                            helpModalContinueButton: '#modal #modal #acceptButton',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                back: 'bbva-header-main-spherica #btn-close',
                inputCompanyCode: 'bbva-multistep-onboarding-payroll-account-spherica [data-tag-name="bbva-form-text"]#code-company input',
                infoMessageToChangePayroll: 'bbva-multistep-onboarding-payroll-account-spherica [data-tag-name="bbva-notification-message"]',
                requestChangeLink: 'bbva-multistep-onboarding-payroll-account-spherica  #notification-message-link',
                sendCompanyCodeButton: 'bbva-multistep-onboarding-payroll-account-spherica #stepOfferDetail > div.expandable-step-content #btn-get-company',
                confirmCompanyButton: 'bbva-multistep-onboarding-payroll-account-spherica #stepOfferDetail > div.expandable-step-content > div.action > bbva-button-default[id="btn-next-step"]',
                isNotMyCompanyButton: 'bbva-multistep-onboarding-payroll-account-spherica #stepOfferDetail > div.expandable-step-content > div.action > bbva-button-default[id="btn-company-not-found"]',
                linkOpenQr: 'bbva-multistep-onboarding-payroll-account-spherica #link-qr',
                companyName: 'div.expandable-step-content > div.margin-up > bbva-list-simple-spherica',

                linkTcClabe: 'bbva-multistep-onboarding-payroll-account-spherica #link-terms',
                linkAdviceOfPrivacy: 'bbva-multistep-onboarding-payroll-account-spherica #link-privacy',
                checkButtonAcceptTC: 'bbva-multistep-onboarding-payroll-account-spherica #checkbox-terms',
                checkButtonAcceptAdviceOfPrivacy: 'bbva-multistep-onboarding-payroll-account-spherica #checkbox-privacy',
                continueButton: 'bbva-multistep-onboarding-payroll-account-spherica #btn-terms-and-conditions',

                editCompanyData: 'bbva-multistep-onboarding-payroll-account-spherica #stepOfferDetail #editButton',
                consultTC: 'bbva-multistep-onboarding-payroll-account-spherica #stepTermsConditions #editButton',
                requestLinkButton: 'bbva-button-default-spherica#btnVinculation',

                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            helpModalHeader: '#modal #modal #header',
                            helpModalExitButton: '#modal #modal #closeButton',
                            helpModalContinueButton: '#modal #modal #acceptButton',
                        }
                    }
                ],
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _sendCompanyCode({code}) {
        const {companyCode} = global.user.codes[code];
        await this.inputCompanyCode.waitForClickable({timeout: config.wait.M});
        await this.inputCompanyCode.click();
        await this.inputCompanyCode.setValue({value: companyCode});
        await this.sendCompanyCodeButton.waitForClickable({timeout: config.wait.S});
        await this.sendCompanyCodeButton.click();
    }

    async _confirmCompanyCode({isConfirmed}) {
        const element = isConfirmed ? this.confirmCompanyButton : this.isNotMyCompanyButton;
        await element.waitForClickable({timeout: config.wait.M});
        await element.click();
    }

    async _confirmNotices() {
        await this.checkButtonAcceptTC.waitForClickable({timeout: config.wait.M});
        await this.checkButtonAcceptTC.click();
        await this.checkButtonAcceptAdviceOfPrivacy.waitForClickable({timeout: config.wait.M});
        await this.checkButtonAcceptAdviceOfPrivacy.click();
    }

    async completeRequestPayrollLink({code}) {
        await this._sendCompanyCode({code: code});
        await this._confirmCompanyCode({isConfirmed: true});
        await this.showInfoPage();
        await this._confirmNotices();
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
        await this.requestLinkButton.waitForClickable({timeout: config.wait.M});
        await this.requestLinkButton.click();
    }

    async showInfoPage() {
        await this.linkTcClabe.waitForClickable({timeout: config.wait.M});
        await this.linkTcClabe.click();
        await this.dialogOperations.confirmDialog({isConfirmed: !this.isSpherica(), expectToDisappear: false});
        await this.linkAdviceOfPrivacy.waitForClickable({timeout: config.wait.M});
        await this.linkAdviceOfPrivacy.click();
        await this.dialogOperations.confirmDialog({isConfirmed: !this.isSpherica(), expectToDisappear: false});
    }

    async infopagedetail({infoPage, code}) {
        await this._sendCompanyCode({code: code});
        await this._confirmCompanyCode({isConfirmed: true});
        switch (infoPage.toLowerCase()) {
            case 'terms and conditions':
                await this.linkTcClabe.waitForClickable({timeout: config.wait.M});
                await this.linkTcClabe.click();
                break;
            case 'advice of privacy':
                await this.linkAdviceOfPrivacy.waitForClickable({timeout: config.wait.M});
                await this.linkAdviceOfPrivacy.click();
                break;
            default:
                throw new Error(`${infoPage} is an invalid page.`);
        }
    }

    async showInfoPageLinks({code}) {
        await this._sendCompanyCode({code: code});
        await this._confirmCompanyCode({isConfirmed: true});
        await this.showInfoPage();
    }

    async closeInfoPage({isHeaderButton}) {
        const buttonClose = this.isSpherica()
            ? this.dialogOperations.additionalElements.helpModalExitButton
            : isHeaderButton ? this.dialogOperations.additionalElements.helpModalExitButton
                : this.dialogOperations.additionalElements.helpModalContinueButton;
        await buttonClose.waitForClickable({timeout: config.wait.M});
        await buttonClose.click();
    }

    async showSummarySection({code}) {
        await this._sendCompanyCode({code: code});
        await this._confirmCompanyCode({isConfirmed: true});
        await this._confirmNotices();
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async showEditDataPage({dataPage}){
        switch (dataPage.toLowerCase()) {
            case 'terms and conditions':
                this.isSpherica()
                    ? await(await this.consultTC.elements()).value[0].waitForClickable({timeout: config.wait.M})
                    : await this.consultTC.waitForClickable({timeout: config.wait.M});
                this.isSpherica()
                    ? await(await this.consultTC.elements()).value[0].click()
                    : await this.consultTC.click();
                break;
            case 'company data':
                await this.editCompanyData.waitForClickable({timeout: config.wait.M});
                await this.editCompanyData.click();
                break;
            default:
                throw new Error(`${dataPage} is an invalid link.`);
        }
    }

    async notConfirmMyCompany({code}) {
        await this._sendCompanyCode({code: code});
        await this._confirmCompanyCode({isConfirmed: false});
        await this.dialogOperations.confirmDialog({isConfirmed: true});
    }

    async tryToSendWrongCode({code}) {
        await this._sendCompanyCode({code: code});
    }

    async leaveProcessAtSecondTry({leave = true}) {
        await this.back.waitForClickable({timeout: config.wait.M});
        await this.back.click();
        await this.confirmDialog({isConfirmed: leave});
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input company code':
                await this.inputCompanyCode.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message to change payroll':
                await this.infoMessageToChangePayroll.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request change link':
                await this.requestChangeLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send company code button':
                await this.sendCompanyCodeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link terms and conditions':
                await this.linkTcClabe.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link advice of privacy':
                await this.linkAdviceOfPrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check box terms and conditions':
                await this.checkButtonAcceptTC.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check box advice of privacy':
                await this.checkButtonAcceptAdviceOfPrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'data fund message':
                await this.dataFund.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'company name':
                await this.companyName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'company code':
                await this.companyCode.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'confirm company button':
                await this.confirmCompanyButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'is not my company button':
                await this.isNotMyCompanyButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'continue button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async enterCompanyCode(code) {
        await this.inputCompanyCode.waitForClickable({timeout: config.wait.M});
        await this.inputCompanyCode.click();
        await this.inputCompanyCode.setValue({value: code});
        await this.sendCompanyCodeButton.waitForClickable({timeout: config.wait.S});
        await this.sendCompanyCodeButton.click();
        await this.companyName.waitForDisplayed({timeout: config.wait.M});
    }

    async openQrScanner() {
        await this.linkOpenQr.waitForDisplayed({timeout: config.wait.M});
        await this.linkOpenQr.click();
    }
}

export default new PayrollAccountLinkBenefits();
