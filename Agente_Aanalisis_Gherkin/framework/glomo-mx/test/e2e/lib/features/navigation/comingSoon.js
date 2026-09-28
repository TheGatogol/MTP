import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import additionalCardsDetail from '../pages/productDetails/additionalCardDetail';
import equityPage from '../pages/equity/equityPage';
import ocAccount from '../pages/ocAccount/ocAccount';

// Page Objects IDs
const ADDITIONAL_CARD_DETAIL = additionalCardsDetail.getId();
const EQUITY_PRODUCT_DETAIL = equityPage.getId();
const OC_ACCOUNT = ocAccount.getId();

class ComingSoon extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'comingSoon/comingSoon', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({operative} = {}) {
        switch (currentPage.getId()) {
            case ADDITIONAL_CARD_DETAIL:
                await additionalCardsDetail.editLimitOperative();
                break;
            case EQUITY_PRODUCT_DETAIL:
                if (operative === 'transfer') {
                    await equityPage.accessTransferEquity();
                }else {
                    await equityPage.accessAssistanceEquity();
                }
                break;
            case OC_ACCOUNT:
                await currentPage.accessToN2ToN4UpgradeAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new ComingSoon();

