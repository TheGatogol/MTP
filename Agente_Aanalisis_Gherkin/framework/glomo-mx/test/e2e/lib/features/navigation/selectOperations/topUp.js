import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import operationals from '../../pages/operationals/operationals';

// Page Objects IDs
const OPERATIONALS = operationals.getId();

class TopUp extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operationals/topUp', parentNavigation: 'selectOperations/selectOperations'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OPERATIONALS:
                await operationals.accessToOperative({operative: 'mobileTopUp'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TopUp();
