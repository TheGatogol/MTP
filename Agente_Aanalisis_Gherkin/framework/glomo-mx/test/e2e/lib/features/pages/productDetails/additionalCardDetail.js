import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class AdditionalCardDetail extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-additionalCardDetail[state="active"]',
            elements: {
                title: '#return-main-additional-card #heading #text',
                adviceTooltip: '#adviceToolTip',
                // Card description
                quickControlBar: '.container-main #onOffBtn',
                card: {
                    properties: {
                        root: '[class="dynamic-card "]'
                    },
                    blockedSecurityModule: '[text="bbva-feature-product-detail-cards-mx-card-details-panel-status-status-blocked"]',
                    inactiveSecurityModule: '[text="bbva-feature-product-detail-cards-mx-card-details-panel-status-status-pending-to-active"]',
                    operativeSecurityModule: '[text="bbva-feature-product-detail-cards-mx-card-details-panel-status-status-off"]',
                    expiredSecurityModule: '[text="bbva-feature-product-detail-cards-mx-card-details-panel-status-status-expired"]',
                    creditLimitExceededSecurityModule: '.progress-bar-fill',
                },

                modalError: '.notification-error-message [role="alert"]',
                //quick controls
                onOffButton: '#onOffBtn [class="rounded-icon "]',
                offOnButton: '#onOffBtn [class="rounded-icon off-card"]',
                closeOffOnModal: '#helpModalHeader[text^="bbva-feature-product-detail-cards-"][text$="-card-modal-header"] #btn-close',
                digitalBtn: '.link-right [data-tag-name="bbva-type-link"]',
                editAvailableCreditLimit: '.label-container [text="bbva-feature-product-detail-cards-mx-operation-edit-available-credit-limit"]',
                disableEditAvailableCreditLimit: '#buttonRowFeatured',
                nipNumber: '.label-container [text="bbva-feature-product-detail-cards-mx-operation-show-pin"]',
                viewMore: '.label-container [text="bbva-feature-product-detail-cards-mx-operation-view-more"]',
                blockAndReplacement: '.operation-list #buttonRowFeatured [text^="bbva-feature-product-detail-cards-mx-operation-block"]',
                cardImage: '[class="clip-card-container card-close"]',
                modalAlert: [BbvaHelpModal, { modifiers: ':not([id-modal])' }],
                errorModalAlert: GlomoAlertManager,
                infoModal: 'div.information-modal [data-tag-name="bbva-help-modal"] .modal-footer [data-tag-name="bbva-button-default"]',
                greenToast: '[data-tag-name="bbva-notification-container"] [data-tag-name="bbva-notification-toast"]',
                signConnector: CellsSignOperationModal,
                nipNumberLink: '[data-tag-name="bbva-transition-container"] bbva-type-link#nipNumbers',
                operationsModule: '.operation-list',
                viewMoreIcon: '.label-container [text="bbva-feature-product-detail-cards-mx-operation-view-more"]',
                //Movements
                lastMovements: '[data-tag-name="card-information-transactions-list-searching-enrichment-cards-mx"]',
                movement: '.main-view-container .cards-container [data-tag-name="card-information-transactions-list-searching-enrichment-card"][item="item-0"]',
                currentMovementsToCategories:'#current',
                categories: '[id="por categoría"]',
                //Additional card screen validation elements
                header: '#return-main-additional-card .header #heading',
                cardNumber: '[class="card-number-floating "] [alignment="left"] p.text',
                availableBalanceLabelDc: '.amount-wrapper [text="bbva-feature-product-detail-cards-mx-card-details-panel-disposed-balance"]',
                availableBalanceAmountDc: '.row [text="bbva-feature-product-detail-cards-mx-card-details-panel-current-balances"]',
                availableBalanceLabelAdd: '[data-tag-name="card-detail"] [data-tag-name="card-panel-details"] .main-container [text="bbva-feature-product-detail-cards-mx-card-details-panel-disposed-balance"]',
                availableBalanceAmountAdd: '[data-tag-name="card-detail"] [data-tag-name="card-panel-details"] .main-container [text="bbva-feature-product-detail-cards-mx-card-details-panel-current-balances"]',
                switchActionButtonAdditionalCreditCard: '#onOffBtn',

            },
            elementsSpherica: {
                signConnector: CellsSignOperationModalSpherica,
            },
            requiredElements: [
                'title'
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'operative additional security module':
                await this.card.operativeSecurityModule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'blocked additional security module':
                await this.card.blockedSecurityModule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'expired additional security module':
                await this.card.expiredSecurityModule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'inactive additional security module':
                await this.card.inactiveSecurityModule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'credit limit exceeded additional security module':
                await this.card.creditLimitExceededSecurityModule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'credit module':
                await this.creditModule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'clip card error':
                await this.modalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit credit limits':
                await this.disableEditAvailableCreditLimit.waitForDisplayed({
                    reverse: value === 'visible',
                    timeout: config.wait.M,
                });
                break;
            case 'switch on':
                if (value.toLowerCase() === 'disable') {
                    await this.offOnButton.waitForEnabled({timeout: config.wait.M, reverse: true});
                } else if (value.toLowerCase() === 'invisible') {
                    await this.offOnButton.waitForDisplayed({timeout: config.wait.M, reverse: true});
                } else {
                    await this.offOnButton.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'switch off':
                if (value.toLowerCase() === 'disable') {
                    await this.onOffButton.waitForEnabled({timeout: config.wait.M, reverse: true});
                } else if (value.toLowerCase() === 'invisible') {
                    await this.onOffButton.waitForDisplayed({timeout:config.wait.M, reverse: true});
                } else {
                    await this.onOffButton.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'help label':
            case 'exit link':
            case 'turn on link':
                await this.dialogOperations.acceptBtn.scrollIntoView();
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful green toast':
                await this.greenToast.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'digital purchase':
                await this.digitalBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card image':
                await this.cardImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'last movements':
                await this.lastMovements.scrollIntoView();
                await this.lastMovements.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'current movements categories':
                await this.currentMovementsToCategories.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'previous movements categories':
                await this.currentMovementsToCategories.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'last movements categories':
                await this.currentMovementsToCategories.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'pan number':
                if (value.toLowerCase() !== 'enable') {
                    await this.cardNumber.waitForNotDisplayed;
                } else {
                    await this.cardNumber.waitForDisplayed({timeout: config.wait.S});
                }
                break;
            case 'current available amount label':
                await this.availableBalanceLabelDc.waitForDisplayed({timeout: config.wait.M, reverse: value === 'invisible'});
                break;
            case 'current available balance amount':
                await this.availableBalanceAmountDc.waitForDisplayed({timeout: config.wait.M, reverse: value === 'invisible'});
                break;
            case 'additional available amount label':
                await this.availableBalanceLabelAdd.waitForDisplayed({timeout: config.wait.M, reverse: value === 'invisible'});
                break;
            case 'additional available balance amount':
                await this.availableBalanceAmountAdd.waitForDisplayed({timeout: config.wait.M, reverse: value === 'invisible'});
                break;
            case 'switch additional credit card':
                await this.switchActionButtonAdditionalCreditCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal':
                await this.modalAlert.elementValidation({item: this.modalAlert.CLOSE_BUTTON});
                break;
            case 'edit credit limits information':
                await this.errorModalAlert.elementValidation({item: this.errorModalAlert.DESCRIPTION});
                break;
            case 'digital purchase title':
                await this.modalAlert.elementValidation({item: this.modalAlert.HEADER});
                break;
            case 'digital purchase info':
                await this.modalAlert.elementValidation({item: this.modalAlert.CONTAINER_ICON});
                break;
            case 'cancel modal':
                await this.modalAlert.elementValidation({item: this.modalAlert.CANCEL_BUTTON});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeToolTip() {
        if (await this.adviceTooltip.isDisplayed()) {
            await (await this.adviceTooltip.waitForDisplayed({timeout: config.wait.XXL})).click();
        }
    }

    async closeOperative() {
        await this.dialogOperations.confirmDialog({isConfirmed: false});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async onOffSwitchAdditional(onOff, state) {
        await this.quickControlBar.waitForDisplayed({timeout: config.wait.M});
        await this.quickControlBar.waitForClickable({timeout: config.wait.M});
        switch (onOff.toLowerCase()) {
            case 'off':
                await this.onOffButton.waitForClickable({timeout: config.wait.L});
                await this.onOffButton.click();
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
                if (state === 'successfully') {
                    await this.continueProcess();
                }
                break;
            case 'on':
                await this.offOnButton.waitForClickable({timeout: config.wait.L});
                await this.offOnButton.click();
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
                if (state === 'successfully') {
                    await this.continueProcess();
                }
                break;
            default:
                throw new Error('Switch on/off is not visible at the moment. Verify services status');
        }
    }

    async continueProcess() {
        await this.modalAlert.acceptBtn.waitForDisplayed({timeout:config.wait.S});
        await this.modalAlert.acceptBtn.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async editLimitOperative() {
        await this.editAvailableCreditLimit.waitForEnabled({timeout: config.wait.L});
        await this.editAvailableCreditLimit.waitForClickable({timeout: config.wait.L});
        await this.editAvailableCreditLimit.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async retryModal(times) {
        let i = 0;
        while (i < times) {
            await Commands.pause({time: config.wait.S});
            await this.dialogOperations.waitForDisplayed({timeout: config.wait.XXL});
            await this.dialogOperations.acceptBtn.click();
            i++;
        }
    }

    async accessToDigitalPurchase() {
        await this.adviceTooltip.waitForDisplayed({timeout: config.wait.M});
        await this.adviceTooltip.click();
        await (await (await (await this.digitalBtn.waitForDisplayed({timeout: config.wait.XXL}))
            .waitForAnimation({timeout: config.wait.M}))
            .waitForEnabled({timeout: config.wait.M}))
            .click();
    }

    async accessToDetailMovement() {
        await (await this.movement.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async activateDigitalPurchase(flag) {
        await this.accessToDigitalPurchase();
        await this.infoModal.waitForDisplayed({timeout: config.wait.M});
        await this.infoModal.click();
        await this.signConnector.isLoaded();
        if(flag) {
            await this.signConnector.setPassword(11111111);
            await this.signConnector.confirmPassword();
        }
    }

    async cancelOTPDigitalPurchase(action, flag) {
        await this.activateDigitalPurchase(flag);
        switch(action) {
            case 'cancel button':
                (flag)?await this.dialogOperations.closeDialog():
                    await this.signConnector.closeModal();
                break;
            case 'x icon':
                (flag)?await this.dialogOperations.confirmDialog({isConfirmed:false}):
                    await this.signConnector.closeModalIcon();
                break;
            default:
                throw new Error(`The ${action} action is not implemented.`);
        }
    }

    async closeSuccessScreen() {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
    }

    async accessToCategoriesAdditional(){
        await this.categories.waitForDisplayed({timeout: config.wait.L});
        await this.categories.click();
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            // In our screen, exit button is the same as the "accept button"
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'edit credit limits information':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'digital purchase title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'digital purchase info':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CONTAINER_ICON});
                break;
            case 'cancel button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async blockAndReplacementOperative() {
        await (await (await this.blockAndReplacement.waitForEnabled({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async viewCardNip() {
        await (await this.nipNumberLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async showMoreActions() {
        await (await this.viewMore.waitForClickable({timeout: config.wait.M})).click();
    }

    async closeModal(){
        await this.closeOffOnModal.waitForDisplayed({timeout: config.wait.M});
        await this.closeOffOnModal.click();
    }

    async viewMoreOperatives() {
        await this.operationsModule.waitForEnabled({timeout: config.wait.M});
        await (await this.viewMoreIcon.waitForClickable({timeout: config.wait.M}))
            .click();
    }

}

export default new AdditionalCardDetail();
