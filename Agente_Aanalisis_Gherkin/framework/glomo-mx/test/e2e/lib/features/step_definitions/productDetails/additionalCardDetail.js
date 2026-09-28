import {Given, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import * as utilsAdditionalCardsPage from '../../utils/utilsAdditionalCards';
import additionalCardDetail from '../../pages/productDetails/additionalCardDetail';
import changeLimits from '../../pages/additionalCards/changeLimits';
import listCreditCardLimits from '../../pages/operationalLimitsConfiguration/listCreditCardLimits';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

When(/^the user accesses to additional card detail$/, async function() {
    await navigation.card.additionalCardDetail.go();
});

When(/^the user accesses to additional card detail from (additional|additional card off)$/, async function(from) {
    switch(from.toLowerCase()){
        case 'additional card off':
            await navigation.card.additionalCardDetail.go({from: from});
            break;
        case 'additional':
            await navigation.card.additionalCardDetail.go({from: from});
            break;
        default:
            throw new Error(`Option ${from} con recognized`);
    }
    await currentPage.closeToolTip();
});

When(/^the user accesses to digital purchase$/, async function() {
    await currentPage.accessToDigitalPurchase();
});

When(/^the user accesses modify operational limits operative$/, async function() {
    await additionalCardDetail.editLimitOperative();
});

When(/^the user "([^"]*)" turns "([^"]*)" additional card$/, async function(state, onOff) {
    await currentPage.closeToolTip();
    await currentPage.onOffSwitchAdditional(onOff, state);
});

When(/^the user "([^"]*)" turns "([^"]*)" and "([^"]*)" additional card$/, async function(state, onOff, offOn) {
    await currentPage.onOffSwitchAdditional(onOff, state);
    await currentPage.onOffSwitchAdditional(offOn, state);
});

When(/^the user close success activation of digital purchase$/, async function() {
    await currentPage.closeSuccessScreen();
});

When(/^the user activate digital purchase$/, async function() {
    await currentPage.activateDigitalPurchase(true);
});

When(/^the user cancel digital purchase activation by "([^"]*)"$/, async function(action) {
    await currentPage.cancelOTPDigitalPurchase(action, false);
});

When(/^the user exit token error screen by "([^"]*)"$/, async function(action) {
    await currentPage.cancelOTPDigitalPurchase(action, true);
});

Given(/^the user accesses the detail of the additional "([^"]*)" "([^"]*)" card from the associated "([^"]*)"$/, async function(additionalStatus, additionalDescriptionStatus, cardType) {
    utilsAdditionalCardsPage.getDataCard(additionalStatus, additionalDescriptionStatus, cardType);
    await navigation.card.orangeCardProductDetail.go({card: storage['selectedProduct'].cardId});
    await navigation.card.additionalCardDetail.go();
});

When(/^the user access help and understood$/, async function () {
    await listCreditCardLimits.dailyLimitsInformation();
    await listCreditCardLimits.confirmDialog();
});

When(/^the user access edit pencil "([^"]*)"$/, async function (buttonType) {
    await navigation.additionalCards.changeLimits.go({ buttonType });
});

When(/^the user exits the help modal$/, async function () {
    await changeLimits.accessHelp();
    await changeLimits.confirmDialog();
});

When(/^the user access help header and understood$/, async function () {
    await listCreditCardLimits.generalInformationOfLimits();
    await listCreditCardLimits.confirmDialog();
});

When(/^the user accesses limits operative$/, async function () {
    await orangeCardProductDetail.closeTooltipDigitalCard();
});

When(/^the user selects the categories additional$/, async function () {
    await additionalCardDetail.accessToCategoriesAdditional();
});
