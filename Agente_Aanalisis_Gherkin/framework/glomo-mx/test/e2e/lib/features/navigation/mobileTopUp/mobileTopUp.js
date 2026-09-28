import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import topUp from '../../pages/operationals/topUp';

// Page Objects IDs
const TOP_UP = topUp.getId();

class MobileTopUp extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mobileTopUp/mobileTopUp', parentNavigation: 'selectOperations/topUp'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TOP_UP:
                await topUp.accessToOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MobileTopUp();
