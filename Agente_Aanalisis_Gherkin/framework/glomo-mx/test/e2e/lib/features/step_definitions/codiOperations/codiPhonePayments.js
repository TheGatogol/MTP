import {When} from '@cucumber/cucumber';
import codiPaymentInformation from '../../pages/codiOperations/codiPaymentInformation';

When(/^the user select account$/, async function() {
    await codiPaymentInformation.selectIssuingAccount();
});

When(/^the user confirm payment money$/, async function() {
    await codiPaymentInformation.payMoney();
});

When(/^the user accesses the OTP and confirms authorization$/, async function() {
    await codiPaymentInformation.confirmPay();
});
