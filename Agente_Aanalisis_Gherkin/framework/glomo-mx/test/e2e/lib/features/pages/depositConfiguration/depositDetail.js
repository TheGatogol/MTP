import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositTransactionDetail extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'DepositDetail',
            root: '#cells-template-depositTransactionDetail[state="active"]',
            elements: {
                titleDepositDetail: 'cells-molecule-header-spherica',
                btnConfiguration: 'cells-operations-list-spherica button',
            },
            requiredElements: [
                'titleDepositDetail'
            ],
        });
    }

    async selectConfiguration() {
        await this.btnConfiguration.waitForClickable({timeout: config.wait.L});
        await this.btnConfiguration.click();
    }

}

export default new DepositTransactionDetail();
