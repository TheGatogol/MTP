import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class BuyNowPayLaterRemaining extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'buyNowPayLaterRemaining/buyNowPayLaterRemaining', parentNavigation: 'dashboard'});
    }
}
export default new BuyNowPayLaterRemaining();
