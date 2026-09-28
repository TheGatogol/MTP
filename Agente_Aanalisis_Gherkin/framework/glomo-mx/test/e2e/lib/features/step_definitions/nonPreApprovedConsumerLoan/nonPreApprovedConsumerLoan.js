import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import npaConsumerLoan from '../../pages/nonPreApprovedConsumerLoan/nonPreApprovedConsumerLoan';
import npaConsumerLoanBureau from '../../pages/nonPreApprovedConsumerLoan/nonPreApprovedConsumerLoanBureau';

When (/^the user goes to the npa offer loan screen$/, async function(){
    await navigation.npaConsumerLoan.npaConsumerLoanBureau.go();
});

When(/^the user accept credit bureau application$/, async function() {
    await npaConsumerLoanBureau.acceptAllConditions();
});

When(/^the loan offer screen is showed$/, async function() {
    await navigation.npaConsumerLoan.npaConsumerLoanOffer.go();
});

When(/^the user hire the offer$/, async function() {
    await npaConsumerLoan.hireOffer();
});

When(/^the user moves forward to npa consumer loan offer page$/, async function() {
    await npaConsumerLoanBureau.continueProccess();
});

When(/^the user open the credit history inquiry authorization terms$/, async function() {
    await npaConsumerLoanBureau.openCreditHistoryInquiryTerms();
});

When(/^the user open the life insurance modal help$/, async function() {
    await npaConsumerLoan.openLifeInsuranceHelpModal();
});

When(/^the user open the tax modal help$/, async function() {
    await npaConsumerLoan.openTaxHelpModal();
});

When(/^the user select the input amount$/, async function() {
    await npaConsumerLoan.selectInputAmpunt();
});
