import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page('contractPaymentExistingModal')
class ContractPaymentExistingModal extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-contractPaymentExistingModal[state="active"]',
            elements: {
                titleDeposit: 'cells-molecule-header',
                titleContractPayment: 'cells-modal-card-advice',
                btnPrimary:'cells-modal-card-advice cells-bottom-modal cells-confirm-buttons cells-st-button button#primaryBtn',
                btnSecondary:'cells-modal-card-advice cells-bottom-modal cells-confirm-buttons cells-st-button button#secondaryBtn',
            },
            requiredElements: [
                'titleDeposit'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header modal':
                await this.titleContractPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: `${item}`, args: arguments[0]});
        }
    }
    async selectDepositList() {
        await this.btnPrimary.waitForClickable({timeout:config.wait.S});
        await this.btnPrimary.click();
    }

    async selectDepositHiring() {
        await this.btnSecondary.waitForClickable({timeout:config.wait.S});
        await this.btnSecondary.click();
    }

}

export default new ContractPaymentExistingModal();
