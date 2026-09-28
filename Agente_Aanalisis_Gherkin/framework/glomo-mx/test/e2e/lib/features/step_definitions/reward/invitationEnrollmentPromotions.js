import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import invitationEnrollmentPromotions from '../../pages/reward/invitationEnrollmentPromotions';

When('the user enrolls in the promotion from promotion detail', async function () {
    await navigation.reward.invitationEnrollmentPromotions.go();
});

When('the user tries to enroll in the promotion from promotion detail', async function () {
    await navigation.reward.invitationEnrollmentPromotions.attempt();
});

When('the user {string} from promotion detail with {string} participant card', async function (action, cardType) {
    await navigation.reward.invitationEnrollmentPromotions.go();
    await invitationEnrollmentPromotions.selectCard(cardType);
    if (cardType === 'single') {
        await invitationEnrollmentPromotions.continueToParticipants();
    }
    if (action === 'completes enrollment in promotion') {
        await invitationEnrollmentPromotions.openSelectPurchases();
        await invitationEnrollmentPromotions.selectPurchases();
        await invitationEnrollmentPromotions.continueToApplyPromotions();
        await invitationEnrollmentPromotions.confirmEnrollmentPromotion();
    }
});

When('the user selects a {string} participant card', async function (cardType) {
    await invitationEnrollmentPromotions.selectCard(cardType);
});

When('the user tries to select purchases', async function () {
    await invitationEnrollmentPromotions.openSelectPurchases();
})

;When('the user removes participants purchases', async function () {
    await invitationEnrollmentPromotions.removesPurchaseSelection();
});

When('the user selects participants purchases', async function () {
    await invitationEnrollmentPromotions.openSelectPurchases();
    await invitationEnrollmentPromotions.selectPurchases();
});

When('the user completes purchases selection', async function () {
    await invitationEnrollmentPromotions.openSelectPurchases();
    await invitationEnrollmentPromotions.selectPurchases();
    await invitationEnrollmentPromotions.continueToApplyPromotions();
});

When('the user selects more participants purchases than credit card amount available', async function () {
    await invitationEnrollmentPromotions.openSelectPurchases();
    await invitationEnrollmentPromotions.selectVariousPurchases();
});

When('the user selects more participants purchases than maximum purchases allowed', async function () {
    await invitationEnrollmentPromotions.openSelectPurchases();
    await invitationEnrollmentPromotions.selectVariousPurchases(27);
});
