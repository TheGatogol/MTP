import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class CarLoanPayment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-carLoanPayment[state="active"]',
            elements: {
                controllerComponent: 'bbva-feature-loan-payment-mx-spherica',
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `#loanPaymentMultiStepPage ${BbvaHeaderMain._baseRoot}`,
                        }
                    }
                },
                loanPaymentMultiStep: {
                    properties: { root: '#loanPaymentMultiStepPage' },
                    paymentTypeButton: 'loan-payment-multi-step bbva-expandable-multistep loan-payment-options bbva-expandable-step bbva-aggregation-link-list-spherica [id="__DATA_SELECTOR__"]',
                    account: 'loan-payment-multi-step bbva-expandable-multistep loan-payment-account bbva-expandable-step loan-list-account loan-account-item[number="__DATA_SELECTOR__"]',
                    payButton: '#primaryBtn[text="loan-payment-pay"]',
                },

                loanPaymentOtherAmountContainer: '[data-tag-name="bbva-transition-container"]#loanPaymentOtherAmountPage',
                amountInput: '#loanPaymentOtherAmountPage [data-tag-name="loan-amount-input"] [data-tag-name="bbva-form-amount"] input',
                calculatePaymentButton: '#loanPaymentOtherAmountPage #primaryBtn[text="loan-button-calculate"]',
                continueButton:'#loanOtherAmountDetailPage #primaryBtn[text="loan-button-continue"]',
                successImport:'#loanPaymentTicketPage [data-tag-name="bbva-type-amount"]',
                labelInfoSuccess:'bbva-feature-loan-payment-mx-spherica #loanPaymentTicketPage loan-payment-ticket-page bbva-core-heading',
                dateSuccess:'bbva-feature-loan-payment-mx-spherica #loanPaymentTicketPage loan-payment-ticket-page bbva-core-heading',
                btnClouse: '#loanPaymentTicketPage [data-tag-name="bbva-header-main"] #btn-close',
            },
            requiredElements: ['header'],
        });
    }

    async handlePushNotificationInfo() {
        const {payloadPushNotification} = global.user;

        await this.controllerComponent.execute({
            script: (data) => { this.parametersFromPushNotification = data; },
            args: [payloadPushNotification]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other amount':
                await this.loanPaymentMultiStep.paymentTypeButton.specifySelector('__DATA_SELECTOR__', 'titleOtherAmount').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'import loan':
                await this.successImport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info success':
                await this.labelInfoSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date success':
                await this.dateSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button clouse':
                await this.btnClouse.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0],
                });
        }
    }

    async accessApaymentType(type) {
        const paymentTypeButton= this.loanPaymentMultiStep.paymentTypeButton.specifySelector({placeholder:'__DATA_SELECTOR__', value: type });
        await (await paymentTypeButton.waitForDisplayed({timeout: config.wait.L}))
            .click();
    }

    async accessAmount({amount}) {
        await this.loanPaymentOtherAmountContainer.waitForAnimation({timeout: config.wait.M});
        await this.amountInput.waitForDisplayed({timeout: config.wait.M});
        await this.amountInput.setValue({value: amount});
    }

    async accessCalculatePayment() {
        await this.calculatePaymentButton.waitForDisplayed({timeout: config.wait.M});
        await this.calculatePaymentButton.click();
    }

    async accessContinue() {
        await this.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async accessResumen(){
        const account = global.user.products.account.number;
        await this.loanPaymentMultiStep.account.specifySelector('__DATA_SELECTOR__', account).waitForDisplayed({timeout: config.wait.L});
        await this.loanPaymentMultiStep.account.specifySelector('__DATA_SELECTOR__', account).click();
    }

    async accessPay() {
        await this.loanPaymentMultiStep.payButton.waitForDisplayed({timeout: config.wait.M});
        await this.loanPaymentMultiStep.payButton.click();
        await this.confirmShowData();
    }

    async confirmShowData(otp = '11111111') {
        await this.fillOtp(otp);
    }
}

export default new CarLoanPayment();
