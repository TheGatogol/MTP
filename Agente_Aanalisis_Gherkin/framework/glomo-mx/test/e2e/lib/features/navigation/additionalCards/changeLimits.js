import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import additionalCardDetailPage from '../../pages/productDetails/additionalCardDetail';
import listCreditCardLimits from '../../pages/operationalLimitsConfiguration/listCreditCardLimits';

// Page Objects IDs
const ADDITIONAL_CARD_DETAIL = additionalCardDetailPage.getId();
const LIST_CREDIT_CARD_LIMITS = listCreditCardLimits.getId();

class ChangeLimits extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'additionalCards/changeLimits', parentNavigation: 'card/additionalCardDetail'});
    }

    async go_impl({retries, buttonType} = {}) {
        switch (currentPage.getId()) {
            case ADDITIONAL_CARD_DETAIL:
                if (retries) {
                    await additionalCardDetailPage.retryModal(retries);
                } else {
                    await additionalCardDetailPage.editLimitOperative();
                }
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XXL
                });
                break;
            case LIST_CREDIT_CARD_LIMITS:
                await listCreditCardLimits.accessTypeLimit(buttonType);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChangeLimits();
