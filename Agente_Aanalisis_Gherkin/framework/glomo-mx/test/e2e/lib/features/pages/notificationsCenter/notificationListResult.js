import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page()
class NotificationsListResult extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-notificationsListSearchResult[state="active"]',
            elements: {
                // upper side
                header: 'bbva-header-main h1 bbva-text[aria-label="Resultados de búsqueda"]',
                listNotifications: 'bbva-aggregation-swipe-list',
                filterTags: 'bbva-form-filter ul.filters',
                buttonBack: 'bbva-header-main div button#btn-left-primary',
                formFilter1: '[data-tag-name="bbva-form-filter"] ul.filters li:nth-child(1) [data-tag-name="bbva-link"]',
                formFilter2: '[data-tag-name="bbva-form-filter"] ul.filters li:nth-child(2) [data-tag-name="bbva-link"]',
                formFilter3: '[data-tag-name="bbva-form-filter"] ul.filters li:nth-child(3) [data-tag-name="bbva-link"]',
                noNotification: 'cells-card-advice div.card-advice-light #image',
                movementsFilter: '[data-tag-name="bbva-form-filter"] ul li.tag [data-tag-name="bbva-link"]',
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
            case 'list notification filter':
                await this.listNotifications.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tags filter':
                await this.filterTags.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.buttonBack.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form filter one':
                await this.formFilter1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form filter two':
                await this.formFilter2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form filter tree':
                await this.formFilter3.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements filter':
                await this.movementsFilter.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no notifications':
                await this.noNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeFilter() {
        await (await this.formFilter3.waitForClickable({timeout: config.wait.XXL})).click();
    }

    async closeAllFilters() {
        await (await this.formFilter3.waitForClickable({timeout: config.wait.XL})).click();
        await (await this.movementsFilter.waitForClickable({timeout: config.wait.XL})).click();
    }

}
export default new NotificationsListResult();
