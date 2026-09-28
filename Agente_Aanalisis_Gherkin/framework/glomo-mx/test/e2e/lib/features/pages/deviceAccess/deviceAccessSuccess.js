import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page('DeviceAccessSuccess')
class DeviceAccessSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deviceAccessSuccess[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone.span',
                titleSuccess: 'cells-successful-response div.main-text-head.bold.span',
                dateSuccess: 'cells-successful-response div.main-text-head.bold.cells-atom-date #date',
                exitSuccessButton: 'cells-successful-response #primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title success':
                await this.titleSuccess.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'date success':
                await this.dateSuccess.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'exit success button':
                await this.exitSuccessButton.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new DeviceAccessSuccess();
