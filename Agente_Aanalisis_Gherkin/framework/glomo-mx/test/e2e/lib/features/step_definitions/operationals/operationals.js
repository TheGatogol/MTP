import {When} from '@cucumber/cucumber';

// Utility requires
import * as navigation from '../../navigation';
//Page Objects

When(/^the user accesses twice to more operatives$/, async function () {
    await navigation.selectOperations.selectOperations.go({operative: 'operationsMore'});
    await navigation.dashboard.go();
    await navigation.selectOperations.selectOperations.go({operative: 'operationsMore'});
    await navigation.dashboard.go();
});

When (/^the user accesses to more operatives option$/, async function () {
    await navigation.selectOperations.selectOperations.go({operative: 'operationsMore'});
});

When (/^the user accesses to option "([^"]*)" operative$/, async function(operative) {
    await navigation.selectOperations.selectOperations.go({operative: 'operationsMore'});
    switch (operative.toLowerCase()){
        case 'transfer':
            await navigation.diy.transfer.transfers.go();
            break;
        case 'bill payments':
            await navigation.billPayments.billPaymentsDashboard.dashboardStep1.go();
            break;
        case 'cardless withdrawal':
            await navigation.cardlessWithdrawal.cardlessWithdrawal.go();
            break;
        case 'mobiletopup':
            await navigation.selectOperations.topUp.go();
            break;
        case 'account status':
            await navigation.monthlyStatementEnquiry.monthlyStatementOperative.go();
            break;
        case 'creditcardpayment':
            await navigation.creditCardPayment.accountCreditCardPayment.go();
            break;
        case 'frequent intelligent operations':
            await navigation.frequentIntelligentOperations.frequentIntelligentOperationsList.go();
            break;
        default:
            throw new Error(`${operative} operative is not available to navigate to...`);

    }
});

When (/^the user accesses to faqs screen from dashboard page$/, async  function () {
    await navigation.dashboard.go();
    await navigation.helpSearch.helpSearch.go();
});
