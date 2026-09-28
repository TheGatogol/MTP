import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('ocLoanPaymentPlanLoanConsolidation')
class OcLoanPaymentPlanLoanConsolidation extends AbstractGlomoPage {
    constructor() {
        const bbvaExpandableMultiStep = '[data-tag-name="bbva-expandable-multistep"]';
        const headerMain = 'section > [data-tag-name="bbva-header-main"]';
        super({
            root: '#cells-template-ocLoanPaymentPlanLoanConsolidation[state="active"]',
            elements: {
                actionHeader: {
                    properties: {
                        root: `${headerMain}`
                    },
                    exitOfferIcon: '#btn-right-primary'
                },

                allSteps: `${bbvaExpandableMultiStep}`,

                offerFirstStep: {
                    properties: {
                        root: `${bbvaExpandableMultiStep} #first-step`
                    },
                    imageOffer: '[data-tag-name="bbva-clip-microillustration"]',
                    numberOfContracts: '#contracts-count',
                    characteristicsContracts: '#characteristics-plan',
                    bulletsConsideration: '.bullets-container [data-tag-name="bbva-list-bullet"]',
                    buttonContinue: '[data-tag-name="bbva-button-default"]',
                    firstStepHeaderSummary: '.header [data-tag-name="bbva-core-heading"]',
                    linkCharacteristics: '.header #editButton'
                },

                offerSecondStep: {
                    properties: {
                        root: `${bbvaExpandableMultiStep} #second-step`
                    },
                    termsAndConditions: '[data-tag-name="bbva-expandable-step"]',
                    checkOne: '#condition-one',
                    checkTwo: '#condition-two',
                    secondStepSummary: '.header [data-tag-name="bbva-core-heading"]',
                    linkConsultTerms: '.header [data-tag-name="bbva-type-link"]',
                    buttonOfferRequest : '.button-container [data-tag-name="bbva-button-default"]',
                    notificationMessage: '#notification-message [data-tag-name="bbva-notification-message"]'
                },

                requestButton: `${bbvaExpandableMultiStep} #button-accept-plan`,

                offertNotAvailable: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-loan-payment-plan-config-modal"]'
                    },
                    notAvailableOfferMicroIllustration: '[data-tag-name="bbva-clip-microillustration"][microillustration="error"]',
                    notAvailableOfferText: '[data-tag-name="bbva-type-text"][text="Oferta no disponible"]'
                },

                offerOutSchedule: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-loan-payment-plan-config-modal"]'
                    },
                    outScheduleOfferMicroIllustration: '[data-tag-name="bbva-clip-microillustration"][microillustration="pending"]',
                    outScheduleOfferText: '[data-tag-name="bbva-type-text"][text="Fuera de horario"]'
                },

                bindingOfferSuccess: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-loan-payment-plan-loan-restructuring-success"]'
                    },
                    mainText: '[data-tag-name="bbva-type-text"]',
                    panelInfo: '[data-tag-name="bbva-list-badge"]',
                    notificationMessage: '[data-tag-name="bbva-notification-message"]',
                    infoSendEmail: '.email-send-info [data-tag-name="bbva-type-text"]',
                },

                warningModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            warningModalTitle: '#helpModalHeader #heading [data-tag-name="bbva-type-text"] .text',
                            warningModalIcon: ' #helpModalTitle [data-tag-name="bbva-type-icon"]',
                            warningModalContent: '#helpModalContent .slot-content',
                            warningModalBtn: '.modal-footer [data-tag-name="bbva-button-default"]',
                            warningModalLink: '.modal-footer [data-tag-name="bbva-type-link"]'
                        }
                    }
                ]
            },

            requiredElements: [
                'actionHeader'
            ]
        });
    }
    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header offer':
                await this.actionHeader.__root.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image offer':
                await this.offerFirstStep.imageOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment plan contracts count':
                await this.offerFirstStep.numberOfContracts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment plan characteristics':
                await this.offerFirstStep.characteristicsContracts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullets consideration':
                await this.offerFirstStep.bulletsConsideration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue':
                await this.offerFirstStep.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer not available':
                await this.offertNotAvailable.notAvailableOfferMicroIllustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer not available text':
                await this.offertNotAvailable.notAvailableOfferText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer out schedule':
                await this.offerOutSchedule.outScheduleOfferMicroIllustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer out schedule text':
                await this.offerOutSchedule.outScheduleOfferText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button offer request':
                await this.requestButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal title':
                await this.warningModal.additionalElements.warningModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal icon':
                await this.warningModal.additionalElements.warningModalIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal content':
                await this.warningModal.additionalElements.warningModalContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal btn':
                await this.warningModal.additionalElements.warningModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal link':
                await this.warningModal.additionalElements.warningModalLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success main text':
                await this.bindingOfferSuccess.mainText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success panel info':
                await this.bindingOfferSuccess.panelInfo.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success notification message':
                await this.bindingOfferSuccess.notificationMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success info send email':
                await this.bindingOfferSuccess.infoSendEmail.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async goToTermsAndConditions() {
        await this.offerFirstStep.buttonContinue.scrollIntoView();
        await this.offerFirstStep.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.offerFirstStep.buttonContinue.click({timeout: config.wait.M});
    }

    async checkTermsAndConditions() {
        await this.offerSecondStep.termsAndConditions.waitForProperty({property: 'active', timeout: config.wait.M});
        await (await this.offerSecondStep.checkOne.waitForClickable({timeout: config.wait.M})).click();
        await (await this.offerSecondStep.checkTwo.waitForClickable({timeout: config.wait.M})).click();
        await this.goRequestOffer();
    }

    async goConsultSummary() {
        await(await  this.allSteps.waitForDisplayed({timeout: config.wait.M}))
            .dragAndDrop({
                target: {
                    x: {
                        value: 0,
                        offset: 0,
                        type: 'absolute'
                    },
                    y: {
                        value: 1,
                        offset: 0,
                        type: 'absolute'
                    }
                },
                duration: 2000
            });
        await this.offerFirstStep.firstStepHeaderSummary.waitForDisplayed({timeout: config.wait.M});
        await this.offerFirstStep.linkCharacteristics.waitForDisplayed({timeout: config.wait.M});
        await this.offerFirstStep.linkCharacteristics.click();
    }

    async goConsultSummaryTerms() {
        await(await this.allSteps.waitForDisplayed({timeout: config.wait.M}))
            .dragAndDrop({
                target: {
                    x: {
                        value: 0,
                        offset: 0,
                        type: 'absolute'
                    },
                    y: {
                        value: 2,
                        offset: 0,
                        type: 'absolute'
                    }
                },
                duration: 2000
            });
        await this.offerSecondStep.secondStepSummary.scrollIntoView();
        await this.offerSecondStep.secondStepSummary.waitForDisplayed({timeout: config.wait.M});
        await this.offerSecondStep.linkConsultTerms.waitForDisplayed({timeout: config.wait.M});
        await this.offerSecondStep.linkConsultTerms.click();
    }

    async goRequestOffer() {
        await(await this.allSteps.waitForDisplayed({timeout: config.wait.M}))
            .dragAndDrop({
                target: {
                    x: {
                        value: 0,
                        offset: 0,
                        type: 'absolute'
                    },
                    y: {
                        value: 2,
                        offset: 0,
                        type: 'absolute'
                    }
                },
                duration: 2000
            });
        await this.offerSecondStep.buttonOfferRequest.waitForDisplayed({timeout: config.wait.M});
        await this.offerSecondStep.buttonOfferRequest.click();
    }

    async goBindingOffer() {
        await this.requestButton.scrollIntoView();
        await this.requestButton.waitForDisplayed({timeout: config.wait.M});
        await this.requestButton.click();
    }

    async goWarningModal() {
        await this.actionHeader.exitOfferIcon.scrollIntoView();
        await this.actionHeader.exitOfferIcon.waitForDisplayed({timeout: config.wait.M});
        await this.actionHeader.exitOfferIcon.click();
    }
}

export default new OcLoanPaymentPlanLoanConsolidation();
