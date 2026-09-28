import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import onBoardingDigitalAccountPage from '../../pages/onBoardingN2/onBoardingDigitalAccount';
import digitalActivationPage from '../../pages/digitalActivation/digitalActivation';

const DIGITAL_ACCOUNT = onBoardingDigitalAccountPage.getId();
const DIGITAL_ACTIVATION = digitalActivationPage.getId();

class OnBoardingDigitalAccountMultiStep extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'onBoardingN2/onBoardingDigitalAccountMultistep', parentNavigation: 'onBoardingN2/onBoardingN2'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case DIGITAL_ACCOUNT:
                await onBoardingDigitalAccountPage.goToAccountDigital();
                break;
            case DIGITAL_ACTIVATION:
                await digitalActivationPage.goToTransversalEnrollmentEntrypoint();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnBoardingDigitalAccountMultiStep();
