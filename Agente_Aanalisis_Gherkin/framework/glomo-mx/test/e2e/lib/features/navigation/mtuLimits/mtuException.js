import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import cardlessWithdrawal from '../../pages/cardlessWithdrawal/cardlessWithdrawal';
import transfers from '../../pages/diy/transfer/transfer';
import billPaymentsDashboard from '../../pages/billPaymentsDashboard/billPaymentsDashboard';
import mobileTopUp from '../../pages/mobileTopUp/mobileTopUp';
import billPayments from '../../pages/billPayments/productDetail/billPaymentsSummary';
import internationalTransfer from '../../pages/internationalTransfer/internationalTransfer';
import blackhawkPurchase from '../../pages/blackhawk/blackhawkPurchase';

const CARDLESS_WITHDRAWAL = cardlessWithdrawal.getId();
const TRANSFER_PAGE = transfers.getId();
const BILL_PAYMENTS_DASHBOARD = billPaymentsDashboard.getId();
const MOBILE_TOP_UP = mobileTopUp.getId();
const BILL_PAYMENTS_PRODUCT_DETAIL = billPayments.getId();
const INTERNATIONAL_TRANSFERS = internationalTransfer.getId();
const BLACKHAWK_PURCHASE = blackhawkPurchase.getId();

class MtuException extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mtuLimits/mtuException'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case CARDLESS_WITHDRAWAL:
                await cardlessWithdrawal.fillOtp(otp = '12345678');
                break;
            case TRANSFER_PAGE:
                await transfers.confirmToken(otp);
                break;
            case BILL_PAYMENTS_DASHBOARD:
                await billPaymentsDashboard.confirmSummaryPayment();
                break;
            case BILL_PAYMENTS_PRODUCT_DETAIL:
                await billPayments.confirmPayment();
                break;
            case MOBILE_TOP_UP:
                await mobileTopUp.confirmHiring();
                break;
            case INTERNATIONAL_TRANSFERS:
                await internationalTransfer.completeOperation();
                break;
            case BLACKHAWK_PURCHASE:
                await currentPage.finishCardPurchase();
                await blackhawkPurchase.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MtuException();
