import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import emergencyZoneToggleCard from '../../pages/emergencyZone/emergencyZoneToggleCard';
import emergencyZoneNeedCash from '../../pages/emergencyZone/emergencyZoneNeedCash';

When(/^the user enters the emergency zone menu$/, async function() {
    await navigation.emergencyZone.dashboard.go();
});

When(/^the user enters the section where I can't find my card or it was stolen$/, async function() {
    await navigation.emergencyZone.stolenCard.go();
});

When(/^the user enter to lock card section$/, async function() {
    await navigation.emergencyZone.lockCard.go();
});

When(/^the user enter to toggle card section$/, async function() {
    await navigation.emergencyZone.toggleCard.go();
});

When(/^the user turn on or off a card$/, async function() {
    await emergencyZoneToggleCard.pressToOffCard();
});

When(/^the user enter to need to change my password section$/, async function() {
    await navigation.emergencyZone.changePassword.go();
});

When(/^the user enter to need cash section$/, async function() {
    await navigation.emergencyZone.needCash.go();
});

When(/^the user tries access to cardless withdrawal from emergency zone$/, async function() {
    await emergencyZoneNeedCash.goToCardlessWithdrawal();
});
