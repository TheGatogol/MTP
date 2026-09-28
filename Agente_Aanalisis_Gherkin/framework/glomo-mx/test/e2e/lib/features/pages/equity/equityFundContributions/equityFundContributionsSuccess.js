import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class EquityFundContributionsSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'EquityFundContributionsSuccess',
            root: '#cells-template-equityContractsContributionSuccess[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                success: 'cells-successful-response-spherica.date-font-medium-italic.no-background-avatar.equity-contracts',
                headerSection: 'cells-successful-response-spherica #header-section',
                bodySection: 'cells-successful-response-spherica #body-section',
                bottomSection: 'cells-successful-response-spherica .actions',
                exitButton: 'cells-successful-response-spherica .actions div.buttons cells-st-button-spherica:nth-child(1) #primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success':
                await this.success.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header section':
                await this.headerSection.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'body section':
                await this.bodySection.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'bottom section':
                await this.bottomSection.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'exit button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new EquityFundContributionsSuccess();
