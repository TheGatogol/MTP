import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import nonPreApprovedCCBureauPage from '../../../pages/creditCardApplication/nonPreApproved/nonPreApprovedCCBureau';

// Page Objects IDs
const NON_PREAPPROVED_BUREAU = nonPreApprovedCCBureauPage.getId();

class NonPreApprovedCCNavigation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardApplication/nonPreApproved/nonPreApprovedCC', parentNavigation: 'creditCardApplication/nonPreApproved/nonPreApprovedCCBureau'});
    }

    async go_impl({successfullAttempt = true} = {}) {
        switch (currentPage.getId()) {
            case NON_PREAPPROVED_BUREAU:
                await nonPreApprovedCCBureauPage.acceptConditions();
                await nonPreApprovedCCBureauPage.confirmBureauCheck();
                await currentPage.fillOtp('11111111');
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

export default new NonPreApprovedCCNavigation();
