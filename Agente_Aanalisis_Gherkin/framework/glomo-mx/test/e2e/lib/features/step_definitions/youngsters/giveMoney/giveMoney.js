import {When} from '@cucumber/cucumber';
import * as navigation from '../../../navigation';

When(/^the user accesses to give money(| advice)$/, async function(giveMoneyContext) {
    await navigation.giveMoney.giveMoney.go();
    if(giveMoneyContext===' advice') {
        await navigation.giveMoney.giveMoneyAdvice.go();
    }
});

When(/^the user closes give money advice$/, async function() {
    await navigation.giveMoney.giveMoneyBack.go();
});

When(/^the user accesses to transfer from giveMoney$/, async function() {
    await navigation.giveMoney.transferFromGiveMoney.go();
});
