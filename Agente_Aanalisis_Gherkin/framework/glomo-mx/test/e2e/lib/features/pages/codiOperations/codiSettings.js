import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiSettings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiSettings[state="active"]',
            elements: {
                title: 'bbva-header-main-spherica #heading',
                btnBack: 'bbva-header-main-spherica [data-id="iconsLeft"].header-icons.left-group button',
                appPredInfo: 'bbva-header-category-spherica .title-container',
                bankInfo: 'bbva-list-simple-spherica',
                notificationBox: 'bbva-notification-message-spherica',
                infoIcon: 'bbva-notification-message-spherica .container-text .wrapper-icon-title bbva-type-icon.title-icon',
                notificationTxt: 'bbva-notification-message-spherica .container-text .wrapper-icon-title bbva-type-text.title',
                setAppBtn: 'bbva-notification-message-spherica .wrapper-button bbva-button-default'
            },
            requiredElements: ['title'],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch(item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.btnBack.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'app info':
                await this.appPredInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank info':
                await this.bankInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notificationBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info icon':
                await this.infoIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification text':
                await this.notificationTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'set app button':
                await (value ? this.setAppBtn.waitForEnabled({timeout: config.wait.M}) : this.setAppBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async changeDefaultApp() {
        await this.setAppBtn.waitForClickable({timeout: config.wait.M});
        await this.setAppBtn.click();
    }

    async accessToTermsAndConditions() {
        await this.infoIcon.waitForDisplayed();
        await this.infoIcon.click();
    }
}

export default new CodiSettings();
