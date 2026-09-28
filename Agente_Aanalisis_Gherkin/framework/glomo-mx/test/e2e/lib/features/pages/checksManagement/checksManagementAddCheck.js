import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeAmountInput from '../../components/cells-molecule-amount-input';

@page()
class ChecksManagementAddCheck extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksManagementAddCheck[state="active"]',
            dialog: true,
            elements: {
                closeButton: 'cells-molecule-header[slot="app__header"] #btnRight',
                header: 'cells-molecule-header[slot="app__header"] #titleZone .header__title',
                text: 'glomo-check-aggregator cells-text-description .description',
                checkNumberInput: 'glomo-check-aggregator cells-molecule-input#checkInput .field__input',
                checkNumberInfo: 'glomo-check-aggregator cells-molecule-input#checkInput cells-icon-message[type=info]',
                checkNumberInputErrorMessage: 'glomo-check-aggregator cells-molecule-input#checkInput cells-icon-message[type="error"] span#notInline',
                checkNumberInputErrorMessageIcon: 'glomo-check-aggregator cells-molecule-input#checkInput cells-icon-message[type="error"] #principalIcon.icon',
                amount: CellsMoleculeAmountInput,
                saveButton: 'cells-confirm-buttons cells-st-button .button__primary',
                saveButtonDisabled: 'cells-confirm-buttons cells-st-button .button__primary[disabled]',
                cancelButton: 'cells-confirm-buttons cells-st-button .button__secondary'
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            // Common to Steps
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
                await this.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check number input':
                await this.checkNumberInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check number information':
                await this.checkNumberInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save button':
                if (value === 'enabled') {
                    await this.saveButton.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.saveButtonDisabled.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'cancel button':
                await this.cancelButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeOperative() {
        await this.closeButton.waitForClickable({timeout: config.wait.M});
        await this.closeButton.click();
    }

    async fillNumber(valid, numberLength = 6) {
        const number = this._getRandomCheckNumber(valid ? 7 : numberLength);
        await this.checkNumberInput.waitForEnabled(config.wait.L);
        await this.checkNumberInput.setValue({value: number, slow: true});
    }

    _getRandomCheckNumber(numberLength) {
        return Math.random().toString().substr(2, numberLength);
    }

    async checkNumberErrorIsShown() {
        await this.checkNumberInputErrorMessage.waitForDisplayed({timeout: config.wait.M});
        await this.checkNumberInputErrorMessageIcon.waitForDisplayed({timeout: config.wait.M});
    }

    async checkAmountErrorIsShown() {
        await this.amount.errorMessageSpan.waitForDisplayed({timeout: config.wait.M});
        await this.amount.errorMessageIcon.waitForDisplayed({timeout: config.wait.M});
    }

    async fillAmount(valid) {
        await this.amount.setValue({value: valid ? 12 : 0, forceFocus: false});
    }

    // TODO add external use annotation
    async completeData() {
        await this.fillNumber(true);
        await this.fillAmount(true);
    }

    async saveCheck() {
        await this.saveButton.waitForEnabled({timeout: config.wait.L});
        await this.saveButton.click();
    }

    async cancelFillCheck() {
        await this.cancelButton.waitForClickable({timeout: config.wait.M});
        await this.cancelButton.click();
    }

    async selectCheckNumberInput() {
        await this.checkNumberInput.waitForDisplayed({timeout: config.wait.M});
        await this.checkNumberInput.click();
    }
    async selectAmountInput() {
        await this.amount.waitForDisplayed({timeout: config.wait.M});
        await this.amount.setValue({value: 1200, forceFocus: false});
    }
}

export default new ChecksManagementAddCheck();
