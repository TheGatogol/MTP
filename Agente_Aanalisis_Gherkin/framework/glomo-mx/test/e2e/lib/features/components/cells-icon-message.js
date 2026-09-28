import AbstractGlomoComponent from './abstract-glomo-component';
import {Element} from '@csqe/radish';

export default class CellsIconMessage extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'cells-icon-message',
            elements: {
                icon: '#principalIcon.icon',
                infoText: '.message',

            },
            requiredElements: [
                'icon',
                'infoText',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-icon-message',
            isWithoutRoot: false,
        };
    }

    async waitForDisclaimer(index) {
        const imgIcon = await this.icon.elements();
        await new Element({
            selector: imgIcon.value[index],
            _container: this,
        }).waitForDisplayed({timeout: config.wait.L});
        const infoTextDisclaimer = await this.infoText.elements();
        await new Element({
            selector: infoTextDisclaimer.value[index],
            _container: this,
        }).waitForDisplayed({timeout: config.wait.L});
    }

    get message() {
        return {
            waitForEnabled: async ({timeout = config.wait.M} = {}) => {
                await this.infoText.waitForEnabled({timeout});
            },
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.infoText.waitForDisplayed({timeout});
            },
            waitForClickable: async ({timeout = config.wait.L} = {}) => {
                await this.infoText.waitForClickable({timeout});
            },
            scrollIntoView: async () => {
                await this.infoText.scrollIntoView({block: 'center'});
            },
            click: async ({timeout = config.wait.L} = {}) => {
                await this.infoText.waitForDisplayed({timeout});
                await this.infoText.waitForAnimation({timeout});
                await this.infoText.waitForClickable({timeout});
                await this.infoText.click();
            }
        };
    }

}
