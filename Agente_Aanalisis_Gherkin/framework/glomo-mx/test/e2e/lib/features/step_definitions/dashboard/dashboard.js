import { When, Then } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import dashboardPage from '../../pages/dashboard/dashboard';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

function getAccount() {
    return user.products.accounts[0];
}

function getCreditCard() {
    return user.products.cards.find(card => card.productId !== 'VD');
}

function getLoan() {
    return (user.products.loans && user.products.loans[0]);
}

function getDebitCard() {
    return user.products.cards.find(card => card.productId === 'VD');
}

function getInvestmentFund() {
    return user.products.deposits[0];
}

When(/^the user accesses to dashboard$/, async function() {
    await navigation.dashboard.go();
});

When(/^the user accesses their products section$/, async function() {
    await dashboardPage.accessesTheirProducts();
});

When(/^the user accesses contract product section$/, async function() {
    await navigation.contractProductSection.go();
});

When(/^the user accesses the financial coach section$/, async function() {
    await navigation.adviceFinancialCoach.adviceFinancialCoach.go();
});

When(/^the user accesses assistance section$/, async function() {
    await navigation.assistanceSection.go();
});

When('the user shows balances', async function() {
    await dashboardPage.showBalances();
});

When(/^the user hides balances$/, async function () {
    await dashboardPage.hideBalances();
});

When(/^the user shows balances in "([^"]*)" currency$/, async function(currency) {
    await dashboardPage.showBalances(currency);
});

When(/^the user shows "([^"]*)" in account$/, async function (amount) {
    await dashboardPage.showAmount(amount);
});

When(/^device with notifications enabled|disable$/, async function() {
    await navigation.welcome.access.go();
    global.appSettings = {doUpdate: true};
});

When(/^the user closes the notification card$/, async function() {
    await dashboardPage.closeNotificationCard();
});

When(/^the user opens the notification card$/, async function() {
    await dashboardPage.openNotificationCard();
});

When('the user accesses to operationals page', async function() {
    await navigation.selectOperations.selectOperations.go();
});

When(/^the user accesses the "([^"]*)" operation$/, async function(page) {
    switch(page) {
        case 'transfer':
            await currentPage.accessToOperative({operative: 'transfer'});
            break;
        case 'cardless withdrawal':
            await currentPage.accessToOperative({operative: 'cardlessWithdrawal'});
            break;
        case 'opportunities':
            await currentPage.accessToOperative({operative: 'opportunities'});
            break;
        case 'mobile top up':
            await currentPage.accessToOperative({operative: 'mobileTopUp'});
            break;
        case 'international transfers':
            await currentPage.accessToOperative({operative: 'internationalTransfer'});
            break;
        case 'operations more':
            await currentPage.accessToOperative({operative: 'operationsMore'});
            break;
        case 'qr payment':
            await currentPage.accessToOperative({operative: 'qrPayment'});
            break;
        case 'opportunities operational':
            await currentPage.accessToOperative({operative: 'opportunities', section: 'favorite'});
            break;
        case 'credit card payment':
            await currentPage.accessToOperative({ operative: 'creditCardPayment'});
            break;
        case 'bill payments':
            await currentPage.accessToOperative({ operative: 'billPayments' });
            break;
        case 'account status':
            await currentPage.accessToOperative({ operative: 'accountStatus' });
            break;
        case 'postal address nominees':
            await navigation.postalAddressNominees.postalAddressNominees.go();
            break;
        case 'request money':
            await currentPage.accessToOperative({operative: 'requestMoney'});
            break;
        default:
            throw new Error(`The navigation assertion in page: ${page} is not implemented`);
    }
});

When(/^the user close the offer$/, async function() {
    await dashboardPage.closeOffer();
});

Then(/^the user does not see the offer$/, async function() {
    await dashboardPage.offerIsClosed();
});

When(/^the user accesses to the "([^"]*)" offer$/, async function(offer) {
    await dashboardPage.enterOffer(offer);
});

When(/^the user shows balances in unit linked section$/, async function () {
    await dashboardPage.showBalancesUnitLinked();
});

When(/^the user displays additional cards$/, async function () {
    await orangeCardProductDetail.displayAdditionalCcModule();
});

When(/^the user accesses the credit operative detail$/, async function() {
    await navigation.loan.loan.go();
});

When(/^the user accesses to personal loan detail$/, async function() {
    await dashboardPage.accessLoanPersonalDetail();
});

When(/^the user selects the "([^"]*)" footer option$/, async function(option) {
    switch(option) {
        case 'check up':
            await currentPage.accessFooterTab(dashboardPage.FOOTER_TABS.CHECK_UP);
            break;
        case 'opportunities':
            await currentPage.accessFooterTab(dashboardPage.FOOTER_TABS.ADD);
            break;
        case 'notifications':
            await currentPage.accessFooterTab(dashboardPage.FOOTER_TABS.MAIL);
            break;
        case 'assistance':
            await currentPage.accessFooterTab(dashboardPage.FOOTER_TABS.CONTACT);
            break;
        default:
            throw new Error(`The option ${option} is not implemented`);
    }
});

When(/^the user accesses to the plan account detail$/, async function () {
    const account = getAccount();
    await navigation.goals.goalsDashboard.go({account});
});

When(/^the user accesses to goals from experiences section$/, async function () {
    await navigation.goals.goalsDashboard.go();
});

When(/^the user accesses the manage financing lines when non-customer$/, async function () {
    await navigation.buyNowPayLater.buyNowPayLaterCard.go({dataId: user.products.relatedContracts[0].dataId});
});

When(/^the user goes to financial health widget$/, async function () {
    await dashboardPage.goFinancialHealthWidget();
});

When(/^the user accesses to PFM categorization from "([^"]*)"$/, async function(access) {
    await dashboardPage.goCategorizationFromWidget(access);
});

When('the user accesses the next best actions', async function() {
    await dashboardPage.accessHomeNextBestAction();
});

When('the user accesses the last card on experiences section', async function() {
    await dashboardPage.accessHomeLastCardNextBestAction();
});

When('the user close a card on the next best actions', async function() {
    await dashboardPage.closeCardNextBestAction();
});

When('the user access to a promotion card', async function() {
    await dashboardPage.accessPromotionCard();
    await navigation.reward.rewardsLanding.assert();
});

When(/^the user accesses to edufin$/, async function () {
    await navigation.tipsFinanceProfiling.tipsFinanceProfiling.go();
});

When(/^the user accesses their account$/, async function () {
    await navigation.account.productDetail.go({account: getAccount()});
});

When(/^the user accesses their credit card$/, async function () {
    await navigation.card.orangeCardProductDetail.go({card: getCreditCard()});
});

When(/^the user accesses their loan$/, async function () {
    await navigation.loan.loan.go({loan: getLoan()});
});

When(/^the user accesses their debit card$/, async function () {
    await navigation.card.orangeCardProductDetail.go({card: getDebitCard()});
});

When(/^the user accesses their investment$/, async function () {
    await navigation.deposit.productDetail.go({deposit: getInvestmentFund()});
});

When('the user accesses the last card from the carousel', async function() {
    await dashboardPage.accesslastCardExperienceSection();
});

When('the user accesses the next card from the carousel', async function() {
    await dashboardPage.accessNextCardExperienceSection();
});

When('the user accesses the experiences section list', async function() {
    await dashboardPage.accessHomeExperienceOption('list');
});

When('the user attempt accesses the experiences section card', async function() {
    await dashboardPage.viewCarouselHomeExperience();
});

When('the user show products futura', async function() {
    await dashboardPage.showProductsFutura();
});

When(/^the user goes to view all smart servicing$/, async function() {
    await dashboardPage.accessListAllSmartServicing();
});

When(/^the user goes to the smart servicing card$/, async function() {
    await dashboardPage.viewCarouselSmartServicing();
});

When('the user accesses to the smart servicing card', async function() {
    await dashboardPage.accessSmartServicingOption('carousel');
});

When('the user accesses the investment section', async function() {
    await dashboardPage.accessInvestmentSection();
});

When(/^the user selects the "([^"]*)" smart servicing (carousel|list) option$/, async function(option, fromSelect) {
    switch(option) {
        case 'credit card payment':
            await navigation.creditCardPayment.smartServicingCreditCardPayment.go({typeInterest: fromSelect});
            break;
        case 'transfer':
            await navigation.diy.transfer.transfers.go(fromSelect);
            break;
        case 'international transfer':
            await navigation.internationalTransfer.smartServicingInternationalTransfer.go({typeInterest: fromSelect});
            break;
        default:
            throw new Error(`The option ${option} is not implemented`);
    }
});

When(/^the user closes item smart servicing from (carousel|list)$/, async function( fromSelect) {
    await dashboardPage.closeItemSmartServcing(fromSelect);
});

When('the user accesses NBO section', async function() {
    await dashboardPage.viewNboCard();
});
When('the user closes NBO card', async function() {
    await dashboardPage.closeNboCard();
});
When(/^the user check the credit "([^"]*)"$/, async function(statusCard) {
    await dashboardPage.viewAllCreditCardStatus(statusCard);
});
When(/^the user exist from smart servicing list$/, async function() {
    await dashboardPage.listSmartServicing.exitList();
});
When(/^the user accesses all "([^"]*)" movements from main card$/, async function(cardOrAccount) {
    await navigation.dashboard.go();
    if(cardOrAccount === 'account') {
        await navigation.account.accountTransactions.go();
    } else {
        await navigation.card.movements.go({fromMainCard: true});
    }
});

When(/^the user accesses the offer "([^"]*)" detail from NBO$/, async function(loanType) {
    const idOffer = user.nboIds[loanType];
    switch(loanType) {
        case 'personal':
            await navigation.ocLoanOffer.ocLoanOfferNbo.go(idOffer);
            break;
        case 'mortgage':
            await navigation.leadMortgage.leadMortgageNbo.go(idOffer);
            break;
        case 'card':
            await navigation.creditCardApplication.creditCardHolder.creditCardHolderNbo.go(idOffer);
            break;
        default:
            throw new Error(`The option ${loanType} is not implemented`);
    }
});

When(/^the user goes to (next|previous) the "([^"]*)" position in main card$/, async function(directionScoll, numberScroll) {
    await dashboardPage.interactSlideMainCardCarousel(numberScroll, directionScoll);
});
