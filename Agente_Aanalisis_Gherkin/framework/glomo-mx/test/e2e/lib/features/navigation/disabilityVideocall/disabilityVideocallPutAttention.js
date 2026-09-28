import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import disabilityVideocallHearingTactical from '../../pages/disabilityVideocall/disabilityVideocallHearingTactical';

// Page Objects IDs
const DISABILITY_VIDEOCALL_HEARING_TACTICAL = disabilityVideocallHearingTactical.getId();

class DisabilityVideocallPutAttention extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'disabilityVideocall/disabilityVideocallHearingTacticalPutAttention', parentNavigation: 'disabilityVideocall/disabilityVideocall' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DISABILITY_VIDEOCALL_HEARING_TACTICAL:
                await disabilityVideocallHearingTactical.acceptTermsAndConditions();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.S
                });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DisabilityVideocallPutAttention();
