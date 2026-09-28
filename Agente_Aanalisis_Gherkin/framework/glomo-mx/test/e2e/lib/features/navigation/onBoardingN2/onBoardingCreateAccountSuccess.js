import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import onBoardingDigitalAccountMultistep from '../../pages/onBoardingN2/onBoardingDigitalAccountMultistep';

const CREATE_ACCOUNT = onBoardingDigitalAccountMultistep.getId();

class OnBoardingCreateAccountSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'onBoardingN2/onBoardingDigitalAccountSuccess', parentNavigation: 'onBoardingN2/onBoardingDigitalAccountMultiStep'});
    }

    async go_impl(flag) {
        switch(currentPage.getId()) {
            case CREATE_ACCOUNT:
                if (flag) {
                    await onBoardingDigitalAccountMultistep.fillOtp('111222');
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnBoardingCreateAccountSuccess();
