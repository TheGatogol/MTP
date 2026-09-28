import AbstractGlomoComponent from './abstract-glomo-component';

export default class GlomoDateInput extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'glomo-date-input',
            elements: {

                // Select date
                dateInput: '#dateInput',

                // Date Texts
                dateHeader: 'div.result span.label',

                // Other Elements
                dateIcon: 'cells-atom-icon iron-icon',
            },
            requiredElements: [
                'dateInput',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'glomo-date-input';
    }

    async selectDate(date) {
        await this.__root.execute({
            script: (value) => this.date = value,
            args: [date],
        });
    }

    async click(args) {
        await this.dateInput.click(args);
    }
}
