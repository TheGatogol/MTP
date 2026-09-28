import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

const inputCases = {
    dots: 'example...mail@mail.com',
    blanks: 'exam  ple@mail.com',
    format: 'examplemail.com',
    both: 'davidoctavio.mora.contractor@bbva.com'
};

@page()
class UpdateEmail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-updateEmailPage[state="active"]',
            elements: {
                header: ' bbva-header-main',
                closeBtn: 'button#btn-right-primary',
                instructionText: 'bbva-text:nth-child(4)',
                mailInput: 'bbva-form-field:nth-child(5) input',
                mailInputError: 'bbva-form-field:nth-child(5) div.message.error',
                confirmInput: 'bbva-form-field:nth-child(6) input',
                confirmMailInputError: 'bbva-form-field:nth-child(6) div.message.error',
                notificationMessage: 'bbva-notification-message',
                headerCategory: 'bbva-header-category',
                noticeText: 'bbva-text:nth-child(9)',
                noticeLink: 'bbva-link',
                panelButton: 'bbva-panel-button-fixed',
                addButton: 'bbva-panel-button-fixed #button',
                deleteEmailBtn: 'bbva-form-field:nth-child(5) div [data-tag-name=bbva-button-icon]',
                deleteEmailConfirmBtn: 'bbva-form-field:nth-child(6) div [data-tag-name=bbva-button-icon]',
            },
            requiredElements: [
                'mailInput', 'confirmInput'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'instruction text':
                await this.instructionText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mail input':
                await this.mailInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm input':
                await this.confirmInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header category':
                await this.headerCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notice text':
                await this.noticeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notice link':
                await this.noticeLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel button':
                await this.panelButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async fillInput(arg) {
        await this.mailInput.waitForDisplayed({timeout: config.wait.M});
        await this.mailInput.click();
        switch (arg.toLowerCase()) {
            case 'format':
                await this.mailInput.setValue({value: inputCases[arg]});
                break;
            case 'dots':
                await this.mailInput.setValue({value: inputCases[arg]});
                break;
            case 'blanks':
                await this.mailInput.setValue({value: inputCases[arg]});
                break;
            case 'valid':
                await this.mailInput.setValue({value: inputCases[arg]});
                break;
            case 'both':
                await this.mailInput.setValue({value: inputCases[arg]});
                await this.confirmInput.click();
                await this.confirmInput.setValue({value: inputCases[arg]});
                await this.mailInput.click();
                break;
            case 'discord':
                await this.mailInput.setValue({value: inputCases['both']});
                await this.confirmInput.click();
                await this.confirmInput.setValue({value: inputCases['format']});
                await this.mailInput.click();
                break;
            default:
                throw new Error(` ${arg} input case is invalid or doesn't exists`);
        }
        await this.confirmInput.click();
    }

    async isErrorMessageShowed(value) {
        if (value === 'first') {
            await this.mailInputError.waitForDisplayed({timeout: config.wait.M});
        } else {
            await this.confirmMailInputError.waitForDisplayed({timeout: config.wait.M});
        }
        await this.addButton.waitForProperty({property: 'disabled'});
    }

    async showPrivacyNotice() {
        await this.noticeLink.waitForDisplayed({timeout: config.wait.M});
        await this.noticeLink.click();
        await this.instructionText.scrollIntoView();
    }

    async addEmail() {
        await this.addButton.waitForClickable({timeout: config.wait.M});
        await this.addButton.click();
    }

    async confirmOperation() {
        const {otp} = global.user;
        await this.fillOtp(otp);
    }

    async deleteEmailAddress() {
        await this.deleteEmailBtn.waitForClickable({timeout: config.wait.M});
        await this.deleteEmailBtn.click();
    }

    async deleteEmailConfirm() {
        await this.deleteEmailConfirmBtn.waitForClickable({timeout: config.wait.M});
        await this.deleteEmailConfirmBtn.click();
    }

    async closePage(){
        await this.closeBtn.waitForClickable({timeout: config.wait.M});
        await this.closeBtn.click();
    }
}

export default new UpdateEmail();
