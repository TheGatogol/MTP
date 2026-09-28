import AbstractGlomoComponent from './abstract-glomo-component';

export default class ErrorComponent extends AbstractGlomoComponent {
    constructor(args) {
        super(args);
    }

    get errorMessage() {
        return async () => {
            return this.messageText.getText();
        };
    }

    /**
     * @abstract
     */
    get messageText() {
        throw new Error(`Element "message" not implemented on component "${this.name}"`);
    }

    /**
     * @abstract
     */
    get closeBtn() {
        throw new Error(`Element "message" not implemented on component "${this.name}"`);
    }

    async close() {
        logger.debug(`Closing error message "${this.name}"`);
        await this.closeBtn.click();
    }
}
