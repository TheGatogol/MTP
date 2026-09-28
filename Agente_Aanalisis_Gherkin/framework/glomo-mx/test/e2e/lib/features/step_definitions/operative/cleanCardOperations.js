import { Given, When } from '@cucumber/cucumber';
// Utility requires
import * as navigation from '../../navigation';
// Page Objects
import cleanCardOperationsPage from '../../pages/operatives/cleanCardOperations';
import cleanCardQrFaqsPage from '../../pages/operatives/cleanCardOperationsFaqs';
import cardActivation from '../../pages/operatives/cardActivation';

const qrDictionary = {
    'inoperative': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0001',
        'pageName': 'cleanCardOperations'
    },
    'atm error': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0004',
        'pageName': 'cleanCardOperations'
    },
    'process error': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0006',
        'pageName': 'cleanCardOperations'
    },
    'exceeded attempts': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0005',
        'pageName': 'cleanCardOperations'
    },
    'operative': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0002',
        'pageName': 'cleanCardOperations'
    },
    'visualization error': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0007',
        'pageName': 'cleanCardOperations'
    },
    'otp required': {
        'qrUrl': 'https://bbva.mx/qr-cards#data=AgG4EO/Z66rKk40JSLHHdKC+oA7xPCYSLflzoTu80Kyoc/gBi3Z824Cc7Wb9Y+hB1gQ&card=0003',
        'pageName': 'cleanCardOperations'
    }
};

const qrFromNativeConnector = {
    'debit card confirmation': {
        code: 'https://bbva.mx/qr-cards#data=AgGbMaq7mgn67+LEnAP4/vNG+AGLdnzbgJztZv1j6EHWBA==&card=3887',
        parsedCode: 'https://bbva.mx/qr-cards#data=AgGbMaq7mgn67+LEnAP4/vNG+AGLdnzbgJztZv1j6EHWBA==&card=3887'

    },
    'debit card confirmation invalid': {
        code: 'https://bbva.mx/qr-cards#data=AgE/VYxX/JC+ZaIZphrdedWv+AGLdnzbgJztZv1j6EHWBA==&card=3887',
        parsedCode: 'https://bbva.mx/qr-cards#data=AgE/VYxX/JC+ZaIZphrdedWv+AGLdnzbgJztZv1j6EHWBA==&card=3887'
    }
};

Given(/^the user accesses the card activation$/, async function() {
    await navigation.card.cleanCardOperations.go();
});

Given(/^the user accesses the pin request view$/, async function() {
    const pageName = 'operatives';
    await currentPage.viewMoreOperatives();
    await navigation.card.cleanCardOperations.go({pageName});
});

Given(/^the user tries to open scanner$/, async function() {
    await cleanCardOperationsPage.scanReader();
});

When(/^the user accesses to native scan reader$/, async function () {
    await cleanCardOperationsPage.scanReader();
});

When(/^the user scans the qr code of the "([^"]*)" card$/, async function(cardStatus) {
    const {qrUrl} = qrDictionary[cardStatus.toLowerCase()];
    await cleanCardOperationsPage.handleQRConnectorBbva({code: qrUrl});
});

When(/^the user scans the qr code of the "([^"]*)"$/, async function (cardStatus) {
    const qrCode = qrFromNativeConnector[cardStatus.toLowerCase()];
    await cleanCardOperationsPage.handleQRConnectorBbva(qrCode);
});

When(/^the user accesses more information$/, async function() {
    await navigation.card.cleanCardOperationsFaqs.go();
    await cleanCardQrFaqsPage.faqsModal();
});

When(/^the user after 10 seconds view pin again$/, async function() {
    await cleanCardOperationsPage.viewPinAgain();
});

When(/^the user closes the successful card activation screen$/, async function() {
    await cleanCardOperationsPage.closeModal();
});

When(/^the user accesses scan qr$/, async function() {
    await navigation.qrReader.qrReader.go();
});

When(/^the user accesses the card activation cvv$/, async function() {
    await navigation.card.cardActivation.go();
});

When(/^the user accesses help button$/, async function() {
    await cardActivation.accessHelpButton();
});

When(/^the user continue in card activation cvv$/, async function() {
    await cardActivation.returnTheCardActivation();
    await cardActivation.closeModal();
});

When(/^the user activates a card through cvv$/, async function() {
    await cardActivation.insertCvv();
    await cardActivation.continueActivation();
    await cardActivation.fillOtp('12345678');
});

When(/^the user exit scan qr$/, async function() {
    const pageName = 'exit';
    await navigation.card.cleanCardOperations.go({pageName});
});
