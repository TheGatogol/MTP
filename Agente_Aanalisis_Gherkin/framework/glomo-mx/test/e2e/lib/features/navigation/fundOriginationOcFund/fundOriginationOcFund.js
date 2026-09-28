import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import contractProductSection from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class FundOriginationOcFund extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fundOriginationOcFund/fundOriginationOcFund', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProductOfferId(global.user.offerId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundOriginationOcFund();
