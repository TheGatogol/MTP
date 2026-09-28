import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';

@page()
class CodiEnrollment extends AbstractGlomoPage {
    constructor() {
        super({
            root:'#cells-template-codiEnrollment[state="active"]',
            elements: {
                title: 'bbva-header-main-spherica#codi-refactor-enrollment-page-header',
                dataEnrollTxt: 'bbva-header-category-spherica#codi-refactor-enrollment-page-category-1 div.header-category',
                clientNameTxt: 'bbva-list-simple-spherica#client-full-name div.wrapper',
                clientPhoneTxt: 'bbva-list-simple-spherica#client-phone div.wrapper',
                enrollMessage: 'bbva-notification-message-spherica#codi-enrollment-page-notification-message',
                accountEnrollTxt: 'bbva-header-category-spherica#codi-refactor-enrollment-page-category-2',
                accountList: 'bbva-header-category-spherica#codi-refactor-enrollment-page-category-3',
                termsConditionTxt: '#codi-refactor-enrollment-page-category-4',
                termsConditionLink: 'bbva-list-file-spherica#terms_and_conditions_pdf div.box-container',
                termsConditionChkbox: '#terms_checkbox span.box',
                continueBtn:' bbva-button-default-spherica#make-enrollment-button',
                closeEnrollBtn: 'bbva-header-main#codi-refactor-enrollment-page-header button#btn-right-primary',
                seeAllLink: 'bbva-header-category#codi-refactor-enrollment-page-category-3 div.header-category bbva-link.link',
                modalHeader: '#codi-refactor-enrollment-page-modal-title #header',
                modalBody: '#codi-refactor-enrollment-page-modal-title #modal',
                modalCloseBtn: '#codi-refactor-enrollment-page-modal-title .buttons-container #closeButton',
                exitModalBtn: '#codi-refactor-enrollment-page-modal-title cells-bottom-modal#modal button#closeButton.btn--transparent.btn-close',
                dataManager: 'bbva-manager-codi-onboarding',
                signModal: CellsSignOperationModal,
            },
            requiredElements:['title'],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'enroll text':
                await this.dataEnrollTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enroll info':
                await this.accountEnrollTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name text':
                await this.clientNameTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone text':
                await this.clientPhoneTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enroll message':
                await this.enrollMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'see all':
                await this.seeAllLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enroll accounts':
                await this.accountList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions link':
                await this.termsConditionLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions checkbox':
                await this.termsConditionChkbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await (value ? this.continueBtn.waitForEnabled({timeout: config.wait.M}) : this.continueBtn.waitForDisabled({timeout: config.wait.M}));
                break;
            case 'accounts header':
                await this.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts body':
                await this.modalBody.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.modalCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async checkTermsAndConditions() {
        await this.termsConditionChkbox.scrollIntoView();
        await this.termsConditionChkbox.waitForDisplayed({timeout: config.wait.M});
        await this.termsConditionChkbox.click();
        await this.enrollMessage.scrollIntoView({block: 'start'});
    }

    async setDeviceInfo() {
        const { deviceInfo } = global.user;
        await this.dataManager.execute({
            script: (data) => this.deviceInfo = data,
            args: [deviceInfo]
        });
    }

    async enrollCodi() {
        await this.termsConditionChkbox.scrollIntoView();
        await this.termsConditionChkbox.waitForDisplayed({timeout: config.wait.M});
        await this.termsConditionChkbox.click();
        await this.setDeviceInfo();
        await this.continueBtn.waitForClickable({timeout: config.wait.M});
        await this.continueBtn.click();
        await this.signModal.waitForDisplayed({timeout: config.wait.L});
    }

    async exitEnrollCodi() {
        await this.closeEnrollBtn.waitForDisplayed({timeout: config.wait.M});
        await this.closeEnrollBtn.click();
    }

    async seeAll() {
        await this.seeAllLink.waitForDisplayed({timeout: config.wait.M});
        await this.seeAllLink.click();
    }

    async closeSeeAll() {
        await this.modalCloseBtn.waitForDisplayed({timeout: config.wait.M});
        await this.modalCloseBtn.click();
    }

    async goBack() {
        await this.exitModalBtn.waitForDisplayed({timeout: config.wait.M});
        await this.exitModalBtn.click();
    }

}

export default new CodiEnrollment();
