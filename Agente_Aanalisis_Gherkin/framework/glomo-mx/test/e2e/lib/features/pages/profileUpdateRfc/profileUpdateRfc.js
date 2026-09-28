import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('profileUpdateRfc')
class ProfileUpdateRfc extends AbstractGlomoPage {
    constructor() {
        //multiStep
        const multiStep = '[data-tag-name="bbva-expandable-multistep"]';
        //Steps
        const multiStepOne = `${multiStep} #step1`;
        const multiStepTwo = `${multiStep} #step2`;
        const multiStepThree = `${multiStep} #step3`;
        const multiStepFour = `${multiStep} #step4`;
        //Modals
        const modalOperationCancel = '#middleModalServiceNotAvaiable';
        const fullModalOperationCancel = '#fullModalServiceNotAvaiable';
        const modalFieldOperation = '#middleModalOperationCanceled';
        const fullmodalFieldOperation = '#fullModalOperationCanceled';
        const modalWithOutPeriodCfdi = '#modalWithoutCfdiPeriod';
        const toastNotification = '#toastLostConection';
        //Page Success
        const pageSuccess = '[data-tag-name="success-page"] #modalSucces';

        super({
            root: '#cells-template-profileUpdateRfc[state="active"]',
            elements: {
                header: 'bbva-feature-update-rfc-mx-spherica section  bbva-header-main #text',
                btnConfirmCancelationAndRegranding: `${multiStep} #btnConfirmStep`,
                stepOne: {
                    inputSelectProduct: `${multiStepOne} #selectProductFormInput`,
                    inputSelectProductCloseIcon: `${multiStepOne} #selectProductFormInput div [data-tag-name="bbva-type-icon"] svg`,
                    btnSelectProduct: `${multiStepOne} #btnSelectProduct`,
                },
                stepTwo: {
                    inputSelectDateFrom: `${multiStepTwo} #bbvaSelectFormFrom`,
                    inputInfoTitleSelectDateFrom: `${multiStepTwo} #bbvaStepSelectionPeriod bbva-type-text`,
                    inputInfoTitleSelectDateTo: `${multiStepTwo} #bbvaStepSelectionPeriod div:nth-child(3) bbva-type-text`,
                    inputSelectDateTo: `${multiStepTwo} #bbvaSelectFormTo`,
                    btnSelectPeriod: `${multiStepTwo} #btnStepTwoDate`,
                    headerCurrentStepSelectPeriod: `${multiStepTwo} #currentStep span.text`,
                    headerSelectPeriod: `${multiStepTwo} #headingLabel`,
                    inputSelectProductCloseIcon: `${multiStepTwo} #selectProductFormInput div [data-tag-name="bbva-type-icon"] svg`,
                    errorInputSelectPeriod: {
                        nonitficationErroInputFrom: `${multiStepTwo} #bbvaSelectFormFrom [data-tag-name="bbva-notification-help"]`,
                        notificationErrorInputTo: `${multiStepTwo} #bbvaSelectFormTo [data-tag-name="bbva-notification-help"]`
                    }
                },
                stepThree: {
                    containerGroupCfdi: `${multiStepThree} #headerGroupCfdiDummy`,
                    btnViewMore: `${multiStepThree}  #btnViewmoreCfdi`,
                    btnContinue: `${multiStepThree} #btnStepThreePeridCfdis`,
                },
                stepFour: {
                    checkBoxTermsAndConditions: `${multiStepFour} #checkBoxTermsConditions`,
                    btnTermsAndConditions: `${multiStepFour} #btnStepFourContinue`,
                },
                toastNotification: {
                    lostConnection: `${toastNotification}`,
                },
                modalSuccess: {
                    microIllustration: `${pageSuccess} #modalSuccessPageMicroillustration`,
                    conteinerSimpleDate: `${pageSuccess} #modalSuccessPageSimpleDate`,
                    conteinerSimplePeriod: `${pageSuccess} #modalSuccessPageContentSimplePeriod`,
                    conteinerSimpleTotalCfdi: `${pageSuccess} #modalSuccessPageSimpleCfdiTotal`,
                    conteinerSimpleTypeCfdi: `${pageSuccess} #modalSuccessPageSimpleTypeCfdi`,
                    conteinerSimpleInfo: `${pageSuccess} #modalSuccessPageSimpleInfo`,
                    conteinerSimpleInfoMessage: `${pageSuccess} #modalSuccessPageSimpleMessage`,
                    infoModal: `${pageSuccess} #modalSuccessPageNotificationMessage`,
                    infoModalIcon: `${pageSuccess} #modalSuccessPageNotificationMessage div.wrapper-icon-title`,
                    btnExit: `${pageSuccess} .content .transition-container .modal-main .modal-footer bbva-button-default`,
                    btnRequestCfdi: `${pageSuccess} .content .transition-container .modal-main .modal-footer bbva-button-default`,
                },
                modalWithOutPeriodCfdis: {
                    modaContainerlWithOutPeriodCfdis: `${modalWithOutPeriodCfdi}`,
                    titleBtn: `${modalWithOutPeriodCfdi} #helpModalHeader header div #btn-close`,
                    title: `${modalWithOutPeriodCfdi} #heading`,
                },
                modalFieldOperation: {
                    btnModalFieldOperation: `${modalFieldOperation} [data-tag-name="bbva-button-default"]`,
                },
                modalFullFieldOperation: {
                    headerIcon: `${fullmodalFieldOperation} #helpModalHeader header div #btn-close`,
                    header: `${fullmodalFieldOperation} #helpModalHeader header div #heading`,
                    microillustration: `${fullmodalFieldOperation} #modalMicroillustrationFailedOperation`,
                    subtitle: `${fullmodalFieldOperation} #title-text`,
                    textMessage: `${fullmodalFieldOperation} #helpModalContent`,
                    btnCallBbva: `${fullmodalFieldOperation} .content .transition-container .modal-main .modal-footer bbva-button-default:nth-child(1)`,
                    btnExit: `${fullmodalFieldOperation} .content .transition-container .modal-main .modal-footer bbva-button-default.footer-button.link`,
                },
                modalFullOperationCancel: {
                    microillustration: `${fullModalOperationCancel} #helpModalTitle bbva-type-icon`,
                    title: `${fullModalOperationCancel} #title-text`,
                    subTtitle: `${fullModalOperationCancel} .content .transition-container .modal-main .modal-container`,
                    headerIcon: `${fullModalOperationCancel} #helpModalHeader header div #btn-close`,
                    header: `${fullModalOperationCancel} #helpModalHeader header div #heading`,
                },
                modalOperationCancel: {
                    btnRetryOperation: `${modalOperationCancel} .content .transition-container.dynamic-height .modal-main .modal-footer bbva-button-default`,
                },
                modalExit: {
                    btnCloseIcon: 'bbva-feature-update-rfc-mx-spherica section  bbva-header-main #btn-close',
                    btnClose: '#exitModal .content .transition-container.dynamic-height .modal-main .modal-footer bbva-button-default:nth-child(1)',
                }
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({item, value = ''} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            //Step one
            case 'input select product':
                await this.stepOne.inputSelectProduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close icon input select product':
                await this.stepOne.inputSelectProductCloseIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn select product':
                await this.stepOne.btnSelectProduct.waitForDisplayed({timeout: config.wait.M});
                break;
            //Step Two
            case 'title step select period':
                await this.stepTwo.headerSelectPeriod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'current step select period':
                await this.stepTwo.headerCurrentStepSelectPeriod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info title input select date from':
                await this.stepTwo.inputInfoTitleSelectDateFrom.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input select date from':
                await this.stepTwo.inputSelectDateFrom.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info title input select date to':
                await this.stepTwo.inputInfoTitleSelectDateTo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input select date to':
                await this.stepTwo.inputSelectDateTo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn select period':
                if (value !== 'disabled') {
                    await this.stepTwo.btnSelectPeriod.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.stepTwo.btnSelectPeriod.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'label date error form':
                await this.stepTwo.errorInputSelectPeriod.nonitficationErroInputFrom.waitForDisplayed({timeout: config.wait.L, reverse: value === 'false'});
                break;
            case 'label date error to':
                await this.stepTwo.errorInputSelectPeriod.notificationErrorInputTo.waitForDisplayed({timeout: config.wait.L, reverse: value === 'false'});
                break;
            case 'close icon input select period':
                await this.stepTwo.inputSelectProductCloseIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            //Step three
            case 'container group cfdis':
                await this.stepThree.containerGroupCfdi.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn view mover cfdis':
                await this.stepThree.btnViewMore.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn continue cfdis':
                await this.stepThree.btnContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            //Step four
            case 'checkbox terms and conditions':
                await this.stepFour.checkBoxTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn terms and conditions':
                await this.stepFour.btnTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn confirm cancelation and rebranding':
                await this.btnConfirmCancelationAndRegranding.waitForDisplayed({timeout: config.wait.M});
                break;
            //Modals
            case 'title modal period without cfdi':
                await this.modaContainerlWithOutPeriodCfdis.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'microillustration success page modal':
                await this.modalSuccess.microIllustration.scrollIntoView();
                await this.modalSuccess.microIllustration.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date info success page modal':
                await this.modalSuccess.conteinerSimpleDate.scrollIntoView();
                await this.modalSuccess.conteinerSimpleDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'period info success page modal':
                await this.modalSuccess.conteinerSimplePeriod.scrollIntoView();
                await this.modalSuccess.conteinerSimplePeriod.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'total cfdi success page modal':
                await this.modalSuccess.conteinerSimpleTotalCfdi.scrollIntoView();
                await this.modalSuccess.conteinerSimpleTotalCfdi.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon notification message success':
                await this.modalSuccess.infoModalIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label info success':
                await this.modalSuccess.conteinerSimpleInfoMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'type cfdi success page modal':
                await this.modalSuccess.conteinerSimpleTypeCfdi.scrollIntoView();
                await this.modalSuccess.conteinerSimpleTypeCfdi.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info success page modal':
                await this.modalSuccess.conteinerSimpleInfo.scrollIntoView();
                await this.modalSuccess.conteinerSimpleInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'panel info success page modal':
                await this.modalSuccess.infoModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'toast notification lost connection':
                await this.toastNotification.lostConnection.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'btn exit success page':
                await this.modalSuccess.btnExit.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'link adjustment other cfdi':
                await this.modalSuccess.btnRequestCfdi.waitForDisplayed({timeout: config.wait.L});
                break;
            //Modal full field Operation
            case 'header icon error modal field operation':
                await this.modalFullFieldOperation.headerIcon.scrollIntoView();
                await this.modalFullFieldOperation.headerIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header error modal field operation':
                await this.modalFullFieldOperation.header.scrollIntoView();
                await this.modalFullFieldOperation.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'microillustration error modal field operation':
                await this.modalFullFieldOperation.microillustration.scrollIntoView();
                await this.modalFullFieldOperation.microillustration.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle error modal field operation':
                await this.modalFullFieldOperation.subtitle.scrollIntoView();
                await this.modalFullFieldOperation.subtitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text message error modal field operation':
                await this.modalFullFieldOperation.textMessage.scrollIntoView();
                await this.modalFullFieldOperation.textMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'btn exit error modal field operation':
                await this.modalFullFieldOperation.btnExit.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'btn called bbva error modal field operation':
                await this.modalFullFieldOperation.btnCallBbva.waitForDisplayed({timeout: config.wait.L});
                break;
            //Modal Full Operation Cancel
            case 'header error modal operation cancel':
                await this.modalFullOperationCancel.header.scrollIntoView();
                await this.modalFullOperationCancel.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header icon error modal operation cancel':
                await this.modalFullOperationCancel.headerIcon.scrollIntoView();
                await this.modalFullOperationCancel.headerIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'microillustration error modal operation cancel':
                await this.modalFullOperationCancel.microillustration.scrollIntoView();
                await this.modalFullOperationCancel.microillustration.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title error modal operation cancel':
                await this.modalFullOperationCancel.title.scrollIntoView();
                await this.modalFullOperationCancel.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle error modal operation cancel':
                await this.modalFullOperationCancel.subTtitle.scrollIntoView();
                await this.modalFullOperationCancel.subTtitle.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async fillRangeDatesPeriod() {
        await this.selectDatesPeriod('enero', 'initial');
        await this.selectDatesPeriod('agosto', 'end');
    }

    async closeModalPeriodWithOutCfdi(){
        await this.modalWithOutPeriodCfdis.titleBtn.waitForClickable({timeout: config.wait.L});
        await this.modalWithOutPeriodCfdis.titleBtn.click();
    }

    async selectRangeDatePeriod() {
        await this.fillRangeDatesPeriod();
        await this.selectPeriod();
    }

    async selectPeriod(){
        await this.stepTwo.btnSelectPeriod.waitForClickable({timeout: config.wait.L});
        await this.stepTwo.btnSelectPeriod.click();
    }

    async confirmStepTermsAndConditions(){
        await this.stepFour.checkBoxTermsAndConditions.waitForClickable({timeout: config.wait.L});
        await this.stepFour.checkBoxTermsAndConditions.click();
        await this.stepFour.btnTermsAndConditions.waitForClickable({timeout:config.wait.L});
        await this.stepFour.btnTermsAndConditions.click();
    }

    async postConfirmCancelationAndRebrandingCfdi(){
        await this.btnConfirmCancelationAndRegranding.waitForClickable({timeout: config.wait.L});
        await this.btnConfirmCancelationAndRegranding.click();
    }

    async adjustOtherCfdi(){
        await this.modalSuccess.btnRequestCfdi.waitForClickable({timeout: config.wait.L});
        await this.modalSuccess.btnRequestCfdi.click();
    }

    async attemptCancelationAndRebrandingCfdService() {
        await this.modalFieldOperation.btnModalFieldOperation.waitForClickable({timeout: config.wait.L});
        await this.modalFieldOperation.btnModalFieldOperation.click();
    }

    async atemptOperationGetService() {
        await this.modalOperationCancel.btnRetryOperation.waitForClickable({timeout: config.wait.L});
        await this.modalOperationCancel.btnRetryOperation.click();
    }

    async viewMoreCfdi() {
        await this.stepThree.btnViewMore.waitForDisplayed({timeout: config.wait.L});
        await this.stepThree.btnViewMore.waitForClickable({timeout: config.wait.L});
        await this.stepThree.btnViewMore.click();
    }

    async confirmStepCfdi() {
        await this.stepThree.btnContinue.waitForClickable({timeout: config.wait.L});
        await this.stepThree.btnContinue.click();
    }

    async selectOneProduct() {
        await this.stepOne.inputSelectProduct.selectOption({option: '[value="flx6kXGPHBbXHscFNobxkrhlPSE06j5h_ila8R4QrBc"]'});
        await this.stepOne.btnSelectProduct.waitForClickable({timeout: config.wait.L});
        await this.stepOne.btnSelectProduct.click();
    }

    async exitProcess() {
        await this.stepOne.inputSelectProduct.selectOption({option: '[value="flx6kXGPHBbXHscFNobxkrhlPSE06j5h_ila8R4QrBc"]'});
        await this.stepOne.btnSelectProduct.waitForClickable({timeout: config.wait.L});
        await this.modalExit.btnCloseIcon.waitForClickable({timeout: config.wait.L});
        await this.modalExit.btnCloseIcon.click();
        await this.modalExit.btnClose.waitForClickable({timeout: config.wait.L});
        await this.modalExit.btnClose.click();
    }

    async selectDatesPeriod(option = '', typePeriod = '') {
        let valueDate = '';
        switch (option.toLocaleLowerCase()) {
            case 'enero':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-01-01"]';
                } else {
                    valueDate = '[value="2026-01-31"]';
                }
                break;
            case 'febrero':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-02-01"]';
                } else {
                    valueDate = '[value="2026-02-28"]';
                }
                break;
            case 'marzo':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-03-01"]';
                } else {
                    valueDate = '[value="2026-03-31"]';
                }
                break;
            case 'abril':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-04-01"]';
                } else {
                    valueDate = '[value="2026-04-30"]';
                }
                break;
            case 'mayo':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-05-01"]';
                } else {
                    valueDate = '[value="2026-05-31"]';
                }
                break;
            case 'junio':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-06-01"]';
                } else {
                    valueDate = '[value="2026-06-30"]';
                }
                break;
            case 'julio':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-07-01"]';
                } else {
                    valueDate = '[value="2026-07-31"]';
                }
                break;
            case 'agosto':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-08-01"]';
                } else {
                    valueDate = '[value="2026-08-31"]';
                }
                break;
            case 'septiembre':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-09-01"]';
                } else {
                    valueDate = '[value="2026-09-30"]';
                }
                break;
            case 'octubre':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-10-01"]';
                } else {
                    valueDate = '[value="2026-10-31"]';
                }
                break;
            case 'noviembre':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-11-01"]';
                } else {
                    valueDate = '[value="2026-11-30"]';
                }
                break;
            case 'diciembre':
                if (typePeriod === 'initial'){
                    valueDate = '[value="2026-12-01"]';
                } else {
                    valueDate = '[value="2026-12-31"]';
                }
                break;
            default:
                throw new Error(`[ERR] The option ${option} is unknown. Cannot be selected.`);
        }
        if (typePeriod === 'initial') {
            await this.stepTwo.inputSelectDateFrom.selectOption({option: valueDate});
        } else {
            await this.stepTwo.inputSelectDateTo.selectOption({option: valueDate});
        }
    }
}

export default new ProfileUpdateRfc();
