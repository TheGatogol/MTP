import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page()
class CashZonePaymentsMpos extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cashZonePaymentsMpos[state="active"]',
            elements: {
                mpos: 'payments-mpos-overview',

                category: {
                    properties: { root: 'payments-mpos-overview payments-mpos-overview-charge-zone' },
                    buttonExitSumary: 'payments-mpos-overview-multistep bbva-help-modal.payments-mpos-overview-multistep-modal #helpModalHeader #btn-close',
                    exitButtonModal: 'payments-mpos-overview-multistep bbva-help-modal:nth-child(3) .content .modal-footer bbva-button-default:nth-child(1)',
                },
                dasboardOverview: {
                    properties: { root: 'payments-mpos-overview [data-tag-name="payments-mpos-overview-dashboard"]' },
                    backButton: '#payments-mpos-overview-dashboard-back-button',
                    payButton: '[data-tag-name="bbva-button-row"].four-buttons .list-item:nth-child(1)',
                    periodDayFive: 'payments-mpos-overview-settings-modal payments-mpos-overview-link-settings [data-tag-name="bbva-form-control-input"][value=__PERIOD__"]',
                    buttonSaveFooter: 'payments-mpos-overview-settings-modal payments-mpos-overview-link-settings [data-tag-name="bbva-help-modal"] .footer-button[data-tag-name="bbva-button-default"]',
                    linkPayDay: 'payments-mpos-overview-settings-modal [header-type="modal-initial"] [data-tag-name="payments-mpos-overview-item-link"][header-text="Link de pago"]',
                    linkCardReader: 'payments-mpos-overview-settings-modal [header-type="modal-initial"] [data-tag-name="payments-mpos-overview-item-link"][header-text="Lector de tarjetas"]',
                    settingsButtonTrade: '[data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide.unclickable.swiper-slide-active [data-tag-name="payments-mpos-overview-panel-info"] [data-tag-name="bbva-type-link"]',
                },
                dashboard: '[data-tag-name="payments-mpos-overview-dashboard"]',
                noClientModal: '[data-tag-name="payments-mpos-overview-no-client-modal"] [data-tag-name="onboarding-full-screen-carousel"]',
                noClientContinueBtn: '[data-tag-name="onboarding-full-screen-carousel-single-slide"] [data-tag-name="bbva-button-default"]',
                cardButtonMore: 'payments-mpos-overview .cards-container [data-tag-name="payments-mpos-overview-list-offer"] [data-tag-name="bbva-type-link"]',
                lectorCardButton:'[title-text="Lector de tarjetas"] [data-tag-name="bbva-type-link"]',
                onboarding: {
                    properties: { root: '[data-tag-name="payments-mpos-overview"]' },
                    panelInfo: '[data-tag-name="bbva-help-modal"] [data-tag-name="onboarding-full-screen-carousel-single-slide"]',
                    header: '[data-tag-name="bbva-help-modal"][visible] #helpModalHeader',
                    exitButton: 'payments-mpos-overview-no-client-modal onboarding-full-screen-carousel bbva-help-modal #helpModalHeader #btn-close',
                },
                onboardingModal: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-onboarding"]' },
                    exitButton: 'onboarding-full-screen-carousel bbva-help-modal #helpModalHeader #btn-close',
                },
                spinner: '[data-tag-name="bbva-spinner"]',
                carousel: '[data-tag-name="bbva-carousel-default"]',
                settingsLink: '[data-tag-name="bbva-carousel-default"] [data-tag-name="bbva-type-link"]',
                settingsModal: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-settings-modal"]' },
                    modal: {
                        properties: { root: '[data-tag-name="bbva-help-modal"][visible]' },
                        vatSelector: '[data-tag-name="bbva-form-select"]',
                        vatOption: '[data-tag-name="bbva-form-select"] > [data-tag-name="bbva-form-option"][value="16"]',
                        saveButton: '.slot-footer:not([hidden]) [data-tag-name="bbva-button-default"]',
                    }
                },
                operationsList: '[data-tag-name="payments-mpos-overview-operations-list"]',
                chargeButtonRow: '[data-tag-name="bbva-button-row"].four-buttons [data-tag-name="bbva-button-action"]:first-child',
                calculator: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-calculator"]' },
                    modal: {
                        properties: { root: '[data-tag-name="bbva-help-modal"]' },
                        chargeBtn: '[data-tag-name="calculator-footer"] [data-tag-name="bbva-button-default"]',
                        tpvPadBtn: '[data-tag-name="bbva-button-tpv-pad"] button:first-of-type',
                        tpvPadAddBtn: '[data-tag-name="bbva-button-tpv-pad"] button:last-of-type',
                        calculatorPanel: '[data-tag-name="payments-mpos-overview-panel-detail"]',
                        inputNumber: '[data-tag-name="bbva-form-number"]',
                        inputText: '[data-tag-name="bbva-form-text"]',
                    }
                },
                multistep: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-multistep"]' },
                    vatLabel: 'div.summary__products-wrapper > [data-tag-name="payments-mpos-overview-list-simple"]:nth-of-type(2)',
                    stepMethod: {
                        properties: { root: '[data-tag-name="payments-mpos-overview-step-charge-methods"]' },
                        link: '[data-tag-name="payments-mpos-overview-item-link"][clip-icon="bbva:link"]',
                        card: '[data-tag-name="payments-mpos-overview-item-link"][clip-icon="bbva:tpv"]',
                        top: '[data-tag-name="payments-mpos-overview-item-link"][clip-icon="bbva:mobilepayment"]'
                    }
                },
                panelDetailBtn: '[data-tag-name="payments-mpos-overview-panel-detail"] [data-tag-name="bbva-button-default"]',
                commissionBtn: '[data-tag-name="payments-mpos-overview-panel-detail"] [data-tag-name="bbva-type-icon"]',
                commissionModal: '[data-tag-name="bbva-help-modal"].comissions-modal',
                listBullet: '[data-tag-name="bbva-help-modal"].comissions-modal [data-tag-name="bbva-list-bullet"]:nth-child(3)',
                receipt: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-card-reader-receipt"]' },
                    panelOperation: '[data-tag-name="payments-mpos-overview-panel-detail"]',
                    productsSummary: '[data-tag-name="payments-mpos-overview-voucher-data"] .products-summary__wrapper'
                },
                linkReceipt: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-link-receipt"]' },
                    successPanel: '[data-tag-name="payments-mpos-overview-panel-info"][icon="spherica:checkmark"]',
                    productsSummary: '[data-tag-name="payments-mpos-overview-voucher-data"] .products-summary__wrapper',
                    cancelLink: '[data-tag-name="bbva-button-row"] [role="listitem"]:nth-of-type(2n) [data-tag-name="bbva-button-action"]'
                },
                stepLink: {
                    properties: { root: '[data-tag-name="payments-mpos-overview-step-payment-link"]' },
                    inputName: '[data-tag-name="bbva-form-input"] [aria-label="Nombre"]',
                    inputEmail: '[data-tag-name="payments-mpos-overview-form-email"] input',
                    continueButton: '[data-tag-name="bbva-button-default"]:not(.clear)'
                },
            },
            elementsSpherica: {
                spinner: '[data-tag-name="bbva-spinner-spherica"]',
                commissionModal: '[data-tag-name="bbva-help-modal"].commissions-modal',
                listBullet: '[data-tag-name="bbva-help-modal"].commissions-modal [data-tag-name="bbva-list-bullet"]:nth-child(3)',
                multistep: {
                    stepMethod: {
                        link: '[data-tag-name="payments-mpos-overview-item-link"][clip-icon="spherica:link"]',
                        card: '[data-tag-name="payments-mpos-overview-item-link"][clip-icon="spherica:tpv"]',
                        top: '[data-tag-name="payments-mpos-overview-item-link"][clip-icon="spherica:mobile-payment"]',
                    },
                },
            },
            requiredElements: ['mpos']
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'onboarding button':
                await this.onboarding.panelInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'onboarding header':
                await this.onboarding.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'onboarding panel':
                await this.onboarding.panelInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'payments mpos overview dashboard':
                await this.dashboard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'carousel':
                await this.carousel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button row':
                await this.chargeButtonRow.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'operations list':
                await this.operationsList.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'no client modal':
                await this.noClientModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'tpv pad':
                await this.calculator.modal.tpvPadBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel detail':
                await this.calculator.modal.calculatorPanel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'input number':
                await this.calculator.modal.inputNumber.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'input text':
                await this.calculator.modal.inputText.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button tpv':
                await this.calculator.modal.chargeBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'products summary':
                await this.receipt.productsSummary.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel operation':
                await this.receipt.panelOperation.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success panel link receipt':
                await this.linkReceipt.successPanel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary link':
                await this.linkReceipt.productsSummary.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'cancel link':
                await this.linkReceipt.cancelLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card reader payment method':
                await this.multistep.stepMethod.card.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link payment method':
                await this.multistep.stepMethod.link.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'vat label':
                await this.multistep.vatLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'commission modal':
                await this.commissionModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'list bullet':
                await this.listBullet.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mpos':
                await this.mpos.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link payment':
                await this.dasboardOverview.linkPayDay.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link card reader':
                await this.dasboardOverview.linkCardReader.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async displayCalculator() {
        await (await this.chargeButtonRow.waitForClickable({ timeout: config.wait.M })).click();
    }

    async calculatorInteraction() {
        await this.calculator.modal.tpvPadBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.calculator.modal.tpvPadBtn.scrollIntoView();
        await this.calculator.modal.tpvPadBtn.click();
    }

    async addProduct() {
        await this.calculatorInteraction();
        await this.calculator.modal.tpvPadAddBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.calculator.modal.tpvPadAddBtn.scrollIntoView();
        await this.calculator.modal.tpvPadAddBtn.click();
    }

    async submitCharge() {
        await this.calculatorInteraction();
        await this.calculator.modal.chargeBtn.scrollIntoView();
        await (await this.calculator.modal.chargeBtn.waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectPaymentMethod(method) {
        await this.multistep.stepMethod[method].scrollIntoView();
        await (await this.multistep.stepMethod[method].waitForClickable({ timeout: config.wait.M })).click();
    }

    async chargeOperation() {
        await (await this.panelDetailBtn.waitForClickable({ timeout: config.wait.M })).click();
    }

    async openCommissionScreen() {
        await (await this.commissionBtn.waitForClickable({ timeout: config.wait.M })).click();
    }

    async setVATdefault() {
        await (await this.settingsLink.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.settingsModal.modal.vatSelector.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.settingsModal.modal.vatOption.waitForClickable({ timeout: config.wait.M })).click();
        await this.settingsModal.modal.saveButton.waitForEnabled({ timeout: config.wait.M });
        await (await this.settingsModal.modal.saveButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async completePaymentLink(name, email) {
        await (await this.stepLink.inputName.waitForClickable({ timeout: config.wait.M })).setValue(name);
        await (await this.stepLink.inputEmail.waitForClickable({ timeout: config.wait.M })).setValue(email);
        await this.stepLink.continueButton.waitForEnabled({ timeout: config.wait.M });
        await (await this.stepLink.continueButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async collectSale() {
        await (await this.dasboardOverview.payButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accessesLearnMore() {
        await (await this.cardButtonMore.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accessesMposCard() {
        await this.lectorCardButton.waitForDisplayed({ timeout: config.wait.M });
        await this.lectorCardButton.scrollIntoView({ block: 'center' });
        await (await this.lectorCardButton.waitForClickable({ timeout: config.wait.M })).click({useActions: true});
    }

    async enterNoClientModal() {
        await (await this.noClientContinueBtn.waitForClickable({ timeout: config.wait.M })).click();
    }

    async closeNoClientModal() {
        await (await this.onboardingModal.exitButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async exitMpossOverview({option}) {
        switch (option.toLowerCase()) {
            case 'back button':
                await (await this.dasboardOverview.backButton.waitForClickable({ timeout: config.wait.M })).click();
                break;
            case 'firts time':
                await (await this.onboarding.exitButton.waitForClickable({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
    }

    async accesessSettingsTrade() {
        await (await this.dasboardOverview.settingsButtonTrade.waitForClickable({ timeout: config.wait.M })).click();
    }

    async exitMethodCardPayment() {
        await this.category.buttonExitSumary.waitForExist({ timeout: config.wait.M });
        await this.category.buttonExitSumary.click({ useActions: false });
        await (await this.category.exitButtonModal.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accesessLinkPayTrade() {
        await (await this.dasboardOverview.linkPayDay.waitForClickable(({ timeout: config.wait.M }))).click();
        await (await (await this.dasboardOverview.periodDayFive.specifySelector({ placeholder: '__PERIOD__', value: 15 }).waitForDisplayed({ timeout: config.wait.M }))).click();
    }
}

export default new CashZonePaymentsMpos();
