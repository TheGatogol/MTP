import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class SecurityTipsDetail extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-securityTipsDetailPage[state="active"]',
            elements: {
                closeBtn: 'header btn--transparent.btn-close',
                lineaBbva: 'cells-molecule-link-icon.icon-size-24.icon-size-26.cells-molecule-link-icon--block',
                btnAccepted: 'button#acceptButton',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            btnAccept: 'cells-st-button button#acceptButton',
                        }
                    }
                ],
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async acceptInfoTip() {
        await this.dialogOperations.additionalElements.btnAccept.waitForDisplayed({timeout: config.wait.XL});
        await this.dialogOperations.additionalElements.btnAccept.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'button closed':
                await this.closeBtn.waitForDisplayed();
                break;
            case 'bbva line':
                await this.lineaBbva.waitForDisplayed();
                break;
            case 'button accepted':
                await this.btnAccepted.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new SecurityTipsDetail();
