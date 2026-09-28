import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses the entry point consult and confirm with "([^"]*)"$/, async function (option) {
    const status = ['request received', 'generation process', 'distribution process', 'delivered', 'delivery expired'];
    if (status.includes(option.toLowerCase())) {
        await navigation.trackingTdd.trackingDebitCard.go();
    } else {
        throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user accesses details in delivery expired step$/, async function () {
    await currentPage.accessErrorLink();
});

When(/^the user accesses details in delivered step$/, async function () {
    await navigation.trackingTdd.trackingDebitCardDetail.go();
});

When(/^the user accesses the link confirm receipt$/, async function () {
    await navigation.card.cleanCardOperations.go();
});
