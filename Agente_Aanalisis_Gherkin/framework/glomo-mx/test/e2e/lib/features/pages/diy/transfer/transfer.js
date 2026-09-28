import {ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../../abstract-glomo-page';
import CellsSingOperationModal from '../../../components/cells-sign-operation-modal';
import CellsMoleculeTransactionsListItem from '../../../components/cells-molecule-transaction-list-item';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import CellsSignOperationModalSpherica from '../../../components/cells-sign-operation-modal-spherica';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';
import FeedbackClientVoiceConnect from '../../../components/feedback-client-voice-connect-gl';

const DEFAULT_NUMBER = {
    notFoundInterbank: '4941330109114629',
    alreadySavedInterbank: '4941330109119506',
    savedWithAliasInterbank: '4941330109119462',
    saveWithNewContact: '4941330109115629',
    identifiedContactInternal: '00740680001500906643',
    recognizedContactInternal: '00740680001500899175',
    savedWithAliasInternal: '00740680001500902558',
    savedWithAliasContact: '00740680001500886502'
};
const DEFAULT_NAME = {
    firstRecipient: 'Graciela',
    secondRecipient: 'Sarai',
    thirdRecipient: 'Angeles'
};
const DEFAULT_ALIAS = {
    firstAlias: 'grace',
    secondAlias: 'sarita',
    thirdAlias: 'Dash',
    fourthAlias: 'Dianita',
    fifthAlias: 'angel'
};
const DEFAULT_AMOUNT = 20;
const DEFAULT_CONCEPT = 'donativo';

class Transfer extends AbstractGlomoPage {
    constructor() {

        const account = (element, id) => (`${element}-products-modal #selector--accounts [data-selector="${id}"]`);
        const card = (element, id) => (`${element}-products-modal #selector--cards [data-selector="${id}"]`);

        super({
            root: '#cells-template-transfers[state="active"]',
            elements: {
                // Step 1
                header: 'cells-molecule-header',
                headerExitButton: 'cells-molecule-header #btnRight',
                accountsAndCards: '#transfer-origin #selector cells-atom-subheader .left-field',
                originProduct: '#transfer-origin #item',
                singleProduct: '#transfer-origin #oneProductItem',
                singleProductContBtn: '#transfer-origin #defaultActions .primary',
                originHeader: '#transfer-origin #stepContainer div > div > h2.cells-step__header-title',
                changeOriginBtn: '#transfer-origin #stepContainer #changeBtn button',
                changeSourceAccount: '#transfer-origin #changeOriginAction #primaryButton',
                keepOriginSelection: '#transfer-origin #changeOriginAction #secondaryButton span',
                selectAnotherSourceAccount: '#transfer-origin #selector div:nth-child(9) cells-product-item',
                viewMoreAccounts: '#transfer-origin #selector #viewMore',
                selectCredirCard: '#first-products-modal #selector--cards div.product-wrapper:nth-of-type(1) cells-product-item',
                selectCredirCardDetail: 'cells-product-selector#selector--cards cells-product-item.operative.name-one-line',
                viewAllCards: 'cells-product-selector cells-atom-subheader cells-st-button.link.viewMore',
                selectDebitCard: '#second-products-modal #selector--cards cells-product-item',
                selectForeignAccount: '#second-products-modal #selector--accounts div > cells-product-item',
                selectCreditCard: card('#first', '__ACCOUNT__'),
                creditCardDestination: card('#second', '__ACCOUNT__'),
                selectPrincipalAccount: '#second-products-modal #selector--accounts div:nth-of-type(1) div cells-product-item',
                selectContract: '#second-products-modal #selector--accounts div:nth-child(3) cells-product-item',
                productTransferElement: '#transfer-origin #selector div:nth-child(2) cells-product-item[data-index="0"]',
                principalAccountElement: '#transfer-origin #selector div:nth-of-type(1) cells-product-item[data-index="0"]',
                contractTransferElement: '#transfer-origin #selector div:nth-child(9) cells-product-item',
                productTransfer: '.product-wrapper.separators cells-product-item[data-index="0"]',
                pesosDebit: '.product-wrapper.separators cells-product-item[data-index="2"]',
                sourceAccount: account('#first', '__ACCOUNT__'),
                destinationAccount: account('#second', '__ACCOUNT__'),

                // Step 2
                destinationAccountTitle: '#transfer-destination cells-step__header-title',
                newRecipientBtn: '#stepContainer div.full section[aria-label="Nuevo"] cells-atom-icon',
                myAccountsBtn: '#stepContainer div.full div.recipient.recipient--new.show-my-accounts.recipient--my-accounts',
                savedContactsBtn: '#stepContainer div.full div.recipient.recipient--new.show-my-contacts.recipient--saved-contacts',
                reuseOperationBtn: '#stepContainer div.full .recipient.recipient--new.show-reuse-operations',
                reuseOperationModalViewAll: '#transfer-destination #stepContainer cells-atom-subheader a.view-more',
                reuseItemTransactionBtn: '#transfer-destination #stepContainer #searcherSelector #resultsContainer cells-avatar-item[data-id="__OPERATIONID__"]',
                reuseItemModalTransactionBtn: 'cells-product-selector-modal#reuse-operations-selector-modal cells-product-item[data-id="__OPERATIONID__"]',
                changeDestinationBtn: '#transfer-destination #stepContainer #changeBtn button',
                updateRecipientTitle: '#transfer-destination #stepContainer div.filled cells-icon-message #notInline',
                changeRecipientBtn: '#transfer-destination #stepContainer div.full div.buttons-wrapper cells-st-button.primary.size-m button',
                checkNewRecipient: 'cells-modal-new-recipient-selector #review cells-checkbox-button #checkbox',
                inputAliasInterbank: 'cells-modal-new-recipient-selector #review cells-molecule-input:nth-child(5) #input',
                inputAliasInternal: 'cells-modal-new-recipient-selector #review cells-molecule-input #input',
                labelAliasInternal: 'cells-modal-new-recipient-selector section#review cells-avatar-item div.cells-avatar-item-content div.cells-avatar-item-list div.cells-avatar-item-list-container',
                inputModal: ' cells-modal-new-recipient-selector #input #input',
                btnContinueNewRecipient: 'cells-modal-new-recipient-selector #modal #acceptButton',
                spinnerModal: 'cells-spinner-veil bbva-spinner.spinner',
                btnContinueSavedInternal: 'cells-modal-new-recipient-selector cells-bottom-modal div.buttons-container cells-st-button button#acceptButton',
                btnCancelInternal: 'cells-modal-new-recipient-selector cells-bottom-modal div.buttons-container cells-st-button button#cancelButton',
                btnCloseInternal: 'cells-modal-new-recipient-selector #modal #modal #closeButton',
                inputRecipientName: 'cells-modal-new-recipient-selector #review cells-molecule-input:nth-child(2) #input',
                inputRecipientBank: 'cells-new-recipient-review-pe cells-select-modal button[id="documentTypeSelector"]',
                recipientBank: 'cells-modal-selector li[id="0021"]',
                inputRecipientProduct: 'cells-new-recipient-review-pe cells-select-modal button[id="documentTypeSelector"].document-selector[data-selector="Tipo de producto cells-select-modal button"]',
                recipientProduct: 'cells-modal-selector li[id="DEBIT_CARD"]',
                myAccountModal: '#second-products-modal #selector--accounts cells-product-item-spherica[data-index="0"]',
                correctIronIconNewRecipient: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe #message #principalIcon.icon',
                correctInformationFoundNewRecipient: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe #message span.header',
                accountNumberLabelNewRecipient: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.account-number-formatted label',
                accountNumberSpanNewRecipient: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.account-number-formatted span',
                bankEntityNewRecipientLabel: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.account-currency-type label',
                bankEntityNewRecipientSpan: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.account-currency-type span',
                bankEntityNewRecipientInput: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content cells-select-modal',
                destinataryNameNewRecipientLabel: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.beneficiary-name label',
                destinataryNameNewRecipientSpan: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.beneficiary-name span',
                destinationCurrencyNewRecipientLabel: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.beneficiary-ids label',
                destinationCurrencyNewRecipientSpan: 'cells-modal-new-recipient-selector #review cells-new-recipient-review-pe div.content div.section-content.beneficiary-ids span',
                saveContactNewRecipientParagraph: 'cells-modal-new-recipient-selector #review cells-checkbox-button #description-label',
                saveContactNewRecipientIronIcon: 'cells-modal-new-recipient-selector #review cells-checkbox-button div.body-label.right-description span.body-label-message cells-icon-message #principalIcon.icon',
                saveContactNewRecipientSpan: 'cells-modal-new-recipient-selector #review cells-checkbox-button div.body-label.right-description span.body-label-message cells-icon-message #notInline',
                accountNameNotValidatedIcon: 'cells-modal-new-recipient-selector #review cells-molecule-input:nth-child(2) cells-icon-message #principalIcon.icon',
                accountNameNotValidatedSpan: 'cells-modal-new-recipient-selector #review cells-molecule-input:nth-child(2) cells-icon-message #notInline',
                insufficientBalanceMsg: 'cells-product-item > div.text-error > cells-icon-message #notInline',
                contactAllreadySavedMsg: 'cells-modal-new-recipient-selector #review > cells-icon-message #notInline',
                labelNewContactDescription: 'cells-modal-new-recipient-selector #query #input-description',
                inputNewContact: 'cells-modal-new-recipient-selector #query cells-molecule-input',
                extraMessageNewContact: 'cells-modal-new-recipient-selector #query cells-icon-message',

                // Step 3
                amountTitle: '#transfer-amount cells-step',
                amountInput: '#transfer-amount #amountInput #enterAmountInput #input',
                amountCancel: '#transfer-amount #amountInput #enterAmountInput #icon',
                amountDisabledContinueButton: '#cellsEnterLimitedAmount #enterAmountBtn[disabled]',
                continueButtonAmount: '#transfer-amount #continueButton',
                changeAmountBtn: '#transfer-amount cells-step #changeBtn button',
                destinationTitleinForengn: '#transfer-amount cells-step div:nth-child(2) div cells-heading:nth-child(6)',
                amountExceededMsg: 'div.cells-enter-limited-amount__textInfo.max-product-error-container',
                changeCurrencyButton: '.composed.transparent.icon-wrapper cells-atom-icon iron-icon',
                continueAmount: '#transfer-amount #continueButton',
                taginYourAccount: '#transfer-amount #amountInput div.amount-container div div.cells-enter-limited-amount__infoSection.available-balance-info-section',
                boostInterbankTransfersMessageOpTransfer: ' #transfer-amount cells-step div[slot="full"] div.full cells-icon-message',
                boostInterbankTransfersMessageLinkOpTransfer: '#infoSecondMessageLink',

                // Step 4
                conceptTitle: '#transfer-concept #stepContainer div',
                inputReference: '#transfer-concept #conceptInput',
                inputConcept: '#transfer-concept #conceptInput #input',
                conceptCancel: '#transfer-concept #conceptInput #btnMainIcon',
                continueButtonConcept: '#transfer-concept #continueBtn button',
                changeConceptBtn: '#transfer-concept #stepContainer #changeBtn button',

                // review and authorize
                summaryContinueButton: 'cells-operation-summary #summary .container cells-st-button.primary button:not([disabled])',

                // successful operation
                operationTime: 'cells-successful-response #header-section p.subtitle cells-atom-date #date',

                //Dimo modal
                dimoModal: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            headerModal: 'h1',
                            closeButtonHeader: 'cells-alert-box cells-bottom-modal div#content header#header button#closeButton',
                            helpIcon: '.templates-wrapper .paragraph-template .paragraph-icon cells-atom-icon',
                            messageContainer: '.templates-wrapper .paragraph-template .icon-message-container cells-icon-message',
                            titleText: '.templates-wrapper .paragraph-template .text-center',
                            textInformation: '.templates-wrapper .paragraph-template .text-with-no-icon .paragraph-template-text'
                        }
                    }
                ],

                // transfers debts settlement
                originAccountDebtSettlement: '#first-products-modal #selector--accounts [data-selector="__ACCOUNT__"]',
                destinationAccountDebtSettlement: '#second-products-modal #selector--accounts [data-selector="__ACCOUNT__"]',

                //otp
                singConnector: CellsSingOperationModal,
                transferListItem: {
                    component: {
                        ComponentClass: CellsMoleculeTransactionsListItem,
                    }
                }
            },
            elementsSpherica: {
                singConnector: CellsSignOperationModalSpherica,
                dialogOperations: [GlomoAlertManagerSpherica],

                // Step 1
                header: 'cells-molecule-header-spherica',
                headerExitButton: 'cells-molecule-header-spherica #btnRight',
                accountsAndCards: '#transfer-origin cells-product-selector-spherica#selector cells-atom-subheader-spherica div.left-field',
                selectForeignAccount: '#second-products-modal #selector--accounts div > cells-product-item-spherica',
                selectPrincipalAccount: '#second-products-modal #selector--accounts div.product-wrapper.separators cells-product-item-spherica.active',
                selectContract: '#second-products-modal #selector--accounts div.product-wrapper.separators cells-product-item-spherica',
                contractTransferElement: '#transfer-origin #selector div.product-wrapper.separators cells-product-item-spherica.active',
                productTransferElement: '#transfer-origin #selector div.product-wrapper.separators cells-product-item-spherica[data-index="0"]',
                principalAccountElement: '#transfer-origin #selector div.product-wrapper.separators cells-product-item-spherica[data-index="0"]',
                productTransfer: '.product-wrapper.separators cells-product-item-spherica[data-index="0"]',
                selectDebitCard: '#second-products-modal #selector--cards cells-product-item-spherica',

                // Step 2
                newRecipientBtn: '#stepContainer div.full section[aria-label="Nuevo"] cells-atom-icon-spherica',
                reuseItemTransactionBtn: '#transfer-destination #stepContainer #searcherSelectorList #resultsContainer cells-avatar-item-spherica[data-id="__OPERATIONID__"]',
                updateRecipientTitle: '#transfer-destination #stepContainer div.filled cells-icon-message-spherica #notInline',
                changeRecipientBtn: '#transfer-destination #stepContainer div.full div.buttons-wrapper cells-st-button-spherica button',
                checkNewRecipient: 'cells-modal-new-recipient-selector-spherica #review cells-checkbox-button-spherica #checkbox',
                inputAliasInterbank: 'cells-modal-new-recipient-selector-spherica #review .custom-container cells-molecule-input-spherica[name="aliasInput"] #input',
                inputAliasInternal: 'cells-modal-new-recipient-selector-spherica #review cells-molecule-input-spherica #input',
                labelAliasInternal: 'cells-modal-new-recipient-selector-spherica section#review cells-avatar-item-spherica div.cells-avatar-item-content div.cells-avatar-item-list div.cells-avatar-item-list-container',
                inputModal: 'cells-modal-new-recipient-selector-spherica #input #input',
                btnContinueNewRecipient: 'cells-modal-new-recipient-selector-spherica #modal #acceptButton',
                btnContinueSavedInternal: 'cells-modal-new-recipient-selector-spherica cells-bottom-modal-spherica div.buttons-container cells-st-button-spherica button#acceptButton',
                btnCancelInternal: 'cells-modal-new-recipient-selector-spherica cells-bottom-modal-spherica div.buttons-container cells-st-button-spherica button#cancelButton',
                btnCloseInternal: 'cells-modal-new-recipient-selector-spherica #modal #modal #closeButton',
                inputRecipientName: 'cells-modal-new-recipient-selector-spherica #review cells-molecule-input-spherica:nth-child(2) #input',
                inputRecipientBank: 'cells-new-recipient-review-pe-spherica cells-select-modal-spherica button[id="documentTypeSelector"]',
                recipientBank: 'cells-modal-selector-spherica li[id="0021"]',
                inputRecipientProduct: 'cells-new-recipient-review-pe-spherica cells-select-modal-spherica button[id="documentTypeSelector"].document-selector[data-selector="Tipo de producto cells-select-modal-spherica button"]',
                recipientProduct: 'cells-modal-selector-spherica li[id="DEBIT_CARD"]',
                correctIronIconNewRecipient: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica #message #principalIcon.icon',
                correctInformationFoundNewRecipient: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica #message span.header',
                accountNumberLabelNewRecipient: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.account-number-formatted label',
                accountNumberSpanNewRecipient: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.account-number-formatted span',
                bankEntityNewRecipientLabel: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.account-currency-type label',
                bankEntityNewRecipientSpan: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.account-currency-type span',
                bankEntityNewRecipientInput: 'cells-modal-new-recipient-selector-spherica  #review cells-new-recipient-review-pe-spherica div.content cells-select-modal-spherica',
                destinataryNameNewRecipientLabel: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.beneficiary-name label',
                destinataryNameNewRecipientSpan: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.beneficiary-name span',
                destinationCurrencyNewRecipientLabel: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.beneficiary-ids label',
                destinationCurrencyNewRecipientSpan: 'cells-modal-new-recipient-selector-spherica #review cells-new-recipient-review-pe-spherica div.content div.section-content.beneficiary-ids span',
                saveContactNewRecipientParagraph: 'cells-modal-new-recipient-selector-spherica #review cells-checkbox-button-spherica #description-label',
                saveContactNewRecipientIronIcon: 'cells-modal-new-recipient-selector-spherica #review cells-checkbox-button-spherica div.body-label.right-description span.body-label-message cells-icon-message-spherica #principalIcon.icon',
                saveContactNewRecipientSpan: 'cells-modal-new-recipient-selector-spherica #review cells-checkbox-button-spherica div.body-label.right-description span.body-label-message cells-icon-message-spherica #notInline',
                accountNameNotValidatedIcon: 'cells-modal-new-recipient-selector-spherica #review cells-molecule-input-spherica:nth-child(2) cells-icon-message-spherica #principalIcon.icon',
                accountNameNotValidatedSpan: 'cells-modal-new-recipient-selector-spherica #review cells-molecule-input-spherica:nth-child(2) cells-icon-message-spherica #notInline',
                insufficientBalanceMsg: 'cells-product-item-spherica > div.text-error > cells-icon-message-spherica #notInline',
                contactAllreadySavedMsg: 'cells-modal-new-recipient-selector-spherica #review > cells-icon-message-spherica #notInline',
                labelNewContactDescription: 'cells-modal-new-recipient-selector-spherica #query #input-description',
                inputNewContact: 'cells-modal-new-recipient-selector-spherica #query cells-molecule-input-spherica',
                extraMessageNewContact: 'cells-modal-new-recipient-selector-spherica #query cells-icon-message-spherica',

                // Step 3
                headerTitle: '#transfer-amount cells-step-spherica .cells-step__header-title',
                amountTitle: '#transfer-amount cells-step-spherica',
                changeAmountBtn: '#transfer-amount cells-step-spherica #changeBtn button',
                destinationTitleinForengn: '#transfer-amount cells-step-spherica div:nth-child(2) div cells-heading:nth-child(6)',
                changeCurrencyButton: '.composed.transparent.icon-wrapper cells-atom-icon-spherica iron-icon',
                boostInterbankTransfersMessageOpTransfer: ' #transfer-amount cells-step-spherica div[slot="full"] div.full cells-icon-message-spherica',
                iconError: '#iconlimitsMinOrMaxValueError',
                textError: '.max-product-error-message-text1',

                // review and authorize
                summaryContinueButton: 'cells-operation-summary-spherica #summary .container cells-st-button-spherica.positive button:not([disabled])',

                // successful operation
                operationTime: 'cells-successful-response-spherica #header-section p.subtitle cells-atom-date-spherica #date',
                feedbackClient: FeedbackClientVoiceConnect,

                //Dimo modal
                dimoModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            closeButtonHeader: 'cells-alert-box-spherica cells-bottom-modal-spherica div#content header#header button#closeButton',
                            messageContainer: '.templates-wrapper .paragraph-template .icon-message-container cells-icon-message-spherica'
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ]
        });

    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                if (this.isSpherica()) {
                    await this.header.scrollIntoView({block: 'end', behavior: 'smooth'});
                }
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header exit button':
                await this.headerExitButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'origin header':
                await this.originHeader.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'accounts and cards':
                await this.accountsAndCards.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'single product':
                await this.singleProduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'single product continue button':
                await this.singleProductContBtn.waitForDisplayed({timeout: config.wait.M, reverse: value === 'hidden'});
                break;
            case 'New recipient button':
                await this.newRecipientBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'view more accounts':
                await this.viewMoreAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'My accounts and cards button':
                await this.myAccountsBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'Saved contacts button':
                await this.savedContactsBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'magical search input':
                await this.inputModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'continue button':
                await this.btnContinueNewRecipient.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'checkbox':
                await this.checkNewRecipient.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Product Element':
                await this.productTransferElement.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'correct iron icon':
                await this.correctIronIconNewRecipient.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'correct information found':
                await this.correctInformationFoundNewRecipient.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'account number label':
                await this.accountNumberLabelNewRecipient.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'account number span':
                await this.accountNumberSpanNewRecipient.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'bank entity label':
                await this.bankEntityNewRecipientLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'bank entity span':
                await this.bankEntityNewRecipientSpan.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'bank entity input':
                await this.bankEntityNewRecipientInput.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destinatary name label':
                await this.destinataryNameNewRecipientLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'destinatary name span':
                await this.destinataryNameNewRecipientSpan.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input recipient name':
                await this.inputRecipientName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input recipient name icon':
                await this.accountNameNotValidatedIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input recipient name paragraph':
                await this.accountNameNotValidatedSpan.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination currency label':
                await this.destinationCurrencyNewRecipientLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'destination currency span':
                await this.destinationCurrencyNewRecipientSpan.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'save contact paragraph':
                await this.saveContactNewRecipientParagraph.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'save contact iron icon':
                await this.saveContactNewRecipientIronIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'save contact span':
                await this.saveContactNewRecipientSpan.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input alias internal':
                await this.inputAliasInternal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'alias in use message':
                await this.labelAliasInternal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept alias in use button':
                await this.btnContinueSavedInternal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel alias in use button':
                await this.btnCancelInternal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header otp':
                await this.singConnector.smsPasswordLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title otp':
                this.isSpherica() ? await this.signModal.smsIcon.waitForDisplayed({timeout:config.wait.M})
                    : await this.signModal.smsImage.waitForDisplayed({timeout:config.wait.M}) ;
                break;
            case 'input otp':
                await this.singConnector.smsPasswordInputField.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'continue button otp':
                await this.singConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'change origin button':
                await this.changeOriginBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'change destination button':
                await this.changeDestinationBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'change amount button':
                await this.changeAmountBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'change concept button':
                await this.changeConceptBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'update recipient title':
                await this.updateRecipientTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount exceeded message':
                await this.amountExceededMsg.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'insufficient balance message':
                await this.insufficientBalanceMsg.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input concept':
                await this.inputConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button enabled':
                await this.continueButtonConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount deposited':
                await this.amountInput.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'delete option':
                await this.amountCancel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'continue button amount':
                await this.continueAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'tag in your account':
                await this.taginYourAccount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'concept title':
                await this.conceptTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input reference':
                await this.inputReference.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'close button':
                await this.btnCloseInternal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'contact already saved message':
                await this.contactAllreadySavedMsg.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'message boost interbank transfers':
                await this.boostInterbankTransfersMessageOpTransfer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link message boost interbank transfers':
                await this.boostInterbankTransfersMessageLinkOpTransfer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin product':
                await this.originProduct.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label description new contact':
                await this.labelNewContactDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input new contact':
                await this.inputNewContact.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'extra message new contact':
                await this.extraMessageNewContact.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'icon amount error':
                await this.iconError.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'text amount error':
                await this.textError.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'header thankyou feedback':
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback':
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback':
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback':
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback':
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item}) {
        switch (item.toLowerCase()) {
            case 'accept button':
                await this.dimoModal.acceptBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'cancel button':
                await this.dimoModal.cancelBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title text':
                await this.dimoModal.additionalElements.titleText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'text information':
                await this.dimoModal.additionalElements.textInformation.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'help icon':
                await this.dimoModal.additionalElements.helpIcon.waitForDisplayed({timeout: config.wait.S, reverse: this.isSpherica()});
                break;
            case 'message container':
                await this.dimoModal.additionalElements.messageContainer.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header':
                await this.dimoModal.additionalElements.headerModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'description':
                await this.dimoModal.descriptions.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'icon':
                await this.dimoModal.paragraphIcon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'hero image':
                if (!this.isSpherica()){
                    await this.dimoModal.heroImage.waitForDisplayed({timeout: config.wait.S});
                }
                break;
            case 'title':
                await this.dimoModal.titles.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'close button':
                await this.dimoModal.closeBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessBoostInterbankTransfersMessageOpTransfers() {
        await this.boostInterbankTransfersMessageOpTransfer.waitForDisplayed({timeout: config.wait.L});
        await this.boostInterbankTransfersMessageOpTransfer.waitForAnimation({timeout: config.wait.L});
        await this.boostInterbankTransfersMessageLinkOpTransfer.waitForClickable({timeout: config.wait.L});
        await this.boostInterbankTransfersMessageLinkOpTransfer.click();
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    // ORIGIN
    async productSelected() {
        await (await this.productTransferElement
            .waitForEnabled({timeout: config.wait.M}))
            .click();
    }

    async principalAccountSelected() {
        await this.principalAccountElement.waitForEnabled({timeout: config.wait.M});
        await this.principalAccountElement.click();
    }

    async contractSelected() {
        await this.contractTransferElement.waitForEnabled({timeout: config.wait.M});
        await this.contractTransferElement.click();
    }

    async sourceAccountSelected(index, isAccountWithoutMoney) {
        const accountSource = this.sourceAccount.specifySelector({placeholder: '__ACCOUNT__', value: index});
        if(index!=='Cuenta - 00740010000473222543'){
            await this.actionViewMoreAccounts();
        }
        if(this.isSpherica() && isAccountWithoutMoney) {
            await accountSource.waitForDisplayed({timeout: config.wait.L});
        } else {
            await accountSource.waitForClickable({timeout: config.wait.L});
            await accountSource.click();
        }
    }

    async destinationAccountSelected(index) {
        const accountDestination = this.destinationAccount.specifySelector({placeholder: '__ACCOUNT__', value: index});
        await accountDestination.waitForClickable({timeout: config.wait.L});
        await accountDestination.click();
    }

    async cardCreditSelected(index) {
        const creditCard = this.selectCreditCard.specifySelector({placeholder: '__ACCOUNT__', value: index});
        await this.actionViewMoreAccounts();
        await creditCard.waitForClickable({timeout: config.wait.L});
        await creditCard.click();
    }

    async addNewProduct(amount, concept) {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
        await this.continueAmountProcess(amount);
        await this.continueConceptProcess(concept);
        await this.continueProcess();
    }

    async changeAmountInSummary() {
        await this.changeAmountBtn.scrollIntoView();
        await this.changeAmountBtn.waitForClickable({timeout: config.wait.L});
        await this.changeAmountBtn.click();
    }

    async actionViewMoreAccounts() {
        await this.viewMoreAccounts.waitForDisplayed({timeout: config.wait.M});
        await this.viewMoreAccounts.waitForAnimation({timeout: config.wait.M});
        await this.viewMoreAccounts.click();
    }

    async actionSelectCreditCardDetail() {
        await this.viewAllCards.waitForDisplayed({timeout: config.wait.M});
        await this.viewAllCards.waitForAnimation({timeout: config.wait.M});
        await this.viewAllCards.click();

        await this.selectCredirCardDetail.waitForDisplayed({timeout: config.wait.M});
        await this.selectCredirCardDetail.waitForAnimation({timeout: config.wait.M});
        await this.selectCredirCardDetail.click();
    }

    async selectDebitCardAtDestination() {
        await this.selectDebitCard.waitForDisplayed({timeout: config.wait.M});
        await this.selectDebitCard.waitForAnimation({timeout: config.wait.M});
        await this.selectDebitCard.click();
    }

    async selectForengnAccountAtDestination() {
        await this.selectForeignAccount.waitForDisplayed({timeout: config.wait.S});
        await this.selectForeignAccount.waitForAnimation({timeout: config.wait.S});
        await this.selectForeignAccount.click();
    }

    async selectPrincipalAccountAtDestination() {
        await this.selectPrincipalAccount.waitForDisplayed({timeout: config.wait.M});
        await this.selectPrincipalAccount.waitForAnimation({timeout: config.wait.M});
        await this.selectPrincipalAccount.click();
    }

    async selectContractAtDestination() {
        await this.selectContract.waitForDisplayed({timeout: config.wait.M});
        await this.selectContract.waitForAnimation({timeout: config.wait.M});
        await this.selectContract.click();
    }

    async selectCreditCardAtDestination(index) {
        const creditCard = this.creditCardDestination.specifySelector({placeholder: '__ACCOUNT__', value: index});
        await creditCard.waitForDisplayed({timeout: config.wait.M});
        await creditCard.click();
    }

    async changeOriginInSummary() {
        await (await (await (await this.changeOriginBtn.waitForAnimation({timeout: config.wait.M}))
            .scrollIntoView({block: 'start'})).waitForClickable({timeout: config.wait.L})).click();
    }

    async changeOriginAction() {
        await this.changeSourceAccount.waitForClickable({timeout: config.wait.L});
        await this.changeSourceAccount.click();
    }

    // NEW RECIPIENT
    async accessNewRecipient() {
        await this.newRecipientBtn.waitForAnimation({timeout: config.wait.S});
        await this.newRecipientBtn.waitForClickable({timeout: config.wait.S});
        await this.newRecipientBtn.click();
    }

    async accessMyAccounts() {
        await this.myAccountsBtn.waitForClickable({timeout: config.wait.M});
        await this.myAccountsBtn.click();
    }

    async accessReuseOperation() {
        await this.reuseOperationBtn.waitForClickable({timeout: config.wait.M});
        await this.reuseOperationBtn.click();
    }

    async accessSavedContacts() {
        await this.savedContactsBtn.waitForClickable({timeout: config.wait.L});
        await this.savedContactsBtn.click();
    }

    async selectAccountInDestination() {
        await this.myAccountModal.waitForClickable({timeout: config.wait.S});
        await this.myAccountModal.waitForAnimation({timeout: config.wait.S});
        await this.myAccountModal.click();
        await this.selectPrincipalAccountAtDestination();
    }

    async insertRecipientNumber(number) {
        await this.inputModal.waitForDisplayed({timeout: config.wait.M});
        await this.inputModal.waitForAnimation({timeout: config.wait.S});
        await this.inputModal.setValue({value: number});
    }

    async continueNewRecipient(number) {
        await this.insertRecipientNumber(number);
        await this.btnContinueNewRecipient.waitForEnabled({timeout: config.wait.M});
        await this.btnContinueNewRecipient.click();
        await this.spinnerModal.waitForAttribute({attribute: 'paused', timeout: config.wait.XXXL});
    }

    async continueInviteDimo() {
        await this.dimoModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dimoModal.acceptBtn.waitForClickable({timeout: config.wait.M});
        await this.dimoModal.acceptBtn.click();
    }

    async cancelInviteDimo() {
        await this.dimoModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dimoModal.cancelBtn.waitForClickable({timeout: config.wait.M});
        await this.dimoModal.cancelBtn.click();
    }

    async exitDimoInvite() {
        await this.dimoModal.additionalElements.closeButtonHeader.waitForDisplayed({timeout: config.wait.M});
        await this.dimoModal.additionalElements.closeButtonHeader.waitForClickable({timeout: config.wait.M});
        await this.dimoModal.additionalElements.closeButtonHeader.click();
    }

    async accountIdentified(number) {
        await this.continueNewRecipient(number);
        await this.btnContinueNewRecipient.waitForEnabled();
        await this.btnContinueNewRecipient.click();
    }

    async leaveProcess() {
        const element = this.headerExitButton;
        await this.tapElement(element);
    }

    async closeOtp() {
        await this.signModal.closeModal();
    }

    async acceptNewRecipient() {
        await this.btnContinueNewRecipient.waitForDisplayed({timeout: config.wait.L});
        await this.btnContinueNewRecipient.waitForEnabled({timeout: config.wait.M});
        await this.btnContinueNewRecipient.waitForAttribute({
            attribute: 'disabled',
            timeout: config.wait.XXXL,
            reverse: true
        });
        await this.btnContinueNewRecipient.click();
    }

    async insertRecipientBank() {
        await this.inputRecipientBank.waitForClickable({timeout: config.wait.L});
        await this.inputRecipientBank.click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.S
        });
        await this.recipientBank.waitForClickable({timeout: config.wait.L});
        await this.recipientBank.click();
    }

    async insertRecipientProduct(){
        await this.inputRecipientProduct.waitForClickable({timeout: config.wait.M});
        await this.inputRecipientProduct.click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.S
        });
        await this.recipientProduct.waitForClickable({timeout: config.wait.M});
        await this.recipientProduct.click();
    }

    async insertRecipientsName(recipient) {
        await this.inputRecipientName.waitForDisplayed({timeout: config.wait.L});
        await this.inputRecipientName.waitForAnimation({timeout: config.wait.S});
        await this.inputRecipientName.setValue({value: recipient});
    }

    async isInterbankAliasSaved(alias) {
        await this.saveContactToNewRecipient();
        await this.savedAliasInterbank(alias);
        await this.acceptNewRecipient();
    }

    async isInternalAliasSaved(alias) {
        await this.saveContactToNewRecipient();
        await this.savedAliasInternal(alias);
        await this.acceptNewRecipient();
    }

    async saveContactToNewRecipient() {
        await this.checkNewRecipient.waitForClickable({timeout: config.wait.L});
        await this.checkNewRecipient.click();
    }

    async savedAliasInterbank(alias) {
        await this.inputAliasInterbank.waitForDisplayed({timeout: config.wait.M});
        await this.inputAliasInterbank.waitForAnimation({timeout: config.wait.S});
        await this.inputAliasInterbank.setValue({value: alias});
    }

    async savedAliasInternal(alias) {
        await this.inputAliasInternal.waitForDisplayed({timeout: config.wait.M});
        await this.inputAliasInternal.waitForAnimation({timeout: config.wait.S});
        await this.inputAliasInternal.setValue({value: alias});
    }

    // AMOUNT
    async setAmount(amount) {
        _.set(storage, 'transfer.amount', amount);
        await this.__root.waitForAnimation({timeout: config.wait.M});
        await this.amountInput.waitForEnabled({timeout: config.wait.M});
        await this.amountInput.setValue({value: amount});
    }

    async setContinueAmount() {
        await this.continueButtonAmount.waitForClickable({timeout: config.wait.L});
        await this.continueButtonAmount.click();
    }

    async continueAmountProcess(amount = DEFAULT_AMOUNT) {
        await this.setAmount(amount);
        await this.setContinueAmount();
    }

    async insertAmount(amount) {
        await this.setAmount(amount);
    }

    async deleteAmount() {
        await this.amountCancel.waitForClickable({timeout: config.wait.L});
        await this.amountCancel.click();
    }

    // CONCEPT
    async setConcept(concept) {
        await this.inputConcept.waitForEnabled({timeout: config.wait.L});
        await this.inputConcept.waitForAnimation({timeout: config.wait.L});
        await this.inputConcept.setValue({value: concept});
    }

    async setContinueConcept() {
        await this.continueButtonConcept.waitForDisplayed({timeout: config.wait.M});
        await this.continueButtonConcept.click();
    }

    async continueConceptProcess() {
        await this.setConcept(DEFAULT_CONCEPT);
        await this.setContinueConcept();
    }

    // AMOUNT AND CONCEPT IN INTERNAL AND INTERBANK TRANSFER
    async setAmountAndConceptInInterbankAndInternalTransfer() {
        await this.continueAmountProcess();
        await this.continueConceptProcess();
        await this.continueProcess();
    }

    // AMOUNT AND CONCEPT IN OWN TRANSFER
    async setAmountAndConcept() {
        await this.setAmountForeignExchange(DEFAULT_AMOUNT);
        await this.continueConceptProcess(DEFAULT_CONCEPT);
    }

    // AMOUNT AND CONCEPT IN FOREIGN CURRENCY TRANSFER
    async actionDestinationTitle() {
        await this.destinationTitleinForengn.waitForDisplayed({timeout: config.wait.S});
        await this.destinationTitleinForengn.click();
    }

    async setAmountForeignExchange(amount) {
        await this.setAmount(amount);
        await this.actionDestinationTitle();
        await this.setContinueAmount();
    }

    async setAmountAndConceptcontinueProcess(amount, concept) {
        await this.continueAmountProcess(amount);
        await this.continueConceptProcess(concept);
        await this.continueProcess();
    }

    // REVIEW AND AUTHORIZE
    async continueProcess() {
        await this.summaryContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.summaryContinueButton.click();
    }

    // SUCCESSFUL OPERATION
    async confirmToken(otp) {
        await this.fillOtp(otp);
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async selectPesosAccount() {
        await this.productTransfer.waitForDisplayed({timeout: config.wait.XL});
        await this.productTransfer.click();
    }

    async selectPesosDebit() {
        await this.pesosDebit.waitForEnabled({timeout: config.wait.XL});
        await this.pesosDebit.click();
    }

    async changeCurrency() {
        await this.changeCurrencyButton.waitForDisplayed({timeout: config.wait.M});
        await this.changeCurrencyButton.click();
    }

    //CANCEL THE OPERATION
    async cancelTransfer() {
        await this.headerExitButton.waitForClickable({timeout: config.wait.XL});
        await this.headerExitButton.click();
    }

    async cancelTransferWithModal() {
        await this.headerExitButton.waitForDisplayed({timeout: config.wait.M});
        await this.headerExitButton.click();
        await this.dialogOperations.confirmDialog({isConfirmed: true});
    }

    async changeOriginAccount() {
        await this.amountInput.waitForAnimation({timeout: config.wait.M, interval: config.wait.XS});
        await this.changeOriginBtn.waitForClickable({timeout: config.wait.M});
        await this.changeOriginBtn.click();
        await this.changeSourceAccount.waitForClickable({timeout: config.wait.L});
        await this.changeSourceAccount.click();
        await this.dialogOperations.confirmDialog({isConfirmed: true});
        await this.productSelected();
    }

    async enterAmount({amount}) {
        await this.setAmountForeignExchange(amount);
    }

    async correctionOfAmount(amount, concept) {
        await this.insertAmount(amount);
        await this.deleteAmount();
        await this.continueAmountProcess();
        await this.continueConceptProcess(concept);
    }

    async changeOriginAccountInSumary() {
        await this.changeOriginInSummary();
        await this.changeOriginAction();
    }

    async continueAmountAndConcept() {
        await this.continueAmountProcess();
        await this.continueConceptProcess();
    }

    async changeDestinationAccount() {
        await this.changeDestinationBtn.waitForDisplayed({timeout: config.wait.L});
        await this.changeDestinationBtn.click();
        await this.changeRecipientBtn.waitForClickable({timeout: config.wait.L});
        await this.changeRecipientBtn.click();
    }

    async changeConceptInSummary() {
        await this.changeConceptBtn.waitForAnimation({timeout: config.wait.L});
        await this.changeConceptBtn.scrollIntoView();
        await this.changeConceptBtn.waitForDisplayed({timeout: config.wait.L});
        await this.changeConceptBtn.waitForAnimation({timeout: config.wait.L});
        await this.changeConceptBtn.waitForClickable({timeout: config.wait.L});
        await this.changeConceptBtn.click();
    }

    async deleteConcept() {
        await this.conceptCancel.waitForClickable({timeout: config.wait.L});
        await this.conceptCancel.click();
    }

    async continueDifferentAmount(amount) {
        await this.insertAmount(amount);
        await this.setContinueAmount();
    }

    //REUSE OPERTATIONS LIST
    async reuseTransferList(operationType, operationId) {
        switch (operationType) {
            case 'own': {
                const reuseOwnItem = await this.reuseItemTransactionBtn.specifySelector({placeholder: '__OPERATIONID__', value: operationId});
                await reuseOwnItem.waitForClickable({timeout: config.wait.L});
                await reuseOwnItem.click();
                break;
            }
            case 'internal': {
                const reuseInternalItem = await this.reuseItemTransactionBtn.specifySelector({placeholder: '__OPERATIONID__', value: operationId});
                await reuseInternalItem.waitForClickable({timeout: config.wait.L});
                await reuseInternalItem.click();
                break;
            }
            case 'interbank': {
                const reuseInterbankItem = await this.reuseItemTransactionBtn.specifySelector({placeholder: '__OPERATIONID__', value: operationId});
                await reuseInterbankItem.waitForClickable({timeout: config.wait.L});
                await reuseInterbankItem.click();
                await this.continueConceptProcess();
                break;
            }
            default:
                throw new Error(`${operationType} Transfer operation is not available item...`);
        }
    }

    async openReuseModal() {
        await this.reuseOperationModalViewAll.waitForClickable({timeout: config.wait.L});
        await this.reuseOperationModalViewAll.click({timeout: config.wait.L});
    }

    async reuseTransferModal(operationType, operationId) {
        switch (operationType) {
            case 'own': {
                const reuseOwnItemModal = await this.reuseItemModalTransactionBtn.specifySelector({placeholder: '__OPERATIONID__', value: operationId});
                await this.openReuseModal();
                await reuseOwnItemModal.waitForClickable({timeout: config.wait.L});
                await reuseOwnItemModal.click({timeout: config.wait.L});
                break;
            }
            case 'internal': {
                const reuseInternalItem = await this.reuseItemModalTransactionBtn.specifySelector({placeholder: '__OPERATIONID__', value: operationId});
                await this.openReuseModal();
                await reuseInternalItem.waitForClickable({timeout: config.wait.L});
                await reuseInternalItem.click({timeout: config.wait.L});
                break;
            }
            case 'interbank': {
                const reuseInterbankItem = await this.reuseItemModalTransactionBtn.specifySelector({placeholder: '__OPERATIONID__', value: operationId});
                await this.openReuseModal();
                await reuseInterbankItem.waitForClickable({timeout: config.wait.L});
                await reuseInterbankItem.click();
                await this.continueConceptProcess();
                break;
            }
            default:
                throw new Error(`${operationType} Transfer operation is not available item...`);
        }
    }

    async completeDebtsSettlement() {
        await this.actionViewMoreAccounts();
        await this.selectOriginAccount();
        await this.accessMyAccounts();
        await this.selectDestinationAccount();
        await this.setAmountAndConceptcontinueProcess();
    }

    async selectOriginAccount() {
        const index =  global.user.products[0].accountId[0].other[0].id;
        const originAccount = await this.originAccountDebtSettlement.specifySelector({placeholder: '__ACCOUNT__', value: index});
        await originAccount.waitForClickable({timeout: config.wait.L});
        await originAccount.click();
    }

    async selectDestinationAccount() {
        const index = global.user.products[0].accountId[0].other[1].id;
        const destinationAccount = await this.destinationAccountDebtSettlement.specifySelector({placeholder: '__ACCOUNT__', value: index});
        await destinationAccount.waitForClickable({timeout: config.wait.L});
        await destinationAccount.click();
    }

    async acceptDimoInvitation(timesClicked = 1) {
        for(let i = 0; i < timesClicked; i++){
            await this.continueInviteDimo();
        }
    }

    //MAGIC SEARCH IN NEW RECIPIENT
    async magicSearchInteractions(params = {}) {
        const { actionInMagicSearch, option, accountNumber, nameContact, aliasContact } = params;
        await this.continueNewRecipient(DEFAULT_NUMBER[accountNumber] || accountNumber);
        if(actionInMagicSearch) {
            switch (actionInMagicSearch) {
                case 'recipient not found with number':
                case 'not found interbank':
                case 'not found interbank contact':
                case 'save new contact':
                case 'save new contact boost interbank transfers':
                case 'contact not saved':
                    if (option === 'SPEI' || option === 'unrecognized tdd') {
                        await this.insertRecipientBank();
                        if(option === 'unrecognized tdd') {
                            await this.insertRecipientProduct();
                        }
                    }
                    await this.insertRecipientsName(DEFAULT_NAME[nameContact] || nameContact);
                    if( actionInMagicSearch === 'contact not saved' ||
                        actionInMagicSearch === 'save new contact boost interbank transfers'
                    ) {
                        await this.acceptNewRecipient();
                    } else {
                        await this.isInterbankAliasSaved(DEFAULT_ALIAS[aliasContact] || aliasContact);
                    }
                    break;
                case 'search with account already saved':
                case 'search identified account':
                case 'contact not saved internal':
                case 'search recognized account':
                case 'already saved interbank':
                case 'internal identified':
                case 'internal recognized':
                    await this.acceptNewRecipient();
                    break;
                case 'not saved internal':
                case 'contact saved internal':
                    await this.isInternalAliasSaved(DEFAULT_ALIAS[aliasContact] || aliasContact);
                    break;
                default:
                    throw new Error(`Action "${actionInMagicSearch}" is not an option`);
            }
        }
    }

    async selectTransferOriginEntryPoint(origin, product) {
        switch(origin) {
            case 'account':
                await this.singleProductContBtn.waitForDisplayed({timeout: config.wait.M});
                await this.singleProductContBtn.click({timeout: config.wait.M});
                break;
            case 'more link':
                await this.sourceAccountSelected(user.products[0].accountId[0].other[0].id);
                break;
            default:
                throw new Error(`${product} Transfer product is not available to navigate to...`);
        }
    }
}

export default new Transfer();
