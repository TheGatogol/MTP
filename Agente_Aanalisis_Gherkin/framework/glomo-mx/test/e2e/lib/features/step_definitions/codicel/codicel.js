import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

// Pages
import sendMoney from '../../pages/codicel/sendmoney';
import sendMoneySuccess from '../../pages/codicel/sendMoneySuccess';
import desvinculationCodicel from '../../pages/codicel/desvinculationCodicel';
import vinculationCodicelPage from '../../pages/codicel/vinculationCodicel';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

function getAccount() {
    return user.products[0].accounts[0];
}

When(/^the user goes to the codicel (desvinculation operation|vinculation operation|send money operation)$/, async function(context) {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    await accountProductDetail.viewMoreOperatives();
    switch(context) {
        case 'vinculation operation':
            await navigation.codicel.vinculationCodicel.go();
            break;
        case 'desvinculation operation':
            await navigation.codicel.desvinculationCodicel.go();
            break;
        case 'send money operation':
            await navigation.codicel.sendMoney.go();
            await sendMoney.closeDialogWhatsNew();
            break;
        default:
            throw new Error(`Not recognized option "${context}"`);
    }
});

When(/^the user "([^"]*)" doesnt accept the (desvinculation confirmation modal|vinculation confirmation modal)$/, async function(value, context) {
    switch(context){
        case 'vinculation confirmation modal':
            await vinculationCodicelPage.denyVinculateDataModal(value);
            break;
        case 'desvinculation confirmation modal':
            await desvinculationCodicel.denyDesvinculateDataModal(value);
            break;
        default:
            throw new Error(`Not recognized option "${context}"`);
    }
});

When(/^the user introduces "([^"]*)" as phone number$/, async function(phone) {
    await sendMoney.setPhoneNumber(phone);
});

When(/^the user "([^"]*)" the change destinatary modal$/, async function(action) {
    switch(action.toLowerCase()) {
        case 'accepts':
            await sendMoney.acceptModals();
            break;
        case 'denys':
            await sendMoney.denyEditDestinataryModal();
            break;
        default:
            throw new Error(`The action: ${action} is not implemented`);
    }
});

When(/^the user introduces "([^"]*)" as an ammount$/, async function(ammount) {
    await sendMoney.insertAmmount(ammount);
});

When(/^the user accepts the "([^"]*)"$/, async function(section) {
    await sendMoney.acceptSection(section);
});

When(/^the user completes the summary$/, async function() {
    await navigation.codicel.sendMoneySuccess.go();
});

When(/^the user selects to modify the "([^"]*)"$/, async function(section) {
    await sendMoney.modifySection(section);
});

When(/^the user exits the success page through the "([^"]*)" button$/, async function(button) {
    await sendMoneySuccess.closePage(button);
});

When(/^the user adds "([^"]*)" as concept$/, async function(concept) {
    await sendMoney.setConcept(concept);
});

When(/^the user adds "([^"]*)" as reference$/, async function(reference) {
    await sendMoney.setReference(reference);
});

Then(/^the user sees the inputs are full$/, async function() {
    await sendMoney.checkInputs();
});

When(/^the user accepts the vinculation confirmation modal$/, async function() {
    await vinculationCodicelPage.acceptVinculateDataModal();
});

When(/^the user accesses the help modal$/, async function() {
    await currentPage.openHelpModal();
});

When(/^the user opens and accepts the help modal$/, async function() {
    await currentPage.openHelpModal();
    await currentPage.acceptHelpModal();
});

When(/^the user exits to closes the help modal with the "([^"]*)"$/, async function(button) {
    await desvinculationCodicel.closeHelpModal(button);
});

When(/^the user exits the operation with the "([^"]*)"$/, async function(button) {
    await vinculationCodicelPage.closeVinculationOperation(button);
});

When(/^the user completes vinculation operation$/, async function() {
    await vinculationCodicelPage.setOtpCodicel();
});

When(/^the user is in the codicel vinculation operation$/, async function() {
    await navigation.codicel.vinculationCodicel.assert();
});

When(/^the user checks desvinculation and continues$/, async function() {
    await desvinculationCodicel.confirmDesvinculation();
});

When(/^the user does the desvinculation with the "([^"]*)"$/, async function(button) {
    await desvinculationCodicel.goToModalSuccessDesvinculation();
    await desvinculationCodicel.closeDesvinculationScreen(button);
});

When(/^the user accept the desvinculation confirmation modal$/, async function() {
    await desvinculationCodicel.goToModalSuccessDesvinculation();
});

When(/^the user check data usage conditions$/, async function() {
    await vinculationCodicelPage.checkVinculation();
});

When(/^the user sees sumary information$/, async function() {
    await desvinculationCodicel.loadDataInfo();
});

When(/^the user checked desvinculation data usage$/, async function() {
    await desvinculationCodicel.checkDesvinculation();
});

When(/^the user goes to the product detail$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    await accountProductDetail.viewMoreOperatives();
});

When(/^the user access the send money operative$/, async function() {
    await navigation.codicel.sendMoney.go();
    await sendMoney.closeDialogWhatsNew();
});

When(/^the user open contacts modal$/, async function() {
    await sendMoney.openContactsAgenda();
});

When(/^the user tap in step destinatary$/, async function() {
    await sendMoney.enterDestinataryZone();
});

When(/^the user accepts the invitation modal$/, async function() {
    await sendMoney.acceptModals();
});

When(/^the user accepts summary transfers$/, async function() {
    await sendMoney.acceptSummary();
});

Then(/^the user accesses the vinculation screen$/, async function() {
    await navigation.codicel.vinculationCodicel.assert();
});

When(/^the user completes the operations with an "([^"]*)" destinatary$/, async function(destinatary) {    
    switch(destinatary.toLowerCase()) {
        case 'interbancary':
            await sendMoney.setPhoneNumber('9064601500');
            await sendMoney.acceptDestinatary();
            await sendMoney.insertAmmount('20');
            await sendMoney.acceptAmmount();
            await sendMoney.setConcept('Reasons');
            await sendMoney.acceptConcept();
            break;
        case 'intrabancary':
            await sendMoney.setPhoneNumber('5533534553');
            await sendMoney.acceptDestinatary();
            await sendMoney.insertAmmount('20');
            await sendMoney.acceptAmmount();
            await sendMoney.acceptConcept();
            break;
        default:
            throw new Error(`The destinatary of type ${destinatary} doesn't exist`);
    }
});

When(/^the user introduces "([^"]*)" and "([^"]*)"$/, async function(phone, concept) {
    await sendMoney.setDataTransfer(phone, concept);
});

When(/^the user goes back to previous page with exit modal$/, async function() {
    await sendMoney.closeModal();
});

When('the user select origin account', async function() {
    await sendMoney.continueOriginAccount();
});

