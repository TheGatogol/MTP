import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositSale extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'deposit',
            root: '#cells-template-depositSale[state="active"]',
            elements: {
                titleDeposit: 'cells-molecule-header',
                btnContinueSuccess:'#collapser > cells-st-button.primary.deposit-sale.size-m.cells-summary-view--submit-button > button',
            },
            requiredElements: [
                'titleDeposit',
            ],
        });
    }

    async selectDeposit() {
        await this.btnContinueSuccess.waitForClickable({timeout: config.wait.XXL});
        await this.btnContinueSuccess.click();
    }

    async fillOtp(code = '33925647') {
        await super.fillOtp(code);
    }

}

export default new DepositSale();
