import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import creditCardHolderOld from '../../../pages/creditCardApplication/creditCardHolder/creditCardHolderOld';

const CREDIT_CARD_HOLDER_OLD = creditCardHolderOld.getId();

class CreditCardHolderOldSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardApplication/creditCardHolder/creditCardHolderOldSuccess', parentNavigation: 'creditCardApplication/creditCardHolder/creditCardHolderOld'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CREDIT_CARD_HOLDER_OLD:
                await creditCardHolderOld.accessToSuccessHiring();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditCardHolderOldSuccess();
