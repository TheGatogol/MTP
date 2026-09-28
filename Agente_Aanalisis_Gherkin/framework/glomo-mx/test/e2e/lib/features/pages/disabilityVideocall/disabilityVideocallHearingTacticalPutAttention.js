import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHeaderMain from '../../components/bbva-header-main';
import {ScreenValidationKeyNotFound} from '@csqe/radish';

class DisabilityVideocallHearingTacticalPutAttention extends AbstractGlomoPage {
    constructor() {
        const elementCardBanner = rootElement => `[data-tag-name="bbva-card-banner"] ${rootElement}`;
        const elementNotificationsMessage = rootElement => `[data-tag-name="bbva-notification-message"] ${rootElement}`;
        const elementsPanelInfo = rootElement => `[data-tag-name="bbva-panel-info"] ${rootElement}`;
        super({
            root: '#cells-template-disabilityVideocallHearingTacticalPutAttention[state="active"]',
            elements: {
                dmDVHT: 'bbva-manager-disability-videocall#dmDVHTPA',
                bbvaHeaderMainSection: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `${BbvaHeaderMain._baseRoot}`,
                        },
                    },
                },
                //Status Network Success
                componentsStatusNetworkSuccess: {
                    imgSrc: elementCardBanner('[data-tag-name="bbva-banner-image"] figure slot img'),
                    title: elementCardBanner('div.content [data-tag-name="bbva-text"].title'),
                    subTitle: elementCardBanner('div.content [data-tag-name="bbva-text"].description'),
                    firtsItemList: elementCardBanner('div.content > ul > li:nth-child(1) [data-tag-name="bbva-list-bullet"]'),
                    secondItemList: elementCardBanner('div.content > ul > li:nth-child(2) [data-tag-name="bbva-list-bullet"]'),
                    iconNotificationMessage: elementNotificationsMessage('[data-tag-name="bbva-icon"]'),
                    textNotificationMessage: elementNotificationsMessage('div [data-tag-name="bbva-text"]')
                },
                //Status Network Error
                componentsStatusNetworkError: {
                    microillustration: elementsPanelInfo('div.image'),
                    title: elementsPanelInfo('div.content [data-tag-name="bbva-text"].title'),
                    description: elementsPanelInfo('div.content [data-tag-name="bbva-text"].description')
                },
                buttonDefault: '[data-tag-name="bbva-panel-button"] section [data-tag-name="bbva-button-default"]'
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
                await (await this.bbvaHeaderMainSection.buttonRightPrimary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button default':
                await this.buttonDefault.waitForDisplayed({timeout: config.wait.M});
                break;
            //Status Network Success
            case 'image put attention':
                await this.componentsStatusNetworkSuccess.imgSrc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title put attention':
                await this.componentsStatusNetworkSuccess.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subtitle put attention':
                await this.componentsStatusNetworkSuccess.subTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'firts item list':
                await this.componentsStatusNetworkSuccess.firtsItemList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second item list':
                await this.componentsStatusNetworkSuccess.secondItemList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.componentsStatusNetworkSuccess.iconNotificationMessage.waitForDisplayed({timeout: config.wait.M});
                await this.componentsStatusNetworkSuccess.textNotificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            //Status Network Error
            case 'microillustration bad connection':
                await this.componentsStatusNetworkError.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title error network':
                await this.componentsStatusNetworkError.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description error network':
                await this.componentsStatusNetworkError.description.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async startVideocall() {
        await (await this.buttonDefault.waitForClickable({timeout: config.wait.M})).click();
    }

    async successNetwork() {
        await this.dmDVHT.execute({script: () => this.putAttention('success')});
    }

    async errorNetwork() {
        await this.dmDVHT.execute({script: () => this.putAttention('error')});
    }
}

export default new DisabilityVideocallHearingTacticalPutAttention();
