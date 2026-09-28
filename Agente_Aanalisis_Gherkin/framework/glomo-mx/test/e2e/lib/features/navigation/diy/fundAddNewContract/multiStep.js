import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
// Pages
import fundProductPage from '../../../pages/productDetails/fundProductDetail';

// Page Objects IDs
const FUND = fundProductPage.getId();

class FundAddNewContractPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundAddNewContract/multiStep', parentNavigation: 'fund/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND:
                await fundProductPage.accessToOperative('new');
                break;
            default:
                throw new NotPathNavigationError();
        }
        global.storage.diyFlow = 'fundAddNewContract';
        this.page.resetCurrentStep();
    }
}

export default new FundAddNewContractPage();
