import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import memberGetMemberInviteFriendPage from '../../pages/memberGetMemberInviteFriend/memberGetMemberInviteFriend';
import sidebarPage from '../../pages/sidebar/sideBar';
const INVITE_FRIEND = memberGetMemberInviteFriendPage.getId();
const SIDEBAR = sidebarPage.getId();
class MemberGetMemberInviteFriend extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'memberGetMemberInviteFriend/memberGetMemberInviteFriend', parentNavigation: 'sidebar' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'member get member'});
                break;
            case INVITE_FRIEND:
                await memberGetMemberInviteFriendPage.selectDynamicsRewards();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MemberGetMemberInviteFriend();
