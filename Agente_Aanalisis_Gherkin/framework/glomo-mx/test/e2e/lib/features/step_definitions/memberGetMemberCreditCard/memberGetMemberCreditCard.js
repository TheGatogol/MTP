import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import MemberGetMemberCreditCard from '../../pages/memberGetMemberCreditCard/memberGetMemberCreditCard';

When(/^the user accesses to invite your friend in the sidebar$/, async function() {
    await navigation.dashboard.go();
    await navigation.sidebar.go();
    await navigation.memberGetMember.go({forceLogin: true});
});

When(/^the user "([^"]*)" the referrals personal information$/, async function(option) {
    switch (option) {
        case 'registers':
            await MemberGetMemberCreditCard.registerPersonalInformation();
            break;
        case 'completes':
            await MemberGetMemberCreditCard.personalFormCompleted();
            break;
        case 'enters incorrect':
            await MemberGetMemberCreditCard.personalIncorrectInformation();
            break;
        default:
            throw new Error('Unknown navigation');
    }
});

When(/^the user "([^"]*)" the referrals address information$/, async function(option) {
    switch (option) {
        case 'registers':
            await MemberGetMemberCreditCard.registerAddressInformation();
            break;
        case 'completes':
            await MemberGetMemberCreditCard.addressFormCompleted();
            break;
        default:
            throw new Error('Unknown navigation');
    }
});

When(/^the user accesses to address finder modal$/, async function() {
    await MemberGetMemberCreditCard.mapSearchModalInformation();
});

When(/^the user completes the referrals registration$/, async function() {
    await MemberGetMemberCreditCard.finishRegister();
});

When(/^the user completes the referrals registration with error$/, async function() {
    await MemberGetMemberCreditCard.finishRegisterError();
});

When(/^the user tries to enter a postal code$/, async function() {
    await MemberGetMemberCreditCard.postalCodeError();
});

When(/^the user completes the referrals registration and continue inviting$/, async function() {
    await MemberGetMemberCreditCard.finishRegisterAnContinueInviting();
});
