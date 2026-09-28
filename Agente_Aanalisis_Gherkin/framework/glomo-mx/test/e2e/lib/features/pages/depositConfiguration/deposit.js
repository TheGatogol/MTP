import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class Deposit extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'deposit',
            root: '#cells-template-deposit[state="active"]',

            elements: {
                titleDeposit: 'cells-molecule-header-spherica',
                deposit:'cells-product-item',
            },
            elementsSpherica: {
                titleDeposit: 'cells-molecule-header-spherica',
                deposit: 'cells-product-item-spherica'
            },
            requiredElements: [
                'titleDeposit',
            ]
        });
    }

    async selectDeposit() {
        await this.deposit.waitForClickable({timeout: config.wait.L});
        await this.deposit.click();
    }

}

export default new Deposit();
