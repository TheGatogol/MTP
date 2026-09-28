import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import validateEmail  from '../../pages/emailManagement/validateEmail';

// Page Objects IDs
const VALIDATE = validateEmail.getId();

class ValidatedEmailSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'emailManagement/validatedEmailSuccess', parentNavigation: 'emailManagement/validateEmail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case VALIDATE:
                await validateEmail.validateMailCode();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new ValidatedEmailSuccess();
