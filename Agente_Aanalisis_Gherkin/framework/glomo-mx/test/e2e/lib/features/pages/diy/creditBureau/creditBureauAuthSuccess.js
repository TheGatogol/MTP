import AbstractGlomoPage from '../../abstract-glomo-page.js';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';

@page()
class CreditBureauAuthSuccess extends AbstractGlomoPage {

    constructor() {
        const creditBureauReceipt= '#step-credit-bureau-receipt-receipt';
        super({
            root: '#cells-template-creditBureauReceipt[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                successIcon: `${creditBureauReceipt} div.head-icon-white.head-icon-white-extra-class > cells-contact-avatar #avatarImg`,
                successTitle: `${creditBureauReceipt} div.main-text-head.bold > span`,
                successDate: `${creditBureauReceipt} div.main-text-head.bold > cells-atom-date #date`,
                textFolio: `${creditBureauReceipt} #body-section > ul > li:nth-child(1) > div.key-value-container > span.key`,
                idFolio: `${creditBureauReceipt} #body-section > ul > li:nth-child(1) > div.key-value-container > span.value`,
                boldText: `${creditBureauReceipt} #body-section > ul > li.bold-key.spacing-s > div.key-value-container > span.key`,
                iconMessage: `${creditBureauReceipt} #body-section > ul > li:nth-child(3) > cells-icon-message`,
                mailDescription: `${creditBureauReceipt} #body-section > div.message.spacing-top-s > cells-icon-message #notInline`,
                userEmail: `${creditBureauReceipt} #body-section > div.message.spacing-top-s > cells-icon-message > cells-molecule-mask div.wrapper > span.number`,
                shareButtonReceipt: `${creditBureauReceipt} #body-section > cells-operations-list ul > li > button`,
                exitButton: `${creditBureauReceipt} #primaryBtn`

            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                successIcon: `${creditBureauReceipt} #header-section div.image-div div cells-atom-icon-spherica.icon-size-80`,
                successTitle: `${creditBureauReceipt} #header-section h2.title`,
                successDate: `${creditBureauReceipt} #body-section ul li:nth-of-type(2) span.value`,
                textFolio: `${creditBureauReceipt} #body-section ul li:first-of-type span.key`,
                idFolio: `${creditBureauReceipt} #body-section ul li:first-of-type span.value`,
                mailDescription: `${creditBureauReceipt} #body-section ul li:nth-of-type(3) span.key`,
                userEmail: `${creditBureauReceipt} #body-section ul li:nth-of-type(3) cells-molecule-mask-spherica div.wrapper span.number`,
                shareButtonReceipt: `${creditBureauReceipt} #body-section`,
                exitButtonHeader: '#header-credit-bureau-receipt-receipt .right-container #btnRight'
            },
            requiredElements: [
                'header',
                'idFolio'
            ]
        });

    }

    async _screenValidation({item}) {
        let element;
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success icon':
                await this.successIcon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success date':
                await this.successDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'text folio':
                await this.textFolio.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'id folio':
                await this.idFolio.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'bold text':
                await this.boldText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'icon message':
                await this.iconMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'mail description':
                await this.mailDescription.scrollIntoView();
                await this.mailDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'user email':
                await this.userEmail.scrollIntoView();
                await this.userEmail.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'share button receipt':
                await this.shareButtonReceipt.scrollIntoView();
                await this.shareButtonReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                element = this.isSpherica
                    ? this.exitButtonHeader
                    : this.exitButton;
                await element.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeOperative(){
        const value = this.isSpherica();
        if(value) {
            await this.exitButtonHeader.waitForClickable({timeout: config.wait.M});
            await this.exitButtonHeader.click();
        } else {
            await this.exitButton.waitForClickable({timeout: config.wait.M});
            await this.exitButton.click();
        }
    }

}

export default new CreditBureauAuthSuccess();
