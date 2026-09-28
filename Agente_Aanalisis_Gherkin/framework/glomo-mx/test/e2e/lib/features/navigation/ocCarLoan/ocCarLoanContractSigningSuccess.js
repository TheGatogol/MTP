import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocCarLoanContractSigning from '../../pages/ocCarLoan/ocCarLoanContractSigning';

// Page Objects IDs
const CONTRACT_SIGN = ocCarLoanContractSigning.getId();

class OcCarLoanContractSigningSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanContractSigningSuccess', parentNavigation: 'ocCarLoan/ocCarLoanContractSigning'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_SIGN:
                await ocCarLoanContractSigning.finishSigning();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanContractSigningSuccess();
