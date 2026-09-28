import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class ClarificationsTracking extends AbstractGlomoPage{
    constructor() {
        super({
            root: '#cells-template-clarificationsTrackingCare[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                folio: '.fullBackgroundWhite h1.header-bold',
                storeNameKey: '.fullBackgroundWhite .clarifications-content:nth-of-type(1) cells-key-values-spherica .key',
                storeNameValue: '.fullBackgroundWhite .clarifications-content:nth-of-type(1) cells-key-values-spherica .value',
                claimAmountKey: '.fullBackgroundWhite .clarifications-content:nth-of-type(2) cells-key-values-spherica .key',
                claimAmountValue: '.fullBackgroundWhite .clarifications-content:nth-of-type(2) cells-key-values-spherica .value cells-atom-amount-spherica',
                reazonClaimKey: '.fullBackgroundWhite .clarifications-content:nth-of-type(3) cells-key-values-spherica .key',
                reazonClaimValue: '.fullBackgroundWhite .clarifications-content:nth-of-type(3) cells-key-values-spherica .value',
                operationStatus: '.fullBackgroundWhite .clarifications-content.successful-key cells-key-values-spherica .key',
                clarificationResolutionStatus: '.fullBackgroundWhite .clarifications-content',
                datailStatusInfoBox: 'cells-aggregation-badge-list-spherica .content-wrapper cells-icon-message-spherica'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'store name':
                await this.storeNameKey.waitForDisplayed({timeout: config.wait.M});
                await this.storeNameValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'claim amount':
                await this.claimAmountKey.waitForDisplayed({timeout: config.wait.M});
                await this.claimAmountValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reazon claim':
                await this.reazonClaimKey.waitForDisplayed({timeout: config.wait.M});
                await this.reazonClaimValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation status':
                await this.operationStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification resloution status':
                await this.clarificationResolutionStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail status info box':
                await this.datailStatusInfoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new ClarificationsTracking();
