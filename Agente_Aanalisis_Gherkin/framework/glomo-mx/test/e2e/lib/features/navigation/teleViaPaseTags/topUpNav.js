import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import operationals from '../../pages/operationals/operationals';

const OPERATIONALS = operationals.getId();

class TopUpNav extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/topUpPage', parentNavigation:'selectOperations'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OPERATIONALS:
                await currentPage.accessToOperative({operative: 'mobileTopUp'});
                break;
            default:
                throw new NotPathNavigationError();
        }

    }

}

export default new TopUpNav();
