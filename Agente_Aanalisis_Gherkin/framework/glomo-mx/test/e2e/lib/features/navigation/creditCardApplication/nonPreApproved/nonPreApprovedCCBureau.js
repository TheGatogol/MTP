import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductSection from '../../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class NonPreApprovedCCBureauNavigation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardApplication/nonPreApproved/nonPreApprovedCCBureau', parentNavigation: 'contractProductSection'});
    }

    async go_impl({successfullAttempt = true} = {}) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('non-preapproved-credit-card');
                if(successfullAttempt){
                    await this.page.waitUntilSpinnerVeil({
                        timeoutToAppear: config.wait.XS,
                        timeoutToDisappear: config.wait.XL
                    });
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NonPreApprovedCCBureauNavigation();
