import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcAccountYoung extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocAccountYoung/ocAccountYoung', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('oc-account-young');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcAccountYoung();
