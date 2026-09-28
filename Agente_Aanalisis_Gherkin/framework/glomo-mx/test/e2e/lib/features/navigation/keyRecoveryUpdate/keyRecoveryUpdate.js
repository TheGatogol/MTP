import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import accessesAndSignatures from '../../pages/securityAccess/securityAccess';

// Page Objects IDs
const CHANGE_KEY = accessesAndSignatures.getId();

class KeyRecoveryUpdate extends AbstractGlomoNavigation {
    constructor(){
        super ({page: 'keyRecoveryUpdate/keyRecoveryUpdate', parentNavigation: 'securityAccess/securityAccess'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case CHANGE_KEY:
                await accessesAndSignatures.goChangePassword();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new KeyRecoveryUpdate();
