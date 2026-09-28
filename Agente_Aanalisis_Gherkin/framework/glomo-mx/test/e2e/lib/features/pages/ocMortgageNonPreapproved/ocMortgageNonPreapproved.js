import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('ocMortgageNonPreapproved')
class OcMortgageNonPreapproved extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocMortgageNonPreapproved[state="active"]',
            elements: {
                widget: '[data-tag-name="loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx"]',
                closeDocumentNoticePrivacy: '#private-notice-modal[data-tag-name="bbva-help-modal"] #helpModalHeader[text="Aviso de privacidad"] #btn-close',
                closeDocumentCreditBureau: '#credit-history-modal[data-tag-name="bbva-help-modal"] #helpModalHeader[text="Autorización de consulta de historial crediticio"] #btn-close',
                closeDocumentTerms: '#terms-and-conditions-modal[data-tag-name="bbva-help-modal"] #helpModalHeader[text="Términos y condiciones"] #btn-close',
                exitSimulationMortgageButton: '#multistep-modal[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"][text="Cotizar crédito"] [data-id="iconsRight"] #btn-close',
                continueExitModal: '.modals #exit-step-header[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][variant="link"]',
                exitModalSimulation: '.modals #exit-step-header[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="Salir"]',
                buttonExitTooltipCommission: '.modal-header #helpModalHeader[text="Comisión por apertura"] #btn-close',
                buttonExitTooltipYear: '.modal-header #helpModalHeader[text="Tasa de interés ordinaria fija y anual"] #btn-close',
                buttonExitTooltipVat: '.modal-header #helpModalHeader[text="CAT sin IVA"] #btn-close',
                modifyButtonCredit:'#step-0[completed] .header.header-ellipsis:has(+ div) #editButton',
                modifyButtonTerms: '#step-2[completed] .header.header-ellipsis:has(+ div) #editButton',
                modifyButtonDataSource: '#step-1[completed] .header.header-ellipsis:has(+ div) #editButton',
                modalOfferScreen: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="initial-offer"]',
                        additionalElements: {
                            consideration: '.content [data-tag-name="bbva-list-bullet"]',
                            continueButton: '.content [data-tag-name="bbva-button-default"]#continue-initial-offer'
                        }
                    }
                ],
                creditSimulationStep: {
                    properties: {root: '[data-tag-name="credit-simulation"]'},
                    typeCreditButton: '.step-credit-simulation__content-padding .step-credit-simulation__credit-usage-form #button',
                    optionBuyHouse: '[data-tag-name="bbva-form-option"]#buyHouseId',
                    optionChangeMortgage: '[data-tag-name="bbva-form-option"]#changeMortgageId',
                    optionMortgageProperty: '[data-tag-name="bbva-form-option"]#mortgagePropertyId',
                    optionRemodelProperty: '[data-tag-name="bbva-form-option"]#remodelPropertyId',
                    optionBuyLand: '[data-tag-name="bbva-form-option"]#buyLandId',
                    creditSimulationButton: '.step-credit-simulation__content-padding .step-credit-simulation__simulation-type-form #button',
                    optionRequestedAmount: '[data-tag-name="bbva-form-option"]#requestedAmountId',
                    optionInstallmentAmount: '[data-tag-name="bbva-form-option"]#installmentAmountId',
                    optionPropertyValue: '[data-tag-name="bbva-form-option"]#propertyValueId',
                    selectInputTypePeriod: '[data-tag-name="bbva-form-select"][label="Plazo"] #button',
                    optionPeriod: '[data-tag-name="bbva-form-option"][value="__VALUE__"]',
                    inputCost: '.step-credit-simulation__cost-input-form [data-tag-name="bbva-form-amount"] input',
                    clearInputCost: '.step-credit-simulation__cost-input-form [data-tag-name="bbva-form-amount"] [data-tag-name="bbva-button-default"].clear',
                    clearInputIncome: '.step-credit-simulation__income-input-form  [data-tag-name="bbva-form-amount"] [data-tag-name="bbva-button-default"].clear',
                    inputIncome: '.step-credit-simulation__income-input-form [data-tag-name="bbva-form-amount"] input',
                    continueButtonSimulation: '.spacing-button #continue-credit-simulation-button',
                    tableAmortization: '[data-tag-name="bbva-type-link"][text="Ver tabla de amortización"]',
                    tooltipCommission: '.step-credit-simulation__content-padding [data-tag-name="oc-mortgage-list"][right-value="1%"] [data-tag-name="bbva-button-default"][aria-label="Ver Ayuda"]',
                    tooltipInterestYear: '.step-credit-simulation__content-padding [data-tag-name="oc-mortgage-list"][right-value="10.4%"] [data-tag-name="bbva-button-default"][aria-label="Ver Ayuda"]',
                    tooltipVat: '.step-credit-simulation__content-padding [data-tag-name="oc-mortgage-list"][right-value="13.6%"] [data-tag-name="bbva-button-default"][aria-label="Ver Ayuda"]',
                },
                additionalInformationStep: {
                    properties: {root: '[data-tag-name="additional-information"]'},
                    radioButtonEmployee: '[data-tag-name="bbva-form-radio-button"][name="Occupation"] [data-tag-name="bbva-form-radio-button-input"][value="EMPLOYEE"]',
                    radioButtonOther: '[data-tag-name="bbva-form-radio-button"][name="Occupation"] [data-tag-name="bbva-form-radio-button-input"][value="OTHER"]',
                    radioButtonTypeCompany: '[data-tag-name="bbva-form-radio-button"][name="TypeOfCompany"] [data-tag-name="bbva-form-radio-button-input"][value="__TYPE__"]',
                    selectYearsWork: '[data-tag-name="bbva-form-select"][label="Años de antigüedad"]',
                    optionYearFour: '[data-tag-name="bbva-form-option"][value="LESS_THAN_OR_EQUAL_TO_4_YEARS"]',
                    optionYearNine: '[data-tag-name="bbva-form-option"][value="FROM_9_TO_10_YEARS"]',
                    optionYearMoreTen: '[data-tag-name="bbva-form-option"][value="MORE_THAN_10_YEARS"]',
                    selectTypeHouse: '[data-tag-name="bbva-form-select"][label="Tipo de vivienda"]',
                    optionOwn: '[data-tag-name="bbva-form-option"][value="OWN"]',
                    optionRented: '[data-tag-name="bbva-form-option"][value="RENTED"]',
                    optionFamily: '[data-tag-name="bbva-form-option"][value="OF_RELATIVES"]',
                    radioButtonAdvisoryYes: '[data-tag-name="bbva-form-radio-button"][name="Advisory"] [data-tag-name="bbva-form-radio-button-input"][value="YES"]',
                    radioButtonAdvisoryNo: '[data-tag-name="bbva-form-radio-button"][name="Advisory"] [data-tag-name="bbva-form-radio-button-input"][value="NO"]',
                    continueButtonOccupation: '[data-tag-name="bbva-button-default"][text="Continuar"]',
                },
                termsAndConditionsStep: {
                    properties: {root: '[data-tag-name="terms-and-conditions"]'},
                    selectDocumentTerms: '.content-padding [data-tag-name="bbva-type-link"][text="Términos y condiciones"]',
                    selectDocumentNoticePrivacy: '.content-padding [data-tag-name="bbva-type-link"][text="Aviso de privacidad"]',
                    selectDocumentCreditBureau: '.content-padding [data-tag-name="bbva-type-link"][text="Autorización de consulta de historial crediticio"]',
                    checkInformation: '[data-tag-name="bbva-form-checkbox"][name="checked-acept-information"]',
                    checkConsent: '[data-tag-name="bbva-form-checkbox"][name="checked-consent-data-info"]',
                    checkBureau: '[data-tag-name="bbva-form-checkbox"][name="checked-credit-buro"]',
                    continueButtonTerms: '[data-tag-name="bbva-button-default"].terms-and-conditions__continue-button',
                },
                continueSuccess: '.confirm-step [data-tag-name="bbva-button-default"]#oc-mortgage-multistep__continue-button',
                successContentModal: [BbvaHelpModal, {
                    prefix: '.modals',
                    modifiers: ':not([id])',
                    additionalElements: {
                        close: '#helpModalHeader [data-id="iconsRight"] button',
                        headerTitle: '#helpModalHeader .header #text',
                        title: '[data-tag-name="receipt-success"] [data-tag-name="bbva-type-text"] .text',
                        icon: '[data-tag-name="receipt-success"] [data-tag-name="bbva-type-icon"]',
                        amount: '[data-tag-name="receipt-success"] [data-tag-name="bbva-type-amount"]',
                        list: '[data-tag-name="receipt-success"] .content-list [data-tag-name="oc-mortgage-list"]',
                        alert: '[data-tag-name="receipt-success"] .content-notification [data-tag-name="bbva-notification-message"]',
                        sharedButton: '[data-tag-name="receipt-success"] .content-notification [data-tag-name="bbva-button-row"] .list-item:nth-child(1) [data-tag-name="bbva-button-action"]',
                        downloadButton: '[data-tag-name="receipt-success"] .content-notification [data-tag-name="bbva-button-row"] .list-item:nth-child(2) [data-tag-name="bbva-button-action"]',
                    }
                }],
                notApprovedModal: [BbvaHelpModal, {
                    modifiers: '#financialHealthConcern',
                    additionalElements: {
                        content: '.help-modal .modal-main .modal-container .modal-content-wrapper',
                        description: '.modal-content-wrapper',
                    }
                }]
            },
            requiredElements: ['widget']
        });
    }

    async accessOcMortgage() {
        await (await this.modalOfferScreen.additionalElements.continueButton
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _screenValidation({item, value} = {}) {
        const reverseWaitForVisible = value === 'not visible';
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal onboarding img':
                await this.modalOfferScreen.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label onboarding':
                await this.modalOfferScreen.additionalElements.consideration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button onboarding':
                await this.modalOfferScreen.additionalElements.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document terms and condition':
                await this.termsAndConditionsStep.selectDocumentTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document notice privacy':
                await this.termsAndConditionsStep.selectDocumentNoticePrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document credit bureau':
                await this.termsAndConditionsStep.selectDocumentCreditBureau.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type credit button':
                await this.creditSimulationStep
                    .inputCost.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'type payment':
                await this
                    .creditSimulationStep.creditSimulationButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'type period':
                await this
                    .creditSimulationStep.selectInputTypePeriod.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'modify button credit':
                await this.modifyButtonCredit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify button data source':
                await this.modifyButtonDataSource.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify button terms':
                await this.modifyButtonTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success header title':
                await this.successContentModal.additionalElements.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.successContentModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.successContentModal.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success amount':
                await this.successContentModal.additionalElements.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success list':
                await this.successContentModal.additionalElements.list.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success alert':
                await this.successContentModal.additionalElements.alert.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success download button':
                await this.successContentModal.additionalElements.sharedButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success shared button':
                await this.successContentModal.additionalElements.downloadButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close success modal':
                await this.successContentModal.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'not approved modal content':
                await this.notApprovedModal.additionalElements.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'not approved modal title':
                await this.notApprovedModal.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'not approved modal accept button':
                await this.notApprovedModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'not approved modal icon':
                await this.notApprovedModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessSelectTypeCredit({credit}) {
        await (await this.creditSimulationStep.typeCreditButton.waitForDisplayed({timeout: config.wait.M})).click();
        switch (credit.toLowerCase()) {
            case 'buy apartment':
            case 'buy cost apartment':
            case 'buy apartment pay monthly':
                await (await this.creditSimulationStep.optionBuyHouse.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'change my mortgage':
                await (await this.creditSimulationStep.optionChangeMortgage.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'mortgage my property':
                await (await this.creditSimulationStep.optionMortgageProperty.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'remodel my house':
                await (await this.creditSimulationStep.optionRemodelProperty.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'buy land':
                await (await this.creditSimulationStep.optionBuyLand.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${credit} credit is not available reason...`);
        }
    }

    async accessSelectTypePayment({payment}) {
        await (await this.creditSimulationStep.creditSimulationButton.waitForDisplayed({timeout: config.wait.M})).click();
        switch (payment.toLowerCase()) {
            case 'buy property':
                await (await this.creditSimulationStep.optionPropertyValue.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'credit amount':
                await (await this.creditSimulationStep.optionRequestedAmount.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'monthly payment':
                await (await this.creditSimulationStep.optionInstallmentAmount.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${payment} payment is not available reason...`);
        }
    }

    async accessAmountIncome(amount, income) {
        await (await (await this.creditSimulationStep.inputCost.waitForDisplayed({timeout: config.wait.M}))
            .click())
            .setValue({value: amount});

        await (await (await this.creditSimulationStep.inputIncome.waitForDisplayed({timeout: config.wait.M}))
            .click())
            .setValue({value: income});
    }

    async accessSelectTypePeriod(option) {
        await (await this.creditSimulationStep.selectInputTypePeriod.waitForDisplayed({timeout: config.wait.M})).click();
        const button = await this.creditSimulationStep.optionPeriod.specifySelector({placeholder: '__VALUE__', value: option});
        await button.waitForDisplayed({timeout: config.wait.M});
        await button.click();
    }

    async accessSelectTypeOccupation({occupation}) {
        await (await this.creditSimulationStep.continueButtonSimulation.waitForDisplayed({timeout: config.wait.M})).click();
        switch (occupation.toLowerCase()) {
            case 'employee':
                await (await this.additionalInformationStep.radioButtonEmployee.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'other':
                await (await this.additionalInformationStep.radioButtonOther.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${occupation} occupation is not available reason...`);
        }
    }

    async accessSelectTypeBusiness({business}) {
        const button = await this.additionalInformationStep
            .radioButtonTypeCompany.specifySelector({placeholder: '__TYPE__', value: business.toUpperCase()});
        await button.waitForDisplayed({timeout: config.wait.M});
        await button.click();
    }

    async accessYearsWork(number) {
        await (await this.additionalInformationStep.selectYearsWork.waitForDisplayed({timeout: config.wait.M})).click();
        switch (number.toLowerCase()) {
            case '4':
                await (await this.additionalInformationStep.optionYearFour.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case '9':
                await (await this.additionalInformationStep.optionYearNine.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case '10':
                await (await this.additionalInformationStep.optionYearMoreTen.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${number} number is not available reason...`);
        }
    }

    async accessSelectTypeHouse({house}) {
        await this.additionalInformationStep.selectTypeHouse.scrollIntoView({block: 'nearest'});
        await (await this.additionalInformationStep.selectTypeHouse.waitForDisplayed({timeout: config.wait.M})).click();
        switch (house.toLowerCase()) {
            case 'own':
                await (await this.additionalInformationStep.optionOwn.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'rented':
                await (await this.additionalInformationStep.optionRented.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'family':
                await (await this.additionalInformationStep.optionFamily.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${house} house is not available reason...`);
        }
    }

    async accessSelectAdvisory({advisory}) {
        switch (advisory.toLowerCase()) {
            case 'yes':
                await (await this.additionalInformationStep.radioButtonAdvisoryYes.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'no':
                await (await this.additionalInformationStep.radioButtonAdvisoryNo.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${advisory} advisory is not available reason...`);
        }
        await (await this
            .additionalInformationStep.continueButtonOccupation.waitForDisplayed({timeout: config.wait.M})).click();

    }

    async accessSelectDocument(option) {
        switch (option.toLowerCase()) {
            case 'terms and conditions':
                await (await this.termsAndConditionsStep.selectDocumentTerms.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'notice privacy':
                await (await this.termsAndConditionsStep.selectDocumentNoticePrivacy.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'credit bureau':
                await (await this.termsAndConditionsStep.selectDocumentCreditBureau.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${option} option is not available reason...`);
        }
    }

    async accessCloseDocument(option) {
        switch (option.toLowerCase()) {
            case 'terms and conditions':
                await (await this.closeDocumentTerms.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'notice privacy':
                await (await this.closeDocumentNoticePrivacy.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'credit bureau':
                await (await this.closeDocumentCreditBureau.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${option} option is not available reason...`);
        }
    }

    async selectCheckTerms() {
        await (await this.termsAndConditionsStep.checkInformation.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.termsAndConditionsStep.checkConsent.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.termsAndConditionsStep.checkBureau.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.termsAndConditionsStep.continueButtonTerms.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async accessScreenSuccess() {
        await (await this.continueSuccess.waitForDisplayed({timeout: config.wait.M})).click({ useActions: false, scrollOptions: { block: 'nearest' }});
    }

    async accessCloseSuccess() {
        await (await this.successContentModal.additionalElements.close.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async insertAmount(amount) {
        await (await (await this.creditSimulationStep.inputCost.waitForDisplayed({timeout: config.wait.M}))
            .click())
            .setValue({value: amount});
    }

    async clearInputAmount() {
        await (await this.creditSimulationStep
            .clearInputCost.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async changeInputCost() {
        await (await this.modifyButtonCredit.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.creditSimulationStep.clearInputIncome.waitForDisplayed({timeout: config.wait.M})).click();
        await this.creditSimulationStep
            .inputIncome.setValue({value: global.user.incomeAmount});
        await (await this.creditSimulationStep
            .continueButtonSimulation.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async changeTypeBusiness() {
        await (await this.modifyButtonDataSource.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.additionalInformationStep.continueButtonOccupation.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async changeTermsAndConditions() {
        await (await this.modifyButtonTerms.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.termsAndConditionsStep.continueButtonTerms.waitForDisplayed({timeout: config.wait.M})).click();
    }
    async exitSimulationMortgage() {
        await (await this.exitSimulationMortgageButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async exitModalSimulationMortgage() {
        await (await this.exitModalSimulation.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async continueProcessMortgage() {
        await (await this.continueExitModal.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessTooltipFeesAndCost({tooltip}) {
        switch (tooltip.toLowerCase()) {
            case 'opening commission':
                await (await this.creditSimulationStep.tooltipCommission.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.buttonExitTooltipCommission.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'interest rate':
                await (await this.creditSimulationStep.tooltipInterestYear.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.buttonExitTooltipYear.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'cat without vat':
                await (await this.creditSimulationStep.tooltipVat.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.buttonExitTooltipVat.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${tooltip} tooltip is not available reason...`);

        }
    }

    async setPaymentSimulation() {
        const amortizationPlansResponse = global.user.amortizationPlans;
        await this.widget.waitForDisplayed({timeout: config.wait.M});
        await this.widget.execute({
            script: (data) => this.amortizationPlansSimulate = data, args: [amortizationPlansResponse]
        });
    }

    async setDigitalCertificate() {
        const digitalCertificatesResponse = global.user.digitalCertificate;
        await this.widget.waitForDisplayed({timeout: config.wait.M});
        await this.widget.execute({
            script: (data) => this.digitalCertificates = data, args: [digitalCertificatesResponse]
        });
    }

    async setMaxRetries() {
        await this.widget.waitForDisplayed({timeout: config.wait.M});
        await this.widget.execute({
            script: () => this.maxAllowedRetries = 0,
        });
    }
}
export default new OcMortgageNonPreapproved();
