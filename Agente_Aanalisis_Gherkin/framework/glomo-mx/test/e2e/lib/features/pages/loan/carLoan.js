import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class CarLoan extends AbstractGlomoPage {
    constructor() {
        const step1 = '#contract-step-1';
        const step2 = '#contract-step-2';
        super({
            root: '#cells-template-carLoan[state="active"]',
            elements: {
                header: {
                    exitBtn: 'cells-molecule-header #btnRight',
                    callMeBackHeaderButton: 'cells-molecule-header #btnRightSecondary',
                },
                banner: {
                    logo: '#headerPreApproved svg',
                    content: '#headerPreApproved p'
                },
                mainTitle: '#titleHeaderPreApproved bbva-core-heading',
                stepOne: {
                    initialText: `${step1} div.content div.padding-x [data-tag-name=bbva-text] span`,
                    //Radio buttons nuevo y seminuevo
                    radioButtonsHeader: `${step1} #labelOutText`,
                    newRadioButton: `${step1} [data-tag-name="bbva-form-radio-button"]:first-of-type`,
                    newRadioButtonInfo: `${step1} [data-tag-name="bbva-form-radio-button"]:first-of-type span.content`,
                    usedRadioButton: `${step1} [data-tag-name="bbva-form-radio-button"]:last-of-type`,
                    usedRadioButtonInfo: `${step1} [data-tag-name="bbva-form-radio-button"]:last-of-type span.content`,
                    //Importe
                    importInput: `${step1} input`,
                    importDeleteButton: `${step1} div.content div.padding-x [data-tag-name="bbva-form-amount"] div.field [data-tag-name=bbva-button-icon]`,
                    importMessage: `${step1} div.content div.padding-x [data-tag-name="bbva-form-amount"] div.message.info`,
                    importErrorMessage: `${step1} div.message.error span`,
                    importTitleNextPay: `${step1} div.content > div.padding-x > div > [data-tag-name="bbva-text"]:nth-child(1)`,
                    //Plazo
                    termText: `${step1} [data-tag-name="bbva-text"]:nth-of-type(3)`,
                    termTitle: `${step1} #simpleTextPreApproved dt p`,
                    termValue: `${step1} #simpleTextPreApproved dd p`,
                    termBar: 'bbva-multistep-oc-car-loan-pre-approved #contract-step-1 div.content div.padding-x bbva-form-range div.bar',
                    termCurrent: `${step1} div.current .knob`,
                    termOptions: `${step1} div.legend`,
                    termSlider: `${step1} [data-tag-name=bbva-form-range]`,
                    //Rate and costs
                    rateAndCostsTitle: `${step1} #taxesPreApproved #heading`,
                    mensualRateTitle: `${step1} #TASA_MENSUAL .label`,
                    mensualRateHelpButton: `${step1} #TASA_MENSUAL button`,
                    mensualRateDescription: `${step1} #TASA_MENSUAL .description`,
                    comisionForOpertureTitle: `${step1} #COMISION\\ APERTURA .label`,
                    comisionForOpertureHelpButton: `${step1} #COMISION\\ APERTURA button`,
                    comisionForOpertureDescription: `${step1} #COMISION\\ APERTURA .description`,
                    CATTitle: `${step1} #CAT .label`,
                    CATHelpButton: `${step1} #CAT button`,
                    CATDescription: `${step1} #CAT .description`,
                    CATInfo: `${step1} div.content div.padding-notification [data-tag-name=bbva-text]:first-of-type`,
                    IVAInfo: `${step1} div.content div.padding-notification [data-tag-name=bbva-text]:last-of-type`,
                    //Cotization info message
                    cotizationFirstInfoMessage: `${step1} #notificationMessagePreApproved`,
                    //Pre approved initial cotization
                    preapprovedInitialCotizationTitle: `${step1} #panelFixedPreApproved .header-content .label`,
                    preapprovedInitialCotizationAmmount: `${step1} #panelFixedPreApproved .header-content .amount`,
                    preapprovedInitialCotizationAdditional: `${step1} #panelFixedPreApproved .header-content .header-additional-info`,
                    continuePreapprovedButton: `${step1} #buttonFixedPreApproved`,
                    //Edit Button
                    editCotizationButton: `${step1} #secondStepTitle #optionLinkText`,
                },
                stepTwo: {
                    //Terms and conditions
                    termsAndConditionsTitle: `${step2} #heading`,
                    termsAndConditionsOfContractLink: `${step2} #terms-and-conditions`,
                    creditHistoryAuthorizationLink: `${step2} #credit-history`,
                    termsAndConditionsFirstCheck: `${step2} [name="check-1"]`,
                    termsAndConditionsSecondCheck: `${step2} [name="check-2"]`,
                    termsAndConditionsNotificationMessage: `${step2} #nmTermsConditionsPreApproved`,
                    termsAndConditionsContinueButton: `${step2} #buttonContinueTerms`,
                    //Edit button
                    termsAndConditionsConsultButton: `${step2} #editButton`,
                },
                summary: {
                    mainTitle: '.summary #secondStepTitle #heading',
                    step1EditBtn: '.summary #secondStepTitle #link',
                    summaryAmmountTitle: '.summary #summaryAmount .amount-title',
                    summaryAmmount: '.summary #summaryAmount #summaryAmountPreApproved',
                    termsAndConditionsSummaryTitle: `${step2} bbva-core-heading`,
                    termsAndConditionsEditButton: `${step2} #editButton`,
                    accepted: `${step2} #acceptedInfo`,
                    emailTitle: `${step2} #emailItem dt`,
                    emailContent: `${step2} #emailItem dd`,
                    summaryContractBtn: '#panelButton #button',
                },
                helpModals: {
                    properties: {root: '[data-tag-name="bbva-help-modal"]#eventModalCostOpen'},
                    modalHeaderTitle: '#helpModalHeader h1',
                    modalExitButton: '#helpModalHeader #btn-right-primary',
                    modalTitle: '#helpModalTitle',
                    firstText: '#eventModalCostOpenText1',
                    secondText: '#eventModalCostOpenText2',
                    acceptButton: '.footer-button:first-child',
                    modalHeaderImage: '#eventModalCostOpenPanelInfo #image',
                    autorizationModalTitle: '#eventModalCostOpenPanelInfo .content'
                },
                termsAndConditionsModal: {
                    modalHeaderTitle: '#modalTermsAndConditions #helpModalHeader h1',
                    modalExitButton: '#modalTermsAndConditions #helpModalHeader #btn-right-primary',
                    modalLogo: '#modalTermsAndConditions #helpModalTitle .title-icon',
                    bulletElementOne: '#modalTermsAndConditions #div_modalTermsAndConditions #list_bulletmodalTermsAndConditions_0',
                    bulletElementTwo: '#modalTermsAndConditions #div_modalTermsAndConditions #list_bulletmodalTermsAndConditions_1',
                    bulletElementThree: '#modalTermsAndConditions #div_modalTermsAndConditions #list_bulletmodalTermsAndConditions_2',
                    bulletElementFour: '#modalTermsAndConditions #div_modalTermsAndConditions #list_bulletmodalTermsAndConditions_3',
                    bulletElementFive: '#modalTermsAndConditions #div_modalTermsAndConditions #list_bulletmodalTermsAndConditions_4',
                    bulletElementSix: '#modalTermsAndConditions #div_modalTermsAndConditions #list_bulletmodalTermsAndConditions_5',
                    text: '#modalTermsAndConditions #modalTermsAndConditionsText1',
                    acceptBtn: '#modalTermsAndConditions .slot-footer .footer-button:first-child'
                },
                rejectModal: {
                    icon: '#modalRejectBureau #modalRejectBureauPanelInfo .image',
                    title: '#modalRejectBureau #modalRejectBureauPanelInfo .content',
                    text: '#modalRejectBureau #modalRejectBureauText1',
                    link: '#modalRejectBureau #modalRejectBureauText2',
                    acceptBtn: '#modalRejectBureau [data-tag-name="bbva-button-default"].footer-button'
                },
                leaveModal: {
                    icon: '#modalLeaveContract #helpModalTitle .title-icon',
                    text: '#modalLeaveContract #helpModalContent .slot-content',
                    leaveExitBtn: '#modalLeaveContract .slot-footer .footer-button:nth-child(1)',
                    stayBtn: '#modalLeaveContract .slot-footer .footer-button:nth-child(2)'

                },
                privacyNoticeModal: {
                    header: '#eventModalCostOpen #helpModalHeader #heading',
                    icon: '#eventModalCostOpen #helpModalTitle [data-tag-name=bbva-icon]',
                    title: '#eventModalCostOpen #helpModalTitle',
                    text: '#eventModalCostOpenText1',
                    acceptBtn: '#eventModalCostOpen div div.content section div div.modal-footer slot div bbva-button-default'
                },
                dialogOperations: [
                    GlomoAlertManager
                ]
            },
            requiredElements: [
                'banner',
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            //Step 1 elements
            case 'banner logo':
                await this.banner.logo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'banner content':
                await this.banner.content.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'loan main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'step one initial text':
                await this.stepOne.initialText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'radio buttons header':
                await this.stepOne.radioButtonsHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new radio button':
                await this.stepOne.newRadioButton.waitForDisplayed({timeout: config.wait.L});
                value === 'checked' ? this.stepOne.newRadioButton.checked : !this.stepOne.newRadioButton.checked;
                break;
            case 'new radio button info':
                await this.stepOne.newRadioButtonInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'used radio button':
                await this.stepOne.usedRadioButton.waitForDisplayed({timeout: config.wait.L});
                value === 'checked' ? this.stepOne.usedRadioButton.checked : !this.stepOne.usedRadioButton.checked;
                break;
            case 'used radio button info':
                await this.stepOne.usedRadioButtonInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'import input':
                await this.stepOne.importInput.waitForDisplayed({timeout: config.wait.L});
                if (value && value !== 'empty') {
                    return await this.stepOne.importInput.getValue() === value;
                }
                if (value && value === 'empty') {
                    return await this.stepOne.importInput.getValue() === '';
                }
                break;
            case 'import message':
                await this.stepOne.importMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'import error message':
                await this.stepOne.importErrorMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'import title next pay':
                await this.step1.importTitleNextPay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term text':
                await this.stepOne.termText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term title':
                await this.stepOne.termTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term value':
                await this.stepOne.termValue.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term bar':
                await this.stepOne.termBar.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term current':
                await this.stepOne.termCurrent.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term options':
                await this.stepOne.termOptions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'rate and costs title':
                await this.stepOne.rateAndCostsTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mensual rate title':
                await this.stepOne.mensualRateTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mensual rate help button':
                await this.stepOne.mensualRateHelpButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mensual rate description':
                await this.stepOne.mensualRateDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'commision for operture title':
                await this.stepOne.comisionForOpertureTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'commision for operture help button':
                await this.stepOne.comisionForOpertureHelpButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'commision for operture description':
                await this.stepOne.comisionForOpertureDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cat title':
                await this.stepOne.CATTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cat help button':
                await this.stepOne.CATHelpButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cat description':
                await this.stepOne.CATDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cat info':
                await this.stepOne.CATInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'iva info':
                await this.stepOne.IVAInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cotization first info message':
                await this.stepOne.cotizationFirstInfoMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'preapproved initial cotization title':
                await this.stepOne.preapprovedInitialCotizationTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'preapproved initial cotization ammount':
                await this.stepOne.preapprovedInitialCotizationAmmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'preapproved initial cotization additional':
                await this.stepOne.preapprovedInitialCotizationAdditional.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue preapproved button':
                await this.stepOne.continuePreapprovedButton.waitForDisplayed({timeout: config.wait.L});
                break;
            //Step 2 elements
            case 'edit cotization button':
                await this.stepOne.editCotizationButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions title':
                await this.stepTwo.termsAndConditionsTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions of contract link':
                await this.stepTwo.termsAndConditionsOfContractLink.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'credit history authorization link':
                await this.stepTwo.creditHistoryAuthorizationLink.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions consult button':
                await this.stepTwo.termsAndConditionsConsultButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions first check':
                await this.stepTwo.termsAndConditionsFirstCheck.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions notifications message':
                await this.stepTwo.termsAndConditionsNotificationMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions continue button':
                await this.stepTwo.termsAndConditionsContinueButton.waitForDisplayed({timeout: config.wait.L});
                await this.stepTwo.termsAndConditionsContinueButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                break;
            //Summary elements
            case 'summary title':
                await this.summary.mainTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary step one edit button':
                await this.summary.step1EditBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary ammount title':
                await this.summary.summaryAmmountTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary ammount':
                await this.summary.summaryAmmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions summary title':
                await this.summary.termsAndConditionsSummaryTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions edit button':
                await this.summary.termsAndConditionsEditButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary accepted':
                await this.summary.accepted.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary email title':
                await this.summary.emailTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary email':
                await this.summary.emailContent.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary contract button':
                await this.summary.summaryContractBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            //Modal elements
            case 'considerations modal header title':
            case 'interest rate modal header title':
            case 'commision for opperture modal header title':
            case 'cat modal header title':
            case 'authorization modal header title':
                await this.helpModals.modalHeaderTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations modal exit button':
            case 'interest rate modal exit button':
            case 'commision for opperture modal exit button':
            case 'cat modal exit button':
            case 'authorization modal exit button':
                await this.helpModals.modalExitButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations modal title':
            case 'interest rate modal title':
            case 'commision for opperture modal title':
            case 'cat modal title':
                await this.helpModals.modalTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations modal first text':
            case 'interest rate modal first text':
            case 'commision for opperture modal first text':
            case 'cat modal text':
            case 'authorization modal first text':
                await this.helpModals.firstText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations modal second text':
            case 'interest rate modal second text':
            case 'commision for opperture modal second text':
            case 'authorization modal second text':
                await this.helpModals.secondText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations modal accept button':
            case 'interest rate modal accept button':
            case 'commision for opperture modal accept button':
            case 'cat modal accept button':
            case 'authorization modal accept button':
                await this.helpModals.acceptButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'authorization modal logo':
                await this.helpModals.modalHeaderImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'authorization modal title':
                await this.helpModals.autorizationModalTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            //Terms and conditions modal
            case 'terms and conditions modal title':
                await this.termsAndConditionsModal.modalHeaderTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions exit button':
                await this.termsAndConditionsModal.modalExitButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions modal logo':
                await this.termsAndConditionsModal.modalLogo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions bullet list one':
                await this.termsAndConditionsModal.bulletElementOne.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions bullet list two':
                await this.termsAndConditionsModal.bulletElementTwo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions bullet list three':
                await this.termsAndConditionsModal.bulletElementThree.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions bullet list four':
                await this.termsAndConditionsModal.bulletElementFour.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions bullet list five':
                await this.termsAndConditionsModal.bulletElementFive.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions accept button':
                await this.termsAndConditionsModal.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'leave modal icon':
                await this.leaveModal.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'leave modal text':
                await this.leaveModal.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'leave modal exit button':
                await this.leaveModal.leaveExitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'leave modal stay button':
                await this.leaveModal.stayBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            //Reject modal
            case 'rejected loan icon':
                await this.rejectModal.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'rejected loan title':
                await this.rejectModal.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'rejected loan text':
                await this.rejectModal.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'rejected loan link':
                await this.rejectModal.link.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'rejected loan accept button':
                await this.rejectModal.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy header':
                await this.privacyNoticeModal.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy icon':
                await this.privacyNoticeModal.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy title':
                await this.privacyNoticeModal.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy text':
                await this.privacyNoticeModal.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy accept button':
                await this.privacyNoticeModal.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async checkCheckboxes() {
        await (await this.stepTwo.termsAndConditionsFirstCheck.waitForClickable({timeout: config.wait.L}))
            .click();
        await (await this.stepTwo.termsAndConditionsSecondCheck.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async acceptSummary() {
        await (await this.summary.summaryContractBtn.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async continueToStep(step) {
        switch (step.toLowerCase()) {
            case 'terms and conditions':
                await (await this.stepOne.continuePreapprovedButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'authorization':
                await (await this.stepOne.continuePreapprovedButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'summary':
                await (await this.stepOne.continuePreapprovedButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                await this.checkCheckboxes();
                await (await this.stepTwo.termsAndConditionsContinueButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new Error(`The step ${step} cannot be identified`);
        }
    }

    async selectCheckbox(option) {
        if (option === 'used') {
            await (await this.stepOne.usedRadioButton.waitForClickable({timeout: config.wait.L}))
                .click();
        } else if (option === 'new') {
            await (await this.stepOne.newRadioButton.waitForClickable({timeout: config.wait.L}))
                .click();
        }
    }

    async insertAmmount(ammount) {
        if (ammount === 'empty') {
            await (await this.stepOne.importInput.waitForClickable({timeout: config.wait.L})).click();
            await (await this.stepOne.importDeleteButton.waitForClickable({timeout: config.wait.L})).click();
        } else {
            await (await this.stepOne.importInput.waitForClickable({timeout: config.wait.L})).click();
            await (await this.stepOne.importDeleteButton.waitForClickable({timeout: config.wait.L})).click();
            await (await (await this.stepOne.importInput.waitForClickable({timeout: config.wait.L})).clearValue())
                .setValue({value: ammount});
            await this.stepOne.importTitleNextPay.waitForDisplayed({timeout: config.wait.L});
            await this.stepOne.importTitleNextPay.waitForAnimation({timeout: config.wait.L});
            await this.stepOne.importTitleNextPay.waitForEnabled({timeout: config.wait.L});
            await this.stepOne.importTitleNextPay.click();
        }
    }

    async changeTermValue() {
        await (await this.stepOne.termSlider.waitForDisplayed({timeout: config.wait.L})).scrollIntoView();
        storage['termInitialValue'] = await this.stepOne.termSlider.getValue();
        const initialCords = await this.stepOne.termCurrent.getLocation();
        await (await this.stepOne.termCurrent.waitForDisplayed({timeout: config.wait.L})).dragAndDrop({
            target:
                {
                    X: {
                        value: initialCords.x -= 1,
                        type: 'absolute'
                    }
                },
        });
    }

    async enterModal(modal) {
        switch (modal.toLowerCase()) {
            case 'mensual rate':
                await (await this.stepOne.mensualRateHelpButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'commision for opperture':
                await (await this.stepOne.comisionForOpertureHelpButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'cat':
                await (await this.stepOne.CATHelpButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'authorization':
                await (await this.stepTwo.creditHistoryAuthorizationLink.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'terms and conditions':
                await (await this.stepTwo.termsAndConditionsOfContractLink.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new Error(`The modal ${modal} cannot be identified`);
        }
    }

    async changeValues() {
        await (await this.stepOne.editCotizationButton.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async checkTermsAndConditions() {
        await (await this.summary.termsAndConditionsEditButton.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async exitCarLoan(action) {
        switch (action.toLowerCase()) {
            case 'without changes':
            case 'decides to':
                await (await this.header.exitBtn.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'definitely':
                await (await this.header.exitBtn.waitForClickable({timeout: config.wait.L}))
                    .click();
                await (await this.leaveModal.leaveExitBtn.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'initially':
                await (await this.header.exitBtn.waitForClickable({timeout: config.wait.L}))
                    .click();
                await (await this.leaveModal.stayBtn.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new Error(`The action ${action} aint defined`);
        }
    }

    async checkTerm() {
        return await this.stepOne.termSlider.getValue() !== global.storage.termInitialValue;
    }

    async acceptLoan(otp) {
        await (await this.summary.summaryContractBtn.waitForClickable({timeout: config.wait.L}))
            .click();
        await this.fillOtp(otp);
    }

    async continueToOtp() {
        await (await this.summary.summaryContractBtn.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async selectMonths() {
        await this.stepOne.termSlider.waitForDisplayed({timeout: config.wait.L});
        await this.stepOne.termSlider.waitForAnimation({timeout: config.wait.L});
        await this.stepOne.termSlider.waitForEnabled({timeout: config.wait.L});
        await this.stepOne.termSlider.scrollIntoView();
        await this.stepOne.termSlider.execute({
            script: (newValue) => this.setAttribute('value', newValue),
            args:[3] });
        await this.stepOne.termSlider.click();
    }

    async selectMonthsError() {
        await this.stepOne.termSlider.waitForDisplayed({timeout: config.wait.L});
        await this.stepOne.termSlider.waitForAnimation({timeout: config.wait.L});
        await this.stepOne.termSlider.waitForEnabled({timeout: config.wait.L});
        await this.stepOne.termSlider.scrollIntoView();
        await this.stepOne.termSlider.execute({ script: () => this.setAttribute('value', 3) });
        await this.errorDialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.L});
    }

    async acceptModal(screen) {
        switch (screen.toLowerCase()) {
            case 'privacy notice':
                await (await this.helpModals.acceptButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'terms and conditions':
                await (await this.termsAndConditionsModal.acceptBtn.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'cat':
                await (await this.helpModals.acceptButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'commision for opperture':
                await (await this.helpModals.acceptButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'mensual rate':
                await (await this.helpModals.acceptButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'considerations':
                await (await this.helpModals.acceptButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'authorization':
                await (await this.helpModals.acceptButton.waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new Error(`The screen ${screen} is not defined`);
        }
    }

    async accessToCallMeBack() {
        await (await this.header.callMeBackHeaderButton.waitForClickable({timeout: config.wait.L}))
            .click();
    }

}

export default new CarLoan();
