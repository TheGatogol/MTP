import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class AboutInfoPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-aboutInfo[state="active"] [data-tag-name="bbva-feature-about-mx-spherica"]',
            elements: {
                headerMain: '[data-tag-name="bbva-header-main"]',
                appVersionKey: '#item-glomo-about-operation-system-version-spherica',
                compileVersionKey: '#text-key-glomo-about-operation-system-spherica',
                operationSystemKey: '#text-key-glomo-about-operation-system-version-spherica',
                deviceModelKey: '#text-key-glomo-about-device-model-spherica',
                mobileServicesKey: '#text-key-glomo-about-mobile-services-system-spherica',
                appVersionValue: '#item-glomo-about-app-version-spherica',
                compileVersionValue: '#text-value-glomo-about-operation-system-spherica',
                operationSystemValue: '#text-value-glomo-about-operation-system-version-spherica',
                deviceModelValue: '#text-value-glomo-about-device-model-spherica',
                mobileServicesValue: '#text-value-glomo-about-mobile-services-system-spherica',
            },
            requiredElements: ['headerMain', 'appVersionKey'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'app version key':
                await this.appVersionKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'compile version key':
                await this.compileVersionKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative system key':
                await this.operationSystemKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'device model key':
                await this.deviceModelKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mobile services key':
                await this.mobileServicesKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'app version value':
                await this.appVersionValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'compile version value':
                await this.compileVersionValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative system value':
                await this.operationSystemValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'device model value':
                await this.deviceModelValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mobile services value':
                await this.mobileServicesValue.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0],
                });
        }
    }
}

export default new AboutInfoPage();
