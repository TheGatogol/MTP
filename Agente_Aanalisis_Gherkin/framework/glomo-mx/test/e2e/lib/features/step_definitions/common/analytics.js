import {Given, Then} from '@cucumber/cucumber';
import {Commands, utils} from '@csqe/radish';

/**
 * Validates the device variables (currently only browser-based variables).
 * @param {cucumber.DataTable} table Cucumber table. The standard way uses 3 columns like the following table
 * <table>
 *     <tr>
 *         <th>item</th>
 *         <th>value</th>
 *         <th>type</th>
 *     </tr>
 *     <tr>
 *         <td>Team</td>
 *         <td>QE</td>
 *         <td>text</td>
 *     </tr>
 *     <tr>
 *         <td>Members</td>
 *         <td>7</td>
 *         <td>number</td>
 *     </tr>
 * </table>
 */
Then('the device contains the following variables(:)', async function(table) {
    if (this.analyticsInterceptor) {
        throw new Error('Analytics interceptor was initialized, instead this step you should use "the analytics events contains the following variables".');
    }

    if (table.hashes()[0].event != null) {
        throw new Error('Column "event" found. If you want to validate analytics using events (recommended), use the step "the analytics events contains the following variables".');
    }

    await utils.runInContext({
        context: 'WEBVIEW',
        action: async () => await utils.validateTable(table, glomoDevice, undefined, true, {subVariables: 'analytics'}, 'variablesValidation'),
    });
});

Then('the analytics events contains the following variables(:)', async function(table) {
    if (!this.analyticsInterceptor) {
        throw new Error('Analytics interceptor was not initialized, you should use the step "the analytics interceptor service is initiated".');
    }

    if (table.hashes()[0].event == null) {
        throw new Error('Column "event" not found. You should use that column in order to validate analytics using events.');
    }

    await validateAnalyticsEvents(table);
});

Then('the analytics event(s) {string} contains the following variables(:)', async function(eventsName, table) {
    if (!this.analyticsInterceptor) {
        throw new Error('Analytics interceptor was not initialized, you should use the step "the analytics interceptor service is initiated".');
    }

    // Hack table, adding "event" column
    table.rawTable[0].push('event');
    for (let i = 1; i < table.rawTable.length; i++) {
        table.rawTable[i].push(eventsName);
    }

    await validateAnalyticsEvents(table);
});

Given('the analytics interceptor service is initiated', async function() {
    if (currentPage.getId() === 'Start') {
        throw new Error('Invalid initialization, before initialize the interceptor, you must navigate to the exactly previous moment before the analytics are produced.');
    }

    if (this.analyticsInterceptor) {
        throw new Error('Analytics interceptor was initialized, instead this step you should use "the analytics events contains the following variables".');
    }

    await Commands.pause({time: config.wait.S});

    await utils.runInContext({
        context: 'WEBVIEW',
        action: async () => {
            await Commands.startSpy({spyFunction: 'digitalLink'});
            await Commands.startSpy({spyFunction: 'digitalView'});
        },
    });

    await Commands.pause({time: config.wait.S});

    this.analyticsInterceptor = true;
});

async function validateAnalyticsEvents(table) {
    const events = _.uniq(table.hashes().flatMap(e => e.event.split(',')).map(e => e.trim()));
    await Commands.pause({time: config.wait.S});
    await utils.runInContext({
        context: 'WEBVIEW',
        action: async () => {
            await Commands.waitUntil({
                condition: async () => await Commands.execute({
                    script: events => {
                        const spyEvents = window.__spyFunctions.spyArguments.map(s => s[0]);
                        return events.every(event => spyEvents.includes(event));
                    },
                    args: [events]
                }),
                errorMessage: `At least one of the analytics events was not fired: ${events}`,
                timeout: config.wait.XXL,
            });

            await utils.validateTable(table, glomoDevice, undefined, true, {subVariables: 'analytics'}, 'eventValidation');
        },
    });
}
