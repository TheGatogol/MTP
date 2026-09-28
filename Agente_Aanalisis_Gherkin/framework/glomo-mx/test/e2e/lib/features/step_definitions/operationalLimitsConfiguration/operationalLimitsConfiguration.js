import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import listCreditCardLimitsPage from '../../pages/operationalLimitsConfiguration/listCreditCardLimits';
import editCreditCardLimitsPage from '../../pages/operationalLimitsConfiguration/editCreditCardLimits';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

function getCreditCard() {
    return user.products.cards[0].number;
}

When(/^the user accesses the "([^"]*)" limit configuration of the card "([^"]*)"$/, async function(limitValue, pan) {
    const pageName = 'operatives';
    await navigation.operationalLimitsConfiguration.editCreditCardLimits.go({card: pan, limitValue: limitValue, pageName});
});

When(/^the user accesses the "([^"]*)" limit configuration$/, async function(limitValue) {
    await navigation.operationalLimitsConfiguration.editCreditCardLimits.go({limitValue: limitValue});
});

When(/^the user selects the "([^"]*)" limit configuration$/, async function(limitValue) {
    await listCreditCardLimitsPage.goToEditCardLimits(limitValue);
});

When(/^the user accesses the limits of his credit card$/, async function() {
    const creditCardNumber = getCreditCard();
    const pageName = 'operatives';
    await navigation.operationalLimitsConfiguration.listCreditCardLimits.go({card: creditCardNumber, pageName});
});

When(/^the user accesses to expense control of the card "([^"]*)"$/, async function(pan) {
    const pageName = 'operatives';
    await navigation.operationalLimitsConfiguration.listCreditCardLimits.go({card: pan, pageName});
});

When(/^the user accesses the "([^"]*)" limit configuration of his credit card$/, async function(limitValue) {
    const creditCardNumber = getCreditCard();
    const pageName = 'operatives';
    await navigation.operationalLimitsConfiguration.editCreditCardLimits.go({card: creditCardNumber, limitValue: limitValue, pageName});
});

When(/^the user accesses to expense control of his credit card$/, async function() {
    const creditCardNumber = getCreditCard();
    const pageName = 'operatives';
    await navigation.operationalLimitsConfiguration.listCreditCardLimits.go({card: creditCardNumber, pageName});
});

When(/^the user enters on the "([^"]*)" of daily limits$/, async function(infoPage) {
    switch(infoPage.toLowerCase()){
        case 'expense control info':
            await listCreditCardLimitsPage.generalInformationOfLimits();
            break;
        case 'daily charges info':
            await listCreditCardLimitsPage.dailyLimitsInformation();
            break;
        default:
            throw new Error(`The information page ${infoPage} wasn't found`);
    }
});

When(/^the user accesses to expense control$/, async function() {
    await navigation.operationalLimitsConfiguration.listCreditCardLimits.go();
});

When(/^a service error occurs accessing the "([^"]*)" card expense control$/, async function(pan) {
    await navigation.card.orangeCardProductDetail.go({card: pan});
    await orangeCardProductDetail.viewMoreOperatives();
    await orangeCardProductDetail.goToCardLimits();

});

When(/^the user taps on selected limit info icon$/, async function() {
    await editCreditCardLimitsPage.showLimitInformation();
});

When(/^the user exits from the information modal$/, async function() {
    await currentPage.exitModal();
});

When(/^the user writes some value to modify limit$/, async function() {
    await editCreditCardLimitsPage.enterAmount({amount: 1000});
});

When(/^the user closes the operation of change limit$/, async function() {
    await editCreditCardLimitsPage.closeOperation();
});

When(/^the user sees the modal of whether he wants to exit the operation$/, async function() {
    await currentPage.checkModal({size: 'small', title: false});
});

When(/^the user taps on icon of information in the header$/, async function() {
    await listCreditCardLimitsPage.generalInformationOfLimits();
});

When(/^the user taps on help icon of daily limits$/, async function() {
    await listCreditCardLimitsPage.dailyLimitsInformation();
});

When(/^the user taps on help header icon of daily limits$/, async function() {
    await listCreditCardLimitsPage.headerHelpModal();
});

When(/^the user writes wrong amount to modify limit$/, async function() {
    await editCreditCardLimitsPage.enterAmount({amount: 1000.10});
});

When(/^the user confirms the new limit for an amount of "([^"]*)"$/, async function(amount) {
    await editCreditCardLimitsPage.confirmNewLimit({amount: amount});
});

When(/^the user defines the new limit for an amount of "([^"]*)"$/, async function(amount) {
    await editCreditCardLimitsPage.enterAmount({amount: amount});
});

Then(/^the user sees the success message$/, async function() {
    await navigation.operationalLimitsConfiguration.listCreditCardLimits.assert();
    await listCreditCardLimitsPage.successTooltip();
});

When(/^the user adds a "([^"]*)" ammount$/, async function(ammountType) {
    await currentPage.insertAmmount(ammountType);
});

Then(/^the user sees the ammount input has value$/, async function() {
    editCreditCardLimitsPage.checkAmmountStatus();
});
