import {page, ElementValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('flexibleFinancingOffer')
class FlexibleFinancingOffer extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-flexibleFinancingOffer',
            elements: {
                fixedStep: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx"] [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-fixed-step"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '#helpModalHeader',
                    headerInfoButton: '#helpModalHeader #btn-info',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    microillustration: '#fixed-step-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-panel-info"] .offer-panel bbva-clip-microillustration',
                    offerPanelTitle: '#fixed-step-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-panel-info"] .offer-panel .offer-panel-text .title-offer',
                    container: {
                        properties: {
                            root: '#fixed-step-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-container"]'
                        },
                        purchase: '#purchase',
                        promotion: '#promotion',
                        promotionTitle: '#promotion #textTermPromotionValue',
                        promotionTerm: '#promotion #textTermPromotionKey',
                        promotionDetail: '#detail',
                        promotionDetailMonthlyPayment: '#detail #textMonthlyPayment',
                        promotionDeadlineLink: '#detail .detail-row bbva-type-link',
                    },
                    infoMessage: '#fixed-step-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-notification"]',
                    promotionDetailLink: '#fixed-step-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-notification"] [data-tag-name="bbva-notification-message"] .container-text .link [data-tag-name="bbva-type-link"]',
                    continueButton: '#fixed-step-content .confirm-button',
                },
                onboarding: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx"] [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-onboarding"]'
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    microillustration: '#onboarding-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-panel-info"] .offer-panel bbva-clip-microillustration',
                    offerPanelTitle: '#onboarding-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-panel-info"] .offer-panel .offer-panel-text .title-offer',
                    offerPanelDescription: '#onboarding-content [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-panel-info"] .offer-panel .offer-panel-text .description-offer',
                    continueButton: '.slot-footer [data-tag-name="bbva-button-default"]'
                },
                multiStep: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx"] [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-multi-step"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '#helpModalHeader',
                    headerInfoButton: '#helpModalHeader #btn-info',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    content: {
                        properties: {
                            root: 'div[slot="slot-content"] [data-tag-name="bbva-expandable-multistep"] div[slot="content"]'
                        },
                        purchasePrefilled: '#purchase-step',
                        stepNumber: '#promotion-step #currentStep',
                        stepDescription: '#promotion-step [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-promotion-detail"] .promotion-detail-text',
                        modifyButton: '#promotion-step #editButton',
                        options: {
                            properties: {
                                root: '#promotion-step [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-promotion-detail"]'
                            },
                            optionOne: '[data-tag-name="bbva-form-container"] #option0',
                            optionTwo: '[data-tag-name="bbva-form-container"] #option1',
                            optionThree: '[data-tag-name="bbva-form-container"] #option2',
                            viewMoreLink: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-notification"] [data-tag-name="bbva-notification-message"] .container-text .link [data-tag-name="bbva-type-link"]'
                        },
                        promotionDetail: '#promotion-step [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-container"]',
                        continueButton: '#promotion-step bbva-button-default',
                        summary: {
                            properties: {
                                root: '#promotion-step .summary'
                            },
                            monthlyAmount: '#monthlyAmount',
                            monthsNumber: '#monthsNumber',
                            totalAmount: '#totalAmount',
                            skipStartPaymentDate: '#skipStartPaymentDate',
                            startPaymentDate: '#startPaymentDate',
                            selection: '#selection',
                            purchaseAmount:'#purchaseAmount',
                        },
                    },
                    summaryButton: '.confirm-step [data-tag-name="bbva-button-default"]',
                },
                success: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx"] [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-success"] #apply-promotion-success'
                    },
                    header: '#helpModalHeader',
                    title: '#success-content ',
                    promotionContainer: {
                        properties: {
                            root: '#success-content bbva-panel-container [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-applied-promotion"]'
                        },
                        purchase: '#purchase',
                        totalAmount: '#totalAmount',
                        monthsNumber: '#monthlyPayment',
                        monthlyPayment: '#monthsNumber',
                        startPaymentDateSkip: '#startPaymentDateSkip',
                        startPaymentDate: '#startPaymentDate',
                        discountedPoints: '#discountedPoints',
                        card: '#card',
                        folioOperation: '#folioOperation',
                        dateOperation: '#dateOperation'
                    },
                    infoMessage: '#success-content bbva-notification-message ',
                    buttonShare: '#success-content bbva-button-row'
                },
                helpModal: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx"] [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-modal"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '#helpModalHeader',
                    closeIcon: '#helpModalHeader #btn-close',
                    microillustration: '#helpModalTitle bbva-type-icon',
                    title: '#title-text',
                    description: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                    bullets : 'div[slot="slot-content"] [data-tag-name="bbva-list-bullet"]',
                    acceptButton: '.slot-footer bbva-button-default:nth-child(1)',
                    optionLink: '.slot-footer bbva-button-default.footer-button.link',
                },
                faqsModal: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-flexible-financing-offer-mx"] [data-tag-name="card-transaction-servicing-flexible-financing-offer-mx-faqs"] #faqsModal'
                    },
                    header: 'bbva-help-modal:nth-child(1) [data-tag-name="bbva-header-main"]#helpModalHeader',
                    headerCloseButton: 'bbva-help-modal:nth-child(1) [data-tag-name="bbva-header-main"]#helpModalHeader #btn-close',
                    faqsList: {
                        properties: {
                            root: 'bbva-help-modal:nth-child(1)'
                        },
                        firstFaq: 'div div:nth-child(2) bbva-type-link',
                        secondFaq: 'div div:nth-child(3) bbva-type-link',
                        thirdFaq: 'div div:nth-child(4) bbva-type-link',
                        fourthFaq: 'div div:nth-child(5) bbva-type-link',
                        fifthFaq: 'div div:nth-child(6) bbva-type-link',
                    },
                    faqQuestionHeader: '#content-modal #helpModalHeader',
                    faqQuestionCloseButton: '#content-modal #helpModalHeader #btn-close',
                    faqQuestionTitle: '#content-modal [data-tag-name="help-faqs-aem-panel-info"] .content [data-tag-name="bbva-type-text"]',
                    faqQuestionAnswer: 'section .detail-content',
                }
            },
            requiredElements: ['root'],
        });
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.fixedStep.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'header info button':
                await this.fixedStep.headerInfoButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'header close button':
                await this.fixedStep.headerCloseButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'microillustration':
                await this.fixedStep.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer panel title':
                await this.fixedStep.offerPanelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase container':
                await this.fixedStep.container.purchase.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'promotion container':
                await this.fixedStep.container.promotion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'promotion title':
                await this.fixedStep.container.promotionTitle.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'promotion term':
                await this.fixedStep.container.promotionTerm.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'promotion detail container':
                await this.fixedStep.container.promotionDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'promotion detail monthly payment':
                await this.fixedStep.container.promotionDetailMonthlyPayment.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'promotion deadline link':
                await this.fixedStep.container.promotionDeadlineLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.fixedStep.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'promotion detail link':
                await this.fixedStep.promotionDetailLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fixed step continue button':
                await this.fixedStep.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding header':
                await this.onboarding.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding header close':
                await this.onboarding.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding microillustration':
                await this.onboarding.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding offer panel title':
                await this.onboarding.offerPanelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding offer panel description':
                await this.onboarding.offerPanelDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onbarding continue button':
                await this.onboarding.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep header':
                await this.multiStep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep header info':
                await this.multiStep.headerInfoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep header close':
                await this.multiStep.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep purchase prefilled':
                await this.multiStep.content.purchasePrefilled.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep modify button':
                await (await this.paymentPromiseButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep step number':
                await this.multiStep.content.stepNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep step description':
                await this.multiStep.content.stepDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep option one':
                await this.multiStep.content.options.optionOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep option two':
                await this.multiStep.content.options.optionTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep option three':
                await this.multiStep.content.options.optionThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep promotion detail':
                await this.multiStep.content.promotionDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep continue button':
                if (value === 'enabled') {
                    await this.multiStep.content.continueButton.waitForEnabled();
                } else {
                    await this.multiStep.content.continueButton.waitForDisplayed();
                }
                break;
            case 'multistep summary monthly amount':
                await this.multiStep.content.summary.monthlyAmount.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary months number':
                await this.multiStep.content.summary.monthsNumber.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary total amount':
                await this.multiStep.content.summary.totalAmount.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary skip start payment date':
                await this.multiStep.content.summary.skipStartPaymentDate.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary start payment date':
                await this.multiStep.content.summary.startPaymentDate.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary selection':
                await this.multiStep.content.summary.selection.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary purchase amount':
                await this.multiStep.content.summary.purchaseAmount.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'multistep summary button':
                await this.multiStep.summaryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success header':
                await this.success.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page title':
                await this.success.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page promotion purchase':
                await this.success.promotionContainer.purchase.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page promotion total amount':
                await this.success.promotionContainer.totalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page promotion months number':
                await this.success.promotionContainer.monthsNumber.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'success page promotion monthly payment':
                await this.success.promotionContainer.monthlyPayment.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'success page promotion start payment date skip':
                await this.success.promotionContainer.startPaymentDateSkip.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'success page promotion start payment date':
                await this.success.promotionContainer.startPaymentDate.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'success page promotion discounted points':
                await this.success.promotionContainer.discountedPoints.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'success page promotion card':
                await this.success.promotionContainer.card.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page promotion folio operation':
                await this.success.promotionContainer.folioOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page promotion date operation':
                await this.success.promotionContainer.dateOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page info message':
                await this.success.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page button share':
                await this.success.buttonShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal header':
                await this.helpModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal close icon':
                await this.helpModal.closeIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal microillustration':
                await this.helpModal.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal title':
                await this.helpModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal description':
                await this.helpModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal bullets':
                await this.helpModal.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal accept button':
                await this.helpModal.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal option link':
                await this.helpModal.optionLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal header':
                await this.faqsModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal close button':
                await this.faqsModal.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal first faq':
                await this.faqsModal.faqsList.firstFaq.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal second faq':
                await this.faqsModal.faqsList.secondFaq.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal third faq':
                await this.faqsModal.faqsList.thirdFaq.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal fourth faq':
                await this.faqsModal.faqsList.fourthFaq.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal fifth faq':
                await this.faqsModal.faqsList.fifthFaq.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal question header':
                await this.faqsModal.faqQuestionHeader.scrollIntoView();
                await this.faqsModal.faqQuestionHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal question close button':
                await this.faqsModal.faqQuestionCloseButton.scrollIntoView();
                await this.faqsModal.faqQuestionCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal question title':
                await this.faqsModal.faqQuestionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs modal question answer':
                await this.faqsModal.faqQuestionAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: {item}});
        }
    }

    async accessToFAQs() {
        await this.fixedStep.headerInfoButton.waitForDisplayed({ timeout: config.wait.M });
        await this.fixedStep.headerInfoButton.click();
    }

    async accessToQuestionDetail(faqNumber) {
        switch (faqNumber) {
            case 'first question':
                await this.faqsModal.faqsList.firstFaq.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.faqsList.firstFaq.click();
                break;
            case 'second question':
                await this.faqsModal.faqsList.secondFaq.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.faqsList.secondFaq.click();
                break;
            case 'third question':
                await this.faqsModal.faqsList.thirdFaq.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.faqsList.thirdFaq.click();
                break;
            case 'fourth question':
                await this.faqsModal.faqsList.fourthFaq.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.faqsList.fourthFaq.click();
                break;
            case 'fifth question':
                await this.faqsModal.faqsList.fifthFaq.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.faqsList.fifthFaq.click();
                break;
            default:
                throw new Error(`${faqNumber} is not available to access...`);
        }
    }

    async continueFixedStep() {
        await (await this.fixedStep.continueButton.waitForDisplayed({ timeout: config.wait.M })).click({ useActions: false, scrollOptions: { block: 'nearest' }});
    }

    async continueOnboarding() {
        await (await this.onboarding.continueButton.waitForDisplayed({ timeout: config.wait.M })).click({ useActions: false, scrollOptions: { block: 'nearest' }});
    }

    async goToSummaryView() {
        await this.multiStep.content.options.optionOne.waitForDisplayed({ timeout: config.wait.M });
        await this.multiStep.content.options.optionOne.click();
        await this.continueMultistep();
    }

    async continueMultistep() {
        await (await this.multiStep.content.continueButton.waitForDisplayed({ timeout: config.wait.M })).click({ useActions: false, scrollOptions: { block: 'nearest' }});
    }

    async applyPromotionMultistep() {
        await this.multiStep.summaryButton.waitForDisplayed({ timeout: config.wait.M });
        await this.multiStep.summaryButton.click();
    }

    async selectPromotion(promotion, selection = '') {
        switch (promotion) {
            case 'installments':
                await this.multiStep.content.options.optionOne.waitForDisplayed({ timeout: config.wait.M });
                await this.multiStep.content.options.optionOne.click();
                break;
            case 'combo':
                await this.multiStep.content.options.optionTwo.waitForDisplayed({ timeout: config.wait.M });
                await this.multiStep.content.options.optionTwo.click();
                break;
            default:
                await this.multiStep.content.options.optionThree.waitForDisplayed({ timeout: config.wait.M });
                await this.multiStep.content.options.optionThree.click();
                break;
        }
        if (selection === 'accepts' || selection === 'modifies') {
            await this.continueMultistep();
        }
    }

    async modifyPromotionSelected() {
        await this.multiStep.content.modifyButton.waitForAnimation({timeout: config.wait.M, interval: config.wait.XS});
        await this.waitForElementsExist(this.multiStep.content.modifyButton);
        await (await (await this.multiStep.content.modifyButton.elements()).value[0].waitForClickable({timeout: config.wait.L}));
        await (await (this.multiStep.content.modifyButton.elements())).value[0].click();
    }

    async completedMultistep() {
        await (await this.multiStep.confirmButton.waitForAnimation({interval: config.wait.XS})).click();
    }

    async deployModal(modalType) {
        switch (modalType) {
            case 'validity promotion':
                await this.fixedStep.container.promotionDeadlineLink.waitForDisplayed({ timeout: config.wait.M });
                await this.fixedStep.container.promotionDeadlineLink.click();
                break;
            case 'promotion detail':
                await this.fixedStep.promotionDetailLink.waitForDisplayed({ timeout: config.wait.M });
                await this.fixedStep.promotionDetailLink.click();
                break;
            case 'promotion detail warning':
                await this.multiStep.content.options.viewMoreLink.waitForDisplayed({ timeout: config.wait.M });
                await this.multiStep.content.options.viewMoreLink.click();
                break;
            case 'exit':
                await this.multiStep.headerCloseButton.waitForDisplayed({ timeout: config.wait.M });
                await this.multiStep.headerCloseButton.click();
                break;
            default:
                throw new Error(`${modalType} modal is not available to deploy...`);
        }
    }

    async retryModal() {
        await this.helpModal.acceptButton.waitForDisplayed({ timeout: config.wait.M });
        await this.helpModal.acceptButton.click();
    }
}

export default new FlexibleFinancingOffer();
