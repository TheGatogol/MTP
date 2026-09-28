import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class AccessAndSignaturesDashboard extends AbstractGlomoPage{
    constructor(){
        super({
            root: '#cells-template-securityAccess[state="active"]',
            elements: {
                firstScreenSwitch: 'bbva-form-toggle#bbvaFormToggleAccess',
                headerDashboard: 'bbva-header-main#securityAccess h1#heading bbva-text#text span.text',
                textFirstScreenSwitch: 'bbva-form-toggle#bbvaFormToggleAccess div.container span.label',
                textTokenMovil:'bbva-text#textOne p.text.lines',
                changeButton:'bbva-button-default div bbva-text span',
                backButton:'#securityAccess button#btn-left-primary',
                passwordChangedSuccessfully:'cells-bottom-modal-message #modal #body',
                userAndPassword:'#textOne',
                accessDefault:'#textTwo',
                firms:' bbva-tab-default #tab-1',
                //modalAccessAndMethods
                buttonClose: 'bbva-help-modal#methodsAccess div.content .transition-container div.help-modal div.modal-header [data-tag-name="bbva-header-main"]#helpModalHeader header div.header-icons.right-group button#btn-right-primary.icon.primary',
                btnConfiguration: 'bbva-help-modal#bbvaHelpModalPage .transition-container div.help-modal [data-tag-name="bbva-button-default"].footer-button',
                btnAcepted: 'bbva-help-modal#fido .transition-container div.modal-footer bbva-button-default',
                btnAtAnotherTime: 'bbva-help-modal#bbvaHelpModalPage .transition-container  div.modal-footer [data-tag-name="bbva-link"]',
                headerMethod:'bbva-help-modal#methodsAccess [data-tag-name="bbva-header-main"]',
                image: 'bbva-help-modal#methodsAccess bbva-panel-info.dimentions-image div.image',
                //modalConfigurationBiometrics
                headerModalConfiguration: '#helpModal bbva-text#text.text-wrapper',
                buttonModalConfiguration: 'bbva-help-modal#bbvaHelpModalPage div.help-modal div.modal-footer [data-tag-name="bbva-button-default"]',
                link : 'bbva-help-modal#bbvaHelpModalPage div.help-modal [data-tag-name="bbva-link"]',
            },
            elementsSpherica: {
                firstScreenSwitch: 'bbva-form-toggle-spherica:not([hidden])',
                headerDashboard: 'bbva-header-main-spherica#securityAccess div#heading bbva-type-text#text h1.text',
                textFirstScreenSwitch: 'bbva-form-toggle-spherica:not([hidden]) span.label',
                textTokenMovil: 'div[slot="content-0"] bbva-aggregation-app-permissions-spherica .text.lines:not(.left)',
                changeButton: 'bbva-aggregation-app-permissions-spherica bbva-type-link',
                backButton: '#securityAccess button#btn-back',
                passwordChangedSuccessfully: 'cells-bottom-modal-message-spherica #modal #body',
                userAndPassword: 'bbva-aggregation-app-permissions-spherica .permission-title p.text',
                accessDefault: 'bbva-aggregation-app-permissions-spherica span.text',
                firms: 'bbva-tab-default-spherica #tab-1',
                buttonClose: 'bbva-help-modal-spherica#methodsAccess div.content .transition-container div.help-modal div.modal-header [data-tag-name="bbva-header-main"]#helpModalHeader header div.header-icons.right-group button#btn-close',
                btnAcepted: 'bbva-help-modal-spherica#fido .transition-container div.modal-footer bbva-button-default',
                btnAtAnotherTime: 'bbva-help-modal-spherica#bbvaHelpModalPage .transition-container  div.modal-footer [data-tag-name="bbva-link"]',
                headerMethod:'bbva-help-modal-spherica#methodsAccess [data-tag-name="bbva-header-main"]',
                image: 'bbva-help-modal-spherica#methodsAccess bbva-panel-info-spherica',
                buttonModalConfiguration: 'bbva-help-modal-spherica#bbvaHelpModalPage div.help-modal div.modal-footer [data-tag-name="bbva-button-default"]',
                link : 'bbva-help-modal-spherica#bbvaHelpModalPage div.help-modal div.modal-footer [data-tag-name="bbva-button-default"].link',
            },
            requiredElements: [
                'firstScreenSwitch', 'headerDashboard'
            ],
        });
    }
    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header text':
                await this.headerDashboard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'switch':
                await this.textFirstScreenSwitch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
                await this.textTokenMovil.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header configuration modal text':
                await this.headerModalConfiguration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button':
                await this.buttonModalConfiguration.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'blue link':
                await this.link.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'user and password':
                await this.userAndPassword.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'access default':
                await this.accessDefault.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'firms':
                await this.firms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'password changed successfully':
                await this.passwordChangedSuccessfully.waitForExist({timeout: config.wait.M});
                break;
            case 'header modal':
                await this.headerMethod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image modal':
                await this.image.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goChangePassword(){
        await this.changeButton.waitForDisplayed({timeout: config.wait.M});
        await this.changeButton.click();
    }

    async closeFirstModal() {

        await this.buttonClose.waitForClickable({timeout: config.wait.L});
        await this.buttonClose.click();
    }

    async turnOnTheSwitch() {
        await this.firstScreenSwitch.waitForDisplayed({timeout: config.wait.L});
        await this.firstScreenSwitch.click();
    }

    async goConfiguration() {
        await this.btnConfiguration.waitForDisplayed({timeout: config.wait.L});
        await this.btnConfiguration.click();
    }

    async goAcepted() {
        await this.btnAcepted.waitForDisplayed({timeout: config.wait.L});
        await this.btnAcepted.waitForClickable({timeout: config.wait.L});
        await this.btnAcepted.click();
    }

    async goAtAnotherTime(){
        await this.btnAtAnotherTime.waitForDisplayed({timeout: config.wait.XL});
        await this.btnAtAnotherTime.waitForClickable({timeout: config.wait.XL});
        await this.btnAtAnotherTime.click();
    }

}
export default new AccessAndSignaturesDashboard();
