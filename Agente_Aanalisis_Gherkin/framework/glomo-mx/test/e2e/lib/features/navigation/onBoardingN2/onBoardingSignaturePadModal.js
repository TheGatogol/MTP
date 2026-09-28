import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import onBoardingDigitalAccountMultistep from '../../pages/onBoardingN2/onBoardingDigitalAccountMultistep';

const ADD_SIGNATURE = onBoardingDigitalAccountMultistep.getId();

class OnBoardingSignaturePadModal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'onBoardingN2/onBoardingAccountSignaturePadModal', parentNavigation: 'onBoardingN2/onBoardingDigitalAccountMultiStep'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case ADD_SIGNATURE:
                await onBoardingDigitalAccountMultistep.enterSign();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnBoardingSignaturePadModal();
