import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import internationalTransferPage from '../../pages/internationalTransfer/internationalTransfer';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
const UserValid = {data: 'valid'};

function isFeedback() {
    return global.user.accessFeedback !== false && global.user.accessFeedback !== undefined;
}

When(/^the user select continue modal$/, async function() {
    await internationalTransferPage.continueProcess();
});

When(/^the user select recipient$/, async function() {
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
});

When(/^the user enter her activity economic "([^"]*)"$/, async function (economicActivity) {
    await internationalTransferPage.enterEconomicActivity(economicActivity);
    await internationalTransferPage.economicActivityClickOnContinue();
});

When(/^the user enter otp$/, async function() {
    await navigation.internationalTransfer.InternationalTransferSuccess.go();
});

When(/^the user continues the flow to the beneficiary data$/, async function () {
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
    await navigation.internationalTransfer.internationalTransfer.go(UserValid);
});

When(/^the user continues the flow to the amount$/, async function () {
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
    await navigation.internationalTransfer.internationalTransfer.go(UserValid);
    await internationalTransferPage.flowToBeneficiaryData();
});

When(/^the user to continues the flow up to the concept$/, async function () {
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
    await navigation.internationalTransfer.internationalTransfer.go(UserValid);
    await internationalTransferPage.flowToAmount();
});

When(/^the user to continues the flow up to otp$/, async function () {
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
    await navigation.internationalTransfer.internationalTransfer.go(UserValid);
    await internationalTransferPage.flowToConcept();
});

When(/^the user to continues the flow up to success with "([^"]*)" data$/, async function (data) {
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
    await navigation.internationalTransfer.internationalTransfer.go({data});
    await internationalTransferPage.flowToUserOtp();
});

When(/^the user fill bank code$/, async function() {
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
});

const makeAnInternationalTransfers = async ({account, entryPoint, data, economicActivity, MTU} = {}) => {
    switch(entryPoint.toLowerCase()) {
        case 'select operation':
            await navigation.selectOperations.selectOperations.go();
            break;
        case 'account detail':
            if (isFeedback()) {
                await navigation.account.productDetail.go({account: global.user.products[0].accounts[0]});
            } else {
                await navigation.account.productDetail.go({account});
            }
            await accountProductDetail.viewMoreOperatives();
            break;
        default:
            throw new Error(`Option "${screen}" is not valid`);
    }
    await navigation.internationalTransfer.internationalTransfersPanel.go();
    await navigation.internationalTransfer.internationalTransfer.go({previousScreen:'internationalTransfersPanel'});
    await internationalTransferPage.continueProcess();
    await navigation.internationalTransfer.InternationalTransfersCreateRecipient.go();
    await navigation.internationalTransfer.InternationalTransfersReviewRecipient.go();
    await navigation.internationalTransfer.internationalTransfer.go({data});
    await internationalTransferPage.continueUntilCompleteProcess(economicActivity, MTU);
};

When(/^the user accesses to make an international transfer with the folloging data$/, async function(table) {
    const data = {...(table.hashes()[0])};
    await makeAnInternationalTransfers(data);
});
