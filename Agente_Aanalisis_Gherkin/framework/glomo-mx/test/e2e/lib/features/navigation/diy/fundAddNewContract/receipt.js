import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
// Pages
import fundAddNewContractPage from '../../../pages/diy/fundAddNewContract/multiStep';

// Page Objects IDs
const FUND_MULTISTEP = fundAddNewContractPage.getId();

class FundAddNewContractReviewPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundAddNewContract/receipt', parentNavigation: 'diy/fundAddNewContract/multiStep'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_MULTISTEP:
                await currentPage.finish();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundAddNewContractReviewPage();
