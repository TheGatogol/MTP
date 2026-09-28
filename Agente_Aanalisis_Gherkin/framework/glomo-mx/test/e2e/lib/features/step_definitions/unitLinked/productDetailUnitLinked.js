import{When} from '@cucumber/cucumber';
import unitLinked from '../../pages/unitLinked/unitLinked';

When(/^the user accesses to policy detail$/, async function () {
    await unitLinked.accessDetailPolicy();
});

When(/^the user goes to the policy screen$/, async function () {
    await unitLinked.returnPolicy();
});

When(/^the user copies the policy number$/, async function () {
    await unitLinked.copyNumPolicy();
});
