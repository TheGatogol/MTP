import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHeaderMain from '../../components/bbva-header-main';
import {ScreenValidationKeyNotFound} from '@csqe/radish';

class DisabilityVideocallHearingTactical extends AbstractGlomoPage {
    constructor() {
        const elementsPanelInfo = rootElement => `[data-tag-name="bbva-panel-info"] ${rootElement}`;
        const elementNotificationsMessage = rootElement => `[data-tag-name="bbva-notification-message"] ${rootElement}`;
        super({
            root: '#cells-template-disabilityVideocallHearingTactical[state="active"]',
            elements: {
                dmDVHT: 'bbva-manager-disability-videocall#dmDVHT',
                bbvaHeaderMainSection: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `${BbvaHeaderMain._baseRoot}`,
                        },
                    },
                },
                microillustration: elementsPanelInfo('div.image'),
                titleText: elementsPanelInfo('div.content [data-tag-name=bbva-text].title'),
                description: elementsPanelInfo('div.content [data-tag-name=bbva-text].description'),
                iconNotificationMessage: elementNotificationsMessage('[data-tag-name="bbva-icon"]'),
                textNotificationMessage: elementNotificationsMessage('div [data-tag-name="bbva-text"]'),
                buttonDefault: '[data-tag-name="bbva-panel-button"] section [data-tag-name="bbva-button-default"]',
                bbvaLink: '[data-tag-name="bbva-panel-button"] section footer [data-tag-name="bbva-link"]'
            },
            requiredElements: [
                'bbvaHeaderMainSection',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await (await this.bbvaHeaderMainSection.text.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right header':
                await (await this.bbvaHeaderMainSection.buttonRightPrimary.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'microillustration':
                await this.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title text':
                await this.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.iconNotificationMessage.waitForDisplayed({timeout: config.wait.M});
                await this.textNotificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button default':
                await this.buttonDefault.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link':
                await this.bbvaLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptTermsAndConditions() {
        await (await this.buttonDefault.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new DisabilityVideocallHearingTactical();
