import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep3Page from '../../../pages/diy/fundsHiring/fundsHiringStep3';

// Page Objects IDs
const FUNDS_HIRING_STEP3 = fundsHiringStep3Page.getId();

class FundsHiringStep4 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep4', parentNavigation: 'diy/fundsHiring/fundsHiringStep3'});
    }

    async go_impl(investType) {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP3:
                await fundsHiringStep3Page.acceptInvestmentTypeModal(investType);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep4();
