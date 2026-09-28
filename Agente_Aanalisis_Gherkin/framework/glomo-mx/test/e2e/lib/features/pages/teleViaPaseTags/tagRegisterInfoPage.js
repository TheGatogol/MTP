import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page()
class TagRegisterInfo extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-registerInfoTag[state="active"]',
            elements: {
                title: '#registerinfoTagTitle',
                closeBtn: '#headerRegistrationInfoTag',
                prefixInput: '#registrationTagOptions',
                OHLMRadioBtn: '[data-tag-name="bbva-form-option"][value="OHLM"]',
                numTagInput: '#tagNumber input',
                aliasInput: '#tagAlias input',
                continueBtn: '#continueRegistrationInfoTag',
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async fillFormTag() {
        await this.title.waitForDisplayed({timeout: config.wait.M});
        await (await this.prefixInput.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.OHLMRadioBtn.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.numTagInput.waitForDisplayed({timeout: config.wait.M})).setValue({value: '01708728'});
        await (await this.aliasInput.waitForDisplayed({timeout: config.wait.M})).setValue({value: 'registro'});
    }

    async backToRegTag() {
        await (await this.continueBtn.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new TagRegisterInfo();
