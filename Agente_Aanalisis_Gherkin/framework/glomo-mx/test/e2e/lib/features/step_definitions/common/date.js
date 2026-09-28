import {Given} from '@cucumber/cucumber';
import {utils} from '@csqe/radish';

import * as navigation from '../../navigation';

/**
 * Overwrite the current browser/device date.
 *
 * @param {cucumber.DataTable} table Cucumber table. The table uses 2 columns like the following:
 * <table>
 *     <tr>
 *         <th>weekday</th>
 *         <th>Wednesday</th>
 *     </tr>
 *     <tr>
 *         <td>hour</td>
 *         <td>10</td>
 *     </tr>
 *     <tr>
 *         <td>year</td>
 *         <td>2015</td>
 *     </tr>
 * </table>
 *
 * Accepted values:
 * @param {string} [table.rowsHash().locale=en] Force the locale for moment library (to parse weekday and month names). English by default.
 * @param {number} [table.rowsHash().year] Sets the year.
 * @param {number|string} [table.rowsHash().month] Sets the month.
 * @param {number} [table.rowsHash().day] Sets the day (of month).
 * @param {number|string} [table.rowsHash().weekday] Sets the day of the week. On number format, 0 is Sunday, and 6 is Saturday.
 * @param {number} [table.rowsHash().hour] Sets the hour.
 * @param {number} [table.rowsHash().minute] Sets the minute.
 * @param {number} [table.rowsHash().second] Sets the second.
 * @param {number} [table.rowsHash().millisecond] Sets the millisecond.
 */
Given('the device date is(:)', async function(table) {
    utils.date.setDate(table.rowsHash());
});

/**
 * @see {the device date is:}
 */
Given('the user starts the application at date(:)', async function(table) {
    await navigation.welcome.access.go();
    utils.date.setDate(table.rowsHash());
});
