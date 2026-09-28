import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class KeyRecoveryUpdate extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-keyRecoveryUpdate[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                backButton: 'cells-molecule-header #btnLeft',
                enterNcurrentPassword:'#user-input-pwd #input',
                enterNewPassword:'#user-input-new-pwd #input',
                confirmNewpassword:'#user-input-new-pwd-repeat #input',
                continueButton: '#continueButton',
                cancelButton: '#cancelButton',
                helpButton: '#helpButtonCurrentPwd',
                closeButton: '#header #closeButtonn',
                passwordRequirements:'div.password-requirements',
                securityMessage:'cells-icon-message #notInline',
                numberOfIncorrectCharacters:'#user-input-pwd cells-icon-message',
                newNumberOfIncorrectCharacters:'#user-input-new-pwd cells-icon-message',
                singConnector: CellsSignOperationModal,
                dialogOperations: GlomoAlertManager,
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                backButton: 'cells-molecule-header-spherica #btnLeft',
                securityMessage:'cells-icon-message-spherica #notInline',
                numberOfIncorrectCharacters:'#user-input-pwd cells-icon-message-spherica',
                newNumberOfIncorrectCharacters:'#user-input-new-pwd cells-icon-message-spherica',
                singConnector: CellsSignOperationModalSpherica,
                dialogOperations: GlomoAlertManagerSpherica,
            },
            requiredElements: ['header'],
        });
    }

    async selecButtonHelp(){
        await this.helpButton.waitForDisplayed({timeout: config.wait.M});
        await this.helpButton.click();
    }

    async enterPassword(password){
        await this.enterNcurrentPassword.waitForDisplayed({timeout: config.wait.M});
        await this.enterNcurrentPassword.setValue({value: password});
        await this.securityMessage.click();
    }

    async enterTheNewPassword(newpassword){
        await this.enterNewPassword.waitForDisplayed({timeout: config.wait.M});
        await this.enterNewPassword.setValue({value: newpassword});
        await this.securityMessage.click();
    }

    async confirmTheNewPassword(cnewpassword){
        await this.confirmNewpassword.waitForDisplayed({timeout: config.wait.M});
        await this.confirmNewpassword.waitForEnabled({timeout: config.wait.M});
        await this.confirmNewpassword.setValue({value: cnewpassword});
    }

    async cancelPasswordChange(){
        await this.cancelButton.waitForDisplayed({timeout: config.wait.M});
        await this.cancelButton.click();
    }

    async continueChangePassword(){
        await this.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async confirmChangePassword(otp){
        await this.fillOtp(otp);
    }

    async retryOperative(times){
        times = parseInt(times);
        let numberTry=1;
        do {
            if(numberTry === times){
                await this.continueChangePassword();
                await this.confirmChangePassword('11111111');
            }
            else{
                await this.continueChangePassword();
                await this.confirmChangePassword('11111111');
                await currentPage.confirmDialog({isConfirmed: true});
            }
            numberTry++;
        }while (numberTry <= times);
    }

    async changePassword(){
        for (let i = 0; i < 2; i++) {
            await this.continueChangePassword();
            await this.confirmChangePassword('11111111');
            await currentPage.confirmDialog({isConfirmed: true});
            if(i === 1){
                await this.continueChangePassword();
            }
        }
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'password requirements':
                await this.passwordRequirements.waitForDisplayed();
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'current password':
                await this.enterNcurrentPassword.waitForEnabled({reverse: (value === 'disabled')});
                break;
            case 'new password':
                await this.enterNewPassword.waitForEnabled({reverse: (value === 'disabled')});
                break;
            case 'confirm new password':
                await this.confirmNewpassword.waitForEnabled({reverse: (value === 'disabled')});
                break;
            case 'cancel button':
                await this.cancelButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForEnabled({reverse: (value === 'disabled')});
                break;
            case 'number of incorrect characters':
                await this.numberOfIncorrectCharacters.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new number of incorrect characters':
                await this.newNumberOfIncorrectCharacters.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header otp':
                await this.singConnector.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button otp':
                await this.singConnector.requestNewSmsLink.waitForDisplayed({timeout: config.wait.M, reverse: this.isSpherica()});
                break;
            case 'main text otp':
                await this.singConnector.insertSmsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button otp':
                await this.singConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button otp':
                await this.singConnector.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async _modalElementValidation({item} = {})  {
        switch (item.toLowerCase()) {
            case 'header title modal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'considerations':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'cancel button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON});
                break;
            case 'icon error':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.PARAGRAPH_ICON});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }
}
export default new KeyRecoveryUpdate();
