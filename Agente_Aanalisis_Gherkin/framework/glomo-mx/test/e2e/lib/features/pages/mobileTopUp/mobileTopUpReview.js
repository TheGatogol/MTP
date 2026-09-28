import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class MobileTopUpReview extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-mobileTopUpReview[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                successfulResponse: 'cells-successful-response',
                headerSuccess: 'cells-molecule-header.header--dark-success',
                headerPending: 'cells-molecule-header.header--core',
                headerSectionSuccess: 'cells-successful-response section.info.success',
                headerSectionPending: 'cells-successful-response section.info.core',
                title: 'cells-successful-response #header-section h2.title',
                bodySection: 'cells-successful-response #body-section ul.otherInfo',
                additionalInfo:'cells-successful-response #body-section ul.additional-info li cells-icon-message',
                shareButton: 'cells-successful-response #body-section cells-operations-list ul li[data-selector="share"] button'
            },
            requiredElements: [
                'header',
                'successfulResponse'
            ],
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                successfulResponse: 'cells-successful-response-spherica',
                headerSection: 'cells-successful-response-spherica section.info',
                title: 'cells-successful-response-spherica #header-section h2.title',
                bodySection: 'cells-successful-response-spherica #body-section ul.otherInfo',
                additionalInfo:'cells-successful-response-spherica #body-section ul.additional-info li cells-icon-message-spherica',
                shareButton: 'cells-successful-response-spherica #body-section cells-operations-list-spherica ul li[data-selector="share"] button',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                ],
            }
        });

    }

    async shareReceipt() {
        await this.shareButton.waitForClickable({timeout: config.wait.M});
        await this.shareButton.click();
    }

    async _validateTitle(value, params) {
        await this.title.waitForDisplayed(params);
        const expected = {
            'success': this.isSpherica() ? 'Recarga exitosa' : 'Operación exitosa',
            'pending': 'Solicitud en proceso'
        };
        await this.title.waitForText({text:expected[value], exactMatch:false});
    }

    async _screenValidation({item, value}) {
        const params = {
            timeout: config.wait.M,
            reverse: value === 'not visible'
        };
        switch (item.toLowerCase()) {
            case 'header success':
                await this.headerSuccess.waitForDisplayed(params);
                break;
            case 'header pending':
                await this.headerPending.waitForDisplayed(params);
                break;
            case 'header section success':
                await this.headerSectionSuccess.waitForDisplayed(params);
                break;
            case 'header section pending':
                await this.headerSectionPending.waitForDisplayed(params);
                break;
            case 'title':
                await this._validateTitle(value, params);
                break;
            case 'body section':
                await this.bodySection.waitForDisplayed(params);
                break;
            case 'additional info':
                await this.additionalInfo.waitForDisplayed(params);
                break;
            case 'share button':
                await this.shareButton.waitForDisplayed(params);
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header section':
                await this.headerSection.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new MobileTopUpReview();
