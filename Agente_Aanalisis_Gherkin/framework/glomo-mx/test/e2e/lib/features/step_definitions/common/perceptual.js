import {Then} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';

Then('perform a screenshot for visual comparison with name {string}', async function(name) {
    await Commands.pause({time: config.wait.S});
    await Commands.takeCompareScreenshot({name});
});
