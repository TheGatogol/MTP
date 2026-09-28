import CellsInputSlider from './cells-input-slider';

export default class CellsInputSliderSpherica extends CellsInputSlider {
    constructor(args) {
        const defaultArgs = {
            name: 'cells-input-slider-spherica',
            elements: {
                mainSlider: 'custom-cells-paper-slider-spherica',
            }
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-input-slider-spherica div.wrapper-slider';
    }

}
