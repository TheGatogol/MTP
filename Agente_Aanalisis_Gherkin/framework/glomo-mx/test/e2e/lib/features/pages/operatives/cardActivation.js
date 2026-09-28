import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound } from '@csqe/radish';

class CardActivation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardActivation[state="active"]',
            elements: {
                header: 'bbva-transition-container.TransitionCvvCode [data-tag-name="bbva-header-main"][text="Activar tarjeta"]',
                exitButton: 'bbva-transition-container.TransitionCvvCode [data-tag-name="bbva-header-main"][text="Activar tarjeta"] #btn-right-primary',
                helpButton: '[data-tag-name="card-activation-cvv"] bbva-header-category div div.title-container bbva-icon',
                inputCvv:'[data-tag-name="card-activation-cvv"] input',
                continueButton:'[data-tag-name="card-activation-cvv"] div [data-tag-name="bbva-button-default"][text="Continuar"]',
                modal: {
                    properties: { root: 'bbva-help-modal.cvvInfoModal' },
                    header: '#helpModalHeader',
                    exitButton: '#helpModalHeader #btn-right-primary',
                    iconHelp: '#helpModalTitle slot .title-icon',
                    textInformation: '#helpModalContent div slot div',
                    understoodButton: 'div div section div div.modal-main div.modal-footer slot div bbva-button-default',
                },
                modalAlert: {
                    properties: { root: 'bbva-help-modal.exitModal' },
                    exitButton: 'bbva-button-default',
                    continueButton: '[data-tag-name="bbva-link"]'
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input cvv':
                await this.inputCvv.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal':
                await this.modal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button modal':
                await this.modal.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon help modal':
                await this.modal.iconHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information modal':
                await this.modal.textInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understood modal':
                await this.modal.understoodButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeModal() {
        await (await this.modalAlert.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async confirmModal(){
        await (await this.modalAlert.exitButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async returnTheCardActivation(){
        await (await this.exitButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessHelpButton() {
        await (await this.helpButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async insertCvv() {
        await this.inputCvv.waitForDisplayed({timeout: config.wait.M});
        await this.inputCvv.setValue('123');
    }

    async continueActivation() {
        await (await this.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

}

export default new CardActivation();
