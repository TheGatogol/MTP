import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import dashboard from '../../pages/dashboard/dashboard';
import contractProductSection from '../../pages/contractProductSection/contractProductSection';

const DASHBOARD = dashboard.getId();
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class OcAccount extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocAccount/ocAccount', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        let offer;
        switch (currentPage.getId()) {
            case DASHBOARD:
                offer = (await dashboard.isFutura())
                    ? 'Una cuenta hecha para ti'
                    : 'oc account';
                await dashboard.enterOffer(offer);
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('oc-account');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcAccount();
