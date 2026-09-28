import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('billPaymentsHome')
class BillPaymentsHome extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-billPaymentsHome[state="active"]',
            elements: {
                serviceStored: {
                    properties: {root: '[data-tag-name="service-stored"] '},
                    resultManualPayment: '#item0',
                    serviceSchedulePayment: '#item5',
                    serviceProgrammableSchedulePayment: '#item8'
                },
                detailStoredService: {
                    properties: {root: '[data-tag-name="detail-stored-service"] '},
                    header: '#backHeader #heading',
                    goBackButton: '#backHeader #btn-back',
                    storedIcon: '.panel-process [data-tag-name="bbva-clip-box"]',
                    storedTitle: '.panel-process .title',
                    storedDescription: '.panel-process .description',
                    storedReference: '.panel-process [text="account-transaction-servicing-bill-payments-home-mx-reference"] ',
                    payService: '#buttons div.label-container [text="account-transaction-servicing-bill-payments-home-mx-pay-service"]',
                    schedulePayment: '#buttons div.label-container [text="account-transaction-servicing-bill-payments-home-mx-schedule-payment"]',
                    buttonDeleteServiceManual: '#buttons div.label-container [text="account-transaction-servicing-bill-payments-home-mx-delete-service"]',
                    scheduleServices: '#buttons .list-item',
                },
                detailServiceScheduled: {
                    properties: {root: '[data-tag-name="detail-direct-debits-service"] '},
                    header: '[data-tag-name="bbva-header-main"][variant="first-level-sequential"] #heading',
                    goBackButton: '[data-tag-name="bbva-header-main"][variant="first-level-sequential"] #btn-back',
                    storedIcon: '.content-body [data-tag-name="bbva-clip-box"]',
                    storedTitle: '.content-body [data-selector="bbva-type-text-name"] .text.lines',
                    storedDescription: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-scheduled-payment"]',
                    storedReference: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-reference"]',
                    programmingDetails: '#buttons div.label-container [text="account-transaction-servicing-bill-payments-home-mx-programming-details"]',
                },
                modalDirectDebitsService: {
                    properties: {root: '[data-tag-name="detail-modal-direct-debits-service"] '},
                    header: '#heading',
                    goBackButton: '#btn-back',
                    storedIcon: '.content-data-service [data-tag-name="bbva-clip-box"]',
                    storedTitle: '.content-data-service [data-selector="bbva-type-text-name"]',
                    storedDescription: '.content-data-service [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-scheduled-payment"]',
                    storedReference: '[data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-reference"]',
                    programmingDetails: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-periodicity"]',
                    holder: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-title-holder"]',
                    paymentMethod: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-payment-method"]',
                    operationType: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-type-of-operation"]',
                    maxAmount: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-maximum-amount-title"]',
                    periodicity: '.content-body [data-tag-name="bbva-type-text"][text="account-transaction-servicing-bill-payments-home-mx-periodicity"]',
                    editSchedulingDetail: '#buttons div.label-container [text="account-transaction-servicing-bill-payments-home-mx-edit"]',
                    cancelSchedulingDetail: '#buttons div.label-container [text="account-transaction-servicing-bill-payments-home-mx-cancel"]',
                },
                principalBillPaymentsHome: {
                    properties: {root: '[data-tag-name="principal-bill-payments-home"] '},
                    header: '[data-tag-name="bbva-header-main"]#headerMultistep .header #heading',
                    goBackButton: '[data-tag-name="bbva-header-main"]#headerMultistep #btn-back',
                    payNew: '#initialTooltipRow [data-tag-name="bbva-button-row"] bbva-button-action [text="account-transaction-servicing-bill-payments-home-mx-pay-new"]',
                    schedulePayment: '#initialTooltipRow [data-tag-name="bbva-button-row"] bbva-button-action [text="account-transaction-servicing-bill-payments-home-mx-schedule-payment"]',
                    savedServicesTitle: '#initialTooltipMessage .title-container [data-tag-name="bbva-core-heading"]',
                    buttonBillPaymentsDashboard: 'button.list-link [text="account-transaction-servicing-bill-payments-home-mx-manual-payment"]',
                    buttonScheduledPaymentsDashboard: 'button.list-link [text="account-transaction-servicing-bill-payments-home-mx-scheduled-payment"]',
                    noSavedServices: '[data-tag-name="bbva-notification-message"][message-title="account-transaction-servicing-bill-payments-home-mx-no-saved-services-yet"]',
                    payServiceLink: '[data-tag-name="bbva-notification-message"] .link [data-tag-name="bbva-type-link"]',
                    noServicesText: '[data-tag-name="bbva-notification-message"] .description'
                },
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    modalDeleteService: {
                        properties: {
                            root: '#modalDeleteService '
                        },
                        accept: '.modal-footer bbva-button-default[class="footer-button"]:not(.link)',
                        cancel: 'bbva-button-default.footer-button.link'
                    },
                    modalErrorApiDeleteService: {
                        properties: {
                            root: '#modalErrorApiDeleteService '
                        },
                        header: '#helpModalHeader #heading',
                        close: '#helpModalHeader #btn-close',
                        warningIcon: '.title-icon svg',
                        title: '#title-text',
                        description: '.modal-content .slot-content [data-tag-name="bbva-type-text"]',
                        exit: 'bbva-button-default.footer-button.link',
                        retry: 'bbva-button-default:nth-of-type(1)',
                    },
                    modalErrorApiDetailDebitService: {
                        properties: {
                            root: '#modalErrorApiDetailDebitService '
                        },
                        header: '#helpModalHeader #heading',
                        close: '#helpModalHeader #btn-close',
                        warningIcon: '.title-icon svg',
                        title: '#title-text',
                        description: '.modal-content .slot-content [data-tag-name="bbva-type-text"]',
                        exit: 'bbva-button-default.footer-button.link',
                        retry: 'bbva-button-default:nth-of-type(1)',
                    },
                },
                modalErorHome: {
                    properties: {root: '[data-tag-name="bbva-help-modal"][modal-type="error"][header-text="account-transaction-servicing-bill-payments-home-mx-error"] '},
                    header: '.header #heading',
                    close: '#btn-close',
                    warningIcon: '.title-icon svg',
                    title: '#title-text',
                    description: '.modal-content .slot-content [data-tag-name="bbva-type-text"]',
                    retry: '.slot-footer bbva-button-default:nth-of-type(1)',
                    exit: '.slot-footer bbva-button-default.footer-button.link',
                },
                errorDeleteService: {
                    properties: {root: '[data-tag-name="bbva-help-modal"][modal-type="error"][header-text="account-transaction-servicing-bill-payments-home-mx-error"] '},
                    header: '.header #heading',
                    close: '#btn-close',
                    warningIcon: '.title-icon svg',
                    title: '#title-text',
                    description: '.modal-content .slot-content [data-tag-name="bbva-type-text"]',
                    retry: '.slot-footer bbva-button-default:nth-of-type(1)',
                    exit: '.slot-footer bbva-button-default.footer-button.link',
                },
                buttonManualPayment: '.footer-content button bbva-type-text[text="account-transaction-servicing-bill-payments-home-mx-manual-payment"]',
                buttonScheduledPayment: '.footer-content button bbva-type-text[text="account-transaction-servicing-bill-payments-home-mx-scheduled-payment"]',
                modalOnboarding: {
                    properties: {root: 'bbva-help-modal[data-tag-name="bbva-help-modal"][visible][button-text="Aceptar"] '},
                    onboardingPlay: '.play',
                    onboardingNext: '.next',
                    onboardingAccept: 'bbva-button-default.action-button[text="Aceptar"]',
                },
                modalDeleteService: {
                    properties: {root: '#modalDeleteService '},
                    exit: '#helpModalHeader #btn-close',
                    cancel: '[data-tag-name="bbva-type-link"]',
                    accept: '[data-tag-name="bbva-button-default"]',
                },
                header: '#principalPage #headerMultistep .header-main',
                resultScheduledPayment: '[data-tag-name="direct-debits-service"] #item0',
                buttonScheduledPaymentOptions: '#initialTooltipMessage div div.footer-content div:nth-child(6)',
                tooltipLinkOne: '#initialTooltipRow #tooltip [data-tag-name="bbva-type-text"].link',
                tooltipLinkTwo: '#initialTooltipMessage #tooltip [data-tag-name="bbva-type-text"].link',
                programmingData: '[text="account-transaction-servicing-bill-payments-home-programming-data"]',
                buttonProgrammingDetail: '[data-tag-name="detail-direct-debits-service"] [data-tag-name="bbva-button-action"]'
            },
            requiredElements: ['root'],
        });
    }

    async completeTooltip() {
        await (await (await this.tooltipLinkOne.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
        await (await (await this.tooltipLinkTwo.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async selectsManualPayment() {
        await (await (await this.buttonManualPayment.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectServiceManual() {
        await (await (await this.serviceStored.serviceSchedulePayment.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectProgrammableServiceManual() {
        await (await (await this.serviceStored.serviceProgrammableSchedulePayment.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectsServiceDetail() {
        await (await (await this.serviceStored.resultManualPayment.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectEditService() {
        await (await (await this.modalDirectDebitsService.editSchedulingDetail.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectsScheduledPayment() {
        await (await (await this.buttonScheduledPayment.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectsScheduledPaymentDetail() {
        await (await (await this.resultScheduledPayment.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectsProgrammingDetail() {
        await (await (await this.buttonProgrammingDetail.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectsDeleteService() {
        await (await (await this.detailStoredService.buttonDeleteServiceManual.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async closeDialog() {
        await (await (await this.modalDeleteService.exit.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async cancelDelete() {
        await (await (await this.modalsContainer.modalDeleteService.cancel.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
    }

    async acceptDelete() {
        await (await (await this.modalsContainer.modalDeleteService.accept.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
    }

    async carouselAccept() {
        await this.modalOnboarding.onboardingAccept.waitForDisplayed({timeout: config.wait.M});
        await this.modalOnboarding.onboardingAccept.waitForAnimation({timeout: config.wait.M});
        await this.modalOnboarding.onboardingAccept.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async carouselPlay() {
        await this.modalOnboarding.onboardingPlay.waitForDisplayed({timeout: config.wait.M});
        await this.modalOnboarding.onboardingPlay.click();
        await this.modalOnboarding.onboardingNext.waitForDisplayed({timeout: config.wait.M});
        await this.modalOnboarding.onboardingNext.click();
        await this.modalOnboarding.onboardingNext.waitForDisplayed({timeout: config.wait.M});
        await this.modalOnboarding.onboardingNext.click();
        await this.modalOnboarding.onboardingAccept.waitForDisplayed({timeout: config.wait.M});
        await this.modalOnboarding.onboardingAccept.click();
    }

    async accessToBillPaymentsDashboard() {
        await this.completeTooltip();
        await (await (await this.principalBillPaymentsHome.payNew.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async accessToScheduledPaymentsDashboard() {
        await (await (await this.principalBillPaymentsHome.schedulePayment.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
    }
    async selectsScheduleService() {
        await (await (await this.buttonScheduledPaymentOptions.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectsScheduleManualService() {
        await this.waitForElementsExist(this.detailStoredService.scheduleServices, config.wait.M);
        await (await (await (await this.detailStoredService.scheduleServices.elements()).value[1].waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete services':
                await this.detailStoredService.buttonDeleteServiceManual.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail':
                await this.buttonProgrammingDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference':
                await this.modalDirectDebitsService.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming data':
                await this.programmingData.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit scheduling':
                await this.modalDirectDebitsService.editSchedulingDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel scheduling':
                await this.modalDirectDebitsService.cancelSchedulingDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'manual payment':
                await this.buttonManualPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - header':
                await this.detailStoredService.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - go back':
                await this.detailStoredService.goBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - stored icon':
                await this.detailStoredService.storedIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - stored title':
                await this.detailStoredService.storedTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - stored description':
                await this.detailStoredService.storedDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - stored reference':
                await this.detailStoredService.storedReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored service - pay service':
                await this.detailStoredService.payService.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'detail stored service - schedule payment':
                await this.detailStoredService.schedulePayment.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'detail stored service - delete service':
                await this.detailStoredService.buttonDeleteServiceManual.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'detail stored scheduled - header':
                await this.detailServiceScheduled.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored scheduled - go back':
                await this.detailServiceScheduled.goBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored scheduled - stored icon':
                await this.detailServiceScheduled.storedIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored scheduled - stored title':
                await this.detailServiceScheduled.storedTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored scheduled - stored description':
                await this.detailServiceScheduled.storedDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored scheduled - stored reference':
                await this.detailServiceScheduled.storedReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail stored scheduled - programming details':
                await this.detailServiceScheduled.programmingDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - header':
                await this.modalDirectDebitsService.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - go back':
                await this.modalDirectDebitsService.goBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - stored icon':
                await this.modalDirectDebitsService.storedIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - stored title':
                await this.modalDirectDebitsService.storedTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - stored description':
                await this.modalDirectDebitsService.storedDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - stored reference':
                await this.modalDirectDebitsService.storedReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - programming details':
                await this.modalDirectDebitsService.programmingDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - holder':
                await this.modalDirectDebitsService.holder.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - payment method':
                await this.modalDirectDebitsService.paymentMethod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - operation type':
                await this.modalDirectDebitsService.operationType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - max amount':
                await this.modalDirectDebitsService.maxAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - periodicity':
                await this.modalDirectDebitsService.periodicity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - edit scheduling':
                await this.modalDirectDebitsService.editSchedulingDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'programming detail - cancel scheduling':
                await this.modalDirectDebitsService.cancelSchedulingDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay service or tax - header':
                await this.principalBillPaymentsHome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay service or tax - go back':
                await this.principalBillPaymentsHome.goBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay service or tax - pay new':
                await this.principalBillPaymentsHome.payNew.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay service or tax - schedule payment':
                await this.principalBillPaymentsHome.schedulePayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay service or tax - saved-services':
                await this.principalBillPaymentsHome.savedServicesTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay service or tax - manual payment':
                await this.principalBillPaymentsHome.buttonBillPaymentsDashboard.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'pay service or tax - scheduled payment':
                await this.principalBillPaymentsHome.buttonScheduledPaymentsDashboard.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'pay service or tax - no saved services':
                await this.principalBillPaymentsHome.noSavedServices.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'pay service or tax - no services text':
                await this.principalBillPaymentsHome.noServicesText.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'pay service or tax - pay service':
                await this.principalBillPaymentsHome.payServiceLink.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'error modal home - header':
                await this.modalErorHome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal home - close':
                await this.modalErorHome.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal home - warning icon':
                await this.modalErorHome.warningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal home - title':
                await this.modalErorHome.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal home - description':
                await this.modalErorHome.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal home - retry':
                await this.modalErorHome.retry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal home - exit':
                await this.modalErorHome.exit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error delete service - header':
                await this.modalsContainer.modalErrorApiDeleteService.header.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'error delete service - close':
                await this.modalsContainer.modalErrorApiDeleteService.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error delete service - warning icon':
                await this.modalsContainer.modalErrorApiDeleteService.warningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error delete service - title':
                await this.modalsContainer.modalErrorApiDeleteService.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error delete service - description':
                await this.modalsContainer.modalErrorApiDeleteService.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error delete service - retry':
                await this.modalsContainer.modalErrorApiDeleteService.retry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error delete service - exit':
                await this.modalsContainer.modalErrorApiDeleteService.exit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - header':
                await this.modalsContainer.modalErrorApiDetailDebitService.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - close':
                await this.modalsContainer.modalErrorApiDetailDebitService.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - warning icon':
                await this.modalsContainer.modalErrorApiDetailDebitService.warningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - title':
                await this.modalsContainer.modalErrorApiDetailDebitService.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - description':
                await this.modalsContainer.modalErrorApiDetailDebitService.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - retry':
                await this.modalsContainer.modalErrorApiDetailDebitService.retry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error detail debit service - exit':
                await this.modalsContainer.modalErrorApiDetailDebitService.exit.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new BillPaymentsHome();
