import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sidebarPage from '../pages/sidebar/sideBar';
import memberGetMemberPortability from '../pages/memberGetMemberPayrollPortability/memberGetMemberPayrollPortability';

// Page Objects IDs
const SIDEBAR = sidebarPage.getId();
const MGM_PORTABILITY = memberGetMemberPortability.getId();

class MemberGetMember extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'memberGetMember/memberGetMember', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'member get member'});
                break;
            case MGM_PORTABILITY:
                await memberGetMemberPortability.registerOtherInvite();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new MemberGetMember();
