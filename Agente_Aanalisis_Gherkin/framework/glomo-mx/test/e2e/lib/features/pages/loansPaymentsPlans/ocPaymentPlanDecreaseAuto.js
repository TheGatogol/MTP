import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaMultiStepPaymentPlan from '../../components/bbva-multistep-payment-plan';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('ocPaymentPlanDecreaseAuto')
class OcPaymentPlanDecreaseAuto extends  AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocPaymentPlanDecreaseAuto[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                multiStepPaymentPlan: BbvaMultiStepPaymentPlan,
                warningModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            warningModalTitle: '#helpModalTitle [data-tag-name="bbva-text"] .text',
                            warningModalIcon: ' #helpModalTitle [data-tag-name="bbva-icon"]',
                            warningModalContent: '#helpModalContent .slot-content',
                            warningModalBtn: '.modal-footer [data-tag-name="bbva-button-default"]',
                            warningModalLink: '.modal-footer [data-tag-name="bbva-link"]'
                        }
                    }
                ]
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'payment plan decrease car offer header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment plan decrease car offer summary':
                await this.multiStepPaymentPlan.cardOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment plan decrease car offer banner':
                await this.multiStepPaymentPlan.imageOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment plan decrease car offer amount':
                await this.multiStepPaymentPlan.offerAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions':
                await this.multiStepPaymentPlan.termsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term check one':
                await this.multiStepPaymentPlan.checkOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term check two':
                await this.multiStepPaymentPlan.checkTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'heading terms':
                await this.multiStepPaymentPlan.headingTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification terms':
                await this.multiStepPaymentPlan.notification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pdf one':
                await this.multiStepPaymentPlan.pdfOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorize offer':
                await this.multiStepPaymentPlan.bindingOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorize offer btn':
                await this.multiStepPaymentPlan.bindingOfferButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning help modal title':
                await this.warningModal.additionalElements.warningModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning help modal icon':
                await this.warningModal.additionalElements.warningModalIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning help modal content':
                await this.warningModal.additionalElements.warningModalContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning help modal accept button':
                await this.warningModal.additionalElements.warningModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning help modal cancel link':
                await this.warningModal.additionalElements.warningModalLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToTermsAndConditions() {
        await this.waitUntilSpinnerVeil();
        await this.multiStepPaymentPlan.goToTermsAndConditions();
    }

    async acceptTermsAndConditions() {
        await this.multiStepPaymentPlan.acceptTermsAndConditions();
    }
    async bindingOffer() {
        await this.multiStepPaymentPlan.goToBindingOffer();
    }

    async closeOfferDetail() {
        await this.header.actionRight();
    }

}

export default new OcPaymentPlanDecreaseAuto();
