import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import monthlyStatementEnquiryCard from '../../pages/monthlyStatementEnquiry/monthlyStatementEnquiryCard';

function getAccount() {
    return user.product[0].account[0];
}
function getCard() {
    return user.product[0].cards[0];
}

When(/^the user accesses to the monthly statement enquiry card screen$/, async function() {
    const card = getCard();
    await navigation.card.orangeCardProductDetail.go({ card: card.number});
    await navigation.monthlyStatementEnquiry.card.go();
});
When(/^the user accesses to the monthly statement enquiry account screen$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({ account });
    await navigation.monthlyStatementEnquiry.account.go();
});
When(/^the user selects other periods$/, async function() {
    await currentPage.choosePeriod('other');
});

When(/^the user displays the list$/, async function() {
    await monthlyStatementEnquiryCard.displayList();
});

When(/^the user chooses "([^"]*)" for the account statement period$/, async function(date) {
    await currentPage.choosePeriod('other');
    await currentPage.displayList();
    await currentPage.selectMonthlyStatement(date);
});
