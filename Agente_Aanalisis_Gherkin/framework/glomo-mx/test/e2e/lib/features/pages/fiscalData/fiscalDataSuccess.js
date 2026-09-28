import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class FiscalDataSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-requestFiscalDataSuccess[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                pageIcon: 'cells-successful-response-spherica #header-section cells-atom-icon-spherica iron-icon',
                mainTitle: 'cells-successful-response-spherica #header-section',
                mainTitleDate: 'div[data-selector="cells-successful-response-main-title"] .main-title-date',
                infoText: 'cells-successful-response-spherica #header-section',
                rfcLabel: '#body-section ul li[data-selector="RFC"] .key',
                rfcValue: '#body-section ul li[data-selector="RFC"] .value',
                fullNameLabel: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-full-name"] .key',
                fullNameValue: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-full-name"] .value',
                fiscalRegimenLabel: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-fiscal-regime"] .key',
                fiscalRegimenValue: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-fiscal-regime"] .value',
                cfdiLabel: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-cfdi"] .key',
                cfdiValue: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-cfdi"] .value',
                addressLabel: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-fiscal-address"] .key',
                addressValue: '#body-section ul li[data-selector="user-documentation-tax-data-successful-response-operation-fiscal-address"] .value',
                messageText: '#body-section .key-value-musk-container',
                mailAdress: '#body-section .key-value-musk-container cells-molecule-mask-spherica .wrapper .number',
                exitButton: '#primaryBtn'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'successful tax data registration page icon':
                await this.pageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page main title date':
                await this.mainTitleDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page info text':
                await this.infoText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page rfc label':
                await this.rfcLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page rfc value':
                await this.rfcValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page full name label':
                await this.fullNameLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page full name value':
                await this.fullNameValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page fiscal regime label':
                await this.fiscalRegimenLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page fiscal regime value':
                await this.fiscalRegimenValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page cfdi label':
                await this.cfdiLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page cfdi value':
                await this.cfdiValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page address label':
                await this.addressLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page address value':
                await this.addressValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page message info':
                await this.messageText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page mail address':
                await this.mailAdress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful tax data registration page exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new FiscalDataSuccess();
