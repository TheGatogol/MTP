import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocMortgageNonPreapproved from '../../pages/ocMortgageNonPreapproved/ocMortgageNonPreapproved';

When(/^the user accesses to the oc mortgage$/, async function() {
    await ocMortgageNonPreapproved.accessOcMortgage();
});

When(/^the user access to the "([^"]*)" offer$/, async function(offerId) {
    const isMortgageError = offerId === 'oc mortgage error';
    const targetOfferId = isMortgageError ? 'oc mortgage' : offerId;

    await navigation.ocMortgageNonPreapproved.ocMortgageNonPreapproved.go(targetOfferId);
    await ocMortgageNonPreapproved.setPaymentSimulation();

    if (isMortgageError) {
        await ocMortgageNonPreapproved.setMaxRetries();
        return;
    }

    await ocMortgageNonPreapproved.setDigitalCertificate();
});

When(/^the user accesses the type of "([^"]*)" payment "([^"]*)"$/, async function(credit, payment) {
    await ocMortgageNonPreapproved.accessOcMortgage();
    await ocMortgageNonPreapproved.accessSelectTypeCredit({credit});
    if(payment !== '') {
        await ocMortgageNonPreapproved.accessSelectTypePayment({payment});
    }
});

When(/^the user accesses the "([^"]*)" and "([^"]*)" and "([^"]*)"$/, async function(amount, income, period) {
    await ocMortgageNonPreapproved.accessAmountIncome(amount, income);
    await ocMortgageNonPreapproved.accessSelectTypePeriod(period);
});

When(/^the user accesses the type occupation "([^"]*)" business "([^"]*)"$/, async function(occupation, business) {
    await ocMortgageNonPreapproved.accessSelectTypeOccupation({occupation});
    await ocMortgageNonPreapproved.accessSelectTypeBusiness({business});
});

When(/^the user accesses the information of work "([^"]*)" and "([^"]*)" and "([^"]*)" and "([^"]*)"$/, async function(number, house, advisory, action) {
    await ocMortgageNonPreapproved.accessYearsWork(number);
    await ocMortgageNonPreapproved.accessSelectTypeHouse({house});
    await ocMortgageNonPreapproved.accessSelectAdvisory({advisory});
    if(action !== 'continue') {
        switch (action) {
            case 'go to success page':
                await ocMortgageNonPreapproved.selectCheckTerms();
                await ocMortgageNonPreapproved.accessScreenSuccess();
                break;
            case 'open and close terms':
                await ocMortgageNonPreapproved.accessSelectDocument('terms and conditions');
                await ocMortgageNonPreapproved.accessCloseDocument('terms and conditions');
                break;
            case 'open and close notice privacy':
                await ocMortgageNonPreapproved.accessSelectDocument('notice privacy');
                await ocMortgageNonPreapproved.accessCloseDocument('notice privacy');
                break;
            case 'open and close credit bureau':
                await ocMortgageNonPreapproved.accessSelectDocument('credit bureau');
                await ocMortgageNonPreapproved.accessCloseDocument('credit bureau');
                break;
            case 'modify amount income':
                await ocMortgageNonPreapproved.selectCheckTerms();
                await ocMortgageNonPreapproved.changeInputCost();
                break;
            case 'modify type business':
                await ocMortgageNonPreapproved.selectCheckTerms();
                await ocMortgageNonPreapproved.changeTypeBusiness();
                break;
            case 'modify type terms':
                await ocMortgageNonPreapproved.selectCheckTerms();
                await ocMortgageNonPreapproved.changeTermsAndConditions();
                break;
            case 'continue modal simulation':
                await ocMortgageNonPreapproved.selectCheckTerms();
                await ocMortgageNonPreapproved.exitSimulationMortgage();
                await ocMortgageNonPreapproved.continueProcessMortgage();
                break;
            case 'close success page':
                await ocMortgageNonPreapproved.selectCheckTerms();
                await ocMortgageNonPreapproved.accessScreenSuccess();
                await ocMortgageNonPreapproved.accessCloseSuccess();
                break;
            default:
                throw new Error(`The option: ${action} is not implemented`);
        }
    }

});

When(/^the user accesses checks information$/, async function() {
    await ocMortgageNonPreapproved.selectCheckTerms();
});

When(/^the user accesses screen success oc mortgage$/, async function() {
    await ocMortgageNonPreapproved.accessScreenSuccess();
});

When(/^the user accesses close screen success oc mortgage$/, async function() {
    await ocMortgageNonPreapproved.accessCloseSuccess();
});

When(/^the user accesses insert amount "([^"]*)"$/, async function(amount) {
    await ocMortgageNonPreapproved.insertAmount(amount);
});

When(/^the user clear amount$/, async function() {
    await ocMortgageNonPreapproved.clearInputAmount();
});

When(/^the user accesses exit simulation mortgage$/, async function() {
    await ocMortgageNonPreapproved.exitSimulationMortgage();
});

When(/^the user accesses exit modal simulation$/, async function() {
    await ocMortgageNonPreapproved.exitModalSimulationMortgage();
});

When(/^the user accesses continue modal simulation$/, async function() {
    await ocMortgageNonPreapproved.continueProcessMortgage();
});

When(/^the user accesses tooltip fees and costs "([^"]*)"$/, async function(tooltip) {
    await ocMortgageNonPreapproved.accessTooltipFeesAndCost({tooltip});
});

When(/^the user accesses change period "([^"]*)"$/, async function(period) {
    await ocMortgageNonPreapproved.accessSelectTypePeriod(period);
});
