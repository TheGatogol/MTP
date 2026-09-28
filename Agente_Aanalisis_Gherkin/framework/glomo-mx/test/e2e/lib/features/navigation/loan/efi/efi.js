import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class EffiOffer extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'loan/efi/efi', parentNavigation: 'dashboard' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.isFutura()
                    ? await dashboard.enterOffer('EFECTIVO INMEDIATO')
                    : await dashboard.accessToInstantCash();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EffiOffer();
