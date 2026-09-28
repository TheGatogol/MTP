import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import securityGlossary from '../../pages/securityTips/securityGlossary';
import securityTipsDashboard from '../../pages/securityTips/securityTipsDashboard';
import securityMenu from '../../pages/securitySettings/securityMenu';

When(/^the user enters security tips into menu setting$/, async function() {
    await navigation.securityTips.securityTipsDashboard.go();
});
When(/^the user enters to glossary the security tips$/, async function() {
    await navigation.securityTips.securityGlossary.go();
});
When(/^the user does a search in the glossary$/, async function() {
    await securityGlossary.searchWordWithinGlossary();
});
When(/^the user accesses the tips of security advice$/, async function() {
    await securityTipsDashboard.accessToThreeTips();
});

When(/^the user search "([^"]*)" in the glossary and erase the search$/, async function (inputValue) {
    await securityGlossary.searchEspecificWordWithinGlossary(inputValue);
    await securityGlossary.searchEspecificWordWithinGlossary('');
});

When(/^the user search "([^"]*)" in the glossary$/, async function (inputValue) {
    await securityGlossary.searchEspecificWordWithinGlossary(inputValue);
});

When(/^the user access to the "([^"]*)" info tip$/, async function (securityTip) {
    await securityTipsDashboard.accesToTips({securityTip: securityTip});
});

When(/^the user accept the info tip$/, async function () {
    // navigation.securityTips.securityTipsDashboard.go();
    await securityTipsDashboard.acceptInfoTip();
});

When(/^the user goes to the info tip and display the info$/, async function () {
    await securityGlossary.goToInfoTip();
    await securityGlossary.displayTipInfo();
});

When(/^the user goes back to security dashboard$/, async function () {
    await navigation.securitySettings.securityMenu.go();
    await securityMenu.goBack();
});
