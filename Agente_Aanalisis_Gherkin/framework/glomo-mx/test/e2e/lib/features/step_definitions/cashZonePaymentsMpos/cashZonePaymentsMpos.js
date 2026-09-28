import { When } from '@cucumber/cucumber';
import { Commands } from '@csqe/radish';
import * as navigation from '../../navigation';
import cashZonePaymentsMpos from '../../pages/cashZone/cashZonePaymentsMpos';

When(/^the user accesses to dashboard MPOS(| for first time)$/, async function (firstTime) {
    if (!firstTime) {
        await updateLocalStorage('onboardingDone');
    }
    await navigation.cashZonePaymentsMpos.cashZonePaymentsMpos.go('sidebar');
});

When(/^the user accesses to calculator mpos(| for first time)$/, async function(firstTime) {
    await updateLocalStorage(firstTime ? 'onboardingNotDone': 'onboardingDone');
    await navigation.cashZonePaymentsMpos.cashZonePaymentsMpos.go();
});

When(/^the user close the onboarding modal$/, async function() {
    await cashZonePaymentsMpos.closeNoClientModal();
});

When(/^the user tries to access the calculator from operatives$/, async function() {
    await navigation.selectOperations.selectOperations.go();
});

When(/^the user displays the calculator$/, async function() {
    await cashZonePaymentsMpos.displayCalculator();
});

When(/^the user interacts with calculator for the first time$/, async function() {
    await cashZonePaymentsMpos.calculatorInteraction();
});

When(/^the user adds products into calculator$/, async function() {
    await cashZonePaymentsMpos.addProduct();
});

When(/^the user submits the charge$/, async function() {
    await cashZonePaymentsMpos.submitCharge();
});

When(/^the user choose "([^"]*)" payment method$/, async function(method) {
    await cashZonePaymentsMpos.selectPaymentMethod(method);
    if(method === 'link') {
        await cashZonePaymentsMpos.completePaymentLink('Jose Luis', 'joseluis@joseluis.com');
    }
});

When(/^the user continues with the charge process$/, async function() {
    await cashZonePaymentsMpos.chargeOperation();
});

When(/^the user opens the commission screen$/, async function() {
    await cashZonePaymentsMpos.openCommissionScreen();
});

When(/^the user applies VAT by default$/, async function() {
    await cashZonePaymentsMpos.setVATdefault();
});

When(/^the user continues without a client$/, async function() {
    await cashZonePaymentsMpos.enterNoClientModal();
});

When(/^the user accesses to card learn more$/, async function() {
    await navigation.tapOnPhone.tapOnPhone.go();
});

When(/^the user accesess to settings trade$/, async function() {
    await cashZonePaymentsMpos.accesessSettingsTrade();
});

When(/^the user accesess to link Pay trade$/, async function(value) {
    await cashZonePaymentsMpos.accesessLinkPayTrade(value);
});

When(/^the user exit modal method payment$/, async function() {
    await cashZonePaymentsMpos.exitMethodCardPayment();
});

async function setLocalStorage(key, value) {
    await Commands.execute({
        script: (arg1, arg2) => {
            localStorage[arg1] = arg2;
        },
        args: [key, value],
    });
}

async function updateLocalStorage(key) {
    await setLocalStorage('mercurioMPOS', JSON.stringify(global.user.localstorage[key]));
}
