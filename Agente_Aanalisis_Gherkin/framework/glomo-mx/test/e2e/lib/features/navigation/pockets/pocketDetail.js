import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import pockets from '../../pages/productDetails/pockets/pockets';
import pocketSuccess from '../../pages/productDetails/pockets/pocketSuccess';
import pocketEdit from '../../pages/productDetails/pockets/pocketEdit';

// Page Objects IDs
const POCKETS_SCREEN = pockets.getId();
const SUCCESS_SCREEN = pocketSuccess.getId();
const EDIT_SCREEN = pocketEdit.getId();

class PocketDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/pocketDetail', parentNavigation: 'pockets/pockets'});
    }

    async go_impl({activity, element}) {
        switch (currentPage.getId()) {
            case POCKETS_SCREEN:
                await pockets.goToPocketDetail({activity});
                break;
            case SUCCESS_SCREEN:
                await pocketSuccess.closeScreen({element});
                break;
            case EDIT_SCREEN:
                await pocketEdit.cancelEditPocket();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PocketDetail();
