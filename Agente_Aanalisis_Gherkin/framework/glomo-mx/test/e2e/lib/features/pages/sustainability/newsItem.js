import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('NewsItem')
class NewsItem extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-sustainabilityNewsDetail[state="active"]',
            elements: {
                back: 'cells-molecule-header #btnLeft',
                header: 'cells-molecule-header',
                textDescription: 'cells-text-description',
                newsDate: 'cells-text-description p.title',
                newsTitle: 'cells-text-description p.subtitle',
                newsDetail: 'cells-text-description p.description.htmlDescription',
                relatedTip: 'bbva-clip-list',
                relatedTipLink: 'bbva-link [data-tag-name=bbva-core-heading]',
                iconRelatedTip:'bbva-clip-list img',
            },
            requiredElements: [
                'header', 'newsDate', 'newsTitle'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text description':
                await this.textDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'related tip':
                await this.relatedTip.scrollIntoView({block: 'start'});
                await this.relatedTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon tip':
                await this.relatedTip.scrollIntoView();
                await this.relatedTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date of new':
                await this.newsDate.scrollIntoView();
                await this.newsDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title of new':
                await this.newsTitle.scrollIntoView();
                await this.newsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail of new':
                await this.newsDetail.scrollIntoView();
                await this.newsDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'header tip':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'icon tip':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CONTAINER_ICON});
                break;
            case 'title tip':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'text tip':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async showRelatedTip() {
        await this.relatedTipLink.click();
        await this.relatedTipLink.waitForAnimation({timeout: config.wait.XL});
    }

    async closeDialog() {
        await this.dialogOperations.closeDialog();
    }

    async goBack(){
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }
}

export default new NewsItem();
