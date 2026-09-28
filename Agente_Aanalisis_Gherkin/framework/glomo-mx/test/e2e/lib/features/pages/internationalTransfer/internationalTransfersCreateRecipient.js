import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class InternationalTransfersCreateRecipient extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'internationalTransfersCreateRecipient',
            root: '#cells-template-internationalTransfersCreateRecipient[state="active"]',
            elements: {
                internationalTransfersCreateRecipientTitle: 'cells-molecule-header',
                addBankCodeInput: '#bankCode #input',
                addAccountNumberInput: '#accountNumber #input',
                findAccountCode: 'cells-confirm-buttons'
            },
            requiredElements: [
                'internationalTransfersCreateRecipientTitle',
                'addBankCodeInput',
            ],
        });
    }

    async addBankCode() {
        await this.addBankCodeInput.waitForAnimation();
        await this.addBankCodeInput.waitForClickable({timeout: config.wait.M});
        await this._fillInputField({element: this.addBankCodeInput, value: 'CHASUS33XXX'});
    }

    async addAccountNumber() {
        await this.addAccountNumberInput.waitForClickable({timeout: config.wait.M});
        await this._fillInputField({element: this.addAccountNumberInput, value: '00740680001500827700'});
    }

    async selectFindAccountCode() {
        await (await this.findAccountCode.waitForClickable({timeout: config.wait.M})).click();
    }

    async addBankInformation() {
        await this.addBankCode();
        await this.addAccountNumber();
        await this.selectFindAccountCode();
    }

    async _fillInputField({element, value = ''}) {
        await element.waitForDisplayed({timeout: config.wait.S});
        await element.setValue({value});
    }
}

export default new InternationalTransfersCreateRecipient();
