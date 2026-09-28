import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import digitalButler from '../../pages/digitalButler/digitalButler';
import atmLocator from '../../pages/atmLocator/atmLocator';

When(/^the user access blue "([^"]*)"$/, async function(text) {
    switch (text) {
        case 'first time':
            await navigation.digitalButler.digitalButler.go({hasEntryFirstTime: false});
            break;
        case 'with terms accepted':
            await navigation.digitalButler.digitalButler.go({hasEntryFirstTime: true});
            break;
        case 'proposal':
            await navigation.digitalButler.digitalButler.go({hasEntryFirstTime: true, option: 'proposal'});
            break;
        case 'contract':
            await navigation.digitalButler.digitalButler.go({hasEntryFirstTime: true, option: 'contract'});
            break;
        default:
            throw new Error(`${text} is not a valid option`);
    }
});

When(/^the user accept terms and conditions in blue$/, async function() {
    await digitalButler.acceptTermsAndConditions();
    await digitalButler.fillOtp();
});

When(/^the user continues terms and conditions in blue$/, async function() {
    await digitalButler.acceptTermsAndConditions();
});

When(/^the user download terms and conditions pdf in blue$/, async function() {
    await digitalButler.downloadTermsAndConditions();
});

When(/^the user selects chip of continuity "([^"]*)"$/, async function(typeMessage) {
    await digitalButler.chooseChipLink(typeMessage);
});

When(/^the user leaves blue in "([^"]*)" screen$/, async function(blueScreen) {
    await navigation.assistanceSection.go({blueScreen});
});

When(/^the user selects the "([^"]*)" suggestion$/, async function(type) {
    await digitalButler.selectSuggestion(type);
});

When(/^the user selects "([^"]*)" link$/, async function(text) {
    switch(text) {
        case 'account statement':
            await navigation.monthlyStatementEnquiry.account.go({text: 'Ir a "Estados de cuenta"'.replace(/"/g, '\''), icon: 'document'});
            break;
        case 'credit card statement':
            await navigation.monthlyStatementEnquiry.card.go({text: 'Ir a "Estados de cuenta"'.replace(/"/g, '\''), icon: 'document'});
            break;
        case 'block and replacement':
            await navigation.blockAndReplacement.blockAndReplacement.go({text: 'Ir a bloqueo y reposición', icon: 'disabledcard'});
            break;
        case 'transfer':
            await navigation.diy.transfer.transfers.go({text:'Ir a transferencias', icon: 'transfer'});
            break;
        case 'DIMO':
            await navigation.diy.transfer.transfers.go({text:'Ir a envío con Dimo', icon: 'transfer'});
            break;
        case 'card detail':
            await navigation.card.orangeCardProductDetail.go({blueConfig:{text: 'Ir a mi tarjeta', icon: 'onoff'}});
            break;
        case 'cardless withdrawal':
            await navigation.cardlessWithdrawal.cardlessWithdrawal.go({text: 'Ir a "Retiro sin tarjeta"'.replace(/"/g, '\''), icon: 'mobilecashdollar'});
            break;
        case 'view nip QR':
            await navigation.card.cleanCardOperations.go({blueConfig: {text: 'Ir a "Ver NIP"'.replace(/"/g, '\''), icon: 'card'}});
            break;
        case 'view nip QR pinpadconnect':
            await navigation.card.cleanCardOperations.go({blueConfig: {text: 'Ir a "Ver NIP"'.replace(/"/g, '\''), icon: 'pinpadconnect'}});
            break;
        case 'view nip CVV':
            await navigation.card.pinRequest.go({text: 'Ir a "Ver NIP"'.replace(/"/g, '\''), icon: 'card'});
            break;
        case 'view nip CVV pinpadconnect':
            await navigation.card.pinRequest.go({text: 'Ir a "Ver NIP"'.replace(/"/g, '\''), icon: 'pinpadconnect'});
            break;
        case 'card detail activation':
            await navigation.card.orangeCardProductDetail.go({blueConfig:{text: 'Ir a mi tarjeta', icon: 'card'}});
            break;
        case 'call advisor':
            await digitalButler.selectNavigation({text: 'Llamar a linea BBVA', icon: 'telephone'});
            break;
        case 'call telephone advisor':
            await digitalButler.selectNavigation({text: 'Iniciar llamada', icon: 'outgoing-call'});
            break;
        case 'Ir a \'Oportunidades\'':
            await digitalButler.selectNavigation({text: 'Ir a \'Oportunidades\'', icon: 'sphericaAdd'});
            break;
        case 'Transfer & dimo':
            await navigation.diy.transfer.transfers.go({text: 'Continuar en Transferir & Dimo®', icon: 'sphericaTransfer'});
            break;
        default:
            throw new Error(`${text} is not a valid option`);
    }
});

When(/^the user selects a "([^"]*)" from among their products$/, async function(product) {
    await digitalButler.requestContractProducts(product);
});

When(/^the user views the balance of their products$/, async function() {
    await digitalButler.showBalanceProducts();
});

When(/^the user views the balance of "([^"]*)"$/, async function(value) {
    await digitalButler.showBalanceProduct(value);
});

When(/^the user requests: "([^"]*)" of their personal information$/, async function(details) {
    await digitalButler.requestPersonalInformation(details);
});

When(/^the user requests: "([^"]*)" message of "([^"]*)" products$/, async function(message, typeOfProduct) {
    await digitalButler.requestMessageOfProducts(message, typeOfProduct);
});

When(/^the user send "([^"]*)" messages$/, async function(typeMessage) {
    await digitalButler.requestAnyMessageFromProduct(typeMessage);
});

When(/^the user open modal success of "([^"]*)"$/, async function(modalType) {
    const modalTypes = {
        'receipt': 'Comprobante de operación'
    };
    await digitalButler.openInternalModal(modalTypes[modalType]);
});

When(/^the user share receipt from conversation$/, async function() {
    await digitalButler.shareData();
});

When(/^the user retries "([^"]*)" conversation request$/, async function(type) {
    await digitalButler.retryMessage(type);
});

When(/^the user rates Blue with a thumbs "([^"]*)" in the conversation$/, async function(value) {
    await digitalButler.sendRating(value);
});

When(/^the user open modal terms and conditions Blue$/, async function() {
    await digitalButler.openTermsAndConditions();
});

When(/^the user hides the balance of his "([^"]*)"$/, async function(value) {
    await digitalButler.hideBalanceProduct(value);
});

When(/^the user adjusts the "([^"]*)" option for his products$/, async function(value) {
    await digitalButler.showAndHideBalanceProducts(value);
});

When(/^the user write "([^"]*)" in input text$/, async function(text) {
    await digitalButler.sendMessage(text);
});

When(/^the user requests "([^"]*)" for chooses an "([^"]*)" from the answer$/, async function(request, component) {
    await digitalButler.sendMessage(request, { validateComponent: component });
});

When(/^the user write "([^"]*)" in input text for send money by "([^"]*)"$/, async function(text, type) {
    await digitalButler.sendMessage(text);
    if (text === 'Quiero enviar dinero') {
        const sendMoneyTypes = {
            'DIMO': 'envíar por DIMO',
            'transfer':'envíar por transferencia',
        };
        await digitalButler.sendMessage(sendMoneyTypes[type], { validateComponent: 'desambiguation send money' });
    }
});

When(/^the user leaves atmLocator and return blue screen$/, async function() {
    await atmLocator.backToPage();
});
