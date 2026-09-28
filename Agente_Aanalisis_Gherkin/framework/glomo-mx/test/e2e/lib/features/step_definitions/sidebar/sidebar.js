import {When, Then} from '@cucumber/cucumber';
// Utility requires
import * as navigation from '../../navigation';
import sidebar from '../../pages/sidebar/sideBar';

// STEP DEFINITIONS

// Press the sidebar button from any screen using navigation
When(/^the user accesses to the sidebar$/, async function() {
    await navigation.sidebar.go();
});

When(/^the user goes to changes profile$/, async function() {
    await sidebar.profileSelectorEnter();
});

When(/^the user exits profile selector$/, async function() {
    await sidebar.profileSelectorQuit();
});

// Click in an option
When(/^the user accesses to "([^"]*)" item located in the sidebar$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'assistance':
            await navigation.assistance.go();
            break;
        case 'security menu':
            await navigation.securitySettings.securityMenu.go();
            break;
        case 'sustainability':
            await navigation.sustainability.mainpage.go();
            break;
        case 'about':
            await navigation.about.aboutPage.go();
            break;
        case 'profile':
            await navigation.profile.go();
            break;
        case 'clarifications':
            await navigation.clarifications.clarificationsList.go();
            break;
        case 'cardless withdrawal historic':
            await navigation.cardlessWithdrawal.cardlessWithdrawalHistoric.go({forceLogin: true});
            break;
        case 'dynamics and rewards':
            await navigation.memberGetMember.go({forceLogin: true});
            break;
        case 'configuration':
            await navigation.configureProducts.configureProducts.go({forceLogin: true});
            break;
        case 'rewards landing':
            await navigation.sidebar.go({notAccounts: true});
            await navigation.reward.rewardsLanding.go();
            await currentPage.accessOnboarding('enter');
            break;
        case 'emergency reports':
            await navigation.emergencyReports.emergencyReports.go();
            break;
        case 'qr operative and codi':
            await navigation.codiOperations.codiBeginRegister.go({forceLogin: true});
            break;
        default:
            throw new Error(`${option} sidebar option is not available to navigate to...`);
    }
});

Then(/^the user will see following options (enabled|disabled) in sidebar$/, async function(enabled, table) {
    await currentPage.validateScreen(table, `[SIDEBAR] Checking the ${enabled} element`, {isDisabled: enabled === 'disabled'});
});
