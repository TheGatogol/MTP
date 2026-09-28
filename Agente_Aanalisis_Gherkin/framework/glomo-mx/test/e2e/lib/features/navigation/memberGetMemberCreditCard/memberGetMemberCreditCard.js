import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import memberGetMemberPage from '../../pages/memberGetMember/memberGetMember';

// Page Objects IDs
const MGM = memberGetMemberPage.getId();

class MemberGetMemberCreditCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'memberGetMemberCreditCard/memberGetMemberCreditCard', parentNavigation: 'memberGetMember'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case MGM:
                await memberGetMemberPage.accessToRegistrationForm();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new MemberGetMemberCreditCard();
