import {Then} from '@cucumber/cucumber';
import {Commands, Constants} from '@csqe/radish';

Then('the application is on background', async function() {
    await validateAppState({
        app: {packageName: config.packageName, bundleId: config.bundleId},
        state: 'BACKGROUND',
        timeout: config.wait.M,
    });
});

Then('the {string} application is opened', async function(app) {
    let appPackage = await Commands.Mobile.getAssociatedApp({activity: app, iosPackages: config.constants.ios.defaultApps});

    // eslint-disable-next-line eqeqeq
    if (appPackage == null && app === 'market' && Commands.flags.isAndroid) {
        // If there is not default app for market, the browser is invoked on Android.
        appPackage = await Commands.Mobile.getAssociatedApp({activity: 'browser'});
    }

    await validateAppState({
        app: {packageName: appPackage, bundleId: appPackage},
        state: 'RUNNING',
        timeout: config.wait.M,
    });
});

async function validateAppState({app, state, timeout = config.wait.M} = {}) {
    await Commands.waitUntil({
        condition: async () => {
            const appState = await Commands.Mobile.queryAppState(app);

            return Constants.APP_STATE[appState] === state;
        },
        timeout,
        errorMessage: `Expected "${app}" to be on state "${state}" after ${timeout} ms, but it failed.`
    });
}
