import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';

// Pages
import investmentsFollowUp from '../../pages/investmentsFollowUp/investmentsFollowUp';

// Page Objects IDs
const INVESTMENTSFOLLOWUP = investmentsFollowUp.getId();

class InvestmentsFollowUpDistribution extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'investmentsFollowUp/investmentsFollowUpDistribution',
            parentNavigation: 'investmentsFollowUp',
        });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case INVESTMENTSFOLLOWUP:
                await investmentsFollowUp.accessMyInvestmentsDistributionOfInvestments();
                await Commands.pause({time: config.wait.S}); // Wait for accounts contracts
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InvestmentsFollowUpDistribution();
