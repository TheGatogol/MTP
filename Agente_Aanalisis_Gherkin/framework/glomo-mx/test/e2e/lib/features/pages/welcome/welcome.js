import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class Welcome extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-welcome[state="active"]',
            elements: {
                btnRegister: '#btnRequestKey',
                access: {
                    web: '#btnAccess'
                }
            },
            requiredElements: [
                'access',
            ],
        });
    }

    async waitForLoaded(timeout = config.wait.XXL, noDialog = true) {
        await super.waitForLoaded(timeout, noDialog);
    }

    async accessLogin() {
        await (await this.access
            .waitForDisplayed({timeout: config.wait.L}))
            .click();
    }

    async accessToSlides() {
        await (await this.access
            .waitForDisplayed({timeout: config.wait.S}))
            .click();
    }

    async accessOnBoardingN2(){
        await (await (await this.btnRegister.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'BBVA logo':
                await this.logo.waitForEnabled({timeout: config.wait.L});
                break;
            case 'Informative message associated':
                await this.message.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Enter button':
                await this.access.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Register button':
                await this.btnRegister.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Welcome();
