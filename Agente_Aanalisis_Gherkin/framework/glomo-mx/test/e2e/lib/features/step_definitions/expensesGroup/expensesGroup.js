import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import expensesGroup from '../../pages/expensesGroup/expensesGroup';
import transferPage from '../../pages/diy/transfer/transfer';
import transferSuccess from '../../pages/diy/transfer/transferSuccess';

When(/^the user accesses the expenses group "([^"]*)"$/, async function(section) {
    switch (section.toLowerCase()) {
        case 'page':
            await navigation.expensesGroup.expensesGroup.go();
            break;
        case 'list':
            await navigation.expensesGroup.expensesGroup.go();
            await expensesGroup.processOfTermAndConditions();
            await expensesGroup.acceptTermAndConditons();
            break;
        default:
            throw new Error(`Not recognized option "${section}"`);
    }
});

When(/^the user creates group and add new participant$/, async function () {
    await expensesGroup.createGroup();
    await expensesGroup.newNameGroup();
    await expensesGroup.linkAddNewContact('crear grupo');
    await expensesGroup.newContact();
    await expensesGroup.saveContact();
});

When(/^the user adds new participant$/, async function () {
    await expensesGroup.buttonAddParticipeDetail();
    await expensesGroup.newContact();
    await expensesGroup.saveContact();
});

When(/^the user continues to display the group creation ticket$/, async function() {
    await expensesGroup.buttonResumeGroup();
});

When(/^the user has a pending invitation$/, async function() {
    await expensesGroup.invitationPending();
});

When(/^the user deletes the group name$/, async function() {
    await expensesGroup.createGroup();
    await expensesGroup.nameGroup('Prueva');
    await expensesGroup.deleteNameGroupInput();
});

When(/^the user enters the "([^"]*)" group$/, async function(group) {
    await expensesGroup.entersGroup(group);
});

When(/^the user is in the "([^"]*)" section$/, async function(entryPoint) {
    if(entryPoint === 'participants') {
        await expensesGroup.entersParticipantsDetailGroup();
    }
});

When(/^the user enters the "([^"]*)" action from "([^"]*)" section(?: of group "([^"]*)")?$/, async function(action, entryPoint, group) {
    if (group) {
        await expensesGroup.entersGroup(group);
    }
    switch (entryPoint.toLowerCase()) {
        case 'expenses':
            await expensesGroup.selectOperativeExpensesSection(action);
            break;
        case 'participants':
            await expensesGroup.entersParticipantsDetailGroup();
            await expensesGroup.selectOperativeParticipantsSection(action);
            break;
        default:
            throw new Error(`Not recognized option "${entryPoint}"`);
    }
});

When(/^the user changes the group name to "([^"]*)"$/, async function(name) {
    await expensesGroup.changeNameGroup(name);
    await expensesGroup.saveNewNameGroup();
});

When(/^the user selects a person with debt and exits the process$/, async function() {
    await expensesGroup.selectPersonDebt();
});

When(/^the user enters the "([^"]*)" action from participants modal$/, async function(entryPoint) {
    await expensesGroup.selectActionParticipantsModal(entryPoint);
});

When(/^the user enters the "([^"]*)" action from participants detail$/, async function(entryPoint) {
    await expensesGroup.selectActionParticipantDetail(entryPoint);
});

When(/^the main creditor request a participant with pending payments$/, async function() {
    await expensesGroup.requestPendingPayment();
});

When(/^the main creditor selects a participant to send a payment reminder$/, async function() {
    await expensesGroup.sendAReminder();
});

When(/^the main creditor deletes a participant selected$/, async function() {
    await expensesGroup.deleteParticipant();
});

When(/^the user marks "([^"]*)" participants as paid$/, async function(mark) {
    await expensesGroup.markParticipant(mark);
});

When(/^the main creditor edits his personal information$/, async function() {
    await expensesGroup.editPersonalInformation();
});

When(/^the main creditor pays a participant they have a debt with$/, async function() {
    const entryPoint = 'edit information modal no debt';
    await expensesGroup.selectActionParticipantDetail(entryPoint);
    await expensesGroup.payOneParticipantDetail();
    await transferPage.completeDebtsSettlement();
    await transferSuccess.goBack();
});

When(/^the user pays a participant they have a debt with$/, async function() {
    const entryPoint = 'edit information modal no debt';
    await expensesGroup.selectActionParticipantDetail(entryPoint);
    await transferPage.completeDebtsSettlement();
    await transferSuccess.goBack();
});

When(/^the user marks the debt of "([^"]*)" participants as paid$/, async function(value) {
    await expensesGroup.selectOptionsDebts(value);
});

When(/^the user marks as paid "([^"]*)" who owes them$/, async function(value) {
    await expensesGroup.selectOptionsPartcipants(value);
});

When(/^the user "([^"]*)" and show the confirmation modal$/, async function(value) {
    await expensesGroup.selectOptionsModal(value);
});

When(/^the user marks as paid a participant who owes them and validates the payment$/, async function() {
    await expensesGroup.owesOneDebt();
    await expensesGroup.exitMarkAsPaidReceiptModal();
});

When(/^the user accesses the payment status "([^"]*)"$/, async function(value) {
    await expensesGroup.accessPaymentStatus(value);
});

When(/^the user "([^"]*)" the "([^"]*)" from group detail$/, async function(action, section) {
    await expensesGroup.selectOptionDetail(action, section);
});

When(/^the user adds participant$/, async function() {
    await expensesGroup.linkAddNewContact();
    await expensesGroup.newContact();
    await expensesGroup.saveContact();
});

When(/^the user "([^"]*)" the adds participant screen$/, async function(value) {
    await expensesGroup.linkAddNewContact();
    await expensesGroup.newContact();
    await expensesGroup.exitAddParticipe();
    switch(value.toLowerCase()) {
        case 'exits':
            await expensesGroup.confirmNewMember();
            break;
        case 'no exits':
            await expensesGroup.confirmNewMember({isConfirmed: false});
            break;
        default:
            throw new Error(`Not recognized option "${value}"`);
    }
});

When(/^the user adds the cash expense$/, async function() {
    await expensesGroup.addCashExpense();
});

When(/^the user add amount and concept$/, async function() {
    await expensesGroup.addAmountAndConceptFromAddInCash();
});

When(/^the user continues from add in cash section$/, async function() {
    await expensesGroup.buttonContinueInformAmountAndConcept();
});

When(/^the user edit the paid by$/, async function() {
    await expensesGroup.btnEditPayers();
});

When(/^the user edits the expense information "([^"]*)"$/, async function(option) {
    if(option === 'from expense settings'){
        await expensesGroup.changeExpenseInformationFromExpenseSettings();
    }else {
        await expensesGroup.changeExpenseInformation();
    }
});

When(/^the user access the details of the "([^"]*)" expense "([^"]*)"$/, async function(expense, value) {
    await expensesGroup.detailExpense(expense);
    if(value === 'and show more expenses'){
        await expensesGroup.showMoreExpenses();
    }
});

When(/^the user modifies the "([^"]*)" from expense detail$/, async function(value) {
    if(value === 'amount'){
        await expensesGroup.editAmountExpenseDetail();
    }else{
        await expensesGroup.editConceptExpenseDetail();
    }
});

When(/^the user "([^"]*)" delete the expense$/, async function(value) {
    switch(value.toLowerCase()) {
        case 'confirms':
            await expensesGroup.modalDeleteBtnContinueExpenseDetail();
            break;
        case 'cancels':
            await expensesGroup.modalDeleteBtnCancelExpenseDetail();
            break;
        default:
            throw new Error(`Not recognized option "${value}"`);
    }
});

When(/^the user confirms delete a movement from the group detail$/, async function () {
    await expensesGroup.deleteMovementDetailGroupModalBtnContinue();
});

When(/^the user cancels delete a movement from the group detail$/, async function () {
    await expensesGroup.deleteMovementDetailGroupModalLinkCancel();
});

When(/^the user exits the groups help screen$/, async function () {
    await expensesGroup.accesHelpScreen();
    await expensesGroup.exitHelpScreen();
});

When(/^the user realizes the process of term and conditions$/, async function () {
    await expensesGroup.processOfTermAndConditions();
});

When(/^the user accepts terms and conditions of expenses group$/, async function() {
    await expensesGroup.acceptTermAndConditons();
});

When(/^the user "([^"]*)" "([^"]*)" the delete participants screen$/, async function(option, value) {
    await expensesGroup.selectparticipan(value);
    await expensesGroup.exitDeleteParticipansScreen();
    switch(option.toLowerCase()) {
        case 'exits':
            await expensesGroup.confirModalConfirmRemoval();
            break;
        case 'no exits':
            await expensesGroup.confirModalConfirmRemoval({isConfirmed: false});
            break;
        default:
            throw new Error(`Not recognized option "${option}"`);
    }
});

When(/^the user deletes "([^"]*)" participants$/, async function(value) {
    await expensesGroup.selectparticipan(value);
});

When(/^the user "([^"]*)" the change name screen$/, async function(value) {
    await expensesGroup.changeNameGroup('nuevo');
    await expensesGroup.accessModalGroupNameConfirm();
    switch(value.toLowerCase()) {
        case 'exits':
            await expensesGroup.confirmGroupNameModalDialog();
            break;
        case 'no exits':
            await expensesGroup.confirmGroupNameModalDialog({isConfirmed: false});
            break;
        default:
            throw new Error(`Not recognized option "${value}"`);
    }
});

When(/^the user (no deletes|deletes) group$/, async function(value) {
    if(value === 'deletes'){
        await expensesGroup.confirmModalConfirm();
    }else{
        await expensesGroup.confirmModalConfirm({isConfirmed: false});
    }
});

When(/^the user "([^"]*)" "([^"]*)" participants$/, async function(option, value) {
    await expensesGroup.selectparticipan(value);
    await expensesGroup.deleteParticipan();
    switch(option.toLowerCase()) {
        case 'delete':
            await expensesGroup.confirModalConfirmRemoval();
            break;
        case 'no delete':
            await expensesGroup.confirModalConfirmRemoval({isConfirmed: false});
            break;
        default:
            throw new Error(`Not recognized option "${value}"`);
    }
});

When(/^the user changes name participant$/, async function () {
    await expensesGroup.changeName('MARIA JESUS');
    await expensesGroup.saveNameParticipan();
});

When(/^the user "([^"]*)" the group$/, async function(value) {
    switch(value.toLowerCase()) {
        case 'leaves':
            await expensesGroup.confirmModalMemberDetail();
            break;
        case 'does not leave':
            await expensesGroup.confirmModalMemberDetail({isConfirmed: false});
            break;
        default:
            throw new Error(`Not recognized option "${value}"`);
    }
});

When(/^the user "([^"]*)" the information$/, async function(value) {
    switch(value.toLowerCase()) {
        case 'edits':
            await expensesGroup.confirmModalMemberDetail();
            break;
        case 'does not edit':
            await expensesGroup.changeNumber();
            await expensesGroup.exitAddParticipe();
            await expensesGroup.confirmNewMember({isConfirmed: false});
            break;
        default:
            throw new Error(`Not recognized option "${value}"`);
    }
});

When(/^the user exits pending payments screen$/, async function () {
    await expensesGroup.confirmHelpModal();
});

When(/^the user associates an expense$/, async function() {
    await expensesGroup.associateAnExpenseWithSuccess();
});

When(/^the user selects a card to "([^"]*)"$/, async function (entryPoint) {
    switch(entryPoint.toLowerCase()) {
        case 'show all':
            await expensesGroup.selectACardToAssociateWithAnExpense();
            break;
        case 'not show all':
            await expensesGroup.selectACardToAssociateWithAnExpenseTwo();
            break;
        case 'continue':
            await expensesGroup.selectAProductToAssociateWithAnExpense();
            break;
        default:
            throw new Error(`Not recognized option "${entryPoint}"`);
    }
});

When(/^the user selects an account to "([^"]*)"$/, async function(entryPoint) {
    switch(entryPoint.toLowerCase()) {
        case 'show all':
            await expensesGroup.selectAnAccountToAssociateWithAnExpense();
            break;
        case 'not show all':
            await expensesGroup.selectAnAccountToAssociateWithAnExpenseTwo();
            break;
        default:
            throw new Error(`Not recognized option "${entryPoint}"`);
    }
});

When(/^the account has no movements$/, async function() {
    await expensesGroup.accountWithoutMovements();
});

When(/^the user selects link to show all movements$/, async function() {
    await expensesGroup.accountShowAllMovements();
});

When(/^the user completes the payment of his debt$/, async function() {
    await expensesGroup.requestPendingPayment();
    await transferPage.completeDebtsSettlement();
    await transferSuccess.goBack();
});

When(/^the user modifies the concept from associate expenses$/, async function() {
    await expensesGroup.editConceptAssociateExpense();
});

When(/^the user spends settings do not change$/, async function () {
    await expensesGroup.expenseSettingsUnchanged();
});

When(/^the user makes custom expense settings$/, async function() {
    await expensesGroup.customExpenseSettings();
});

When(/^the user divides the expenses equally without changes$/, async function() {
    await expensesGroup.divisionExpensesEquallyWithoutChanges();
});

When(/^the user divides the expense by modifying an amount to a user$/, async function() {
    await expensesGroup.splittingExpensesChangingAmountUser();
});

When(/^the user splits custom expenses$/, async function() {
    await expensesGroup.customExpenseDivision();
});

When(/^the user edits Expense Information$/, async function () {
    await expensesGroup.editingExpenseInformation();
});

When(/^the user changes the expense information when the expense is customized$/, async function() {
    await expensesGroup.editingCustomExpenseInformation();
});

When(/^the user completes the payment of his debt to a non client$/, async function() {
    await transferPage.completeDebtsSettlement();
    await transferSuccess.goBack();
});

When(/^the user selects the payment option "([^"]*)"$/, async function(entryPoint) {
    await expensesGroup.selectPaymentOption(entryPoint);
});

When(/^the user closes the screen mark as paid$/, async function () {
    await expensesGroup.closeMarkAsPaidModal();
});

When(/^the user selects one participant and completes the payment of his debt$/, async function() {
    await expensesGroup.payOneParticipant();
    await transferPage.completeDebtsSettlement();
    await transferSuccess.goBack();
});

When(/^the user edits name and number information$/, async function() {
    await expensesGroup.changeName();
    await expensesGroup.changeNumber();
    await expensesGroup.saveContact();
});

When(/^the user changes expense information$/, async function () {
    await expensesGroup.changeExpenseInformationModal();
});

When(/^the user changes expense information and multistep$/, async function () {
    await expensesGroup.changeExpenseConfigurationModal();
});

When(/^the user edits participant information$/, async function() {
    await expensesGroup.editInformationParticipant();
});

When(/^the user adds information from the new participant$/, async function () {
    await expensesGroup.limitexceeded();
});

When(/^show modal from participant limit exceeded$/, async function() {
    await expensesGroup.saveContact();
});

When(/^the user creates a group but does not finish the process$/, async function() {
    await expensesGroup.createGroup();
    await expensesGroup.newNameGroup();
    await expensesGroup.linkAddNewContact('crear grupo');
    await expensesGroup.newContact();
    await expensesGroup.saveContact();
    await expensesGroup.continueParticipantSection();
});

When(/^show modal from group limit exceeded$/, async function() {
    await expensesGroup.grouplimitexceeded();
});

When(/^the user navigates to associate expense in cash from modal error$/, async function () {
    await expensesGroup.navigateToAssociateInCash();
});

When(/^the user views more operations from members section$/, async function() {
    await expensesGroup.viewMoreMembersOperations();
});

When(/^the user selects an action from the operatives$/, async function() {
    const {buttonIcon, buttonIndex } = global.user.buttonActions;
    await expensesGroup.participantSelectActionSettings(buttonIcon, buttonIndex);
});
