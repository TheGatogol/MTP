import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import internationalRefundsPage from '../../pages/internationalRefunds/internationalRefunds';
import internationalTransfersDetailPage from '../../pages/internationalTransfer/internationalTransfersDetail';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

const navigateToInternationalRefunds = async (screen) => {
    switch(screen.toLowerCase()) {
        case 'account detail':
            await navigation.account.productDetail.go({account: '5011'});
            await accountProductDetail.viewMoreOperatives();
            break;
        case 'select operation':
            await navigation.selectOperations.selectOperations.go();
            break;
        default:
            throw new Error(`Option "${screen}" is not valid`);
    }
    await navigation.internationalTransfer.internationalTransfersHistorical.go('received');
    await navigation.internationalTransfer.internationalTransfersDetail.go('pending information');
    await internationalTransfersDetailPage.waitForLoaded();
    await navigation.internationalRefunds.internationalRefunds.go();
    await internationalRefundsPage.waitUntilSpinnerVeil();
};

const fillAdditionalInformation = async (screen) => {
    await navigateToInternationalRefunds(screen);
    await internationalRefundsPage.fillAdditionalInformation();
};

When(/^the user complete data from "([^"]*)"$/, async function (screen) {
    await fillAdditionalInformation(screen);
    await navigation.internationalRefunds.internationalRefundsReceipt.go();
});

When(/^the user complete wrong data from "([^"]*)"$/, async function (screen) {
    await fillAdditionalInformation(screen);
    await internationalRefundsPage.confirmAdditionalInformation();
});

When(/^the user selects complete data$/, async function () {
    await navigation.internationalRefunds.internationalRefunds.go();
    await internationalRefundsPage.waitUntilSpinnerVeil();
});

When(/^the user starts to complete data$/, async function () {
    await internationalRefundsPage.openRelationshipToRecipient();
});

When(/^the user accesses to complete data from "([^"]*)"$/, async function (screen) {
    await navigateToInternationalRefunds(screen);
});

When(/^the user fills in his additional information$/, async function () {
    await internationalRefundsPage.fillAdditionalInformation();
});

When(/^the user send his data$/, async function () {
    await internationalRefundsPage.fillAdditionalInformation();
    await internationalRefundsPage.confirmAdditionalInformation();
});
