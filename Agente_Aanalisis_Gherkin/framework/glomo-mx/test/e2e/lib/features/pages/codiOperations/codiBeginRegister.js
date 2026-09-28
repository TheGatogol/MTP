import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class CodiBeginRegister extends AbstractGlomoPage {
    constructor() {
        super({
            root:'#cells-template-codiBeginRegister[state="active"]',
            elements: {
                title: '#codi-refactor-enrollment-page-header',
                codiText: '#codi-refactor-begin-register-page-info',
                featureText: '#codi-refactor-begin-register-page-characteristic',
                benefitText: '#codi-refactor-begin-register-page-benefit',
                registerNowBtn: '#codi-refactor-begin-register-page-button-default',
                registerLaterBtn: '#codi-refactor-begin-register-page-button-default-2',
                closeBtn: '#codi-refactor-enrollment-page-header #btn-close',
            },
            requiredElements:['title'],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'title qr and codi':
                await this.codiText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'codi feature info':
                await this.featureText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'qr benefit info':
                await this.benefitText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register now button':
                await this.registerNowBtn.scrollIntoView();
                await this.registerNowBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register later button':
                await this.registerLaterBtn.scrollIntoView();
                await this.registerLaterBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async enrolllNow() {
        await this.registerNowBtn.waitForClickable({timeout: config.wait.M});
        await this.registerNowBtn.click();
    }

    async closeEnroll() {
        await this.closeBtn.waitForClickable({timeout: config.wait.M});
        await this.closeBtn.click();
    }

    async enrollLater() {
        await this.registerLaterBtn.waitForClickable(config.wait.M);
        await this.registerLaterBtn.click();
    }

}

export default new CodiBeginRegister();
