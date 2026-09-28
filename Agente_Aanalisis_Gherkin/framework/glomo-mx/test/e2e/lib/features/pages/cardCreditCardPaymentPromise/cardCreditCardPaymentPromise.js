import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class CardCreditCardPaymentPromise extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardCreditCardPaymentPromise[state="active"]',
            elements: {
                featureComponent: '[data-tag-name="bbva-feature-credit-card-payment-own-cards"]',
                header: '[data-tag-name="bbva-transition-container"][visible] div [data-testid="menu-header"]',
                menuDescription: '[data-tag-name="bbva-transition-container"][visible] div div [data-tag-name="bbva-text"].description',
                paymentImage: '[data-tag-name="bbva-transition-container"][visible] div div.wrapper-menu [data-tag-name="bbva-clip-microillustration"] svg',
                paymentTitle: '[data-tag-name="bbva-transition-container"][visible] div div [data-tag-name="bbva-text"][text*="Pagar"]',
                paymentDescription: '[data-tag-name="bbva-transition-container"][visible] div div [data-tag-name="bbva-text"][text*="cuentas BBVA"]',
                paymentPromiseButton: '[data-tag-name="bbva-transition-container"][visible] div div [data-tag-name="bbva-button-default"]',
                menuDivider: '[data-tag-name="bbva-transition-container"][visible] div div div.menu-divider',
                promiseImage: '[data-tag-name="bbva-transition-container"][visible] div div [data-tag-name="bbva-clip-microillustration"][microillustration="calendar"] svg',
                promiseTitle: '[data-tag-name="bbva-transition-container"][visible] div div [data-tag-name="bbva-text"][text*="ogramar compromiso de pago"]',
                promiseDescription: '[data-tag-name="bbva-transition-container"][visible] div div [text*="programa un compromiso de pago. Selecciona"]',
                //promise
                promiseHeader: '[data-tag-name="bbva-transition-container"][visible] div [text="Compromiso de pago"]',
                promiseMultistep: '[data-tag-name="bbva-transition-container"][visible] div [data-tag-name="bbva-credit-card-payment-promise-multistep"]',
                cardInfoStep: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"]',
                cardInfoStepTitle: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] #heading',
                cardFrontCover: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.card [data-tag-name="bbva-clip-card"]',
                cardName: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.card div div span.name',
                cardNumber: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.card div.content div div.column.number span div',
                cardDebt: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.card div.content div [data-tag-name="bbva-amount"]',
                cardDebtTitle: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.card div.content div div.column.description',
                cardBalanceTitle: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.header-lists [data-tag-name="bbva-list-simple"][label="Saldo al corte"] dl dt [data-tag-name="bbva-text"]',
                cardBalanceAmount: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.header-lists [data-tag-name="bbva-list-simple"] dl dd [data-tag-name="bbva-amount"]',
                paymentLimitTitle: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.header-lists [data-tag-name="bbva-list-simple"][label*="Fecha"] dl dt [data-tag-name="bbva-text"]',
                paymentLimitDate: '[data-tag-name="bbva-expandable-multistep"] [total-steps="3"] div.summary div div.header-lists [data-tag-name="bbva-list-simple"][label*="Fecha"] dl dd.wrapper-description [data-tag-name="bbva-text"]',
                //date step
                dateStep: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"]',
                dateStepTitle: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"] #headingLabel',
                dateStepLabel: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"] #currentStep',
                dateStepDescription: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"] div.content [data-tag-name="bbva-text"]',
                dateStepInputEmpty: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"] div.content div [data-test="empty"]',
                dateStepInputFilled: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"] div.content div [data-test="filled"]',
                dateStepContinueButton: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"] #complete-date',
                selectDateModal: 'cells-modal-calendar #modal',
                calendar: 'cells-modal-calendar #modal #calendar',
                availableDate: 'cells-modal-calendar #modal #calendar #container #main span.day-highlighted-class',
                calendarButton: '#modal div.calendar-container div.button-container cells-st-button',
                dateStepSummary: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(2) div.summary div [data-tag-name="bbva-list-simple"]',
                //amount step
                amountStep: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3)',
                amountRadioMinimum: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(1)',
                amountRadioNoInterest: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(4)',
                amountRadioTotal: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(6)',
                amountRadioOther: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(8)',
                otherAmountInput: '[data-tag-name="bbva-core-collapse"] [data-tag-name="bbva-form-number"] input',
                amountStepContinueButton: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3) #complete-amount',
                amountSummary: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(3) div.summary div [data-tag-name="bbva-amount"]',
                //method step
                methodStep: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(4)',
                individualRadio: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(4) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(1)',
                atmRadio: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(4) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(4)',
                correspondentRadio: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(4) [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-child(7)',
                methodStepContinueButton: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(4) #complete-method',
                methodSummary: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-child(4) div.summary div [data-tag-name="bbva-text"]',
                //panel
                confirmPromisePanel: '[data-tag-name="bbva-panel-button"] section [data-tag-name="bbva-button-default"]',
                // success
                successImage: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div [data-tag-name="bbva-clip-microillustration"]',
                successTitle: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div [data-tag-name="bbva-text"]:nth-child(2)',
                successDate: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div [data-tag-name="bbva-text"]:nth-child(3)',
                paymentPromiseDate: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div div [data-tag-name="bbva-list-simple"]:nth-child(1)',
                cardToPay: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div div [data-tag-name="bbva-list-simple"]:nth-child(2)',
                paymentPromiseAmount: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div div [data-tag-name="bbva-list-simple"]:nth-child(3)',
                paymentMethod: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div div [data-tag-name="bbva-list-simple"]:nth-child(4)',
                successHelpMessage: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div [data-tag-name="bbva-notification-message"]',
                successExitButton: '[data-tag-name="bbva-transition-container"]:nth-child(5) div div [data-tag-name="bbva-button-default"]',
                // pending promise
                pendingPromiseModal: '[data-tag-name="bbva-transition-container"]:nth-child(3) div [data-tag-name="bbva-help-modal"]',
                pendingPromiseModalHeader: '[data-tag-name="bbva-transition-container"]:nth-child(3) div [data-tag-name="bbva-help-modal"] #helpModalHeader',
                pendingPromiseModalImage: '[data-tag-name="bbva-transition-container"]:nth-child(3) div [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-clip-microillustration"]',
                pendingPromiseModalTitle: '[data-tag-name="bbva-transition-container"]:nth-child(3) div [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-text"]:nth-child(2)',
                pendingPromiseModalDescription: '[data-tag-name="bbva-transition-container"]:nth-child(3) div [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-text"]:nth-child(3)',
                pendingPromiseModalButton: '[data-tag-name="bbva-transition-container"]:nth-child(3) div [data-tag-name="bbva-help-modal"] div div section div div.modal-main div.modal-footer slot div [data-tag-name=bbva-button-default]',
                // exit modal
                promiseHeaderCloseButton: '[data-tag-name="bbva-transition-container"]:nth-child(4) div [data-tag-name="bbva-header-main"] header div.header-icons.half-space.right-group #btn-right-primary',
                exitModal: '[data-testid="exit-modal"]',
                exitModalIcon: '[data-testid="exit-modal"] #helpModalTitle slot [data-tag-name="bbva-icon"]',
                exitModalPrimaryButton: '[data-testid="exit-modal"] div div.content section div div.modal-main div.modal-footer slot div [data-tag-name="bbva-button-default"]',
                exitModalContinueLink: '[data-testid="exit-modal"] div div.content section div div.modal-main div.modal-footer slot div [data-tag-name="bbva-link"]'
            },
            requiredElements: [
                'featureComponent'
            ]
        });
    }

    async createPushNotificationInfo() {
        await this.featureComponent.waitForDisplayed({timeout: config.wait.L});
        const {payloadPushNotification} = global.user;

        await this.featureComponent.execute({
            script: (data) => this.setLastCreditCardDigits(data),
            args: [payloadPushNotification]
        });
    }

    async openPromiseOption() {
        await (await this.paymentPromiseButton.elements()).value[1].waitForClickable({timeout: config.wait.L});
        await (await this.paymentPromiseButton.elements()).value[1].click();
    }

    async openCalendar() {
        await this.dateStepInputEmpty.waitForDisplayed({timeout: config.wait.XL});
        await this.dateStepInputEmpty.waitForClickable({timeout: config.wait.L});
        await this.dateStepInputEmpty.click();
    }

    async selectDate() {
        await this.availableDate.waitForClickable({timeout: config.wait.L});
        await this.availableDate.click();
        await this.calendarButton.waitForClickable({timeout: config.wait.L});
        await this.calendarButton.click();
        await this.dateStepInputFilled.waitForDisplayed({timeout: config.wait.L});
    }

    async confirmDate() {
        await this.dateStepContinueButton.waitForClickable({timeout: config.wait.M});
        await this.dateStepContinueButton.click();
    }

    async selectOtherAmount() {
        await this.amountRadioOther.waitForClickable({timeout: config.wait.M});
        await this.amountRadioOther.click();
        await this.otherAmountInput.waitForDisplayed({timeout: config.wait.L});
        await this.otherAmountInput.setValue({value: 10, forceFocus: true});
        await this.amountStepContinueButton.waitForClickable({timeout: config.wait.M});
        await this.amountStepContinueButton.click();
    }

    async selectPaymentMethod() {
        await this.individualRadio.waitForClickable({timeout: config.wait.M});
        await this.individualRadio.click();
        await this.methodStepContinueButton.waitForClickable({timeout: config.wait.M});
        await this.methodStepContinueButton.click();
    }

    async confirmPromise() {
        await this.confirmPromisePanel.waitForClickable({timeout: config.wait.M});
        await this.confirmPromisePanel.click();
    }

    async leavePromisePage() {
        await this.promiseHeaderCloseButton.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'menu description':
                await this.menuDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment image':
                await this.paymentImage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment title':
                await this.paymentTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment description':
                await this.paymentDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment button':
                await (await this.paymentPromiseButton.elements()).value[0].waitForDisplayed({timeout: config.wait.S});
                break;
            case 'menu divider':
                await this.menuDivider.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'promise image':
                await this.promiseImage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'promise title':
                await this.promiseTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'promise description':
                await this.promiseDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'promise button':
                await (await this.paymentPromiseButton.elements()).value[1].waitForDisplayed({timeout: config.wait.S});
                break;
            case 'promise header':
                await this.promiseHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'promise multistep':
                await this.promiseMultistep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card info step':
                await this.cardInfoStep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card info step title':
                await this.cardInfoStepTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card front cover':
                await this.cardFrontCover.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card name':
                await this.cardName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card number':
                await this.cardNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card debt amount':
                await this.cardDebt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card debt title':
                await this.cardDebtTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card balance title':
                await this.cardBalanceTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card balance amount':
                await this.cardBalanceAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment limit title':
                await this.paymentLimitTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment limit date':
                await this.paymentLimitDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step':
                await this.dateStep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step title':
                await this.dateStepTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step label':
                await this.dateStepLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step description':
                await this.dateStepDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step input':
                await this.dateStepInputEmpty.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step input filled':
                await this.dateStepInputFilled.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step continue button disabled':
                await this.dateStepContinueButton.waitForDisplayed({timeout: config.wait.L});
                await this.dateStepContinueButton.is.disabled();
                break;
            case 'date step continue button enabled':
                await this.dateStepContinueButton.waitForClickable({timeout: config.wait.M});
                break;
            case 'select date modal':
                await this.selectDateModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'calendar':
                await this.calendar.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'available date':
                await this.availableDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'calendar button':
                await this.calendarButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date step summary':
                await this.dateStepSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount step':
                await this.amountStep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'minimum amount radio':
                await this.amountRadioMinimum.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'no interest amount radio':
                await this.amountRadioNoInterest.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'other amount radio':
                await this.amountRadioOther.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'total amount radio':
                await this.amountRadioTotal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'other amount input':
                await this.otherAmountInput.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount summary':
                await this.amountSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'method step':
                await this.methodStep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'individual radio':
                await this.individualRadio.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'atm radio':
                await this.atmRadio.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'correspondent radio':
                await this.correspondentRadio.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'method summary':
                await this.methodSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'confirm promise panel':
                await this.confirmPromisePanel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success image':
                await this.successImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success operation date':
                await this.successDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment promise date':
                await this.paymentPromiseDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card to pay':
                await this.cardToPay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment promise amount':
                await this.paymentPromiseAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment promise method':
                await this.paymentMethod.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success promise help message':
                await this.successHelpMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success promise exit button':
                await this.successExitButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit modal':
                await this.exitModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit modal icon':
                await this.exitModalIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit modal description':
                await this.exitModalIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit modal primary button':
                await this.exitModalPrimaryButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit modal continue link':
                await this.exitModalContinueLink.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pending promise modal':
                await this.pendingPromiseModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pending promise modal header':
                await this.pendingPromiseModalHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pending promise modal image':
                await this.pendingPromiseModalImage.scrollIntoView();
                await this.pendingPromiseModalImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pending promise modal title':
                await this.pendingPromiseModalTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pending promise modal description':
                await this.pendingPromiseModalDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pending promise modal button':
                await this.pendingPromiseModalButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CardCreditCardPaymentPromise();
