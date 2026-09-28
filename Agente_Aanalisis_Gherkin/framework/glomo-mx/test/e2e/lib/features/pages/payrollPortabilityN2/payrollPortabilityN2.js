import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsModalSelector from '../../components/cells-modal-selector';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsSummaryView from '../../components/cells-summary-view';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class PayrollPortabilityN2 extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-upgradeN2N4[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    },
                },
                dialogOperations: [GlomoAlertManager],
                modalList: {
                    component: {
                        ComponentClass: CellsModalSelector,
                    },
                },
                summaryView: {
                    component: {
                        ComponentClass: CellsSummaryView,
                    },
                },
                indicator: '#upgradeAccountModularPanelInfo',
                headerTitle: '[data-tag-name="bbva-text"][text="upgrade-account-n2-n3-panel-heading"]',
                continueButtonDisable: '#upgradeAccountModularButton[aria-disabled="true"]',
                moduleButtonEdit: '#upgradeAccountModularButton',
            },
            requiredElements: ['indicator'],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel info':
                await this.indicator.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'module button':
                await this.moduleButtonEdit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button disable':
                await this.continueButtonDisable.waitForDisplayed({
                    timeout: config.wait.S,
                    reverse: !(value === 'enable')
                });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PayrollPortabilityN2();
