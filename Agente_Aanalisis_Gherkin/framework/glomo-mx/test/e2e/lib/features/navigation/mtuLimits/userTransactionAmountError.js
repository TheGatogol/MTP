import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import confirmModification from '../../pages/mtuLimits/userTransactionAmountDetailNotification';

const CONFIRM_MODIFICATION = confirmModification.getId();

class UserTransactionAmountError extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'mtuLimits/userTransactionAmountError', parentNavigation: 'mtuLimits/userTransactionAmountDetailNotification' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONFIRM_MODIFICATION:
                await confirmModification.fillOtp('12345678');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new UserTransactionAmountError();
