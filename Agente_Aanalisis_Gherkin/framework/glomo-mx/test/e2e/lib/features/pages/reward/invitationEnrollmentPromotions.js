import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('invitationEnrollmentPromotions')
class InvitationEnrollmentPromotions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-rewardsPromotionsInvitationEnrollment[state="active"]',
            elementsSpherica: {
                //Modal already active enrollment promotion
                modalActiveEnrollmentAlready: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-generic-modal"] [modal-type="caution"][visible]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '[data-tag-name="bbva-header-main"] #btn-close',
                    description: '.modal-content [data-tag-name="bbva-type-text"]',
                    icon: '.modal-main [data-tag-name="bbva-type-icon"]',
                    title: '.modal-main [data-tag-name="bbva-type-text"][id="title-text"]',
                    exitButton: '[data-tag-name="bbva-button-default"][text*="rewards-promotions-invitation-enrollment-customer-enrollments"]'
                },
                //Modal activation enrollment promotion success
                modalActivationEnrollmentSuccess: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-receipt-modal"] [data-tag-name="bbva-help-modal"][visible]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '[data-tag-name="bbva-header-main"] #btn-close',
                    description: '[data-tag-name="rewards-promotions-invitation-enrollment-panel-info-success"] [data-tag-name="bbva-type-text"].description',
                    icon: '[data-tag-name="rewards-promotions-invitation-enrollment-panel-info-success"] [data-tag-name="bbva-type-icon"]',
                    title: '[data-tag-name="rewards-promotions-invitation-enrollment-panel-info-success"] [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                    operationDateLabel: '[label="rewards-promotions-invitation-enrollment-receipt-modal-first-simple-list-list-label"][date] [data-tag-name="bbva-type-text"]',
                    operationDateValue: '[label="rewards-promotions-invitation-enrollment-receipt-modal-first-simple-list-list-label"][date] [data-tag-name="bbva-type-date"]',
                    participantCardLabel: '[label="rewards-promotions-invitation-enrollment-receipt-modal-second-simple-list-list-label"] [data-tag-name="bbva-type-text"]',
                    participantCardValue: '[label="rewards-promotions-invitation-enrollment-receipt-modal-second-simple-list-list-label"] [data-tag-name="bbva-type-text"][alignment="right"]',
                    campaignCardLabel: '[label="rewards-promotions-invitation-enrollment-receipt-modal-third-simple-list-list-label"] [alignment="left"]',
                    campaignCardValue: '[label="rewards-promotions-invitation-enrollment-receipt-modal-third-simple-list-list-label"] [alignment="right"]',
                    promotionLabel: '[label="rewards-promotions-invitation-enrollment-receipt-modal-fourth-simple-list-list-label"] [alignment="left"]',
                    promotionValue: '[label="rewards-promotions-invitation-enrollment-receipt-modal-fourth-simple-list-list-label"] [alignment="right"]',
                    expirationDatePromotionLabel: '[label="rewards-promotions-invitation-enrollment-receipt-modal-fifth-simple-list-list-label"] [alignment="left"]',
                    expirationDatePromotionValue: '[label="rewards-promotions-invitation-enrollment-receipt-modal-fifth-simple-list-list-label"] [class="right"]',
                    sheetLabel: '[label="rewards-promotions-invitation-enrollment-receipt-modal-sixth-simple-list-list-label"] [alignment="left"]',
                    sheetValue: '[label="rewards-promotions-invitation-enrollment-receipt-modal-sixth-simple-list-list-label"] [alignment="right"]',
                    disclaimer: '[data-tag-name="bbva-notification-message"][message-title="rewards-promotions-invitation-enrollment-receipt-modal-notification-message-title"]',
                    shareButton: '[data-tag-name="bbva-button-row"][class="one-button"]',
                },
                //Activate Promotion Modal
                modalActivatePromotion: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: ':not([class="transition-container scrollable"]) [data-tag-name="bbva-header-main"]',
                    closeButton: ':not([class="transition-container scrollable"]) [data-tag-name="bbva-header-main"] #btn-close',
                    campaignLabel: '.summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-first-simple-list-label"] [data-tag-name="bbva-type-text"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-first-simple-list-label"]',
                    campaignValue: '.summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-first-simple-list-label"] [data-tag-name="bbva-type-text"][alignment="right"]',
                    promotionTypeLabel: '.summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-second-simple-list-label"] [data-tag-name="bbva-type-text"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-second-simple-list-label"]',
                    promotionTypeValue: '.summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-second-simple-list-label"] [data-tag-name="bbva-type-text"][alignment="right"]',

                    cardSingle: {
                        title: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .header',
                        name: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .name',
                        amount: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .amount',
                        number: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .card-number',
                        description: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .description',
                        summaryTitle: '[data-tag-name="bbva-expandable-step"][id="step-1"][header="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-header"]',
                        summaryName: '[data-tag-name="bbva-expandable-step"][id="step-1"] .summary .name',
                        summaryAmount: '[data-tag-name="bbva-expandable-step"][id="step-1"] .summary .amount',
                        summaryNumber: '[data-tag-name="bbva-expandable-step"][id="step-1"] .summary .card-number',
                        summaryDescription: '[data-tag-name="bbva-expandable-step"][id="step-1"] .summary .description'
                    },
                    cardVarious: {
                        name: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .name',
                        amount: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .amount',
                        number: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .card-number',
                        description: '[data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .description',
                    },
                    summaryContinueButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-two-button-text"]',
                    continueButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]',
                    selectPurchaseButton: '[data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]',

                    participantsPurchases: {
                        title: '[data-tag-name="bbva-expandable-step"][id="step-2"] [text="rewards-promotions-invitation-enrollment-enrollment-modal-step-two-header"]',
                        message: '[data-tag-name="bbva-expandable-step"][id="step-2"] [data-tag-name="bbva-notification-message"]',
                        name: '[data-tag-name="bbva-expandable-step"][id="step-2"] [data-tag-name="rewards-promotions-invitation-enrollment-purchase-participant-item"]',
                        amount: '[data-tag-name="bbva-expandable-step"][id="step-2"] .purchase-participant-item [data-tag-name="bbva-type-amount"]',
                        removeButton: '[data-tag-name="bbva-expandable-step"][id="step-2"] .purchase-participant-item [data-tag-name="bbva-button-default"]',
                        totalAmountTitle: '[active] .content .summary [data-tag-name="bbva-type-text"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-two-total-amount-text"]',
                        totalAmountValue: '[active] .content .summary [data-tag-name="bbva-type-amount"]',
                        selectionTitle: '#step-2 #heading #headingLabel',
                        selectionName: '#step-2 .summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"]',
                        selectionAmount: '#step-2 .summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"] [data-tag-name="bbva-type-amount"]',
                        selectionChangeButton: '[data-tag-name="bbva-expandable-step"]#step-2[completed] div:nth-last-of-type(3) #editButton',
                        selectionTotalAmountTitle: '#step-2 [label="rewards-promotions-invitation-enrollment-enrollment-modal-step-two-summary-last-simple-list-label"] [data-tag-name="bbva-type-text"]',
                        selectionTotalAmountValue: '#step-2 [label="rewards-promotions-invitation-enrollment-enrollment-modal-step-two-summary-last-simple-list-label"] [data-tag-name="bbva-type-amount"]',
                    },

                    continueToApplyPromotionButton: '[active] .content  [text="rewards-promotions-invitation-enrollment-enrollment-modal-step-two-button-text"]',
                    confirmButton: '[data-tag-name="bbva-button-default"][variant="positive"][text="rewards-promotions-invitation-enrollment-enrollment-confirm-step-text"]',

                },
                //Modal Select Purchases
                modalSelectPurchases: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '[data-tag-name="bbva-header-main"] #btn-close',
                    dates: '[data-tag-name="rewards-promotions-invitation-enrollment-purchase-date-item-list"] [data-tag-name="bbva-type-date"]',
                    checks: 'bbva-form-control-input',
                    check: '[name*="0"]',
                    name: '.concept-amount [data-tag-name="bbva-type-text"][font-type="title-default"]',
                    value: '.concept-amount [data-tag-name="bbva-type-amount"]',
                    message: '[data-tag-name="bbva-notification-message"][message-title="rewards-promotions-invitation-enrollment-purchases-modal-message-title"]',
                    saveButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-purchases-modal-button-text"]'
                },
                // Modal Close Enrollment Operative
                modalCloseEnrollmentOperative: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][aria-label="rewards-promotions-invitation-enrollment-exit-modal-header-text"]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    exitButton: '[data-tag-name="bbva-header-main"] #btn-close',
                    title: '.header [data-tag-name="bbva-type-text"]',
                    icon: '.modal-main [data-tag-name="bbva-type-icon"]',
                    description: '#helpModalContent ',
                    exit: '.modal-footer [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-exit-modal-button-text"]',
                    continue: '[data-tag-name="bbva-button-default"][variant="link"]'
                },
                // error generic enrrollment promotion
                errorEnrollmentPromotion: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-generic-modal"][visible] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '[data-tag-name="bbva-header-main"] #btn-close',
                    icon: '[data-tag-name="bbva-type-icon"]',
                    description: '#helpModalContent',
                    retryButton: '[data-tag-name="bbva-button-default"][text*="rewards-promotions-invitation-enrollment-campaign"]',
                    exitButton: '[data-tag-name="bbva-button-default"][text="Llamar a la línea de atención"]',
                },
                //error modal no purchases
                errorModalWithoutPurchases: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-generic-modal"][modal-name="campaign-card-transactions-without-participant-purchases-error-modal"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '#btn-close',
                    icon: '[data-tag-name="bbva-type-icon"]',
                    title: '#title-text',
                    description: '#helpModalContent',
                    exitButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-campaign-card-transactions-without-participant-purchases-error-modal-button-text"]',
                },
                // error no participants cards
                errorModalNoParticipantsCards: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-generic-modal"][modal-name="campaign-without-participating-cards-error-modal"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '#btn-close',
                    icon: '[data-tag-name="bbva-type-icon"]',
                    title: '#title-text',
                    description: '#helpModalContent',
                    exitButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-campaign-without-participating-cards-error-modal-button-text"]',
                },
                // limit purchases exceeded
                errorLimitPurchasesExceeded: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-generic-modal"][modal-name="revolving-balance-amount-exceeded-error-modal"]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '#btn-close',
                    icon: '[data-tag-name="bbva-type-icon"]',
                    description: '#helpModalContent',
                    exitButton: '[data-tag-name="bbva-button-default"]'
                },
                // error insufficients funds
                errorModalInsufficientFunds: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-invitation-enrollment-generic-modal"][modal-name="campaign-card-transactions-apply-promotion-insufficient-funds-error-modal"]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '#btn-close',
                    icon: '[data-tag-name="bbva-type-icon"]',
                    description: '#helpModalContent',
                    continueButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-campaign-card-transactions-apply-promotion-insufficient-funds-error-modal-button-text"]'
                },
                // exit modal
                exitModal: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][modal-type="caution"][aria-label="rewards-promotions-invitation-enrollment-exit-modal-header-text"][visible]'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    closeButton: '#btn-close',
                    icon: '[data-tag-name="bbva-type-icon"].title-icon',
                    description: '[text="rewards-promotions-invitation-enrollment-exit-modal-body-text"]',
                    continueButton: '[data-tag-name="bbva-button-default"][variant="link"]',
                    exitButton: '[data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-exit-modal-button-text"]'
                }
            },
            requiredElements: ['root']
        });
    }

    async selectCard(cardType) {
        await this.modalActivatePromotion.cardSingle.name.waitForExist({timeout: config.wait.M});
        if (cardType === 'various') {
            await (await this.modalActivatePromotion.cardVarious.name.specifySelector({placeholder: '__NUMBER__', value: 2})).waitForDisplayed({timeout: config.wait.M});
            await (await this.modalActivatePromotion.cardVarious.name.specifySelector({placeholder: '__NUMBER__', value: 2})).waitForAnimation({timeout: config.wait.M});
            await (await this.modalActivatePromotion.cardVarious.name.specifySelector({placeholder: '__NUMBER__', value: 2})).click();
        }
    }

    async continueToParticipants() {
        await this.modalActivatePromotion.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalActivatePromotion.continueButton.waitForAnimation({timeout: config.wait.M});
        await this.modalActivatePromotion.continueButton.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async openSelectPurchases() {
        await this.modalActivatePromotion.selectPurchaseButton.waitForDisplayed({ timeout: config.wait.M });
        await this.modalActivatePromotion.selectPurchaseButton.waitForAnimation({ timeout: config.wait.M });
        await this.modalActivatePromotion.selectPurchaseButton.click({ useActions: false, scrollOptions: { block: 'end' } });
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.M
        });
    }

    async selectPurchases() {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XL,
        });
        const element = await (await this.modalSelectPurchases.checks.elements()).value[0];
        await element.waitForAnimation({ timeout: config.wait.M });
        await element.waitForDisplayed({ timeout: config.wait.M });
        await element.waitForAnimation({ timeout: config.wait.M });
        await element.click({
            useActions: false,
            scrollOptions: {block: 'nearest'}
        });
        await this.scrollShopping();
        await this.modalSelectPurchases.saveButton.waitForExist({timeout: config.wait.M});
        await this.modalSelectPurchases.saveButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalSelectPurchases.saveButton.waitForAnimation({timeout: config.wait.M});
        await this.modalSelectPurchases.saveButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.M
        });
    }

    async scrollShopping(allowed = global.user.pushDataApproved.period){
        for (let i = 1; i < allowed; i++) {
            await this.waitForElementsExist(this.modalSelectPurchases.checks);
            const element = await (await this.modalSelectPurchases.checks.elements()).value[i];
            await element.waitForDisplayed({timeout: config.wait.M});
            await element.waitForExist({timeout: config.wait.M});
            await element.scrollIntoView({block: 'start'});
            await element.waitForAnimation({timeout: config.wait.M});
        }
    }

    async selectVariousPurchases(allowed = global.user.pushDataApproved.offerrId) {
        for (let i = 0; i < allowed; i++) {
            const element = await (await this.modalSelectPurchases.checks.elements()).value[i];
            await element.waitForDisplayed({timeout: config.wait.M});
            await element.waitForExist({timeout: config.wait.M});
            await element.scrollIntoView({block: 'start'});
            await element.click({useActions: false, scrollOptions: {block: 'start'}});
            await element.waitForAnimation({timeout: config.wait.M});
        }
    }

    async continueToApplyPromotions() {
        await this.modalActivatePromotion.continueToApplyPromotionButton.waitForExist({timeout: config.wait.M});
        await this.modalActivatePromotion.continueToApplyPromotionButton.waitForEnabled({timeout: config.wait.M});
        await this.modalActivatePromotion.continueToApplyPromotionButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalActivatePromotion.continueToApplyPromotionButton.waitForAnimation({timeout: config.wait.M});
        await this.modalActivatePromotion.continueToApplyPromotionButton.click({useActions: false, scrollOptions: {block: 'end'}
        });
    }

    async confirmEnrollmentPromotion() {
        await this.modalActivatePromotion.confirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalActivatePromotion.confirmButton.waitForAnimation({timeout: config.wait.M});
        await this.modalActivatePromotion.confirmButton.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async removesPurchaseSelection() {
        await this.modalActivatePromotion.participantsPurchases.removeButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalActivatePromotion.participantsPurchases.removeButton.waitForAnimation({timeout: config.wait.M});
        await this.modalActivatePromotion.participantsPurchases.removeButton.click({useJS: true});
    }

    async closeOperative() {
        await this.modalActivatePromotion.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalActivatePromotion.closeButton.waitForAnimation({timeout: config.wait.M});
        await this.modalActivatePromotion.closeButton.click();
    }

    async retryModal(times) {
        for (let i = 0; i < times; i++) {
            await this.errorEnrollmentPromotion.retryButton.waitForDisplayed({timeout: config.wait.M});
            await this.errorEnrollmentPromotion.retryButton.waitForAnimation({timeout: config.wait.M});
            await this.errorEnrollmentPromotion.retryButton.click({useActions: false, scrollOptions: {block: 'end'}});
            await this.waitUntilSpinnerVeil({
                timeoutToAppear: config.wait.XS,
                timeoutToDisappear: config.wait.M
            });
        }
    }

    async continueProcess(){
        await this.errorModalInsufficientFunds.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.errorModalInsufficientFunds.continueButton.waitForAnimation({timeout: config.wait.M});
        await this.errorModalInsufficientFunds.continueButton.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async closeDialog(){
        await this.errorModalInsufficientFunds.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.errorModalInsufficientFunds.closeButton.waitForAnimation({timeout: config.wait.M});
        await this.errorModalInsufficientFunds.closeButton.click();
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'enrollment promotion header':
                await this.modalActivationEnrollmentSuccess.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment promotion description':
                await this.modalActivationEnrollmentSuccess.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment promotion exit button':
                await this.modalActivationEnrollmentSuccess.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success image':
                await this.modalActivationEnrollmentSuccess.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success title':
                await this.modalActivationEnrollmentSuccess.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success description':
                await this.modalActivationEnrollmentSuccess.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success date label':
                await this.modalActivationEnrollmentSuccess.operationDateLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success date value':
                await this.modalActivationEnrollmentSuccess.operationDateValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success participant cards label':
                await this.modalActivationEnrollmentSuccess.participantCardLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success participant cards value':
                await this.modalActivationEnrollmentSuccess.participantCardValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success campaign label':
                await this.modalActivationEnrollmentSuccess.campaignCardLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success campaign value':
                await this.modalActivationEnrollmentSuccess.campaignCardValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion name label':
                await this.modalActivationEnrollmentSuccess.promotionLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion name value':
                await this.modalActivationEnrollmentSuccess.promotionValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion period label':
                await this.modalActivationEnrollmentSuccess.expirationDatePromotionLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion period value':
                await this.modalActivationEnrollmentSuccess.expirationDatePromotionValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion sheet label':
                await this.modalActivationEnrollmentSuccess.sheetLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion sheet value':
                await this.modalActivationEnrollmentSuccess.sheetValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion info message':
                await this.modalActivationEnrollmentSuccess.disclaimer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enrollment success promotion share button':
                await this.modalActivationEnrollmentSuccess.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already promotion activate modal header':
                await this.modalActiveEnrollmentAlready.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already promotion activate modal close button':
                await this.modalActiveEnrollmentAlready.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already promotion activate modal title':
                await this.modalActiveEnrollmentAlready.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already promotion activate modal icon':
                await this.modalActiveEnrollmentAlready.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already promotion activate modal description':
                await this.modalActiveEnrollmentAlready.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already promotion activate modal exit':
                await this.modalActiveEnrollmentAlready.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion header':
                await (await (await this.modalActivatePromotion.header.waitForAnimation({timeout: config.wait.M}))
                    .scrollIntoView({block: 'start'}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion close button':
                await this.modalActivatePromotion.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate campaign label':
                await this.modalActivatePromotion.campaignLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate campaign value':
                await this.modalActivatePromotion.campaignValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion type label':
                await this.modalActivatePromotion.promotionTypeLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion type value':
                await this.modalActivatePromotion.promotionTypeValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion card title':
                await this.modalActivatePromotion.cardSingle.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion card title selected':
                await this.modalActivatePromotion.cardSingle.summaryTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card name':
                await this.modalActivatePromotion.cardSingle.name.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card number':
                await this.modalActivatePromotion.cardSingle.number.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card amount':
                await this.modalActivatePromotion.cardSingle.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card description':
                await this.modalActivatePromotion.cardSingle.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card name selected':
                await this.modalActivatePromotion.cardSingle.summaryName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card number selected':
                await this.modalActivatePromotion.cardSingle.summaryNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card amount selected':
                await this.modalActivatePromotion.cardSingle.summaryAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion single card description selected':
                await this.modalActivatePromotion.cardSingle.summaryDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal activate promotion second card name':
                await this.modalActivatePromotion.cardVarious.name.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'modal activate promotion second card number':
                await this.modalActivatePromotion.cardVarious.number.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'modal activate promotion second card amount':
                await this.modalActivatePromotion.cardVarious.amount.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'modal activate promotion second card description':
                await this.modalActivatePromotion.cardVarious.description.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'modal activate promotion continue button':
                await this.modalActivatePromotion.continueButton.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible',
                });
                break;
            case 'apply promotion continue button':
                await this.modalActivatePromotion.summaryContinueButton.waitForDisplayed({timeout: config.wait.M});
                await this.modalActivatePromotion.summaryContinueButton.waitForEnabled({
                    timeout: config.wait.M,
                    reverse: value === 'disabled'
                });
                break;
            case 'select purchases button':
                await this.modalActivatePromotion.selectPurchaseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select purchases header':
                await this.modalSelectPurchases.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select purchases exit button':
                await this.modalSelectPurchases.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases dates':
                await this.modalSelectPurchases.dates.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases check':
                await this.modalSelectPurchases.check.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases name':
                await this.modalSelectPurchases.name.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases value':
                await this.modalSelectPurchases.value.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases advertisement message':
                await this.modalSelectPurchases.message.waitForExist({timeout: config.wait.M});
                await this.modalSelectPurchases.message.scrollIntoView({block: 'center'});
                await this.modalSelectPurchases.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases continue button':
                await this.modalSelectPurchases.saveButton.waitForDisplayed({timeout: config.wait.M});
                await this.modalSelectPurchases.saveButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'confim button':
                await this.modalActivatePromotion.confirmButton.waitForDisplayed({timeout: config.wait.M});
                await this.modalActivatePromotion.confirmButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'error enrollment promotion modal header':
            case 'apply promotion error modal header':
                await this.errorEnrollmentPromotion.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error enrollment promotion modal close button':
            case 'apply promotion error modal close button':
                await this.errorEnrollmentPromotion.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error enrollment promotion modal icon':
            case 'apply promotion error modal icon':
                await this.errorEnrollmentPromotion.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error enrollment promotion modal description':
            case 'apply promotion error modal description':
                await this.errorEnrollmentPromotion.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error enrollment promotion modal exit button':
            case 'apply promotion error modal call bbva button':
                await this.errorEnrollmentPromotion.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error enrollment promotion modal retry button':
                await this.errorEnrollmentPromotion.retryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no purchases modal header':
                await this.errorModalWithoutPurchases.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no purchases modal close button':
                await this.errorModalWithoutPurchases.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no purchases modal title':
                await this.errorModalWithoutPurchases.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no purchases modal icon':
                await this.errorModalWithoutPurchases.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no purchases modal description':
                await this.errorModalWithoutPurchases.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no purchases modal exit button':
                await this.errorModalWithoutPurchases.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no participants cards modal header':
                await this.errorModalNoParticipantsCards.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no participants cards modal close button':
                await this.errorModalNoParticipantsCards.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no participants cards modal title':
                await this.errorModalNoParticipantsCards.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no participants cards modal icon':
                await this.errorModalNoParticipantsCards.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no participants cards modal description':
                await this.errorModalNoParticipantsCards.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no participants cards modal exit button':
                await this.errorModalNoParticipantsCards.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit exceeded modal header':
                await this.errorLimitPurchasesExceeded.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit exceeded modal close button':
                await this.errorLimitPurchasesExceeded.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit exceeded modal icon':
                await this.errorLimitPurchasesExceeded.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit exceeded modal description':
                await this.errorLimitPurchasesExceeded.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit exceeded modal exit button':
                await this.errorLimitPurchasesExceeded.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient funds modal header':
                await this.errorModalInsufficientFunds.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient funds modal close button':
                await this.errorModalInsufficientFunds.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient funds modal icon':
                await this.errorModalInsufficientFunds.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient funds modal description':
                await this.errorModalInsufficientFunds.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient funds modal continue button':
                await this.errorModalInsufficientFunds.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases total amount selection':
                await this.modalActivatePromotion.participantsPurchases.totalAmountValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases total amount title':
                await this.modalActivatePromotion.participantsPurchases.totalAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases remove button':
                await this.modalActivatePromotion.participantsPurchases.removeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases amount':
                await this.modalActivatePromotion.participantsPurchases.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases name':
                await this.modalActivatePromotion.participantsPurchases.name.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases selection message':
                await this.modalActivatePromotion.participantsPurchases.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases selection title':
                await this.modalActivatePromotion.participantsPurchases.selectionTitle.waitForExist({timeout: config.wait.M});
                break;
            case 'participants purchases selection name':
                await this.modalActivatePromotion.participantsPurchases.selectionName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases selection amount':
                await this.modalActivatePromotion.participantsPurchases.selectionAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases selection change button':
                await this.modalActivatePromotion.participantsPurchases.selectionChangeButton.waitForExist({timeout: config.wait.M});
                await this.modalActivatePromotion.participantsPurchases.selectionChangeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases selection total amount title':
                await this.modalActivatePromotion.participantsPurchases.selectionTotalAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants purchases selection total amount value':
                await this.modalActivatePromotion.participantsPurchases.selectionTotalAmountValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.modalActivatePromotion.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close enrollment promotion modal header':
                await this.exitModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close enrollment promotion modal close button':
                await this.exitModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close enrollment promotion modal description':
                await this.exitModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close enrollment promotion modal icon':
                await this.exitModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close enrollment promotion modal exit':
                await this.exitModal.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close enrollment promotion modal continue button':
                await this.exitModal.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InvitationEnrollmentPromotions();
