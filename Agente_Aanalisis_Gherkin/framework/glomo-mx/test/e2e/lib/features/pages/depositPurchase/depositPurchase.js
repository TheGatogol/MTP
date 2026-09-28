import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import glomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class DepositPurchase extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'DepositPurchase',
            root: '#cells-template-depositsPurchase[state="active"]',
            elements: {
                titleDepositPurchase: 'cells-molecule-header-spherica',
                btnHelpGat: '.deposit-puchase-wrapper:not(.last-deposit-wrapper) cells-atom-icon-spherica.additional-tax-icon',
                btnHelpInstruction: '[id="0"]',
                btnContainer: 'div.buttons-container',
                btnSimulation: '#deposits-next-button',
                radioRenovation: '#radio',
                btnContinueProcess: '#continueButton',
                inputOtp: '#user-input-pwd',
                glomoOperativeInfo: '.cells-step-container #stepContainer .cells-step__header',
                moleculeAmount: '.cells-step-container #step-input-message-limited-amount',
                btnContinueotp: 'cells-summary-view-spherica.deposit-purchase div#collapser cells-st-button-spherica.positive.full button',
                instructionsStep: {
                    firstInfoBtn: 'cells-radio-button-description-spherica[data-selector="radio_button_0"] .cells-radio-button-description-title-container__row cells-atom-icon-spherica',
                    secondInfoBtn: 'cells-radio-button-description-spherica[data-selector="radio_button_1"] .cells-radio-button-description-title-container__row cells-atom-icon-spherica',
                    thirdInfoBtn: 'cells-radio-button-description-spherica[data-selector="radio_button_2"] .cells-radio-button-description-title-container__row cells-atom-icon-spherica',
                    outOfHoursContainer: 'cells-step-radio-buttons-spherica #stepContainer div:nth-child(1) div cells-icon-message-spherica',
                    outOfHoursText: 'cells-step-radio-buttons-spherica #stepContainer div:nth-child(1) div cells-icon-message-spherica #notInline'
                },
                dialogOperations: [
                    glomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            heroImage: '.main-container .icon-container cells-atom-icon-spherica'
                        },
                    }
                ],
                btnRadioBtn: 'cells-radio-button-description-spherica[data-selector="radio_button_1"] .cells-radio-button-description-title-container__row cells-radio-button-spherica',
                headerRadioBtn: 'cells-step-radio-buttons-spherica #stepContainer .cells-step__header',
                radioGroup: 'cells-step-radio-buttons-spherica #stepContainer .full .description-text cells-radio-group-spherica',
                sliderElements: {
                    offerSlider: '.cells-step-container #stepContainer .offer__slider',
                    inputSlider: '.cells-step-container #stepContainer .offer__slider cells-input-slider-spherica',
                    radioGroupSlider: '.cells-step-container #stepContainer .radio-group'
                },
                appliedPromotionSummary: {
                    textPromotion: '.cells-step-container cells-key-values-spherica.cupon-applied cells-icon-message-spherica.message-input',
                    iconPromotion: '.cells-step-container cells-key-values-spherica.cupon-applied cells-icon-message-spherica.message-input #principalIcon'
                }
            },
            requiredElements: [
                'titleDepositPurchase',
            ],
        });
    }

    async helpSimulateInfo() {
        await this.btnHelpGat.scrollIntoView({block: 'start'});
        await this.btnHelpGat.waitForClickable({timeout: config.wait.M});
        await this.btnHelpGat.click();
    }

    async helpRadioInfo() {
        await this.btnHelpInstruction.waitForClickable({timeout: config.wait.M});
        await this.btnHelpInstruction.click();
    }

    async continueSimulate() {
        await this.btnContainer.scrollIntoView({block: 'end'});
        await this.btnSimulation.waitForAnimation({timeout: config.wait.L});
        await this.btnSimulation.waitForClickable({timeout: config.wait.L});
        await this.btnSimulation.click();
    }

    async continueSimulateForOtp() {
        await this.btnSimulation.waitForAnimation({timeout: config.wait.M});
        await this.btnContainer.scrollIntoView({block: 'end'});
        await this.btnSimulation.waitForDisplayed({timeout: config.wait.L});
        await this.btnSimulation.click();
    }

    async continueInstruction() {
        await this.btnContinueProcess.waitForClickable({timeout: config.wait.M});
        await this.btnContinueProcess.click();
        await this.btnContinueotp.scrollIntoView({block: 'start'});
        await this.btnContinueotp.click();
    }

    async outOfTime() {
        await this.instructionsStep.outOfHoursContainer.waitForDisplayed({timeout: config.wait.M});
        await this.instructionsStep.outOfHoursContainer.scrollIntoView({block: 'start'});
    }

    async continueWithoutOtp() {
        await this.btnContinueProcess.waitForClickable({timeout: config.wait.M});
        await this.btnContinueProcess.click();
        await this.outOfTime();
    }

    async continueInvestmentRenewalWithEarningsModal() {
        await this.instructionsStep.firstInfoBtn.scrollIntoView({block: 'start'});
        await this.instructionsStep.firstInfoBtn.waitForDisplayed({timeout: config.wait.M});
        await this.instructionsStep.firstInfoBtn.click();
        await this.dialogOperations.confirmDialog();
    }

    async continueInvestmentRenewalWithoutEarningsModal() {
        await this.instructionsStep.secondInfoBtn.scrollIntoView({block: 'start'});
        await this.instructionsStep.secondInfoBtn.waitForDisplayed({timeout: config.wait.M});
        await this.instructionsStep.secondInfoBtn.click();
        await this.dialogOperations.confirmDialog();
    }

    async investmentRenewalWithEarningsOption() {
        await this.instructionsStep.thirdInfoBtn.scrollIntoView({block: 'start'});
        await this.instructionsStep.thirdInfoBtn.waitForDisplayed({timeout: config.wait.M});
        await this.instructionsStep.thirdInfoBtn.click();
        await this.dialogOperations.confirmDialog();
    }

    async accessesToInstructionModal() {
        await this.continueInvestmentRenewalWithEarningsModal();
        await this.continueInvestmentRenewalWithoutEarningsModal();
        await this.investmentRenewalWithEarningsOption();
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({ item: this.dialogOperations.HEADER }, { forceScroll: true });
                break;
            case 'title header':
                await this.titleDepositPurchase.waitForDisplayed();
                break;
            case 'icon header':
                await this.dialogOperations.additionalElements.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({ item: this.dialogOperations.ACCEPT_BUTTON }, { forceScroll: true });
                break;
            case 'offer slider':
                await this.sliderElements.offerSlider.waitForDisplayed();
                break;
            case 'input slider':
                await this.sliderElements.inputSlider.waitForDisplayed();
                break;
            case 'radio group slider':
                await this.sliderElements.radioGroupSlider.waitForDisplayed();
                break;
            case 'text promotion':
                await this.appliedPromotionSummary.textPromotion.waitForDisplayed();
                break;
            case 'icon promotion':
                await this.appliedPromotionSummary.iconPromotion.waitForDisplayed();
                break;
            case 'continue button':
                await this.btnContinueProcess.waitForDisplayed();
                break;
            case 'out of hours text':
                await this.instructionsStep.outOfHoursText.waitForDisplayed();
                break;
            case 'info investment':
                await this.instructionsStep.firstInfoBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async fillOtp(code = '52331901') {
        await super.fillOtp(code);
    }

}

export default new DepositPurchase();

