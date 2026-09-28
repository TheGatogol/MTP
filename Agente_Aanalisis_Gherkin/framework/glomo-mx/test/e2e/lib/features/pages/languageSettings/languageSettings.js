import { page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class LanguageSettings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-languageSettings[state="active"]',
            elements: {
                mxLanguageOption: '.language-options [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="es-MX"]',
                enLanguageOption: '.language-options [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="en"]',
                saveButton: '.footer-slot [data-tag-name="bbva-button-default"].footer-button',
            },
            requiredElements: [
                'root'
            ],
        });
    }

    async selectCheckboxOption(option) {
        switch (option.toLowerCase()) {
            case 'english':
                await (await this.enLanguageOption.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            case 'spanish':
                await (await this.mxLanguageOption.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            default:
                throw new Error(`Not recognized option "${option}"`);
        }
    }

    async selectLanguageAndSave(option) {
        await this.selectCheckboxOption(option);
        await this.saveButton.waitForDisplayed({timeout: config.wait.S});
        if (option.toLowerCase() === 'spanish') {
            await this.saveButton.execute({script: () => this.removeAttribute('disabled')});
        }
        await this.saveButton.click();
    }
}

export default new LanguageSettings();
