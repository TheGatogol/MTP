import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';

// Pages
import investmentsFollowUp from '../../pages/investmentsFollowUp/investmentsFollowUp';

// Page Objects IDs
const INVESTMENTSFOLLOWUP = investmentsFollowUp.getId();

class InvestmentsFollowUpFeedback extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'investmentsFollowUp/investmentsFollowUpFeedback',
            parentNavigation: 'investmentsFollowUp',
        });
    }

    async go_impl({stars}) {
        switch (currentPage.getId()) {
            case INVESTMENTSFOLLOWUP:
                await investmentsFollowUp.selectFeedback(stars);
                await Commands.pause({time: config.wait.S}); // Wait for accounts contracts
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InvestmentsFollowUpFeedback();
