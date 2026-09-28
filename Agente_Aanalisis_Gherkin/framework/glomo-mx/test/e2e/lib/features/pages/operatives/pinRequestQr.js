import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class PinRequestQr extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cleanCardQrFaqs[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                question1: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(1) header',
                question2: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(2) header',
                question3: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(3) header',
                question4: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(4) header',
                question5: 'cells-accordion-step-list-spherica cells-accordion-step-spherica:nth-of-type(5) header',
                answer: 'cells-accordion-step-list-spherica cells-accordion-step-spherica.has-currency.no-left-icons.is-open p',
           
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
            case 'first question':
                await this.question1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second question':
                await this.question2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'third question':
                await this.question3.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fourth question':
                await this.question4.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fifth question':
                await this.question5.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'answer':
                await this.answer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectQuestion(option) {
        switch (option.toLowerCase()) {
            case 'one':
                await (await this.question2.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'two':
                await (await this.question3.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'three':
                await (await this.question4.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'four':
                await (await this.question5.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

}

export default new PinRequestQr();
