/**
 * The steps defined on this file are for debug purposes, them should not be used on final scenarios.
 */
import {When} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';

/**
 * Pause the defined amount of milliseconds. You can also use the size tags.
 */
When('pause {timeout}', async function(time) {
    await Commands.pause({time});
});

/**
 * Pause the defined amount of time, based on the unit provided.
 */
When('pause {int} {string}', async function(time, unit) {
    let timeVal;

    switch (unit.toLowerCase()) {
        case 'm':
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
            timeVal = config.wait.minutes(time);
            break;
        case 's':
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
            timeVal = config.wait.seconds(time);
            break;
        case 'ms':
        case 'milli':
        case 'millis':
        case 'millisecond':
        case 'milliseconds':
            timeVal = time;
            break;
        default:
            throw new Error(`Unknown time unit: ${unit}`);
    }

    await Commands.pause({time: timeVal});
});
