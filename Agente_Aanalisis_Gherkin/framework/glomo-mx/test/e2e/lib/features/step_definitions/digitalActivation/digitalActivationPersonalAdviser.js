import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import digitalActivationPage from '../../pages/digitalActivation/digitalActivation';

When(/^the user fills number and card and continues the process$/, async function () {
    await navigation.digitalActivation.digitalActivationPersonalAdviser.go();
    await digitalActivationPage.setPhoneAndCard();
    await digitalActivationPage.selectContinueCard();
});

When(/^the user fills number and card and opens the notice of privacy$/, async  function () {
    await navigation.digitalActivation.digitalActivationPersonalAdviser.go();
    await digitalActivationPage.setPhoneAndCard();
    await digitalActivationPage.openNoticePrivacy();
});

When(/^the user opens the notice of privacy summary$/, async function () {
    await digitalActivationPage.openNoticePrivacySummary();
});

When(/^the user accesses to sumary digital activation screen$/, async function () {
    await navigation.digitalActivation.digitalActivationPersonalAdviser.go();
    await digitalActivationPage.setPhoneAndCard();
    await digitalActivationPage.selectContinueCard();
    await digitalActivationPage.inputCardDetails();
    await digitalActivationPage.selectContinueCvvNip();
    await digitalActivationPage.openNoticePrivacySummary();
});
