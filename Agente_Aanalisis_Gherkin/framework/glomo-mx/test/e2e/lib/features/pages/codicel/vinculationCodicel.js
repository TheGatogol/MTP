import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';

@page()
class VinculationCodicel extends AbstractGlomoPage {
    constructor() {

        const vinculationCodicelBeggining = 'div.info-list .descriptive-list div.item';

        super({
            root: '#cells-template-codicelAgreeAndRemoveConsent[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            helpIcon: '.paragraph-icon iron-icon',
                            vinculateButton: 'button#acceptButton',
                            vinculateLaterButton: 'button#cancelButton',
                            vinculateIcon: 'div.icon-container img',
                            confirmVinculateIcon: 'div.paragraph-template .paragraph-icon iron-icon',
                            confirmVinculateLaterButton: 'button#acceptButton',
                            denyVinculateLaterButton: 'button#cancelButton',
                            confirmIcon: 'div.main-container iron-icon:not([style="display: none;"])',
                            confirmDescription: 'div.main-container div.content-container',
                            confirmCloseBtn: 'cells-bottom-modal-spherica.full-height #closeButton'
                        }
                    }
                ],

                title: 'div.content div.info-list div.section-title',
                nameLabel: `${vinculationCodicelBeggining} div.codicel-consent-name-label .descriptive-term .item-key`,
                nameContent: `${vinculationCodicelBeggining} div.codicel-consent-name-label .descriptive-detail`,
                phoneLabel: `${vinculationCodicelBeggining} div.codicel-consent-phone-label .descriptive-term .item-key`,
                phoneContent: `${vinculationCodicelBeggining} div.codicel-consent-phone-label .descriptive-detail `,
                accountLabel: `${vinculationCodicelBeggining} div.codicel-consent-account-label .descriptive-term .item-key`,
                accountContent: `${vinculationCodicelBeggining} div.codicel-consent-account-label .descriptive-detail`,
                clabeLabel: `${vinculationCodicelBeggining} div.codicel-consent-clabe-label .descriptive-term .item-key`,
                clabeContent: `${vinculationCodicelBeggining} div.codicel-consent-clabe-label .descriptive-detail`,
                informationIconMessage: 'div.info-list div.info-message cells-icon-message-spherica[type="info"] iron-icon#principalIcon',
                informationMessage: 'div.info-list div.info-message cells-icon-message-spherica[type="info"] span#notInline',
                vinculateData: 'div.content div.info-list div.section-title',
                titleAndDescription: 'div.content div.info-list .descriptive-list',
                checkbox: 'cells-checkbox-button-spherica div#checkbox-container #checkbox',
                checkboxMarker: 'cells-checkbox-button-spherica div#checkbox-container #checkbox #icon-checked',
                checkboxText: 'cells-checkbox-button-spherica div.right-description p',
                acceptBtn: 'cells-confirm-buttons-spherica #primaryBtn',
                cancelBtn: 'cells-confirm-buttons-spherica #secondaryBtn',
                exitButton: '#btnRight cells-atom-icon-spherica',
                signConnector: CellsSignOperationModal
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'name label':
                await this.nameLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'name content':
                await this.nameContent.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'phone label':
                await this.phoneLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'phone content':
                await this.phoneContent.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'account label':
                await this.accountLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'account content':
                await this.accountContent.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'clabe label':
                await this.clabeLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'clabe content':
                await this.clabeContent.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'information icon message':
                await this.informationIconMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'information message':
                await this.informationMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'vinculate data':
                await this.vinculateData.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title and description':
                await this.titleAndDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'checkbox':
                await this.checkbox.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'checkbox marker':
                await this.checkboxMarker.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'checkbox text':
                await this.checkboxText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cancel button':
                await this.cancelBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal successes header':
                await this.dialogOperations.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal successes img':
                await this.dialogOperations.additionalElements.confirmIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal successes description':
                await this.dialogOperations.additionalElements.confirmDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal successes button quit':
                await this.dialogOperations.additionalElements.confirmCloseBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()){
            case 'help icon':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'hidden'});
                break;
            case 'vinculate icon':
                await this.dialogOperations.additionalElements.vinculateIcon.waitForDisplayed({timeout: config.wait.L, reverse: value.toLowerCase() === 'hidden'});
                break;
            case 'confirm vinculate icon':
                await this.dialogOperations.additionalElements.confirmVinculateIcon.waitForDisplayed({timeout: config.wait.L, reverse: value.toLowerCase() === 'hidden'});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async openHelpModal() {
        await this.checkbox.waitForClickable({timeout: config.wait.M});
        await this.checkbox.click();
    }

    async acceptHelpModal() {
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.waitForAnimation({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click();
    }

    async acceptVinculateDataModal() {
        await this.dialogOperations.additionalElements.vinculateButton.waitForClickable({timeout: config.wait.S});
        await this.dialogOperations.additionalElements.vinculateButton.click();
        await this.informationMessage.waitForDisplayed({timeout: config.wait.M});
    }

    async denyVinculateDataModal(value) {
        await this.dialogOperations.additionalElements.vinculateLaterButton.waitForClickable({timeout: config.wait.S});
        await this.dialogOperations.additionalElements.vinculateLaterButton.click();

        switch(value.toLowerCase()){
            case 'decides to':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'definitely':
                await this.finishOperation();
                break;
            case 'initially':
                await this.dialogOperations.additionalElements.denyVinculateLaterButton.waitForClickable({timeout: config.wait.M});
                await this.dialogOperations.additionalElements.denyVinculateLaterButton.click();
                break;
            default:
                throw new Error(` ${value} input case is invalid or doesn't exists`);
        }
    }

    async closeVinculationOperation(button) {
        switch(button.toLowerCase()){
            case 'x':
                await this.header.secondaryBtn.waitForClickable({timeout: config.wait.M});
                await this.header.secondaryBtn.click();
                await this.finishOperation();
                break;
            case 'cancel':
                await this.cancelBtn.waitForClickable({timeout: config.wait.M});
                await this.cancelBtn.click();
                await this.finishOperation();
                break;
            default:
                throw new Error(`Button ${button} not found`);
        }
    }

    async finishOperation() {
        await this.dialogOperations.additionalElements.confirmVinculateLaterButton.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.confirmVinculateLaterButton.click();
    }

    async checkVinculation() {
        await (await this.checkbox.waitForClickable({timeout: config.wait.M})).click();
    }

    async setOtpCodicel() {
        await (await (await this.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await this.fillOtp('11111111');
    }
}

export default new VinculationCodicel();
