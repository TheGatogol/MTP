import AbstractGlomoPage from '../abstract-glomo-page';
import CellsModalSelector from '../../components/cells-modal-selector';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsSummaryView from '../../components/cells-summary-view';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class UpgradeAccountRestrictionsModular extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-upgradeAccountRestrictionsModular[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                modalList: CellsModalSelector,
                summaryView: CellsSummaryView,
                indicator: 'cells-successful-response #body-section',
                questions: '#body-section ul',
                acceptButton: '#primaryBtn',
            },
            requiredElements: ['indicator'],
        });
    }

    async confirmUpgradeAccount() {
        await this.acceptButton.waitForClickable({timeout: config.wait.M});
        await this.acceptButton.click();
    }
    
    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'indicator':
                await this.indicator.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'questions':
                await this.questions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'primary button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new UpgradeAccountRestrictionsModular();
