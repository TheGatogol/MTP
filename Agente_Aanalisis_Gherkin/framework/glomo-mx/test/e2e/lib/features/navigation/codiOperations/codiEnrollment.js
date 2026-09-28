import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import codiBeginRegister from '../../pages/codiOperations/codiBeginRegister';

const CODI_BEGIN_REGISTER = codiBeginRegister.getId();

class CodiEnrollment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiEnrollment', parentNavigation: 'codiOperations/codiBeginRegister'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CODI_BEGIN_REGISTER:
                await codiBeginRegister.enrolllNow();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiEnrollment();
