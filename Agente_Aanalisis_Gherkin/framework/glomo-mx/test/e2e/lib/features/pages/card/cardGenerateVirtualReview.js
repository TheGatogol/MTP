import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class CardGenerateVirtualReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardGenerateVirtualReview[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                successImage: 'cells-successful-response div.head-icon-white div.wrapper .cells-contact-avatar__image',
                description: 'div[data-selector="cells-successful-response-main-title"] span',
                date: 'div[data-selector="cells-successful-response-main-title"] cells-atom-date',
                panNumberCard: '[data-selector="cells-successful-response-additional-info"] div.key-value-container span.value',
                transactionNumber: '[data-selector="glomo-generate-virtual-card-success-folio"]',
                checkButton: 'cells-checkbox-button .checkbox-container',
                checkDescription: 'cells-checkbox-button .body-label',
                confirmButton: CellsConfirmButtons
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                successImage: 'cells-successful-response-spherica div.image-div div cells-atom-icon-spherica.icon-size-80',
                description: 'cells-successful-response-spherica h2.title',
                date: '[data-selector="cells-successful-response-additional-info"] cells-atom-date-spherica',
                panNumberCard: '[data-selector="cells-successful-response-additional-info"] div.key-value-container span.value',
                transactionNumber: 'cells-successful-response-spherica #body-section ul li:nth-child(1) div span.value',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async continueProcess() {
        await this.confirmButton.confirmAction();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'success activation image':
                await this.successImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pan number card':
                await this.panNumberCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transaction number':
                await this.transactionNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'understood button':
                if (!this.isSpherica()) {
                    await this.confirmButton.primaryBtn.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    message: `Element ${item} IS NOT DEFINED for [CARD GENERATE VIRTUAL REVIEW]`,
                    key: item
                });
        }
    }

    async exitScreen(){
        await (await (await this.confirmButton.primaryBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }
}

export default new CardGenerateVirtualReview();
