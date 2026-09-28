import {When} from '@cucumber/cucumber';
import {utils} from '@csqe/radish';

When('the screen\'s accessibility is analysed', {timeout: config.stepTimeout}, async function() {
    await utils.accessibilityAnalyze({include: currentPage.rootSelector});
});
