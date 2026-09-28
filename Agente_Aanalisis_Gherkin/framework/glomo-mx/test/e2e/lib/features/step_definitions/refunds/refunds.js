import {
    When
} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import refundsDetails from '../../pages/refunds/refundsDetail';

//clicl AL BOTON RETURN MONEY DETALLE DE MOVIMIENTO
When(/^the user wants to refund money$/, async function() {
    await navigation.refunds.refunds.go();
});

When(/^the user dont want to refund money$/, async function() {
    await navigation.refunds.refundsDetail.go();
    await refundsDetails.refundsButtonClickCancel();
});

When(/^the user accept modal information$/, async function() {
    await refundsDetails.refundsButtonClick();

});

When(/^the user suddenly want to leave refund money$/, async function() {
    await refundsDetails.exitButton();
});
//CLIC BOTON REFUNDS MONEY MODAL ERROR
When(/^the user has not enough funds in his account to refund money.$/, async function() {
    await refundsDetails.refundsButtonClick();
    await refundsDetails.refundsSetInoformation();
});

//CLIC BOTON REFUNDS detail OTP show
When(/^the user confim refund review information$/, async function() {
    await refundsDetails.refundsButtonClick();
    await refundsDetails.continueBtnClic();
});

//CLIC BOTON REFUNDS and show succcess refund
When(/^the user decides refund money$/, async function() {
    await navigation.refunds.refundsDetail.go();
});
When(/^the user insert otp token and continue$/, async function() {
    await refundsDetails.refundsButtonClick();
    await refundsDetails.continueBtnClic();
    await navigation.refunds.successRefunds.go();
});

When(/^the user insert otp token$/, async function() {
    await refundsDetails.refundsButtonClick();
    await refundsDetails.continueBtnClic();
    await refundsDetails.setOtp();
});

