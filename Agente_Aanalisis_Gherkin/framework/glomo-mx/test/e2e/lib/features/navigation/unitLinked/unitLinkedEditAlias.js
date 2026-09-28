import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import unitLinkedPage from '../../pages/unitLinked/unitLinked';

const UNIT_LINKED = unitLinkedPage.getId();

class UnitLinkedEditAlias extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/editAlias', parentNavigation: 'unitLinked/unitLinked'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case UNIT_LINKED:
                await unitLinkedPage.accessAlias();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new UnitLinkedEditAlias();
