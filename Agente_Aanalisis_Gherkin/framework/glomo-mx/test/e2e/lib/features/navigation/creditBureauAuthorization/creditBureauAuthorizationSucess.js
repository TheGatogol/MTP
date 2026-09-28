import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import creditBureauAuthorization from '../../pages/creditBureauAuthorization/creditBureauAuthorization';

// Page Objects IDs
const CREDIT_BUREAU_AUTHORIZATION = creditBureauAuthorization.getId();

class CreditBureauAuthorizationSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditBureauAuthorization/creditBureauAuthorizationSuccess', parentNavigation: 'creditBureauAuthorization/creditBureauAuthorization'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CREDIT_BUREAU_AUTHORIZATION:
                await currentPage.giveAuthorization();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditBureauAuthorizationSuccess();
