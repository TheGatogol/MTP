import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user navigates to instant cash screen$/, async function() {
    await navigation.loan.efi.efi.go();
});

When(/^the user navigates to "([^"]*)" step of instant cash$/, async function (step) {

    switch (step.toLowerCase()) {
        case 'product selection':
            await currentPage.acceptOffer();
            break;
        case 'terms and conditions':
            await currentPage.selectSingleProduct();
            break;
        case 'summary preview':
            await currentPage.acceptTermsAndConditions();
            break;
        case 'complete preview':
            await currentPage.acceptOffer();
            await currentPage.selectSingleProduct();
            await currentPage.acceptTermsAndConditions();
            break;
        default:
            throw new Error(`${step} option is not available step...`);
    }
});

When(/^the user navigates to the successful screen of instant cash hiring$/, async function() {
    await navigation.loan.efi.efiReview.go();
});

When(/^the user modifies instant cash offer amount with "([^"]*)"$/, async function(inputValue) {
    await currentPage.changeAmountValue(inputValue);
});
