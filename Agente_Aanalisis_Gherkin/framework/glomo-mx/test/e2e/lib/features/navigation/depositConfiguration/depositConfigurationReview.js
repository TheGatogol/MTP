import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositConfigurationPage from '../../pages/depositConfiguration/depositConfiguration';

// Page Objects IDs
const DEPOSITCONFIGURATION = depositConfigurationPage.getId();

class DepositConfigurationReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositConfiguration/depositConfigurationReview', parentNavigation: 'depositConfiguration/depositConfiguration'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSITCONFIGURATION:
                await depositConfigurationPage.fillOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositConfigurationReview();
