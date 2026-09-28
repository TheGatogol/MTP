import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import dynamicLifeInsurance from '../../pages/dynamicLifeInsurance/dynamicLifeInsurance';

When(/^the user accesses to dynamic life insurance offer$/, async function() {
    await navigation.dynamicLifeInsurance.mainPage.go();
});

When (/^the user accesses to the step "([^"]*)" from the dynamic life insurance operative$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'health questionnaire':
            await dynamicLifeInsurance.customizeInsurance();
            break;
        case 'insured amount':
            await dynamicLifeInsurance.selectHealthOption('healthy');
            break;
        case 'additional coverages':
            await dynamicLifeInsurance.insuranceAmountContinue();
            break;
        case 'offer insurance':
            await navigation.dynamicLifeInsurance.offerInsurance.go();
            break;
        case 'beneficiarios':
            await navigation.dynamicLifeInsurance.addBeneficiary.go();
            break;
        case 'payment insurance':
            await navigation.dynamicLifeInsurance.paymentMethod.go();
            break;
        case 'terms and conditions':
            await navigation.dynamicLifeInsurance.termsAndConditions.go();
            break;
        case 'confirmation':
            await navigation.dynamicLifeInsurance.confirm.go();
            break;
        default:
            throw new Error(`${option}`);
    }
});

When (/^the user arrives at the "([^"]*)" step$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'offer insurance':
            await navigation.dynamicLifeInsurance.offerInsurance.assert();
            break;
        case 'payment insurance':
            await navigation.dynamicLifeInsurance.paymentMethod.assert();
            break;
        case 'terms and conditions':
            await navigation.dynamicLifeInsurance.termsAndConditions.assert();
            break;
        case 'confirmation':
            await navigation.dynamicLifeInsurance.confirm.assert();
            break;
        default:
            throw new Error(`${option}`);
    }
});

When (/^the user changes the status of the "([^"]*)" check$/, async function(optionQuestionnaire) {
    await currentPage.selectHealthOption(optionQuestionnaire);
});

When (/^the user changes the status of the check coverage$/, async function() {
    await currentPage.changeCheckCoverageStatus();
});

When (/^the user selects the payment "([^"]*)"$/, async function(frequency) {
    await currentPage.selectFrequencyOfPayments(frequency);
});

When (/^the user enters a discount coupon/, async function() {
    await currentPage.addCoupon();
});

When (/^the user user adds beneficiary/, async function() {
    await currentPage.fillData();
});

When (/^the user selects an account or TOC/, async function() {
    await currentPage.payment();
});

When (/^the user accepts each of the legal controls/, async function() {
    await currentPage.acceptTermsAndConditions();
});

When (/^the user takes out insurance/, async function() {
    await currentPage.goOtp();
});
