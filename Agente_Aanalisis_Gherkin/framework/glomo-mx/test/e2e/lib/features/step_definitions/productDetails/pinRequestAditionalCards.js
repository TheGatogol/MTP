import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import pinRequest from '../../pages/operatives/pinRequest';
import pinRequestQr from '../../pages/operatives/pinRequestQr';
import cleanCardOperations from '../../pages/operatives/cleanCardOperations';
import additionalCardDetail from '../../pages/productDetails/additionalCardDetail';

function getCVV(numberCardPosition, cvvPosition) {
    const card = global.user.products.cards[numberCardPosition];
    storage['selectedProduct'] = card;
    return card.cvvs[cvvPosition].cvv;
}

When(/^the user access to the view nip screen with a cvv$/, async function () {
    await additionalCardDetail.viewMoreOperatives();
    await navigation.card.pinRequest.go();
});

When(/^the user access to the view nip screen with a qr$/, async function () {
    const pageName = 'operatives';
    await navigation.card.pinRequestQr.go({ pageName });
});

When(/^the user access to more information$/, async function () {
    await navigation.card.moreInfoPinRequest.go();
});

When(/^the user close the process$/, async function () {
    await cleanCardOperations.closeProcess();
});

When(/^the user selects the question "([^"]*)"$/, async function (data) {
    await pinRequestQr.selectQuestion(data);
});

When(/^the user enters an "([^"]*)" CVV$/, async function (dataCVV) {
    let cvv;
    switch (dataCVV.toLowerCase()) {
        case 'correct':
            cvv = getCVV(1, 0);
            break;
        case 'letters':
            cvv = getCVV(1, 1);
            break;
        case 'incomplete':
            cvv = getCVV(1, 2);
            break;
        case 'wrong':
            cvv = getCVV(1, 3);
            break;
        default:
            throw new Error(`${dataCVV} data is not available`);
    }
    await pinRequest.entersCvv(cvv);
});

When(/^the user wants to leave the CVV screen$/, async function () {
    await additionalCardDetail.viewMoreOperatives();
    await navigation.card.pinRequest.go();
    await pinRequest.continueOperative('exit');
});

When(/^the user confirms that wants to leave the screen$/, async function () {
    await navigation.pinViewAdditionalCards.pinViewAdditionalCards.go();
});

When(/^the user access to the help modal$/, async function () {
    await additionalCardDetail.viewMoreOperatives();
    await navigation.card.pinRequest.go();
    await pinRequest.continueOperative('help');
});

When(/^the user performs the "([^"]*)" operation$/, async function (operative) {
    await pinRequest.continueOperative(operative);
});
