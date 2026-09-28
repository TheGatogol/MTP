import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocLoanRelocationFinancialHealth from '../../pages/ocLoanRelocationFinancialHealth/ocLoanRelocationFinancialHealth';

When(/^the user accesses to loan relocation financial health offer$/, async function() {
    await navigation.ocLoanRelocationFinancialHealth.ocLoanRelocationFinancialHealth.go();
});

When(/^the user performs the "(.*)" action for financial health repositioning$/, async function(action) {
    switch (action.toLowerCase()) {
        case 'continue offer':
            await ocLoanRelocationFinancialHealth.continueOffer();
            break;
        case 'accept all':
            await ocLoanRelocationFinancialHealth.acceptAll();
            break;
        case 'whithout life insurance':
            await ocLoanRelocationFinancialHealth.withoutLifeInsurance();
            break;
        case 'confirm offer':
            await ocLoanRelocationFinancialHealth.continueSummary();
            break;
        case 'conditions offer edit':
            await ocLoanRelocationFinancialHealth.conditionsOfferEdit();
            break;
        default:
            throw new Error(`${action} select is not available to show...`);
    }
});
