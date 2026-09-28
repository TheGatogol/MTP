import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ValidatedEmailSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-validatedEmailSuccess[state="active"]',
            elements: {
                header: ' bbva-header-main',
                closeBtn: 'button#btn-right-primary',
                response: 'cells-successful-response',
                checkImage: 'cells-successful-response div.head-icon-white cells-contact-avatar #avatarImg',
                mainTitle:  'cells-successful-response div.main-text-head.bold.cursive span:nth-child(1)',
                operationDate: 'cells-successful-response div.main-text-head.bold.cursive span#date',
                operationSubtitle: 'cells-successful-response #body-section ul li:nth-child(1) span.value',
                operationMailTitle: 'cells-successful-response #body-section ul li:nth-child(2) span.key',
                operationMail: 'cells-successful-response #body-section ul li:nth-child(2) span.value',
                operationFolioTitle: 'cells-successful-response #body-section ul li:nth-child(3) span.key',
                operationFolio: 'cells-successful-response #body-section ul li:nth-child(3) span.value',
                operationNoticeTitle: 'cells-successful-response #body-section ul li:nth-child(4) span.key',
                operationNotice: 'cells-successful-response #body-section ul li:nth-child(4) span.value',
                exitButton: 'cells-successful-response #primaryBtn'
            },
            requiredElements: [
                'header', 'response'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check image':
                await this.checkImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation subtitle':
                await this.operationSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation mail title':
                await this.operationMailTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation mail':
                await this.operationMail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation folio title':
                await this.operationFolioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation folio':
                await this.operationFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation notice title':
                await this.operationNoticeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation notice':
                await this.operationNotice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmClose(){
        await this.exitButton.scrollIntoView();
        await this.closeBtn.waitForClickable({timeout: config.wait.M});
        await this.closeBtn.click();
    }

    async confirmExit(){
        await this.exitButton.scrollIntoView();
        await this.exitButton.waitForClickable({timeout: config.wait.L});
        await this.exitButton.click();
    }

}

export default new ValidatedEmailSuccess();
