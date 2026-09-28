import { Then, When } from '@cucumber/cucumber';

import * as navigation from '../../navigation';
import * as utilsCards from '../../utils/utilsCards';
import pointsRafflePage from '../../pages/pointsRedemption/pointsRaffle';
import pointsRaffleFaq from '../../pages/pointsRedemption/pointsRaffleFaq';

When(/^the user selects "([^"]*)" and confirms the purchase$/, async function (option) {
    await pointsRafflePage.purchaseSimulate(option);
    await pointsRafflePage.confirmPointsRedemption();
});

When(/^the user accesses to the summary of the "([^"]*)" purchase$/, async function (option) {
    await pointsRafflePage.purchaseSimulate(option);
    await navigation.pointsRedemption.pointsRaffleReview.go();
});

When(/^the user participates in the raffle$/, async function () {
    await pointsRafflePage.confirmParticipate();
});

When(/^the user buys more tickets than allowed with "([^"]*)"$/, async function (cardType) {
    const { cards } = global.user.products;
    //this value of the ticket price is returned by the artichoke service in the simulate.service.js file
    const ticketValue = 1000;
    const card = utilsCards.getCardByNumberTickets(cards, cardType, ticketValue);
    await navigation.pointsRedemption.pointsRaffle.go({ card: card.cardId });
    const ticketsMaxNum = utilsCards.getMaxNumTickets(card, ticketValue);
    const moreTicketsAllowed = ticketsMaxNum + 1;
    await pointsRafflePage.confirmParticipate();
    await pointsRafflePage.selectTickets('other quantity');
    await pointsRafflePage.insertAmount(moreTicketsAllowed);
});

Then(/^this the user sees the summary of "([^"]*)" purchased$/, async function (option) {
    await pointsRafflePage.purchaseSimulate(option);
    await navigation.pointsRedemption.pointsRaffleReview.go();
});

When(/^the user selects "([^"]*)" and tries to fill in "([^"]*)" tickets$/, async function (option, value) {
    await pointsRafflePage.selectTickets(option);
    await pointsRafflePage.insertAmount(value);
});

Then(/^the "([^"]*)" value are not allowed in the text box so they are not filled in with them$/, async function (value) {
    await pointsRafflePage.checkWithoutDecimals(value);
});

Then(/^the user selects FAQs icon on the header while in multistep$/, async function () {
    await navigation.pointsRedemption.pointsRaffleFaq.go();
});

Then(/^the user accesses to some question$/, async function () {
    await currentPage.accessToSomeFaq();
});

When(/^the user participates with of "([^"]*)" purchase$/, async function (option) {
    await pointsRafflePage.confirmParticipate();
    await pointsRafflePage.confirmSelectedTickets(option);
});

When(/^the user accepts the terms and conditions of the raffle$/, async function () {
    await pointsRafflePage.confirmConditions();
});

When(/^the user consults the prizes and rules of the draw$/, async function () {
    await pointsRafflePage.consultPrizesAndRules();
});

When(/^the user consults the terms and conditions of raffle$/, async function () {
    await pointsRafflePage.consultTermsAndConditions();
});

When(/^the user access frequently question "([^"]*)"$/, async function (question) {
    await pointsRaffleFaq.accessQuestion(question);
});

When(/^the user close raffle of points$/, async function () {
    await navigation.pointsRedemption.closePointsRaffle.go();
});

When(/^the user accesses the summary screen of the "([^"]*)"$/, async function (option) {
    await pointsRafflePage.purchaseSimulate(option);
});

When(/^the user consult terms and conditionals in screen summary$/, async function () {
    await pointsRafflePage.consultTerms();
});

When(/^the user select change points amount and introduces "([^"]*)" points$/, async function (amount) {
    await pointsRafflePage.changePoints();
    await pointsRafflePage.insertAmountPoints(amount);
});

When(/^the user select change points amount and introduces invalidate amount "([^"]*)"$/, async function (amount) {
    await pointsRafflePage.changePoints();
    await pointsRafflePage.insertAmountPointsInvalidate(amount);
});
