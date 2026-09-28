import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import cardLinkAndActivationQrCard from '../../pages/cardLinkAndActivationQrCard/cardLinkAndActivationQrCard';

When(/^the user accesses to card link activation$/, async function() {
    await navigation.card.cardLinkAndActivationQrCard.go({card: global.user.products.cards.cardId});
});

When(/^the user exits the qr card activation$/, async function() {
    await cardLinkAndActivationQrCard.closeOption();
});

When(/^the user chooses the "([^"]*)" activation option$/, async function(option) {
    await cardLinkAndActivationQrCard.chooseOptionModal(option);
});

When(/^the user accesses the option for more information on frequently asked questions$/, async function() {
    await cardLinkAndActivationQrCard.accessToMoreInfo();
});

When(/^the user closes the more information option of frequently asked questions$/, async function() {
    await cardLinkAndActivationQrCard.closeMoreInfo();
});

When(/^the user accesses the question about "([^"]*)"$/, async function(subject) {
    await cardLinkAndActivationQrCard.accessQuestion(subject);
});

When(/^the user accesses the information section$/, async function() {
    await cardLinkAndActivationQrCard.accessInfoSection();
});

When(/^the user exits the FAQ detail$/, async function() {
    await cardLinkAndActivationQrCard.closeFAQDetail();
});
