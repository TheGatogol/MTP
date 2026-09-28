import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands} from '@csqe/radish';

export default class GlomoMyTripsDateSelector extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'glomo-my-trips-date-selector',
            elements: {

                // Select date
                rangeDatePicker: '#picker',
                fromDatePicker: '#picker input#start-input',
                toDatePicker: '#picker input#end-input',

                // Date texts
                fromDateText: '#picker #start-date #date',
                toDateText: '#picker #end-date #date',
            },
            requiredElements: [
                'fromDatePicker',
                'toDatePicker',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'glomo-my-trips-date-selector';
    }

    /**
     * Set from date
     * @param date Format MM/DD/YYYY
     */
    async selectFromDate(date) {
        await this._selectDate('startDate', date);
    }

    /**
     * Set to date
     * @param date Format MM/DD/YYYY
     */
    async selectToDate(date) {
        await this._selectDate('endDate', date);
    }

    async _selectDate(method, date) {
        await Commands.pause({time: config.wait.S});
        await this.rangeDatePicker.execute({
            script: (method, date) => this[method] = date,
            args: [method, date],
        });
        await Commands.pause({time: config.wait.S});
    }

}
