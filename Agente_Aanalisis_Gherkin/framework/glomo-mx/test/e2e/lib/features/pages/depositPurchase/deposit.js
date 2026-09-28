import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class Deposit extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'deposit',
            root: '#cells-template-deposit[state="active"]',
            elements: {
                titleDeposit: 'cells-molecule-header',
                depositPurchase:'cells-operations-list-indicators cells-operations-list ul li:nth-child(1) button',
            },
            elementsSpherica: {
                titleDeposit: 'cells-molecule-header-spherica',
                depositPurchase:'cells-operations-list-indicators-spherica cells-operations-list-spherica ul li:nth-child(1) button',
            },
            requiredElements: [
                'titleDeposit',
            ],
        });
    }

    async selectDeposit() {
        await this.depositPurchase.waitForClickable({timeout: config.wait.L});
        await this.depositPurchase.click();
    }

}

export default new Deposit();
