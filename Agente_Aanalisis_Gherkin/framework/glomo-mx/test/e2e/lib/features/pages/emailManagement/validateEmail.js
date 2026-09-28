import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class ValidateEmail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-validateEmailPage[state="active"]',
            elements: {
                signConnector: {
                    component: {
                        ComponentClass: CellsSignOperationModal,
                        args: {
                            root: `${CellsSignOperationModal._baseRoot.web}`,
                        }
                    }
                },
                header: ' bbva-header-main',
                closeBtn: 'button#btn-right-primary',
                panelInfo: 'bbva-panel-info',
                timeStamp: 'bbva-text:nth-child(5)',
                detailText: 'bbva-text:nth-child(6)',
                folioTitle: 'bbva-text:nth-child(7)',
                folioNumber: 'bbva-text:nth-child(8)',
                panelButton: 'bbva-panel-button-fixed',
                validateButton: 'bbva-panel-button-fixed #button',
                exitButton: 'bbva-panel-button-fixed #footerLink',
                deleteCode: 'cells-sign-operation-modal #btnMainIcon',

            },
            requiredElements: [
                'panelInfo', 'validateButton'
            ],
            elementsSpherica: {
                signConnector: {
                    component: {
                        ComponentClass: CellsSignOperationModalSpherica,
                        args: {
                            root: `${CellsSignOperationModalSpherica._baseRoot.web}`
                        }
                    }
                }
            }
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
            case 'panel info':
                await this.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'time stamp':
                await this.timeStamp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail text':
                await this.detailText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio title':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio number':
                await this.folioNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel button':
                await this.panelButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header security':
                await this.signConnector.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'main title':
                await this.signConnector.mainTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'timer':
                await this.signConnector.circularTimer.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text additional':
                await this.signConnector.smsPasswordInputField.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'password input':
                await this.signConnector.textAdditionalTimer.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'sms info':
                await this.signConnector.smsInfoMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'valide button':
                await this.signConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async leaveValidation() {
        await this.exitButton.waitForClickable({timeout: config.wait.M});
        await this.exitButton.click();
    }

    async showTimer() {
        await this.validateButton.waitForClickable({timeout: config.wait.M});
        await this.validateButton.click();
    }

    async validateMailCode() {
        const {otp} = global.user;
        await this.showTimer();
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(otp);
        await this.signConnector.confirmPassword();
    }

    async deleteOtp() {
        const {otp} = global.user;
        await this.signConnector.setPassword(otp);
        await this.deleteCode.waitForClickable({timeout: config.wait.L});
        await this.deleteCode.click();
    }

    async validateMailCharacters(otp) {
        await this.showTimer();
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(otp);
    }

    async closeDialog() {
        await this.dialogOperations.cancelBtn.waitForClickable({timeout: config.wait.L});
        await this.dialogOperations.cancelBtn.click();
    }

}

export default new ValidateEmail();
