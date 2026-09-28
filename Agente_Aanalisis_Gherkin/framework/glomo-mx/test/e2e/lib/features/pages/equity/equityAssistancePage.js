import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('EquityAssistancePage')
class EquityAssistancePage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-equityAssistance[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                acceptButton: '[data-tag-name="bbva-feature-equity-assistance-spherica"] [data-tag-name="modal-help"] .help-modal .modal-main .modal-footer .slot-footer [data-tag-name="bbva-button-default"].footer-button',
                indicatorAssistance: 'bbva-feature-equity-assistance-mx-spherica',
                callOffice: '[aria-label="Banquero 1"] #buttons span:nth-child(2) [data-tag-name="bbva-button-action"]',
                callLineEquity:'[aria-label="__BANQUERO__"] [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"][text="Llamar a Línea Patrimonial"]',
                callCellPhone: '[aria-label="__BANQUERO__"] #buttons span:nth-child(1) [data-tag-name="bbva-button-action"]',
                bankerTwo: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .group #tabs #tab-1',
                bankerOneDisable: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .group #tabs #tab-0[aria-selected="false"]',
                checkList: '[data-tag-name="home-page"] div.contain-select [data-tag-name="bbva-form-select"] div.options-container #list',
                listButton: '[data-tag-name="home-page"] div.contain-select [data-tag-name="bbva-form-select"] #button',
                imgContacBanker: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .panel div.card-contact [data-tag-name="bbva-clip-box"] [data-tag-name="bbva-clip-box-item"] #content',
                modalError: '#modal-error #helpModalTitle',
                labelError: '#modal-error #helpModalContent .slot-content',
                buttonError: 'bbva-feature-equity-assistance-mx-spherica #modal-error [data-tag-name="bbva-button-default"][text="equity-modal-error-button"]',
                outsideText1: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .panel .cubo .badge-online',
                badge1: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .panel .cubo [data-tag-name="bbva-badge-default"]',
                outsideText2: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .panelSecond .cubo .badge-online',
                badge2: '[data-tag-name="home-page"] [data-tag-name="bbva-tab-default"] .panelSecond .cubo [data-tag-name="bbva-badge-default"]',
            },
            requiredElements: [
                'indicatorAssistance',
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cell phone':
                await this.callCellPhone.specifySelector({placeholder: '__BANQUERO__', value}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call office':
                await this.callOffice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call equity':
                await this.callLineEquity.specifySelector({placeholder: '__BANQUERO__', value}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'indicator assistance':
                await this.indicatorAssistance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button banker one disable':
                await this.bankerOneDisable.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check list':
                await this.checkList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'img contact':
                await this.imgContacBanker.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error':
                await this.modalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label error':
                await this.labelError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button error':
                await this.buttonError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'outside text 1':
                await this.outsideText1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'badge 1':
                await this.badge1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'outside text 2':
                await this.outsideText2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'badge 2':
                await this.badge2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'banker one disabled':
                await this.bankerOneDisable.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'banker two':
                await this.bankerTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async callOfficeAssistance() {
        await (await this.callOffice.waitForClickable({timeout: config.wait.M})).click();
    }

    async callLineEquityAssistance() {
        await (await this.callLineEquity.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessBankerTwo() {
        await (await this.bankerTwo.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessListContract() {
        await (await this.listButton.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new EquityAssistancePage();
