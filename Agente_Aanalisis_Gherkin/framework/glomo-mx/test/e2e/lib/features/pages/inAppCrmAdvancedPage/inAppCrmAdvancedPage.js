import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class InAppCrmAdvancedPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-inAppCrmAdvancedPage[state="active"]',
            elements: {
                controller:'bbva-technicalcore-inapp-crm',
                header: 'bbva-header-main-spherica header',
                closeButton: 'bbva-header-main-spherica .button-1 div.right-group button',
                message: 'bbva-notification-message-spherica div bbva-type-text',
                messageLinkInfo: 'bbva-notification-message-spherica bbva-type-link',
                bbvaLink: 'bbva-button-default-spherica#button-link',
                understoodButton: 'bbva-button-default-spherica#button-primary',
                panelLinkInfo: 'bbva-panel-info-spherica[slot="app__main"] .container .content bbva-type-link',
                microIlustration:'bbva-panel-info-spherica[slot="app__main"] .container .image',
                titleInfo: 'bbva-panel-info-spherica[slot="app__main"] bbva-type-text .title',
                descriptionInfo: 'bbva-panel-info-spherica[slot="app__main"] .container .content .description',
                btnAnotherTime: 'bbva-button-default-spherica#button-link',
                helpModal: [
                    BbvaHelpModalSpherica, {
                        modifiers: '[visible]',
                        additionalElements: {
                            closeBtn: '#helpModalHeader #btn-close',
                            buttonModal: 'div .content .modal-footer bbva-button-default',
                            panelinfo: 'bbva-panel-info-spherica .container .image',
                            listInfo: 'div bbva-list-bullet-spherica-lit bbva-type-text span'
                        }
                    }
                ],
                dialogOperations: [
                    GlomoAlertManagerSpherica, {
                        additionalElements:{
                            btnCloseModal: '#modal #cancelButton'
                        }
                    }

                ],
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async initializeInAppUpgrade() {
        const {dataInApp} = global.user;
        await this.controller.execute({
            script: (dataInApp) => {
                this.getDataInApp(dataInApp);
                this.initShowInApp();
            },
            args: [dataInApp]
        });
    }

    async closeScreen({button}) {
        switch (button.toLowerCase()) {
            case 'exit':
                await (await (await this.closeButton.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'accept':
                await (await (await this.understoodButton.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`The button ${button} is not defined`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'messaage link':
                await this.messageLinkInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'footer button link':
                await this.bbvaLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.understoodButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title panel info':
                await this.titleInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description info':
                await this.descriptionInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link':
                await this.panelLinkInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info modal close':
                await this.helpModal.additionalElements.closeBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info buton modal':
                await this.helpModal.additionalElements.buttonModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info panel modal':
                await this.helpModal.additionalElements.panelinfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info list modal':
                await this.helpModal.additionalElements.listInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button alert':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal image alert':
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title alert':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal description alert':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal cancel button':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro ilustration inapp n2':
                await this.microIlustration.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async sectionInfo() {
        await this.panelLinkInfo.waitForClickable({timeout: config.wait.M});
        await this.panelLinkInfo.click();
    }

    async messageInfo() {
        await this.messageLinkInfo.waitForClickable({timeout: config.wait.M});
        await this.messageLinkInfo.click();
    }

    async continueModal(){
        await this.understoodButton.waitForDisplayed({timeout: config.wait.M});
        await this.understoodButton.click();
    }

    async closeSecundary(){
        await this.btnAnotherTime.waitForDisplayed({timeout: config.wait.M});
        await this.btnAnotherTime.click();
    }

    async closeModal(){
        await this.dialogOperations.additionalElements.btnCloseModal.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.btnCloseModal.click();
    }

    async sectionContinue() {
        await this.understoodButton.waitForClickable({timeout: config.wait.M});
        await this.understoodButton.click();
    }

    async sectionAcceptModal() {
        await this.helpModal.additionalElements.buttonModal.waitForDisplayed({timeout: config.wait.M});
        await this.helpModal.additionalElements.buttonModal.waitForAnimation({timeout: config.wait.M});
        await this.helpModal.additionalElements.buttonModal.click();
    }

    async sectionOther() {
        await this.bbvaLink.waitForClickable({timeout: config.wait.M});
        await this.bbvaLink.click();
    }

    async closeDialog() {
        await this.dialogOperations.cancelBtn.waitForClickable({timeout: config.wait.L});
        await this.dialogOperations.cancelBtn.click();
    }
}

export default new InAppCrmAdvancedPage();
