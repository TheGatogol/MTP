import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsCardAdvice from '../../components/cells-card-advice';
import CellsProductItem from '../../components/cells-product-item';
import CellsIconMessage from '../../components/cells-icon-message';
import CellsStepPointsRaffle from '../../components/cells-step-points-raffle';
import CellsStepFormRadiosAmountSelect from '../../components/cells-step-form-radios-amount-select';
import CellsStepConditions from '../../components/cells-step-conditions';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';

const RADIO_BTN_LIST = {
    'total tickets': '0',
    'other quantity': '1'
};

@page()
class PointsRaffle extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsRaffle[state="active"]',
            elements: {

                participateBtn: '.buttons-container cells-st-button button',
                share: [
                    CellsStepFormRadiosAmountSelect,
                    {
                        args: {
                            root: `${CellsStepFormRadiosAmountSelect._baseRoot} #points-raffle-configuration-id`
                        }
                    }
                ],
                characteristics: '#points-raffle-origin-id #stepContainer div div.cells-step__header-main',
                header: CellsMoleculeHeader,
                cardAdvice: CellsCardAdvice,
                productItem: {
                    component: {
                        ComponentClass: CellsProductItem,
                        args: {
                            prefix: 'div.margin-quantity'
                        }
                    }
                },
                disclaimer: CellsIconMessage,
                stepPointsRaffle: CellsStepPointsRaffle,
                raffleSelect: CellsStepFormRadiosAmountSelect,
                conditions: CellsStepConditions,
                acceptButton: CellsConfirmButtons,

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
            case 'panel info':
                await this.waitForPanelInfo();
                break;
            case 'characteristics step without collapsing':
                await this.characteristicsStepUncollapsed();
                break;
            case 'characteristics step collapsed':
                await this.characteristicsStepCollapsed();
                break;
            case 'total tickets':
                await this.isEnabledRadioButton(value === 'disabled', 0);
                break;
            case 'other quantity':
                await this.isEnabledRadioButton(value === 'disabled', 1);
                break;
            case 'confirm tickets purchase':
                await this.confirmTicketsPurchased(value === 'disabled');
                break;
            case 'information error':
                await this.messageErrorAreaIsVisibility(value === 'not visible');
                break;
            case 'continue button':
                await this.acceptBtnIsEnabled(value === 'disabled');
                break;
            case 'confirm participation':
                await this.participateBtn.waitForClickable({timeout: config.wait.L});
                break;
            case 'PDF terms and conditions':
                await this.conditions.termsAndConditionsLink.message.waitForClickable({timeout: config.wait.L});
                break;
            case 'Check terms and conditions':
                await this.conditions.checkbox.waitForClickable({timeout: config.wait.L});
                break;
            case 'panel characteristics':
                await this.characteristics.waitForClickable({timeout: config.wait.L});
                break;
            case 'panel share':
                await this.share.title.waitForClickable({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async characteristicsStepUncollapsed() {
        await this.stepPointsRaffle.validateUnCollapedStep();
        await this.waitForProductItem();
        await this.disclaimer.waitForDisclaimer(0);
    }

    async characteristicsStepCollapsed() {
        await this.stepPointsRaffle.validateCollapsedStep();
    }

    async isEnabledRadioButton(reverse, index) {
        await this.raffleSelect.isEnabledRadioButton(reverse, index);
    }

    async confirmTicketsPurchased(reverse) {
        await this.raffleSelect.acceptBtnIsEnabled(reverse);
    }

    async purchaseSimulate(option) {
        await this.confirmParticipate();
        await this.confirmSelectedTickets(option);
        await this.confirmConditions();
    }

    async confirmParticipate() {
        await this.participateBtn.waitForDisplayed({timeout: config.wait.M});
        await this.participateBtn.waitForClickable({timeout: config.wait.L});
        await this.participateBtn.click();

    }

    async selectTickets(option) {
        await this.raffleSelect.selectRadioBtn(RADIO_BTN_LIST[option]);
    }

    async insertAmount(amount) {
        await this.raffleSelect.insertAmount(amount);
    }

    async messageErrorAreaIsVisibility(reverse) {
        await this.raffleSelect.messageErrorAreaIsVisibility(reverse);
    }

    async acceptBtnIsEnabled(reverse) {
        await this.raffleSelect.acceptBtnIsEnabled(reverse);
    }

    async retryModal() {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
    }

    async confirmPointsRedemption() {
        await this.acceptButton.confirmAction();
    }

    async confirmSelectedTickets(option) {
        await this.selectTickets(option);
        await this.raffleSelect.continueOperation();
    }

    async closeOperative() {
        await this.header.actionRight();
    }
    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'call button':
            case 'retry button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'exit button':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async waitForProductItem() {
        await this.productItem.itemLabel.waitForDisplayed();
        await this.productItem.image.waitForDisplayed();
        await this.productItem.alias.waitForDisplayed();
        await this.productItem.primaryAmount.currency.waitForDisplayed();
        await this.productItem.amountLabel.waitForDisplayed();
    }

    async waitForPanelInfo() {
        await this.cardAdvice.image.waitForDisplayed({timeout: config.wait.M});
        await this.cardAdvice.text.waitForDisplayed({timeout: config.wait.M});
        await this.cardAdvice.link.waitForDisplayed({timeout: config.wait.M});
    }

    async checkWithoutDecimals(value) {
        await this.raffleSelect.checkWithoutDecimals(value);

    }

    async accessFaqs() {
        await this.header.secondaryAction();
    }

    async confirmConditions() {
        await this.conditions.confirmConditions();
    }

    async consultPrizesAndRules() {
        await this.stepPointsRaffle.prizesAndRulesLink.message.scrollIntoView();
        await this.stepPointsRaffle.prizesAndRulesLink.message.click();
    }

    async consultTermsAndConditions() {
        await this.conditions.termsAndConditionsLink.message.scrollIntoView();
        await this.conditions.termsAndConditionsLink.message.click();
    }

    async consultTerms() {
        await this.conditions.changeConditions.click();
    }

    async changePoints() {
        await this.raffleSelect.showPointsToTransfer();
    }

    async insertAmountPoints(amount) {
        await this.raffleSelect.otherPoints();
        await this.insertAmount(amount);
        await this.raffleSelect.continueOperation();
    }

    async insertAmountPointsInvalidate(amount) {
        await this.raffleSelect.otherPoints();
        await this.insertAmount(amount);
    }

}

export default new PointsRaffle();
