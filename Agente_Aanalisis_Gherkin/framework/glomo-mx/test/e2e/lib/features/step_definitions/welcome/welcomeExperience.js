import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import welcomeExperiencePage from '../../pages/welcome/welcomeExperience';

When('the user is in the Welcome Experience screen', async function() {
    await navigation.welcomeExperience.go();
});

When('the user accesses to the next bullet', async function() {
    await welcomeExperiencePage.nextSlider();
});

When('the user is in the next slider', async function() {
    await welcomeExperiencePage.isNextSlider();
});
