import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

//Page
import listCreditCardLimitsPage from '../../pages/operationalLimitsConfiguration/listCreditCardLimits';

//Page Object IDs
const LIST_CREDIT_CARD_LIMITS = listCreditCardLimitsPage.getId();

class EditCreditCardLimits extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'operationalLimitsConfiguration/editCreditCardLimits',
            parentNavigation: 'operationalLimitsConfiguration/listCreditCardLimits'
        });
    }

    async go_impl({limitValue} = {}) {

        switch (currentPage.getId()) {
            case LIST_CREDIT_CARD_LIMITS:
                await listCreditCardLimitsPage.goToEditCardLimits(limitValue);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EditCreditCardLimits();
