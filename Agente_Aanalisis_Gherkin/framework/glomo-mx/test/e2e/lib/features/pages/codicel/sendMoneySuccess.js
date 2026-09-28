import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class SendMoneySuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codicelPeerToPeerTransferReview[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                // Header section elements
                headerImage: '#header-section .image-div[data-selector="cells-successful-response-header-image"]',
                headerIcon: '#header-section cells-atom-icon-spherica',
                mainTitle: '#header-section h2.title[data-selector="cells-successful-response-title-text"]',
                successfullAmountLabel: '#header-section p[data-selector="cells-successful-response-amount-label"]',
                successfullAmount: '#header-section cells-atom-amount-spherica[data-selector="cells-successful-response-charge-amount"]',

                // Top info list elements
                topInfoList: 'ul[data-selector="cells-successful-response-top-info"]',

                // Message section
                messageContainer: '.message-container',
                iconMessage: 'cells-icon-message-spherica',
                banxicoLink: 'cells-st-link-spherica a',

                // Operations list
                operationsList: 'cells-operations-list-spherica[data-selector="cells-successful-response-operations"]',
            },

            requiredElements: [
                'header',
                'mainTitle',
                'successfullAmount'
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'header image':
                await this.headerImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header icon':
                await this.headerIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfull amount label':
            case 'amount label':
                await this.successfullAmountLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfull amount':
            case 'amount':
                await this.successfullAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'top info list':
            case 'info list':
                await this.topInfoList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
            case 'icon message':
                if(value === 'interbancary'){
                    await this.iconMessage.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'banxico link':
            case 'link':
                if(value === 'interbancary'){
                    await this.banxicoLink.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'operations list':
                if(value === 'interbancary'){
                    await this.operationsList.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async closePage(button) {
        switch(button.toLowerCase()) {
            case 'x':
                await this.header.actionRight();
                break;
            default:
                throw new Error(`Button '${button}' not found.`);
        }
    }
}

export default new SendMoneySuccess();
