import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import pocketDetail from '../../pages/productDetails/pockets/pocketDetail';
import createPocket from '../../pages/productDetails/pockets/createPocket';
import pocketsAddMoney from '../../pages/productDetails/pockets/pocketsAddMoney';
import pocketsWithdrawal from '../../pages/productDetails/pockets/pocketsWithdrawal';
import editPocket from '../../pages/productDetails/pockets/pocketEdit';

// Page Objects IDs
const CREATE_POCKET_SCREEN = createPocket.getId();
const ADD_MONEY_SCREEN = pocketsAddMoney.getId();
const WITHDRAWAL_MONEY_SCREEN = pocketsWithdrawal.getId();
const REMOVE_POCKET_SCREEN = pocketDetail.getId();
const EDIT_POCKET_SCREEN = editPocket.getId();

class PocketSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/pocketSuccess', parentNavigation: 'pockets/pockets'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CREATE_POCKET_SCREEN:
                await createPocket.goToPocketSuccess();
                break;
            case ADD_MONEY_SCREEN:
                await pocketsAddMoney.goToSuccess();
                break;
            case WITHDRAWAL_MONEY_SCREEN:
                await pocketsWithdrawal.finishWithdrawal();
                break;
            case REMOVE_POCKET_SCREEN:
                await pocketDetail.confirmRemovePocket();
                break;
            case EDIT_POCKET_SCREEN:
                await editPocket.goToSuccess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PocketSuccess();
