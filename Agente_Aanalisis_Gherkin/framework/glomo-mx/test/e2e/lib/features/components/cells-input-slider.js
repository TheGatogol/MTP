import {Commands} from '@csqe/radish';

import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsInputSlider extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'cells-input-slider',
            elements: {
                mainSlider: 'custom-cells-paper-slider',
            },
            requiredElements: [
                'mainSlider',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-input-slider div.wrapper-slider';
    }

    async selectSliderValue(value) {
        return this._selectValue(value);
    }

    async _selectValue(value) {
        await Commands.pause({time: config.wait.XS});
        await this.mainSlider.execute({
            script: (newValue) => this.setAttribute('value', newValue),
            args: [value]
        });
    }

    get slider() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.mainSlider.waitForDisplayed({timeout});
            }
        };
    }
}
