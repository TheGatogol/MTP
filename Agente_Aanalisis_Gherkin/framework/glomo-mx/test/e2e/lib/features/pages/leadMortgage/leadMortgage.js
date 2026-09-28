import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import localeMXConfig from '../../i18n/mexico';

@page()
class LeadMortgagePage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mortgage[state="active"]',
            elements: {
                progressBar: '#mortgageProgress .progress-bar .progress-bar-fill',
                header: '#mortgageHeaderMain h1',
                exitBtn: '#mortgageHeaderMain #btn-close',
                telephoneIcon: '#mortgageHeaderMain #btn-right-secondary',
                callMeBackButton: '.footer.hide-padding-top #termsButtonSecondary',
                infoMain: '#simulatorPanelInfo',
                priceTxt: '#simulatorHeader',
                simmulatorContainer: '#stepSimmulator',
                termsAndConditionsStepDisabled: '#stepTermsAndConditions[disabled-button]',
                dataStep: {
                    properties: {root: '#stepSimmulator'},
                    listDestination: '#simulatorFormSelect',
                    optionsDestination: '[data-tag-name="bbva-form-option"]:nth-of-type(__INDEX__)',
                    inputAmount: '#simulatorFormAmount input',
                    clearInputAmount: '.clear',
                    errorMessageAmount: '[role="alert"].message.error',
                    sliderTxt: '.slider-label dl dt p',
                    sliderTxtValue: '.slider-label .wrapper-description p',
                    sliderTime: '#simulatorFormRange',
                    sliderTimeLegend: '#simulatorFormRange .content .control .legend [text="__VALUE__"]',
                    termQuestion: '#mortgageTermQuestion',
                    termCurrent: '#simulatorFormRange .control .current div',
                    termBar: '#simulatorFormRange .control .bar',
                    paymentTxt: '#simulatorPanelFixedContainer',
                    helpIcon: '#simulatorFormSelect .right-align-container bbva-type-icon',
                    hiringIcon: '#costTitle + .key-info [data-tag-name="bbva-list-simple-spherica"] button',
                    authIcon: '#costTitle + .key-info [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(2) button',
                    interestIcon: '#costTitle + .key-info [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(3) button',
                    catIcon: '#costTitle + .key-info [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(4) button',
                    continueBtn: '#simulatorFooterButtonSticky',
                    editBtn: '#editButton',
                    btnTermFive: 'bbva-form-radio-button-input[value="5"]',
                    btnTermTen: 'bbva-form-radio-button-input[value="10"]',
                    summary: {
                        properties: {root: '.summary'},
                        amountTitle: '.amount-title',
                        summaryAmount: '#summaryAmount',
                        monthlyPaymentLabel: '.summary > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(1) dl dt p',
                        monthlyPayment: '.summary > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(1) .wrapper-description p',
                        termLabel: '.summary > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(2) dl dt p',
                        term: '.summary > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(2) .wrapper-description p',
                        creditDestinationLabel: '.summary > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(3) dl dt p',
                        creditDestination: '.summary > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(3) .wrapper-description p',
                        commissionForHiringLabel: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(1) dl dt p',
                        commissionForHiring: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(1) .wrapper-description p',
                        deferredCreditAuthorizationCommissionLabel: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(2) dl dt p',
                        deferredCreditAuthorizationCommission: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(2) .wrapper-description p',
                        annualInterestRateLabel: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(3) dl dt p',
                        annualInterestRate: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(3) .wrapper-description p',
                        catLabel: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(4) dl dt p',
                        cat: '#costContainer > [data-tag-name="bbva-list-simple-spherica"]:nth-of-type(4) .wrapper-description p',
                    },
                },
                legalStep: {
                    properties: {root: '#stepTermsAndConditions'},
                    title: '#headingLabel',
                    infoCondition: '[data-tag-name="bbva-list-file-spherica"] [data-tag-name="bbva-type-link"]',
                    infoAuthorization: '[data-tag-name="bbva-list-file-spherica"]:nth-of-type(2) [data-tag-name="bbva-type-link"]',
                    chboxAccept: '[data-tag-name="bbva-form-checkbox"]',
                    chboxAuthorize: '[data-tag-name="bbva-form-checkbox"]:nth-of-type(2)',
                    infoPanelLegal: '#termsNotification',
                    emailInPanelInfo: '#termsNotification .description',
                    continueBtn: '#simulatorFooterButtonStickyTerms',
                    editBtn: '#editButton',
                    summary: {
                        properties: {root: '.summary'},
                        termsAcceptedIcon: '#acceptedInfo [data-tag-name="bbva-type-icon"]',
                        termsAcceptedTxt: '#acceptedInfo',
                        emailSectionLabel: '#emailSection dl dt p',
                        email: '#emailSection .wrapper-description p'
                    },
                    stickyCallMeBackTerms:'#termsButtonSecondary'
                },
                requestBtn: '.confirm-step bbva-button-default',
                stickyCallMeBackContinue: '#panelButton #footerLink',
                modalInfo: [
                    BbvaHelpModalSpherica,
                    {
                        modifiers: '#mortgage',
                        additionalElements: {
                            titleIcon: '#helpModalTitle .title-icon',
                            bodyText: '#mortgageBodyText',
                            closeBtn: '#helpModalHeader #btn-close'
                        }
                    }
                ],
                signConnector: CellsSignOperationModalSpherica,
            },
            requiredElements: [
                'header',
                'dataStep.paymentTxt'
            ]
        });
    }

    async _screenValidation({item, value, visibility}) {
        let pattern, values;
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'close button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'panel info':
                await this.infoMain.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'price info':
                await this.priceTxt.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'destination help icon':
                await this.dataStep.helpIcon.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'credit destination list':
                await this._validateElementState(value, this.dataStep.listDestination);
                break;
            case 'detail offer step':
                await this.simmulatorContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount':
                await this.dataStep.inputAmount.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'amount error message':
                await this.dataStep.errorMessageAmount.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'term label':
                await this.dataStep.sliderTxt.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'currently selected term':
                pattern = new RegExp(`^${value}[\\s]+[\\S]+$`);
                await this.dataStep.sliderTxtValue.waitForText({text: pattern, timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'available term options':
                values = value.split(',');
                for (const element of values) {
                    await (this.dataStep.sliderTimeLegend.specifySelector({placeholder: '__VALUE__', value: element.trim()}))
                        .waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                }
                break;
            case 'term five years':
                await this.dataStep.btnTermFive.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'term ten years':
                await this.dataStep.btnTermTen.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'term has changed':
                await this.checkTerm();
                break;
            case 'benefit info':
                await this.dataStep.benefitTxt.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'features info':
                await this.dataStep.featureTxt.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'interest help icon':
                await this.dataStep.interestIcon.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'cat help icon':
                await this.dataStep.catIcon.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'panel info data':
                await this.dataStep.infoPanel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'data continue button':
                await this._validateElementState(value, this.dataStep.continueBtn);
                break;
            case 'data edit button':
                await (await this.dataStep.editBtn.elements()).value[0].waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'legal header':
                await this.legalStep.title.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'condition info':
                await this.legalStep.infoCondition.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'authorization info':
                await this.legalStep.infoAuthorization.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'accept checkbox':
                await this._validateElementState(value, this.legalStep.chboxAccept);
                break;
            case 'authorize checkbox':
                await this._validateElementState(value, this.legalStep.chboxAuthorize);
                break;
            case 'legal panel info':
                await this.legalStep.infoPanelLegal.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'email in info panel':
                await this.legalStep.emailInPanelInfo.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'legal continue button':
                if (value === 'disabled') {
                    await this.termsAndConditionsStepDisabled.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this._validateElementState(value, this.legalStep.continueBtn);
                }
                break;
            case 'legal edit button':
                await (await this.legalStep.editBtn.elements()).value[0].waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'amount title in summary':
                await this.dataStep.summary.amountTitle.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'summary amount':
                await this.dataStep.summary.summaryAmount.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'monthly payment label in summary':
                await this.dataStep.summary.monthlyPaymentLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'monthly payment in summary':
                await this.dataStep.summary.monthlyPayment.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'term label in summary':
                await this.dataStep.summary.termLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'term in summary':
                await this.dataStep.summary.term.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'credit destination label in summary':
                await this.dataStep.summary.creditDestinationLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'credit destination in summary':
                await this._validateCreditDestinationTextInSummary(value, visibility);
                break;
            case 'commission for hiring label in summary':
                await this.dataStep.summary.commissionForHiringLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'commission for hiring in summary':
                await this.dataStep.summary.commissionForHiring.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'deferred credit authorization commission label in summary':
                await this.dataStep.summary.deferredCreditAuthorizationCommissionLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'deferred credit authorization commission in summary':
                await this.dataStep.summary.deferredCreditAuthorizationCommission.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'annual interest rate label in summary':
                await this.dataStep.summary.annualInterestRateLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'annual interest rate in summary':
                await this.dataStep.summary.annualInterestRate.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'cat label in summary':
                await this.dataStep.summary.catLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'cat in summary':
                await this.dataStep.summary.cat.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'terms accepted icon':
                await this.legalStep.summary.termsAcceptedTxt.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'terms accepted':
                await this.legalStep.summary.termsAcceptedIcon.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'email label':
                await this.legalStep.summary.emailSectionLabel.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'header modal':
                await this.modalInfo.header.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'button right modal':
                await this.modalInfo.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'body text modal':
                await this.modalInfo.additionalElements.bodyText.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'title icon modal':
                await this.modalInfo.additionalElements.titleIcon.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'button accept modal':
                await this.modalInfo.acceptBtn.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'request button':
                await this.requestBtn.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sticky button':
                if(value === 'call me') {
                    await this.dataStep.stickyCallMeBack.waitForAttribute({timeout: config.wait.M, attribute: 'text', value: 'Quiero que me llame un asesor'});
                } else {
                    await  this.dataStep.stickyCallMeBack.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'sticky button terms':
                if(value === 'call me') {
                    await  this.legalStep.stickyCallMeBackTerms.waitForText({text:'Quiero que me llame un asesor', exactMatch:false});
                } else {
                    await  this.legalStep.stickyCallMeBackTerms.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'sticky button confirm':
                if(value === 'call me') {
                    await this.stickyCallMeBackContinue.waitForAttribute({timeout: config.wait.M, attribute: 'text', value: 'Quiero que me llame un asesor'});
                } else {
                    await  this.stickyCallMeBackContinue.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'header token':
                await this.signConnector.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back token':
                await this.signConnector.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button token':
                await this.signConnector.userInputPassword.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button token':
                await this.signConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _acceptLegalCheckboxes() {
        await this.legalStep.title.waitForDisplayed({timeout: config.wait.M});
        for (const chbox of [this.legalStep.chboxAccept, this.legalStep.chboxAuthorize]) {
            await chbox.waitForAnimation({timeout: config.wait.M});
            await chbox.click();
        }
    }

    async _clickLegalEditBtn() {
        await this.waitForElementsExist(this.legalStep.editBtn);
        await (await this.legalStep.editBtn.elements()).value[0].click();
    }

    async interactLeadMortgage({info, edit}={}) {
        switch(info) {
            case 'data step':
                if(edit) {
                    await (await this.dataStep.editBtn.waitForClickable({timeout: config.wait.M})).click();
                    await this.getCreditDestination('remodeling');
                }
                await (await (await this.dataStep.continueBtn.waitForEnabled({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'check step':
                if(!edit) {
                    await this._acceptLegalCheckboxes();
                } else {
                    await this._clickLegalEditBtn();
                }
                break;
            case 'legal step':
                if(!edit) {
                    await this._acceptLegalCheckboxes();
                    await (await this.legalStep.continueBtn.waitForClickable({timeout: config.wait.M})).click();
                } else {
                    await this._clickLegalEditBtn();
                }
                break;
            case 'summary':
                await this.interactLeadMortgage({info: 'data step', edit: false});
                await this.interactLeadMortgage({info: 'legal step', edit: false});
                break;
            case 'request':
                await this.interactLeadMortgage({info: 'summary'});
                await (await this.requestBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Info ${info} is not implemented.`);
        }
    }

    async getCreditDestination(destination) {
        await (await this.dataStep.listDestination.waitForClickable({timeout: config.wait.M})).click();
        let index;
        switch(destination) {
            case 'acquisition':
                index = 1;
                break;
            case 'liquidity':
                index = 2;
                break;
            case 'payment':
                index = 3;
                break;
            case 'remodeling':
                index = 4;
                break;
            case 'land':
                index = 5;
                break;
            default:
                new Error(`The credit destination option '${destination}' is not recognized or implemented.`);
        }
        await (await this.dataStep.optionsDestination.specifySelector({placeholder: '__INDEX__', value: index})
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async clearAmountLead() {
        await (await this.dataStep.inputAmount.waitForClickable({timeout: config.wait.M})).click();
        await (await this.dataStep.clearInputAmount.waitForClickable({timeout: config.wait.M})).click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async setAmountLead(amount) {
        await this.clearAmountLead();
        await (await this.dataStep.inputAmount.waitForClickable({timeout: config.wait.M})).setValue({value: amount});
        await (await this.dataStep.sliderTxt.waitForClickable({timeout: config.wait.M})).click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async enterModal(modal) {
        switch(modal.toLowerCase()) {
            case 'destination offer help':
                await (await this.dataStep.helpIcon.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'hiring help':
                await (await this.dataStep.hiringIcon.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'authorization help':
                await (await this.dataStep.authIcon.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'interest help':
                await (await this.dataStep.interestIcon.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'cat help':
                await (await this.dataStep.catIcon.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'term and conditions':
                await (await this.legalStep.infoCondition.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'authorization credit bureau':
                await (await this.legalStep.infoAuthorization.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The '${modal}' modal is not found between the current options`);
        }
    }

    async closeDialog() {
        await (await this.modalInfo.additionalElements.closeBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async closeSummary() {
        await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async requestOffer() {
        await (await this.requestBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async changeTerm() {
        await(await this.dataStep.sliderTime.waitForEnabled({timeout: config.wait.M})).scrollIntoView();
        await(await this.dataStep.sliderTime.waitForClickable({timeout: config.wait.M})).click({
            x: +1
        });
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.M
        });
    }

    async checkTerm() {
        const currentValue = await this.dataStep.sliderTime.getValue();
        if (currentValue !== global.storage.termInitialValue) {
            console.log('The slider value has changed');
        } else {
            throw new Error(`Slider value "${currentValue}" has not changed from its initial value "${global.storage.termInitialValue}".`);
        }
    }

    async editTerm() {
        await (await (await this.dataStep.editBtn.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
    }

    async simulationRetry(retries = 3) {
        for (let i = 0; i < retries; i++) {
            await (await this.errorDialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'link':
                await this.callMeBackButton.waitForDisplayed({timeout: config.wait.M});
                await this.callMeBackButton.click();
                break;
            case 'header':
                await this.telephoneIcon.waitForClickable({timeout: config.wait.M});
                await this.telephoneIcon.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async _validateCreditDestinationTextInSummary(value, visibility) {
        let text = '';
        switch(value) {
            case 'acquisition':
                text = 'Comprar una casa o departamento';
                break;
            case 'remodeling':
                text = 'Remodelar mi casa';
                break;
            case 'land':
                text = 'Comprar un terreno';
                break;
            case 'liquidity':
                text = 'Préstamo por mi casa';
                break;
            case 'payment':
                text = 'Cambiar mi hipoteca';
                break;
            default:
                new Error(`The credit destination option '${value}' is not recognized or implemented.`);
        }
        await this.dataStep.summary.creditDestination.waitForText({text, timeout: config.wait.M, reverse: visibility === 'not visible'});
    }

    async _validateElementState(value, item) {
        switch (value) {
            case 'enabled':
                await item.waitForEnabled({timeout: config.wait.M});
                break;
            case 'disabled':
                await item.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            case 'checked':
                await item.waitForAttribute({timeout: config.wait.M, attribute: 'checked'});
                break;
            case 'unchecked':
                await item.waitForAttribute({timeout: config.wait.M, attribute: 'checked', reverse: true });
                break;
            default:
                await item.waitForDisplayed({timeout: config.wait.M});
        }
    }

    _generateRegexForValue(value) {
        const { symbol } = localeMXConfig.currencies[localeMXConfig.localCurrency];
        const { thousandsMark, decimalMark, decimals } = localeMXConfig;
        const formattedValue = Number.parseFloat(value).toFixed(decimals).toString();
        const [wholePart, decimalPart] = formattedValue.split('.');
        const regexForThousands = /\B(?=(\d{3})+(?!\d))/g;
        const formattedWholePart = wholePart.replace(regexForThousands, thousandsMark);
        const formattedWithNewlines = `${symbol}${formattedWholePart}${decimalMark}${decimalPart}`;

        const escapedValue = formattedWithNewlines
            .replace(symbol, `\\${symbol}`)
            .replace(thousandsMark, `\\${thousandsMark}`)
            .replace(decimalMark, `\\${decimalMark}`);

        return new RegExp(`^${escapedValue}$`);
    }
}

export default new LeadMortgagePage();
