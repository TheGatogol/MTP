import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('upgradeCustomer')
class UpgradeCustomer extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-upgradeCustomer[state="active"]',
            elements: {
                helpModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            closeButton: '#helpModalHeader #btn-close',
                            title: '#title',
                            paragraph: '#paragraph',
                            privacyTerm: '#noticePrivacyLink',
                            swornDeclaration: '#swornInfo',
                            firstCheckbox: '#checkOne #input',
                            secondCheckbox: '#checkTwo #input',
                            disabledButton: '[data-tag-name="bbva-button-default"][disabled]',
                        }
                    }
                ],
                halfModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="half-modal"]',
                        additionalElements: {
                            title: '#helpModalHeader #text',
                            closeButton: '#helpModalHeader #btn-close',
                            description: '#helpModalContent',
                            cancelBtn: '[data-tag-name="bbva-type-link"]',
                            swornInfo: '#info',
                            swornFirstItem: '#bullet1Item',
                            swornSecondItem: '#bullet2Item',
                            swornThirdItem: '#bullet3Item',
                        }
                    }
                ],
                fullModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="full-modal"]',
                        additionalElements: {
                            requiredINE: '#bullet1Item [data-tag-name="bbva-list-bullet"]',
                            requiredVoucher: '#bullet2Item [data-tag-name="bbva-list-bullet"]',
                            errorIcon: '[data-tag-name="bbva-clip-microillustration"][microillustration="error"]'
                        }
                    }
                ],
                errorModal: {
                    modal: '[data-tag-name="half-modal"] [data-tag-name="bbva-help-modal"][modal-type="warning"]',
                    retryBtn: '[data-tag-name="half-modal"] [data-tag-name="bbva-help-modal"][modal-type="warning"] .slot-footer [data-tag-name="bbva-button-default"]',
                    exitBtn: '[data-tag-name="half-modal"] [data-tag-name="bbva-help-modal"][modal-type="warning"] .slot-footer [data-tag-name="bbva-type-link"]'
                }
            },
            elementsSpherica: {
                halfModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            cancelBtn: '[data-tag-name="bbva-button-default"][variant="link"]',
                        }
                    }
                ],
                errorModal: {
                    modal: '[data-tag-name="half-modal"] [data-tag-name="bbva-help-modal"][modal-type="error"]',
                    retryBtn: '[data-tag-name="half-modal"] [data-tag-name="bbva-help-modal"][modal-type="error"] .slot-footer [data-tag-name="bbva-button-default"][text="Reintentar"]',
                    exitBtn: '[data-tag-name="half-modal"] [data-tag-name="bbva-help-modal"][modal-type="error"] .slot-footer [data-tag-name="bbva-button-default"][variant="link"]'
                }
            },
            requiredElements: ['__root'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.helpModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.helpModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'paragraph':
                await this.helpModal.additionalElements.paragraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy term':
                await this.helpModal.additionalElements.privacyTerm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn declaration':
                await this.helpModal.additionalElements.swornDeclaration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first checkbox':
                await this.helpModal.additionalElements.firstCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second checkbox':
                await this.helpModal.additionalElements.secondCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled button':
                await this.helpModal.additionalElements.disabledButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.helpModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy title':
                await this.halfModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy description':
                await this.halfModal.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy close button':
                await this.halfModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning title':
                await this.halfModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning close':
                await this.halfModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning exit':
                await this.halfModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning continue':
                await this.halfModal.additionalElements.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn title':
                await this.halfModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn description':
                await this.halfModal.additionalElements.swornInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn first item':
                await this.halfModal.additionalElements.swornFirstItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn second item':
                await this.halfModal.additionalElements.swornSecondItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn third item':
                await this.halfModal.additionalElements.swornThirdItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sworn close button':
                await this.halfModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header otp':
                await this.signModal.smsPasswordLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title otp':
                this.isSpherica() ? await this.signModal.smsIcon.waitForDisplayed({timeout:config.wait.M}) :
                    await this.signModal.smsImage.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'full continue button':
                if (!this.isSpherica()) {
                    await this.fullModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'full modal header':
                if (!this.isSpherica()) {
                    await this.fullModal.header.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'required ine':
                await this.fullModal.additionalElements.requiredINE.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'required voucher':
                await this.fullModal.additionalElements.requiredVoucher.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error icon':
                if (!this.isSpherica()) {
                    await this.fullModal.additionalElements.errorIcon.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'error modal':
                if (!this.isSpherica()) {
                    await this.errorModal.modal.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'error modal retry':
                if (!this.isSpherica()) {
                    await this.errorModal.retryBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'error modal exit':
                if (!this.isSpherica()) {
                    await this.errorModal.exitBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async confirmDialog() {
        await (await this.helpModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async tryToCloseModal() {
        await (await this.helpModal.additionalElements.closeButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async fillOtp(code) {
        await super.fillOtp(code);
    }

    async enterModal(modal) {
        switch (modal.toLowerCase()) {
            case 'privacy':
                await (await this.helpModal.additionalElements.privacyTerm.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'sworn declaration':
                await (await this.helpModal.additionalElements.swornDeclaration.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${modal} is not available`);
        }
    }

    async close(modal) {
        switch (modal.toLowerCase()) {
            case 'closes it':
                await (await this.halfModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'privacy':
            case 'sworn declaration':
                await (await this.halfModal.additionalElements.closeButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${modal} is not available`);
        }
    }

    async acceptTheCheckbox(checkbox) {
        switch (checkbox.toLowerCase()) {
            case 'processing of documents':
                await (await this.helpModal.additionalElements.firstCheckbox.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'account upgrade':
                await (await this.helpModal.additionalElements.secondCheckbox.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${checkbox} is not available`);
        }
    }

    async accessToProceedings() {
        await this.acceptTheCheckbox('processing of documents');
        await this.acceptTheCheckbox('account upgrade');
        await this.confirmDialog();
        await this.fillOtp('11111111');
    }

    async setLocalStorage(key, val) {
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: [key, val]
        });
    }

    async retryError() {
        await this.errorModal.retryBtn.waitForClickable({timeout: config.wait.M});
        await this.errorModal.retryBtn.click();
    }

}

export default new UpgradeCustomer();
