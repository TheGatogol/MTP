import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import pfmDashboard from '../../pages/pfm/dashboard/dashboardDetail';
import selfDrivenRoundUp from '../../pages/goals/selfDrivenRoundUp';

// Page Objects IDs
const PFM = pfmDashboard.getId();
const SELF_DRIVEN_ROUND_UP = selfDrivenRoundUp.getId();

class Goals extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'goals/goals', parentNavigation: 'pfm/dashboard/dashboardDetail'});
    }

    async go_impl({minor = false} = {}) {
        switch (currentPage.getId()) {
            case PFM:
                await pfmDashboard.accessGoals(minor);
                break;
            case SELF_DRIVEN_ROUND_UP:
                await selfDrivenRoundUp.closeRules();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Goals();
