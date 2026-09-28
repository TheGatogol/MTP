import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class DigitalToken extends AbstractGlomoPage {
    constructor() {
        super({
            root: 'cells-template-coronita[state="active"]',
            elements: {
                header: '.header--core',
                xButton: '#btnRight',
                okButton: '#primaryBtn',
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async waitForLoaded(timeout = config.wait.XL) {
        await this.changeContext({context: 'WEBVIEW'});
        await this.header.waitForText({timeout: config.wait.L, text: 'Token Móvil'});
        await super.waitForLoaded(timeout);
    }

    async activeLater() {
        await this.xButton.waitForDisplayed({timeout: config.wait.L});
        await this.xButton.click();
    }

    async activeToken() {
        await this.okButton.waitForDisplayed({timeout: config.wait.L});
        await this.okButton.click();
    }

}

export default new DigitalToken();
