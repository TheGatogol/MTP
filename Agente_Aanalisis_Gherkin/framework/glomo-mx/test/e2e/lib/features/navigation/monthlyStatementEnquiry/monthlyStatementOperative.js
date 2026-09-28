import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import operationals from '../../pages/operationals/operationals';

const OPERATIONALS = operationals.getId();

class StatementOperative extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'monthlyStatementEnquiry/monthlyStatementOperative', parentNavigation: 'selectOperations/selectOperations'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OPERATIONALS:
                await operationals.accessToOperative({operative: 'accountStatus'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new StatementOperative();
