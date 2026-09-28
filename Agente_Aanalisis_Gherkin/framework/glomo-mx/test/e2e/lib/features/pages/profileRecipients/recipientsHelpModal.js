import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class RecipientsHelpModal extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-recipientsInit[state="active"]',
            elements: {
                welcomeModal:
                {
                    icon: '[data-tag-name="bbva-help-modal"]#modal-recipient [data-tag-name="bbva-core-icon"].title-icon img[draggable="false"]',
                    recomendation: '[data-tag-name="bbva-help-modal"]#modal-recipient .text-content-recipient-modal',
                    firstDescription: '[data-tag-name="bbva-help-modal"]#modal-recipient div.content ul li:nth-child(1)',
                    lastDescription: '[data-tag-name="bbva-help-modal"]#modal-recipient div.content ul li:nth-child(2)',
                    privacyNotice: '[text="Consulta el Aviso de Privacidad"]',
                    continue: '[data-tag-name="bbva-help-modal"]#modal-recipient div.modal-footer [role="button"]:nth-child(1)',
                },
                privacyNotice: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            description: '#modal div.paragraph-template div:nth-child(17)'
                        }
                    }
                ],
            },
            elementsSpherica: {
                privacyNotice: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            description: '#modal div.paragraph-template div:nth-child(17)'
                        }
                    }
                ],
            },
            requiredElements: [
                'welcomeModal.icon'
            ]
        });
    }
    async goToBeneficiaries() {
        await (await (await this.welcomeModal.continue.scrollIntoView({block: 'end'})).waitForClickable()).click();
    }
    async goToPrivacyNotice() {
        await (await (await this.welcomeModal.privacyNotice.scrollIntoView({block: 'end'})).waitForClickable()).click();
    }
    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'welcome modal icon':
                await this.welcomeModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recomendation':
                await this.welcomeModal.recomendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.welcomeModal.firstDescription.waitForDisplayed({timeout: config.wait.M});
                await this.welcomeModal.lastDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy link':
                await this.welcomeModal.privacyNotice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                await this.welcomeModal.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy icon':
                await this.privacyNotice.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy description':
                await this.privacyNotice.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy continue':
                await this.privacyNotice.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new RecipientsHelpModal();
