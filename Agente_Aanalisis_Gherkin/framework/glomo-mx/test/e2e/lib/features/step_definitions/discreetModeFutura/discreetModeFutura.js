import {Commands} from '@csqe/radish';
import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation/index.js';

const mocks = {
    grantedResponse: {state: 'granted'},
    deniedResponse: {state: 'denied'},
    permanentlyDeniedResponse: {state: 'permanently_denied'}
};

/**
 * Injects a patch to mock multiple native responses.
 * This function intercepts calls to `window.CellsNativePlugins.pluginManager.execute`
 * and allows mocking different responses for different plugins and commands.
 *
 * @param {object} [config={ injections: [], defaultResponse: {}, isError: false, debug: false }] - The configuration object.
 * @param {Array<object>} [config.injections=[]] - An array of injection configurations.
 * @param {string} config.injections[].pluginName - The name of the plugin to intercept.
 * @param {string} config.injections[].command - The name of the command to intercept.
 * @param {*} config.injections[].response - The mock response to return.
 * @param {boolean} [config.injections[].isError=false] - Whether to simulate an error for this injection.
 * @param {boolean} [config.injections[].patchAll=false] - If true, this injection will apply to all plugin/command calls.
 * @param {*} [config.defaultResponse={}] - The default response to use if no specific injection matches.
 * @param {boolean} [config.isError=false] - Whether to simulate an error by default.
 * @param {boolean} [config.debug=false] - If true, enables debug logging in the browser console.
 * @returns {Promise<void>} A promise that resolves when the script has been executed.
 */
async function injectPatchNativeMultipleResponse(config = { injections: [], defaultResponse: {}, isError: false, debug: false }) {
    await Commands.execute({
        script: (config) => {
            const _response = (resolve, reject, response = {}, isError, _pluginName, _command) => {
                if (config?.debug) {
                    console.log(`e2e debug [injectPatchNativeMultipleResponse] Intercepted call to plugin: ${_pluginName}, command: ${_command}, isError:${!!isError}, mock:`, response);
                }
                if (!isError) {
                    resolve(response);
                } else {
                    reject(response);
                }
            };
            const _saveOriginalPluginManager = () => {
                if (!window.originalPluginManager) {
                    window.originalPluginManager = window.CellsNativePlugins.pluginManager;
                }
            };
            const execute = (resolve, reject, _pluginName, _command) => {
                const _defaultConfig = {
                    pluginName: null,
                    command: null,
                    response: null,
                    isError: false,
                    patchAll: false,
                };
                let isExecuted = false;
                for (const originalInjection of (config?.injections || [])) {
                    const injectionPatch = { ..._defaultConfig, ...originalInjection };
                    const { pluginName, command, response, isError = false, patchAll = false } = injectionPatch;
                    const execute = (_pluginName === pluginName && _command === command) || patchAll;
                    if (execute) {
                        _response(resolve, reject, response, isError, _pluginName, _command);
                        isExecuted = true;
                        break;
                    }
                }
                if (!isExecuted) {
                    _response(resolve, reject, config?.defaultResponse, config?.isError, _pluginName, _command);
                }
            };
            _saveOriginalPluginManager();
            window.CellsNativePlugins.pluginManager = { execute };
        },
        args: [config],
    });
}

async function injectPatchPermissionSuccess() {
    await injectPatchNativeMultipleResponse({
        injections: [
            { pluginName: 'PermissionsPlugin', command: 'request', response: undefined },
            { pluginName: 'PermissionsPlugin', command: 'checkState', response: mocks.grantedResponse }
        ],
        defaultResponse: {},
        debug: true
    });
}

When(/^the user activates discreet mode in hidden configuration$/, async function () {
    await navigation.welcome.access.attempt();
    await injectPatchPermissionSuccess();
    await navigation.discreetModeSettings.go({forceLogin: true, notAccounts: true});
    await currentPage.deactiveDiscreetMode();
});

When(/^the user accesses the discreet mode settings$/, async function() {
    await navigation.discreetModeSettings.go({forceLogin: true, notAccounts: true});
});

When(/^the user goes back to dashboard$/, async function() {
    await navigation.dashboard.go();
});

When(/^the user activates discreet mode$/, async function() {
    await navigation.dashboard.go({forceLogin: true});
    await currentPage.activeDiscreetMode();
});

When(/^the user deactivates discreet mode$/, async function() {
    await currentPage.deactiveDiscreetMode();
});
