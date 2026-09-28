import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
@page('carInsurance')
class CarInsurance extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-carInsurance[state="active"]',
            elements: {
                carInsurance: {
                    properties: { root: '[data-tag-name="insurance-origination-oc-car-insurance-remote-banker-mx"]' },
                    page: {
                        properties: { root: '[data-tag-name="car-insurance-remote-banker-contract-page"]' },
                        header: '[data-tag-name="bbva-header-main"]',
                        headerText: '[data-tag-name="bbva-header-main"][text="Seguro de auto"]',
                        headerLeave: '[data-tag-name="bbva-header-main"] #btn-close',
                        multiStep: {
                            properties: { root: '[data-tag-name="bbva-transition-container"]' },
                            paymentMethodsStepTitle: '#step-2 #heading',
                            termsAndConditionsStepTitle: '#step-3 #heading',
                            continueWithTheHiring: '.confirm-step [data-tag-name="bbva-button-default"]',
                            paymentMethodSummaryChangePaymentMethod: 'car-insurance-remote-banker-summary-view',
                            quoteInfoStep: {
                                properties: { root: '[data-tag-name="car-insurance-remote-banker-custom-secure-content"]' },
                                quoteInfoStepContinue: '[data-tag-name="bbva-button-default"]',
                                showAllCoverages: '#required-coverage-accordion',
                                coverages: '[data-tag-name="bbva-expandable-accordion"] [text="__COVERAGE__"]',
                                coverageIncluided: '#required-coverage-accordion',
                                additionalCoverage: '#additional-coverage-accordion',
                            },
                            paymentMethodStep: {
                                properties: { root: '[data-tag-name="car-insurance-payment-methods-content"]' },
                                paymentMethodSelect: 'bbva-type-text[text="Mis cuentas"]',
                                paymentMethodCardsSelect: 'bbva-type-text[text="Mis tarjetas"]',
                                paymentMethodSeeAllLink: 'bbva-type-link',
                                paymentMethodMyAccountsText: 'bbva-type-text[text="Mis cuentas"]',
                                paymentMethodMyCardsText: 'bbva-type-text[text="Mis tarjetas"]',
                                paymentMethodAccount: '[data-tag-name="car-insurance-remote-banker-list-account"] [role="button"]',
                            },
                            termsAndConditionsStep: {
                                properties: { root: '[data-tag-name="car-insurance-terms-and-conditions-content"]' },
                                termsAndConditionsPdfFile: '#terms-and-conditions-file',
                                termsAndConditionsPrivacyNotice: '#privacy-notice-modal',
                                termsAndConditionsCheckTrueInformation: 'bbva-form-checkbox[label*="Confirmo que mi información es verídica"]',
                                termsAndConditionsCheckReadAndAccept: 'bbva-form-checkbox[label*="Leí y acepto los Términos y condiciones del contrato del Seguro de Auto"]',
                                termsAndConditionsPersonalData: 'bbva-form-checkbox[label*="Autorizo a BBVA Seguros, el tratamiento de mis datos personales"]',
                                termsAndConditionsCheckAuthorizeFirstPayment: 'bbva-form-checkbox[label*="Autorizo un primer pago"]',
                                termsAndConditionsCheckReceiveDocuments: 'bbva-form-checkbox[label*="Acepto recibir los documentos de la contratación en este correo"]',
                                termsAndConditionsContinue: '[data-tag-name="bbva-button-default"]',
                            },
                            quoteSummaryStep: {
                                properties: { root: '#step-1' },
                                summary: '[data-tag-name="car-insurance-custom-secure-summary"]',
                            },
                            paymentsMethodsSummaryStep: {
                                properties: { root: '#step-2' },
                                summary: '[data-tag-name="car-insurance-payment-methods-summary"]',
                            },
                        }
                    }
                },
                paymentMethodsModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="car-insurance-remote-banker-third-level-modal"]',
                        additionalElements: {
                            paymentMethodsHeader: '#helpModalHeader[data-tag-name="bbva-header-main"]',
                            paymentMethodsListCard: 'car-insurance-remote-banker-list-card',
                            paymentMethodsListAccount: 'car-insurance-remote-banker-list-account',
                            paymentMethodsUnderstood: '#helpModalHeader #btn-close',
                        }
                    }
                ],
                successHiringModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="car-insurance-remote-banker-success-page"]',
                        additionalElements: {
                            hiringHeading: '[class="panel-title"]',
                            hiringHeadingDate: '[class="panel-heading-text"]',
                            hiringHeadingText: '#helpModalHeader',
                            hiringHeadingAmount: '[data-tag-name="bbva-type-amount"]',
                            hiringOperations: '[data-tag-name="bbva-type-text"][text="Primer pago"]',
                            hiringOperationsHeader: '[data-tag-name="bbva-type-text"][text="Producto"]',
                            hiringOperationsList: '[class="panel-operations"]',
                            notificationsMessage: '[class="body-content"]',
                            sharedReceipt: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                            hiringExit: '#helpModalHeader #btn-close',
                        }
                    }
                ],
                leaveHiringModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="car-insurance-remote-banker-leave-hiring-modal"]'
                    }
                ],
                leaveHiringModalTitleText: '[data-tag-name="car-insurance-remote-banker-leave-hiring-modal"] bbva-help-modal[title-text="__TEXT__"]',
                leaveHiringModalBodyText: '[data-tag-name="car-insurance-remote-banker-leave-hiring-modal"] bbva-help-modal[body-text="__TEXT__"]',
                leaveHiringModalButtonText: '[data-tag-name="car-insurance-remote-banker-leave-hiring-modal"] bbva-help-modal[button-text="__TEXT__"]',
                leaveHiringModalLinkText: '[data-tag-name="car-insurance-remote-banker-leave-hiring-modal"] bbva-help-modal[link-text="__TEXT__"]',
                notFundsModalExit: '[data-tag-name="car-insurance-remote-banker-quotations-errors-modal"] [data-tag-name="bbva-help-modal"] [variant="link"]',
            },
            requiredElements: [
                'carInsurance'
            ],
        });
    }

    async _screenValidation({item, value}) {
        const placeHolder = {
            'you are about to leave': 'Estás a punto de salir',
            'leave warning modal body': 'Puedes retomar tu contratación hasta las 23:59 h de hoy. Si deseas editarla, contacta a tu asesor de 9:00 a 17:30 h.',
            'exit': 'Salir',
            'go back': 'Regresar'
        }[value];
        switch (item.toLowerCase()) {
            case 'header':
                await this.carInsurance.page.header.waitForDisplayed();
                break;
            case 'header text':
                await this.carInsurance.page.headerText.waitForDisplayed();
                break;
            case 'header close':
                await this.carInsurance.page.headerLeave.waitForDisplayed();
                break;
            case 'coverage list':
                await this.carInsurance.page.multiStep.quoteInfoStep.coverageIncluided.waitForDisplayed();
                break;
            case 'show all coverages':
                await this.carInsurance.page.multiStep.quoteInfoStep.showAllCoverages.waitForDisplayed();
                break;
            case 'included coverages':
                await this.carInsurance.page.multiStep.quoteInfoStep.coverages
                    .specifySelector({placeholder: '__COVERAGE__', value: 'Incluidas'})
                    .waitForDisplayed();
                break;
            case 'additional coverages':
                await this.carInsurance.page.multiStep.quoteInfoStep.coverages
                    .specifySelector({placeholder: '__COVERAGE__', value: 'Adicionales'})
                    .waitForDisplayed();
                await this.carInsurance.page.multiStep.quoteInfoStep.additionalCoverage.waitForDisplayed();
                break;
            case 'payment methods modal':
                await this.paymentMethodsModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods header text':
                await this.paymentMethodsModal.additionalElements.paymentMethodsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods header':
                await this.paymentMethodsModal.additionalElements.paymentMethodsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods category cards':
                await this.paymentMethodsModal.additionalElements.paymentMethodsListCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods list card':
                await this.paymentMethodsModal.additionalElements.paymentMethodsListCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods list account':
                await this.paymentMethodsModal.additionalElements.paymentMethodsListAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods my accounts text':
                await this.carInsurance.page.multiStep.paymentMethodStep.paymentMethodMyAccountsText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods my cards text':
                await this.carInsurance.page.multiStep.paymentMethodStep.paymentMethodMyCardsText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods understood':
                await this.paymentMethodsModal.additionalElements.paymentMethodsUnderstood.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success hiring modal':
                await this.successHiringModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring success heading':
                await this.successHiringModal.additionalElements.hiringHeading.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring heading date':
                await this.successHiringModal.additionalElements.hiringHeadingDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring heading text':
                await this.successHiringModal.additionalElements.hiringHeadingText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring heading amount':
                await this.successHiringModal.additionalElements.hiringHeadingAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring operations':
                await this.successHiringModal.additionalElements.hiringOperations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring operations header':
                await this.successHiringModal.additionalElements.hiringOperationsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring operations list':
                await this.successHiringModal.additionalElements.hiringOperationsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notifications message':
                await this.successHiringModal.additionalElements.notificationsMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shared receipt':
                await this.successHiringModal.additionalElements.sharedReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring success exit':
                await this.successHiringModal.additionalElements.hiringExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quote summary step':
                await this.carInsurance.page.multiStep.quoteSummaryStep.summary.waitForDisplayed();
                break;
            case 'payments summary step':
                await this.carInsurance.page.multiStep.paymentsMethodsSummaryStep.summary.waitForDisplayed();
                break;
            case 'payment method summary change payment method':
                await this.carInsurance.page.multiStep.paymentMethodSummaryChangePaymentMethod.waitForDisplayed();
                break;
            case 'terms and conditions summary step':
                await this.carInsurance.page.multiStep.continueWithTheHiring.waitForDisplayed();
                break;
            case 'terms and conditions step title':
                await this.carInsurance.page.multiStep.termsAndConditionsStepTitle.waitForDisplayed();
                break;
            case 'terms and conditions pdf file':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsPdfFile.waitForDisplayed();
                break;
            case 'terms and conditions privacy notice':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsPrivacyNotice.waitForDisplayed();
                break;
            case 'terms and conditions check true information':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckTrueInformation.waitForDisplayed();
                break;
            case 'terms and conditions check read and accept':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckReadAndAccept.waitForDisplayed();
                break;
            case 'terms and conditions personal data':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsPersonalData.waitForDisplayed();
                break;
            case 'terms and conditions check authorize first payment':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckAuthorizeFirstPayment.waitForDisplayed();
                break;
            case 'terms and conditions check receive documents':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckReceiveDocuments.waitForDisplayed();
                break;
            case 'terms and conditions continue':
                await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsContinue.waitForDisplayed();
                break;
            case 'leave hiring modal':
                await this.leaveHiringModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'leave hiring modal title':
                await this.leaveHiringModalTitleText
                    .specifySelector({placeholder: '__TEXT__', value: placeHolder})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'leave hiring modal close':
                await this.leaveHiringModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'leave hiring modal body':
                await this.leaveHiringModalBodyText
                    .specifySelector({placeholder: '__TEXT__', value: placeHolder})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'leave hiring modal exit button':
                await this.leaveHiringModalButtonText
                    .specifySelector({placeholder: '__TEXT__', value: placeHolder})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'leave hiring modal return link':
                await this.leaveHiringModalLinkText
                    .specifySelector({placeholder: '__TEXT__', value: placeHolder})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'leave hiring modal exit':
                await this.leaveHiringModal.acceptBtn.waitForText({text: placeHolder, timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: `${item}`, args: arguments[0]});
        }
    }

    async openCoveragesList() {
        await this.carInsurance.page.multiStep.quoteInfoStep.coverageIncluided.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.quoteInfoStep.coverageIncluided.click();
    }

    async continueToSection(section) {
        switch (section) {
            case 'payments methods':
                await this.continueToPaymentMethods();
                break;
            case 'terms and conditions':
                await this.continueToTermsAndConditions();
                break;
            default:
                throw new Error(`The option: ${section} is not implemented`);
        }
    }

    async continueToAction(action) {
        switch (action) {
            case 'accept all terms and conditions':
                await this.acceptTermsAndConditions();
                break;
            case 'open payment methods modal':
                await this.openPaymentMethodsModal();
                break;
            case 'payment methods labels':
                await this.validatePaymentMethodsLabels();
                break;
            case 'open payment methods modal only accounts':
                await this.openPaymentMethodsModalOnlyAccounts();
                break;
            case 'cancel':
                await this.cancelContract();
                break;
            case 'completed':
                await this.continueToHiring();
                break;
            case 'open coverage list':
                await this.openCoveragesList();
                break;
            default:
                throw new Error(`The option: ${action} is not implemented`);
        }
    }

    async continueToPaymentMethods() {
        await this.carInsurance.page.multiStep.quoteInfoStep.quoteInfoStepContinue.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.quoteInfoStep.quoteInfoStepContinue.click();
    }

    async openPaymentMethodsModal() {
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForAnimation({timeout: config.wait.M});
        const paymentStep = this.carInsurance.page.multiStep.paymentMethodStep;
        await paymentStep.paymentMethodCardsSelect.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentMethodCardsSelect.click();
        await paymentStep.paymentMethodSeeAllLink.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentMethodSeeAllLink.click({timeout: config.wait.M});
    }

    async openPaymentMethodsModalOnlyAccounts() {
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForDisplayed({timeout: config.wait.M});
        const paymentStep = this.carInsurance.page.multiStep.paymentMethodStep;
        await paymentStep.paymentMethodSelect.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentMethodSelect.click();
        await paymentStep.paymentMethodSeeAllLink.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentMethodSeeAllLink.click({timeout: config.wait.M});
    }

    async validatePaymentMethodsLabels() {
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForAnimation({timeout: config.wait.M});
        const paymentStep = this.carInsurance.page.multiStep.paymentMethodStep;

        await paymentStep.paymentMethodSelect.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentMethodSelect.click();
        await paymentStep.paymentMethodCardsSelect.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentMethodCardsSelect.click();
    }

    async continueToTermsAndConditions() {
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.paymentMethodsStepTitle.waitForAnimation({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.paymentMethodStep.paymentMethodSelect.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.paymentMethodStep.paymentMethodSelect.click();
        await this.carInsurance.page.multiStep.paymentMethodStep.paymentMethodAccount.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.paymentMethodStep.paymentMethodAccount.click();
    }

    async acceptTermsAndConditions() {
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckTrueInformation.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckTrueInformation.click();
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckReadAndAccept.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckReadAndAccept.click();
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsPersonalData.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsPersonalData.click();
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckAuthorizeFirstPayment.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckAuthorizeFirstPayment.click();
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckReceiveDocuments.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsCheckReceiveDocuments.click();
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsContinue.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.termsAndConditionsStep.termsAndConditionsContinue.click();
    }

    async continueToHiring() {
        await this.completeToSummary();
        await this.fillOtp('12345678');
    }

    async completeToSummary() {
        await this.carInsurance.page.multiStep.continueWithTheHiring.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.multiStep.continueWithTheHiring.click();
    }

    async cancelContract() {
        await this.carInsurance.page.headerLeave.waitForDisplayed({timeout: config.wait.M});
        await this.carInsurance.page.headerLeave.click();
    }

    async exitFromErrorModal() {
        await this.notFundsModalExit.waitForDisplayed({timeout: config.wait.M});
        await this.notFundsModalExit.click();
    }
}
export default new CarInsurance();
