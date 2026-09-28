import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
import ocCarLoanDetails from '../../pages/ocCarLoan/ocCarLoanDetails';
import ocCarLoanDownPayment from '../../pages/ocCarLoan/ocCarLoanDownPayment';
import ocCarLoanAccountSelection from '../../pages/ocCarLoan/ocCarLoanAccountSelection';
import ocCarLoanAccountSelectionSuccess from '../../pages/ocCarLoan/ocCarLoanAccountSelectionSuccess';
import ocCarLoanContractSigning from '../../pages/ocCarLoan/ocCarLoanContractSigning';
import ocCarLoanContractSigningSuccess from '../../pages/ocCarLoan/ocCarLoanContractSigningSuccess';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const CAR_LOAN_DETAILS = ocCarLoanDetails.getId();
const DOWN_PAYMENT = ocCarLoanDownPayment.getId();
const ACCOUNT_SELECT = ocCarLoanAccountSelection.getId();
const ACCOUNT_SELECT_SUCCESS = ocCarLoanAccountSelectionSuccess.getId();
const CONTRACT_SIGN = ocCarLoanContractSigning.getId();
const CONTRACT_SIGN_SUCCESS = ocCarLoanContractSigningSuccess.getId();

class OcCarLoanTracking extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanTracking', parentNavigation: 'contractProductSection'});
    }

    async go_impl({exitBtn}={}) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.auxEntry('oc-car-loan');
                break;
            case CAR_LOAN_DETAILS:
                await currentPage.goBack();
                break;
            case DOWN_PAYMENT:
                await ocCarLoanDownPayment.return(exitBtn);
                break;
            case ACCOUNT_SELECT:
                await currentPage.goBack();
                break;
            case ACCOUNT_SELECT_SUCCESS:
                await ocCarLoanAccountSelectionSuccess.return(exitBtn);
                break;
            case CONTRACT_SIGN:
                await currentPage.goBack();
                break;
            case CONTRACT_SIGN_SUCCESS:
                await ocCarLoanContractSigningSuccess.return(exitBtn);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanTracking();
