import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class EquityTransfersPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-transfers[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica #titleZone',
                steps: {
                    transferOrigin: 'cells-step-product-selector-spherica#transfer-origin[collapsed], cells-step-product-selector-spherica#transfer-origin[active], cells-step-product-selector-spherica#transfer-origin',
                    transferDestination: '#transfer-destination',
                    transferAmount: '#transfer-amount',
                }
            },
            requiredElements: [
                'steps.transferOrigin'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'select product step':
                await this.steps.transferOrigin.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transfer destination step':
                await this.steps.transferDestination.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transfer amount step':
                await this.steps.transferAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new EquityTransfersPage();
