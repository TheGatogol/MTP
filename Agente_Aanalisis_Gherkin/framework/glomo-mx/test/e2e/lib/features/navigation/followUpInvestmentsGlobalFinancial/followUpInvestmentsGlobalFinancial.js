import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class FollowUpInvestmentsGlobalFinancial extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'followUpInvestmentsGlobalFinancial/followUpInvestmentsGlobalFinancial',
            parentNavigation: 'dashboard'
        });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessPatrimonialBalance({entrypoint: 'linkPatrimonialBalance'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FollowUpInvestmentsGlobalFinancial();
