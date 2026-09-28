import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class SettingsPage extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-settings[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                title: 'cells-molecule-header h1',
                opSettings: '.glomo-button-list-operation-configuration',
                opNotifications: '.glomo-button-list-notifications',
                opHideProducts: '.glomo-settings-products-hide',
                opSecuritySettings: '.glomo-button-list-security-settings',
                opCoDiSettings: '.glomo-button-list-codi-settings',
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                title: 'cells-molecule-header-spherica h1'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async goToOperationalSettings() {
        await (await this.opSettings.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'notifications':
                await this.opNotifications.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operational limits':
                await this.opSettings.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show and hide products':
                await this.opHideProducts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'security settings':
                await this.opSecuritySettings.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'codi settings':
                await this.opCoDiSettings.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new SettingsPage();
