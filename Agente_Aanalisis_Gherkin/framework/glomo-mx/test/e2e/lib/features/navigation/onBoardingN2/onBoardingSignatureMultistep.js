import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import onBoardingAccountSignaturePadModal from '../../pages/onBoardingN2/onBoardingAccountSignaturePadModal';

const  RETURN_BACK = onBoardingAccountSignaturePadModal.getId();

class OnBoardingSignatureMultistep extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'onBoardingN2/onBoardingDigitalAccountMultistep', parentNavigation: 'onBoardingN2/onBoardingSignaturePadModal'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case RETURN_BACK:
                await onBoardingAccountSignaturePadModal.continueSignature();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnBoardingSignatureMultistep();
