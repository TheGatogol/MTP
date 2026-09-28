import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import frequentIntelligentOperations from '../../pages/frequentIntelligentOperations/frequentIntelligentOperations';

When(/^the user select the card to enter to a frequent transfer$/, async function() {
    await navigation.frequentIntelligentOperations.frequentIntelligentOperations.go();
});

When(/^the user edit the transfer concept$/, async function() {
    await frequentIntelligentOperations.changeActiveConceptStep();
});

When(/^the user accesses to the frequent operation lists$/, async function() {
    await navigation.frequentIntelligentOperations.frequentIntelligentOperations.go();
});

When (/^the user accesses to execute the operation success page for "([^"]*)"$/, async function(transferType) {
    if(transferType.trim() === 'transferencia otros bancos'  || transferType.trim() === 'interbank transfer') {
        await frequentIntelligentOperations.fillTransferConcept();
    }
    await navigation.diy.transfer.transferSuccess.go({otp: transferType});
});
