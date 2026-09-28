import CellsConfirmButtons from './cells-confirm-buttons';

export default class CellsConfirmButtonsSpherica extends CellsConfirmButtons {
    constructor({
        isSingleButton = false,
        primaryBtn = 'primaryBtn',
        secondaryBtn = 'secondaryBtn',
        primaryAction,
        secondaryAction,
        ...args
    } = {}) {
        const defaultArgs = {
            name: 'cells-confirm-buttons-spherica',
            elements: isSingleButton ?
                {[primaryBtn]: 'cells-st-button-spherica button, #primaryBtn'} :
                {
                    [primaryBtn]: 'cells-st-button-spherica:first-of-type button, #primaryBtn',
                    [secondaryBtn]: 'cells-st-button-spherica:last-of-type button, #secondaryBtn',
                },
            isSingleButton,
            primaryBtn,
            secondaryBtn,
            primaryAction,
            secondaryAction,
            ...args
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-confirm-buttons-spherica',
        };
    }
}
