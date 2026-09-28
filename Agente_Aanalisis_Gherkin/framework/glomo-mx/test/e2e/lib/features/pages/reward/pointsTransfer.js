import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import CellsStepFormRadiosAmountSelectSpherica from '../../components/cells-step-form-radios-amount-select-spherica';
import CellsStepProductSelectorSpherica from '../../components/cells-step-product-selector-spherica';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsStepRecipientSelectorSpherica from '../../components/cells-step-recipient-selector-spherica';
import CellsConfirmButtonsSpherica from '../../components/cells-confirm-buttons-spherica';

const RADIO_BTN_LIST = {
    'total points': '0',
    'another amount of points': '1'
};

@page()
class PointsTransfer extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsTransfer[state="active"]',
            elements: {
                otherAmountOfPoints:'#cells-template-pointsTransfer > cells-step-form-radios-amount-select-spherica #radioGroup > cells-radio-button-spherica:nth-child(2) #radio',
                acceptButton: {
                    component: {
                        ComponentClass: CellsConfirmButtonsSpherica
                    }
                },
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                formRadiosAmountSelect: {
                    component: {
                        ComponentClass: CellsStepFormRadiosAmountSelectSpherica
                    }
                },
                sourceCard: {
                    component: {
                        ComponentClass: CellsStepProductSelectorSpherica
                    }
                },
                cardRecipientSelector: {
                    component: {
                        ComponentClass: CellsStepRecipientSelectorSpherica
                    }
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'source card information':
                await this.sourceCard.validateStepCollapsed();
                break;
            case 'target card collapsed step':
                await this.cardRecipientSelector.validatePayCardCollapsed(false);
                break;
            case 'target card change button':
                await this.changeBtnVisibility(value !== '');
                break;
            case 'points transfer collapsed step':
                await this.formRadiosAmountSelect.validateStepCollapsed();
                break;
            case 'all cards link':
                await this.allCardsLinkVisibility(value !== '');
                break;
            case 'input area':
                await this.validateInputArea();
                break;
            case 'points information disclaimer':
                await this.validatePointsDisclaimer();
                break;
            case 'information error':
                await this.messageErrorAreaIsVisibility(value !== '');
                break;
            case 'continue button':
                await this.acceptBtnIsEnabled(value !== '');
                break;
            case 'points transfer area':
                await this.validatePointsTransferArea(value);
                break;
            case 'confirm button':
                await this.acceptButton.canConfirm();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }
    async confirmPointsTransfer() {
        await this.acceptButton.confirmAction();
    }

    async allCardsLinkVisibility(reverse) {
        await this.cardRecipientSelector.allCardsLinkVisibility(reverse);
    }

    async goToMyBbvaCards() {
        await this.cardRecipientSelector.showAllMyBbvaCards();
    }

    async selectTargetCard() {
        await this.cardRecipientSelector.selectFirstTargetCard();
    }

    async changeBtnVisibility(reverse) {
        await this.cardRecipientSelector.changeBtnVisibility(reverse);
    }

    async validateInputArea() {
        await this.formRadiosAmountSelect.validateInputArea();
    }

    async validatePointsDisclaimer() {
        await this.formRadiosAmountSelect.validateDisclaimer();
    }

    async acceptBtnIsEnabled(reverse) {
        await this.formRadiosAmountSelect.acceptBtnIsEnabled(reverse);
    }

    async selectPointsType(pointsType) {
        await this.formRadiosAmountSelect.selectRadioBtn(RADIO_BTN_LIST[pointsType]);
    }

    async insertAmount(amount) {
        await this.formRadiosAmountSelect.insertAmount(amount);
    }

    async messageErrorAreaIsVisibility(reverse) {
        await this.formRadiosAmountSelect.messageErrorAreaIsVisibility(reverse);
    }

    async multiStepChangeOption(step) {
        switch (step.toLowerCase()) {
            case 'target card':
                logger.debug(`Click in the ${step} change button`);
                await this.cardRecipientSelector.showChangeCard();
                break;
            case 'points to transfer':
                logger.debug(`Click in the ${step} change button`);
                await this.formRadiosAmountSelect.showPointsToTransfer();
                break;
            default:
                throw new Error(`Step option must be "target card" or "points to transfer", received: ${step}`);
        }
    }

    async sectionTargetCardChange() {
        await this.cardRecipientSelector.sectionTargetCardChange();
    }

    async confirmChangeCard() {
        await this.cardRecipientSelector.confirmChangeCard();
    }

    async keepChangeCard() {
        await this.cardRecipientSelector.keepChangeCard();
    }

    async areaConfigurationIsEnabled(reverse) {
        await this.formRadiosAmountSelect.areaConfigurationIsEnabled(reverse);
    }

    async validatePointsTransferArea(value) {
        if (value === 'disabled') {
            await this.formRadiosAmountSelect.areaRadioBtn.waitForDisplayed({timeout: config.wait.M, reverse: true});
            return;
        }
        await this.areaConfigurationIsEnabled(false);
    }

    async closeOperative() {
        await this.header.actionRight();
    }

    async confirmPoints() {
        await this.formRadiosAmountSelect.confirmPoints();
    }

    async confirmSpecificPoints(amount) {
        await this.selectPointsType('another amount of points');
        await this.insertAmount(amount);
        await this.confirmPoints();
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal cam be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.PARAGRAPH_ICON});
                break;
            case 'title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async retryOperative(time) {
        let i = 0;
        while (i < time) {
            await this.dialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }

}

export default new PointsTransfer();
