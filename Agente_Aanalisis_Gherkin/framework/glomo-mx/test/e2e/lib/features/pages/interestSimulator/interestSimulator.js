import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsEnterLimitedAmountSpherica from '../../components/cells-enter-limited-amount-spherica';
import CellsInputSliderSpherica from '../../components/cells-input-slider-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class InterestSimulator extends AbstractGlomoPage {
    constructor() {
        const simulateSlider = 'glomo-aggregation-interest-simulator-spherica';
        const simulateInfo = 'cells-card-advice-spherica';
        super({
            name: 'InterestSimulator',
            root: '#cells-template-interestSimulator[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                amountInput: CellsEnterLimitedAmountSpherica,
                slider: CellsInputSliderSpherica,
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            contentTitle: 'cells-bottom-modal#modal .content-container div',
                            iconHelp: 'cells-atom-icon',
                        }
                    }
                ],
                tooltipButton: '#interestSimulatorToolTip cells-st-button-spherica.interest-simulator-tooltip_content_button',
                infoBallon: `${simulateSlider} `,
                amountTitle: `${simulateSlider} .interest-simulator-wrapper cells-summary-view-spherica #operationTotal p.cells-summary-view--title`,
                amount: `${simulateSlider} #operationTotal cells-atom-amount-spherica`,
                amountDescription: `${simulateSlider} div.interest-simulator-info-box`,
                infoBox: `${simulateSlider} div.interest-simulator-info-box`,
                approxInterest: `${simulateSlider} div.interest-simulator-accordion cells-accordion-step-spherica`,
                otherAmountButton: `${simulateSlider} div.interest-simulator-link cells-st-button-spherica button`,
                imageHeader: `${simulateInfo} .card-advice__title span`,
                bullets: `${simulateInfo} .cells-card-advice-list-item .listItem`,
                moreInformation: `${simulateInfo} cells-molecule-link-icon-spherica .link-text`,
                payCardButton: '#primaryButton',
                //MODAL
                information: 'cells-alert-box #modal',
                continueButton: '#enterAmountBtn',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'info ballon':
                await this.infoBallon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount description':
                await this.amountDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'slider':
                await this.slider.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'info box':
                await this.infoBox.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'approximate interest':
                await this.approxInterest.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'other amount button':
                await this.otherAmountButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'image header':
                await this.imageHeader.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'bullets':
                await this.bullets.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'more information':
                await this.moreInformation.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pay card button':
                await this.payCardButton.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'continue button':
                await this.dialogOperations.continueButton.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'hidden'});
                break;
            case 'icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CONTAINER_ICON}, {timeout: config.wait.M});
                break;
            case 'information':
                await this.dialogOperations.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async closeTooltipSlider() {
        await this.tooltipButton.waitForDisplayed({timeout: config.wait.L});
        await this.tooltipButton.waitForClickable({timeout: config.wait.L});
        await this.tooltipButton.click();
    }

    async openMoreInformation() {
        await this.moreInformation.waitForDisplayed({timeout: config.wait.M});
        await this.moreInformation.waitForClickable({timeout: config.wait.M});
        await this.moreInformation.click();
    }

    async openModalEnterAmount() {
        await this.otherAmountButton.waitForDisplayed({timeout: config.wait.M});
        await this.otherAmountButton.waitForClickable({timeout: config.wait.M});
        await this.otherAmountButton.click();
    }

    async enterOtherAmount() {
        await this.amountInput.waitForDisplayed({timeout: config.wait.M});
        await this.amountInput.enterValue('1500');
        await this.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async amountSelectorSimulatorSlider(sliderValue) {
        await this.slider.waitForDisplayed({timeout: config.wait.M});
        await this.slider.selectSliderValue(sliderValue);
        await this.slider.waitForDisplayed({timeout: config.wait.M});
    }
}

export default new InterestSimulator();
