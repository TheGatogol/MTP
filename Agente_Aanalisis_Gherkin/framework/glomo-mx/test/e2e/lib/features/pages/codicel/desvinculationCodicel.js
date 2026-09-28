import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class DesvinculationCodicel extends AbstractGlomoPage {
    constructor() {

        const desvinculationCodicelBeggining = 'div.info-list .descriptive-list div.item';

        super({
            root: '#cells-template-codicelAgreeAndRemoveConsent[state="active"]',

            elements: {
                header: CellsMoleculeHeaderSpherica,
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            helpIcon: '.paragraph-icon iron-icon',
                            helpInformation: 'p.paragraph-template-text',
                            desvinculateButton: 'button#acceptButton',
                            unsubscribeInformation: 'p.text-align-center.spacing',
                            confirmUnsubscribeIcon: 'div.paragraph-template iron-icon',
                            confirmUnsubscribeTitle: 'div.paragraph-template h2:not([style="display: none;"])',
                            confirmUnsubscribeDescription: 'p#description-label',
                            confirmUnsubscribeButton: 'button#acceptButton',
                            unsubscribeLaterButton: 'button#cancelButton',
                            closeBtn: 'button#closeButton',
                            imgDesvinculate: 'cells-bottom-modal-spherica div.icon-container img',
                            quitBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            confirmCloseBtn: 'cells-bottom-modal-spherica.full-height #closeButton'
                        }
                    }
                ],
                successScreen: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            imgDesvinculate: 'cells-bottom-modal div.icon-container img',
                            descriptions: 'div.paragraph-template p:not([style="display: none;"])',
                            quitBtn: 'div.buttons-container cells-st-button #acceptButton',
                            closeBtn: 'button#closeButton',
                            confirmCloseBtn: 'cells-bottom-modal-spherica.full-height #closeButton'
                        }
                    }
                ],

                title: 'div.content div.info-list div.section-title',
                nameLabel: `${desvinculationCodicelBeggining} div.codicel-consent-name-label .descriptive-term .item-key`,
                nameContent: `${desvinculationCodicelBeggining} div.codicel-consent-name-label .descriptive-detail`,
                phoneLabel: `${desvinculationCodicelBeggining} div.codicel-consent-phone-label .descriptive-term .item-key`,
                phoneContent: `${desvinculationCodicelBeggining} div.codicel-consent-phone-label .descriptive-detail`,
                accountLabel: `${desvinculationCodicelBeggining} div.codicel-consent-account-label .descriptive-term .item-key`,
                accountContent: `${desvinculationCodicelBeggining} div.codicel-consent-account-label .descriptive-detail`,
                clabeLabel: `${desvinculationCodicelBeggining} div.codicel-consent-clabe-label .descriptive-term .item-key`,
                clabeContent: `${desvinculationCodicelBeggining} div.codicel-consent-clabe-label .descriptive-detail`,
                informationIconMessage: 'div.info-list div.info-message cells-icon-message-spherica[type="info"] iron-icon#principalIcon',
                informationMessage: 'div.info-list div.info-message cells-icon-message-spherica[type="info"] span#notInline',
                vinculateData: 'div.content div.info-list div.section-title',
                titleAndDescription: 'div.content div.info-list .descriptive-list',
                checkbox: 'cells-checkbox-button-spherica div#checkbox-container #checkbox',
                checkboxMarker: 'cells-checkbox-button-spherica div#checkbox-container #checkbox #icon-checked',
                checkboxText: 'cells-checkbox-button-spherica div.right-description p',
                acceptBtn: 'cells-confirm-buttons-spherica #primaryBtn',
                cancelBtn: 'cells-confirm-buttons-spherica #secondaryBtn',
                signConnector: CellsSignOperationModalSpherica,
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
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
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal successes description':
                await this.dialogOperations.additionalElements.unsubscribeInformation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal successes button quit':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'help icon':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help information':
                await this.dialogOperations.additionalElements.helpInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help accept button':
                await this.dialogOperations.additionalElements.quitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'vinculate button':
                await this.dialogOperations.additionalElements.desvinculateButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.dialogOperations.templateParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm unsubscribe icon':
                await this.dialogOperations.additionalElements.confirmUnsubscribeIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm unsubscribe title':
                await this.dialogOperations.additionalElements.confirmUnsubscribeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm unsubscribe description':
                await this.dialogOperations.additionalElements.confirmUnsubscribeDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm unsubscribe button':
                await this.dialogOperations.additionalElements.confirmUnsubscribeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unsubscribe later button':
                await this.dialogOperations.additionalElements.unsubscribeLaterButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal desvinculate confirmation img':
                await this.successScreen.elementValidation({item: this.successScreen.CONTAINER_IMAGE});
                break;
            case 'modal desvinculate confirmation message':
                await this.successScreen.elementValidation({item: this.successScreen.MESSAGE});
                break;
            case 'modal desvinculate successes quit button':
                await this.dialogOperations.additionalElements.confirmCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async openHelpModal() {
        await this.checkbox.waitForClickable({timeout: config.wait.M});
        await this.checkbox.click();
    }

    async acceptHelpModal() {
        await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.S});
        await this.dialogOperations.acceptBtn.click();
    }

    async acceptDesvinculateDataModal() {
        await this.dialogOperations.additionalElements.confirmUnsubscribeButton.waitForClickable({timeout: config.wait.S});
        await this.dialogOperations.additionalElements.confirmUnsubscribeButton.click();
    }

    async denyDesvinculateDataModal(value) {
        switch (value.toLowerCase()) {
            case 'decides to':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'definitely':
                await this.finishOperation();
                break;
            default:
                throw new Error(` ${value} input case is invalid or doesn't exists`);
        }
    }

    async closeHelpModal(button) {
        switch (button) {
            case 'x':
                await (await this.dialogOperations.additionalElements.closeBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'continue':
                await this.acceptDesvinculateDataModal();
                break;
            default:
                throw new Error(`Button ${button} not found`);

        }
    }

    async finishOperation() {
        await this.dialogOperations.additionalElements.unsubscribeLaterButton.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.unsubscribeLaterButton.click();
    }

    async checkDesvinculation() {
        await (await this.checkbox.waitForClickable({timeout: config.wait.M})).click();
    }

    async confirmDesvinculation() {
        await (await (await this.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToModalSuccessDesvinculation() {
        await (await (await this.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await this.fillOtp('11111111');
    }

    async closeDesvinculationScreen(button) {
        switch (button.toLowerCase()) {
            case 'x':
                await (await this.successScreen.additionalElements.closeBtn.waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'button quit':
                await (await this.successScreen.additionalElements.confirmCloseBtn.waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`Button ${button} not found`);
        }
    }

    async loadDataInfo() {
        await this.informationMessage.waitForDisplayed({timeout: config.wait.M});
    }
}

export default new DesvinculationCodicel();
