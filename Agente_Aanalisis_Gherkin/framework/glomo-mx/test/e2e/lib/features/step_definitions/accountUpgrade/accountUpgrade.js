import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import accountUpgradeCustomerData from '../../pages/accountUpgrade/accountUpgradeCustomerData';
import accountUpgrade from '../../pages/accountUpgrade/accountUpgrade';
import accountUpgradePrevQuestions from '../../pages/accountUpgrade/accountUpgradePrevQuestions';

import * as utilsAccount from '../../utils/utilsAccount';

When('the user navigates to account upgrade multistep', async function() {
    const account = utilsAccount.getUpgradableAccount();
    await navigation.accountUpgrade.accountUpgradeCustomerData.go({account});
});

When('the user accesses to upgradable account', async function() {
    const account = utilsAccount.getUpgradableAccount();
    await navigation.account.productDetail.go({account});
});

When('the user navigates to account upgrade requirements', async function() {
    const account = utilsAccount.getUpgradableAccount();
    await navigation.accountUpgrade.accountUpgrade.go({account});
});

When('the user goes to the prequestions page', async function() {
    const account = utilsAccount.getUpgradableAccount();
    await navigation.accountUpgrade.accountUpgradePrevQuestions.go({account});
});

When(/^the user accepts the consent$/, async function() {
    await accountUpgradeCustomerData.selectAcceptConsentModal();
});

When(/^the user accesses to Notice of Privacy$/, async function() {
    await accountUpgrade.selectPrivacyModal();
});

When(/^the user accesses to 'Que es PEP'$/, async function() {
    await accountUpgradePrevQuestions.selectPepModal();
});

When(/^the user chooses the answer 'Si' later on 'Continuar'$/, async function() {
    await accountUpgradePrevQuestions.selectBtnPrequest();
});
