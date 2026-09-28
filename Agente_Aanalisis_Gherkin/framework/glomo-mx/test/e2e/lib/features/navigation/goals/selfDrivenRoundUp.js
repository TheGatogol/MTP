import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import goals from '../../pages/goals/goals';

// Page Objects IDs
const GOALS = goals.getId();

class SelfDrivenRoundUp extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'goals/selfDrivenRoundUp', parentNavigation: 'goals/goals'});
    }

    async go_impl(route) {
        switch (currentPage.getId()) {
            case GOALS:
                switch (route) {
                    case 'list goals':
                        await goals.addContributionRule('rounding');
                        break;
                    case 'automatic contributions':
                        await goals.addContribution('rounding');
                        break;
                    case 'edit purchases contribution':
                        await goals.editPurchasesContribution();
                        break;
                    case 'edit purchases contribution from step':
                        await goals.editContribution('purchases');
                        break;
                    default:
                        throw new NotPathNavigationError();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SelfDrivenRoundUp();
