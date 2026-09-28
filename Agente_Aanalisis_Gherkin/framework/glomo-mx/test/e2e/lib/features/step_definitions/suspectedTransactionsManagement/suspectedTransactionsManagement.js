import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';
import suspectedTransactionsManagement from '../../pages/suspectedTransactionsManagement/suspectedTransactionsManagement';

When(/^the user accesses attempted "([^"]*)" notification$/, async function(option) {
    await navigation.notificationsCenter.notificationsCenter.go();
    await notificationsCenter.fillFlags();
    const {notifications, deepLinks, publicSettings} = global.user;
    switch (option.toLowerCase()) {
        case 'purchase':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                notification: notifications.purchaseNotice, deepLinkObject: deepLinks.purchaseNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'cardless withdrawal':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                notification: notifications.cardlessWithdrawalNotice,
                deepLinkObject: deepLinks.cardlessWithdrawalNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'service payment':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                notification: notifications.cieNotice, deepLinkObject: deepLinks.cieNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'third parties transfer':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                notification: notifications.thirdPartiesTransfer, deepLinkObject: deepLinks.thirdPartiesTransferDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'atm withdrawal - bbva banks':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                notification: notifications.atmWithdrawalBbvaNotice,
                deepLinkObject: deepLinks.atmWithdrawalBbvaNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'atm withdrawal - other banks':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                notification: notifications.atmWithdrawalOtherNotice
            });
            break;
        case 'confirm':
            await navigation.suspectedTransactionsDirectDebit.suspectedTransactionsDirectDebit.go({
                notification: notifications.directDebit, deepLinkObject: deepLinks.directDebitNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user selects attempted "([^"]*)" notification$/, async function(option) {
    await navigation.notificationsCenter.notificationsCenter.go();
    await notificationsCenter.fillFlags();
    switch (option.toLowerCase()) {
        case 'purchase':
            await notificationsCenter.selectNotification(global.user.notifications.purchaseNotice);
            break;
        case 'cardless withdrawal':
            await notificationsCenter.selectNotification(global.user.notifications.cardlessWithdrawalNotice);
            break;
        case 'service payment':
            await notificationsCenter.selectNotification(global.user.notifications.cieNotice);
            break;
        case 'third parties transfer':
            await notificationsCenter.selectNotification(global.user.notifications.thirdPartiesTransfer);
            break;
        case 'atm withdrawal - bbva banks':
            await notificationsCenter.selectNotification(global.user.notifications.atmWithdrawalBbvaNotice);
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user opens attempted "([^"]*)" notification$/, async function(option) {
    const {deepLinks, publicSettings} = global.user;
    switch (option.toLowerCase()) {
        case 'purchase':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                singleNavigation: true, deepLinkObject: deepLinks.purchaseNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'cardless withdrawal':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                singleNavigation: true, deepLinkObject: deepLinks.cardlessWithdrawalNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'service payment':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                singleNavigation: true, deepLinkObject: deepLinks.cieNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'third parties transfer':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                singleNavigation: true, deepLinkObject: deepLinks.thirdPartiesTransferDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'atm withdrawal - bbva banks':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                singleNavigation: true, deepLinkObject: deepLinks.atmWithdrawalBbvaNoticeDeepLink, publicSettingsObject: publicSettings
            });
            break;
        case 'atm withdrawal - other banks':
            await navigation.suspectedTransactionsManagement.suspectedTransactionsManagement.go({
                singleNavigation: true
            });
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user confirms the movement$/, async function() {
    await suspectedTransactionsManagement.confirmTransaction();
});

When(/^the user rejects the movement$/, async function() {
    await suspectedTransactionsManagement.declineTransaction();
});

When(/^the user exits the movement notification$/, async function() {
    await navigation.dashboard.go({option: 'without response'});
});

When(/^the user tries to exit the movement notification$/, async function() {
    await suspectedTransactionsManagement.exitNotification();
});

When(/^the user returns from trying to exit the movement notification$/, async function() {
    await suspectedTransactionsManagement.returnFromExitNotification();
});

When(/^the user goes back to dashboard from detail notification$/, async function() {
    await navigation.dashboard.go({option: 'with response'});
});

When(/^the user goes to block and replacement page from reject modal$/, async function() {
    await navigation.blockAndReplacement.blockAndReplacement.go();
});

