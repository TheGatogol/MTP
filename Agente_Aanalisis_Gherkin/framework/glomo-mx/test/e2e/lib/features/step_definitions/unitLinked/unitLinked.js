import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to unit linked$/, async function() {
    await navigation.unitLinked.unitLinked.go();
});

Then(/^the user accesses the unit linked edit alias$/, async function() {
    await navigation.unitLinked.unitLinkedEditAlias.go();
});
