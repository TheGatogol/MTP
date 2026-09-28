import CellsModalSlider from './cells-modal-slider';

export default class CellsModalSliderSpherica extends CellsModalSlider {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-modal-slider-spherica'
        };
        
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-modal-slider-spherica'
        };
    }
}
