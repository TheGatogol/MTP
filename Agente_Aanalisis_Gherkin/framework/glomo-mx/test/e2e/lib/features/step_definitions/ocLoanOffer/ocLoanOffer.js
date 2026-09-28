import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocLoanOffer from '../../pages/ocLoanOffer/ocLoanOffer';
import ocLoanSustainableCatalog from '../../pages/ocLoanSustainableCatalog/ocLoanSustainableCatalog';
import ocloanSustainableSimulator from '../../pages/ocLoanOffer/ocLoanSustainableSimulator';

function getOffers(offerType) {
    let offer;
    switch (offerType.toUpperCase()) {
        case 'PRESTAMO PERSONAL':
            offer = global.user.campaigns.offers[0].data.find(element => element.product.id === '0PPI' && element.id === 'yT1YhBv0lo7ryE3AueurULWI563ggAbRUooXEhkQRG8');
            break;
        case 'COMISION REVIRE':
            offer = { id: 'yT1YhBv0lo5FzYWNeaC4dWSCbglrxb8noBFN8-A2NXs' };
            break;
        default:
            throw new Error(`The offer is not correct, received: ${offerType}`);
    }
    storage['selectedProduct'] = offer;
}

When(/^the user goes to "([^"]*)" of the oc loan offer operation$/, async function(offerType) {
    getOffers(offerType);
    await navigation.ocLoanOffer.ocLoanOffer.go({offerId: storage['selectedProduct'].id});
});

When(/^the user goes to the "([^"]*)" offer operation$/, async function(offerId) {
    await navigation.ocLoanOffer.ocLoanOffer.go(offerId);
});

When(/^the user accepts all the terms$/, async function() {
    await ocLoanOffer.acceptAllConditions();
});

When(/^the user accepts checklist terms and conditions$/, async function() {
    await ocLoanOffer.acceptTermsAndConditions();
});

When(/^the user confirms the sms key to finalize the loan$/, async function() {
    await navigation.ocLoanOffer.ocLoanOfferReview.go();
});

When(/^the user modifies the time term number$/, async function() {
    await ocLoanOffer.changeValueSlider();
});

When(/^the user accesses help information$/, async function() {
    await ocLoanOffer.helpInformation();
});

When(/^the user accesses cat information$/, async function() {
    await ocLoanOffer.catHelpInformation();
});

When(/^the user accesses comission information$/, async function() {
    await ocLoanOffer.comissionHelpInformation();
});

When(/^the user confirms amount$/, async function() {
    await ocLoanOffer.acceptAmount();
});

When(/^the user accepts summary$/, async function() {
    await ocLoanOffer.acceptSummary();
});

When(/^the user tap on input amount$/, async function() {
    await ocLoanOffer.focusInputAmount();
});

When(/^the user accesses terms and conditions$/, async function() {
    await ocLoanOffer.termsAndConditionsPdf();
});

When(/^the user accesses to revire help data$/, async function() {
    await ocLoanOffer.revireHelpData();
});

When(/^the user select sustainable banner$/, async function() {
    await ocLoanOffer.changeSustainableOffer();
});

When(/^the user accesses to product catalog$/, async function() {
    await navigation.ocLoanOffer.ocLoanSustainable.go();
});

When(/^the user selected "([^"]*)" sustainable$/, async function(typeProduct) {
    await ocLoanSustainableCatalog.accessesToProduct(typeProduct);
});

When(/^the user clicks on close catalog$/, async function() {
    await ocLoanSustainableCatalog.userCloseCatalog();
});

When(/^the user goes to the consumers loan$/, async function() {
    await navigation.ocLoanOffer.ocLoanOffer.go();
});

When(/^the user goes to the sustainable simulator$/, async function() {
    await navigation.ocLoanOffer.ocLoanSustainableSimulator.go();
});

When(/^the user clean import field$/, async function() {
    await ocloanSustainableSimulator.acceptAmount();
});

When(/^the user adds an "([^"]*)" to the input$/, async function(amount) {
    await ocloanSustainableSimulator.amountInput(amount);
});

When(/^the user changed percentage "([^"]*)"$/, async function(percentage) {
    await ocloanSustainableSimulator.rangeTermSimulator(percentage);
});

When(/^the user modify name value$/, async function() {
    await ocloanSustainableSimulator.modifyInput();
});
