import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import parkingEnrollment from '../../pages/parkingMeters/parkingEnrollment';
import parkingList from '../../pages/parkingMeters/parkingList';
import parkingRecharge from '../../pages/parkingMeters/parkingRecharge';

When(/^the user eliminates their parking meter account$/, async function() {
    await parkingList.deleteParkingAccount(1);
});

When(/^the user consults the "([^"]*)" question of FAQS about parking meters$/, async function(question) {
    await navigation.parkingMeters.parkingDetailList.go({question});
});

When(/^the user goes to recharge his parking meter account$/, async function() {
    await navigation.parkingMeters.parkingRecharge.go();
});

When(/^the user goes to register a parking meter account$/, async function() {
    await navigation.parkingMeters.parkingEnrollment.go();
});

When(/^the user reviews all his payment methods$/, async function() {
    await parkingRecharge.viewAllAccounts(1);
});

When(/^the user changes "([^"]*)" step of enrollment$/, async function(option) {
    switch (option) {
        case 'account linking':
            await parkingEnrollment.changeLinkStep();
            break;
        case 'terms':
            await parkingEnrollment.changeTermsStep();
            break;
        default:
            throw new Error(`The '${option}' step to change is not declared.`);
    }
});

When(/^the user continues to the "([^"]*)" step of the parking enrollment$/, async function(step) {
    switch (step.toLowerCase()) {
        case 'account linking':
            await parkingEnrollment.goLinkAnAccount();
            break;
        case 'terms':
            await parkingEnrollment.completeForm(user.contacts);
            break;
        case 'summary':
            await parkingEnrollment.completeEnrollment(user.contacts);
            break;
        default:
            throw new Error(`The '${step}' step was not declared in the enrollment options.`);
    }
});

When(/^the user completes the parking "([^"]*)"$/, async function(option) {
    switch (option) {
        case 'recharge':
            await navigation.parkingMeters.parkingRechargeSuccess.attempt();
            break;
        case 'enrollment':
            await navigation.parkingMeters.parkingEnrollmentSuccess.attempt();
            break;
        default:
            throw new Error(`The '${option}' step was not declared in the parking options.`);
    }
});

When(/^the user changes the "([^"]*)"$/, async function(option) {
    switch (option) {
        case 'payment method':
            await parkingRecharge.changePaymentMethod();
            break;
        case 'amount':
            await parkingRecharge.changeAmount();
            break;
        default:
            throw new Error(`The '${option}' step to change is not declared.`);
    }
});

When(/^the user continues to the "([^"]*)" step of the parking recharge$/, async function(step) {
    switch (step) {
        case 'payment method':
            await parkingRecharge.amountToRecharge();
            break;
        case 'summary':
            await parkingRecharge.selectPaymentMethod();
            break;
        default:
            throw new Error(`The '${step}' step was not declared in the recharge options.`);
    }
});

When(/^the user consults more information about parking "([^"]*)"$/, async function(issue) {
    switch (issue) {
        case 'recharge':
            await parkingRecharge.requestRechargeInfo();
            break;
        case 'supplier':
            await parkingEnrollment.requestSupplierInfo();
            break;
        case 'enrollment':
            await parkingEnrollment.requestEnrollmentInfo();
            break;
        default:
            throw new Error(`There is no information about '${issue}'.`);
    }
});
