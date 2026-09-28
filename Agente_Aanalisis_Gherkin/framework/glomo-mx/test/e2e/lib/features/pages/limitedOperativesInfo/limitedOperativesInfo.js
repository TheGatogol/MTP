import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsModalAlert from '../../components/cells-modal-alert';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page()
class LimitedOperativesInfo extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-limitedOperativesInfo[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                modalAlert: {
                    component: {
                        ComponentClass: CellsModalAlert,
                    },
                },
                essentialModeTitle: '#standin_skeleton1 .title',
                essentialModeImage: '#standin_skeleton1 .icon-container #imageAsTitle',
                standinDescriptionParagraph1: '#standin_skeleton1 .mainDescription',
                standinDescriptionParagraph2: '#standInParagraph .text',
                standinBtn: 'cells-confirm-buttons cells-st-button #primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'essential mode info title':
                await this.essentialModeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode info image':
                await this.essentialModeImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode info description':
                await this.standinDescriptionParagraph1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode info paragraph':
                await this.standinDescriptionParagraph2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode info button':
                await this.standinBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async showStandinDescription() {
        await this.standinDescriptionParagraph1.waitForDisplayed({timeout: config.wait.M});
        await this.standinBtn.waitForDisplayed({timeout: config.wait.M});
        await this.standinBtn.click();
    }
}
export default new LimitedOperativesInfo();
