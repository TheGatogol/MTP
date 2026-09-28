import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import cardPaymentPage from '../../pages/creditCardPayment/cardCreditCardPayment';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const CARD_PAYMENT = cardPaymentPage.getId();

class OnboardingSimulator extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'bankRateSimulator/bankRateSimulator', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CARD_PAYMENT:
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.accessOnboarding();
                await orangeCardProductDetailPage.acceptTerms();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnboardingSimulator();

