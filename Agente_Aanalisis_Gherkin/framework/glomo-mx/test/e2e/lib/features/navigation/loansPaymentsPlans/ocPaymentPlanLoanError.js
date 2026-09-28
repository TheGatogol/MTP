import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
import loansPaymentPledge from '../../pages/loansPaymentPledge/loansPaymentPledge';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const LOANS_PAYMENT_PLEDGE = loansPaymentPledge.getId();
class OcPaymentPlanLoanError extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loansPaymentsPlans/ocPaymentPlanLoanErrorPage', parentNavigation: 'contractProductSection'});
    }
    async go_impl({offerId} = {})  {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProductOfferId(offerId);
                break;
            case LOANS_PAYMENT_PLEDGE:
                await loansPaymentPledge.openOffer();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new OcPaymentPlanLoanError();
