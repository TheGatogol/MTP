import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blockAndReplacement from '../../pages/blockAndReplacement/blockAndReplacement';

// Page Objects IDs
const BLOCK_AND_REPLACEMENT = blockAndReplacement.getId();

class BlockAndReplacementSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blockAndReplacement/blockAndReplacementSuccess', parentNavigation: 'blockAndReplacement/blockAndReplacement'});
    }

    async go_impl(option = '') {
        switch (currentPage.getId()) {
            case BLOCK_AND_REPLACEMENT:
                if(option==='instant'){
                    await currentPage.selectBlockCard();
                } else {
                    await blockAndReplacement.signModal.confirmPassword();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlockAndReplacementSuccess();
