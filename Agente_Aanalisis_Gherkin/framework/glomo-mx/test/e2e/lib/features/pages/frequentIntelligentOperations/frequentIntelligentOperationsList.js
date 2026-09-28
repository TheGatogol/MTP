import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FrequentIntelligenOperationsList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-frequentOperationsList[state="active"]',
            elements: {
                header: 'cells-template-coronitar',
                frequentSwipeList: 'bbva-widget-intelligent-frequent-operations [data-tag-name="frequent-operations-list"] [data-tag-name="bbva-aggregation-swipe-list"]',
                frequentOperationItemList: 'bbva-widget-intelligent-frequent-operations [data-tag-name="frequent-operations-list"] [data-tag-name="bbva-aggregation-swipe-list"] [data-tag-name="bbva-list-highlight"]',
            },
            requiredElements: [
                'frequentSwipeList'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectFrequentOperationItem() {
        await this.frequentOperationItemList.waitForDisplayed({timeout: config.wait.L});
        await this.frequentOperationItemList.waitForClickable({timeout: config.wait.L});
        await this.frequentOperationItemList.click();
    }

}

export default new FrequentIntelligenOperationsList();
