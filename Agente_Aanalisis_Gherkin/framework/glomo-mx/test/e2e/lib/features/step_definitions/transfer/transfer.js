import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import transferPage from '../../pages/diy/transfer/transfer';
import transferSuccessPage from '../../pages/diy/transfer/transferSuccess';
import contactsAgendaPage from '../../pages/contactsAgenda/contactsAgenda';
import dashboard from '../../pages/dashboard/dashboard';

function getAccount() {
    return user.products[0].accounts[0];
}

function getAccountDetail(account){
    let accountFound;
    switch (account.toLowerCase()){
        case 'check':
        case 'checks':
            accountFound= user.products[0].accounts[1];
            break;
        case 'digital':
            accountFound= user.products[0].accounts[4];
            break;
        case 'saving':
            accountFound= user.products[0].accounts[3];
            break;
        case 'express':
            accountFound= user.products[0].accounts[2];
            break;
        case 'main account':
            accountFound= user.products[0].accounts[0];
            break;
        case 'libreton':
            accountFound= user.products[0].accounts[6];
            break;
        default:
            throw new Error(`${account} Account detail is not available to navigate to...`);
    }
    return accountFound;
}

function getContact(contact){
    let contactFound;
    switch (contact.toLowerCase()){
        case 'name correct':
            contactFound= user.products[0].searchContact[0].nameCorrectContactSaved;
            break;
        case 'wrong name':
            contactFound= user.products[0].searchContact[1].wrongNameContactSaved;
            break;
        case 'clabe':
            contactFound= user.products[0].searchContact[2].clabeContactSaved;
            break;
        case 'tdc':
            contactFound= user.products[0].searchContact[3].tdcContactSaved;
            break;
        case 'name contact with tdd':
            contactFound= user.products[0].searchContact[4].nameContactTddSaved;
            break;
        default:
            throw new Error(`${contact} the searched contact is not available to navigate to`);
    }
    return contactFound;
}

function registerContact(contact){
    let typeOfContact = contact.toLowerCase();
    typeOfContact= typeOfContact.replace(/ /g, '');
    const newContact={'number':null, 'name':null, 'alias':null};
    newContact['number']= user.products[0].newContact[0][typeOfContact][0].number;
    newContact['name']= user.products[0].newContact[0][typeOfContact][0].name;

    if(typeOfContact!=='unrecognizedtdd'){
        newContact['alias']= user.products[0].newContact[0][typeOfContact][0].alias;
    }
    return Object.values(newContact);
}

function addToContact(account){
    const typeOfAccount = account.toLowerCase();
    const addAccount= {'number':null, 'name':null, 'alias':null};
    addAccount['number']= user.products[0].addToContact[0][typeOfAccount][0].number;
    addAccount['name']= user.products[0].savedContact[0].number[0].name;
    addAccount['alias']= user.products[0].savedContact[0].number[0].alias;
    return Object.values(addAccount);
}

function getContactAliases(account){
    let typeOfAccount = account.toLowerCase();
    const aliasFound= {'alias':null};
    typeOfAccount= typeOfAccount.replace(/ /g, '');
    aliasFound['alias']= user.products[0].savedContact[0][typeOfAccount][0].alias;
    return Object.values(aliasFound);
}

When(/^the user accesses to transfer from "([^"]*)"$/, async function(access) {
    const account = getAccount();
    switch (access.toLowerCase()) {
        case 'dashboard':
            await navigation.dashboard.go();
            await navigation.diy.transfers.transfers.go();
            break;
        case 'account detail':
            await navigation.account.productDetail.go({account});
            await navigation.diy.transfers.transfers.go();
            break;
        case 'card detail':
            await navigation.diy.transfers.transfers.go();
            break;
        default:
            throw new Error(`${access} Access to transfer is not available to navigate to...`);
    }
});

When(/^the user accesses to transfer from account detail and selects a origin "([^"]*)"$/, async function (product) {
    const account= getAccountDetail(product);
    await navigation.account.productDetail.go({account});
    await navigation.diy.transfers.transfers.go();
});

When(/^the user accesses to transfer from dashboard and selects a origin "([^"]*)" in stand in mode$/, async function(product) {
    const typeOfAccount = product.toLowerCase();
    await navigation.dashboard.go();
    await dashboard.validateStandInAccess();
    await navigation.diy.transfers.transfers.go();
    await transferPage.selectTransferOriginEntryPoint(typeOfAccount, product);
});

When(/^the user accesses to transfer from dashboard and selects a origin "([^"]*)"$/, async function(product) {
    let typeOfAccount = product.toLowerCase();
    await navigation.dashboard.go();
    await navigation.diy.transfers.transfers.go();

    switch (typeOfAccount) {
        case 'account':
            await transferPage.productSelected();
            break;
        case 'debit':
            await transferPage.productSelected();
            break;
        case 'credit':
            await transferPage.cardCreditSelected(user.products[0].accountId[0].tdc[0].id);
            break;
        case 'contract':
            await transferPage.contractSelected();
            break;
        case 'principal':
            await transferPage.principalAccountSelected();
            break;
        case 'pesos account':
            await transferPage.selectPesosAccount();
            break;
        case 'pesos debit':
            await transferPage.selectPesosDebit();
            break;
        case 'account own':
        case 'debit own':
        case 'main account':
        case 'libreton':
        case 'saving':
        case 'check':
        case 'account without money':
        case 'checks':
        case 'digital':
        case 'express':
            typeOfAccount= typeOfAccount.replace(/ /g, '');
            if(typeOfAccount==='mainaccount'){
                typeOfAccount='other';
            }
            await transferPage.sourceAccountSelected(user.products[0].accountId[0][typeOfAccount][0].id, typeOfAccount === 'accountwithoutmoney');
            break;
        case 'more link':
            await transferPage.sourceAccountSelected(user.products[0].accountId[0].other[0].id);
            break;
        default:
            throw new Error(`${product} Transfer product is not available to navigate to...`);
    }
});

When(/^the user selects a Source Account$/, async function () {
    await transferPage.sourceAccountSelected(user.products[0].accountId[0].other[0].id);
});

When(/^the user selects a destinatary from "([^"]*)"$/, async function(transferType) {
    switch (transferType.toLowerCase()) {
        case 'new recipient':
            await transferPage.accessNewRecipient();
            break;
        case 'saved contact':
            await navigation.contactsAgenda.go();
            break;
        case 'my accounts':
            await transferPage.accessMyAccounts();
            break;
        case 'reuse operations':
            await transferPage.accessReuseOperation();
            break;
        default:
            throw new Error(`${transferType} Transfer type is not available to navigate to...`);
    }
});

When(/^the user select an "([^"]*)" operation from transactions list$/, async function(operationType) {
    await transferPage.reuseTransferList(operationType.toLowerCase(), user.operationsIds[operationType.toLowerCase()]);
});

When(/^the user select an "([^"]*)" operation from transactions list modal$/, async function(operationType) {
    await transferPage.reuseTransferModal(operationType.toLowerCase(), user.operationsIds[operationType.toLowerCase()]);
});

When(/^the user starts a transfer to a personal "([^"]*)" account$/, async function(product) {
    let typeOfAccount = product.toLowerCase();
    await transferPage.accessMyAccounts();
    switch (typeOfAccount) {
        case 'account':
            await transferPage.selectAccountInDestination();
            break;
        case 'debit':
            await transferPage.selectDebitCardAtDestination();
            break;
        case 'foreign':
            await transferPage.selectForengnAccountAtDestination();
            break;
        case 'principal':
            await transferPage.selectPrincipalAccountAtDestination();
            break;
        case 'contract':
            await transferPage.selectContractAtDestination();
            break;
        case 'credit':
            await transferPage.selectCreditCardAtDestination(user.products[0].accountId[0].tdc[0].id);
            break;
        case 'account own':
        case 'debit own':
        case 'saving':
        case 'check':
        case 'express':
        case 'checks':
        case 'savings':
        case 'other express':
            typeOfAccount= typeOfAccount.replace(/ /g, '');
            await transferPage.destinationAccountSelected(user.products[0].accountId[0][typeOfAccount][0].id);
            break;
        default:
            throw new Error(`${product} Transfer product is not available to navigate to...`);
    }
});

When(/^the user will transfer to an "([^"]*)" account by entering the destination number$/, async function(option) {
    let accountName;
    let data;
    const actionInMagicSearch = option.toLowerCase();
    let params = {};
    switch (actionInMagicSearch) {
        case 'not found interbank':
            params = { actionInMagicSearch, accountNumber: 'notFoundInterbank', nameContact: 'firstRecipient', aliasContact: 'firstAlias' };
            break;
        case 'not found interbank contact':
            params = { actionInMagicSearch, accountNumber: 'savedWithAliasInterbank', nameContact: 'secondRecipient', aliasContact: 'secondAlias' };
            break;
        case 'already saved interbank':
            params = { actionInMagicSearch, accountNumber: 'alreadySavedInterbank' };
            break;
        case 'not saved internal':
            params = { actionInMagicSearch, accountNumber: 'savedWithAliasInternal', aliasContact: 'thirdAlias' };
            break;
        case 'internal identified':
            params= { actionInMagicSearch, accountNumber: 'identifiedContactInternal' };
            break;
        case 'internal recognized':
            params = { actionInMagicSearch, accountNumber: 'recognizedContactInternal' };
            break;
        case 'save new contact':
            params = { actionInMagicSearch, accountNumber: 'saveWithNewContact', nameContact: 'thirdRecipient', aliasContact: 'fifthAlias' };
            break;
        case 'save new contact boost interbank transfers':
            accountName = user.products[0].accounts[0].name;
            data = user.products[0].accounts[0].boostInterbankTransfer;
            params = { actionInMagicSearch, nameContact: accountName, accountNumber: data };
            break;
        case 'confirmed':
            params = { accountNumber:'identifiedContactInternal' };
            break;
        case 'internal saved in contacts':
            params = { accountNumber: 'savedWithAliasContact' };
            break;
        case 'with identified data':
            params = { accountNumber: 'identifiedContactInternal' };
            break;
        case 'without identified data':
            params = { accountNumber: 'notFoundInterbank' };
            break;
        case 'with phone number not found in dimo':
            data = user.params.phoneNumberNotFund;
            params = { accountNumber: data };
            break;
        default:
            throw new Error(`${option} Transfer option is not available to navigate to...`);
    }
    await transferPage.magicSearchInteractions(params);
    if(actionInMagicSearch === 'not found interbank' || actionInMagicSearch === 'not found interbank contact') {
        await transferPage.confirmToken('12345678');
    }
});

When(/^the user invite the contact to Dimo$/, async function () {
    await transferPage.acceptDimoInvitation(2);
});

When(/^the user invite the contact to Dimo and closes the invite modal$/, async function () {
    await transferPage.acceptDimoInvitation(2);
    await transferPage.exitDimoInvite();
});

When(/^the user adds an unknown "([^"]*)" interbank account saving to contacts$/, async function (option) {
    const [accountNumber, nameContact, aliasContact]= registerContact(option);
    await transferPage.accessNewRecipient();
    await transferPage.magicSearchInteractions({ actionInMagicSearch: 'recipient not found with number', option, accountNumber, nameContact, aliasContact });
    await transferPage.confirmToken('12345678');
});

When(/^the user adds a "([^"]*)" interbank account without saving to contacts$/, async function (option) {
    const [accountNumber, nameContact]= registerContact(option);
    await transferPage.accessNewRecipient();
    await transferPage.magicSearchInteractions({ actionInMagicSearch: 'contact not saved', option, accountNumber, nameContact});
});

When(/^the user adds the destination number "([^"]*)" of the interbank account not found to a saved contact$/, async function (option) {
    const [accountNumber, nameContact, aliasContact]= addToContact(option);
    await transferPage.magicSearchInteractions({ actionInMagicSearch: 'recipient not found with number', option, accountNumber, nameContact, aliasContact });
});

When(/^the user selects a contact saved with the destination account "([^"]*)"$/, async function (option) {
    const [currentAlias]= getContactAliases(option);
    await navigation.contactsAgenda.go();
    await navigation.diy.transfers.transfers.go(currentAlias);
});

When(/^the user searches for the existing contact by "([^"]*)"$/, async function (option) {
    const contact= getContact(option);
    await contactsAgendaPage.searchContactsaved(contact);
});

When(/^the user continues the transfer to the contact found by "([^"]*)"$/, async function (option) {
    const contact= getContact(option);
    await contactsAgendaPage.searchContactsaved(contact);
    await navigation.diy.transfers.transfers.go(user.products[0].savedContact[0].tdc[0].alias);
    await transferPage.setAmountAndConceptcontinueProcess('20', 'donativo');
});

When(/^the user enter amount "([^"]*)" and concept "([^"]*)"$/, async function(amount, concept) {
    await transferPage.continueDifferentAmount(amount);
    await transferPage.continueConceptProcess(concept);
});

When(/^the user enter amount "([^"]*)"$/, async function (amount) {
    await transferPage.insertAmount(amount);
});

When(/^the user changes amount "([^"]*)"$/, async function (amount) {
    await transferPage.deleteAmount();
    await transferPage.insertAmount(amount);
});

When(/^the user completes amount "([^"]*)" and concept "([^"]*)"$/, async function(amount, concept) {
    await transferPage.continueAmountProcess(amount);
    await transferPage.setConcept(concept);
});

When(/^the user introduces amount and concept in transfer process$/, async function() {
    await transferPage.setAmountAndConceptInInterbankAndInternalTransfer();
});

When(/^the user completes the transfer process$/, async function() {
    await navigation.diy.transfers.transferSuccess.go();
});

When(/^the user completes the transfer process with otp code$/, async function() {
    const otp= '12345678';
    await navigation.diy.transfers.transferSuccess.go({otp});
});

When(/^the user completes the reuse transfer process with otp code$/, async function() {
    const otp= '12345678';
    await transferPage.continueProcess();
    await navigation.diy.transfers.transferSuccess.go({otp});
});

When(/^the user introduces amount with foreign exchange "([^"]*)" "([^"]*)"$/, async function(amount, concept) {
    await transferPage.setAmountAndConcept(amount, concept);
    await transferPage.continueProcess();
});

When(/^the user enters amount "([^"]*)" and concept "([^"]*)" in transfer process$/, async function (amount, concept) {
    await transferPage.setAmountAndConceptcontinueProcess(amount, concept);
});

When(/^the user changes the source account and continues with the transfer to a contact$/, async function () {
    await transferPage.continueAmountProcess('20');
    await transferPage.continueConceptProcess('donativo');
    await transferPage.changeOriginInSummary();
    await transferPage.changeOriginAction();
    await transferPage.sourceAccountSelected(user.products[0].accountId[0].other[0].id);
    await navigation.contactsAgenda.go();
    await navigation.diy.transfers.transfers.go(user.products[0].savedContact[0].tdd[0].alias);
    await transferPage.setAmountAndConceptcontinueProcess('20', 'donativo');
});

When(/^the user accesses to transfer$/, async function() {
    await navigation.diy.transfers.transfers.go();
    await transferPage.productSelected();
});

When(/^the user accesses to transfer from card detail and select credit card$/, async function() {
    await navigation.diy.transfers.transfers.go();
    await transferPage.actionSelectCreditCardDetail();
});

When(/^the user exits the screen successfully$/, async function() {
    await transferSuccessPage.goBack();
});

When(/the user accesses to feedback$/, async function() {
    await navigation.diy.transfer.transferFeedback.go();
});

When(/^the user selects the offer link$/, async function() {
    await transferSuccessPage.selectOfferLink();
});

When(/^the user decides to invite to dimo at another time$/, async function() {
    await transferPage.cancelInviteDimo();
});

When(/^the user selects the primary button of the modal$/, async function() {
    await transferSuccessPage.selectPrimaryButtonOfTheModal();
});

When(/^the user changes the source currency type$/, async function () {
    await transferPage.changeCurrency();
});

When(/^the user cancels the transfer operation$/, async function () {
    await transferPage.cancelTransfer();
});

When(/^the user changes the source account$/, async function () {
    await transferPage.changeOriginAccount();
});

When(/^the user enters the amount to transfer for "([^"]*)"$/, async function (amount) {
    await transferPage.enterAmount({amount: amount});
});

When(/^the user closes the Transfer screen$/, async function () {
    await transferPage.leaveProcess();
});

When(/^the user "([^"]*)" that he wants to close the transfer screen$/, async function (option) {
    await transferPage.leaveProcess();
    if(option==='accepts'){
        await transferPage.confirmDialog({isConfirmed: true});
    }else{
        await transferPage.confirmDialog({isConfirmed: false});
    }
});

When(/^the user continues with the transfer and closes the token screen$/, async function () {
    await transferPage.setAmountAndConceptcontinueProcess('20', 'donativo');
    await transferPage.closeOtp();
});

When(/^the user tap the change link in the origin section$/, async function () {
    await transferPage.changeOriginInSummary();
    await transferPage.changeOriginAction();
    await transferPage.cardCreditSelected(user.products[0].accountId[0].tdc[0].id);
});

When(/^the user exits the recipient screen to select another source account$/, async function () {
    await transferPage.cancelTransfer();
    await navigation.dashboard.go();
    await navigation.diy.transfers.transfers.go();
    await transferPage.sourceAccountSelected(user.products[0].accountId[0].check[0].id);
});

When(/^the user initiates a transfer by entering an amount greater than the balance$/, async function () {
    await navigation.diy.transfers.transfers.go();
    await transferPage.sourceAccountSelected(user.products[0].accountId[0].saving[0].id);
    await navigation.contactsAgenda.go();
    await navigation.diy.transfers.transfers.go(user.products[0].savedContact[0].libreton[0].alias);
    await transferPage.correctionOfAmount('2000000000000', 'donativo');
    await transferPage.changeOriginAccountInSumary();
});

When(/^the user continues the transfer with another origin account$/, async function () {
    await transferPage.sourceAccountSelected(user.products[0].accountId[0].other[0].id);
    await navigation.contactsAgenda.go();
    await navigation.diy.transfers.transfers.go(user.products[0].savedContact[0].libreton[0].alias);
    await transferPage.continueAmountAndConcept();
    await transferPage.changeConceptInSummary();
});

When(/^the user adds a "([^"]*)" internal account without saving to contacts$/, async function (option) {
    const [accountNumber]= registerContact(option);
    await transferPage.accessNewRecipient();
    await transferPage.magicSearchInteractions({ actionInMagicSearch : 'contact not saved internal', accountNumber });
});

When(/^the user saves an internal "([^"]*)" account as a new contact$/, async function (option) {
    const [accountNumber, , aliasContact]= registerContact(option);
    await transferPage.accessNewRecipient();
    await transferPage.magicSearchInteractions({ actionInMagicSearch: 'contact saved internal', accountNumber, aliasContact });
    await transferPage.confirmToken('12345678');
});

When(/^the user changes the concept by entering amount "([^"]*)" and concept "([^"]*)"$/, async function (amount, concept) {
    await transferPage.continueAmountProcess(amount);
    await transferPage.setConcept(concept);
    await transferPage.deleteConcept();
    await transferPage.continueConceptProcess('otro');
    await transferPage.continueProcess();
});

When(/^the user enters a "([^"]*)" number$/, async function (option) {
    const [accountNumber]= registerContact(option);
    await transferPage.continueNewRecipient(accountNumber);
});

When(/^the user completes the transfer with the otp code and closes the successful screen$/, async function() {
    const otp= '12345678';
    await navigation.diy.transfers.transferSuccess.go({otp});
    await transferSuccessPage.goBack();
});

When(/^the user adds an internal "([^"]*)" account to an already saved contact$/, async function(option) {
    const [accountNumber, , aliasContact]= registerContact(option);
    await transferPage.accessNewRecipient();
    await transferPage.magicSearchInteractions({ actionInMagicSearch:'contact saved internal', accountNumber, aliasContact });
    await transferPage.confirmDialog({isConfirmed: true});
});

When(/^the user enters the amount "([^"]*)" and the concept "([^"]*)" to complete the transfer$/, async function(amount, concept) {
    await transferPage.continueAmountProcess(amount);
    await transferPage.continueConceptProcess(concept);
    await navigation.diy.transfers.transferSuccess.go();
});

When(/^the user accesses on link boost message interbank transfers$/, async function() {
    await navigation.internationalTransfer.internationalTransfersPanel.go();
});

When(/^the user enters "([^"]*)" exceeds the amount available in the account$/, async function(amount) {
    await transferPage.setAmount(amount);
});

When(/^the user completes the transfer "([^"]*)" contact and accesses MTU limit exceeded screen$/, async function(contact) {
    const otp = '12345678';
    let params = {};
    if(contact.toLowerCase() === 'internal identified') {
        params = { actionInMagicSearch: 'internal identified', accountNumber: 'identifiedContactInternal' };
        await transferPage.magicSearchInteractions(params);
        await transferPage.confirmToken(otp);
    }

    await transferPage.setAmountAndConceptcontinueProcess();
    await navigation.mtuLimits.mtuException.go({otp});
});

When(/^the user completes the transfer with otp code$/, async function() {
    await transferPage.confirmToken('12345678');
});

When(/^the user completes the own transfer$/, async function() {
    await transferPage.continueProcess();
});

When(/^the user continues after confirming destination data(?: (with otp))?$/, async function(withOtp) {
    await transferPage.acceptNewRecipient();
    if (withOtp) {
        const otp = '12345678';
        await transferPage.confirmToken(otp);
    }
});

When(/^the user saves the destination contact with alias "([^"]*)" and confirms destination data with otp$/, async function(alias) {
    const otp = '12345678';
    await transferPage.isInterbankAliasSaved(alias);
    await transferPage.confirmToken(otp);
});

