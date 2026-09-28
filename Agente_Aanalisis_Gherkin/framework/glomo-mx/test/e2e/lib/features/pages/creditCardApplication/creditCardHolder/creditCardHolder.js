import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../../abstract-glomo-page';
import CardOriginationStopLossMx from '../../../components/card-origination-stop-loss-mx.js';

@page('CreditCardHolder')
class CreditCardHolder extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-creditCardHolderSpherica[state="active"]',
            elements: {
                component: {
                    properties: {
                        root: '[data-tag-name="card-origination-oc-credit-card-holder-mx"]'
                    },
                    offerPage: {
                        properties: {
                            root: '[data-tag-name="oc-credit-card-holder-mx-offer-page"] [data-tag-name="bbva-help-modal"]'
                        },
                        header: '#helpModalHeader',
                        close: '#btn-close',
                        panel: '[data-tag-name="bbva-panel-container"]',
                        benefitsHdr: '.content-details [data-tag-name="bbva-header-category"]',
                        benefitsPanel: '.content-details [data-tag-name="bbva-panel-container"]',
                        detailsModal: '.content-details [data-tag-name="bbva-panel-container"] #principal-benefit-info',
                        benefitsList: '.content-details [data-tag-name="bbva-list-bullet"]',
                        notification: '[data-tag-name="bbva-notification-message"][variant="caution"]',
                        seeOffer: '.modal-footer .slot-footer [data-tag-name="bbva-button-default"]'
                    },
                    multiStep: {
                        properties: {
                            root: '[data-tag-name="oc-credit-card-holder-mx-multistep"]'
                        },
                        close: '[data-tag-name="bbva-help-modal"] #btn-close',
                        steps: '[data-tag-name="bbva-expandable-multistep"]',
                        offer: {
                            properties: {
                                root: '#offerInformationStep'
                            },
                            header: '.default-content .header-step [data-tag-name="bbva-core-heading"]',
                            description: '[data-tag-name="offer-information-step"] div:first-child [data-tag-name="bbva-type-text"]',
                            lineHeader: '[data-tag-name="offer-information-step"] .content-space [data-tag-name="bbva-header-category"]',
                            lineImg: '[data-tag-name="offer-information-step"] .content-space div[part="card-inline"] [data-tag-name="bbva-clip-card"]',
                            lineCardName: '[data-tag-name="offer-information-step"] .content-space div[part="card-inline"] [data-tag-name="bbva-type-text"]',
                            lineEnjoyUntil: '[data-tag-name="offer-information-step"] .content-space [data-tag-name="bbva-type-text"]',
                            lineAmount: '[data-tag-name="offer-information-step"] .content-space [data-tag-name="bbva-type-amount"]',
                            lineEdit: '[data-tag-name="offer-information-step"] #edit-credit-line',
                            feesHeader: '[data-tag-name="offer-information-step"] .spaces-content-costs [data-tag-name="bbva-expandable-accordion"] .header',
                            interestRate: '[data-tag-name="offer-information-step"] #interest-rate',
                            catWithoutIva: '[data-tag-name="offer-information-step"] #cat-without-iva',
                            seeConditions: '[data-tag-name="offer-information-step"] #view-conditions-link',
                            continue: '[data-tag-name="offer-information-step"] .space-button [data-tag-name="bbva-button-default"]',
                            advisorCall: '[data-tag-name="offer-information-step"] .space-button [data-tag-name="bbva-type-link"]',
                            editButton: '#editButton'
                        },
                        fiscal: {
                            properties: {
                                root: '#customerFiscalDataStep'
                            },
                            header: '.default-content .header-step [data-tag-name="bbva-core-heading"]',
                            description: '[data-tag-name="customer-fiscal-data-step"] div:first-child [data-tag-name="bbva-type-text"]',
                            input: '.content-rfc [data-tag-name="bbva-form-input"] input',
                            inputError: '.content-rfc [data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-text"] .message.error [data-tag-name="bbva-notification-help"][variant="alert"]',
                            formSelect: '.content-rfc [data-tag-name="bbva-form-select"]',
                            optionSingle: '.content-rfc [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"][value="S"]',
                            check: '#check-fiscal-data',
                            checkActive: '#check-fiscal-data[checked]',
                            privacyLink: '[data-tag-name="customer-fiscal-data-step"] .privacy-message [data-tag-name="bbva-type-link"]',
                            continue: '[data-tag-name="customer-fiscal-data-step"] [data-tag-name="bbva-button-default"].content-space',
                        },
                        payment: {
                            properties: {
                                root: '#paymentSettingsStep'
                            },
                            header: '.default-content .header-step [data-tag-name="bbva-core-heading"]',
                            description: '[data-tag-name="payment-settings-step"] [data-tag-name="bbva-type-text"]',
                            deadlineModal: '[data-tag-name="payment-settings-step"] .content-date-information [data-tag-name="bbva-type-link"]',
                            deadlineSelect: '[data-tag-name="payment-settings-step"] .content-space [data-tag-name="bbva-panel-container"] [data-tag-name="bbva-form-select"] #button',
                            deadlineOption: '[data-tag-name="payment-settings-step"] .content-space [data-tag-name="bbva-panel-container"] [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"]',
                            deadlineList: '[data-tag-name="payment-settings-step"] .content-space [data-tag-name="bbva-panel-container"] [data-tag-name="list-simple"]',
                            directDebitModal: '[data-tag-name="payment-settings-step"]  #type-link-direct-debit',
                            toggleOff: '[data-tag-name="payment-settings-step"] .radio-button-styles #payment-toggle:not([checked])',
                            toggle: '[data-tag-name="payment-settings-step"] .radio-button-styles #payment-toggle [data-tag-name="bbva-form-toggle-switch"]',
                            options: '[data-tag-name="payment-settings-step"] .radio-button-styles [data-tag-name="bbva-form-radio-button"]',
                            optionsSelected: '[data-tag-name="payment-settings-step"] .radio-button-styles [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"]',
                            optionActive: '[data-tag-name="payment-settings-step"] .radio-button-styles [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][aria-checked="true"]',
                            optionInactive: '[data-tag-name="payment-settings-step"] .radio-button-styles [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][aria-checked="false"]',
                            accountList: '[data-tag-name="payment-settings-step"] .radio-button-styles [data-tag-name="list-simple"]',
                            notification: '[data-tag-name="payment-settings-step"] [data-tag-name="bbva-notification-message"].notification-space',
                            continue: '#payment-settings-continue',
                            editButton: '#editButton'
                        },
                        address: {
                            properties: {
                                root: '#deliveryAddressStep'
                            },
                            header: '.default-content .header-step [data-tag-name="bbva-core-heading"]',
                            infoModal: '[data-tag-name="delivery-address-step"] .content-date-information #type-link-address-information',
                            homeRadio: '[data-tag-name="delivery-address-step"] .content-address #home',
                            homeRadioOff: '[data-tag-name="delivery-address-step"] .content-address #home[aria-checked="false"]',
                            addrObfuscated: '[data-tag-name="delivery-address-step"][is-unmasked-address]',
                            addrUnmasked: '[data-tag-name="delivery-address-step"]:not([is-unmasked-address])',
                            showAddress: '[data-tag-name="delivery-address-step"] .content-address [data-tag-name="bbva-type-link"]',
                            branchRadio: '[data-tag-name="delivery-address-step"] .content-address #branch',
                            branchOfficeRadio: '[data-tag-name="delivery-address-step"] .content-address #office',
                            branchRadioOn: '[data-tag-name="delivery-address-step"] .content-address #branch[aria-checked="true"]',
                            notification: '[data-tag-name="delivery-address-step"] [data-tag-name="bbva-notification-message"].notification-space',
                            continue: '#button-confirm-address',
                            editButton: '#editButton'
                        },
                        terms: {
                            properties: {
                                root: '#termsAndConditionsStep'
                            },
                            header: '.default-content .header-step [data-tag-name="bbva-core-heading"]',
                            description: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-type-text"]',
                            listBullet: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-list-bullet"]',
                            docsHeader: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-expandable-accordion"] .header',
                            docsContainer: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-expandable-accordion"] .content-pdfs__document',
                            docsPdfs: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-expandable-accordion"] .content-pdfs:nth-child(__INDEX__) [data-tag-name="bbva-type-link"]',
                            docsCheck: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-form-checkbox"]',
                            expandableAccordion: '[data-tag-name="terms-and-conditions-step"] [data-tag-name="bbva-expandable-accordion"]',
                            continue: '#btn-confirm-terms',
                            editButton: '#editButton'
                        },
                        summary: {
                            properties: { root: '' },
                            allCompleted: '[data-tag-name="bbva-expandable-multistep"][all-completed]',
                            requestCard: '[data-tag-name="bbva-expandable-multistep"] #multistep-submit'
                        }
                    },
                    modals: {
                        properties: {
                            root: '[data-tag-name="oc-credit-card-holder-mx-modals"] [data-tag-name="bbva-help-modal"]',
                        },
                        header: '#helpModalHeader',
                        close: '#btn-close',
                        listBullet: 'div[slot="slot-content"] [data-tag-name="bbva-list-bullet"]',
                        text: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                        title: '#helpModalTitle',
                        content: '#helpModalContent',
                        amountInput: 'div[slot="slot-content"] [data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] input',
                        inputError: 'div[slot="slot-content"] [data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] .message.error [data-tag-name="bbva-notification-help"][variant="alert"]',
                        continue: '.footer-button',
                        continueProcess: '.footer-button.link',
                        docs: 'div .content-pdfs [data-tag-name="bbva-type-link"]'
                    },
                    receipt: {
                        properties: {
                            root: '[data-tag-name="oc-credit-card-holder-mx-receipt-page"] [data-tag-name="bbva-help-modal"]',
                        },
                        header: '#helpModalHeader',
                        close: '#btn-close',
                        success: '.content .content-success',
                        list: '.content [data-tag-name="bbva-panel-container"] [data-tag-name="list-simple"]',
                        notification: '.footer [data-tag-name="bbva-notification-message"]',
                        buttons: '.footer [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                        buttonDocuments: '[data-tag-name="bbva-button-row"] .list-item:nth-child(1) [data-tag-name="bbva-button-action"]',
                    }
                },
                dialogOperations: CardOriginationStopLossMx
            },
            requiredElements: [
                'component',
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.component.offerPage.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits header':
                await this.component.offerPage.benefitsHdr.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits container':
                await this.component.offerPage.benefitsPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits list bullet':
                await this.component.offerPage.benefitsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.component.offerPage.notification.waitForDisplayed({timeout: config.wait.M, reverse: value !== 'visible'});
                break;
            case 'see offer':
                await this.component.offerPage.seeOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer header':
                await this.component.multiStep.offer.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer description':
                await this.component.multiStep.offer.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer credit line header':
                await this.component.multiStep.offer.lineHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer credit line img':
                await this.component.multiStep.offer.lineImg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer credit line card name':
                await this.component.multiStep.offer.lineCardName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer credit line enjoy until':
                await this.component.multiStep.offer.lineEnjoyUntil.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer credit line amount':
                await this.component.multiStep.offer.lineAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer credit line edit':
                await this.component.multiStep.offer.lineEdit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer fees header':
                await this.component.multiStep.offer.feesHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer fees variable rate':
                await this.component.multiStep.offer.interestRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer fees cat without iva':
                await this.component.multiStep.offer.catWithoutIva.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer see conditions':
                await this.component.multiStep.offer.seeConditions.waitForDisplayed({timeout: config.wait.M, reverse: value !== 'visible'});
                break;
            case 'offer continue':
                await this.component.multiStep.offer.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer advisor call':
                await this.component.multiStep.offer.advisorCall.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment header':
                await this.component.multiStep.payment.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment description':
                await this.component.multiStep.payment.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment deadline modal':
                await this.component.multiStep.payment.deadlineModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment deadline form select':
                await this.component.multiStep.payment.deadlineSelect.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment deadline list':
                await this.component.multiStep.payment.deadlineList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment direct debit modal':
                await this.component.multiStep.payment.directDebitModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment domiciliation toggle':
                await this.component.multiStep.payment.toggle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment domiciliation toggle desactivate':
                await this.component.multiStep.payment.toggleOff.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment domiciliation options':
                await this.component.multiStep.payment.options.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment avoid interest':
                await (await (await this.waitForElementsExist(this.component.multiStep.payment.optionActive)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment minimum payment':
                await (await (await this.waitForElementsExist(this.component.multiStep.payment.optionInactive)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment domiciliation account':
                await this.component.multiStep.payment.accountList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment notification':
                await this.component.multiStep.payment.notification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment continue':
                await this.component.multiStep.payment.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address header':
                await this.component.multiStep.address.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address description':
                await this.component.multiStep.address.infoModal.waitForDisplayed({timeout: config.wait.M, reverse: value !== 'visible'});
                break;
            case 'address domicile radio':
                await this.component.multiStep.address.homeRadio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address domicile radio desactive':
                await this.component.multiStep.address.homeRadioOff.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address branch radio active':
                await this.component.multiStep.address.branchRadioOn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address obfuscated address':
                await this.component.multiStep.address.addrObfuscated.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address unmasked address':
                await this.component.multiStep.address.addrUnmasked.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address show address':
                await this.component.multiStep.address.showAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address branch radio':
                await this.component.multiStep.address.branchRadio.waitForDisplayed({timeout: config.wait.M, reverse: value !== 'visible'});
                break;
            case 'address notification':
                await this.component.multiStep.address.notification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address continue':
                await this.component.multiStep.address.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms header':
                await this.component.multiStep.terms.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms description':
                await this.component.multiStep.terms.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms credit history':
                await (await (await this.waitForElementsExist(this.component.multiStep.terms.listBullet)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms contract':
                await (await (await this.waitForElementsExist(this.component.multiStep.terms.listBullet)).elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms domicile': {
                const termsBullets = (await (await this.waitForElementsExist(this.component.multiStep.terms.listBullet)).elements()).value;
                if (termsBullets[2]) {
                    await termsBullets[2].waitForDisplayed({timeout: config.wait.M});
                }
                break;
            }
            case 'terms documents header':
                await this.component.multiStep.terms.docsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms documents pdfs':
                await this.component.multiStep.terms.docsContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms documents checkbox':
                await this.component.multiStep.terms.docsCheck.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms continue':
                await this.component.multiStep.terms.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all completed multi step':
                await this.component.multiStep.summary.allCompleted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request card summary step':
                await this.component.multiStep.summary.requestCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals header':
                await this.component.modals.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals btn close':
                await this.component.modals.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals primary list bullet':
                await (await (await this.waitForElementsExist(this.component.modals.listBullet)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals secondary list bullet':
                await (await (await this.waitForElementsExist(this.component.modals.listBullet)).elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals tertiary list bullet':
                await (await (await this.waitForElementsExist(this.component.modals.listBullet)).elements())
                    .value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals primary text':
                await (await (await this.waitForElementsExist(this.component.modals.text)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals secondary text':
                await (await (await this.waitForElementsExist(this.component.modals.text)).elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals input':
                await (await (await this.waitForElementsExist(this.component.modals.amountInput)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals input notification error':
                await this.component.modals.inputError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals continue':
                await this.component.modals.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals continue process':
                await this.component.modals.continueProcess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals help modal title':
                await this.component.modals.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals help modal content':
                await this.component.modals.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt header':
                await this.component.receipt.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt btn close':
                await this.component.receipt.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt content success':
                await this.component.receipt.success.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deadline payment list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'court date list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[3].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[4].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'charge account list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[5].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[6].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email list simple':
                await (await (await this.waitForElementsExist(this.component.receipt.list)).elements()).value[7].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt notification message':
                await this.component.receipt.notification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view documents':
                await (await (await this.waitForElementsExist(this.component.receipt.buttons)).elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share receipt':
                await (await (await this.waitForElementsExist(this.component.receipt.buttons)).elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card terms and conditions':
                await (await (await this.waitForElementsExist(this.component.modals.docs)).elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'direct debit form':
                await (await (await this.waitForElementsExist(this.component.modals.docs)).elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data checkbox active':
                await this.component.multiStep.fiscal.checkActive.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rfc error minimum characters error':
                await (await (await this.waitForElementsExist(this.component.multiStep.fiscal.inputError)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'minimum characters homoclave error':
                await (await (await this.waitForElementsExist(this.component.multiStep.fiscal.inputError)).elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'stop loss benefits header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFITS_HEADER});
                break;
            case 'stop loss benefits close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFITS_CLOSE_BUTTON});
                break;
            case 'stop loss benefit image':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFIT_IMAGE});
                break;
            case 'stop loss benefit title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFIT_TITLE});
                break;
            case 'stop loss benefit description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFIT_DESCRIPTION});
                break;
            case 'stop loss offer return button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_OFFER_RETURN_BUTTON});
                break;
            case 'stop loss offer exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_OFFER_EXIT_BUTTON});
                break;
            case 'stop loss error information header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_HEADER});
                break;
            case 'stop loss error information close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_CLOSE_BUTTON});
                break;
            case 'stop loss error information title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_TITLE});
                break;
            case 'stop loss error information description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_DESCRIPTION});
                break;
            case 'stop loss error information exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_EXIT_BUTTON});
                break;
            case 'stop loss error service header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_HEADER});
                break;
            case 'stop loss error service close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_CLOSE_BUTTON});
                break;
            case 'stop loss error service title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_TITLE});
                break;
            case 'stop loss error service description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_DESCRIPTION});
                break;
            case 'stop loss error service exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_EXIT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async remain() {
        await this.leaveFlow('offer information');
        await (await this.component.modals.continueProcess.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async retryRfcError() {
        await this.fillOtp('11111111');
        for (let i = 1; i < 3; i++) {
            await this._continueModals();
            await this._continueFiscalData();
        }
    }

    async _continueOfferPage(hasOfferPage = true) {
        if (hasOfferPage) {
            await (await this.component.offerPage.seeOffer.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async _continueOfferInformation() {
        await (await this.component.multiStep.offer.continue.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _continueFiscalData() {
        await (await this.component.multiStep.fiscal.continue.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _continuePaymentSettings() {
        await (await this.component.multiStep.payment.continue.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _continueDeliveryAddress() {
        await this.component.multiStep.steps.waitForAnimation({timeout: config.wait.M});
        await (await this.component.multiStep.address.continue.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _continueTermsAndConditions() {
        await this.component.multiStep.terms.continue.waitForDisplayed({timeout: config.wait.M});
        await this.component.multiStep.terms.continue.click();
    }

    async _continueModals() {
        await this.component.modals.continue.waitForDisplayed({timeout: config.wait.M});
        await this.component.modals.continue.click();
    }

    async _requestCard() {
        await this.component.multiStep.summary.allCompleted.waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.summary.requestCard.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _confirmCreditLimit() {
        await this._continueModals();
    }

    async _seeBenefits() {
        await (await this.component.offerPage.detailsModal.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seeInterestRate() {
        await (await this.component.multiStep.offer.interestRate.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seeCatInformation() {
        await this.component.multiStep.offer.header.waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.offer.catWithoutIva.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seeConditions() {
        await (await this.component.multiStep.offer.seeConditions.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seePaymentDeadlineModal() {
        await (await this.component.multiStep.payment.deadlineModal.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seeDirectDebitModal() {
        await (await this.component.multiStep.payment.directDebitModal.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seePrivacyNotice() {
        await (await this.component.multiStep.fiscal.privacyLink.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _seeDeliveryAddressInfoModal() {
        await (await this.component.multiStep.address.infoModal.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _edit(element) {
        await (await (await this.waitForElementsExist(element)).elements())
            .value[0].waitForDisplayed({timeout: config.wait.M});
        await (await element.elements()).value[0].click();
    }

    async _editCreditLimit() {
        await (await this.component.multiStep.offer.lineEdit.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _stepOfferInformation(hasOfferPage = true) {
        await this._continueOfferPage(hasOfferPage);
        await this._continueOfferInformation();
    }

    async _stepPaymentSettings(caseName = 'normal', hasOfferPage = true) {
        await this._stepOfferInformation(hasOfferPage);

        if (caseName === 'direct debit deactivated') {
            await this._directDebitDeactivated();
        } else if (caseName === 'interest free payment') {
            await this._setAvoidInterestPayment();
        } else if (caseName === 'fill rfc') {
            await this._stepFiscalData();
            await this.fillOtp('11111111');
        }
        await this._continuePaymentSettings();
        await this.component.multiStep.steps.waitForAnimation({timeout: config.wait.M});
    }

    async _stepDeliveryAddress(caseName = 'normal', hasOfferPage = true) {
        await this._stepPaymentSettings(caseName, hasOfferPage);
        if (caseName === 'select branch delivery') {
            await this._setBranchDeliveryAddress();
        }
        await this._continueDeliveryAddress();
        await this._acceptAllTermsAndConditions();
    }

    async _wealthManagementOffice(caseName = 'normal', hasOfferPage = true) {
        await this._stepPaymentSettings(caseName, hasOfferPage);
        if (caseName === 'wealth management office') {
            await this._setOfficeBranchDeliveryAddress();
        }
    }

    async _stepTermsAndConditions(caseName = 'normal', hasOfferPage = true) {
        await this._stepDeliveryAddress(caseName, hasOfferPage);
        await this._continueTermsAndConditions();
    }

    async _stepRequestCard(caseName = 'normal', hasOfferPage = true) {
        await this._stepTermsAndConditions(caseName, hasOfferPage);
        await this._requestCard();
    }

    async _stepOfferInfoWithPrivacyNotice() {
        await this._seePrivacyNotice();
    }

    async _stepFiscalData() {
        await this._fillFiscalData();
        await this._continueFiscalData();
    }

    async _stepSelectRfcCheckbox() {
        await this._stepOfferInformation();
        await this._fillFiscalData();
    }

    async _stepOfferInfoWithRfc() {
        await this._stepOfferInformation();
        await this._stepFiscalData();
    }

    async _setPaymentDeadline() {
        await (await this.component.multiStep.payment.deadlineSelect.waitForDisplayed({timeout: config.wait.M})).click();
        await (await (await this.waitForElementsExist(this.component.multiStep.payment.deadlineOption)).elements())
            .value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.payment.deadlineOption.elements()).value[1].click();
    }

    async _setAvoidInterestPayment() {
        await (await (await this.waitForElementsExist(this.component.multiStep.payment.optionsSelected)).elements())
            .value[0].waitForDisplayed({timeout: config.wait.M});
        await (await (await this.waitForElementsExist(this.component.multiStep.payment.optionsSelected)).elements())
            .value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.payment.optionsSelected.elements()).value[1].click();
    }

    async _setBranchDeliveryAddress() {
        await (await this.component.multiStep.address.branchRadio.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _setOfficeBranchDeliveryAddress() {
        await (await this.component.multiStep.address.branchOfficeRadio.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _fillFiscalData() {
        const {rfc, homoclave} = global.user.information;
        await this.component.multiStep.steps.waitForAnimation({timeout: config.wait.M});
        await (await (await this.waitForElementsExist(this.component.multiStep.fiscal.input)).elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.fiscal.input.elements()).value[0].setValue({value: rfc});
        await (await (await this.waitForElementsExist(this.component.multiStep.fiscal.input)).elements()).value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.fiscal.input.elements()).value[1].setValue({value: homoclave});
        await this.component.multiStep.fiscal.formSelect.waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.fiscal.formSelect.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.component.multiStep.fiscal.optionSingle.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.component.multiStep.fiscal.check.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _directDebitDeactivated() {
        await (await this.component.multiStep.payment.toggle.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _viewPdf(pdfIndex) {
        await (await this.component.multiStep.terms.expandableAccordion.waitForDisplayed({timeout: config.wait.M})).click();
        const pdfElement = this.component.multiStep.terms.docsPdfs.specifySelector({placeholder: '__INDEX__', value: pdfIndex});
        await pdfElement.waitForDisplayed({timeout: config.wait.M});
        await pdfElement.click();
    }

    async _showAddress() {
        await (await this.component.multiStep.address.showAddress.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _acceptAllTermsAndConditions() {
        await this.component.multiStep.terms.header.waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.terms.expandableAccordion.waitForDisplayed({timeout: config.wait.M})).click();
        await (await (await this.waitForElementsExist(this.component.multiStep.terms.docsCheck)).elements())
            .value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.component.multiStep.terms.docsCheck.elements()).value[0].click();
    }

    async performAction(item, caseName = 'normal', hasOfferPage = true) {
        switch (item.toLowerCase()) {
            case 'continue from the offer page':
                await this._continueOfferPage();
                break;
            case 'continue from the offer information':
                await this._stepOfferInformation(hasOfferPage);
                break;
            case 'continue from the payment settings':
                await this._stepPaymentSettings(caseName, hasOfferPage);
                break;
            case 'continue from the delivery address':
                await this._stepDeliveryAddress(caseName, hasOfferPage);
                break;
            case 'continue from the terms and conditions':
                await this._stepTermsAndConditions(caseName, hasOfferPage);
                break;
            case 'request card':
                await this._stepRequestCard(caseName, hasOfferPage);
                break;
            case 'select rfc checkbox':
                await this._stepSelectRfcCheckbox();
                break;
            case 'view privacy notice from fiscal data':
                await this.performAction('select rfc checkbox');
                await this._stepOfferInfoWithPrivacyNotice();
                break;
            case 'view benefits from the offer page':
                await this._seeBenefits();
                break;
            case 'change credit limit from the offer information':
                await this._continueOfferPage();
                await this._editCreditLimit();
                break;
            case 'confirm new line from the offer information':
                await this.performAction('change credit limit from the offer information');
                await this._confirmCreditLimit();
                break;
            case 'view cat information from the offer information':
                await this._continueOfferPage();
                await this._seeCatInformation();
                break;
            case 'view interest rate information from the offer information':
                await this._continueOfferPage();
                await this._seeInterestRate();
                break;
            case 'view conditions offer information':
                await this._continueOfferPage();
                await this._seeConditions();
                break;
            case 'change payment deadline from the payment settings':
                await this._stepOfferInformation();
                await this._setPaymentDeadline();
                break;
            case 'view direct debit payment information from the payment settings':
                await this._stepOfferInformation();
                await this._seeDirectDebitModal();
                break;
            case 'show full home address from delivery address':
                await this._stepPaymentSettings();
                await this._showAddress();
                break;
            case 'hide full home address from delivery address':
                await this._stepPaymentSettings();
                await this._showAddress();
                await this.fillOtp('11111111');
                await this._showAddress();
                break;
            case 'select branch as delivery address from delivery address':
                await this._stepPaymentSettings();
                await this._setBranchDeliveryAddress();
                break;
            case 'view delivery address information from delivery address':
                await this._stepPaymentSettings();
                await this._seeDeliveryAddressInfoModal();
                break;
            case 'deactivate direct debit from the payment settings':
                await this._stepOfferInformation();
                await this._directDebitDeactivated();
                break;
            case 'select payment to avoid generating interest from payment settings':
                await this._stepOfferInformation();
                await this._setAvoidInterestPayment();
                break;
            case 'view payment deadline information from the payment settings':
                await this._stepOfferInformation();
                await this._seePaymentDeadlineModal();
                break;
            case 'continue from the offer information with rfc':
                await this._stepOfferInfoWithRfc();
                break;
            case 'edit from the summary offer information':
                await this.performAction('continue from the terms and conditions');
                await this._edit(this.component.multiStep.offer.editButton);
                break;
            case 'edit from the summary payment settings':
                await this.performAction('continue from the terms and conditions');
                await this._edit(this.component.multiStep.payment.editButton);
                break;
            case 'edit from the summary delivery address':
                await this.performAction('continue from the terms and conditions');
                await this._edit(this.component.multiStep.address.editButton);
                break;
            case 'edit from the summary terms and conditions':
                await this.performAction('continue from the terms and conditions');
                await this._edit(this.component.multiStep.terms.editButton);
                break;
            case 'enter maximum amount in the offer information': {
                await this.performAction('change credit limit from the offer information');
                const {maxAmount} = global.user.information;
                await this._setModalAmountAndBlur(maxAmount);
                break;
            }
            case 'enter minimum amount in the offer information': {
                await this.performAction('change credit limit from the offer information');
                const {minAmount} = global.user.information;
                await this._setModalAmountAndBlur(minAmount);
                break;
            }
            case 'view documents from the receipt': {
                await this.performAction('request card');
                await this.fillOtp('11111111');
                await this.component.receipt.success.waitForDisplayed({timeout: config.wait.M});
                await this.component.receipt.success.waitForAnimation({timeout: config.wait.M, interval: 200 });
                await this.component.receipt.buttonDocuments.scrollIntoView({block: 'end'});
                await this.component.receipt.buttonDocuments.waitForAnimation({timeout: config.wait.M, interval: 200 });
                await this.component.receipt.buttonDocuments.click({useActions: true});
                break;
            }
            case 'enter rfc with less than 10 characters in the fiscal data': {
                await this.performAction('continue from the offer information');
                const {rfcWithLess} = global.user.information;
                await (await (await this.waitForElementsExist(this.component.multiStep.fiscal.input)).elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                await (await this.component.multiStep.fiscal.input.elements()).value[0].setValue({value: rfcWithLess});
                break;
            }
            case 'enter homoclave with less than 3 characters in the fiscal data': {
                await this.performAction('enter rfc with less than 10 characters in the fiscal data');
                const {homoclaveWithLess} = global.user.information;
                await (await (await this.waitForElementsExist(this.component.multiStep.fiscal.input)).elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                await (await this.component.multiStep.fiscal.input.elements()).value[1].setValue({value: homoclaveWithLess});
                break;
            }
            case 'view credit history inquiry information from terms and conditions':
                await this._stepPaymentSettings();
                await this._continueDeliveryAddress();
                await this._viewPdf(1);
                break;
            case 'view direct debit form information from terms and conditions':
                await this._stepPaymentSettings();
                await this._continueDeliveryAddress();
                await this._viewPdf(3);
                break;
            case 'confirms the return':
                await this.dialogOperations.stopLossActions(this.dialogOperations.CONFIRM_RETURN);
                break;
            case 'confirms the exit':
                await this.dialogOperations.stopLossActions(this.dialogOperations.CONFIRM_EXIT);
                break;
            case 'retry three times the error information':
                await this.dialogOperations.stopLossActions(this.dialogOperations.RETRY_ERROR_INFORMATION);
                break;
            default:
                throw new Error(`Element ${item} not defined in CreditCardHolder page object`);
        }
    }

    async _setModalAmountAndBlur(amount) {
        await this.component.modals.amountInput.waitForDisplayed({timeout: config.wait.M});
        await this.component.modals.amountInput.setValue({value: amount});
        await this.component.modals.header.waitForDisplayed({timeout: config.wait.M});
        await this.component.modals.header.click();
    }

    async setModalAmountAndConfirm(amount) {
        await (await this.component.multiStep.offer.lineEdit.waitForDisplayed({timeout: config.wait.M})).click();
        await this.component.modals.amountInput.waitForDisplayed({timeout: config.wait.M});
        await this.component.modals.amountInput.setValue({value: amount});
        await this._continueModals();
        await this._continueOfferInformation();
    }

    async leaveFlow(from) {
        switch (from) {
            case 'offer information':
                await this.performAction('continue from the offer page');
                await (await this.component.multiStep.close.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'exit from offer information':
                await this.leaveFlow('offer information');
                await this._continueModals();
                break;
            case 'exit from offer page':
                await (await this.component.offerPage.close.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'exit from receipt':
                await this.performAction('request card');
                await this.fillOtp('11111111');
                await (await this.component.receipt.close.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'exit close from modals':
                await (await this.component.modals.close.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'selecting avoid interest payment':
                await this._stepOfferInformation();
                await this._setAvoidInterestPayment();
                await (await this.component.multiStep.close.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'two attempts':
                await (await this.component.multiStep.close.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.component.modals.continueProcess.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.component.multiStep.close.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.component.modals.continue.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Exit flow from ${from} not defined in CreditCardHolder page object`);
        }
    }
}
export default new CreditCardHolder();
