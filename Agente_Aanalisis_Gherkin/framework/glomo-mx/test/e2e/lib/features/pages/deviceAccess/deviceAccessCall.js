import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('DeviceAccessCall')
class DeviceAccessCall extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deviceAccessCall[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                descriptionCall: 'cells-card-advice #text',
                requestCallButton: 'cells-confirm-buttons #primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description call':
                await this.descriptionCall.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request call button':
                await this.requestCallButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async requestCall() {
        await this.requestCallButton.waitForClickable({timeout: config.wait.M});
        await this.requestCallButton.click();
    }
}

export default new DeviceAccessCall();
