import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import updateEmail  from '../../pages/emailManagement/updateEmail';

// Page Objects IDs
const UPDATE = updateEmail.getId();

class ValidateEmail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'emailManagement/validateEmail', parentNavigation: 'emailManagement/updateEmail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case UPDATE:
                await updateEmail.confirmOperation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new ValidateEmail();
