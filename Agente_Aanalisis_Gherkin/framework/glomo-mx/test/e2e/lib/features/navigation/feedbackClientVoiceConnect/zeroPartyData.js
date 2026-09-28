import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import dashboard from '../../pages/dashboard/dashboard';
import contractProductSection from '../../pages/contractProductSection/contractProductSection';

const DASHBOARD = dashboard.getId();
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class ZeroPartyData extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'feedbackClientVoiceConnect/zeroPartyData', parentNavigation: 'contractProductSection'});
    }
    async go_impl() {
        const offer = (await dashboard.isFutura())
            ? 'CARD FORMULARIO ZERO PARTY D'
            : 'zero party data';
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.enterOffer(offer);
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct(offer);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new ZeroPartyData();
