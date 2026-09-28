import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Page
import deferredSignature from '../../pages/deferredSignature/deferredSignaturePurchaseInstruction';

// Page Objects IDs
const DEFERRED_SIGNATURE = deferredSignature.getId();

class DeferredSignaturePurchaseInstructionReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'deferredSignature/deferredSignaturePurchaseInstructionReview', parentNavigation: 'deferredSignature/deferredSignaturePurchaseInstruction'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEFERRED_SIGNATURE:
                await deferredSignature.completeProcess();
                await deferredSignature.fillOtp('12345678');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DeferredSignaturePurchaseInstructionReview();
