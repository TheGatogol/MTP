import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocLoanPaymentPlanLoanConsolidation from '../../pages/ocLoanPaymentPlanLoanConsolidation/ocLoanPaymentPlanLoanConsolidation';

When(/^the user selects payment plan offer loan consolidation loan plus loan$/, async function() {
    await navigation.ocLoanPaymentPlanLoanConsolidation.ocLoanPaymentPlanLoanConsolidation.go({offerId: global.user.offers.loanPlusLoan});
});

When(/^the user continues to terms and conditions for "([^"]*)"$/, async function(action) {
    switch (action.toLowerCase()) {
        case 'navigate':
            await ocLoanPaymentPlanLoanConsolidation.goToTermsAndConditions();
            break;
        case 'confirm':
            await ocLoanPaymentPlanLoanConsolidation.goToTermsAndConditions();
            await ocLoanPaymentPlanLoanConsolidation.checkTermsAndConditions();
            break;
        case 'visualize summary':
            await ocLoanPaymentPlanLoanConsolidation.goToTermsAndConditions();
            await ocLoanPaymentPlanLoanConsolidation.checkTermsAndConditions();
            await ocLoanPaymentPlanLoanConsolidation.goConsultSummary();
            break;
        case 'visualize summary and requests':
            await ocLoanPaymentPlanLoanConsolidation.goConsultSummaryTerms();
            await ocLoanPaymentPlanLoanConsolidation.goRequestOffer();
            break;
        case 'accept and binding':
            await ocLoanPaymentPlanLoanConsolidation.goToTermsAndConditions();
            await ocLoanPaymentPlanLoanConsolidation.checkTermsAndConditions();
            await ocLoanPaymentPlanLoanConsolidation.goBindingOffer();
            break;
        default:
            throw new Error(`The action is not correct, received: ${action}`);
    }
});

When(/^the user complete the offer and binding payment plan loan offer$/, async function() {
    await ocLoanPaymentPlanLoanConsolidation.fillOtp('13503184');
});

When(/^the user abandons the offer$/, async function() {
    await ocLoanPaymentPlanLoanConsolidation.goWarningModal();
});
