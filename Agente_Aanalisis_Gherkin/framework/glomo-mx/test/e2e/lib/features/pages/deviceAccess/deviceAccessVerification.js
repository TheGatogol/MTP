import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page('DeviceAccessVerification')
class DeviceAccessVerification extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deviceAccessVerification[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                titleVerification: 'cells-card-advice div cells-heading',
                textVerification: 'cells-card-advice #text',
                startVerificationButton: 'cells-confirm-buttons #primaryBtn',
                listBullet: 'cells-card-advice'

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
            case 'title verification':
                await this.titleVerification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'start verification button':
                await this.startVerificationButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list bullet':
                await this.listBullet.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async startVerification() {
        await this.startVerificationButton.waitForClickable({timeout: config.wait.M});
        await this.startVerificationButton.click();
    }
}
export default new DeviceAccessVerification();
