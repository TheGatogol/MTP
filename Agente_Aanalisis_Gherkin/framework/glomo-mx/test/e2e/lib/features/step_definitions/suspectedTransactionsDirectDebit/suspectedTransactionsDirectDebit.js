import {When} from '@cucumber/cucumber';
import suspectedTransactionsDirectDebit from '../../pages/suspectedTransactionsDirectDebit/suspectedTransactionsDirectDebit';

When(/^the user "([^"]*)" subscription the movement$/, async function(accept) {
    await suspectedTransactionsDirectDebit.acceptSubscription(accept);
});

When(/^the user confirm "([^"]*)" half modal page$/, async function(action) {
    await suspectedTransactionsDirectDebit.closeExitDetail();
    await suspectedTransactionsDirectDebit.closeModal(action);
});

When(/^the user "([^"]*)" debit the movement$/, async function(button) {
    await suspectedTransactionsDirectDebit.responseModal(button);
});
