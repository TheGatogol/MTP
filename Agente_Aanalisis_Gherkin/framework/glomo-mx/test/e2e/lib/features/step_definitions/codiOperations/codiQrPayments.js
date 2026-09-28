import {When} from '@cucumber/cucumber';
import codiQrPaymentsReceipt from '../../pages/codiOperations/codiQrPaymentsReceipt';

When(/^the user accesses the OTP and confirms authorization$/, async function() {
    await codiQrPaymentsReceipt.confirmPay();
});

When(/^the user logs in with an invalid QR payment$/, async function() {
    await codiQrPaymentsReceipt.sharePayments();
});
