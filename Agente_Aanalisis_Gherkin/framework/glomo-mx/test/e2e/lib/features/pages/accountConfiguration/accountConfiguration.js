import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class AccountConfiguration extends AbstractGlomoPage{
    constructor(){
        const helpModal = '#mainModal[visible]';
        super({
            root:'#cells-template-magicLog[state="active"]',
            elements:{
                //main screen
                header:'#mainModal[visible]',
                btnClose:`${helpModal} [data-id="iconsRight"] `,
                titleModal:`${helpModal} .header`,
                caption:`${helpModal} [data-tag-name="bbva-type-text"]`,
                linkChangePayroll:`${helpModal} #configurationUpgrade #linkUpgrade`,
                linkYourAccount:`${helpModal} #configurationPayroll #linkPayroll`,
                linkSetUpLate: `${helpModal} bbva-button-default[variant="link"]`,
                helpModal: [
                    BbvaHelpModal, {
                        modifiers: '[visible]#exitModal',
                        additionalElements: {
                            titleModalExit:'#helpModalHeader[text="bbva-widget-account-configuration-section-modal-exit-header-text"] header .header-main .header',
                            buttonCloseModal:'#helpModalHeader[text="bbva-widget-account-configuration-section-modal-exit-header-text"] header .header-main .header-icons button',
                            textModal:'#helpModalContent .modal-main .modal-content .modal-content-wrapper #helpModalContent',
                            buttonExitModal:'.modal-main .modal-footer .slot-footer bbva-button-default:first-of-type',
                            linkContinueModal:'.modal-main .modal-footer .slot-footer bbva-button-default:last-of-type'
                        }
                    }
                ],
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item}){
        switch(item.toLowerCase()){
            case 'header':
                await this.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button close':
                await this.btnClose.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title':
                await this.titleModal.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'caption':
                await this.linkChangePayroll.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'link change payroll':
                await this.linkChangePayroll.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'link your account':
                await this.linkYourAccount.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'link configure later':
                await this.linkSetUpLate.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'modal header':
                await this.helpModal.additionalElements.titleModalExit.elementValidation({item: this.notEnoughBalance.HEADER});
                break;
            case 'modal close button':
                await this.helpModal.additionalElements.buttonCloseModal.elementValidation({item: this.notEnoughBalance.CLOSE});
                break;
            case 'modal description text':
                await this.helpModal.additionalElements.textModal.elementValidation({item: this.notEnoughBalance.MAIN_TEXT});
                break;
            case 'modal continue link':
                await this.helpModal.additionalElements.linkContinueModal.elementValidation({item: this.notEnoughBalance.ACCEPT_BUTTON});
                break;
            case 'modal exit button':
                await this.helpModal.additionalElements.buttonExitModal.elementValidation({item: this.notEnoughBalance.CANCEL_BUTTON});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async interactionWithLinks(link){
        switch (link){
            case 'link change payroll':
                await this.linkChangePayroll.waitForClickable({timeout: config.wait.M});
                await this.linkChangePayroll.click();
                break;
            case 'link your account':
                await this.linkYourAccount.waitForClickable({timeout: config.wait.M});
                await this.linkYourAccount.click();
                break;
            default:
                throw new Error(`Unknown event: ${link}`);
        }
    }

    async interactionWithModal(){
        await this.linkSetUpLate.waitForDisplayed({timeout: config.wait.M});
        await this.linkSetUpLate.click();
    }

    async exitModal(close){
        switch (close) {
            case 'link continue in operation':
                await this.helpModal.additionalElements.linkContinueModal.waitForDisplayed();
                await this.helpModal.additionalElements.linkContinueModal.click();
                break;
            case 'exit button':
                await this.helpModal.additionalElements.buttonExitModal.waitForDisplayed();
                await this.helpModal.additionalElements.buttonExitModal.click();
                break;
            default:
                throw new Error(`Unknown close navigation: ${close}`);
        }
    }

}
export default new AccountConfiguration();
