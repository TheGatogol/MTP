import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class ClarificationsManagementCarePage extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'clarificationsManagementCarePage',
            root: '#cells-template-clarificationsManagementCarePage[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                movementHeader: 'cells-step-card-offer-page #cardsOfferPageStepContainer div:nth-child(1) div span.cells-step-card-offer-page-collapsed-txt__amount',
                claimAmount: 'cells-step-card-offer-page.collapsed-divider-hidden.cells-step-container #cardsOfferPageStepContainer div:nth-child(1) div.filled cells-atom-amount.negative',
                claimDate: 'cells-step-card-offer-page #cardsOfferPageStepContainer div:nth-child(1) div cells-icon-message #notInline',
                stepTitle: 'cells-step-radio-buttons:nth-child(5) #stepContainer div div h2',
                stepDescriptionReportingReason: 'cells-step-radio-buttons:nth-child(5) #stepContainer div:nth-child(2) div div p',
                unauthorizedPayment: 'cells-step-radio-buttons cells-step div[slot="full"] div.full cells-radio-group cells-radio-button-description.first-step-not-authorized cells-radio-button div.container div.radio',
                commerceProblem: 'cells-step-radio-buttons:nth-child(5) #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(3) div.cells-radio-button-description-title-container div cells-radio-button #radio',
                continueButtonReportingReason: 'cells-step-radio-buttons:nth-child(5) #continueButton',
                unauthorizedPaymentDescription: 'cells-step-radio-buttons:nth-child(5) #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(1) div.cells-radio-button-description--description p',
                stolenLostDescription: 'cells-step-radio-buttons:nth-child(5) #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(3) div.cells-radio-button-description--description p',
                commerceProblemDetail: 'cells-step-radio-buttons:nth-child(5) #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(5) div.cells-radio-button-description--description p',
                infoBoxGeolocation: 'cells-step-radio-buttons:nth-child(5) #stepContainer div div.full cells-icon-message-change-data.step-radio-buttons__icon-message cells-icon-message',
                continueButtonAttentionType: 'cells-step-radio-buttons:nth-child(6) #continueButton',
                titleAttentionType: 'cells-step-radio-buttons:nth-child(6) #stepContainer div div h2.cells-step__header-title',
                stepDescriptionAttentionType: 'cells-step-radio-buttons:nth-child(6) #stepContainer div:nth-child(2) div div p.cells-step-radio-buttons__description',
                onlyClarificationDescription: 'cells-step-radio-buttons:nth-child(6) #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description div.cells-radio-button-description--description p.cells-radio-button-description--description__text',
                clarificationPayment: 'cells-step-radio-buttons:nth-child(6) #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(1) div.cells-radio-button-description-title-container div cells-radio-button',
                startClarification: '#cells-template-clarificationsManagementCarePage > cells-step-radio-buttons:nth-child(6) #stepContainer > div:nth-child(2) > div > cells-radio-group > cells-radio-button-description:nth-child(3) div.cells-radio-button-description-title-container > div > cells-radio-button',
                amount: 'cells-summary-view #operationTotal cells-atom-amount.amount-huge-decimals.cells-summary-view--quantity span.amount-wrapper',
                summaryTitle: 'cells-summary-view #operationTotal p.cells-summary-view--title',
                continueButtonSummaryView: 'cells-summary-view #collapser  cells-st-button.primary.size-m.cells-summary-view--submit-button button',
                tooltip: 'cells-summary-view #operationTotal p.cells-summary-view--commission cells-st-button button cells-atom-icon iron-icon',

                stolenRadioButton: 'cells-step-radio-buttons cells-step div[slot="full"] div.full cells-radio-group cells-radio-button-description.first-step-stolen cells-radio-button div.container div.radio',
                lostRadioButton: 'cells-step-radio-buttons cells-step div[slot="full"] div.full cells-radio-group cells-radio-button-description.first-step-lost cells-radio-button div.container div.radio',

                stepTitleBlockPayment: 'cells-step-conditions:nth-child(7) #stepContainer div div h2',
                stepDescriptionBlockPayment: 'cells-step-conditions:nth-child(7) #stepContainer div.full div.subTitle span',
                stepComerceBlockPayment: 'cells-step-conditions:nth-child(7) #stepContainer div.full div.product-data',
                stepInfoBoxBlockPayment: 'cells-step-conditions:nth-child(7) #stepContainer div.full div.reverse-content div.message.spacing-message cells-icon-message',
                stepCheckBlockPayment: 'cells-checkbox-button[aria-label="Autorizo el bloqueo permanente del cargo recurrente"]',
                stepCheckBlockDirectDebit: 'cells-step-conditions:nth-child(7) #checkButton #checkbox',
                stepContinueButtonBlockPayment: 'cells-step-conditions:nth-child(7) #continueBtn',

                stepTitleBlockCard: 'cells-step-conditions.message.spacing-message.cells-step-container #stepContainer div div h2',
                stepDescriptionBlockCard: 'cells-step-conditions.message.spacing-message.cells-step-container #stepContainer div.full div.subTitle span',
                stepProductBlockCard: 'cells-step-conditions.message.spacing-message.cells-step-container #stepContainer div.full div.product-card cells-product-item',
                stepConditionListBlockCard: 'cells-step-conditions.message.spacing-message.cells-step-container #list',
                stepCheckBlockCard: 'cells-step-conditions.message.spacing-message.cells-step-container #checkButton #checkbox',
                stepContinueButtonBlockCard: 'cells-step-conditions.message.spacing-message.cells-step-container #continueBtn',

                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            modalMessage: '#modal div div.paragraph-template div.icon-message-container',
                            callLineButton: '#modal #acceptButton',
                            goMovementButton: '#modal #modal div.buttons-container cells-st-button.btn.link.tertiary.btn--l'
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement':
                await this.movementHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'claim amount':
                await this.claimAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'claim date':
                await this.claimDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step':
                await this.stepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step description reporting reason':
                await this.stepDescriptionReportingReason.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unauthorized payment option':
                await this.unauthorizedPaymentDescription.waitForDisplayed({timeout: config.wait.L});
                await this.unauthorizedPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'stolen card option':
                await this.stolenLostDescription.waitForDisplayed({timeout: config.wait.M});
                await this.stolenRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'lost card option':
                await this.lostRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'commerce problem option':
                await this.commerceProblemDetail.waitForDisplayed({timeout: config.wait.M});
                await this.commerceProblem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info box geolocation':
                await this.infoBoxGeolocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButtonReportingReason.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step title':
                await this.titleAttentionType.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'step description attention type':
                await this.stepDescriptionAttentionType.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'clarification payment attention type':
                await this.onlyClarificationDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'start clarifications attention type':
                await this.startClarification.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary title':
                await this.summaryTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'provisional payment tooltip info':
                await this.tooltip.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title block payment':
                await this.stepTitleBlockPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description block payment':
                await this.stepDescriptionBlockPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'comerce block payment':
                await this.stepComerceBlockPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info box block payment':
                await this.stepInfoBoxBlockPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'check block payment':
                await this.stepCheckBlockPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button block payment':
                await this.stepContinueButtonBlockPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title block card':
                await this.stepTitleBlockCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description block card':
                await this.stepDescriptionBlockCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'product block card':
                await this.stepProductBlockCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'condition list block card':
                await this.stepConditionListBlockCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'check block card':
                await this.stepCheckBlockCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button block card':
                await this.stepContinueButtonBlockCard.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'hero image':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HERO_IMAGE});
                break;
            case 'modal message':
                await this.dialogOperations.additionalElements.modalMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call line button':
                await this.dialogOperations.additionalElements.callLineButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'go movement button':
                await this.dialogOperations.additionalElements.goMovementButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async clarificationsReason(clarificationReason) {
        await this.selectRadioButton(clarificationReason);
        await this.continueButtonReportingReason.waitForClickable({timeout: config.wait.L});
        await this.continueButtonReportingReason.click();
    }

    async selectRadioButton(clarificationReason){

        if (clarificationReason === 'unauthorized payment') {
            await this.unauthorizedPayment.waitForClickable({timeout: config.wait.L});
            await this.unauthorizedPayment.click();
        } else if (clarificationReason === 'card stolen') {
            await this.stolenRadioButton.waitForClickable({timeout: config.wait.M});
            await this.stolenRadioButton.click();
        } else if (clarificationReason === 'card lost') {
            await this.lostRadioButton.waitForClickable({timeout: config.wait.M});
            await this.lostRadioButton.click();
        } else {
            await this.commerceProblem.waitForClickable({timeout: config.wait.M});
            await this.commerceProblem.click();
        }
    }

    async attentionType(attentionType) {
        if(attentionType === 'request refund') {
            await this.clarificationPayment.waitForClickable({timeout: config.wait.L});
            await this.clarificationPayment.click();
        } else if (attentionType === 'init clarification'){
            await this.startClarification.waitForClickable({timeout: config.wait.L});
            await this.startClarification.click();
        }
        await this.continueButtonAttentionType.waitForClickable({timeout: config.wait.L});
        await this.continueButtonAttentionType.click({timeout: config.wait.L});
    }

    async confirmClarifications(blockType) {
        await this.continueButtonSummaryView.waitForClickable({timeout: config.wait.L});
        await this.continueButtonSummaryView.click();
        if (blockType === 'card and payment' || blockType === 'payment' || blockType === 'direct debit') {
            await this.fillOtp('69074593');
        }
    }

    async tapProvisionalPaymentTooltip() {
        await this.tooltip.waitForClickable({timeout: config.wait.L});
        await this.tooltip.click();
    }

    async blockPaymentAccept(blockType) {
        const checkBoxBlockPayment = blockType.includes('direct debit') ? this.stepCheckBlockDirectDebit : this.stepCheckBlockPayment;
        await checkBoxBlockPayment.waitForDisplayed({timeout: config.wait.M});
        await checkBoxBlockPayment.click();
        await this.stepContinueButtonBlockPayment.waitForClickable({timeout: config.wait.L});
        await this.stepContinueButtonBlockPayment.click();
    }

    async blockCardAccept() {
        await this.stepCheckBlockCard.waitForClickable({timeout: config.wait.L});
        await this.stepCheckBlockCard.click();
        await this.stepContinueButtonBlockCard.waitForClickable({timeout: config.wait.L});
        await this.stepContinueButtonBlockCard.click();
    }
}

export default new ClarificationsManagementCarePage();
