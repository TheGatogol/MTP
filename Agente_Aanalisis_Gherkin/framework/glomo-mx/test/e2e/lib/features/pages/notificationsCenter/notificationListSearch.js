import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page()
class NotificationListSearch extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-notificationsListSearch[state="active"]',
            elements: {
                // upper side
                header: 'bbva-header-main h1 bbva-text[aria-label="Buscar notificaciones"]',
                checkBox1: 'bbva-form-checkbox span.clip bbva-clip-entities[entity="coronita:transfer"]',
                checkBox2: 'bbva-form-checkbox span.clip bbva-clip-entities[entity="coronita:info"]',
                checkBox3: 'bbva-form-checkbox span.clip bbva-clip-entities[entity="coronita:sales"]',
                filterButton: 'bbva-panel-button-fixed',
                removeFilters: 'bbva-panel-button-fixed div.panel-button div.footer-content #footerLink'
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
            case 'check box expense':
                await this.checkBox1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check box alert':
                await this.checkBox2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check box promotion':
                await this.checkBox3.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search button':
                await this.filterButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item,  args: arguments[0]});
        }
    }

    async showNotificationsResult() {
        await (await this.checkBox1.waitForDisplayed()).click();
        await (await this.checkBox2.waitForDisplayed()).click();
        await (await this.filterButton.waitForDisplayed()).click();
    }
    
    async selectCheckBox() {
        await (await this.checkBox1.waitForDisplayed()).click();
        await (await this.checkBox2.waitForDisplayed()).click();
        await (await this.removeFilters.waitForDisplayed({timeout: config.wait.L})).click();
    }
}
export default new NotificationListSearch();
