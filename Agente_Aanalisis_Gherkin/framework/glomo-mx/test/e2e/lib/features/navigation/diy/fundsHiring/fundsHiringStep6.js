import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep5Page from '../../../pages/diy/fundsHiring/fundsHiringStep5';

// Page Objects IDs
const FUNDS_HIRING_STEP5 = fundsHiringStep5Page.getId();

class FundsHiringStep6 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep6', parentNavigation: 'diy/fundsHiring/fundsHiringStep5'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP5:
                await fundsHiringStep5Page.completeSimulation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep6();
