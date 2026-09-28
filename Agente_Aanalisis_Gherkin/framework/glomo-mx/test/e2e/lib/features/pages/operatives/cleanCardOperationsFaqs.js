import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';

class CleanCardOperationsFaqs extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cleanCardQrFaqs[state="active"]',
            elements: {
                closeButton: 'cells-confirm-buttons cells-st-button #primaryBtn',
                modalFaqs: 'cells-accordion-step-list',
                faqs1: 'cells-accordion-step-list cells-accordion-step:nth-of-type(1) header',
                faqs2: 'cells-accordion-step-list cells-accordion-step:nth-of-type(2) header',
            },
            elementsSpherica: {
                modalFaqs: 'cells-accordion-step-list-spherica',
                faqs1: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(1) header',
                faqs2: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(2) header',
            },
            requiredElements: [
                'modalFaqs',
            ],
        });
    }

    async faqsModal() {
        await this.faqs1.waitForClickable({timeout: config.wait.M});
        await this.faqs1.click();
        await this.faqs2.waitForClickable({timeout: config.wait.M});
        await this.faqs2.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'faqs modal':
                await this.modalFaqs.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close modal button':
                await this.closeButton.waitForClickable({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CleanCardOperationsFaqs();
