import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class AssistanceManager extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-assistanceManager[state="active"]',
            elements: {
                header: '#assistanceManagerPage[data-tag-name="bbva-header-main"]',
                callAdvisor: '[data-tag-name="bbva-card-contact"] [data-tag-name="bbva-button-row"] #buttons .listitem-button:nth-child(1) [data-tag-name="bbva-button-action"]',
                emailAdvisor: '[data-tag-name="bbva-card-contact"] [data-tag-name="bbva-button-row"] #buttons .listitem-button:nth-child(2) [data-tag-name="bbva-button-action"]',
                moreInfoButton: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-link"]',
                HelpModal: '#assistanceManagerModal #helpModalTitle',
                titleModal: '#assistanceManagerModal #title-text',
                callButton: '#assistanceManagerModal div div.content section div div.modal-footer slot div bbva-button-default',
                exitModal:'#assistanceManagerModal div div.content section div div.modal-footer slot div [data-tag-name="bbva-link"]',
                modalError: '#assistanceManagerModal div div.content section div div.modal-container',
                labelOperation: '#assistanceManagerModal #helpModalTitle slot span',
                retryModal: '#assistanceManagerModal div div.content section div div.modal-footer slot div bbva-button-default',
                exitModalError: '#assistanceManagerModal div div.content section div div.modal-footer slot div bbva-link',
            },
            elementsSpherica: {
                header: '#assistanceManagerPage[data-tag-name="bbva-header-main-spherica"]',
                callAdvisor: '[data-tag-name="bbva-card-contact-spherica"] div.actions div.action-container:nth-of-type(1)',
                emailAdvisor: '[data-tag-name="bbva-card-contact-spherica"] div.actions div.action-container:nth-of-type(2)',
                moreInfoButton: '[data-tag-name="bbva-notification-message-spherica"] [data-tag-name="bbva-type-link"]',
                HelpModal: '#assistanceManagerModal #helpModalTitle',
                titleModal: '#assistanceManagerModal #title-text',
                callButton: '#assistanceManagerModal div div.content div.modal-footer slot div bbva-button-default:nth-of-type(1)',
                exitModal:'#assistanceManagerModal div div.content div.modal-footer slot div bbva-button-default:nth-of-type(2)',
                modalError: '#assistanceManagerModal div div.content section div div.modal-container',
                labelOperation: '#assistanceManagerModal #helpModalTitle slot span',
                retryModal: '#assistanceManagerModal div div.content div.modal-footer slot div bbva-button-default:nth-of-type(2)',
                exitModalError: '#assistanceManagerModal div div.content section div div.modal-footer slot div bbva-type-link',
            },
            requiredElements: ['header'],
        });
    }

    async accessMoreInfo() {
        await (await this.moreInfoButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessCallAdvisor() {
        await (await this.callAdvisor.waitForDisplayed({timeout: config.wait.M})).click();
    }
    async accessEmailAdvisor() {
        await (await this.emailAdvisor.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessCallButton(){
        await(await this.callButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal out time':
                await this.HelpModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title out time':
                await this.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button call':
                await this.callButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit':
                await this.exitModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error':
                await this.modalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal error':
                await this.exitModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email modal title':
                await this.exitModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon modal':
                await this.exitModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button modal email':
                await this.exitModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new AssistanceManager();
