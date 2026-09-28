import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound} from '@csqe/radish';

// Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import bbvaFormPredictive from '../../components/bbva-form-predictive';
import BbvaFormInputText from '../../components/bbva-form-input-text';
import bbvaWidgetFaqsList from '../../components/bbva-widget-faqs-list';

class HelpSearch extends AbstractGlomoPage{
    constructor(){
        super({
            root: '#cells-template-helpSection[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                helpSearchInput: {
                    component: {
                        ComponentClass: bbvaFormPredictive
                    }
                },
                helpSearchList: {
                    component: {
                        ComponentClass: bbvaWidgetFaqsList
                    }
                },
                helpSearchMessageError: 'cells-icon-message-change-data cells-icon-message',
                callLine: 'glomo-button-list cells-st-button button.button-list.glomo-faqs-line-number-title',
                callPortal: 'glomo-button-list cells-st-button button.button-list.glomo-faqs-portal-number-title',
                callApp: 'glomo-button-list cells-st-button button.button-list.glomo-faqs-app-number-title',
                callInsurance: 'glomo-button-list cells-st-button button.button-list.glomo-faqs-insurance-number-title',
                backButton: '#btnLeft',
                titleFacts: '[data-tag-name="bbva-header-category"]'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                helpSearchInput: BbvaFormInputText,
                helpSearchList: 'bbva-widget-faqs-list-spherica',
                helpSearchMessageError: 'cells-icon-message-change-data-spherica#firstIcon cells-icon-message-spherica',
                callLine: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.glomo-faqs-line-number-title',
                callPortal: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.glomo-faqs-portal-number-title',
                callApp: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.glomo-faqs-app-number-title-spherica',
                callInsurance: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.glomo-faqs-insurance-number-title',
            },
            requiredElements: ['header'],
        });
    }
    async searchFaqs(value) {
        await this.helpSearchInput.inputText(value);
    }
    async accessFaq() {
        await this.helpSearchList.accessFaq();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'help search input':
                await this.helpSearchInput.waitForDisplayed();
                break;
            case 'help search message error':
                await this.helpSearchMessageError.waitForDisplayed();
                break;
            case 'help search list':
                await this.helpSearchList.waitForDisplayed();
                break;
            case 'call line':
                await this.callLine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call portal':
                await this.callPortal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call app':
                await this.callApp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call insurance':
                await this.callInsurance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'head faqts':
                await this.titleFacts.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new HelpSearch();
