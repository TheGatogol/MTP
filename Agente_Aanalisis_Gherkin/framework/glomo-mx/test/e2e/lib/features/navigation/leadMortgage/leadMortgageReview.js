import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import leadMortgage from '../../pages/leadMortgage/leadMortgage';

// Page Objects IDs
const LEAD_MORTGAGE = leadMortgage.getId();

class LeadMortgageReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'leadMortgage/leadMortgageReview', parentNavigation: 'leadMortgage/leadMortgage'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LEAD_MORTGAGE:
                await currentPage.interactLeadMortgage({info: 'request'});
                await currentPage.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LeadMortgageReview();
