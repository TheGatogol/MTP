import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import onBoardingAccountSuccess from '../../pages/onBoardingN2/onBoardingDigitalAccountSuccess';

const ACCOUNT_DATA = onBoardingAccountSuccess.getId();

class OnBoardingDigitalAccountSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loginLogout/login', parentNavigation: 'onBoardingN2/onBoardingCreateAccountSuccess'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case ACCOUNT_DATA:
                await onBoardingAccountSuccess.goToAccessAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnBoardingDigitalAccountSuccess();
