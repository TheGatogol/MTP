import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsIframe extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'cells-iframe',
            elements: {
                iframeContainer: '#cellsIframe',
            },
            requiredElements: [
                'iframeContainer'
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-iframe';
    }

    async waitForDisplayed({timeout = config.wait.S}) {
        return (await super.waitForDisplayed({timeout})) && (await this.iframeContainer.waitForAttribute({attribute: 'src', timeout}));
    }
}
