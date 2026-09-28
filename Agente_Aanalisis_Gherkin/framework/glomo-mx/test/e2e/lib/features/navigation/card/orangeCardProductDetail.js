import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import cardGenerateVirtual from '../../pages/card/cardGenerateVirtual';
import cardGenerateVirtualReview from '../../pages/card/cardGenerateVirtualReview';
import dashboardPage from '../../pages/dashboard/dashboard';
import digitalCardGenerate from '../../pages/card/digitalCardGenerate';
import newAdditionalCard from '../../pages/productDetails/newAdditionalCard';
import financeTransactionMultipurchaseDebit from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchaseDebit';
import financeTransactionMultipurchaseDebitPostHiring from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchaseDebitPostHiring';
import pointsPurchaseReceipt from '../../pages/reward/pointsPurchaseReceipt';
import creditCardTracking from '../../pages/productDetails/creditCardTracking';
import rewardsLandingFilteredPoints from '../../pages/reward/rewardsLandingFilteredPoints';
import cardPaymentPage from '../../pages/creditCardPayment/cardCreditCardPayment';
import monthlyStatementEnquiry from '../../pages/flexibleFinancing/monthlyStatementEnquiry';
import cleanCardOperations from '../../pages/operatives/cleanCardOperations';
import cardActivation from '../../pages/operatives/cardActivation';
import movementsDetail from '../../pages/productDetails/movementsDetail';
import digitalButler from '../../pages/digitalButler/digitalButler';
import promotionsAdvancedPayments from '../../pages/promotionsAdvancedPayments/promotionsAdvancedPayments';
import ocDebitCardInmediateDelivery from '../../pages/ocDebitCardInmediateDelivery/ocDebitCardInmediateDelivery';
import ocDebitCard from '../../pages/cardOriginationOcDebitCard/cardOriginationOcDebitCard';
import cutOffDate from '../../pages/cutOffDate/cutOffDate';

const CARD_GENERATE_VIRTUAL = cardGenerateVirtual.getId();
const CARD_GENERATE_VIRTUAL_REVIEW = cardGenerateVirtualReview.getId();
const DASHBOARD = dashboardPage.getId();
const DIGITAL_CARD_GENERATE = digitalCardGenerate.getId();
const FINANCE_TRANSACTION_MULTIPURCHASE_DEBIT = financeTransactionMultipurchaseDebit.getId();
const FINANCE_TRANSACTION_MULTIPURCHASE_DEBIT_POST_HIRING = financeTransactionMultipurchaseDebitPostHiring.getId();
const NEW_ADDITIONAL = newAdditionalCard.getId();
const POINTS_PURCHASE_RECEIPT = pointsPurchaseReceipt.getId();
const CREDIT_CARD_TRACKING = creditCardTracking.getId();
const CARDCREDITCARDPAYMENT = cardPaymentPage.getId();
const REWARDS_LANDING_FILTERED_POINTS = rewardsLandingFilteredPoints.getId();
const MONTHLY_STATEMENT_ENQUIRY = monthlyStatementEnquiry.getId();
const CLEAN_CARD_OPERATIONS=cleanCardOperations.getId();
const CARD_ACTIVATION = cardActivation.getId();
const MOVEMENTS_DETAIL = movementsDetail.getId();
const DIGITAL_BUTLER = digitalButler.getId();
const PROMOTIONS_ADVANCED_PAYMENTS = promotionsAdvancedPayments.getId();
const OC_DEBIT_CARD_INMEDIATE_DELIVERY = ocDebitCardInmediateDelivery.getId();
const OC_DEBIT_CARD = ocDebitCard.getId();
const CUT_OFF_DATE = cutOffDate.getId();

class OrangeCardProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/orangeCardProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({card, standIn = false, step = '', blueConfig, action} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if (typeof card === 'object' && card.contractId) {
                    await dashboardPage.selectCardByContractId(card.contractId);
                } else {
                    await dashboardPage.selectCardByLastDigits(card, standIn);
                }
                break;
            case NEW_ADDITIONAL:
                await newAdditionalCard.confirmDialog();
                break;
            case POINTS_PURCHASE_RECEIPT:
                await pointsPurchaseReceipt.exitReceipt({type: 'go out'});
                break;
            case CARD_GENERATE_VIRTUAL:
                await cardGenerateVirtual.exitScreen();
                break;
            case CARD_GENERATE_VIRTUAL_REVIEW:
                await cardGenerateVirtualReview.exitScreen();
                break;
            case CREDIT_CARD_TRACKING:
                await creditCardTracking.exitScreen();
                break;
            case FINANCE_TRANSACTION_MULTIPURCHASE_DEBIT:
                await financeTransactionMultipurchaseDebit.exitSuccesfull();
                break;
            case FINANCE_TRANSACTION_MULTIPURCHASE_DEBIT_POST_HIRING:
                await financeTransactionMultipurchaseDebitPostHiring.exitScreen();
                break;
            case REWARDS_LANDING_FILTERED_POINTS:
                await rewardsLandingFilteredPoints.goBack();
                break;
            case CARDCREDITCARDPAYMENT:
                await cardPaymentPage.exitScreen();
                break;
            case MONTHLY_STATEMENT_ENQUIRY:
                await monthlyStatementEnquiry.exitScreen();
                break;
            case CLEAN_CARD_OPERATIONS:
                await cleanCardOperations.closeSearch();
                await cleanCardOperations.closeScreen();
                break;
            case CARD_ACTIVATION:
                await cardActivation.returnTheCardActivation();
                await cardActivation.confirmModal();
                break;
            case MOVEMENTS_DETAIL:
                await movementsDetail.returnMoviments();
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(blueConfig);
                break;
            case PROMOTIONS_ADVANCED_PAYMENTS:
                await promotionsAdvancedPayments.exitPage(card);
                break;
            case OC_DEBIT_CARD_INMEDIATE_DELIVERY:
                await ocDebitCardInmediateDelivery.closeFlow(step);
                break;
            case OC_DEBIT_CARD:
                await ocDebitCard.closeModal(step);
                break;
            case DIGITAL_CARD_GENERATE:
                await digitalCardGenerate.exitScreen();
                break;
            case CUT_OFF_DATE:
                await cutOffDate.interactsWithModal(action);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OrangeCardProductDetail();
