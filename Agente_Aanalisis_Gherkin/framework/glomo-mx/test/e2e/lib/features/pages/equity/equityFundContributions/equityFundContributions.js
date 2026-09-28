import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class EquityFundContributions extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'EquityFundContributionsStep1',
            root: '#cells-template-equityContractsContribution[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                cardOffer: '#cells-step-card-offer-page-collapsed #cardsOfferPageStepContainer',
                cardOfferHeader: '#cells-step-card-offer-page-collapsed #cardsOfferPageStepContainer .cells-step__header',
                cardOfferBody: '#cells-step-card-offer-page-collapsed #cardsOfferPageStepContainer div .filled',
                cardOfferNumber: '#cells-step-card-offer-page-collapsed #cardsOfferPageStepContainer div .filled .collapsed-contract-number',
                simulation: '#cells-step-simulation-operation-spherica cells-step-spherica',
                simulationInput: '#cells-step-simulation-operation-spherica input.enterAmountInput',
                simulationInfoBox : '#cells-step-simulation-operation-spherica cells-step-spherica .full cells-enter-limited-amount-spherica .icon-message',
                simulationButton : '#cells-step-simulation-operation-spherica cells-step-spherica .full cells-enter-limited-amount-spherica cells-st-button-spherica #enterAmountBtn',
                simulationContainerInfo: '#cells-step-simulation-operation-spherica cells-step-spherica .full .container-info',
                simulationSuccessInfo : '#cells-step-simulation-operation-spherica cells-step-spherica .full #cellsStepEnterAmountSimulateFill',
                simulationConfirmButton: '#cells-step-simulation-operation-spherica cells-confirm-buttons-spherica.simulation-inline-message #primaryBtn',
                infoBox: 'cells-icon-message-spherica#cells-icon-message.margin-l.h-gutter',
                simulationCollapsedInfo: '#cells-step-simulation-operation-spherica #stepContainer .filled .cells-step-simulation-operation__title-input-container',
                simulationCollapsedAmount: '#cells-step-simulation-operation-spherica #stepContainer .filled #cellsStepEnterAmountFilled',
                summaryButton: '#cells-summary-view cells-st-button-spherica.full:not([hidden])',
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
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
            case 'card offer':
                await this.cardOffer.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card offer header':
                await this.cardOfferHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card offer body':
                await this.cardOfferBody.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card offer number':
                await this.cardOfferNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation':
                await this.simulation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation input':
                await this.simulationInput.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation info box':
                await this.simulationInfoBox.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation button':
                await this.simulationButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation container info':
                await this.simulationContainerInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation success info':
                await this.simulationSuccessInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation confirm button':
                await this.simulationConfirmButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info box':
                await this.infoBox.scrollIntoView({block: 'nearest'});
                await this.infoBox.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation collapsed info':
                await this.simulationCollapsedInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'simulation collapsed amount':
                await this.simulationCollapsedAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary button':
                await this.summaryButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header otp':
                await this.signModal.smsPasswordLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title otp':
                await this.signModal.smsImage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input otp':
                await this.signModal.smsPasswordInputField.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'continue button otp':
                await this.signModal.smsContinueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async fillSimulationAmount(amount = 200) {
        await this.simulation.scrollIntoView();
        await this.simulationInput.setValue({value: amount});
        await this.simulationButton.waitForClickable({timeout: config.wait.L});
        await this.simulationButton.waitForAnimation({timeout: config.wait.L});
        await this.simulationButton.click();
    }

    async accessEquityFundContributionsSummary() {
        await this.fillSimulationAmount();
        await this.simulationConfirmButton.waitForDisplayed({timeout: config.wait.L});
        await this.simulationConfirmButton.scrollIntoView();
        await this.simulationConfirmButton.waitForClickable({timeout: config.wait.L});
        await this.simulationConfirmButton.click();
    }

    async confirmEquityFundContribution() {
        await this.accessEquityFundContributionsSummary();
        await this.summaryButton.waitForClickable({timeout: config.wait.L});
        await this.summaryButton.click();
    }

    async confirmToken(otp) {
        await this.fillOtp(otp);
    }
}

export default new EquityFundContributions();
