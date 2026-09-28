import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import memberGetMemberInviteFriend from '../../pages/memberGetMemberInviteFriend/memberGetMemberInviteFriend';

When(/^the user accesses to the sidebard$/, async function() {
    await navigation.sidebar.go({forceLogin:true});
});

When(/^the user accesses to invite friend screen$/, async function() {
    await navigation.MemberGetMemberInviteFriend.MemberGetMemberInviteFriend.go({ forceLogin: true });
});

When(/^the user goes to the rewards from member get member$/, async function() {
    await memberGetMemberInviteFriend.goToRewards();
});

When(/^the user goes to get invite friend$/, async function() {
    await memberGetMemberInviteFriend.getInviteFriend();
});

When(/^the user get more information about its dynamics from member get member$/, async function() {
    await memberGetMemberInviteFriend.getMoreInfo();
});

When(/^the user shares a QR code to invite a friend to sign up for a debit card$/, async function() {
    await memberGetMemberInviteFriend.shareButtonQR();
});

When(/^the user gets terms and conditions from sign up for a debit card$/, async function() {
    await memberGetMemberInviteFriend.termsAndConditions();
});

When(/^the user get its rewards from invite friends to sign up for a debit card$/, async function() {
    await memberGetMemberInviteFriend.rewardsDebit();
});

When(/^the user gets their bonuses history for inviting friends to sign up for a debit card$/, async function() {
    await memberGetMemberInviteFriend.viewHistoryRewardsDebit();
});

When(/^the user get the reward debit information$/, async function() {
    await memberGetMemberInviteFriend.rewardDebitInformation();
});

When(/^the user go to the reward information and return dynamics page from memeber get member$/, async function() {
    await memberGetMemberInviteFriend.rewardGetInformation();
});

When(/^the user go to the rewards details$/, async function() {
    await memberGetMemberInviteFriend.rewardsTapInformation();
});

When(/^the user go to the history list$/, async function() {
    await memberGetMemberInviteFriend.rewardsHistoryList();
});

When(/^the user retries link in rewards three times$/, async function() {
    await memberGetMemberInviteFriend.retryRewards();
});

When(/^the user retries link in dynamics three times$/, async function() {
    await memberGetMemberInviteFriend.retryDynamics();
});
