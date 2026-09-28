import AbstractGlomoComponent from '../../../components/abstract-glomo-component';

export default class StepContinueAction extends AbstractGlomoComponent {
    constructor({attributes = '.primary', elementSuffix = '', elementPrefix = ''} = {}) {
        const defaultArgs = {
            name: 'diyContinueAction',
            elements: {
                button: 'button__SUFFIX__'
            }
        };
        super(Object.assign(defaultArgs, arguments[0]));
        this.attributes = attributes;
        this.elementSuffix = elementSuffix;
        this.elementPrefix = elementPrefix;
    }

    static get _baseRoot() {
        return '__PREFIX__cells-st-button__ATTRIBUTES__';
    }

    getButton({status = 'enabled', visibility = true} = {}) {
        let {elementSuffix} = this;
        switch (status) {
            case 'enabled':
                elementSuffix += ':not([disabled])';
                break;
            case 'disabled':
                elementSuffix += '[disabled]';
                break;
            default:
                logger.debug(`Status ${status} not valid`);
                break;
        }

        if (visibility) {
            elementSuffix += ':not([hidden])';
        } else {
            elementSuffix += '[hidden]';
        }

        return this.button
            .specifySelector({placeholder: '__ATTRIBUTES__', value: this.attributes})
            .specifySelector({placeholder: '__SUFFIX__', value: elementSuffix})
            .specifySelector({placeholder: '__PREFIX__', value: this.elementPrefix});
    }

    async continueToNextStep(status = 'enabled') {
        if (status === 'enabled') {
            const theButton = this.getButton({status: status});
            await theButton.scrollIntoView({block: 'start'});
            await theButton.waitForClickable({timeout: config.wait.L});
            await theButton.waitForAnimation({timeout: config.wait.S});
            await theButton.click();
        } else {
            logger.debug(`Status ${status} doesn't continue the flow`);
        }
    }

    async isDisplayed() {
        const theButton = this.getButton({status: 'enabled'});
        return theButton.isDisplayed();
    }

    async isDisabled() {
        const theButton = this.getButton({status: 'disabled'});
        return theButton.isDisplayed();
    }

    async isEnabled() {
        const theButton = this.getButton({status: 'enabled'});
        return theButton.isDisplayed();
    }

    async waitForEnabled() {
        const theButton = this.getButton({status: 'enabled'});
        await theButton.waitForEnabled({timeout: config.wait.M});
    }

    async waitForDisabled() {
        const theButton = this.getButton({status: 'enabled'});
        await theButton.waitForDisabled({timeout: config.wait.M});
    }

    async waitForDisplayed(){
        const theButton = this.getButton({status: 'enabled'});
        await theButton.waitForDisplayed({timeout: config.wait.L});
    }
}
