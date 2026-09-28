import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsModalAlert extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-modal-alert',
            elements: {

                container: '#modal',
                message: '#iconMessage span.message',

            },
            requiredElements: [
                'container'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-modal-alert',
        };
    }

    async waitForMessage() {
        await this.message.waitForText({timeout: config.wait.L});
    }

}
