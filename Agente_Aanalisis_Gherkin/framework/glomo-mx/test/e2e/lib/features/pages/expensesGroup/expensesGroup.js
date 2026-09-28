import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class ExpensesGroup extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-expensesGroup[state="active"]',
            elements: {
                header: '#main-header',
                title: '#main-header #text',
                buttonCreateGroup: '[data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                buttonCreateGroupExit: '#main-header #btn-back',
                itemsCard:'[class="card-content list-item expenses-container"]',
                cardGroup: '[data-tag-name="bbva-panel-photo"][panel-title="__GROUP__"]',
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    createGroupModal: {
                        properties: {
                            root: '#createGroupModal'
                        },
                        createGroupTitle: '[data-tag-name="bbva-header-main"] #heading',
                        inputGroupName: '[data-tag-name="bbva-form-text"] input',
                        inputClear: '[data-tag-name="bbva-form-text"] [data-tag-name="bbva-button-default"]',
                        buttonContinue: '[data-tag-name="expenses-group-mx-name-step"] [data-tag-name="bbva-button-default"]:not(.clear)',
                        buttonCreateGroup: '#createGroupButton'
                    },
                    invitationGroupButtonNotNow: '#invitation [data-tag-name="bbva-button-default"][variant="link"]',
                    buttonAcceptNewMemberConfirm: '#newMemberConfirm [data-tag-name="bbva-button-default"]',
                    buttonCancelNewMemberConfirm: '#newMemberConfirm [data-tag-name="bbva-button-default"][variant="link"]',
                    step2: {
                        properties: {
                            root: '#step-2'
                        },
                        linkAddNewParticipant: '#bbvaLinkMembers',
                        buttonContinue: 'bbva-button-default[data-tag-name="bbva-button-default"]',
                        buttonEdit: '#editButton',
                        buttonEditParticipant : 'button [data-tag-name="bbva-type-icon"][icon="spherica:edit"]',
                        buttonDeleteParticipant: 'button [data-tag-name="bbva-type-icon"][icon="spherica:trash"]',
                        elementParticipant: '[data-tag-name="expenses-group-mx-list-contact"]',
                    },
                    inputExpenseInformationStep3: '#step-3 [data-tag-name="bbva-form-amount"] input',
                    continueExpenseInformationStep3: '#step-3 [class="space-top"] [data-tag-name="bbva-button-default"]',
                    continueExpenseInformationStep4: '#step-4 [class="space-top"] [data-tag-name="bbva-button-default"]',
                    textListPayersStep4: '#step-4 [data-tag-name="expenses-group-mx-expense-configuration-step"]',
                    buttonCreateResume: '#createGroupButton',
                    newMember: {
                        properties: {
                            root: '#newMember'
                        },
                        editInformationTitle: '[data-tag-name="bbva-header-main"] #heading',
                        editInformationCloseButton: '#btn-close',
                        editInformationInputName: '#nameField input',
                        editInformationInputNumber: '#phoneNumberField input',
                        editInformationCloseLink: '#helpModalHeader #btn-close',
                        buttonAddParticipant: '.slot-footer [data-tag-name="bbva-button-default"]',
                    },
                    onboardingModal: {
                        properties: {
                            root: '#onboardingModal'
                        },
                        linkhelp: '#termsLink',
                        linkTermsAndConditions: '#termsLink [data-tag-name="bbva-type-link"]',
                        checkTermsAndConditions: '#termsReadCheckbox',
                        buttonAccept: '[data-tag-name="bbva-button-default"]',
                    },
                    buttonaddParticipe: '#newContactButtonList',
                    productSelected: '#associateProductSelector [data-tag-name="expenses-group-mx-list-card"]',
                    selectMomentModal: {
                        properties:{
                            root: '#selectMovementModal'
                        },
                        headerLastMovementsModal: '[data-tag-name="bbva-header-main"] #heading',
                        lastMovements: '[data-tag-name="expenses-group-mx-list-movement"]',
                        closeButton: '#btn-close',
                    },
                    modalEditPayer: {
                        properties:{
                            root: '#edit-payers'
                        },
                        editCheckBox: '[data-tag-name="bbva-form-checkbox-input"][role="checkbox"]',
                        inputAmount: '#amountField-271428 input',
                        buttonSave: '#editExpense #button',
                        totalExpense: '[class="header-content"]',
                        btnClose: '#btn-close',
                    },
                    modalEditBeneficiaries: {
                        properties:{
                            root: '#edit-beneficiaries'
                        },
                        editCheckBox: ' [data-tag-name="bbva-form-checkbox-input"][role="checkbox"]',
                        inputAmount: '#amountField-313910 input',
                        inputsCheck: '[data-tag-name="bbva-form-input"]',
                        closeButton: '#btn-close',
                        buttonSave: '#editExpense #button',
                        inputAmountDivision: '#amountField-271429 input',
                        restoreParts: '[data-tag-name="bbva-type-link"]',
                        totalDivisionExpense: '#editExpense [class="header-content"]',
                    },
                    associateExpensesModal:{
                        properties:{
                            root: '#associateExpenseModal'
                        },
                        buttonAssociate: '#associateExpenseButton',
                        editExpenseProduct: '#step-1',
                        editExpenseMovement: '[data-tag-name="bbva-expandable-step"]#step-2[completed] #editButton',
                        editExpenseInformation: '[data-tag-name="bbva-expandable-step"]#step-3[completed] #editButton',
                        editExpenseConfiguration: '[data-tag-name="bbva-expandable-step"]#step-4[completed] #editButton',
                        sectionProduct: '[data-tag-name="bbva-expandable-multistep"] #step-1',
                        sectionMovements: '[data-tag-name="bbva-expandable-multistep"] #step-2',
                        sectionInformation: '[data-tag-name="bbva-expandable-multistep"] #step-3',
                        sectionConfiguration: '[data-tag-name="bbva-expandable-multistep"] #step-4',
                        accounts: '#step-1 [data-tag-name="expenses-group-mx-product-step"] [data-tag-name="bbva-expandable-accordion"]',
                        cards: '[data-tag-name="bbva-expandable-accordion"] [data-tag-name="bbva-type-icon"][icon="spherica:card"]',
                        showAllAccounts: '#step-1 [data-tag-name="bbva-expandable-accordion"].accordion-button [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                        card: '[data-tag-name="expenses-group-mx-list-card"][num-product="__PRODUCT__"]',
                        showAll: '#step-1 [data-tag-name="expenses-group-mx-product-step"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                        buttonContinue: '.footer-position [data-tag-name="bbva-button-default"]',
                        headerLastMovements: '[data-tag-name="expenses-group-mx-movement-step"]',
                        textSelectMovement: '#step-2 [data-tag-name="expenses-group-mx-movement-step"] .associate-expense-movement-step .content-step [data-tag-name="bbva-type-text"]',
                        movements: '#step-2 [data-tag-name="expenses-group-mx-movement-step"] [data-tag-name="expenses-group-mx-list-movement"]',
                        showAllMovements: '#step-2 [data-tag-name="expenses-group-mx-movement-step"] [data-tag-name="bbva-type-link"]',
                        numberStep: '#step-2 #currentStep',
                        withoutMovements: '.content-step [data-tag-name="expenses-group-mx-panel-info"]',
                        textWithoutMovements: '#step-2 [data-tag-name="expenses-group-mx-panel-info"] [data-tag-name="bbva-type-text"] p.text',

                        inputExpenseInformation: '[data-tag-name="bbva-form-amount"] input',
                        inputConcept: '#conceptField input',
                        inputDate: '#dateField input',
                        buttonContinueInformation: '#step-3 [class="space-top"] [data-tag-name="bbva-button-default"]',

                        textConfiguration: '[data-tag-name="expenses-group-mx-expense-configuration-step"]',
                        editPayer: '#test-expenses-group [data-tag-name="bbva-type-icon"][icon="spherica:edit"]',
                        divisionExpense: '#step-4 [data-tag-name="bbva-panel-container"] [label="División del gasto"] [data-tag-name="bbva-type-icon"][icon="spherica:edit"]',
                        personalized: '#step-4 bbva-panel-container expenses-group-mx-list-simple',
                        buttonContinueConfiguration: '#step-4 [class="space-top"] [data-tag-name="bbva-button-default"]',
                    },
                    receiptAssociateExpense: {
                        properties: {
                            root: '#associateExpenseReceiptModal'
                        },
                        header: '#helpModalHeader .header',
                        expenseSection: '[data-tag-name="bbva-header-category"]',
                        successScreenExpensesInformation: '[data-tag-name="expenses-group-mx-panel-process"]',
                        successScreenAssociateExpense: '[data-tag-name="bbva-panel-container"]',
                        buttonExitSuccess: ' #btn-close',
                    },
                    associateCashExpenseModal:{
                        properties: {
                            root: '#associateCashExpenseModal'
                        },
                        inputAmount: '#amountField input',
                        inputConcept: '#conceptField input',
                        inputDate: '#dateField input',
                        buttonContinue: '#step-3 .space-top [data-tag-name="bbva-button-default"][text="Continuar"]',
                        buttonAssociate: '#associateExpenseButton',
                        editExpenseInformation: '[data-tag-name="bbva-expandable-step"]#step-3[completed] #editButton',
                        editPayerStep4: '#step-4 #test-expenses-group [data-tag-name="bbva-type-icon"][icon="spherica:edit"]',
                        buttonContinueStep4: '#step-4 bbva-button-default',
                    },
                    buttonExpensesInfoHelpModal :'#aemContentModal [data-tag-name="bbva-button-default"]',
                    memberDetailRequestPaymentButton: '#paymentsModal [data-tag-name="bbva-button-default"]',
                    personRadioButtonMember: '[data-tag-name="bbva-form-control-input"] [class="box"]',
                    sendPaymentReminderTitle: '#paymentsModal #helpModalHeader .header',
                    sendPaymentReminderCloseButton: '#paymentsModal #btn-close',
                    sendPaymentReminderDescription: '#paymentsModal > div',
                    sendPaymentReminderPanelMembers: '[data-tag-name="expenses-group-mx-select-member"]',
                    confirmModalMemberDetailWarningIcon: '#confirmMemberDetail #helpModalTitle',
                    confirmModalMemberDetailDescription: '#confirmMemberDetail #helpModalContent',
                    confirmModalMemberDetailAcceptButton: '#confirmMemberDetail [data-tag-name="bbva-button-default"]',
                    confirmModalMemberDetailCancelLink: '#confirmMemberDetail [data-tag-name="bbva-button-default"][variant="link"]',
                    editButtonConfirmModal: '#editConfirmModal [data-tag-name="bbva-button-default"]',
                    markAsPaidModal: {
                        properties: {
                            root: '#markAsPaidModal',
                        },
                        markAsPaidModalTitle: '#helpModalHeader .header',
                        markAsPaidModalCloseButton: '#btn-close',
                        markAsPaidSelectAllCheck: '[value="SELECT_ALL"] [class="box"]',
                        markAsPaidSelectOneCheck: '[data-tag-name="bbva-form-control-input"] [class="box"]',
                        markAsPaidConfirmButton: '[class="space-top"] [data-tag-name="bbva-button-default"]',
                    },
                    markAsPaidModalConfirm: {
                        properties: {
                            root: '#memberMarkAsPaidModalConfirm',
                        },
                        markAsPaidModalConfirmIcon: '[data-tag-name="bbva-type-icon"]',
                        markAsPaidModalConfirmTitle: '#title-text',
                        markAsPaidModalConfirmInformation: '#helpModalContent',
                        markAsPaidModalConfirmButton: '[data-tag-name="bbva-button-default"][role="button"]',
                        markAsPaidModalConfirmLink: '[data-tag-name="bbva-button-default"][variant="link"]'
                    },
                    markAsPaidReceiptModal: {
                        properties: {
                            root: '#markAsPaidReceiptModal',
                        },
                        markAsPaidReceiptTitle: '#helpModalHeader .header',
                        markAsPaidReceiptPanelInfo: '[data-tag-name="expenses-group-mx-panel-process"]',
                        markAsPaidReceiptMemberDetail: 'bbva-panel-container div div [data-tag-name="expenses-group-mx-receipt-detail"]',
                        markAsPaidReceiptExitButton: '#helpModalHeader #btn-close',
                    },
                    requestPaymentSelectOneCheckPaymentsModal:'#paymentsModal [data-tag-name="bbva-form-control-input"] [class="box"]',
                    pendingPaymentsButtonAccept: '#expensesInfo #btn-close',
                    editExpenseButtonExitSuccess:'[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-header-main"] #btn-close',
                    inputAmount: '#amountField input',
                    inputConcept: '#conceptField input',
                    expensesDetailAssociateButton: '#associateExpenseButton',
                    expensesDetailCancelButton: '[data-tag-name="bbva-help-modal"][visible] .footer-button.link',
                    expensesDetailContinueDelete: '[data-tag-name="bbva-help-modal"][visible] .footer-button[data-tag-name="bbva-button-default"]',
                    successScreenTitle: '#associateCashExpenseModalEdit506 #helpModalHeader .header',
                    successScreenCloseButton: '#associateCashExpenseModalEdit506 #helpModalHeader #btn-close',
                    deleteEntryModalButtonContinue: '[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"]',
                    buttonCancelButtonCancel: '[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-type-link"]',
                    requestPaymentTitle: '#paymentsModal #helpModalHeader .header',
                    requestPaymentCloseButton: '#paymentsModal #helpModalHeader #btn-close',
                    requestPaymentDescription: '#paymentsModal > div',
                    requestPaymentPanelMembers: '[data-tag-name="expenses-group-mx-select-member"]',
                    requestPaymentButton: '#paymentsModal [data-tag-name="bbva-button-default"]',
                    personRadioButton: '[data-tag-name="bbva-form-control-input"] [class="box"]',
                    buttonToAddExpenseInCash: '#emptyProductsErrorModal [data-tag-name="bbva-button-default"]',
                    buttonPaySheetDollarActionParticipant:  'bbva-help-modal[data-tag-name="bbva-help-modal"][header-text^="Más acciones"] .container-link [data-tag-name="bbva-type-link"] [icon="spherica:qr"]',
                    buttonShareActionParticipant: 'bbva-help-modal[data-tag-name="bbva-help-modal"][header-text^="Más acciones"] .container-link [data-tag-name="bbva-type-link"] [icon="spherica:share"]',
                    buttonSendActionParticipant: 'bbva-help-modal[data-tag-name="bbva-help-modal"][header-text^="Más acciones"] .container-link [data-tag-name="bbva-type-link"] [icon="spherica:send"]',
                    buttonEditProfileActionParticipant: 'bbva-help-modal[data-tag-name="bbva-help-modal"][header-text^="Más acciones"] .container-link [data-tag-name="bbva-type-link"] [icon="spherica:edit-profile"]',
                    buttonRightActionParticipant: 'bbva-help-modal[data-tag-name="bbva-help-modal"][header-text^="Más acciones"] .container-link [data-tag-name="bbva-type-link"] [icon="spherica:right"]',
                    groupNameModal: {
                        properties: {
                            root: '#groupNameModal'
                        },
                        buttonClose: '#btn-close',
                        changeNameGroupTitle: '[data-tag-name="bbva-header-main"] #heading',
                        inputName: '[data-tag-name="bbva-form-input"] input',
                        buttonSave: 'slot [data-tag-name="bbva-button-default"]',
                    },
                    groupNameModalConfirmButtonAccept: '#groupNameModalConfirm [data-tag-name="bbva-button-default"]',
                    groupNameModalConfirmButtonCancel: '#groupNameModalConfirm [data-tag-name="bbva-button-default"][variant="link"]',
                    addMemberModal: {
                        properties: {
                            root: '#addMemberModal',
                        },
                        addParticipantTitle: '[data-tag-name="bbva-header-main"] #heading',
                        addParticipantCloseButton: '#btn-close',
                        addParticipantDescription: '[data-tag-name="bbva-type-text"][text^="Puedes añadir"] p.text',
                        addParticipantAddNewButton: '#newContactButtonList [data-tag-name="bbva-type-link"]',
                        addParticipantFromMyContacts: '#contactsButtonList [data-tag-name="bbva-type-link"]',
                    },
                    deleteParticipantModal: {
                        properties: {
                            root: '#removeMembersModal',
                        },
                        deleteParticipantTitle: '[data-tag-name="bbva-header-main"] #heading',
                        deleteParticipantCloseButton: '#btn-close',
                        deleteParticipantPanelContent: '[slot="slot-content"]',
                        deleteParticipantDeleteButton: '[data-tag-name="bbva-button-default"]',
                        deleteParticipantCloseLink: '#helpModalHeader #btn-close .circle',
                        deleteParticipanCheck: '[data-tag-name="bbva-form-control-input"]',
                        deleteParticipanCheckAll:'[data-tag-name="bbva-form-control-input"][value="SELECT_ALL"]',
                    },
                    deleteGroupModalWarningIcon: '#modalConfirm #helpModalTitle',
                    deleteGroupModalDescription: '#modalConfirm [class="modal-content-wrapper"]',
                    deleteGroupModalAcceptButton: '#modalConfirm [data-tag-name="bbva-button-default"]',
                    deleteGroupModalCancelLink: '#modalConfirm [data-tag-name="bbva-button-default"][variant="link"]',
                    deleteEntryModalButtonClose: '#deleteEntryModal #helpModalHeader #btn-close',
                    deleteEntryModalSpendingMovementDelete: '#deleteEntryModal [data-tag-name="expenses-group-mx-list-movement"][card-title="__SPENTMOVEMENTDELETE__"]',
                    deleteEntryModalOptionsButtonContinue: '[modal-type="caution"][visible] [data-tag-name="bbva-button-default"]',
                    deleteEntryModalOptionsButtonCancel: '[modal-type="caution"][visible] [data-tag-name="bbva-button-default"][variant="link"]',
                    requestPaymentModal: {
                        properties: {
                            root: '#paymentsModal',
                        },
                        requestPaymentModalCloseButton: '#btn-close',
                        requestPaymentModalMarkAsPaidCheck: '[data-tag-name="bbva-form-control-input"] [class="box"]',
                        requestPaymentModalConfirmButton: '[data-tag-name="bbva-button-default"]',
                    },
                    detailMarkAsPaidModalConfirm: {
                        properties: {
                            root: '#detailMarkAsPaidModalConfirm',
                        },
                        detailMarkAsPaidModalConfirmIcon: '#helpModalTitle [name="slot-title"] [data-tag-name="bbva-type-icon"]',
                        detailMarkAsPaidModalConfirmTitle: '[data-tag-name="bbva-type-text"]',
                        detailMarkAsPaidModalConfirmInformation: '#helpModalContent .slot-content [data-tag-name="bbva-type-text"][text^="Si has"] p.text',
                        detailMarkAsPaidModalConfirmButton: '.content section .modal-main .modal-footer [data-tag-name="bbva-button-default"]',
                        detailMarkAsPaidModalConfirmLink: '.content section .modal-main .modal-footer [data-tag-name="bbva-button-default"][variant="link"]'
                    },
                    modalConfirmRemovalButtonAccept: '#Confirm [data-tag-name="bbva-button-default"]',
                    modalConfirmRemovalButtonExit: '#Confirm [data-tag-name="bbva-button-default"][variant="link"]',
                    editeExpenseDetail:{
                        properties:{
                            root:'[data-id="modalAssociateCashExpenseModal"][visible]',
                        },
                        inputAmount: '#amountField input',
                        inputConcept: '#conceptField input',
                        buttonContinue: '#step-3 [data-tag-name="expenses-group-mx-expense-information-step"] .space-top [data-tag-name="bbva-button-default"]',
                        expensesDetailAssociateButton: '#associateExpenseButton',
                        buttonContinueStep4: '#step-4 [data-tag-name="bbva-button-default"]',
                    },
                },
                btnSeeMoreAndSeeLess: 'bbva-expandable-panel',
                memberDetail: {
                    properties: {
                        root: '#memberDetail-transition-container'
                    },
                    buttonEditAndExit:'#buttons [data-tag-name="bbva-button-action"]',
                    buttonEdit: '#buttons span [data-tag-name="bbva-button-action"]',
                    buttonAction: '[data-tag-name="bbva-button-row"] #buttons span.text',
                    buttonExitGroup: '#buttons [data-tag-name="bbva-button-action"] [text="Salir del grupo"]',
                    memberDetailTitle: BbvaHeaderMain,
                    memberDetailBackButton: '#btn-back',
                    memberDetailCardContainer: '[data-tag-name="bbva-panel-container"]',
                    memberDetailOperativesRow: '[data-tag-name="bbva-button-row"]',
                    memberDetailPendingPaymentTitle: '[data-tag-name="bbva-header-category"]',
                    memberDetailPendingPaymentPanel: '#tab-default',
                    buttonHelp: '[data-tag-name="bbva-type-link"]',
                    pendindPaymentsPanel: '[data-tag-name="expenses-group-mx-member-detail"] .set-padding-2',

                },
                expensesDetail: {
                    properties: {
                        root: '#expenseDetail-transition-container'
                    },
                    expensesDetailTitle: BbvaHeaderMain,
                    expensesDetailDeletePanelInformation: '[data-tag-name="expenses-group-mx-expense-detail"] [data-tag-name="bbva-panel-container"]',
                    expensesDetailBackButton: '#btn-back',
                    opctions:'#buttons [data-tag-name="bbva-button-action"]',
                    messageParticipantHasComeOut: '[data-tag-name="bbva-notification-help"]',
                    messageNotification: 'bbva-notification-message',
                    expensesDetailConceptPanel: '[data-tag-name="expenses-group-mx-expense-detail"] [data-tag-name="bbva-panel-container"] [data-tag-name="expenses-group-mx-expense-header-panel"]',
                    expensesDetailPanelInformation: '[data-tag-name="expenses-group-mx-expense-detail"] [data-tag-name="bbva-panel-container"] [data-tag-name="expenses-group-mx-expense-settlement-panel"]',
                    debtExpensesDetailPanelInformation: '[data-tag-name="expenses-group-mx-expense-detail"] [data-tag-name="bbva-panel-container"] [data-tag-name="expenses-group-mx-expense-panel"]',
                    expensesDetailFooterOperatives: '[data-tag-name="expenses-group-mx-expense-detail"] [data-tag-name="expenses-group-mx-simple-button-row"]',
                    expensesDetailButtonAction: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                    expensesDetailLeftNotification: '[data-tag-name="expenses-group-mx-expense-detail"] [data-tag-name="bbva-notification-message"]',
                },
                detailGroup: {
                    properties: {
                        root: '#detail-transition-container'
                    },
                    btnActionCash: '#buttons [data-tag-name="bbva-button-action"] [text^="Añadir gasto en efectivo"]',
                    buttonCodi:  '.button-row-members #buttons [data-tag-name="bbva-button-action"]',
                    buttonAssociatePayment: '.button-row-expenses [data-tag-name="expenses-group-mx-simple-button-row"] [data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                    buttonRowShare: '#buttons [data-tag-name="bbva-button-action"] [text="Invitar al grupo"]',
                    buttonRowAddParticipants: '#buttons [data-tag-name="bbva-button-action"] [text="Añadir participantes"]',
                    buttonRowDoPayment: '#buttons [data-tag-name="bbva-button-action"] [text="Realizar pago"]',
                    buttonRowRequestPayment: '#buttons [data-tag-name="bbva-button-action"] [text="Solicitar pago con CoDi®"]',
                    buttonRowParticipants: '[slot="content-1"] [class="listitem-button"]',
                    btnActionExpenses: '[data-tag-name="expenses-group-mx-simple-button-row"] #buttons',
                    btnActionSettings: '[data-tag-name="bbva-header-main"] #btn-settings',
                    buttonCardActionParticipant: '#buttons [data-tag-name="bbva-button-action"] [text="Agregar gasto"]',
                    paymentStatusSelector: '[data-tag-name="expenses-group-mx-list-movement"]',
                    paymentStatus: '[slot="content-0"] [data-tag-name="bbva-panel-marquee"] div.content-left span.text.lines',
                    mainCreditor: 'expenses-group-mx-detail #tab-default [data-tag-name="expenses-group-mx-list-contact"][content-title="__NAME__"] div.wrapper',
                    confirmDeleteTooltip: '[data-tag-name="bbva-notification-toast"]',
                    expensesBackButton: '#btn-back',
                    buttonExpenses: '#tab-0',
                    expensesDefinitionAmount: '[data-tag-name="expenses-group-mx-list-definition-amount"]',
                    expensesOperativesRow: '[slot="content-0"] [data-tag-name="bbva-button-row"]',
                    spendingMovement: '[data-tag-name="expenses-group-mx-list-movement"][card-title="__SPENTMOVEMENT__"]',
                    expensesGroupDetail: {
                        properties: { root: '[data-tag-name="expenses-group-mx-detail"] #tab-default' },
                        btnActionParticipants: '.panel.members div.button-row-members [data-tag-name="expenses-group-mx-simple-button-row"] #buttons',
                        buttonNoClientActionParticipant: '[data-tag-name="bbva-button-action"] [text="Eliminar participante"]',
                        buttonRemoveParticipants: '[data-tag-name="bbva-button-action"] [text="Eliminar participantes"]',
                        buttonParticipants: '#tab-1 .icon-pack .tab-title [data-tag-name="bbva-type-text"][text^="Participantes"]',
                        buttonRowContainer: '.button-row-members [data-tag-name="expenses-group-mx-simple-button-row"] #buttons',
                        participantsDebtorsPanel: '.panel.members',
                        noExpensesPanel: '[data-tag-name="expenses-group-mx-panel-info"]',
                        expensesHistoryPanel: '.panel',
                    }
                },
                settingsGroup: {
                    properties: {
                        root: '[data-tag-name="expenses-group-mx-settings-modal"]'
                    },
                    modalSettings: {
                        properties: {
                            root: {
                                web: '#settings-modal',
                                isWithoutRoot: true
                            }
                        },
                        buttonNewClientActionParticipant: '#addMember [data-tag-name="bbva-type-link"]',
                        buttonEditActionParticipant: '#editName [data-tag-name="bbva-type-link"]',
                        buttonRemoveMember: '#removeMembers [data-tag-name="bbva-type-link"]',
                        buttonTrashActionParticipant: '#deleteGroup [data-tag-name="bbva-type-link"]',
                        btnActionDeleteExpense: '#deleteExpenseOrPayment [data-tag-name="bbva-type-link"]',
                    },
                }
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back':
                await this.buttonCreateGroupExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'items group':
                await this.itemsCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button create group':
                await this.buttonCreateGroup.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit participant':
                await this.modalsContainer.step2.buttonEditParticipant.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button delete participant':
                await this.modalsContainer.step2.buttonDeleteParticipant.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'element participant':
                await this.modalsContainer.step2.elementParticipant.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue':
                await this.modalsContainer.step2.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button participants':
                await this.detailGroup.expensesGroupDetail.buttonParticipants.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt associate expense':
                await this.modalsContainer.receiptAssociateExpense.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section expense information':
                await this.waitForElementsExist(this.modalsContainer.receiptAssociateExpense.expenseSection);
                await (await this.modalsContainer.receiptAssociateExpense.expenseSection.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section expense configuration':
                await this.waitForElementsExist(this.modalsContainer.receiptAssociateExpense.expenseSection);
                await (await this.modalsContainer.receiptAssociateExpense.expenseSection.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button associate':
                await this.modalsContainer.receiptAssociateExpense.buttonExitSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section product':
                await this.modalsContainer.associateExpensesModal.sectionProduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number step':
                await this.modalsContainer.associateExpensesModal.numberStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last movements':
                await this.modalsContainer.associateExpensesModal.headerLastMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'without movements':
                await this.modalsContainer.associateExpensesModal.withoutMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text without movements':
                await this.modalsContainer.associateExpensesModal.textWithoutMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show all movements':
                await this.modalsContainer.associateExpensesModal.showAllMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text select an expense':
                await this.modalsContainer.associateExpensesModal.textSelectMovement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section information':
                await this.modalsContainer.associateExpensesModal.sectionInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit information':
                await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseInformation);
                await (await this.modalsContainer.associateExpensesModal.editExpenseInformation.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit product':
                await this.modalsContainer.associateExpensesModal.editExpenseProduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit movements':
                await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseMovement);
                await (await this.modalsContainer.associateExpensesModal.editExpenseMovement.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit configuration':
                await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseConfiguration);
                await (await this.modalsContainer.associateExpensesModal.editExpenseConfiguration.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section configuration':
                await this.modalsContainer.associateExpensesModal.sectionConfiguration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit payer':
                await this.modalsContainer.associateExpensesModal.editPayer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'division expense':
                await this.modalsContainer.associateExpensesModal.divisionExpense.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'division expense personalized':
                await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.personalized);
                await (await this.modalsContainer.associateExpensesModal.personalized.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue to associate':
                await this.modalsContainer.associateExpensesModal.buttonContinueConfiguration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button associate':
                await this.modalsContainer.associateExpensesModal.buttonAssociate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header last movements':
                await this.modalsContainer.selectMomentModal.headerLastMovementsModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last movements in modal':
                await this.modalsContainer.selectMomentModal.lastMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close last movements':
                await this.modalsContainer.selectMomentModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text configuration step':
                await this.modalsContainer.associateExpensesModal.textConfiguration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'visible checkbox':
                await this.waitForElementsExist(this.modalsContainer.modalEditPayer.editCheckBox);
                await (await this.modalsContainer.modalEditPayer.editCheckBox.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total division expense':
                await this.modalsContainer.modalEditPayer.totalExpense.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button save division':
                await this.modalsContainer.modalEditPayer.buttonSave.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text division expense':
                await this.modalsContainer.textListPayersStep4.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total expense division':
                await this.modalsContainer.modalEditBeneficiaries.totalDivisionExpense.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button division save':
                await this.modalsContainer.modalEditBeneficiaries.buttonSave.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'division expense checkbox':
                await this.modalsContainer.modalEditBeneficiaries.editCheckBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount expense division':
                await this.modalsContainer.modalEditBeneficiaries.inputsCheck.scrollIntoView();
                await this.modalsContainer.modalEditBeneficiaries.inputsCheck.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button close expense division':
                await this.modalsContainer.modalEditBeneficiaries.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button restore parts':
                await this.modalsContainer.modalEditBeneficiaries.restoreParts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section movements':
                await this.modalsContainer.associateExpensesModal.sectionMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'visible checkbox unchecked':
                await this.modalsContainer.modalEditPayer.editCheckBox.specifySelector({placeholder: '__N__', value: 3}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create group title':
                await this.modalsContainer.createGroupModal.createGroupTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input group name':
                await this.modalsContainer.createGroupModal.inputGroupName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input clear':
                await this.modalsContainer.createGroupModal.inputClear.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'button continue create group':
                await this.modalsContainer.createGroupModal.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses success message':
                await this.detailGroup.confirmDeleteTooltip.waitForExist({timeout: config.wait.M});
                break;
            case 'expenses detail amount':
                await this.detailGroup.expensesDefinitionAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses operatives row':
                await this.detailGroup.expensesOperativesRow.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses history panel':
                await this.detailGroup.expensesGroupDetail.expensesHistoryPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail no movements':
                await this.detailGroup.expensesGroupDetail.noExpensesPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses back button':
                await this.detailGroup.expensesBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses associate payment':
                await this.waitForElementsExist(this.detailGroup.btnActionExpenses);
                await (await this.detailGroup.btnActionExpenses.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses add cash expense':
                await this.detailGroup.btnActionCash.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses delete expense or payment':
                await this.detailGroup.btnActionCash.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses more operatives button':
                await this.detailGroup.btnActionExpenses.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'spending movement':
                await this.detailGroup.spendingMovement.specifySelector({placeholder: '__SPENTMOVEMENT__', value: value}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message without movements':
                await this.detailGroup.expensesGroupDetail.noExpensesPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid receipt title':
                await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid receipt close button':
                await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptExitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid receipt panel information':
                await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptPanelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid receipt members details':
                await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptMemberDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid receipt exit button':
                await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptExitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail title':
                await this.expensesDetail.expensesDetailTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail back button':
                await this.expensesDetail.expensesDetailBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail concept panel':
                await this.expensesDetail.expensesDetailConceptPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail panel information':
                await this.expensesDetail.expensesDetailPanelInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debt expenses detail panel information':
                await this.expensesDetail.debtExpensesDetailPanelInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail delete panel information':
                await this.expensesDetail.expensesDetailDeletePanelInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses detail footer operatives':
                await this.expensesDetail.expensesDetailFooterOperatives.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'expenses detail left notification':
                await this.expensesDetail.expensesDetailLeftNotification.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'edit expense detail expense':
                await this.waitForElementsExist(this.expensesDetail.opctions);
                await (await this.expensesDetail.opctions.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete expense detail expense':
                await this.waitForElementsExist(this.expensesDetail.opctions);
                await (await this.expensesDetail.opctions.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button see more detail expense':
                await this.btnSeeMoreAndSeeLess.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'button return detail expense':
                await this.detailGroup.expensesBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message participant has come out detail expense':
                await this.expensesDetail.messageParticipantHasComeOut.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message notification detail expense':
                await this.expensesDetail.messageNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses section':
                await this.detailGroup.expensesGroupDetail.buttonParticipants.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants section':
                await this.detailGroup.buttonExpenses.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants do payment button':
                await this.detailGroup.buttonRowDoPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants request payment button':
                await this.detailGroup.buttonRowRequestPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants add participant button':
                await this.detailGroup.buttonRowAddParticipants.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants share debt status button':
                await this.detailGroup.buttonRowShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants more operatives button':
                await this.detailGroup.expensesGroupDetail.btnActionParticipants.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants debtors panel':
                await this.detailGroup.expensesGroupDetail.participantsDebtorsPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button request payment':
                await this.waitForElementsExist(this.modalsContainer.buttonPaySheetDollarActionParticipant);
                await (await this.modalsContainer.buttonPaySheetDollarActionParticipant.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button add participant':
                await this.waitForElementsExist(this.modalsContainer.buttonNewClientActionParticipant);
                await (await this.modalsContainer.buttonNewClientActionParticipant.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button share debt status':
                await this.waitForElementsExist(this.modalsContainer.buttonShareActionParticipant);
                await (await this.modalsContainer.buttonShareActionParticipant.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button change name':
                await this.waitForElementsExist(this.modalsContainer.buttonEditActionParticipant);
                await (await this.modalsContainer.buttonEditActionParticipant.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button delete participant':
                await this.waitForElementsExist(this.modalsContainer.buttonNoClientActionParticipant);
                await (await this.modalsContainer.buttonNoClientActionParticipant.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button invite to group':
                await this.waitForElementsExist(this.modalsContainer.buttonSendActionParticipant);
                await (await this.modalsContainer.buttonSendActionParticipant.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button delete group':
                await this.waitForElementsExist(this.modalsContainer.buttonTrashActionParticipant);
                await (await this.modalsContainer.buttonTrashActionParticipant.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request payment title':
                await this.modalsContainer.requestPaymentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request payment close button':
                await this.modalsContainer.requestPaymentCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request payment description':
                await this.modalsContainer.requestPaymentDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request payment panel members':
                await this.modalsContainer.requestPaymentPanelMembers.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request payment panel button':
                await (await this.modalsContainer.requestPaymentButton.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'change name group title':
                await this.modalsContainer.groupNameModal.changeNameGroupTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change name group close button':
                await this.modalsContainer.groupNameModal.buttonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change name group input name':
                await this.modalsContainer.groupNameModal.inputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change name group save button':
                await (await this.modalsContainer.groupNameModal.buttonSave.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'change name group close link':
                await this.modalsContainer.groupNameModal.buttonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add participant title':
                await this.modalsContainer.addMemberModal.addParticipantTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add participant close button':
                await this.modalsContainer.addMemberModal.addParticipantCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add participant description':
                await this.modalsContainer.addMemberModal.addParticipantDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add participant add new button':
                await this.modalsContainer.addMemberModal.addParticipantAddNewButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add participant from my contacts':
                await this.modalsContainer.addMemberModal.addParticipantFromMyContacts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail title':
                await this.memberDetail.memberDetailTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail back button':
                await this.memberDetail.memberDetailBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail card container':
                await this.memberDetail.memberDetailCardContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail menu operatives row':
                await this.memberDetail.memberDetailOperativesRow.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail pending payments section':
                await this.memberDetail.memberDetailPendingPaymentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail pending payments panel':
                await this.memberDetail.pendindPaymentsPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail request payment title':
                await this.modalsContainer.sendPaymentReminderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail request payment close button':
                await this.modalsContainer.sendPaymentReminderCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail request payment description':
                await this.modalsContainer.sendPaymentReminderDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail request payment panel members':
                await this.modalsContainer.sendPaymentReminderPanelMembers.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'member detail request payment panel button':
                await (await this.modalsContainer.memberDetailRequestPaymentButton.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'delete participant title':
                await this.modalsContainer.deleteParticipantModal.deleteParticipantTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete participant close button':
                await this.modalsContainer.deleteParticipantModal.deleteParticipantCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete participant panel content':
                await this.modalsContainer.deleteParticipantModal.deleteParticipantPanelContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete participant delete button':
                await this.modalsContainer.deleteParticipantModal.deleteParticipantDeleteButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete participant close link':
                await this.modalsContainer.deleteParticipantModal.deleteParticipantCloseLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete group warning icon':
                await this.modalsContainer.deleteGroupModalWarningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete group description':
                await this.modalsContainer.deleteGroupModalDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete group accept button':
                await this.modalsContainer.deleteGroupModalAcceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete group cancel link':
                await this.modalsContainer.deleteGroupModalCancelLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success screen title':
                await this.modalsContainer.successScreenTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success screen close button':
                await this.modalsContainer.successScreenCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success screen associate expense':
                await this.modalsContainer.receiptAssociateExpense.successScreenAssociateExpense.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success screen expense information':
                await this.modalsContainer.receiptAssociateExpense.successScreenExpensesInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success screen exit button':
                await this.modalsContainer.receiptAssociateExpense.buttonExitSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send payment reminder title':
                await this.modalsContainer.sendPaymentReminderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send payment reminder close button':
                await this.modalsContainer.sendPaymentReminderCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send payment reminder description':
                await this.modalsContainer.sendPaymentReminderDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send payment reminder panel members':
                await this.modalsContainer.sendPaymentReminderPanelMembers.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send payment reminder button':
                await (await this.modalsContainer.memberDetailRequestPaymentButton.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'edit information title':
                await this.modalsContainer.newMember.editInformationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit information close button':
                await this.modalsContainer.newMember.editInformationCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit information input name':
                await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit information input number':
                await this.modalsContainer.newMember.editInformationInputNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit information save button':
                await (await this.modalsContainer.newMember.buttonAddParticipant.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'edit information close link':
                await this.modalsContainer.newMember.editInformationCloseLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid title':
                await this.modalsContainer.markAsPaidModal.markAsPaidModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid close button':
                await this.modalsContainer.markAsPaidModal.markAsPaidModalCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid confirm button':
                await (await this.modalsContainer.markAsPaidModal.markAsPaidConfirmButton.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'mark as paid selected all':
                await this.modalsContainer.markAsPaidModal.markAsPaidSelectAllCheck.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid selected one':
                await this.waitForElementsExist(this.modalsContainer.markAsPaidModal.markAsPaidSelectOneCheck);
                await (await this.modalsContainer.markAsPaidModal.markAsPaidSelectOneCheck.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid modal confirm icon':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid modal confirm title':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid modal confirm info':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid modal confirm button':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mark as paid modal confirm link':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail mark as paid modal confirm icon':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail mark as paid modal confirm title':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail mark as paid modal confirm info':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail mark as paid modal confirm button':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail mark as paid modal confirm link':
                await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm modal warning icon':
                await this.modalsContainer.confirmModalMemberDetailWarningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm modal description':
                await this.modalsContainer.confirmModalMemberDetailDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm modal accept button':
                await this.modalsContainer.confirmModalMemberDetailAcceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm modal cancel link':
                await this.modalsContainer.confirmModalMemberDetailCancelLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'spending movement delete':
                await this.modalsContainer.deleteEntryModalSpendingMovementDelete.specifySelector({placeholder: '__SPENTMOVEMENTDELETE__', value: value}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button close delete expense modal':
                await this.modalsContainer.deleteEntryModalButtonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editpayers close':
                await this.modalsContainer.modalEditPayer.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editpayers heading':
                await this.modalsContainer.modalEditPayer.totalExpense.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editpayers text list payers':
                await this.modalsContainer.textListPayersStep4.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editpayers edit expense':
                await this.modalsContainer.modalEditPayer.buttonSave.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link help':
                await this.modalsContainer.onboardingModal.linkhelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link terms and conditions':
                await this.modalsContainer.onboardingModal.linkTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check terms and conditions':
                await this.modalsContainer.onboardingModal.checkTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button accept terms and conditions':
                await this.modalsContainer.onboardingModal.buttonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information expense amount':
                await this.modalsContainer.associateCashExpenseModal.inputAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information expense concept':
                await this.modalsContainer.associateCashExpenseModal.inputConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information expense continue button':
                await this.modalsContainer.associateCashExpenseModal.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information expense date':
                await this.modalsContainer.associateCashExpenseModal.inputDate.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async createGroup() {
        await this.buttonCreateGroup.waitForDisplayed({timeout: config.wait.M});
        await this.buttonCreateGroup.click();
    }

    async deleteNameGroupInput() {
        await this.modalsContainer.createGroupModal.inputClear.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.createGroupModal.inputClear.click();
    }

    async nameGroup(name) {
        await this.modalsContainer.createGroupModal.inputGroupName.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.createGroupModal.inputGroupName.scrollIntoView();
        await this.modalsContainer.createGroupModal.inputGroupName.setValue({value: name});

    }
    async newNameGroup() {
        await this.nameGroup('Prueba');
        await this.modalsContainer.createGroupModal.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.createGroupModal.buttonContinue.click();
    }

    async linkAddNewContact(access) {
        if(access==='crear grupo'){
            await this.modalsContainer.step2.linkAddNewParticipant.waitForDisplayed({timeout: config.wait.M});
            await this.modalsContainer.step2.linkAddNewParticipant.scrollIntoView();
            await this.modalsContainer.step2.linkAddNewParticipant.click();
        }else {
            await this.modalsContainer.buttonaddParticipe.waitForDisplayed({timeout: config.wait.M});
            await this.modalsContainer.buttonaddParticipe.click();

        }
    }

    async saveNameParticipan() {
        await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.buttonAddParticipant.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.buttonAddParticipant.waitForEnabled({timeout: config.wait.M});
        await this.modalsContainer.newMember.buttonAddParticipant.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.newMember.buttonAddParticipant.scrollIntoView();
        await this.modalsContainer.newMember.buttonAddParticipant.click();
    }

    async changeName(name = global.user.data.name) {
        await this.modalsContainer.newMember.editInformationTitle.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.editInformationInputName.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.newMember.editInformationInputName.scrollIntoView();
        await this.modalsContainer.newMember.editInformationInputName.setValue({value: name});
    }

    async changeNumber(number = global.user.data.number) {
        await this.modalsContainer.newMember.editInformationTitle.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.editInformationInputNumber.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.editInformationInputNumber.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.newMember.editInformationInputNumber.scrollIntoView();
        await this.modalsContainer.newMember.editInformationInputNumber.setValue({value: number});
    }

    async newContact() {
        await this.changeName('Diana');
        await this.changeNumber();
    }

    async continueParticipantSection() {
        await this.modalsContainer.step2.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.step2.buttonContinue.click();
    }

    async entersGroup(group) {
        await (await this.cardGroup.specifySelector({placeholder: '__GROUP__', value: group})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async viewMoreExpensesActions() {
        await (await this.detailGroup.btnActionExpenses.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewSettingsActions() {
        await (await this.detailGroup.btnActionSettings.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewMoreParticipantsActions() {
        await (await this.detailGroup.expensesGroupDetail.btnActionParticipants.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewMoreActionsMemberDetail() {
        await this.memberDetail.memberDetailOperativesRow.waitForDisplayed({timeout: config.wait.M});
        await this.waitForElementsExist(this.memberDetail.buttonEditAndExit);
        const actions = (await this.memberDetail.buttonEditAndExit.elements()).value;
        const action = actions[actions.length - 1];
        await action.waitForDisplayed({timeout: config.wait.M});
        await action.waitForAnimation({timeout: config.wait.S});
        await action.waitForClickable({timeout: config.wait.M});
        await action.click({useActions: true});
    }

    async openParticipantDetailByName(name) {
        const participant = await this.detailGroup.mainCreditor.specifySelector({placeholder: '__NAME__', value: name});
        await participant.waitForDisplayed({timeout: config.wait.M});
        await participant.waitForAnimation({timeout: config.wait.S});
        await participant.waitForClickable({timeout: config.wait.M});
        await participant.click({useActions: true});
        await this.memberDetail.memberDetailTitle.waitForDisplayed({timeout: config.wait.M});
        await this.memberDetail.memberDetailBackButton.waitForDisplayed({timeout: config.wait.M});
    }

    async selectOperativeExpensesSection(action) {
        switch(action){
            case 'add cash spend':
                await (await this.detailGroup.btnActionCash.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete expense or payment':
                await this.addCashExpenseToBeEliminated('10', 'Nuevo Gasto a Eliminar');
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.btnActionDeleteExpense.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'associate payment':
                await (await this.detailGroup.buttonAssociatePayment.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'more':
                await this.viewSettingsActions();
                break;
            case 'associate expense more button':
                await (await this.detailGroup.buttonCardActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'add cash spend more button':
                await (await this.detailGroup.btnActionCash.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'change name more button':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonEditActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'add participants more button':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonNewClientActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'add participants':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonNewClientActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete participant more button':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonRemoveMember.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete group more button':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonTrashActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete participant button direct':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonRemoveMember.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error('undefined action');
        }
    }

    async selectOperativeParticipantsSection(action) {
        switch(action.toLowerCase()) {
            case 'request payment':
                await (await this.detailGroup.buttonCodi.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'add participant':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonNewClientActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'more':
                await this.viewMoreParticipantsActions();
                break;
            case 'change name more button':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonEditActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete participant more button':
                await (await this.detailGroup.expensesGroupDetail.buttonRemoveParticipants.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete participant more button without expenses':
                await (await this.detailGroup.expensesGroupDetail.buttonRemoveParticipants.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'delete group more button':
                await this.viewSettingsActions();
                await (await this.settingsGroup.modalSettings.buttonTrashActionParticipant.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'main creditor':
                await this.openParticipantDetailByName(global.user.data.name);
                break;
            case 'first debtor':
                await this.openParticipantDetailByName(global.user.debtors.data[0].name);
                break;
            case 'second debtor':
                await this.openParticipantDetailByName(global.user.debtors.data[1].name);
                break;
            case 'third debtor':
                await this.openParticipantDetailByName(global.user.debtors.data[2].name);
                break;
            case 'fourth debtor':
                await this.openParticipantDetailByName(global.user.debtors.data[3].name);
                break;
            case 'main debtor':
                await this.openParticipantDetailByName(global.user.debtors.data[1].name);
                break;
            case 'first borrower':
                await this.openParticipantDetailByName('MARIA JESUS');
                break;
            default:
                throw new Error('undefined action');
        }
    }

    async selectActionParticipantDetail(entryPoint) {
        switch(entryPoint.toLowerCase()) {
            case 'edit information modal no debt':
                await this.waitForElementsExist(this.memberDetail.buttonAction);
                await (await (await this.memberDetail.buttonAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.S});
                await (await (await this.memberDetail.buttonAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
                await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit information modal owe money':
                await this.waitForElementsExist(this.memberDetail.buttonAction);
                await (await (await this.memberDetail.buttonAction.elements()).value[2].waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'mark as paid modal':
                await this.viewMoreActionsMemberDetail();
                await this.participantSelectAction('buttonRightActionParticipant');
                break;
            case 'edit information modal':{
                await this.viewMoreActionsMemberDetail();
                await this.waitForElementsExist(this.modalsContainer.buttonEditProfileActionParticipant);
                const editInformationModalAction = (await this.modalsContainer.buttonEditProfileActionParticipant.elements()).value[0];
                await editInformationModalAction.waitForDisplayed({timeout: config.wait.M});
                await editInformationModalAction.waitForAnimation({timeout: config.wait.M});
                await editInformationModalAction.waitForClickable({timeout: config.wait.M});
                await editInformationModalAction.click({useActions: true});
                await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
                break;
            }
            case 'edit information modal no more actions':
                await this.waitForElementsExist(this.memberDetail.buttonAction);
                await (await (await this.memberDetail.buttonAction.elements()).value[2].waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.S});
                await (await (await this.memberDetail.buttonAction.elements()).value[2].waitForDisplayed({timeout: config.wait.M})).click();
                await this.modalsContainer.newMember.editInformationInputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete participant modal':{
                await this.memberDetail.memberDetailOperativesRow.waitForDisplayed({timeout: config.wait.M});
                await this.waitForElementsExist(this.memberDetail.buttonExitGroup);
                const deleteParticipantModalActions = (await this.memberDetail.buttonExitGroup.elements()).value;
                const deleteParticipantModalAction = deleteParticipantModalActions[deleteParticipantModalActions.length - 1];
                await deleteParticipantModalAction.waitForDisplayed({timeout: config.wait.M});
                await deleteParticipantModalAction.waitForAnimation({timeout: config.wait.M});
                await deleteParticipantModalAction.waitForClickable({timeout: config.wait.M});
                await deleteParticipantModalAction.click({useActions: true});
                await this.modalsContainer.confirmModalMemberDetailAcceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            }
            case 'delete participant': {
                await this.memberDetail.memberDetailOperativesRow.waitForDisplayed({timeout: config.wait.M});
                await this.waitForElementsExist(this.memberDetail.buttonEditAndExit);
                const actions = (await this.memberDetail.buttonEditAndExit.elements()).value;
                const element = actions.length - 1;
                const deleteParticipantAction = actions[element];
                await deleteParticipantAction.waitForDisplayed({timeout: config.wait.M});
                await deleteParticipantAction.waitForAnimation({timeout: config.wait.M});
                await deleteParticipantAction.waitForClickable({timeout: config.wait.M});
                await deleteParticipantAction.click({useActions: true});
                break;
            }
            default:
                throw new Error('undefined action');
        }
    }

    async selectActionParticipantsModal(entryPoint) {
        switch(entryPoint.toLowerCase()) {
            case 'request payment':
                await this.participantSelectAction('buttonPaySheetDollarActionParticipant');
                break;
            case 'add participant':
                await this.participantSelectAction('buttonNewClientActionParticipant', 1);
                break;
            case 'change name':
                await this.participantSelectAction('buttonEditActionParticipant', 1);
                break;
            case 'delete participant':
                await this.participantSelectAction('buttonNoClientActionParticipant', 1);
                break;
            case 'delete group':
                await this.participantSelectAction('buttonTrashActionParticipant', 1);
                break;
            default:
                throw new Error('Undefined action');
        }
    }

    async accessPaymentStatus(value) {
        switch(value.toLowerCase()) {
            case 'a third party paid a third party':
                await this.waitForElementsExist(this.detailGroup.paymentStatusSelector);
                await (await (await this.detailGroup.paymentStatusSelector.elements()).value[2].waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'i paid a third party':
                await this.waitForElementsExist(this.detailGroup.paymentStatusSelector);
                await (await (await this.detailGroup.paymentStatusSelector.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'marked as paid':
            case 'a third party paid me':
                await this.waitForElementsExist(this.detailGroup.paymentStatusSelector);
                await (await (await this.detailGroup.paymentStatusSelector.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error('undefined action');
        }
    }

    async changeNameGroup(name) {
        await this.modalsContainer.groupNameModal.inputName.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.groupNameModal.inputName.setValue({value: name});
    }

    async saveNewNameGroup() {
        await this.modalsContainer.groupNameModal.buttonSave.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.groupNameModal.buttonSave.click();
    }

    async buttonResumeGroup() {
        await this.modalsContainer.step2.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.step2.buttonContinue.click();
        await this.modalsContainer.buttonCreateResume.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonCreateResume.click();
    }

    async invitationPending() {
        await this.modalsContainer.invitationGroupButtonNotNow.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.invitationGroupButtonNotNow.click();
    }

    async selectPersonDebt() {
        await this.waitForElementsExist(this.modalsContainer.personRadioButton);
        await (await (await this.modalsContainer.personRadioButton.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.modalsContainer.requestPaymentCloseButton
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async entersParticipantsDetailGroup() {
        await this.detailGroup.expensesGroupDetail.buttonParticipants.waitForDisplayed({timeout: config.wait.M});
        await this.detailGroup.expensesGroupDetail.buttonParticipants.click();
        await this.detailGroup.expensesGroupDetail.buttonRowContainer.waitForDisplayed({timeout: config.wait.M});
    }

    async markParticipant(mark) {
        switch(mark.toLowerCase()) {
            case 'all':
                await this.waitForElementsExist(this.memberDetail.buttonAction);
                await (await (await this.memberDetail.buttonAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
                await this.markAllParticipants();
                break;
            case 'one':
                await this.waitForElementsExist(this.memberDetail.buttonAction);
                await (await (await this.memberDetail.buttonAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
                await this.markOneParticipants();
                break;
            case 'only one':
                await this.waitForElementsExist(this.memberDetail.buttonAction);
                await (await (await this.memberDetail.buttonAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
                await this.markOneParticipants();
                break;
            default:
                throw new Error('undefined action');
        }
    }

    async markAllParticipants() {
        await this.modalsContainer.markAsPaidModal.markAsPaidSelectAllCheck.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.markAsPaidModal.markAsPaidSelectAllCheck.click();
        await this.modalsContainer.markAsPaidModal.markAsPaidConfirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.markAsPaidModal.markAsPaidConfirmButton.click();
    }

    async markOneParticipants() {
        await this.waitForElementsExist(this.modalsContainer.markAsPaidModal.markAsPaidSelectOneCheck);
        await (await (await this.modalsContainer.markAsPaidModal.markAsPaidSelectOneCheck.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.modalsContainer.markAsPaidModal.markAsPaidConfirmButton
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async requestPendingPayment() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async sendAReminder() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[2]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await this.waitForElementsExist(this.modalsContainer.personRadioButtonMember);
        await (await (await this.modalsContainer.personRadioButtonMember.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async editPersonalInformation() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[2].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async exitTheGroup() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[3].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async deleteParticipant() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[3].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async deleteParticipantIndebted() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[2].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async expenseAction(action) {
        await this.selectTransaction();
        switch(action.toLowerCase()) {
            case 'edits':
                await this.selectEditExpense();
                await this.editExpense();
                await this.finishEditExpense();
                break;
            case 'cancels':
                await this.selectDeleteExpense();
                await this.cancelDeleteExpense();
                break;
            case 'deletes':
                await this.selectDeleteExpense();
                await this.finishDeleteExpense();
                break;
            default:
                throw new Error('undefined action');
        }
    }

    async paymentAction(action) {
        await this.selectTransaction();
        switch(action.toLowerCase()) {
            case 'cancels':
                await this.selectDeleteExpense();
                await this.cancelDeleteExpense();
                break;
            case 'deletes':
                await this.selectDeleteExpense();
                await this.finishDeleteExpense();
                break;
            default:
                throw new Error('undefined action');
        }
    }

    async selectTransaction() {
        await this.waitForElementsExist(this.detailGroup.paymentStatusSelector);
        await (await (await this.detailGroup.paymentStatusSelector.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectEditExpense() {
        await this.waitForElementsExist(this.expensesDetail.expensesDetailButtonAction);
        await (await (await this.expensesDetail.expensesDetailButtonAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectDeleteExpense() {
        await this.waitForElementsExist(this.expensesDetail.expensesDetailButtonAction);
        await (await (await this.expensesDetail.expensesDetailButtonAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async cancelDeleteExpense() {
        await this.modalsContainer.expensesDetailCancelButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.expensesDetailCancelButton.click();
    }

    async editExpense() {
        await this.modalsContainer.inputExpenseInformationStep3.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.inputExpenseInformationStep3.setValue({value: '100'});
        await this.modalsContainer.continueExpenseInformationStep3.click();
    }

    async finishEditExpense() {
        await this.modalsContainer.continueExpenseInformationStep4.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.continueExpenseInformationStep4.click();
        await this.modalsContainer.editeExpenseDetail.expensesDetailAssociateButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.editeExpenseDetail.expensesDetailAssociateButton.click();
    }

    async finishDeleteExpense() {
        await this.modalsContainer.expensesDetailContinueDelete.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.expensesDetailContinueDelete.click();
    }

    async saveContact() {
        await this.modalsContainer.newMember.buttonAddParticipant.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.buttonAddParticipant.click();
        await this.modalsContainer.newMember.buttonAddParticipant.waitForDisplayed({timeout: config.wait.M});
    }

    async accessModalGroupNameConfirm() {
        await this.modalsContainer.groupNameModal.buttonClose.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.groupNameModal.buttonClose.click();
    }

    async exitAddParticipe() {
        await this.modalsContainer.newMember.editInformationCloseLink.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.newMember.editInformationCloseLink.click();
    }

    async confirmNewMember({isConfirmed = true} = {}) {
        const button = isConfirmed ?  this.modalsContainer.buttonAcceptNewMemberConfirm : this.modalsContainer.buttonCancelNewMemberConfirm;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});
    }

    async confirModalConfirmRemoval({isConfirmed = true} = {}) {
        const button = isConfirmed ?  this.modalsContainer.modalConfirmRemovalButtonAccept : this.modalsContainer.modalConfirmRemovalButtonExit;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});
    }

    async confirmModalMemberDetail({isConfirmed = true} = {}) {
        const button = isConfirmed ?  this.modalsContainer.confirmModalMemberDetailAcceptButton : this.modalsContainer.confirmModalMemberDetailCancelLink;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});
    }

    async confirmGroupNameModalDialog({isConfirmed = true} = {}) {
        const button = isConfirmed ?  this.modalsContainer.groupNameModalConfirmButtonAccept : this.modalsContainer.groupNameModalConfirmButtonCancel;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});
    }

    async confirmModalConfirm({isConfirmed = true} = {}) {
        const button = isConfirmed ?  this.modalsContainer.deleteGroupModalAcceptButton : this.modalsContainer.deleteGroupModalCancelLink;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});
    }

    async confirmHelpModal() {
        await this.memberDetail.buttonHelp.waitForDisplayed({timeout: config.wait.M});
        await this.memberDetail.buttonHelp.waitForAnimation({timeout: config.wait.S});
        await this.memberDetail.buttonHelp.waitForClickable({timeout: config.wait.M});
        await this.memberDetail.buttonHelp.click({useActions: true});
        await this.modalsContainer.pendingPaymentsButtonAccept.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.pendingPaymentsButtonAccept.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.pendingPaymentsButtonAccept.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.pendingPaymentsButtonAccept.click({useActions: true});
        await this.modalsContainer.pendingPaymentsButtonAccept.waitForDisplayed({timeout: config.wait.M, reverse: true});
    }

    async modalDeleteContinueExpenseDetail() {
        await this.modalsContainer.deleteEntryModalOptionsButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.deleteEntryModalOptionsButtonContinue.click();
    }

    async modalDeleteCancelExpenseDetail() {
        await this.modalsContainer.deleteEntryModalOptionsButtonCancel.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.deleteEntryModalOptionsButtonCancel.click();
    }

    async deleteEntryModalExpense(expense) {
        const expensebuttondelete = await this.modalsContainer.deleteEntryModalSpendingMovementDelete.specifySelector({placeholder: '__SPENTMOVEMENTDELETE__', value: expense});
        await expensebuttondelete.scrollIntoView();
        await expensebuttondelete.waitForDisplayed({timeout: config.wait.M});
        await expensebuttondelete.click();
    }

    async deleteMovementDetailGroupModalBtnContinue() {
        await this.deleteEntryModalExpense('Nuevo Gasto a Eliminar');
        await this.modalsContainer.deleteEntryModalOptionsButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.deleteEntryModalOptionsButtonContinue.click();
    }

    async deleteMovementDetailGroupModalLinkCancel() {
        await this.deleteEntryModalExpense('Nuevo Gasto a Cancelar');
        await this.modalsContainer.deleteEntryModalOptionsButtonCancel.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.deleteEntryModalOptionsButtonCancel.click();
    }

    async successExit() {
        await this.modalsContainer.associateCashExpenseModal.buttonContinueStep4.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.buttonContinueStep4.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.associateCashExpenseModal.buttonContinueStep4.click();
        await this.modalsContainer.associateCashExpenseModal.buttonAssociate.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.buttonAssociate.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.associateCashExpenseModal.buttonAssociate.click();
        await this.modalsContainer.receiptAssociateExpense.buttonExitSuccess.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.receiptAssociateExpense.buttonExitSuccess.click();
    }

    async closeSuccess() {
        await this.buttonCreateGroupExit.waitForDisplayed({timeout: config.wait.M});
        await this.buttonCreateGroupExit.click();
    }

    async addCashExpense() {
        await this.addAmount(10);
        await this.addConcept('Nuevo Gasto');
        await this.buttonContinueInformAmountAndConcept();
        await this.successExit();
    }

    async addAmountAndConceptFromAddInCash() {
        await this.addAmount(10);
        await this.addConcept('Nuevo Gasto');
    }

    async showMoreExpenses() {
        await this.btnSeeMoreAndSeeLess.waitForDisplayed({timeout: config.wait.M});
        await this.btnSeeMoreAndSeeLess.click();
    }

    async modifyAmountExpenseDetail(value) {
        await this.modalsContainer.editeExpenseDetail.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.editeExpenseDetail.inputAmount.setValue({value: value});
    }

    async modifyConceptExpenseDetail(value) {
        await this.modalsContainer.editeExpenseDetail.inputConcept.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.editeExpenseDetail.inputConcept.setValue({value: value});
    }

    async modifyExpense() {
        await this.modalsContainer.editeExpenseDetail.buttonContinue.click();
        await this.modalsContainer.editeExpenseDetail.buttonContinueStep4.click();
        await this.modalsContainer.editeExpenseDetail.expensesDetailAssociateButton.click();
        await this.modalsContainer.editExpenseButtonExitSuccess.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.editExpenseButtonExitSuccess.click();
    }

    async editAmountExpenseDetail() {
        await this.addCashExpenseToBeEliminated('10', 'Nuevo importe');
        await this.detailExpense('Nuevo importe');
        await this.waitForElementsExist(this.expensesDetail.opctions);
        await (await (await this.expensesDetail.opctions.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
        await this.modifyAmountExpenseDetail(100);
        await this.modifyExpense();
    }

    async editConceptExpenseDetail() {
        await this.addCashExpenseToBeEliminated('10', 'Nuevo concepto');
        await this.detailExpense('Nuevo concepto');
        await this.waitForElementsExist(this.expensesDetail.opctions);
        await (await (await this.expensesDetail.opctions.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
        await this.modifyConceptExpenseDetail('Nuevo concepto modificado');
        await this.modifyExpense();
    }

    async modalDeleteBtnContinueExpenseDetail() {
        await this.addCashExpenseToBeEliminated('10', 'Nuevo basico');
        await this.detailExpense('Nuevo basico');
        await this.waitForElementsExist(this.expensesDetail.opctions);
        await (await (await this.expensesDetail.opctions.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
        await this.modalDeleteContinueExpenseDetail();
    }

    async modalDeleteBtnCancelExpenseDetail() {
        await this.addCashExpenseToBeEliminated('10', 'Nuevo basico 2');
        await this.detailExpense('Nuevo basico 2');
        await this.waitForElementsExist(this.expensesDetail.opctions);
        await (await (await this.expensesDetail.opctions.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
        await this.modalDeleteCancelExpenseDetail();
    }

    async addAmount(amount) {
        await this.modalsContainer.associateCashExpenseModal.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.inputAmount.setValue({value: amount});
    }

    async addConcept(concept) {
        await this.modalsContainer.associateCashExpenseModal.inputConcept.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.inputConcept.setValue({value: concept});
    }

    async buttonContinueInformAmountAndConcept() {
        await this.modalsContainer.associateCashExpenseModal.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.buttonContinue.click();
    }

    async btnEditPayers() {
        await this.addAmount(10);
        await this.addConcept('Familiar');
        await this.buttonContinueInformAmountAndConcept();
        await this.modalsContainer.associateCashExpenseModal.editPayerStep4.click();
    }

    async changeExpenseInformation() {
        await this.addAmount(10);
        await this.addConcept('Nuevo apartado');
        await this.buttonContinueInformAmountAndConcept();
        await this.modalsContainer.associateCashExpenseModal.buttonContinueStep4.click();
        await this.waitForElementsExist(this.modalsContainer.associateCashExpenseModal.editExpenseInformation);
        await (await this.modalsContainer.associateCashExpenseModal.editExpenseInformation.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.modalsContainer.associateCashExpenseModal.editExpenseInformation.elements()).value[0].click();
        await this.editConfirmModalAction();
    }

    async detailExpense(expense) {
        const expensebutton = await this.detailGroup.spendingMovement.specifySelector({placeholder: '__SPENTMOVEMENT__', value: expense});
        await expensebutton.scrollIntoView();
        await expensebutton.waitForDisplayed({timeout: config.wait.M});
        await expensebutton.click();
    }

    async addAmountAndConcept(amount, concept) {
        await this.modalsContainer.associateCashExpenseModal.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.inputAmount.setValue({value: amount});
        await this.modalsContainer.associateCashExpenseModal.inputConcept.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateCashExpenseModal.inputConcept.setValue({value: concept});
        await this.modalsContainer.associateCashExpenseModal.buttonContinue.click();
    }

    async otherDebts() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
        await this.markOneParticipants();
    }

    async allDebts() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
        await this.markAllParticipants();
    }

    async owesOneDebt() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
        await this.markOneParticipants();
    }

    async owesAllDebts() {
        await this.waitForElementsExist(this.memberDetail.buttonAction);
        await (await (await this.memberDetail.buttonAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
        await this.markAllParticipants();
    }

    async exitMarkAsPaidReceiptModal() {
        await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptExitButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.markAsPaidReceiptModal.markAsPaidReceiptExitButton.click();
        await this.exitParticipantDetail();
        await this.accessExpensesSection();
    }

    async exitParticipantDetail() {
        await this.memberDetail.memberDetailBackButton.waitForDisplayed({timeout: config.wait.M});
        await this.memberDetail.memberDetailBackButton.click();
    }

    async accessExpensesSection() {
        await this.detailGroup.buttonExpenses.waitForDisplayed({timeout: config.wait.M});
        await this.detailGroup.buttonExpenses.click();
    }

    async accesHelpScreen() {
        await this.modalsContainer.onboardingModal.linkhelp.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.onboardingModal.linkhelp.click();
    }

    async exitHelpScreen() {
        await this.modalsContainer.buttonExpensesInfoHelpModal.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonExpensesInfoHelpModal.click();
    }

    async processOfTermAndConditions() {
        await this.modalsContainer.onboardingModal.linkTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.onboardingModal.linkTermsAndConditions.click();
        await this.modalsContainer.buttonExpensesInfoHelpModal.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonExpensesInfoHelpModal.click();
        await this.modalsContainer.onboardingModal.checkTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.onboardingModal.checkTermsAndConditions.click();
    }

    async acceptTermAndConditons() {
        await this.modalsContainer.onboardingModal.buttonAccept.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.onboardingModal.buttonAccept.click();
    }

    async selectparticipan(value) {
        await this.modalsContainer.deleteParticipantModal.deleteParticipanCheck.waitForDisplayed({timeout: config.wait.M});
        if(value === 'all'){
            await this.modalsContainer.deleteParticipantModal.deleteParticipanCheckAll.click();
        }else {
            const number = Math.round(value)+1;
            for(let i=1; i < number; i++){
                await (await this.modalsContainer.deleteParticipantModal.deleteParticipanCheck.elements()).value[i].waitForDisplayed({timeout: config.wait.M});
                await (await this.modalsContainer.deleteParticipantModal.deleteParticipanCheck.elements()).value[i].click();
            }
        }
    }

    async deleteParticipan() {
        await this.modalsContainer.deleteParticipantModal.deleteParticipantDeleteButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.deleteParticipantModal.deleteParticipantDeleteButton.click();
    }

    async exitDeleteParticipansScreen() {
        await this.modalsContainer.deleteParticipantModal.deleteParticipantCloseLink.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.deleteParticipantModal.deleteParticipantCloseLink.click();
    }

    async addCashExpenseToBeEliminated(amount, concept) {
        await this.addAmount(amount);
        await this.addConcept(concept);
        await this.buttonContinueInformAmountAndConcept();
        await this.successExit();
    }

    async processFromAccounts() {
        await this.modalsContainer.associateExpensesModal.accounts.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.accounts.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.product.account }).click();
        await this.modalsContainer.associateExpensesModal.movements.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.movements.click();
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.click();
    }

    async processFromCards() {
        await this.modalsContainer.associateExpensesModal.cards.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.cards.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.product.card }).click();
        await this.modalsContainer.associateExpensesModal.movements.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.movements.click();
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.click();
    }

    async continueConfiguration() {
        await this.modalsContainer.associateExpensesModal.buttonContinueConfiguration.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinueConfiguration.click();
    }

    async associateAnExpenseWithSuccess() {
        await this.processFromCards();
        await this.continueConfiguration();
        await this.modalsContainer.associateExpensesModal.buttonAssociate.click();
    }

    async selectACardToAssociateWithAnExpense() {
        await this.modalsContainer.associateExpensesModal.cards.click();
        await this.modalsContainer.associateExpensesModal.showAll.waitForClickable();
        await this.modalsContainer.associateExpensesModal.showAll.click();
        await this.modalsContainer.productSelected.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.productSelected.click();
    }

    async selectACardToAssociateWithAnExpenseTwo() {
        await this.modalsContainer.associateExpensesModal.cards.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.product.card }).click();
    }

    async selectAnAccountToAssociateWithAnExpense() {
        await this.modalsContainer.associateExpensesModal.accounts.click();
        await this.modalsContainer.associateExpensesModal.showAllAccounts.waitForClickable();
        await this.modalsContainer.associateExpensesModal.showAllAccounts.click();
        await this.modalsContainer.productSelected.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.productSelected.click();
    }

    async selectAnAccountToAssociateWithAnExpenseTwo() {
        await this.modalsContainer.associateExpensesModal.accounts.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.product.account }).waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.product.account }).click();
    }

    async selectAProductToAssociateWithAnExpense() {
        await this.modalsContainer.associateExpensesModal.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinue.click();
    }

    async accountWithoutMovements() {
        await this.modalsContainer.associateExpensesModal.accounts.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.products.account[1] }).click();
    }

    async accountShowAllMovements() {
        await this.modalsContainer.associateExpensesModal.accounts.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.products.account[0] }).click();
        await this.modalsContainer.associateExpensesModal.showAllMovements.click();
    }

    async modifyConceptAssociateExpense(value) {
        await this.modalsContainer.associateExpensesModal.inputConcept.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.inputConcept.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.associateExpensesModal.inputConcept.setValue({value: value});
    }

    async buttonAddParticipeDetail() {
        await this.modalsContainer.buttonaddParticipe.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonaddParticipe.click();
    }

    async editConceptAssociateExpense() {
        await this.modalsContainer.associateExpensesModal.cards.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.cards.click();
        await this.modalsContainer.associateExpensesModal.card.specifySelector({placeholder: '__PRODUCT__', value: global.user.product.card }).click();
        await this.modalsContainer.associateExpensesModal.movements.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.movements.click();
        await this.modifyConceptAssociateExpense('Este concepto es nuevo');
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.click();
    }

    async expenseSettingsUnchanged() {
        await this.processFromAccounts();
        await this.modalsContainer.associateExpensesModal.editPayer.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.editPayer.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.associateExpensesModal.editPayer.click({useActions: true});
    }

    async customExpenseSettings() {
        await this.processFromAccounts();
        await this.modalsContainer.associateExpensesModal.editPayer.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.editPayer.waitForAnimation({timeout: config.wait.S});
        await this.modalsContainer.associateExpensesModal.editPayer.click();
        await this.waitForElementsExist(this.modalsContainer.modalEditPayer.editCheckBox);
        await (await this.modalsContainer.modalEditPayer.editCheckBox.elements()).value[2].click({useActions: false, scrollOptions: {block: 'start'}});
        await (await this.modalsContainer.modalEditPayer.editCheckBox.elements()).value[3].click({useActions: false, scrollOptions: {block: 'start'}});
        await this.modalsContainer.modalEditPayer.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.modalEditPayer.inputAmount.setValue({value: '0'});
        await this.modalsContainer.modalEditPayer.buttonSave.click();
    }

    async divisionExpensesEquallyWithoutChanges() {
        await this.processFromAccounts();
        await this.modalsContainer.associateExpensesModal.divisionExpense.click();
    }

    async splittingExpensesChangingAmountUser() {
        await this.processFromCards();
        await this.modalsContainer.associateExpensesModal.divisionExpense.click();
        await this.modalsContainer.modalEditBeneficiaries.editCheckBox.specifySelector({placeholder: '__N__', value: 6}).waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.modalEditBeneficiaries.editCheckBox.specifySelector({placeholder: '__N__', value: 6}).click();
        await this.modalsContainer.modalEditBeneficiaries.inputAmountDivision.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.modalEditBeneficiaries.inputAmountDivision.setValue({value: '100'});
        await this.modalsContainer.modalEditBeneficiaries.buttonSave.click();
    }

    async customExpenseDivision() {
        await this.processFromCards();
        await this.modalsContainer.associateExpensesModal.divisionExpense.click();
        await this.modalsContainer.modalEditBeneficiaries.editCheckBox.specifySelector({placeholder: '__N__', value: 4}).waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.modalEditBeneficiaries.editCheckBox.specifySelector({placeholder: '__N__', value: 4}).click();
        await this.modalsContainer.modalEditBeneficiaries.restoreParts.click();
    }

    async editingExpenseInformation() {
        await this.processFromCards();
        await this.continueConfiguration();
        await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseInformation);
        await (await (await this.modalsContainer.associateExpensesModal.editExpenseInformation.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await this.editConfirmModalAction();
        await this.modalsContainer.associateExpensesModal.inputExpenseInformation.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.inputExpenseInformation.click();
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.click();
        await this.modalsContainer.continueExpenseInformationStep4.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.continueExpenseInformationStep4.click();
    }

    async editingCustomExpenseInformation() {
        await this.processFromAccounts();
        await this.continueConfiguration();
        await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseConfiguration);
        await (await (await this.modalsContainer.associateExpensesModal.editExpenseConfiguration.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await this.modalsContainer.associateExpensesModal.editPayer.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.editPayer.click();
    }

    async markAsPaid() {
        await this.modalsContainer.markAsPaidModalConfirm.markAsPaidModalConfirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.markAsPaidModalConfirm.markAsPaidModalConfirmButton.click();
    }

    async atAnotherTime() {
        await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmLink.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.detailMarkAsPaidModalConfirm.detailMarkAsPaidModalConfirmLink.click();
    }

    async selectPaymentOption(entryPoint) {
        switch(entryPoint.toLowerCase()) {
            case 'mark as paid':
                await this.markAsPaid();
                break;
            case 'at another time':
                await this.atAnotherTime();
                break;
            default:
                throw new Error(`The action "${entryPoint}" is not defined.`);
        }
    }

    async closeMarkAsPaidModal() {
        await this.modalsContainer.requestPaymentModal.requestPaymentModalCloseButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.requestPaymentModal.requestPaymentModalCloseButton.click();
    }

    async payOneParticipant() {
        await this.waitForElementsExist(this.modalsContainer.requestPaymentModal.requestPaymentModalMarkAsPaidCheck);
        await (await (await this.modalsContainer.requestPaymentModal.requestPaymentModalMarkAsPaidCheck.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.modalsContainer.requestPaymentModal.requestPaymentModalConfirmButton
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async payOneParticipantDetail() {
        await this.waitForElementsExist(this.modalsContainer.requestPaymentSelectOneCheckPaymentsModal);
        await (await (await this.modalsContainer.requestPaymentSelectOneCheckPaymentsModal.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.modalsContainer.requestPaymentButton
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async changeExpenseInformationModal() {
        await this.processFromAccounts();
        await this.continueConfiguration();
        await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseInformation);
        await (await (await this.modalsContainer.associateExpensesModal.editExpenseInformation.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await this.editConfirmModalAction();
        await this.modalsContainer.associateExpensesModal.inputExpenseInformation.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.inputExpenseInformation.click();
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.associateExpensesModal.buttonContinueInformation.click();
        await this.modalsContainer.continueExpenseInformationStep4.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.continueExpenseInformationStep4.click();
    }

    async changeExpenseConfigurationModal() {
        await this.processFromAccounts();
        await this.continueConfiguration();
        await this.waitForElementsExist(this.modalsContainer.associateExpensesModal.editExpenseConfiguration);
        await (await (await this.modalsContainer.associateExpensesModal.editExpenseConfiguration.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async changeExpenseInformationFromExpenseSettings() {
        await this.addAmount(10);
        await this.addConcept('Nuevo apartado');
        await this.buttonContinueInformAmountAndConcept();
        await this.modalsContainer.associateCashExpenseModal.buttonContinueStep4.click();
        await this.waitForElementsExist(this.modalsContainer.associateCashExpenseModal.editExpenseInformation);
        await (await (await this.modalsContainer.associateCashExpenseModal.editExpenseInformation.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
        await this.editConfirmModalAction();
    }

    async editInformationParticipant() {
        await this.waitForElementsExist(this.memberDetail.buttonEdit);
        await (await (await this.memberDetail.buttonEdit.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async limitexceeded() {
        await this.modalsContainer.addMemberModal.addParticipantAddNewButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.addMemberModal.addParticipantAddNewButton.click();
        await this.newContact();
    }

    async grouplimitexceeded() {
        await this.modalsContainer.createGroupModal.buttonCreateGroup.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.createGroupModal.buttonCreateGroup.click();
    }

    async navigateToAssociateInCash() {
        await this.modalsContainer.buttonToAddExpenseInCash.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonToAddExpenseInCash.click();
    }

    async viewMoreMembersOperations() {
        await this.waitForElementsExist(this.memberDetail.buttonEdit);
        await (await (await this.memberDetail.buttonEdit.elements()).value[3].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectOptionsDebts(value) {
        switch(value.toLowerCase()) {
            case 'all':
                await this.allDebts();
                break;
            case 'another':
                await this.otherDebts();
                break;
            default:
                throw new Error(`Not recognized option "${value}"`);
        }
    }

    async selectOptionsPartcipants(value) {
        switch(value.toLowerCase()) {
            case 'a participant':
                await this.owesOneDebt();
                break;
            case 'all participants':
                await this.owesAllDebts();
                break;
            default:
                throw new Error(`Not recognized option "${value}"`);
        }
    }

    async selectOptionsModal(value) {
        switch(value.toLowerCase()) {
            case 'deletes a member':
                await this.deleteParticipantIndebted();
                break;
            case 'exits the group':
                await this.exitTheGroup();
                break;
            default:
                throw new Error(`Not recognized option "${value}"`);
        }
    }

    async selectOptionDetail(action, section) {
        switch(section.toLowerCase()) {
            case 'expense':
                await this.expenseAction(action);
                break;
            case 'payment':
                await this.paymentAction(action);
                break;
            default:
                throw new Error(`Not recognized option "${section}"`);
        }
    }

    async participantSelectAction(icon, tab = 0) {
        await this.waitForElementsExist(this.modalsContainer[icon]);
        await (await (await this.modalsContainer[icon].elements()).value[tab].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async participantSelectActionSettings(id, tab = 0) {
        const selector = this.settingsGroup.modalSettings[id] ?? this.modalsContainer[id];
        await this.waitForElementsExist(selector);
        await (await (await selector.elements()).value[tab].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async editConfirmModalAction() {
        await this.modalsContainer.editButtonConfirmModal.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.editButtonConfirmModal.click();
    }
}

export default new ExpensesGroup();
