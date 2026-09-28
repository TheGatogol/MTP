import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
@page('contractProductsSectionDataAuthorization')
class ContractProductsSectionDataAuthorization extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-contractProductsSectionDataAuthorization[state="active"]',
            elements: {
                iconCloseBtn:' #avoid #btn-close',
                img: 'bbva-clip-microillustration img',
                file: '[data-tag-name="list-file"]',
                checkBoxIAuthorize: '[name="input-template"] .box',
                buttonConsult: 'bbva-type-link[role="button"]',
                buttonAuthorize:'bbva-button-default[ambient="primary-alt"]',
                authorizationFullModal:{
                    properties: {root:'[id-modal="authorizationFullModal"]'},
                    header: '#helpModalHeader',
                    iconCloseBtn:'#btn-close',
                    title: '#helpModalTitle',
                    optionWorkHistory:'#workHistory',
                    textWorkHistory:'#workHistory bbva-type-text.content-accordion',
                    optionSocioeconomicHistory:'#socioeconomicHistory',
                    textSocioeconomicHistory:'#socioeconomicHistory bbva-type-text.content-accordion',
                },
                privacyNoticeModal:{
                    properties:{root:'[id-modal="privacyNoticeModal"]'},
                    header: '#helpModalHeader',
                    iconCloseBtn:'#btn-close',
                    text: 'bbva-type-text[font-type="body"]'
                },
                cautionModal:{
                    properties:{root:'[id-modal="cautionModal"]'},
                    header: '#helpModalHeader',
                    iconCloseBtn:'#btn-close',
                    icon: '#helpModalTitle',
                    exitButton: 'bbva-button-default[text="Salir"]',
                    continueButton: 'bbva-button-default.footer-button.link',
                },
                successful:{
                    properties:{root:'bbva-help-modal[visible]'},
                    header: '#helpModalHeader',
                    iconCloseBtn:'#btn-close',
                    panelSuccessful:'[data-tag-name="panel-process-receipt"]',
                    panelFolio:'.panel-container-folio',
                    panelDate:'.panel-content-date',
                }
            },
            requiredElements: [
                'img'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'image':
                await this.img.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'file':
                await this.file.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox authorize':
                await this.checkBoxIAuthorize.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button consult':
                await this.buttonConsult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button authorize':
                await this.buttonAuthorize.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal header':
                await this.authorizationFullModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal close':
                await this.authorizationFullModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal title':
                await this.authorizationFullModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal option work history':
                await this.authorizationFullModal.optionWorkHistory.scrollIntoView({block: 'center'});
                await this.authorizationFullModal.optionWorkHistory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal option work history text':
                await this.authorizationFullModal.textWorkHistory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal option socioeconomic history':
                await this.authorizationFullModal.optionSocioeconomicHistory.scrollIntoView({block: 'center'});
                await this.authorizationFullModal.optionSocioeconomicHistory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization full modal option socioeconomic history text':
                await this.authorizationFullModal.textSocioeconomicHistory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice modal header':
                await this.privacyNoticeModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice modal close':
                await this.privacyNoticeModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice modal text':
                await this.privacyNoticeModal.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'caution modal header':
                await this.cautionModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'caution modal close':
                await this.cautionModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'caution modal icon':
                await this.cautionModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'caution modal exit buton':
                await this.cautionModal.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'caution modal continue button':
                await this.cautionModal.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful header':
                await this.successful.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful close':
                await this.successful.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful panel':
                await this.successful.panelSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful panel folio':
                await this.successful.panelFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful panel date':
                await this.successful.panelDate.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openHelpModal() {
        await this.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
        await this.iconCloseBtn.click();
    }

    async accessDashboard(){
        await this.cautionModal.exitButton.waitForDisplayed({timeout: config.wait.M});
        await this.cautionModal.exitButton.click();
    }

    async enterConditionsOfAuthorization() {
        await this.file.waitForDisplayed({timeout: config.wait.M});
        await this.file.click();
    }

    async enterWorkHistoryAndSocioeconomicHistory(){
        await this.authorizationFullModal.optionWorkHistory.waitForDisplayed({timeout: config.wait.M});
        await this.authorizationFullModal.optionWorkHistory.click();
        await this.authorizationFullModal.optionSocioeconomicHistory.waitForDisplayed({timeout: config.wait.L});
        await this.authorizationFullModal.optionSocioeconomicHistory.click();
    }

    async closedConditionsOfAuthorization(){
        await this.authorizationFullModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
        await this.authorizationFullModal.iconCloseBtn.click();
    }

    async enterPrivacyNoticeModal() {
        await this.buttonConsult.waitForDisplayed({timeout: config.wait.M});
        await this.buttonConsult.click();
    }

    async closedPrivacyNoticeModal() {
        await this.privacyNoticeModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
        await this.privacyNoticeModal.iconCloseBtn.click();
    }

    async completeAuthorization() {
        await this.checkBoxIAuthorize.waitForDisplayed({timeout: config.wait.M});
        await this.checkBoxIAuthorize.click();
        await this.buttonAuthorize.waitForDisplayed({timeout: config.wait.M});
        await this.buttonAuthorize.click();
        await this.fillOtp('12345678');
    }

    async acceptAuthorization() {
        await this.checkBoxIAuthorize.waitForDisplayed({timeout: config.wait.M});
        await this.checkBoxIAuthorize.click();
    }

    async enterAfterAccessingTheInformationModals(){
        await this.enterConditionsOfAuthorization();
        await this.enterWorkHistoryAndSocioeconomicHistory();
        await this.closedConditionsOfAuthorization();
        await this.enterPrivacyNoticeModal();
        await this.closedPrivacyNoticeModal();
    }

}
export default new ContractProductsSectionDataAuthorization();
