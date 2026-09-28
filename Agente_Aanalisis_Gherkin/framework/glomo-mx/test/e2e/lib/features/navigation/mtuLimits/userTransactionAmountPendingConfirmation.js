import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import operationalLimitsSettings from '../../pages/operationalLimitsSettings/operationalLimitsSettings';

const OPERATIONAL_LIMITS_SETTINGS = operationalLimitsSettings.getId();

class UserTransactionAmountPendingConfirmation extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'mtuLimits/userTransactionAmountPendingConfirmation', parentNavigation: 'operationalLimitsSettings/operationalLimitsSettings' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OPERATIONAL_LIMITS_SETTINGS:
                await operationalLimitsSettings.fillOtp('57979508');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new UserTransactionAmountPendingConfirmation();
