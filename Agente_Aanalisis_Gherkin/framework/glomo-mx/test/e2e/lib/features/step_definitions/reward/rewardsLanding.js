import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import rewardsLanding from '../../pages/reward/rewardsLanding';
import rewardsLandingFilteredPoints from '../../pages/reward/rewardsLandingFilteredPoints';
import rewardOriginCard from '../../pages/reward/rewardOriginCard';

When(/^the user (tries to access|accesses) to Rewards Landing$/, async function (action) {
    await navigation.reward.rewardsLanding.go();
    if (action === 'accesses') await rewardsLanding.accessOnboarding('enter');
});

When('the user accesses to Landing of Points from one of the cards', async function () {
    await navigation.reward.rewardsLandingFilteredPoints.go();
});

When(/^the user accesses the card "([^"]*)" details$/, async function (statusMovements) {
    switch (statusMovements.toLowerCase()) {
        case 'with movements':
        case 'without movements':
            statusMovements= statusMovements.replace(/ /g, '');
            await navigation.reward.rewardsLandingFilteredPoints.go(user.productsId[0][statusMovements][0].numProduct);
            break;
        default:
            throw new Error(`Option '${statusMovements}' is not implemented.`);
    }
});

When('the user closes the global access notification', async function () {
    await rewardsLandingFilteredPoints.closeDisclaimer();
});

When('the user goes back to orange card product detail', async function () {
    await navigation.card.orangeCardProductDetail.go();
});

When('the user uses use my points', async function () {
    await rewardsLanding.useMyPoints();
});

When('the user accesses the faqs about using my points', async function () {
    await rewardsLanding.seeFaqsUsingMypoints();
});

When('the user deploys the points to be expire', async function () {
    await currentPage.deployPointsToBeExpired();
});

When('the user accesses help on how to collect points', async function () {
    await rewardsLanding.accessHowToCollectPoints();
});

When('the user accesses the general help of points', async function () {
    await rewardsLanding.seeHelp();
});

When('the user accesses to promotions', async function () {
    await rewardsLanding.accessPromotions();
    await navigation.reward.rewardsLanding.assert();
});

When(/^the user displays "([^"]*)" transaction tab$/, async function (screen) {
    if (screen === 'date') {
        await currentPage.displayTransactionsByDates();
    } else {
        await currentPage.displayTransactionsByPeriod();
    }
});

When('the user access the help of last transactions', async function () {
    await rewardsLanding.showHelpTransactions();
});

When('the user access the help of how to use your points', async function () {
    await rewardsLanding.helpTransactions();
});

When(/^the user accesses to "([^"]*)" points$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'transfer':
            await navigation.reward.rewardOriginCard.go({access: 'transfer'});
            await navigation.reward.pointsTransfer.go();
            break;
        case 'multi cards raffle':
            await navigation.reward.rewardOriginCard.go({access: 'raffle'});
            await navigation.reward.pointsRaffle.go();
            break;
        case 'one card raffle':
            await navigation.reward.pointsRaffle.go();
            break;
        case 'origin card from transfer':
            await navigation.reward.rewardOriginCard.go({access: 'transfer'});
            break;
        case 'origin card from raffle':
            await navigation.reward.rewardOriginCard.go({access: 'raffle'});
            break;
        case 'back':
            await navigation.reward.rewardOriginCard.go();
            break;
        case 'modal':
            await navigation.reward.rewardOriginCard.go({access: 'transfer'});
            await rewardOriginCard.selectCard();
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When('the user selects raffle points', async function () {
    await rewardsLanding.accessToPointsRaffle();
});

When('the user selects a origin card', async function () {
    await rewardOriginCard.selectCard();
});
