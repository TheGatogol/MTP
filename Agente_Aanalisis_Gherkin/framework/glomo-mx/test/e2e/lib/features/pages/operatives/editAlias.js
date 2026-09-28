import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class EditAlias extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-edit-alias[state="active"]',
            elements: {
                titleHeader: '#titleZone span',
                inputField: '.field__input',
                cleanButton: '#btnMainIcon[role="button"]',
                closeButton: '#header-main #btn-close',

                // Buttons
                saveAlias: 'cells-st-button.primary button',
                cancelButton: 'cells-st-button.link button',
                cancelAliasButton: 'cells-st-button.link button',
                cleanTextbox:'#btnMainIcon',
                btnClose: '#btnRight',

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                headerTitleText: '#header-main #text',
                headerMain: '#header-main',
                btnBack: '#header-main #btn-close',
                inputAlias: '#edit-alias-input input',
                inputAliasComponent: '#edit-alias-input',
                cleanAliasBtn: 'bbva-button-default.clear',
                saveAliasBtn: '.btn-content bbva-button-default',
                cancelBtn: 'div .btn-content bbva-link[data-tag-name="bbva-link"]',
                modalAcceptBtn: '#navigation-previuos-page div div.content div div.modal-main div.modal-footer slot div bbva-button-default:nth-child(1)',
                modalCancelBtn: '#navigation-previuos-page div div.content div div.modal-main div.modal-footer slot div bbva-button-default.footer-button.link',

                modalToExit: [BbvaHelpModal],
                successMessage: 'cells-bottom-modal-message cells-bottom-modal cells-atom-message div.message',
                errorConnectionBtn:'#error-connection div div.content div.help-modal div.modal-footer slot div bbva-button-default',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements:{
                            iconMessage: 'div.icon-message-container',
                            btnAccept: 'glomo-alert-manager.app__transactional cells-alert-box#modal cells-bottom-modal#modal div.buttons-container cells-st-button.btn.main.secondary.btn--l button#acceptButton',
                        },
                    }
                ]
            },
            elementsSpherica: {
                saveAlias: 'cells-st-button-spherica.primary button',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements: {
                            iconMessage: 'div.paragraph-template',
                            btnAccept: 'glomo-alert-manager-spherica.app__transactional cells-alert-box-spherica#modal cells-bottom-modal-spherica#modal div.buttons-container cells-st-button-spherica.default.full button#acceptButton',
                        }
                    }
                ]
            },
            requiredElements: [
                '__root',
            ]
        });
    }

    async updateAlias(newAlias) {
        await this.cleanButton.waitForClickable({timeout: config.wait.M});
        await this.cleanButton.click();
        await this.inputField.waitForClickable({timeout: config.wait.M});
        await this.inputField.setValue({value: newAlias, slow: true});
    }

    async save() {
        await this.saveAlias.waitForClickable({timeout: config.wait.M});
        await this.saveAlias.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async cancelAlias() {
        await this.cancelButton.waitForClickable({timeout: config.wait.M});
        await this.cancelButton.click();
    }

    async backEditAlias() {
        if (this.isSpherica()) {
            await this.closeNewAlias();
        } else {
            await this.header.actionLeft();
        }
    }

    async modifyEditAlias(alias) {
        await this.inputAliasComponent.waitForClickable({ timeout: config.wait.M });
        await this.inputAlias.setValue({ value: alias, slow: true });
        await this.closeButton.waitForClickable({ timeout: config.wait.M });
        await this.closeButton.click();
    }

    async acceptButtonIsDisabled() {
        await this.saveAlias.waitForClickable({timeout: config.wait.XL, reverse: true});
    }

    async cancelReturn() {
        await (await this.dialogOperations.cancelBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async acceptReturn() {
        await (await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'cancel button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async cleanAlias() {
        await this.cleanAliasBtn.waitForClickable({ timeout: config.wait.M});
        await this.cleanAliasBtn.click();
    }

    async updateNewAlias(newAlias) {
        await this.inputAlias.waitForClickable({timeout: config.wait.M});
        await this.inputAlias.setValue({value: newAlias, slow: true});
    }

    async saveNewAlias() {
        await this.saveAliasBtn.waitForClickable({timeout: config.wait.M});
        await this.saveAliasBtn.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.S});
    }

    async cancelNewAlias() {
        await this.cancelBtn.waitForClickable({timeout: config.wait.M});
        await this.cancelBtn.click();
    }

    async closeNewAlias() {
        await this.btnClose.waitForClickable({timeout: config.wait.M});
        await this.btnClose.click();
    }

    async goBack(){
        await this.btnBack.waitForDisplayed({timeout: config.wait.M});
        await this.btnBack.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header title':
                await this.titleHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input field':
                await this.inputField.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save alias':
                await this.saveAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel alias':
                await this.cancelAliasButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clean textbox':
                await this.cleanTextbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header main':
                await this.headerMain.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header title text':
                await this.headerTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn back':
                await this.btnBack.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input alias':
                await this.inputAlias.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'clean alias btn':
                await this.cleanAliasBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save alias btn':
                await this.saveAliasBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success message':
                await this.successMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept btn':
                await this.modalToExit.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel btn':
                await this.modalToExit.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept btn modal':
                await this.modalAcceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel btn modal':
                await this.modalCancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error connection btn':
                await this.errorConnectionBtn.waitForDisplayed({awaittimeout: config.wait.M});
                break;
            case 'save button disabled':
                await this.saveAliasBtn.waitForClickable({timeout: config.wait.M, reverse: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async handleAliasOption(option) {
        switch (option) {
            case 'saves':
                await this.saveNewAlias();
                break;
            case 'cleans':
                await this.cleanAlias();
                break;
            default:
                throw new Error(`Error: The option "${option}" is not defined.`);
        }
    }
}

export default new EditAlias();
