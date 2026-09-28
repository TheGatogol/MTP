import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('ocTopCreditCard')
class OcTopCreditCard extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-ocTopCreditCard[state="active"] [data-tag-name="bbva-feature-top-credit-card-mx-spherica"]',
            elements: {
                onboardingCarousel: {
                    properties: { root: '[data-tag-name="onboarding-full-screen-carousel"]' },
                    onboarding: '[data-tag-name="bbva-help-onboarding"] [data-tag-name="bbva-help-modal"] div.carousel-items div.carousel-item',
                    onboardingHeader: '[data-tag-name="bbva-help-onboarding"] [data-tag-name="bbva-help-modal"] div.controls',
                    onboardingContent: '[data-tag-name="bbva-help-onboarding"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-help-onboarding-slide"] div.content',
                    onboardingSliderButton: '[data-tag-name="bbva-help-modal"] div.controls-container button.next',
                    onboardingContinueButton: '[data-tag-name="bbva-help-modal"] .footer [data-tag-name="bbva-button-default"]'
                },
                cardsUpgradeMultiStep: {
                    properties: { root: '[data-tag-name="cards-upgrade-multi-step"]' },
                    header: 'section [data-tag-name="bbva-header-main"]',
                    headerFaqsButton: 'section [data-tag-name="bbva-header-main"] #btn-help',
                    headerExitButton: 'section [data-tag-name="bbva-header-main"] #btn-close',
                    offerDetailComplete: '#options-step[ambient="secondary"]',
                    deliveryCardComplete: '#delivery-step[ambient="secondary"]',
                    termsAndConditionsComplete: '#terms-step[ambient="secondary"]',
                    optionsStep: {
                        properties: { root: '#options-step' },
                        consultOfferDetailButton: '#editButton',
                        optionsStepContent: {
                            properties: { root: '[data-tag-name="options-step-content"]' },
                            offerDetailContinueButton: '[data-tag-name="bbva-button-default"]',
                            cardsUpgradeListOptions: {
                                properties: { root: '[data-tag-name="cards-upgrade-list-options"] [data-tag-name="cards-upgrade-option"]' },
                                panelOfferDetail: '[data-tag-name="cards-upgrade-banner"]',
                                creditLineAmount: '[data-tag-name="cards-upgrade-option-credit-line"]',
                                feesOptions: '[data-tag-name="cards-upgrade-option-fees"]',
                                catTooltip: '[data-tag-name="cards-upgrade-option-fees"] section.list-container dl#cat dt.element-key [data-tag-name="bbva-type-link"]#cat',
                                interestTooltip: '[data-tag-name="cards-upgrade-option-fees"] section.list-container dl#interest dt.element-key [data-tag-name="bbva-type-link"]#interest',
                                annuityTooltip: '[data-tag-name="cards-upgrade-option-fees"] section.list-container dl#annuity dt.element-key [data-tag-name="bbva-type-link"]#annuity',
                                viewBenefitsLink: '[data-tag-name="bbva-type-link"].option-link'
                            }
                        }
                    },
                    deliveryStep: {
                        properties: { root: '#delivery-step' },
                        customerAddress: '[data-tag-name="delivery-step-content"] div div.address-container [data-tag-name="bbva-type-text"]',
                        showHideAddressLink: '[data-tag-name="delivery-step-content"] div div.address-container [data-tag-name="bbva-type-link"]',
                        changeAddressButton: '#editButton',
                        addressContinueButton: '[data-tag-name="delivery-step-content"] [data-tag-name="bbva-button-default"]'
                    },
                    termsStep: {
                        properties: { root: '#terms-step [data-tag-name="terms-step-content"]' },
                        documentPdfLink: '[data-tag-name="bbva-type-link"]',
                        termsUpgradeCard: '#checkbox-item-1',
                        termsDeliveryCard: '#checkbox-item-2',
                        termsPaymentType: '#checkbox-item-3',
                        termsContinueButton: '[data-tag-name="bbva-button-default"]'
                    },
                    summaryContinueButton: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-button-default"].summary-button'
                },
                cardsUpgradeOptionDetail: {
                    properties: { root: '[data-tag-name="cards-upgrade-option-detail"] [data-tag-name="bbva-help-modal"]' },
                    benefitsPanelOffer: 'section.card-container [data-tag-name="cards-upgrade-banner"]',
                    benefitsCreditLine: '[data-tag-name="cards-upgrade-option-credit-line"]',
                    benefitsList: 'section.benefits-container',
                    benefitsFeesList: 'section.interest-rates-container [data-tag-name="cards-upgrade-option-fees"]',
                    considerationsList: 'section.considerations-container'
                },
                cardsUpgradeInfo: {
                    properties: { root: '[data-tag-name="cards-upgrade-info"] [data-tag-name="bbva-help-modal"]' },
                    helpIconModal: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                    helpTitleModal: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                    helpDescriptionModal: '#helpModalContent',
                    helpButtonModal: 'div.content section.transition-container div.help-modal div.modal-main div.modal-footer [data-tag-name="bbva-button-default"]'
                },
                cardsUpgradeError: {
                    properties: { root: '[data-tag-name="cards-upgrade-error"] [data-tag-name="bbva-help-modal"]' },
                    exitOperativeIcon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    exitOperativeTitle: '#helpModalTitle #title-text',
                    exitOperativeDescription: '#helpModalContent div.slot-content slot div',
                    exitOperativeExitButton: 'div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]',
                    exitOperativeContinueLink: 'div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"].link',
                    panelErrorDetail: '[data-tag-name="cards-upgrade-banner"]',
                    retryButton: 'div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]',
                    exitErrorButton: 'div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]'
                },
                cardsUpgradeFaqs: {
                    properties: { root: '[data-tag-name="cards-upgrade-faqs"] [data-tag-name="bbva-transition-container"]' },
                    faqsList: '[data-tag-name="help-faqs-aem"]',
                    faqQuestion: '[data-tag-name="help-faqs-aem"] div.link-list-container [data-tag-name="bbva-type-link"]',
                    faqQuestionTitle: '[data-tag-name="help-faqs-aem"] [data-tag-name="bbva-help-modal"] section div.content [data-tag-name="bbva-type-text"].title',
                    faqQuestionAnswer: '[data-tag-name="help-faqs-aem"] [data-tag-name="bbva-help-modal"] section div.detail-content [data-tag-name="bbva-type-text"]'
                },
                cardsUpgradeSuccess: {
                    properties: { root: '[data-tag-name="cards-upgrade-success"]' },
                    headerSuccessPage: '[data-tag-name="bbva-header-main"]',
                    successPanel: '[data-tag-name="bbva-clip-box"]',
                    creditCardInfo: '[data-tag-name="cards-upgrade-option-fees"][data-selector="cards-upgrade-success-card-info-section"]',
                    feesInfo: '[data-tag-name="cards-upgrade-option-fees"][data-selector="cards-upgrade-success-fees-section"]',
                    deliveryCardInfo: '[data-tag-name="cards-upgrade-option-fees"][data-selector="cards-upgrade-success-delivery-section"]',
                    contactDetailMessage: '[data-tag-name="bbva-notification-message"][data-selector="cards-upgrade-success-email-notification"]',
                    exitSuccessButton: '[data-tag-name="bbva-header-main"] #btn-close'
                }
            },
            requiredElements: [
                'onboardingCarousel.onboardingHeader'
            ]
        });
    }

    async swipeOnboarding(slideNumber) {
        for (let i = 1; i < slideNumber; i++) {
            await (await this.onboardingCarousel.onboardingSliderButton
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
        await (await this.onboardingCarousel.onboarding.elements()).value[slideNumber - 1].waitForDisplayed({ timeout: config.wait.XL });
    }

    async acceptOnboarding() {
        await (await (await this.onboardingCarousel.onboardingContinueButton.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async selectTooltip(tooltip) {
        switch(tooltip.toLowerCase()) {
            case 'cat':
                await (await (await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.catTooltip
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'interest':
                await (await (await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.interestTooltip
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'annuity':
                await (await (await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.annuityTooltip
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`[ERR] The option ${tooltip} is unknown. Cannot be selected.`);
        }
    }

    async acceptsOfferDetail() {
        await (await (await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.offerDetailContinueButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async acceptsAddressInformation() {
        await (await (await this.cardsUpgradeMultiStep.deliveryStep.addressContinueButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async acceptsTermsAndConditions() {
        await (await (await this.cardsUpgradeMultiStep.termsStep.termsUpgradeCard.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.cardsUpgradeMultiStep.termsStep.termsDeliveryCard.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.cardsUpgradeMultiStep.termsStep.termsPaymentType.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.cardsUpgradeMultiStep.termsStep.termsContinueButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async closeOperative() {
        await (await (await this.cardsUpgradeMultiStep.headerExitButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async continueProcess() {
        await (await (await this.cardsUpgradeError.exitOperativeContinueLink.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async showHideAddress(show) {
        await (await (await this.cardsUpgradeMultiStep.deliveryStep.showHideAddressLink.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        if(show.toLowerCase() === 'show') {
            await this.fillOtp('11111111');
        }
    }

    async retryModal(times) {
        let retry = 0;
        while (retry < times) {
            await (await (await this.cardsUpgradeError.retryButton.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
            retry++;
        }
    }

    async accessFaqs() {
        await (await (await this.cardsUpgradeMultiStep.headerFaqsButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async accessFaqQuestion() {
        await (await (await this.cardsUpgradeFaqs.faqQuestion.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async consultsDocumentPdf() {
        await (await (await this.cardsUpgradeMultiStep.termsStep.documentPdfLink.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async consultsStep(step) {
        switch(step.toLowerCase()) {
            case 'offer detail':
                await (await (await (await this.cardsUpgradeMultiStep.optionsStep.consultOfferDetailButton.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'delivery card':
                await (await (await (await this.cardsUpgradeMultiStep.deliveryStep.changeAddressButton.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`[ERR] The option ${step} is unknown. Cannot be selected.`);
        }
    }

    async accessBenefits() {
        await (await (await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.viewBenefitsLink
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async accessElementScreen(element) {
        switch(element.toLowerCase()) {
            case 'cat':
            case 'interest':
            case 'annuity':
                await this.selectTooltip(element);
                break;
            case 'benefits':
                await this.accessBenefits();
                break;
            case 'continue':
                await this.acceptsOfferDetail();
                break;
            default:
                throw new Error(`[ERR] The option ${element} is unknown. Cannot be selected.`);
        }
    }

    async acceptsSummary(sign) {
        await (await (await this.cardsUpgradeMultiStep.summaryContinueButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        if (sign) {
            await this.fillOtp('11111111');
        }
    }

    async goBack() {
        await (await (await this.cardsUpgradeSuccess.exitSuccessButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async requestUpgradeCard() {
        await this.acceptsOfferDetail();
        await this.acceptsAddressInformation();
        await this.acceptsTermsAndConditions();
        await this.acceptsSummary(true);
    }

    async goToSummary() {
        await this.acceptsOfferDetail();
        await this.acceptsAddressInformation();
        await this.acceptsTermsAndConditions();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.cardsUpgradeMultiStep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding header':
                await this.onboardingCarousel.onboardingHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding content':
                await this.onboardingCarousel.onboardingContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding continue button':
                await this.onboardingCarousel.onboardingContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.cardsUpgradeInfo.helpIconModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info title':
                await this.cardsUpgradeInfo.helpTitleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info description':
                await this.cardsUpgradeInfo.helpDescriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understood help button':
                await this.cardsUpgradeInfo.helpButtonModal.waitForDisplayed({timeout: config.wait.M, reverse: this.isSpherica()});
                break;
            case 'summary continue button':
                await this.cardsUpgradeMultiStep.summaryContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning small icon':
                await this.cardsUpgradeError.exitOperativeIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit operative modal title':
                await this.cardsUpgradeError.exitOperativeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit operative modal description':
                await this.cardsUpgradeError.exitOperativeDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit operative modal exit button':
                await this.cardsUpgradeError.exitOperativeExitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit operative modal continue link':
                await this.cardsUpgradeError.exitOperativeContinueLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer detail complete':
                await this.cardsUpgradeMultiStep.offerDetailComplete.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address complete':
                await this.cardsUpgradeMultiStep.deliveryCardComplete.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions complete':
                await this.cardsUpgradeMultiStep.termsAndConditionsComplete.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'customer address':
                await this.cardsUpgradeMultiStep.deliveryStep.customerAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show hide address link':
                await this.cardsUpgradeMultiStep.deliveryStep.showHideAddressLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs list':
                await this.cardsUpgradeFaqs.faqsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq question title':
                await this.cardsUpgradeFaqs.faqQuestionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq question answer':
                await this.cardsUpgradeFaqs.faqQuestionAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel offer card':
                await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.panelOfferDetail
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit line offer':
                await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.creditLineAmount
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fees card section':
                await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.cardsUpgradeListOptions.feesOptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer detail continue button':
                await this.cardsUpgradeMultiStep.optionsStep.optionsStepContent.offerDetailContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address continue button':
                await this.cardsUpgradeMultiStep.deliveryStep.addressContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits panel offer':
                await this.cardsUpgradeOptionDetail.benefitsPanelOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits credit line amount':
                await this.cardsUpgradeOptionDetail.benefitsCreditLine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits list':
                await this.cardsUpgradeOptionDetail.benefitsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits fees list':
                await this.cardsUpgradeOptionDetail.benefitsFeesList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits considerations list':
                await this.cardsUpgradeOptionDetail.considerationsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success':
                await this.cardsUpgradeSuccess.headerSuccessPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success panel':
                await this.cardsUpgradeSuccess.successPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card info':
                await this.cardsUpgradeSuccess.creditCardInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fees info':
                await this.cardsUpgradeSuccess.feesInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery card info':
                await this.cardsUpgradeSuccess.deliveryCardInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact detail message':
                await this.cardsUpgradeSuccess.contactDetailMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.cardsUpgradeSuccess.exitSuccessButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new OcTopCreditCard();
