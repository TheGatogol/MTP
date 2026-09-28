import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../../pages/contractProductSection/contractProductSection';
import notificationsCenter from '../../../pages/notificationsCenter/notificationsCenter';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class CreditCardHolderOld extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardApplication/creditCardHolder/creditCardHolderOld', parentNavigation: 'contractProductSection'});
    }

    async go_impl({ section } = {}) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct(section);
                break;
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.accessCC();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditCardHolderOld();
