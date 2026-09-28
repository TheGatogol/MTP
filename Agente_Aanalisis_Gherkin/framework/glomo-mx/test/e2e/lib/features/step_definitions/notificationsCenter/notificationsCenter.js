import { When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

When(/^the user accesses center notification/, async function() {
    await navigation.notificationsCenter.notificationsCenter.go();
});

When(/^the user access detail notification "([^"]*)"/, async function(option){
    switch (option.toLowerCase()) {
        case 'alert':
            await notificationsCenter.showDetailAlertPhaseTwo();
            break;
        case 'expense':
            await notificationsCenter.showDetailExpense();
            break;
        case 'promotion':
            await notificationsCenter.showDetailPromotion();
            break;
        case 'informative warning':
            await notificationsCenter.showDetailInformativeWarning();
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user access notification filter list/, async function() {
    await notificationsCenter.showFilterList();
});

When(/^the user access detail collections notification "([^"]*)"$/, async function (defaultId) {
    await notificationsCenter.showDetailDefault(defaultId);
});

When(/^the user access view all notification ALERT/, async function() {
    await notificationsCenter.showResultNotificationsAlert();
});

When(/^the user access swipe delete notification/, async function() {
    await notificationsCenter.swipeSelectNotification();
});

When(/^the user cancel delete notification/, async function() {
    await notificationsCenter.cancelModalDeletNotification();
});

When(/^the user accepted delete notification/, async function() {
    await notificationsCenter.aceptedModalDeletNotification();
});

When(/^the user access swipe favorite notification/, async function() {
    await notificationsCenter.swipeSelectNotificationFavorite();
});

When(/^the user access settings notification/, async function() {
    await notificationsCenter.settingConfiguration();
});

When(/^the user access swipe more event notification/, async function() {
    await notificationsCenter.swipeSelectNotificationEventMore();
});

When(/^the user access mark notification read/, async function() {
    await notificationsCenter.swipeSelectNotificationEventMoreMarkRead();
});

When(/^the user access mark unread notification/, async function() {
    await notificationsCenter.swipeSelectNotificationEventMoreMarkRead();
});

When(/^the user access result notifications/, async function() {
    await notificationsCenter.showFilterPage();
});

When(/^the user access open other detail notification/, async function() {
    await notificationsCenter.detailPromotion(user.notifications.notifictationId);
});

When(/^the user open a credit card notification/, async function() {
    await notificationsCenter.detailPromotion(user.notifications.notifictationId);
});

When(/^the user access a credit card notification/, async function() {
    await navigation.frequentIntelligentCreditCardPayment.frequentIntelligentCreditCardPayment.go();
});

When(/^the user select confirm or rejected a notification$/, async function() {
    await navigation.domiciliationNotice.domiciliationNoticeDetail.go(global.user.notifications.domiciliationNotice);
});

When(/^the user close notification detail$/, async function() {
    await notificationsCenter.closeNotificationDetail();
});

When(/^the user selects a purchase instruction notification to complete their contract$/, async function() {
    await navigation.notificationsCenter.notificationsCenter.go();
    await navigation.deferredSignature.deferredSignaturePurchaseInstruction.go(global.user.notifications.deferredSignature);
});

When(/^the user click Button review and sign$/, async function() {
    await notificationsCenter.selectActionBtnReviewAndSign();
});

When(/^the user accesses to detail notification$/, async function(){
    await navigation.notificationsCenter.notificationsCenter.go();
    await notificationsCenter.selectNotification(global.user.notifications.insurancePayment);
});

When(/^the user accesses insurance delayed payment$/, async function(){
    await notificationsCenter.enterPaymentInsurance();
});

When(/^the user accesses insurance delayed payment "([^"]*)"$/, async function(notification) {
    const notifications = {
        'policy': global.user.notifications.insurancePaymentPolicy,
        'with out of time': global.user.notifications.insurancePaymentOutTime,
        'main': global.user.notifications.insurancePayment
    };
    await navigation.insuranceDelayedPayment.insuranceDelayedPayment.go(notifications[notification]);
});

When(/^the user accesses "([^"]*)" in notification center$/, async function(notification) {
    const notifications = {
        'expired signature': global.user.notifications.expiredSignature,
        'deferred signature coowners': global.user.notifications.deferredSignatureCoowners,
        'happy path deferred signature coowners': global.user.notifications.success,
        'summary': global.user.notifications.happyPath
    };
    await navigation.deferredSignatureCoowners.deferredSignatureCoowners.go(notifications[notification]);
});

When(/^the user accesses "([^"]*)" detail notification$/, async function(notification) {
    await navigation.notificationsCenter.notificationsCenter.go();
    await notificationsCenter.selectNotificationType(notification);
});

When(/^the user accesses to continue process operative$/, async function() {
    await navigation.ocLoanOffer.ocLoanOffer.go();
});

When(/^the user select "([^"]*)" detail notification$/, async function(notification) {
    await notificationsCenter.selectNotificationType(notification);
});
