import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';

class CardlessWithdrawalCommerce extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardlessWithdrawalCommerce[state="active"]',
            elements: {
                content: 'bbva-widget-cardless-with-drawal-commerce-qr',
                titleError: 'bbva-widget-cardless-with-drawal-commerce-qr [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error"] [data-tag-name="bbva-help-modal"] #helpModalHeader #text',
                closeBtnModal: 'bbva-widget-cardless-with-drawal-commerce-qr [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error"] [data-tag-name="bbva-help-modal"] #helpModalHeader #btn-right-primary',
                errorImgModal: 'bbva-widget-cardless-with-drawal-commerce-qr [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error"] [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-panel-info"] div.image span',
                titleInfoModal: 'bbva-widget-cardless-with-drawal-commerce-qr [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error"] [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"]',
                textModal: 'bbva-widget-cardless-with-drawal-commerce-qr [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error"] [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-text"] p',
                btnModalError: 'bbva-widget-cardless-with-drawal-commerce-qr [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error"] [data-tag-name="bbva-help-modal"]  div section div div.modal-main div.modal-footer slot div bbva-button-default',
            },
            elementsSpherica: {
                content: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica',
                titleError: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error-spherica"] [data-tag-name="bbva-help-modal"] #helpModalTitle bbva-type-text h2.text',
                closeBtnModal: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error-spherica"] [data-tag-name="bbva-help-modal"] #helpModalHeader #cardless-withdrawal-error-modal-btn-close',
                errorImgModal: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error-spherica"] [data-tag-name="bbva-help-modal"] #helpModalTitle > slot > bbva-type-icon',
                titleInfoModal: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error-spherica"] [data-tag-name="bbva-help-modal"] #title-text h2',
                textModal: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica [data-tag-name="bbva-modal-cardless-with-drawal-commerce-qr-error-spherica"] [data-tag-name="bbva-help-modal"] #helpModalContent > div > slot > div > bbva-type-text p.text',
            },
            requiredElements: ['content'],
        });
    }

    async _screenValidation({item} = {}) {

        switch (item.toLowerCase()) {
            case 'header title':
                await this.titleError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtnModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error image':
                await this.errorImgModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.titleInfoModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
                await this.textModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button':
                await this.btnModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });

        }
    }
}
export default new CardlessWithdrawalCommerce();
