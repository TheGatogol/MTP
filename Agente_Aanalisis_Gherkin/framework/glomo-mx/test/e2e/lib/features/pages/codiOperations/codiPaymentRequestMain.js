import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiPaymentRequestMain extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiPaymentRequestMain[state="active"]',
            elements: {
                header: ' bbva-multistep-codi-p2p-mobile-transfer-request #header',
                btnClose: 'bbva-multistep-codi-p2p-mobile-transfer-request #header #btn-right-primary',
                accountContainer: 'bbva-multistep-codi-p2p-mobile-transfer-request #step-1 div.content bbva-step-account-list-codi-request bbva-list-card:nth-child(3) div.container',
                inputContact: 'bbva-multistep-codi-p2p-mobile-transfer-request [aria-label="Número de celular "]',
                btnContinueContact: 'bbva-multistep-codi-p2p-mobile-transfer-request #contact-submit-button',
                inputAmount: 'bbva-multistep-codi-p2p-mobile-transfer-request [aria-label="Importe (opcional) ($)"]',
                btnContinueStep3: 'bbva-multistep-codi-p2p-mobile-transfer-request #step-3 div.content bbva-button-default',
                inputReference: 'bbva-multistep-codi-p2p-mobile-transfer-request [aria-label="Referencia (opcional) "]',
                inputConcept: 'bbva-multistep-codi-p2p-mobile-transfer-request [aria-label="Concepto (opcional) "]',
                btnContinueStep4: 'bbva-multistep-codi-p2p-mobile-transfer-request #step-4 div.default-content div bbva-button-default',
                btnRequestMoney: 'bbva-multistep-codi-p2p-mobile-transfer-request #paymentRequestBtn'
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account container':
                await this.accountContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact input':
                await this.inputContact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference input':
                await this.inputReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept input':
                await this.inputConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request money button':
                await this.btnRequestMoney.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectReceivingAccount() {
        await this.accountContainer.waitForDisplayed();
        await this.accountContainer.click();
    }

    async setInputContact() {
        await this.inputContact.waitForDisplayed({timeout: config.wait.M});
        await this.inputContact.click();
        await this.inputContact.setValue({value: '5563488193'});
        await this.btnContinueContact.waitForEnabled();
        await this.btnContinueContact.click();
    }

    async setInputAmount() {
        await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.inputAmount.click();
        await this.inputAmount.setValue({value: '200'});
        await this.btnContinueStep3.waitForEnabled();
        await this.btnContinueStep3.click();
    }

    async setInputReference() {
        await this.inputReference.waitForDisplayed({timeout: config.wait.M});
        await this.inputReference.click();
        await this.inputReference.setValue({value: '1542637'});
        await this.btnContinueStep4.waitForEnabled();
        await this.btnContinueStep4.click();
    }

    async setInputConcept() {
        await this.inputConcept.waitForDisplayed({timeout: config.wait.M});
        await this.inputConcept.click();
        await this.inputConcept.setValue({value: 'Desayuno Team Codi'});
        await this.btnContinueStep4.waitForEnabled();
        await this.btnContinueStep4.click();
    }

    async confirmPaymentsRequest() {
        await this.btnRequestMoney.waitForDisplayed({timeout: config.wait.M});
        await this.btnRequestMoney.click();
    }
}

export default new CodiPaymentRequestMain();
