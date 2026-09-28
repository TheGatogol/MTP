import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import ocPaymentPlanDecreaseLoan from '../../pages/loansPaymentsPlans/ocPaymentPlanDecreaseLoan';
import ocPaymentPlanDecreaseAuto from '../../pages/loansPaymentsPlans/ocPaymentPlanDecreaseAuto';
import ocLoanPaymentPlanRestructurePage from '../../pages/loansPaymentsPlans/ocLoanPaymentPlanRestructurePage';

const DECREASE_LOAN = ocPaymentPlanDecreaseLoan.getId();
const DECREASE_AUTO = ocPaymentPlanDecreaseAuto.getId();
const RESTRUCTURE_LOAN = ocLoanPaymentPlanRestructurePage.getId();
class OcPaymentPlanLoanSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loansPaymentsPlans/ocPaymentPlanLoanSuccessPage'});
    }
    async go_impl()  {
        switch (currentPage.getId()) {
            case DECREASE_LOAN:
                await ocPaymentPlanDecreaseLoan.fillOtp('30747008');
                break;
            case DECREASE_AUTO:
                await ocPaymentPlanDecreaseAuto.fillOtp('30747008');
                break;
            case RESTRUCTURE_LOAN:
                await ocLoanPaymentPlanRestructurePage.fillOtp('30747008');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new OcPaymentPlanLoanSuccess();
