import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page('ContractPaymentExisting')
class ContractPaymentExisting extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-contractPaymentExisting[state="active"]',
            elements: {
                titleDeposit: 'cells-molecule-header',
                depositList:'#link',
                depositPurchase: 'cells-product-selector-modal cells-bottom-modal cells-product-selector div:nth-child(108) cells-product-item'
            },
            requiredElements: [
                'titleDeposit',
            ],
        });
    }

    async selectDepositList(){
        await this.depositList.waitForClickable({timeout:config.wait.L});
        await this.depositList.click();
    }

    async selectDepositPurchase() {
        await this.depositPurchase.waitForClickable({timeout: config.wait.L});
        await this.depositPurchase.click();
    }

}

export default new ContractPaymentExisting();
