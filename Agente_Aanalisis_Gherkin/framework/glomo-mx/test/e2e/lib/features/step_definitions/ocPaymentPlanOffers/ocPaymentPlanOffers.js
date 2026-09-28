import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user selects payment plan offer "([^"]*)"$/, async function(offerType) {
    storage['offerType'] = offerType.toLowerCase();
    switch (offerType.toLowerCase()) {
        case 'support fixed payments':
            await navigation.cardPaymentsPlan.ocSupportFixedPayments.go({offerId: global.user.offers.supportFixedPayments});
            break;
        case 'offer support fixed payments not available':
        case 'offer support fixed payments out of schedule':
        case 'error support fixed payments on offer':
            await navigation.cardPaymentsPlan.ocPaymentPlanCardError.go({offerId: global.user.offers.supportFixedPaymentsError});
            break;
        case 'payment plan for restructuring':
            await navigation.cardPaymentsPlan.ocPaymentPlanRestructure.go({offerId: global.user.offers.paymentPlanRestructuring});
            break;
        case 'offer payment plan for restructuring not available':
        case 'offer payment plan for restructuring out of schedule':
        case 'error payment plan for restructuring on offer':
            await navigation.cardPaymentsPlan.ocPaymentPlanCardError.go({offerId: global.user.offers.paymentPlanRestructuringError});
            break;
        case 'payment plan fixed':
            await navigation.cardPaymentsPlan.ocPaymentPlanFixed.go({offerId: global.user.offers.paymentFixedPlan});
            break;
        case 'offer payment plan fixed not available':
        case 'offer payment plan fixed out of schedule':
        case 'error payment plan fixed on offer':
            await navigation.cardPaymentsPlan.ocPaymentPlanCardError.go({offerId: global.user.offers.paymentFixedPlanError});
            break;
        case 'restructure':
            await navigation.loansPaymentsPlans.ocLoanPaymentPlanRestructure.go({offerId: global.user.offers.loanPaymentPlanRestructure});
            break;
        case 'decrease car':
            await navigation.loansPaymentsPlans.ocPaymentPlanDecreaseAuto.go({offerId: global.user.offers.decreaseCar});
            break;
        case 'decrease loan':
            await navigation.loansPaymentsPlans.ocPaymentPlanDecreaseLoan.go({offerId: global.user.offers.paymentPlanDecreaseLoan});
            break;
        case 'decrease loan not available':
        case 'decrease loan not out of schedule':
        case 'decrease loan not available error on offer':
            await navigation.loansPaymentsPlans.ocPaymentPlanLoanError.go({offerId: global.user.offers.paymentPlanDecreaseLoanError});
            break;
        case 'decrease loan car not available':
        case 'decrease loan car not out of schedule':
        case 'decrease loan car not available error on offer':
            await navigation.loansPaymentsPlans.ocPaymentPlanLoanError.go({offerId: global.user.offers.decreaseCarError});
            break;
        case 'loan restructure not available':
        case 'loan restructure not out of schedule':
        case 'loan restructure not available error on offer':
            await navigation.loansPaymentsPlans.ocPaymentPlanLoanError.go({offerId: global.user.offers.loanPaymentPlanRestructureError});
            break;
        case 'invest advisory':
            await navigation.investAdvisory.investAdvisoryPortfolio.go({offerId: global.user.offers.investAdvisory});
            break;
        case 'invest advisory not available':
            await currentPage.selectProductOfferId(global.user.offers.investAdvisory);
            break;
        default:
            throw new Error(`The offer is not correct, received: ${offerType}`);
    }
});

When('the user select and confirm payment plan terms and conditions', async function() {
    await currentPage.goToTermsAndConditions();
    await currentPage.acceptTermsAndConditions();
});

When('the user authorize payment plan offer', async function() {
    await currentPage.goToTermsAndConditions();
    await currentPage.acceptTermsAndConditions();
    await currentPage.bindingOffer();
});

When('the user accesses payment plan terms and conditions', async function() {
    await currentPage.goToTermsAndConditions();
});

When('the user completes the binding of the payment plan', async function() {
    switch (storage['offerType']) {
        case 'support fixed payments':
        case 'payment plan for restructuring':
        case 'payment plan fixed':
            await navigation.cardPaymentsPlan.ocPaymentPlanCardSuccess.go();
            break;
        case 'decrease loan':
        case 'decrease car':
        case 'restructure':
            await navigation.loansPaymentsPlans.ocPaymentPlanLoanSuccess.go();
            break;
        default:
            throw new Error(`The offer is not correct, received: ${storage['offerType']}`);
    }
});

When('the user to exit the payment offer detail', async function() {
    await currentPage.closeOfferDetail();
});
