import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class FlexibleFinancingOffer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'flexibleFinancingOffer/flexibleFinancingOffer', parentNavigation: 'dashboard'});
    }
}
export default new FlexibleFinancingOffer();
