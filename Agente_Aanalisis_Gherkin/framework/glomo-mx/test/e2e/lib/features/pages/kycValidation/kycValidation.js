import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class KycValidation extends AbstractGlomoPage{
    constructor(){
        const helpModal = '[data-tag-name="bbva-help-modal"][visible]';
        const multistep = `${helpModal} [data-tag-name="bbva-expandable-multistep"]`;
        const selects = `${multistep} [data-tag-name="bbva-form-select"]`;
        const buttonGroup = '[data-tag-name="bbva-button-group"]';
        const optionSelect = '[data-tag-name="bbva-form-option"]';
        const formAmount = '[data-tag-name="bbva-form-amount"] input';
        const textArea = '[data-tag-name="bbva-form-textarea"] textarea';
        const notification = '.message [data-tag-name="bbva-notification-help"]';
        super({
            root: '#cells-template-kycValidationMx[state="active"]',
            elements:{
                helpModalScreen: {
                    properties: {
                        root: `${helpModal}#welcomeModal`
                    },
                    header: '#helpModalHeader header',
                    titleModal: ' .header',
                    labelQuestionnaire: ' bbva-type-text[data-tag-name="bbva-type-text"]',
                    labelPrivacyNotice: ' div.privacity-container bbva-badge-icon[data-tag-name="bbva-badge-icon"]',
                    buttonContinue: '[data-tag-name="bbva-button-default"]',
                },
                branchModal: {
                    properties: {
                        root: `[data-tag-name="kyc-branch-full-modal"] ${helpModal}`
                    },
                    goBranchHeader: '#helpModalHeader header',
                    goBranchTitle: ' [data-tag-name="bbva-type-text"]#branchTitle',
                    goBranchIne: ' [data-tag-name="bbva-list-bullet"]#optionIne',
                    goBranchAddress: ' [data-tag-name="bbva-list-bullet"]#optionAddress',
                    goBranchButtonExit: ' [data-tag-name="bbva-button-default"]',
                },
                successScreen: {
                    properties: {
                        root: `${helpModal}#success`
                    },
                    successHeader: '#helpModalHeader header',
                    successTitle: '[data-tag-name="bbva-type-text"]#successInformation',
                    successReferenceNumber: '[data-tag-name="bbva-type-text"]#operationNumber',
                    successSignature: '[data-tag-name="bbva-type-text"][text="bbva-kyc-label-6"]',
                    successTextInformation: '[data-tag-name="bbva-header-category"]',
                    successLabelCreditOtherBanks:'[data-tag-name="list-simple"] [text="bbva-kyc-question-5"] + [text="bbva-kyc-answer-yes"]',
                    successLabelReasonTransfers:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-operations-reason"]',
                    successLabelBuySellDollars:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-operations-3"]',
                    successLabelClabe:'[data-tag-name="list-simple"] [text="bbva-kyc-label-5"]',
                    successLabelAmount:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-operations-amount"]',
                    successLabelBbvaOtherBanks:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-relationship-option-2"]',

                },
                radioOperations: {
                    properties: {
                        root: `${buttonGroup}`
                    },
                    ownAccountRadio: '[name="radio_0"][value="bbva-kyc-answer-no"]',
                    publicOfficeRadio: '[name="radio_2"][value="bbva-kyc-answer-yes"]',
                    majorMonthlyOperationsRadio: '[name="radio_2"][value="bbva-kyc-answer-yes"]',
                    creditsInOtherBanksRadio: '[name="radio_4"][value="bbva-kyc-answer-yes"]',
                    highTransactions: '[name="radio_8"][value="bbva-kyc-answer-yes"]',
                },
                questionsSelectors: {
                    properties: {
                        root: `${multistep}`
                    },
                    selectOriginMoney: '[data-tag-name="bbva-form-select"][name="formSelect0"]',
                    optionsOriginMoney: `[data-tag-name="bbva-form-select"][name="formSelect0"] ${optionSelect}`,
                    selectAccountUse: '[data-tag-name="bbva-form-select"][name="formSelect1"]',
                    optionsAccountUse: `[data-tag-name="bbva-form-select"][name="formSelect1"] ${optionSelect}`,
                    selectState: '[data-tag-name="bbva-form-select"][name="formSelect2"]',
                    optionsState: `[data-tag-name="bbva-form-select"][name="formSelect2"] ${optionSelect}`,
                },
                answerSelector: {
                    properties: {
                        root: `${selects}`
                    },
                    optionsBankingRelationship: `${optionSelect}[value="bbva-kyc-label-bank-relationship-option-1"]`,
                    optionsBankingRelationship2: `${optionSelect}[value="bbva-kyc-label-bank-relationship-option-2"]`,
                    optionDeposits: `${optionSelect}[value="bbva-kyc-label-bank-operations-deposits-option-2"]`,
                    optionOperations: `${optionSelect}[value="bbva-kyc-label-bank-operations-transfers-option-1"]`,
                    optionDollarOperations: `${optionSelect}[value="bbva-kyc-label-bank-operations-buy-dolars-option-1"]`,
                    optionDollarOperations2: `${optionSelect}[value="bbva-kyc-label-bank-operations-buy-dolars-option-2"]`,
                    optionDollarOperations3: `${optionSelect}[value="bbva-kyc-label-bank-operations-buy-dolars-option-3"]`,
                    optionBuySellDollars: `${optionSelect}[value="bbva-kyc-label-bank-operations-dolars-option-1"]`,
                },
                personalInformation: {
                    properties: {
                        root: '.info-personal-about-your-account'
                    },
                    selectMarital: '[data-tag-name="bbva-form-select"][name="option0"]',
                    optionMarital: `[data-tag-name="bbva-form-select"][name="option0"] ${optionSelect}`,
                    inputOccupation: '.form-input #formJobList',
                    economicActivity: '[data-tag-name="bbva-form-select"][name="option2"]',
                    optionEconomicActivity: `[data-tag-name="bbva-form-select"][name="option2"] ${optionSelect}`,

                },
                modalJobList: {
                    properties: {
                        root: '[data-tag-name="kyc-job-list-modal"] [data-tag-name="bbva-help-modal"][visible]'
                    },
                    formTextOccupation: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-text"] input',
                    optionOccupation: '[data-tag-name="bbva-form-input"] + div [data-tag-name="bbva-button-default"]',
                },
                relationship: {
                    properties: {
                        root: '.container-bank-relationship'
                    },
                    selectBankingRelationship: '[data-tag-name="bbva-form-select"]#selectRelationship',
                    keyCount: '[name="relationship1"] [data-tag-name="bbva-form-number"] input',
                    eSignature: '[name="relationship2"] [data-tag-name="bbva-form-text"] input',
                },
                headerQuestionnaire: '[data-tag-name="kyc-multistep-page"] #helpModalHeader header',
                btnCloseQuestionnaireForm: '[data-tag-name="kyc-multistep-page"] #helpModalHeader #btn-close',
                btnCloseQuestionnaire: '#welcomeModal #helpModalHeader #btn-close',
                linkPrivacyNotice: '#welcomeModal .privacity-container [data-tag-name="bbva-button-default"]',
                buttonRetry: '#errorModal .modal-main .modal-footer .slot-footer [data-tag-name="bbva-button-default"]',
                publicOfficeQuestion: '.questions-container #questionHelpModal_0',
                monthlyOperationsQuestion: '.questions-container #questionHelpModal_1',
                titleModalQuestionExit: '#helpModalHeader[text="bbva-kyc-validation-help-people-modal-title"] #btn-close',
                selectDeposits: '#containerBank0 [data-tag-name="bbva-form-select"]',
                selectOperations: '#containerBank1 [data-tag-name="bbva-form-select"]',
                selectDollarOperations: '#containerBank2 [data-tag-name="bbva-form-select"]',
                selectBuySellDollars: '#containerBank3 [data-tag-name="bbva-form-select"]',
                monthlyAmountDeposits: `#containerBank0 ${formAmount}`,
                monthlyAmountTextDeposits: `#containerBank0 ${textArea}`,
                monthlyAmountOperations: `#containerBank1 ${formAmount}`,
                monthlyAmountTextOperations: `#containerBank1 ${textArea}`,
                monthlyAmountBuySellDollars: `#containerBank3 ${formAmount}`,
                monthlyAmountTextBuySellDollars: `#containerBank3 ${textArea}`,
                buttonForm: '#ContinueFooterButton[data-tag-name="bbva-button-default"]',
                linkStatement: '.confirm-step [data-tag-name="bbva-button-default"]#declaracionJurada',
                buttonContinueSuccessful: '.confirm-step [data-tag-name="bbva-button-default"]#confirmButton',
                summaryModal: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            closeModal: '#helpModalHeader[text="bbva-kyc-validation-privacy-modal-title"] #btn-close',
                            closeButtonHeader: '#helpModalHeader[text="bbva-kyc-validation-sworn-declaration-title"] #btn-close',
                            btnExit: '.footer-container .button-default [data-tag-name="bbva-button-default"]',
                        }
                    },
                ],
                signModal: CellsSignOperationModal,
                msgNotification: `#amount0 ${notification}`,
                msgNotificationTextarea: `#containerBank0 [data-tag-name="bbva-form-textarea"] ${notification}`,
                msgNotificationClabe: `${multistep} [name="relationship1"] [data-tag-name="bbva-form-number"] ${notification}`,
                msgNotificationUsd: `#amount3 ${notification}`,
            },
            elementsSpherica: {
                signModal: CellsSignOperationModalSpherica,
                helpModalScreen: {
                    labelPrivacyNotice: '.privacy-container [data-tag-name="bbva-type-icon"]',
                },
                branchModal: {
                    goBranchButtonExit: '#helpModalHeader[text="Hábitos financieros"] #btn-close',
                },
                successScreen: {
                    successSignature: '[data-tag-name="bbva-type-text"][text="bbva-kyc-label-6-spherica"]',
                    successLabelCreditOtherBanks:'[data-tag-name="list-simple"] [text="bbva-kyc-question-5-spherica"] + [text="bbva-kyc-answer-yes-spherica"]',
                    successLabelReasonTransfers:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-operations-reason-spherica"]',
                    successLabelBuySellDollars:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-operations-3-spherica"]',
                    successLabelClabe:'[data-tag-name="list-simple"] [text="bbva-kyc-label-5-spherica"]',
                    successLabelAmount:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-operations-amount-spherica"]',
                    successLabelBbvaOtherBanks:'[data-tag-name="list-simple"] [text="bbva-kyc-label-bank-relationship-option-2-spherica"]',
                },
                radioOperations: {
                    properties: {
                        root: `${multistep}`
                    },
                    ownAccountRadio: '#habits-question-1 [value="bbva-kyc-answer-no-spherica"]',
                    publicOfficeRadio: '#habits-question-2 [value="bbva-kyc-answer-yes-spherica"]',
                    majorMonthlyOperationsRadio: '#habits-question-3 [value="bbva-kyc-answer-yes-spherica"]',
                    creditsInOtherBanksRadio: '#habits-question-5 [value="bbva-kyc-answer-yes-spherica"]',
                    highTransactions: '#habits-question-9 [value="bbva-kyc-answer-yes-spherica"]',
                },
                selectDeposits: '#bank-question-1 custom-bbva-form-select',
                selectOperations: '#bank-question-2 custom-bbva-form-select',
                selectDollarOperations: '#bank-question-3 custom-bbva-form-select',
                selectBuySellDollars: '#bank-question-4 custom-bbva-form-select',
                monthlyAmountDeposits: '#bank-question-1 custom-bbva-form-input[type="amount"] input',
                monthlyAmountTextDeposits: '#bank-question-1 custom-bbva-form-input[type="textarea"] textarea',
                monthlyAmountOperations: '#bank-question-2 custom-bbva-form-input[type="amount"] input',
                monthlyAmountTextOperations: '#bank-question-2 custom-bbva-form-input[type="textarea"] textarea',
                monthlyAmountBuySellDollars: '#bank-question-4 custom-bbva-form-input[type="amount"] input',
                monthlyAmountTextBuySellDollars: '#bank-question-4 custom-bbva-form-input[type="textarea"] textarea',
                linkPrivacyNotice: '#welcomeModal .privacy-container [data-tag-name="bbva-type-text"]',
                titleModalQuestionExit: '#helpModalHeader[text="Ayuda"] #btn-close',
                buttonForm: '#continueFooterButton[data-tag-name="bbva-button-default"]',
                linkStatement: '.confirm-step [data-tag-name="bbva-button-default"]#swornDeclaration',
                answerSelector: {
                    properties: {
                        root: `${multistep} custom-bbva-form-select`
                    },
                    optionsBankingRelationship: `${optionSelect}[value="bbva-kyc-label-bank-relationship-option-1-spherica"]`,
                    optionsBankingRelationship2: `${optionSelect}[value="bbva-kyc-label-bank-relationship-option-2-spherica"]`,
                    optionDeposits: `${optionSelect}[value="bbva-kyc-label-bank-operations-deposits-option-2-spherica"]`,
                    optionOperations: `${optionSelect}[value="bbva-kyc-label-bank-operations-transfers-option-1-spherica"]`,
                    optionDollarOperations: `${optionSelect}[value="bbva-kyc-label-bank-operations-buy-dolars-option-1-spherica"]`,
                    optionDollarOperations2: `${optionSelect}[value="bbva-kyc-label-bank-operations-buy-dolars-option-2-spherica"]`,
                    optionDollarOperations3: `${optionSelect}[value="bbva-kyc-label-bank-operations-buy-dolars-option-3-spherica"]`,
                    optionBuySellDollars: `${optionSelect}[value="bbva-kyc-label-bank-operations-dolars-option-1-spherica"]`,
                },
                questionsSelectors: {
                    selectOriginMoney: 'custom-bbva-form-select[name="formSelect0"]',
                    optionsOriginMoney: `custom-bbva-form-select[name="formSelect0"] ${optionSelect}`,
                    selectAccountUse: 'custom-bbva-form-select[name="formSelect1"]',
                    optionsAccountUse: `custom-bbva-form-select[name="formSelect1"] ${optionSelect}`,
                    selectState: 'custom-bbva-form-select[name="formSelect2"]',
                    optionsState: `custom-bbva-form-select[name="formSelect2"] ${optionSelect}`,
                },
                personalInformation: {
                    selectMarital: 'custom-bbva-form-select[name="option0"]',
                    optionMarital: `custom-bbva-form-select[name="option0"] ${optionSelect}`,
                    economicActivity: 'custom-bbva-form-select[name="option2"]',
                    optionEconomicActivity: `custom-bbva-form-select[name="option2"] ${optionSelect}`,
                },
                relationship: {
                    selectBankingRelationship: 'custom-bbva-form-select#selectRelationship',
                    keyCount: 'custom-bbva-form-input[name="relationship1"] input',
                    eSignature: 'custom-bbva-form-input[name="relationship2"] input',
                },
                msgNotification: '#bank-question-1 custom-bbva-form-input[type="amount"][invalid]',
                msgNotificationTextarea: '#bank-question-1 custom-bbva-form-input[type="textarea"][invalid]',
                msgNotificationClabe: 'custom-bbva-form-input[name="relationship1"][invalid]',
                msgNotificationUsd: '#bank-question-4 custom-bbva-form-input[type="amount"][invalid]',
                modalJobList: {
                    optionOccupation: '.bbva-job-list .job-list-item-container [data-tag-name="bbva-type-text"]',
                },
                summaryModal: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            closeModal: '#helpModalHeader[text="Aviso de privacidad"] #btn-close',
                            closeButtonHeader: '#helpModalHeader[text="Declaración jurada"] #btn-close',
                            btnExit: '.modal-footer .slot-footer bbva-button-default[text="Salir"]',
                        }
                    },
                ],
            },
            requiredElements: [
                'helpModalScreen.header',
            ],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()){
            case 'header':
                await this.helpModalScreen.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title Modal':
                await this.helpModalScreen.titleModal.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'label questionnaire':
                await this.helpModalScreen.labelQuestionnaire.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'label privacy notice':
                await this.helpModalScreen.labelPrivacyNotice.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'header questionnaire':
                await this.headerQuestionnaire.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'link privacy notice':
                await this.linkPrivacyNotice.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button continue':
                await this.helpModalScreen.buttonContinue.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'go branch header':
                await this.branchModal.goBranchHeader.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'go branch title':
                await(await this.branchModal.goBranchTitle.waitForDisplayed({timeout:config.wait.M})).scrollIntoView();
                break;
            case 'go branch ine':
                await this.branchModal.goBranchIne.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'go branch address':
                await this.branchModal.goBranchAddress.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'go branch button':
                await this.branchModal.goBranchButtonExit.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success header':
                await this.successScreen.successHeader.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success title':
                await this.successScreen.successTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success reference number':
                await this.successScreen.successReferenceNumber.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success e signature':
                await this.successScreen.successSignature.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success text information':
                await this.successScreen.successTextInformation.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success label credit other banks':
                await this.successScreen.successLabelCreditOtherBanks.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success label reason transfers':
                await this.successScreen.successLabelReasonTransfers.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success label buy or sell dollars':
                await this.successScreen.successLabelReasonTransfers.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success label clabe':
                await this.successScreen.successLabelClabe.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success label amount':
                await this.successScreen.successLabelAmount.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'success label bbva and other banks':
                await this.successScreen.successLabelBbvaOtherBanks.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'msg notification':
                await this.msgNotification.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'msg notification textarea':
                await this.msgNotificationTextarea.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'msg notification clabe':
                await this.msgNotificationClabe.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'msg notification usd':
                await this.msgNotificationUsd.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button continue successful':
                await this.buttonContinueSuccessful.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async showModalPrivacyNotice() {
        await(await this.linkPrivacyNotice.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.summaryModal.additionalElements.closeModal.waitForDisplayed({timeout:config.wait.M})).click({useActions: true});
    }

    async accessToFormKyc() {
        await(await this.helpModalScreen.buttonContinue.waitForDisplayed({timeout:config.wait.M})).click({useActions: true});
        await this.headerQuestionnaire.waitForDisplayed({timeout:config.wait.M});
    }

    async retryRequest() {
        await(await this.buttonRetry.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async selectOptionForRiskUser() {
        await(await this.radioOperations.publicOfficeRadio.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async selectPublicOfficeQuestion() {
        await(await this.publicOfficeQuestion.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.titleModalQuestionExit.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.monthlyOperationsQuestion.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.titleModalQuestionExit.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async selectOptionForCreditsInOtherBanks() {
        await(await this.radioOperations.creditsInOtherBanksRadio.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async displayHighTransactions(value) {
        await(await this.radioOperations.highTransactions.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.selectDeposits.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.answerSelector.optionDeposits.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.monthlyAmountDeposits.waitForDisplayed({timeout:config.wait.M})).setValue({value, slow: true});
    }

    async selectHighTransactions() {
        await this.displayHighTransactions('250000');
        await(await this.monthlyAmountTextDeposits.waitForDisplayed({timeout:config.wait.M})).click();
        await this.monthlyAmountTextDeposits.setValue({value: 'Venta de productos', slow: true});
        await(await this.selectOperations.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.answerSelector.optionOperations.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.monthlyAmountOperations.waitForDisplayed({timeout:config.wait.M})).setValue({value: '250000', slow: true});
        await(await this.monthlyAmountTextOperations.waitForDisplayed({timeout:config.wait.M})).click();
        await this.monthlyAmountTextOperations.setValue({value: 'Venta de productos', slow: true});
    }

    async selectBuyDollars(option) {
        await(await this.selectDollarOperations.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.answerSelector[`optionDollarOperations${option}`].waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.selectBuySellDollars.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.answerSelector.optionBuySellDollars.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async selectedBankOperationsDollar(option) {
        switch (option) {
            case '1':
                await(await this.selectDollarOperations.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.answerSelector.optionDollarOperations.waitForDisplayed({timeout:config.wait.M})).click();
                break;
            case '2':
                await this.selectBuyDollars(option);
                break;
            case '3':
                await this.selectBuyDollars(option);
                await(await this.monthlyAmountBuySellDollars.waitForDisplayed({timeout:config.wait.M})).setValue({value: '250000', slow: true});
                await(await this.monthlyAmountTextBuySellDollars.waitForDisplayed({timeout:config.wait.M})).click();
                await this.monthlyAmountTextBuySellDollars.setValue({value: 'Venta de productos agropecuarios', slow: true});
                break;
            case '4':
                await this.selectBuyDollars('3');
                await(await this.monthlyAmountBuySellDollars.waitForDisplayed({timeout:config.wait.M})).setValue({value: '250', slow: true});
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async enterLowerAmount(option) {
        switch (option) {
            case 'an invalid CLABE account number':
                await this.interactionSelectOption();
                await this.relationshipBBVA('18 digits');
                break;
            case 'a lower amount':
                await this.displayHighTransactions('100');
                break;
            case 'a text with special characters':
                await this.displayHighTransactions('100');
                await(await this.monthlyAmountTextDeposits.waitForDisplayed({timeout:config.wait.M})).click();
                await this.monthlyAmountTextDeposits.setValue({value: 'Venta #$%&/()', slow: true});
                break;
            case 'a lesser amount in dollars':
                await this.selectHighTransactions();
                await this.selectedBankOperationsDollar('4');
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }

    }

    async goBack() {
        await this.btnCloseQuestionnaireForm.scrollIntoView();
        await(await this.btnCloseQuestionnaireForm.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.summaryModal.additionalElements.btnExit.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async interactionFormKyc(option) {
        await this.headerQuestionnaire.scrollIntoView({block: 'center'});
        switch (option) {
            case 'simple case':
                await this.accessToFormKyc();
                await this.selectPublicOfficeQuestion();
                break;
            case 'credits in other banks and buying and selling USD':
                await this.selectOptionForCreditsInOtherBanks();
                await this.selectHighTransactions();
                await this.selectedBankOperationsDollar('1');
                break;
            case 'less than 2,000 USD and registered clabe':
                await this.selectHighTransactions();
                await this.selectedBankOperationsDollar('2');
                break;
            case 'more than USD 2,000 without a CLABE account':
                await this.selectHighTransactions();
                await this.selectedBankOperationsDollar('3');
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }

        await this.interactionSelectOption();
        await this.relationshipBBVA(option);
        await this.openForm();
        await this.showModalSummary();
        await this.closeModalSummary();
        await this.questionnaireSummary();

    }

    async interactionSelectOption() {
        await this.personalInformation.selectMarital.waitForDisplayed({timeout:config.wait.M});
        await(await this.personalInformation.selectMarital.scrollIntoView()).click();
        await(await this.personalInformation.optionMarital.waitForDisplayed({timeout:config.wait.M})).click({useActions: true});
        await(await this.personalInformation.inputOccupation.waitForDisplayed({timeout:config.wait.M})).click({useActions: true});
        await this.modalJobList.formTextOccupation.waitForDisplayed({timeout:config.wait.L});
        await(await this.modalJobList.formTextOccupation.waitForAnimation({timeout:config.wait.M})).setValue({value: 'Ventas y actividades comerciales', slow: true});
        await(await this.modalJobList.optionOccupation.waitForDisplayed({timeout:config.wait.M})).click({useActions: true});
        await this.personalInformation.economicActivity.selectOption({option:this.personalInformation.optionEconomicActivity});
        await this.questionsSelectors.selectOriginMoney.selectOption({option:this.questionsSelectors.optionsOriginMoney});
        await this.questionsSelectors.selectAccountUse.selectOption({option:this.questionsSelectors.optionsAccountUse});
        await this.questionsSelectors.selectState.selectOption({option:this.questionsSelectors.optionsState});
    }

    async bankingRelationship(option) {
        await(await this.relationship.selectBankingRelationship.waitForClickable({timeout:config.wait.M})).click();
        if(option === '1') {
            await(await this.answerSelector.optionsBankingRelationship.waitForClickable({timeout:config.wait.M})).click();
        } else if (option === '2') {
            await(await this.answerSelector.optionsBankingRelationship2.waitForClickable({timeout:config.wait.M})).click();
        }
    }

    async relationshipBBVA(option) {
        if(option === 'less than 2,000 USD and registered clabe' || option === 'more than USD 2,000 without a CLABE account' || option === '18 digits') {
            switch (option) {
                case 'less than 2,000 USD and registered clabe':
                    await this.bankingRelationship('2');
                    await(await this.relationship.keyCount.waitForDisplayed({timeout:config.wait.M})).setValue({value:'012345678901234567', slow: true});
                    break;
                case 'more than USD 2,000 without a CLABE account':
                    await this.bankingRelationship('2');
                    break;
                case '18 digits':
                    await this.bankingRelationship('2');
                    await(await this.relationship.keyCount.waitForDisplayed({timeout:config.wait.M})).setValue({value:'0123456', slow: true});
                    break;
                default:
                    throw new Error(`The option: ${option} is not implemented`);
            }
        } else {
            await this.bankingRelationship('1');
        }
    }

    async eSignatureOption() {
        await(await this.relationship.eSignature.waitForDisplayed({timeout:config.wait.M})).setValue({value: 'ABCDE12345', slow: true});
    }

    async openForm() {
        await(await this.buttonForm.waitForClickable({timeout:config.wait.M})).click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async showModalSummary() {
        await(await this.linkStatement.waitForClickable({timeout:config.wait.M})).click();
    }

    async closeModalSummary() {
        await(await this.summaryModal.additionalElements.closeButtonHeader.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async questionnaireSummary() {
        await(await this.buttonContinueSuccessful.waitForClickable({timeout:config.wait.M})).click();
        await this.signModal.isLoaded();
        await this.signModal.setPassword(12345678);
        await this.signModal.confirmPassword();
    }
}
export default new KycValidation();
