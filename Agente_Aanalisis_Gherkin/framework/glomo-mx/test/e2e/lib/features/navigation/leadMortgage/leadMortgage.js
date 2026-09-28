import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductSection from '../../pages/contractProductSection/contractProductSection';
import redirectCallMeBack from '../../pages/redirectCallMeBack/redirectCallMeBack';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();
const REDIRECT_CALL_ME_BACK = redirectCallMeBack.getId();
class LeadMortgage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'leadMortgage/leadMortgage', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('mortgage-loan');
                break;
            case REDIRECT_CALL_ME_BACK:
                await redirectCallMeBack.closeCall();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LeadMortgage();
