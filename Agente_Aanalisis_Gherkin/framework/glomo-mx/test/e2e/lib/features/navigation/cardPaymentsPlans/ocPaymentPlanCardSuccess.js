import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import ocSupportFixedPayments from '../../pages/cardPaymentsPlans/ocSupportFixedPayments';
import ocPaymentPlanRestructure from '../../pages/cardPaymentsPlans/ocPaymentPlanRestructure';
import ocPaymentPlanFixed from '../../pages/cardPaymentsPlans/ocPaymentPlanFixed';

const SUPPORT_FIXED_PAYMENTS = ocSupportFixedPayments.getId();
const PAYMENT_PLAN_RESTRUCTURE = ocPaymentPlanRestructure.getId();
const PAYMENT_PLAN_FIXED = ocPaymentPlanFixed.getId();
class OcPaymentPlanCardSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardPaymentsPlans/ocPaymentPlanCardSuccess'});
    }
    async go_impl()  {
        switch (currentPage.getId()) {
            case SUPPORT_FIXED_PAYMENTS:
                await ocSupportFixedPayments.fillOtp('09052235');
                break;
            case PAYMENT_PLAN_RESTRUCTURE:
                await ocPaymentPlanRestructure.fillOtp('09052235');
                break;
            case PAYMENT_PLAN_FIXED:
                await ocPaymentPlanFixed.fillOtp('09052235');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new OcPaymentPlanCardSuccess();
