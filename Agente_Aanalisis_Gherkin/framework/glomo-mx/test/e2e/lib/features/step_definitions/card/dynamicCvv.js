import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import dynamicCvvPage from '../../pages/card/dynamicCvv';

function getCardAssociableToVirtual(status) {
    const onOff= status === 'on';
    const virtualCards = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === onOff && element.activations[0].activationId.toUpperCase() === 'ON_OFF' && element.physicalSupport.id === 'VIRTUAL');
    return virtualCards.relatedContracts[0].relatedContractId;
}

When(/^the user accesses to digital card screen$/, async function() {
    await navigation.card.dynamicCvv.go();
});

When(/^the user accesses the screen of a switched "([^"]*)" digital card$/, async function(status) {
    const cardId = getCardAssociableToVirtual(status);
    await navigation.card.orangeCardProductDetail.go({card: cardId});
    await navigation.card.dynamicCvv.go();
});

When(/^the user copies card number$/, async function() {
    await dynamicCvvPage.copyCardNumber();
});

When(/^the user turns "([^"]*)" the digital card$/, async function(status) {
    await dynamicCvvPage.changeCardStatus(status.toLowerCase());
});

When(/^the user accesses to help screen$/, async function() {
    await dynamicCvvPage.showHelp();
});

When(/^the user actives dynamic CVV$/, async function() {
    await dynamicCvvPage.showCVV();
});
