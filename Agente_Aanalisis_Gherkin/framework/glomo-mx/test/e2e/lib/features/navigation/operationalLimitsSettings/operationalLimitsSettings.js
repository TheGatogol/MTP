import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';
import settingsPage from '../../pages/operationalLimitsSettings/settingsPage';
import mtuPendingConfirmation from '../../pages/mtuLimits/userTransactionAmountPendingConfirmation';

const SETTINGS = settingsPage.getId();
const MTU_PENDING_CONFIRMATION = mtuPendingConfirmation.getId();

async function setLocalStorage(key, value) {
    await Commands.execute({
        script: (arg1, arg2) => {
            localStorage[arg1] = arg2;
        },
        args: [key, value],
    });
}

class OperationalLimitsSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operationalLimitsSettings/operationalLimitsSettings', parentNavigation: 'operationalLimitsSettings/settingsNav'});
    }

    async go_impl({onboardingState} = {}) {
        switch (currentPage.getId()) {
            case SETTINGS: 
                if (onboardingState === 'onboarding operational limits help') {
                    // eslint-disable-next-line quotes
                    await setLocalStorage('operational_welcome_operatives', '{"isActive":true}');
                }
                await settingsPage.goToOperationalSettings();
                break;
            case MTU_PENDING_CONFIRMATION:
                await mtuPendingConfirmation.goToConfirmLimit();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new OperationalLimitsSettings();
