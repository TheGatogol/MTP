import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
@page('ocPaymentPlanCardErrorPage')
class OcPaymentPlanCardError extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocPaymentPlanCardErrorPage[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                panelInfo: '[data-tag-name="bbva-panel-info"] .content [data-tag-name="bbva-text"].title',
                confirmButtons: 'cells-confirm-buttons .actions cells-st-button #primaryBtn',
                microillustration: '[data-tag-name="bbva-panel-info"] .image > span > svg',
                description: '[data-tag-name="bbva-panel-info"] .content [data-tag-name="bbva-text"].description'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'microillustration':
                await this.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understand button':
                await this.confirmButtons.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer not available':
                await this.panelInfo.waitForText({text: 'Oferta no disponible'});
                break;
            case 'offer out of schedule':
                await this.panelInfo.waitForText({text: 'Fuera de horario'});
                break;
            case 'error on service':
                await this.panelInfo.waitForText({text: 'Error en el servicio'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new OcPaymentPlanCardError();
