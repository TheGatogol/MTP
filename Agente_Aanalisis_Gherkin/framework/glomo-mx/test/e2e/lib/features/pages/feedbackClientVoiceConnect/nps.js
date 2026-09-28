import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('nps')
class Nps extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-__cross[state="cached"] feedback-client-voice-connect-gl',
            elements: {
                welcome: {
                    properties: {
                        root: '[name="help-modal-pre-form"]',
                    },
                    header: '#helpModalHeader',
                    exitButton: '#helpModalHeader #btn-close',
                    ratingButton:
                        '[data-tag-name="bbva-button-group-item"][value="__VALUE__"]',
                },
                npsform: {
                    properties: {
                        root: '[name="help-modal-main-form"]',
                    },
                    header: '#helpModalHeader',
                    exitButton: '#helpModalHeader #btn-close',
                    ratingButton:
                        '[data-tag-name="bbva-button-group-item"][value="__VALUE__"]',
                    selectedRatingButton:
                        '[data-tag-name="bbva-button-group-item"][value="__VALUE__"][checked][aria-checked="true"]',
                    buttonSubmit:
                        '[data-tag-name="bbva-button-default"][text="Enviar"]',
                },
                thankYou: {
                    properties: { root: '[name="help-modal-thank-you"]' },
                    headerThankYou: '#helpModalHeader',
                    exitButton: 'bbva-header-main #btn-close',
                    microillustrationThankYou:
                        '[slot="slot-content"] [icon-status="success"]',
                    titleThankYou: 'div bbva-type-text[text="¡Listo!"] p',
                    descriptionThankYou:
                        'div bbva-type-text[text="Gracias por tus respuestas."] p',
                },
                errorPage: {
                    properties: { root: '[modal-type="error"]' },
                    headerErrorPage: '#helpModalHeader',
                    exitErrorPage: '#helpModalHeader #btn-close',
                    microillustrationErrorPage:
                        '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    titleErrorPage:
                        '#helpModalTitle [data-tag-name="bbva-type-text"] h2',
                    descriptionErrorPage:
                        '#helpModalContent [data-tag-name="bbva-type-text"][text="Por el momento la operación no está disponible. Inténtalo de nuevo."]',
                },
                header: '[data-tag-name="bbva-help-modal"][visible] #helpModalHeader',
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({ item = {}, checked = '' }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header welcome':
                await this.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating buttons selected to selected rating 0':
                await this._validateSelectedRatingButton(0, checked);
                break;
            case 'rating buttons selected to selected rating 1':
                await this._validateSelectedRatingButton(1, checked);
                break;
            case 'rating buttons selected to selected rating 2':
                await this._validateSelectedRatingButton(2, checked);
                break;
            case 'rating buttons selected to selected rating 3':
                await this._validateSelectedRatingButton(3, checked);
                break;
            case 'rating buttons selected to selected rating 4':
                await this._validateSelectedRatingButton(4, checked);
                break;
            case 'rating buttons selected to selected rating 5':
                await this._validateSelectedRatingButton(5, checked);
                break;
            case 'rating buttons selected to selected rating 6':
                await this._validateSelectedRatingButton(6, checked);
                break;
            case 'rating buttons selected to selected rating 7':
                await this._validateSelectedRatingButton(7, checked);
                break;
            case 'rating buttons selected to selected rating 8':
                await this._validateSelectedRatingButton(8, checked);
                break;
            case 'rating buttons selected to selected rating 9':
                await this._validateSelectedRatingButton(9, checked);
                break;
            case 'rating buttons selected to selected rating 10':
                await this._validateSelectedRatingButton(10, checked);
                break;
            case 'header npsform':
                await this.npsform.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button npsform':
                await this.npsform.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'submit button npsform':
                await this.npsform.buttonSubmit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header thankyou':
                await this.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou':
                await this.thankYou.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou':
                await this.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou':
                await this.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou':
                await this.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header errorpage':
                await this.errorPage.headerErrorPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit errorpage':
                await this.errorPage.exitErrorPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro errorpage':
                await this.errorPage.microillustrationErrorPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title errorpage':
                await this.errorPage.titleErrorPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description errorpage':
                await this.errorPage.descriptionErrorPage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0],
                });
        }
    }

    async _validateSelectedRatingButton(value, checked) {
        await this.npsform.selectedRatingButton.specifySelector('__VALUE__', value).waitForAttribute({attribute:'aria-checked', value: checked});
    }

    async submitNps() {
        await this.npsform.buttonSubmit.waitForClickable({timeout: config.wait.M});
        await this.npsform.buttonSubmit.click();
    }

    async onRateNps(selectedRate) {
        await this.welcome.ratingButton.specifySelector('__VALUE__', selectedRate).waitForClickable({timeout: config.wait.M});
        await this.welcome.ratingButton.specifySelector('__VALUE__', selectedRate).click();
    }

    async closeOperative(screen) {
        switch (screen) {
            case 'welcome':
                await this.welcome.exitButton.waitForClickable();
                await this.welcome.exitButton.click();
                break;
            case 'nps form':
                await this.npsform.exitButton.waitForClickable();
                await this.npsform.exitButton.click();
                break;
            case 'thank you':
                await this.thankYou.exitButton.waitForClickable();
                await this.thankYou.exitButton.click();
                break;
            default:
                throw new Error(`The screen assertion in page: ${screen} is not implemented or not valid`);
        }
    }

    async closeErrorModal() {
        await this.errorPage.headerErrorPage.waitForDisplayed({timeout: config.wait.M});
        await this.errorPage.exitErrorPage.click();
    }
}

export default new Nps();
