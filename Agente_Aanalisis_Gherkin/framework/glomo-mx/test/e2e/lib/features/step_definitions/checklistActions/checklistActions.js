import { When } from '@cucumber/cucumber';
import checklistActions from '../../pages/checklistActions/checklistActions';

When(/^the user "([^"]*)" the onboarding$/, async function (button) {
    switch (button.toLowerCase()) {
        case 'accepts':
            await checklistActions.continueOnboardingModal();
            break;
        case 'leaves':
            await checklistActions.closeOnboardingModal();
            break;
        default:
            throw new Error(`${button} is not a valid option`);
    }
});

When(/^the user closes the checklist actions page$/, async function () {
    await checklistActions.exitPageChecklistActions();
});

When(/^the user selects section "([^"]*)" challenges$/, async function (status) {
    await checklistActions.selectStatusChallenges(status);
});

When(/^the user opens help modal digital badge$/, async function () {
    await checklistActions.openDigitalBadgeModal();
});
