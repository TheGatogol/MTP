import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('ocLoanRelocation')
class OcLoanRelocation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocLoanRelocation[state="active"]',
            elements: {
                header:'#bbva-feature-loan-relocation-detail',
                input: '[data-tag-name="bbva-form-amount"] input',
                resetAmount: 'div [data-tag-name="bbva-button-default"] [data-tag-name="bbva-type-icon"]',
                errorAmount: 'loan-relocation-input bbva-form-amount[invalid]',
                home: {
                    properties: { root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail' },
                    iWantButton: 'div bbva-button-default.button-one',
                    exitbutton: 'bbva-header-main[variant="modal-initial"] #btn-close [data-tag-name="bbva-type-icon"]',
                    simulation: 'bbva-header-category[text="Simulación"]',
                    benefits: 'bbva-header-category[text="Beneficios"]',
                    workInsurance: 'bbva-header-category[text="Seguro de vida y desempleo"] .title-container [data-tag-name="bbva-core-heading"]',
                    workInsuranceIcon: 'bbva-header-category[text="Seguro de vida y desempleo"] .title-container [data-tag-name="bbva-type-link"]',
                    lifeInsurancetext: 'bbva-header-category[text="Seguro de vida"] .title-container [data-tag-name="bbva-core-heading"]',
                    lifeInsuranceIcon: 'bbva-header-category[text="Seguro de vida"] .title-container [data-tag-name="bbva-type-link"]',
                    interestRateText: 'bbva-header-category[text="Tasas de interés"] .title-container [data-tag-name="bbva-core-heading"]',
                    interestRateIcon: 'bbva-header-category[text="Tasas de interés"] .title-container [data-tag-name="bbva-type-link"]'
                },
                commission: {
                    properties: { root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail' },
                    button: 'bbva-header-category[text="Comisión"] .title-container [data-tag-name="bbva-type-link"]',
                    header: 'loan-relocation-modal-manager bbva-help-modal #helpModalTitle slot [data-tag-name="bbva-type-icon"]',
                    buttonUnderstood: 'loan-relocation-modal-manager bbva-help-modal .modal-footer [data-tag-name="bbva-button-default"][text="Entendido"]',
                    closeButton: 'loan-relocation-modal-manager bbva-help-modal #helpModalHeader #btn-close [data-tag-name="bbva-type-icon"]',
                },
                listCheckLifeInsurance: {
                    properties: {root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail'},
                    checkTerms: '#check-0',
                    checkLiquidate: '#check-1',
                    checkInsurance: '#check-2',
                    checkCreditBureau: '#check-3',
                    checkCreditBureauNormal: '#check-2',
                    creditBureau: '#step-2 div.content div.links [text="Autorización de la consulta de historial en Buró de Crédito"]',
                    newAmount: '#step-1 bbva-type-amount',
                },
                termsAndConditions:{
                    properties: {root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail #step-2'},
                    creditBureau: 'div.content div.links [text="Autorización de la consulta de historial en Buró de Crédito"]',
                    relocationText: '#heading',
                    continueButton: 'div.content bbva-button-default',
                },
                modal:{
                    properties: {root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail loan-relocation-modal-manager bbva-help-modal'},
                    text: '#helpModalHeader bbva-type-text h1',
                    understand: '.modal-footer [data-tag-name="bbva-button-default"][text="Entendido"]',
                    header: '[data-tag-name="bbva-header-main"]',
                    closeModal: '#helpModalHeader #btn-close'
                },
                summaryScreen:{
                    properties: {root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail'},
                    loanRelocation: '#step-1',
                    loanRelocationChangeButton: '#step-1 .header #editButton',
                    terms: '#step-2',
                    hireButton: '#footer  bbva-button-default',
                },
                exitModal:{
                    properties: {root: 'bbva-feature-loan-relocation-mx-spherica #bbva-feature-loan-relocation-detail loan-relocation-modal-manager bbva-help-modal'},
                    text: '#helpModalContent div slot div',
                    exitButton: '.modal-footer [data-tag-name="bbva-button-default"]',
                    cancelButton: '.modal-footer [data-tag-name="bbva-button-default"].link'

                },
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, visibility}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'commission header':
                await this.commission.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'commission understood button':
                await this.commission.buttonUnderstood.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'commission close button':
                await this.commission.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.home.exitbutton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit bureau':
                await this.termsAndConditions.creditBureau.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'relocation header':
                await this.termsAndConditions.relocationText.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'continue button':
                await this.termsAndConditions.continueButton.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'check terms and conditions':
                await this.listCheckLifeInsurance.checkTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check liquidate':
                await this.listCheckLifeInsurance.checkLiquidate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check credit bureau':
                await this.listCheckLifeInsurance.checkCreditBureauNormal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check terms and conditions insurance':
                await this.listCheckLifeInsurance.checkTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check liquidate insurance':
                await this.listCheckLifeInsurance.checkLiquidate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check credit bureau insurance':
                await this.listCheckLifeInsurance.checkCreditBureau.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check insurance':
                await this.listCheckLifeInsurance.checkInsurance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulation text':
                await this.home.simulation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits text':
                await this.home.benefits.scrollIntoView();
                await this.home.benefits.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance text':
                await this.home.lifeInsurancetext.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance icon':
                await this.home.lifeInsuranceIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interest rate text':
                await this.home.interestRateText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interest rate icon':
                await this.home.interestRateIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurace rules':
                await this.modal.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurace understand button':
                await this.modal.understand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interest rate header':
                await this.modal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interest rate understand button':
                await this.modal.understand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary screen relocation':
                await this.summaryScreen.loanRelocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary screen relocation change':
                await this.summaryScreen.loanRelocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary screen terms':
                await this.summaryScreen.terms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary screen terms change':
                await this.summaryScreen.terms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'otp page header':
                await this.signModal.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page exit button':
                await this.signModal.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page image':
                await this.signModal.smsImage.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page icon':
                await this.signModal.smsIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page text':
                await this.signModal.insertSmsLabel.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page input':
                await this.signModal.smsPasswordInputField.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page accept button':
                await this.signModal.smsContinueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page cancel button':
                await this.signModal.requestNewSmsLink.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'credit bureau header':
                await this.modal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit bureau text':
                await this.modal.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal text':
                await this.exitModal.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal cancel button':
                await this.exitModal.cancelButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal exit button':
                await this.exitModal.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount less':
                await this.errorAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new amount':
                await this.listCheckLifeInsurance.newAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmShowData(otp = '11111111') {
        await this.fillOtp(otp);
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.XL});
    }

    async amountLess(option){
        switch (option.toLowerCase()) {
            case 'minimum amount':
                await (await this.resetAmount.waitForClickable({timeout: config.wait.L})).click();
                await (await this.input.waitForClickable({timeout: config.wait.L})).click();
                await this.input.setValue({value: global.user.amountLess});
                break;
            case 'amount exceeded':
                await (await this.resetAmount.waitForClickable({timeout: config.wait.L})).click();
                await (await this.input.waitForClickable({timeout: config.wait.L})).click();
                await this.input.setValue({value: global.user.amountExceeded});
                break;
            case 'new amount':
                await (await this.resetAmount.waitForClickable({timeout: config.wait.L})).click();
                await (await this.input.waitForClickable({timeout: config.wait.L})).click();
                await this.input.setValue({value: global.user.newAmount});
                await this.selectButton('i want');
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async otpScreen(){
        await this.selectButton('summary screen');
        await (await this.summaryScreen.hireButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async selectButton(option){
        switch (option.toLowerCase()) {
            case 'help commission':
                await this.commission.button.scrollIntoView();
                await (await this.commission.button.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'i want':
                await this.home.iWantButton.scrollIntoView();
                await (await this.home.iWantButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'work insurace':
                await this.home.workInsuranceIcon.scrollIntoView();
                await (await this.home.workInsuranceIcon.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'life insurace':
                await this.home.lifeInsuranceIcon.scrollIntoView();
                await (await this.home.lifeInsuranceIcon.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'life insurace close':
                await this.selectButton('life insurace');
                await (await this.modal.closeModal.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'interest rate':
                await this.home.interestRateIcon.scrollIntoView();
                await (await this.home.interestRateIcon.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'interest rate understand':
                await this.selectButton('interest rate');
                await (await this.modal.understand.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'check termins and conditions':
                await this.selectButton('i want');
                await this.listCheckLifeInsurance.checkTerms.scrollIntoView();
                await (await this.listCheckLifeInsurance.checkTerms.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.listCheckLifeInsurance.checkLiquidate.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.listCheckLifeInsurance.checkCreditBureauNormal.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'check termins and conditions insurance':
                await this.selectButton('i want');
                await this.listCheckLifeInsurance.checkTerms.scrollIntoView();
                await (await this.listCheckLifeInsurance.checkTerms.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.listCheckLifeInsurance.checkLiquidate.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.listCheckLifeInsurance.checkInsurance.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.listCheckLifeInsurance.checkCreditBureau.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'credit bureau authorization':
                await this.selectButton('i want');
                await this.listCheckLifeInsurance.creditBureau.scrollIntoView();
                await (await this.listCheckLifeInsurance.creditBureau.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'summary screen':
                await this.selectButton('check termins and conditions insurance');
                await (await this.termsAndConditions.continueButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'summary screen commission':
                await this.selectButton('check termins and conditions');
                await (await this.termsAndConditions.continueButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'exit modal':
                await this.selectButton('check termins and conditions insurance');
                await (await this.home.exitbutton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'cancel process':
                await this.selectButton('exit modal');
                await (await this.exitModal.exitButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'change amount to request': {
                await this.selectButton('summary screen');
                await this.waitForElementsExist(this.summaryScreen.loanRelocationChangeButton, config.wait.L);
                const changeButton = (await this.summaryScreen.loanRelocationChangeButton.elements()).value[0];
                await changeButton.waitForDisplayed({timeout: config.wait.L});
                await changeButton.click();
                break;
            }
            case 'consult terms and conditions':
                await this.selectButton('summary screen');
                await (await this.summaryScreen.termsChange.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }
}

export default new OcLoanRelocation();
