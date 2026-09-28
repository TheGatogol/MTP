import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class MortgageCertificateCancellation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mortgageCertificateCancellationSuccess[state="active"]',
            elements: {
                header: 'bbva-header-main-spherica',
                closeBtn: 'button#btn-close',
                panelInfo: 'bbva-panel-info-spherica',
                date: 'bbva-type-text-spherica',
                notificationMessage: 'bbva-notification-message-spherica',
                exitButton: 'bbva-panel-button-fixed #bbva-button-default#confirmButton'
            },
            requiredElements: [
                'header', 'date'
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
            case 'panel info':
                await this.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new MortgageCertificateCancellation();
