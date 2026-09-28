import {When} from '@cucumber/cucumber';
import offerTdcModal from '../../pages/offerTdcModal/offerTdcModal';

When(/^the user accesses the contract$/, async function() {
    await offerTdcModal.showCreditCard();
});

When(/^the user closes the offerTdcmodal$/, async function() {
    await offerTdcModal.closeTdcModal();
});
