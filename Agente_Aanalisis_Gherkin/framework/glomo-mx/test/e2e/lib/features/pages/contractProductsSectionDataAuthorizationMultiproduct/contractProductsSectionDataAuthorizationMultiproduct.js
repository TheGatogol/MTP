import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('contractProductsSectionDataAuthorizationMultiproduct')
class ContractProductsSectionDataAuthorizationMultiproduct extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-contractProductsSectionDataAuthorizationMultiproduct[state="active"]',
            elements: {
                modalScreen: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="app-info-structure-contract-products-section-data-authorization-multiproduct-mx"]',
                        additionalElements: {
                            linkCreditHistory: '.list-file-credit-history-container',
                            checkBoxCreditHistory: '.authorization-credit-history-checkbox #input',
                            linkDemographicHistory: '.list-file-demographic-history-container',
                            checkBoxDemographicHistory: '.authorization-demographic-history-checkbox #input',
                            linkPrivacy: '.list-file-privacy-notice-container [data-tag-name="bbva-type-text"]',
                            btnAuthorize: '[data-tag-name="authorization-data"] [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                creditConditionsModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="contract-products-section-modal-default"]',
                        additionalElements: {
                            btnClose: '#btn-close',          
                            content: '#helpModalContent',
                        }
                    }
                ],
                demographicConditionsModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="contract-products-section-modal-default"]',
                        additionalElements: {
                            btnClose: '#btn-close',
                            content: '#helpModalContent',
                        }
                    }
                ],
                privacyNoticeModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="contract-products-section-modal-default"]',
                        additionalElements: {
                            btnClose: '#btn-close',
                            header: '#heading',
                            content: '#helpModalContent',
                        }
                    }
                ],
                exitAuthorizationModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="contract-products-section-modal-default"]',
                        additionalElements: {
                            btnConfirmationExit: '.footer-button[text="Salir"]',
                            btnReturnAuthorization: '[class="footer-button link"]',
                            imgWarning: '#helpModalTitle.modal-title'
                        }
                    }
                ], 
                successAuthorizationScreen: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="app-info-structure-contract-products-section-data-authorization-multiproduct-mx"]',
                        additionalElements: {
                            imgSuccessAuthorization: '[data-tag-name="successful-authorization"] panel-process-receipt div bbva-clip-box',
                            titleSuccessAuthorization: '[data-tag-name="successful-authorization"] .panel-process-receipt [font-type="title-secondary"]',
                            dateSuccessAuthorization: '[data-tag-name="successful-authorization"] panel-container div div.panel-content-date',
                        }
                    }
                ], 
                btnClose: '[id="avoid"] [data-id="iconsRight"]',
            },
            requiredElements: [
                'btnClose'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'credit history link':
                await this.modalScreen.additionalElements.linkCreditHistory.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'demographic history link':
                await this.modalScreen.additionalElements.linkDemographicHistory.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'credit history checkbox':
                await this.modalScreen.additionalElements.checkBoxCreditHistory.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'demographic history checkbox':
                await this.modalScreen.additionalElements.checkBoxDemographicHistory.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy link':
                await this.modalScreen.additionalElements.linkPrivacy.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'authorize button':
                await this.modalScreen.additionalElements.btnAuthorize.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'credit modal close button':
                await this.creditConditionsModal.additionalElements.btnClose.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'credit modal title':
                await this.creditConditionsModal.titleText.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'credit modal content':
                await this.creditConditionsModal.additionalElements.content.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'demographic modal close button':
                await this.demographicConditionsModal.additionalElements.btnClose.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'demographic modal title':
                await this.demographicConditionsModal.titleText.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'demographic modal content':
                await this.demographicConditionsModal.additionalElements.content.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy modal close button':
                await this.privacyNoticeModal.additionalElements.btnClose.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy modal header':
                await this.privacyNoticeModal.additionalElements.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy modal content':
                await this.privacyNoticeModal.additionalElements.content.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'image warning':
                await this.exitAuthorizationModal.additionalElements.imgWarning.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button exit authorization':
                await this.exitAuthorizationModal.additionalElements.btnConfirmationExit.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button return authorization':
                await this.exitAuthorizationModal.additionalElements.btnReturnAuthorization.waitForDisplayed({timeout:config.wait.M});
                break;    
            case 'image success authorization':
                await this.successAuthorizationScreen.additionalElements.imgSuccessAuthorization.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title success authorization':
                await this.successAuthorizationScreen.additionalElements.titleSuccessAuthorization.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'date success authorization':
                await this.successAuthorizationScreen.additionalElements.dateSuccessAuthorization.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessCreditHistoryModal(){
        await this.modalScreen.additionalElements.linkCreditHistory.waitForDisplayed({timeout:config.wait.M});
        await this.modalScreen.additionalElements.linkCreditHistory.click();
    }

    async accessDemographicHistoryModal(){
        await this.accessAndCloseConditionsModal('credit history conditions');
        await this.demographicHistoryCheckbox();
        await this.accessDemographicHistoryLink();
    }

    async demographicHistoryCheckbox(){
        await this.modalScreen.additionalElements.checkBoxDemographicHistory.waitForDisplayed({timeout:config.wait.M});
        await this.modalScreen.additionalElements.checkBoxDemographicHistory.click();
    }

    async selectCheckBoxCreditHistory(){
        await this.modalScreen.additionalElements.checkBoxCreditHistory.waitForDisplayed({timeout:config.wait.M});
        await this.modalScreen.additionalElements.checkBoxCreditHistory.click();
    }

    async selectOption(option) {
        switch (option) {
            case 'complete':
                await this.selectCheckBoxCreditHistory();
                await this.demographicHistoryCheckbox();
                break;
            case 'credit history':
                await this.selectCheckBoxCreditHistory();
                break;
            case 'employment and sociodemographic history':
                await this.demographicHistoryCheckbox();
                break;
            default:
                throw new Error(`${option} option is not available to navigate to`);
        }
    }

    async accessDemographicHistoryLink(){
        await this.modalScreen.additionalElements.linkDemographicHistory.waitForDisplayed({timeout:config.wait.M});
        await this.modalScreen.additionalElements.linkDemographicHistory.click();
    }

    async accessPrivacyModal(){
        await this.selectCheckBoxCreditHistory();
        await this.accessPrivacyModalAnalytics();
    }

    async accessPrivacyModalAnalytics(){
        await this.modalScreen.additionalElements.linkPrivacy.waitForDisplayed({timeout:config.wait.M});
        await this.modalScreen.additionalElements.linkPrivacy.click();
    }    

    async authorizationConfirmation(){
        await this.modalScreen.additionalElements.btnAuthorize.waitForDisplayed({timeout:config.wait.M});
        await this.modalScreen.additionalElements.btnAuthorize.click();
        await this.fillOtp('12345678');
    }

    async exitAuthorization(){
        await this.btnClose.waitForDisplayed({timeout:config.wait.M});
        await this.btnClose.click();
    }

    async exitConfirmsAuthorization(){
        await this.exitAuthorizationModal.additionalElements.btnConfirmationExit.waitForDisplayed({timeout:config.wait.M});
        await this.exitAuthorizationModal.additionalElements.btnConfirmationExit.click();
    }

    async returnAuthorization(){
        await this.exitAuthorizationModal.additionalElements.btnReturnAuthorization.waitForDisplayed({timeout:config.wait.M});
        await this.exitAuthorizationModal.additionalElements.btnReturnAuthorization.click();
    }

    async accessAndCloseConditionsModal(conditions){
        switch(conditions){
            case 'credit history conditions':
                await this.accessCreditHistoryModal();
                await this.creditConditionsModal.additionalElements.btnClose.waitForDisplayed({timeout:config.wait.M});
                await this.creditConditionsModal.additionalElements.btnClose.click();
                break;
            case 'demographic history conditions':
                await this.accessDemographicHistoryModal();
                await this.demographicConditionsModal.additionalElements.btnClose.waitForDisplayed({timeout:config.wait.M});
                await this.demographicConditionsModal.additionalElements.btnClose.click();
                break;
            case 'privacy conditions':
                await this.accessPrivacyModal();
                await this.privacyNoticeModal.additionalElements.btnClose.waitForDisplayed({timeout:config.wait.M});
                await this.privacyNoticeModal.additionalElements.btnClose.click();
                break;
            default:
                throw new Error(`The step '${conditions}' is unknown. Cannot be processed.`);

        }
    }

}
export default new ContractProductsSectionDataAuthorizationMultiproduct();
