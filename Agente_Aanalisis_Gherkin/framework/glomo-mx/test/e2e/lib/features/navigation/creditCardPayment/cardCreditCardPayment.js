import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Page
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import bankRateSimulator from '../../pages/bankRateSimulator/bankRateSimulator';
import operationals from '../../pages/operationals/operationals';

//Page Object IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const BANK_RATE_SIMULATOR = bankRateSimulator.getId();
const OPERATIONALS = operationals.getId();

class CardCreditCardPayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardPayment/cardCreditCardPayment', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({typeInterest, pageName} = {}) {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                if(pageName==='operatives'){
                    await orangeCardProductDetail.viewMoreOperatives();
                }
                await orangeCardProductDetail.goToPayCard();
                break;
            case BANK_RATE_SIMULATOR:
                await bankRateSimulator.completesAmount(typeInterest);
                break;
            case OPERATIONALS:
                await operationals.accessToOperative({operative: 'creditCardPayment'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardCreditCardPayment();

