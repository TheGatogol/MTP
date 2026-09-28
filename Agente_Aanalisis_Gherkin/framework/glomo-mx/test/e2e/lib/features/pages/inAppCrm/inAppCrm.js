import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class InAppCrm extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-inAppCrmPage[state="active"]',
            elements:{
                header: 'bbva-header-main-spherica header',
                closeButton: '#close #btn-right-primary',
                content: 'bbva-panel-info-spherica',
                understoodButton: 'bbva-button-default-spherica[id="basic"] #button',
            },
            requiredElements: [
                'closeButton',
            ],
        });

    }

    async closeScreen({button}) {
        switch (button.toLowerCase()) {
            case 'exit':
                await (await (await this.closeButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.XL}))
                    .click();
                break;
            case 'accept':
                await (await (await this.understoodButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.XL}))
                    .click();
                break;
            default:
                throw new Error(`The button ${button} not definit`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'content':
                await this.content.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'accept button':
                await this.understoodButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InAppCrm();
