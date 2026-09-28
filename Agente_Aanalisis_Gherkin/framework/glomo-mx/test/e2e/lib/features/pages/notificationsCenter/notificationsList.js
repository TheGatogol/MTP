import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page()
class NotificationsList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-notificationsList[state="active"]',
            elements: {
                // upper side
                header: 'bbva-header-main h1 bbva-text[aria-label="Notificaciones"]',
                listNotifications: 'bbva-aggregation-swipe-list',
                notificationPromotion: 'bbva-aggregation-swipe-list [data-tag-name="bbva-list-swipe"]#enero-30-2023 bbva-list-highlight[category="Ofertas y promociones"] [data-tag-name="bbva-link"]',
                notificationsAlert: 'bbva-aggregation-swipe-list [data-tag-name="bbva-list-swipe"]#enero-30-2023 bbva-list-highlight[category-icon="coronita:info"] [data-tag-name="bbva-link"]',
                notificationExpense: 'bbva-aggregation-swipe-list [data-tag-name="bbva-list-swipe"]#enero-30-2023 bbva-list-highlight#Abono[amount="13001"] [data-tag-name="bbva-link"]',
                searchNotification: 'bbva-button-row [data-tag-name="bbva-button-action"][image="button-consult"]',
                configurationNotification: 'bbva-button-row [data-tag-name="bbva-button-action"][image="button-consult"]',
                checkBox1: 'bbva-form-checkbox span.clip bbva-clip-entities[entity="coronita:transfer"]',
                checkBox2: 'bbva-form-checkbox span.clip bbva-clip-entities[entity="coronita:info"]',
                filterButton: 'bbva-panel-button-fixed',
                itemNotification: 'bbva-aggregation-swipe-list [data-tag-name="bbva-list-swipe"] bbva-list-highlight#Abono div.container [data-tag-name="bbva-link"]',
                buttonSettings: '[data-tag-name="bbva-button-row"] #buttons span:nth-child(2) [data-tag-name="bbva-button-action"]'
            },
            requiredElements: [
                'header',
            ]
        });
    }
    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search button':
                await this.searchNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'configuration button':
                await this.configurationNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification list':
                await this.listNotifications.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async showDetailPromotion() {
        await (await this.notificationPromotion.waitForDisplayed()).click();
    }

    async showDetailAlert() {
        await (await this.notificationsAlert.waitForDisplayed()).click();
    }

    async showDetailExpense() {
        await (await this.notificationExpense.waitForDisplayed()).click();
    }

    async showSearchList() {
        await (await this.searchNotification.waitForDisplayed()).click();
    }

    async openNotificationDetail() {
        await (await this.itemNotification.waitForClickable({timeout: config.wait.M})).click();
    }

    async openNotificationSettings() {
        await (await this.buttonSettings.waitForClickable()).click();
    }
}
export default new NotificationsList();
