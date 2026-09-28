import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import disabilityVideocallHearingTacticalPutAttention from '../../pages/disabilityVideocall/disabilityVideocallHearingTacticalPutAttention';
// Page Objects IDs
const DISABILITY_VIDEOCALL_HEARING_TACTICAL_PUT_ATTENTION = disabilityVideocallHearingTacticalPutAttention.getId();
class DisabilityVideocallCalling extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'disabilityVideocall/disabilityVideocallHearingTacticalCalling', parentNavigation: 'disabilityVideocall/disabilityVideocallPutAttention'});
    }

    async go_impl(timeout) {
        switch (currentPage.getId()) {
            case DISABILITY_VIDEOCALL_HEARING_TACTICAL_PUT_ATTENTION:
                await disabilityVideocallHearingTacticalPutAttention.startVideocall();
                await this.page.timeoutLobby(timeout);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DisabilityVideocallCalling();
