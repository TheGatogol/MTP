import {page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page('increment')
class Increment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-increment[state="active"]',
            elements: {
                titleHeader: '#titleZone',
                iconMessage: '#cellsIconMessage',
                terms: '#contentNode',
                save: '#primaryBtn',
                header: CellsMoleculeHeaderSpherica,
                spinner: {
                    web: 'bbva-feature-credit-card-line-increase-mx [data-tag-name="bbva-progress-content"]',
                    isWithoutRoot: true,
                }
            },
            requiredElements: [
                'spinner'
            ]
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.titleHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card icon':
                await this.iconMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms advice':
                await this.terms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save':
                await this.save.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async acceptCreditLine() {
        await this.save.waitForDisplayed({timeout: config.wait.M});
        await this.terms.scrollIntoView();
        await this.save.click();
        await this.fillOtp('00246010');
    }
}

export default new Increment();
