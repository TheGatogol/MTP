import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class InvestAdvisoryPortfolio extends AbstractGlomoNavigation {

    constructor() {
        super({page: 'investAdvisory/investAdvisoryPortfolio', parentNavigation: 'contractProductSection'});
    }

    async go_impl({offerId} = {})  {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProductOfferId(offerId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new InvestAdvisoryPortfolio();
