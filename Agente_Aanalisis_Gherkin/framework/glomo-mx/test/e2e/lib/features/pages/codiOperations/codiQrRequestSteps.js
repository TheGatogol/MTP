import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiQrRequestSteps extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiQrRequestSteps[state="active"]',
            elements: {
                header: 'bbva-multistep-codi-qr-payments-p2m-request #header',
                buttonClose: 'bbva-multistep-codi-qr-payments-p2m-request #header #btn-right-primary',
                accountContainer: 'bbva-multistep-codi-qr-payments-p2m-request #stepOne div.content bbva-step-select-account-payments-p2m-request bbva-list-card:nth-child(3)',
                inputAmount: 'bbva-multistep-codi-qr-payments-p2m-request #stepTwo div.content bbva-step-amount-payments-p2m-request #amountRequest input',
                buttonConfirmAmount: 'bbva-multistep-codi-qr-payments-p2m-request #stepTwo div.content bbva-step-amount-payments-p2m-request #btnAmountStep',
                buttonInfo: 'bbva-multistep-codi-qr-payments-p2m-request #stepTwo div.content bbva-step-amount-payments-p2m-request #amountRequest div.label-out bbva-link',
                inputReference: 'bbva-multistep-codi-qr-payments-p2m-request #stepThree div.content bbva-step-concept-and-reference-payments-p2m-request [aria-label="Referencia"]',
                inputConcept: 'bbva-multistep-codi-qr-payments-p2m-request #stepThree div.content bbva-step-concept-and-reference-payments-p2m-request [aria-label="Concepto "]',
                buttonConfirmConcept: 'bbva-multistep-codi-qr-payments-p2m-request #stepThree div.content bbva-step-concept-and-reference-payments-p2m-request bbva-button-default',
                buttonCreateQr: 'bbva-multistep-codi-qr-payments-p2m-request #paymentRequestBtn'
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account container':
                await this.accountContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount':
                await this.insertAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirm amount':
                await this.buttonConfirmAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button info':
                await this.buttonInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input reference':
                await this.inputReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input concept':
                await this.inputConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirm concept':
                await this.buttonConfirmConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button create qr':
                await this.buttonCreateQr.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectAccount() {
        await this.accountContainer.waitForDisplayed({timeout: config.wait.L});
        await this.accountContainer.click();
    }

    async insertAmount() {
        await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.inputAmount.click();
        await this.inputAmount.setValue({value: '1000'});
        await this.buttonConfirmAmount.waitForEnabled();
        await this.buttonConfirmAmount.click();
    }

    async insertConcept() {
        await this.inputConcept.waitForDisplayed({timeout: config.wait.M});
        await this.inputConcept.click();
        await this.inputConcept.setValue({value: 'Prueba CoDi'});
        await this.buttonConfirmConcept.waitForEnabled();
        await this.buttonConfirmConcept.click();
    }

    async createQr() {
        await this.buttonCreateQr.waitForDisplayed({timeout: config.wait.M});
        await this.buttonCreateQr.click();
    }
}

export default new CodiQrRequestSteps();
