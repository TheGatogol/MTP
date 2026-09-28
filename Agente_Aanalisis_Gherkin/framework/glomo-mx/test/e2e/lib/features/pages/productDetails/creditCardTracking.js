import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class CreditCardTracking extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-creditCardTracking[state="active"]',
            elements: {
                header: '#pageTrackingTDC [data-tag-name="bbva-header-main"] .header',
                headerShow: '.modal-detail-tracking #helpModalHeader',
                helpIcon: '.modal-detail-tracking .link',
                backButton: '#pageTrackingTDC [data-tag-name="bbva-header-main"] #return',
                status: {
                    properties: {root: '#progress [role="group"]'},
                    cardApplicationDate: '[class="content completed request-card  "] [data-tag-name="bbva-type-date"]',
                    manufacturingCustomizationDate: '[class="content completed made-card  "] [data-tag-name="bbva-type-date"]',
                    sentDate: '[class="content completed delivery-card  "] [data-tag-name="bbva-type-date"]',
                    delivered: {
                        properties: {root: '[class="content default sending-card  "] .main-content'},
                        date: '[data-tag-name="bbva-type-date"]',
                        showbutton: '[data-tag-name="bbva-type-link"]',
                    },
                    deliveredCompleted: { 
                        properties: {root: '[class="content completed sending-card  "]'},
                        date: '[data-tag-name="bbva-type-date"]',
                        showbutton: '[data-tag-name="bbva-type-link"]',
                    }
                },
                backButtonShow: '.modal-detail-tracking #helpModalHeader #btn-close',
                showAdressButton: '.modal-detail-tracking .options-right',
                disableAdressButton: '.modal-detail-tracking .options-right [aria-label="bbva-feature-card-tracking-detail-hide-address"]',
                adressText: '.modal-detail-tracking .address',
                callButton: '#more-detail [slot="slot-content"] [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-link"]',
                modalError: {
                    properties: {root: '#warningModal .help-modal .modal-main'},
                    icon: '#helpModalTitle slot .title-icon',
                    text: '.modal-container .modal-content-wrapper #helpModalContent',
                    retryButton: '.modal-footer .footer-button',
                    cancelButton: '.modal-footer [class="footer-button link"]'
                },
                modalInformation: {
                    properties: {root: 'bbva-feature-card-tracking-mx #modalInformationTracking'},
                    icon: '.help-modal .modal-main .modal-container .modal-content-wrapper #helpModalTitle',
                    header: '[data-tag-name="bbva-header-main"][text="bbva-feature-card-tracking-category-header-pending"]',
                    acceptButton: '#btn-close'
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value}) {
        const deliveredCompleted = global.user.__givenCriteria.includes('delivered');
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show button':
                await this.status[`delivered${deliveredCompleted ? 'Completed' : ''}`].showbutton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header show':
                await this.headerShow.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button show':
                await this.backButtonShow.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show adress button':
                await this.showAdressButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disable adress button':
                await this.disableAdressButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'adress text':
                await this.adressText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call button':
                await this.callButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date card application':
                await this.status.cardApplicationDate.waitForDisplayed({
                    timeout: config.wait.S,
                    reverse: value === 'not visible'
                });
                break;
            case 'date manufacturing customization':
                await this.status.manufacturingCustomizationDate.waitForDisplayed({
                    timeout: config.wait.S,
                    reverse: value === 'not visible'
                });
                break;
            case 'date sent':
                await this.status.sentDate.waitForDisplayed({timeout: config.wait.S, reverse: value === 'not visible'});
                break;
            case 'date delivered':
                await this.status[`delivered${deliveredCompleted ? 'Completed' : ''}`].date.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible'
                });
                break;
            case 'icon error':
                await this.modalError.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text error':
                await this.modalError.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry error':
                await this.modalError.retryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel error':
                await this.modalError.cancelButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon information':
                await this.modalInformation.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header information':
                await this.modalInformation.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.modalInformation.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async exitScreen() {
        await (await this.backButton.waitForClickable(config.wait.M)).click();
    }

    async accessShow() {
        await (await this.status.delivered.showbutton.waitForClickable(config.wait.M)).click();
    }

    async showAddress() {
        await (await this.showAdressButton.waitForClickable(config.wait.L)).click();
    }

    async showInformationHelp() {
        await (await this.helpIcon.waitForClickable(config.wait.L)).click();
    }

    async disableAddress() {
        await (await this.disableAdressButton.waitForClickable(config.wait.M)).click();
    }
}

export default new CreditCardTracking();
