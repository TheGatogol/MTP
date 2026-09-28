import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('lifeInsurance')
class LifeInsurance extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-lifeInsurance[state="active"]',
            elements: {
                lifeInsurance: {
                    properties: { root: '[data-tag-name="insurance-origination-oc-life-insurance-remote-banker-mx"]' },
                    page: {
                        properties: { root: '[data-tag-name="life-insurance-remote-banker-multistep-page"]' },
                        header: '[data-tag-name="bbva-header-main"]',
                        headerText: '[data-tag-name="bbva-header-main"][text="__HEADER__"]',
                        headerLeave: '[data-tag-name="bbva-header-main"] #btn-close',
                        multistep: {
                            lifeInsuranceMicroIllustration: '[data-tag-name="bbva-clip-microillustration"]',
                            quoteStepTitle: '.blue-header-title',
                            paymentMethodsStepTitle: '[data-tag-name="life-insurance-payment-method-step"]',
                            termsAndConditionsStepTitle: '[data-tag-name="life-insurance-terms-and-conditions-step"]',
                            continueWithTheHiring: '.summary-view [data-tag-name="bbva-button-default"]',
                            paymentMethodSummaryChangePaymentMethod: '.summary-view',
                            termsAndConditionsSummaryStep: '#life-insurance-terms-and-conditions .terms-summary-container',
                            quoteInfoStep: {
                                properties: { root: '[data-tag-name="life-insurance-quote-info-step"]' },
                                beneficiariesList: '[data-tag-name="life-insurance-beneficiaries-list"]',
                                coverageList: '[data-tag-name="life-insurance-coverages-list"]',
                                showAllCoverages: '[data-tag-name="life-insurance-coverages-list"] #included-accordion',
                                additionalCoverages: '[data-tag-name="life-insurance-coverages-list"] #additional-accordion',
                                coverageItem: '[data-tag-name="bbva-expandable-accordion"] [text="__COVERAGE__"]',
                                couponClip: '[text="Coupon applied"], [text="Cupón aplicado"]',
                                quoteInfoStepContinue: '[data-tag-name="bbva-button-default"]',
                                dollarExchangeText: 'bbva-notification-message[variant="default"]',
                                dollarExchangeAmount: '[data-tag-name="bbva-type-amount"]',
                                dollarExchangeMessage: '[data-tag-name="bbva-notification-message"]',
                            },
                            quoteSummaryStep: {
                                properties: { root: '#life-insurance-quote-info' },
                                summary: '[data-tag-name="life-insurance-quote-info-summary-step"]',
                                quoteSummaryFrequencyPayment: '[data-tag-name="life-insurance-quote-info-summary-step"] .frequency-payment-type',
                                quoteSummaryBeneficiariesList: '[data-tag-name="life-insurance-quote-info-summary-step"] [data-tag-name="life-insurance-beneficiaries-list"]',
                                quoteSummaryCouponClip: '[data-tag-name="life-insurance-quote-info-summary-step"] .coupon-applied',
                            },
                            paymentMethodStep: {
                                properties: { root: '[data-tag-name="life-insurance-payment-method-step"]' },
                                accountsShowAll: '#my-accounts-accordion [data-tag-name="bbva-link"], #my-accounts-accordion [data-tag-name="bbva-type-link"]',
                                paymentAccordionAccounts: '#my-accounts-accordion',
                                paymentMethod: '[data-tag-name="life-insurance-payment-method"][product-number="__NUMBER__"] .product-content',
                            },
                            paymentMethodSummaryStep: {
                                properties: { root: '#life-insurance-payment-method' },
                                paymentsSummaryPaymentMethod: '[data-tag-name="life-insurance-payment-method"] .product',
                            },
                            termsAndConditionsStep: {
                                properties: { root: '[data-tag-name="life-insurance-terms-and-conditions-step"]' },
                                termsAndConditionsPdfFile: '.file-container [data-tag-name="bbva-type-link"][icon="spherica:pdf"]',
                                termsAndConditionsPrivacyNotice: '.file-container [data-tag-name="bbva-type-link"][icon="spherica:document"]',
                                termsAndConditionsCheckTrueInformation: '#confirmation-of-information',
                                termsAndConditionsCheckReadAndAccept: '#read-and-accepted',
                                termsAndConditionsPersonalData: '#authorize-use-of-data',
                                termsAndConditionsCheckAuthorizeFirstPayment: '#authorize-payments',
                                termsAndConditionsCheckReceiveDocuments: '#authorize-receiving-documents',
                                termsAndConditionsNotificationMessage: '[data-tag-name="bbva-notification-message"]',
                                termsAndConditionsContinue: '#termsAndConditionsContinue'
                            }
                        },
                    }
                },
                privacyModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="life-insurance-remote-banker-generic-modal"]',
                        additionalElements: {
                            privacyModalExitLink: '[variant="link"]',
                        }
                    }
                ],
                warningModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="life-insurance-remote-banker-generic-modal"]',
                        additionalElements: {
                            warningModalTitle: '[data-tag-name="bbva-header-main"]',
                            warningModalBackButton: '[data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                paymentMethodsModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="life-insurance-remote-banker-payment-methods-modal"]',
                        additionalElements: {
                            paymentMethodsHeader: '[data-tag-name="bbva-header-main"]',
                            paymentMethodsCategory: '#helpModalHeader[text="__CATEGORY__"]',
                            paymentMethodsCardList: '[data-tag-name="life-insurance-payment-method"][product-type="CARD"]',
                            paymentMethodsAnyList: '[data-tag-name="life-insurance-payment-method"]',
                            paymentMethodsUnderstood: '#helpModalHeader #btn-close',
                        }
                    }
                ],
                successHiringModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="life-insurance-remote-banker-success-hiring-modal"]',
                        additionalElements: {
                            hiringHeading: '.panel-heading-text',
                            hiringHeadingText: '#helpModalHeader',
                            hiringHeadingAmount: '[data-tag-name="bbva-type-amount"]',
                            hiringOperations: '.panel-operations',
                            notificationsMessage: '[data-tag-name="bbva-notification-message"]',
                            sharedReceipt: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                            sharedReceiptText: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"]',
                            hiringExit: '#helpModalHeader #btn-close',
                        }
                    }
                ]
            },
            requiredElements: [
                'lifeInsurance'
            ],
        });
    }

    async _screenValidation({item, value}) {
        const placeHolder = {
            'accounts': 'Cuentas',
            'cards': 'Tarjetas',
            'my accounts': 'Mis cuentas',
            'my cards': 'Mis tarjetas',
            'successful hiring': 'Contratación exitosa',
            'summary data': 'Resumen de los datos',
            'share': 'Compartir',
            'life insurance': 'Seguro de vida',
            'you are about to leave': 'Estas a punto de salir',
            'exit': 'Salir',
            'go back': 'Regresar',
            'credit card number': global.user.products.lifeInsurance.card,
            'account number': global.user.products.lifeInsurance.account,
        }[value];
        switch (item.toLowerCase()) {
            case 'header':
                await this.lifeInsurance.page.header.waitForDisplayed();
                break;
            case 'header text':
                await this.lifeInsurance.page.headerText
                    .specifySelector({placeholder: '__HEADER__', value: placeHolder})
                    .waitForDisplayed();
                break;
            case 'micro illustration':
                await this.lifeInsurance.page.multistep.lifeInsuranceMicroIllustration.waitForDisplayed();
                break;
            case 'quote step title':
                await this.lifeInsurance.page.multistep.quoteStepTitle.waitForDisplayed();
                break;
            case 'beneficiaries list':
                await this.lifeInsurance.page.multistep.quoteInfoStep.beneficiariesList.waitForDisplayed();
                break;
            case 'coverage list':
                await this.lifeInsurance.page.multistep.quoteInfoStep.coverageList.waitForDisplayed();
                break;
            case 'show all coverages':
                await this.lifeInsurance.page.multistep.quoteInfoStep.showAllCoverages.waitForDisplayed();
                break;
            case 'included':
                await this.lifeInsurance.page.multistep.quoteInfoStep.coverageItem
                    .specifySelector({placeholder: '__COVERAGE__', value: 'Incluidas'})
                    .waitForDisplayed();
                break;
            case 'death benefit':
                await this.lifeInsurance.page.multistep.quoteInfoStep.coverageItem
                    .specifySelector({placeholder: '__COVERAGE__', value: 'Fallecimiento'})
                    .waitForDisplayed();
                break;
            case 'additional':
                await this.lifeInsurance.page.multistep.quoteInfoStep.additionalCoverages.waitForDisplayed();
                break;
            case 'accidental death':
                await this.lifeInsurance.page.multistep.quoteInfoStep.coverageItem
                    .specifySelector({placeholder: '__COVERAGE__', value: 'Muerte accidental'})
                    .waitForDisplayed();
                break;
            case 'coupon clip':
                await this.lifeInsurance.page.multistep.quoteInfoStep.couponClip.waitForDisplayed();
                break;
            case 'quote info step continue':
                await this.lifeInsurance.page.multistep.quoteInfoStep.quoteInfoStepContinue.waitForDisplayed();
                break;
            case 'exchange rate text':
                await this.lifeInsurance.page.multistep.quoteInfoStep.dollarExchangeText.waitForDisplayed();
                break;
            case 'exchange rate amount':
                await this.lifeInsurance.page.multistep.quoteInfoStep.dollarExchangeAmount.waitForDisplayed();
                break;
            case 'exchange rate message':
                await this.lifeInsurance.page.multistep.quoteInfoStep.dollarExchangeMessage.waitForDisplayed();
                break;
            case 'payment method':
                await this.lifeInsurance.page.multistep.paymentMethodStep.paymentMethod.specifySelector({placeholder: '__NUMBER__', value: placeHolder})
                    .waitForDisplayed();
                break;
            case 'terms and conditions step title':
                await this.lifeInsurance.page.multistep.termsAndConditionsStepTitle.waitForDisplayed();
                break;
            case 'terms and conditions pdf file':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsPdfFile.waitForDisplayed();
                break;
            case 'terms and conditions privacy notice':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsPrivacyNotice.waitForDisplayed();
                break;
            case 'terms and conditions check true information':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckTrueInformation.waitForDisplayed();
                break;
            case 'terms and conditions check read and accept':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckReadAndAccept.waitForDisplayed();
                break;
            case 'terms and conditions personal data':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsPersonalData.waitForDisplayed();
                break;
            case 'terms and conditions check authorize first payment':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckAuthorizeFirstPayment.waitForDisplayed();
                break;
            case 'terms and conditions check receive documents':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckReceiveDocuments.waitForDisplayed();
                break;
            case 'terms and conditions notification message':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsNotificationMessage.waitForDisplayed();
                break;
            case 'terms and conditions continue':
                await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsContinue.waitForDisplayed();
                break;
            case 'continue with the hiring':
                await this.lifeInsurance.page.multistep.continueWithTheHiring.waitForDisplayed();
                break;
            case 'privacy modal':
                await this.privacyModal.waitForDisplayed();
                break;
            case 'payment methods modal':
                await this.paymentMethodsModal.waitForDisplayed();
                break;
            case 'payment methods header':
                await this.paymentMethodsModal.additionalElements.paymentMethodsHeader.waitForDisplayed();
                break;
            case 'payment methods cards category':
                await this.paymentMethodsModal.additionalElements.paymentMethodsCategory.specifySelector({placeholder: '__CATEGORY__', value: placeHolder})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods accounts category':
                await this.paymentMethodsModal.additionalElements.paymentMethodsCategory.specifySelector({placeholder: '__CATEGORY__', value: placeHolder})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment methods more than one card':
                await this.paymentMethodsModal.additionalElements.paymentMethodsCardList.waitForDisplayed();
                break;
            case 'payment methods more than one account':
                await this.paymentMethodsModal.additionalElements.paymentMethodsAnyList.waitForDisplayed();
                break;
            case 'payment methods understood':
                await this.paymentMethodsModal.additionalElements.paymentMethodsUnderstood.waitForDisplayed();
                break;
            case 'leave warning modal':
                await this.warningModal.waitForDisplayed();
                break;
            case 'leave warning modal title':
                await this.warningModal.additionalElements.warningModalTitle.waitForDisplayed();
                break;
            case 'leave warning modal exit button':
                await this.warningModal.acceptBtn.waitForDisplayed();
                break;
            case 'leave warning modal back button':
                await this.warningModal.additionalElements.warningModalBackButton.waitForDisplayed();
                break;
            case 'success hiring modal':
                await this.successHiringModal.waitForDisplayed();
                break;
            case 'hiring success heading text':
                await this.successHiringModal.additionalElements.hiringHeading.waitForDisplayed();
                break;
            case 'hiring heading text':
                await this.successHiringModal.additionalElements.hiringHeadingText.waitForDisplayed();
                break;
            case 'hiring heading amount':
                await this.successHiringModal.additionalElements.hiringHeadingAmount.waitForDisplayed();
                break;
            case 'hiring operations text':
                await this.successHiringModal.additionalElements.hiringOperations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notifications message':
                await this.successHiringModal.waitForDisplayed({timeout: config.wait.M});
                await this.successHiringModal.additionalElements.notificationsMessage.scrollIntoView();
                await this.successHiringModal.additionalElements.notificationsMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shared receipt':
                await this.successHiringModal.waitForDisplayed({timeout: config.wait.M});
                await this.successHiringModal.additionalElements.sharedReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shared receipt text':
                await this.successHiringModal.waitForDisplayed({timeout: config.wait.M});
                await this.successHiringModal.additionalElements.sharedReceiptText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring success exit':
                await this.successHiringModal.additionalElements.hiringExit.waitForDisplayed();
                break;
            case 'quote summary step':
                await this.lifeInsurance.page.multistep.quoteSummaryStep.summary.waitForDisplayed();
                break;
            case 'quote summary frequency payment':
                await this.lifeInsurance.page.multistep.quoteSummaryStep.quoteSummaryFrequencyPayment.waitForDisplayed();
                break;
            case 'quote summary beneficiaries list':
                await this.lifeInsurance.page.multistep.quoteSummaryStep.quoteSummaryBeneficiariesList.waitForDisplayed();
                break;
            case 'quote summary coupon clip':
                await this.lifeInsurance.page.multistep.quoteSummaryStep.quoteSummaryCouponClip.waitForDisplayed();
                break;
            case 'payments summary payment method':
                await this.lifeInsurance.page.multistep.paymentMethodSummaryStep.paymentsSummaryPaymentMethod.waitForDisplayed();
                break;
            case 'payment method summary change payment method':
                await this.lifeInsurance.page.multistep.paymentMethodSummaryChangePaymentMethod.waitForDisplayed();
                break;
            case 'terms and conditions summary step':
                await this.lifeInsurance.page.multistep.termsAndConditionsSummaryStep.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: `${item}`, args: arguments[0]});
        }
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
            case 'change payment method':
                await this.changePaymentMethod();
                break;
            case 'cancel':
                await this.openCancelModal();
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
        await this.lifeInsurance.page.multistep.quoteInfoStep.quoteInfoStepContinue.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.quoteInfoStep.quoteInfoStepContinue.click();
    }

    async openPaymentMethodsModal() {
        const paymentStep = this.lifeInsurance.page.multistep.paymentMethodStep;
        await paymentStep.paymentAccordionAccounts.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentAccordionAccounts.click();
        await paymentStep.accountsShowAll.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.accountsShowAll.click();
    }

    async continueToTermsAndConditions() {
        const paymentStep = this.lifeInsurance.page.multistep.paymentMethodStep;
        await this.lifeInsurance.page.multistep.paymentMethodsStepTitle.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.paymentMethodsStepTitle.waitForAnimation({timeout: config.wait.M});
        await paymentStep.paymentAccordionAccounts.waitForDisplayed({timeout: config.wait.M});
        await paymentStep.paymentAccordionAccounts.click();

        const accountPaymentMethod = paymentStep.paymentMethod
            .specifySelector({placeholder: '__NUMBER__', value: global.user.products.lifeInsurance.account});
        await accountPaymentMethod.waitForDisplayed({timeout: config.wait.M});
        await accountPaymentMethod.click();
    }

    async acceptTermsAndConditions() {
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckTrueInformation.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckTrueInformation.click();
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckReadAndAccept.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckReadAndAccept.click();
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsPersonalData.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsPersonalData.click();
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckAuthorizeFirstPayment.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckAuthorizeFirstPayment.click();
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckReceiveDocuments.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsCheckReceiveDocuments.click();
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsContinue.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.termsAndConditionsStep.termsAndConditionsContinue.click();
    }

    async continueToHiring() {
        await this.lifeInsurance.page.multistep.continueWithTheHiring.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.continueWithTheHiring.click();
    }

    async openCoveragesList() {
        await this.lifeInsurance.page.multistep.quoteInfoStep.showAllCoverages.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.quoteInfoStep.showAllCoverages.click();
        await this.lifeInsurance.page.multistep.quoteInfoStep.additionalCoverages.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.quoteInfoStep.additionalCoverages.click();
    }

    async changePaymentMethod() {
        await this.lifeInsurance.page.multistep.paymentMethodSummaryChangePaymentMethod.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.multistep.paymentMethodSummaryChangePaymentMethod.click();
    }

    async exitFromErrorModal() {
        await this.privacyModal.additionalElements.privacyModalExitLink.waitForDisplayed({timeout: config.wait.M});
        await this.privacyModal.additionalElements.privacyModalExitLink.click();
    }

    async openCancelModal() {
        await this.lifeInsurance.page.headerLeave.waitForDisplayed({timeout: config.wait.M});
        await this.lifeInsurance.page.headerLeave.click();
    }
}

export default new LifeInsurance();
