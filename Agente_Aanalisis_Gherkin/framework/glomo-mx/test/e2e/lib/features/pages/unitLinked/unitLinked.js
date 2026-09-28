import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class UnitLinked extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-unitLinked[state="active"]',
            elements:
            {
                header: '[data-tag-name="unit-linked-detail"] [data-tag-name="bbva-header-main"] .header-main h1.heading-wrapper',
                title: 'bbva-core-heading.title',
                detailPolicy: '[data-tag-name="bbva-panel-detail"] [data-tag-name="bbva-link"]',
                editAlias: 'bbva-feature-unit-linked-mx [data-tag-name="bbva-button-row"]',
                tagGeneral: 'bbva-transition-container [data-tag-name="bbva-header-category"]',
                tagProduct: 'bbva-transition-container div [data-tag-name="unit-linked-more-info"] #productListSimple',
                tagNumPolicy: 'bbva-transition-container div [data-tag-name="unit-linked-more-info"] #policyListSimple',
                linkCopy: '[data-tag-name="bbva-list-simple"] .wrapper [data-tag-name="bbva-link"]',
                successfulMessage: '#bbvaToast',
                returnButtonPolicy: 'bbva-transition-container .header-main #btn-left-primary',
                returnButtonDashboard: '[data-tag-name="unit-linked-detail"] [data-tag-name="bbva-header-main"] #btn-left-primary',
                textAlias: '.text lines',
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
            case 'return button':
                await this.returnButtonDashboard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'return button policy':
                await this.returnButtonPolicy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail policy':
                await this.detailPolicy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit alias':
                await this.editAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag general':
                await this.tagGeneral.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag product':
                await this.tagProduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag num policy':
                await this.tagNumPolicy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link copy':
                await this.linkCopy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful message':
                await this.successfulMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.returnButtonDashboard.waitForDisplayed({timeout: config.wait.L});
        await this.returnButtonDashboard.click();
    }

    async accessDetailPolicy() {
        await this.detailPolicy.scrollIntoView();
        await (await this.detailPolicy.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessAlias() {
        await this.editAlias.scrollIntoView();
        await (await this.editAlias.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async copyNumPolicy(){
        await this.linkCopy.scrollIntoView();
        await (await this.linkCopy.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async returnPolicy() {
        await this.returnButtonPolicy.waitForDisplayed({timeout: config.wait.M});
        await this.returnButtonPolicy.click();
    }

    async verifyAliasUnitLinkedName(newAlias) {
        await this.textAlias.waitForText({text:newAlias, timeout: config.wait.M});
    }

}

export default new UnitLinked();
