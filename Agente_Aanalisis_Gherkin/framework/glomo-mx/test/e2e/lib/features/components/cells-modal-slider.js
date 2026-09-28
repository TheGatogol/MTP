import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsModalSlider extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-modal-slider',
            elements: {
                container: 'cells-molecule-slider',
                image: 'modal-card cells-image-card',
                listItems: 'modal-card cells-legend-graphics',
                acceptBtn: 'div.slider-button-box cells-st-button',
                closeBtn: '#header button.btn-close'
            },
            requiredElements: [
                'container'
            ]
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-modal-slider'
        };
    }

    async closeDialog() {
        await this.closeBtn.waitForDisplayed();
        await this.closeBtn.waitForAnimation();
        await this.closeBtn.click();
    }

    async isDisplayed() {
        return this.container.isDisplayed();
    }
}
