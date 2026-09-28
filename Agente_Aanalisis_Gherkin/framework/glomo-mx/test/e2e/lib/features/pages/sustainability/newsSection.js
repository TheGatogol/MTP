import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('NewsSection')
class NewsSection extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-sustainabilityNews[state="active"]',
            elements: {
                back: 'cells-molecule-header #btnLeft',
                header: 'cells-molecule-header',
                newsItemList: 'cells-product-item-list',
                firstItem: 'cells-product-item-list li:first-of-type'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'news item list':
                await this.newsItemList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new':
                await this.firstItem.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openFirstItem() {
        await this.firstItem.waitForDisplayed({timeout: config.wait.M});
        await this.firstItem.click();
    }

    async showRelatedTip() {
        await this.relatedTipLink.click();
        await this.relatedTipLink.waitForAnimation({timeout: config.wait.XL});
    }

    async goBack(){
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

}

export default new NewsSection();
