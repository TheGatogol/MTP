import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import dashboardPage from '../../pages/dashboard/dashboard';
import pinRequest from '../../pages/operatives/pinRequest';

const DASHBOARD = dashboardPage.getId();
const PIN_REQUEST=pinRequest.getId();

class PinViewCvv extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/orangeCardProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.selectByLastDigits(account);
                break;
            case PIN_REQUEST:
                await pinRequest.goBackToDetailCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PinViewCvv();
