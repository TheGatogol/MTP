import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import rewardsMemberGetMember from '../pages/memberGetMember/memberGetMember';

// Page Objects IDs
const MGM = rewardsMemberGetMember.getId();

class MemberGetMemberPayrollPortability extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'memberGetMemberPayrollPortability/memberGetMemberPayrollPortability', parentNavigation: 'memberGetMember'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case MGM:
                await rewardsMemberGetMember.selectActionBtn('register button');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new MemberGetMemberPayrollPortability();
