import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class LoanAndMortgageInformationPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-loanAndMortgageInformation[state="active"]',
            elements: {
                creditApplicationScreen: '[text="Solicitud de crédito"]',
                backButton: '#mortgage-tracking-transition-container bbva-header-main button',
                mortgageCreditContainer: '[text="Crédito hipotecario"]',
                informationalContainer: '[data-tag-name="bbva-notification-message"]',
                informationalContainerInformation: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-text"], [data-tag-name="bbva-notification-message"] span',
                applicationStagesLabel: '[text="Etapas de la solicitud"]',
                applicationStagesWithStatus: '[text="Completada"], [text="En espera"], [text="En revisión"], [text="En proceso"], [text="Declinado"], [text="Pendiente"]',
                consultProgressLink: '#mortgage-tracking-multi-folio-item-0 bbva-type-link',
                requestDetailLink: '#mortgage-tracking-progress-panel bbva-panel-container bbva-type-link',
                requestDetailModal: {
                    properties: {
                        root: '#mortgage-tracking-loan-detail-modal '
                    },
                    screen: '#helpModalHeader #text',
                    closeButton: '#helpModalHeader #btn-close',
                    generalLabel: '#loan-detail-panel-title-general',
                    creditOfferLabel: '#loan-detail-panel-title-credit-offer',
                    containers: 'bbva-panel-container'
                }
            },
            requiredElements: ['root'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'credit application screen':
                await this.creditApplicationScreen.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mortgage credit container':
                await this.mortgageCreditContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'informational container':
                await this.informationalContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'informational container information':
                await this.informationalContainerInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'application stages label':
                await this.applicationStagesLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'application stages with status':
                await this.applicationStagesWithStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request detail screen':
                await this.requestDetailModal.screen.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request detail close button':
                await this.requestDetailModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request detail general label':
                await this.requestDetailModal.generalLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request detail general container':
                await this.waitForElementsExist(this.requestDetailModal.containers);
                await (await this.requestDetailModal.containers.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request detail credit offer label':
                await this.requestDetailModal.creditOfferLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request detail credit offer container':
                await this.waitForElementsExist(this.requestDetailModal.containers);
                await (await this.requestDetailModal.containers.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectedFolio() {
        await this.consultProgressLink.waitForDisplayed({timeout: config.wait.M});
        await this.consultProgressLink.click();
    }

    async openRequestDetail() {
        await this.requestDetailLink.waitForDisplayed({timeout: config.wait.M});
        await this.requestDetailLink.click();
    }
}

export default new LoanAndMortgageInformationPage();
