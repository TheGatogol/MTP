import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class SecurityGlossary extends AbstractGlomoPage {
    constructor(){
        super({
            root: '#cells-template-securityTipsGlossaryPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                input: '[data-tag-name="bbva-form-predictive"] input',
                backButton: 'cells-molecule-header-spherica #btnLeft',
                bbvaListHeader: 'bbva-list-header',
                headerAccordion: 'button.header-accordion',
                searchIcon: '[data-tag-name="bbva-form-predictive"] [data-tag-name="bbva-form-text"] [data-tag-name="bbva-button-default"]',
                noResultContent: 'bbva-panel-info-spherica.alert-message',
                plusButton: '[data-tag-name="bbva-expandable-accordion-list-spherica"] [data-tag-name="bbva-expandable-accordion"]:nth-of-type(1) .header-accordion [data-tag-name="bbva-type-icon"]',
                plusButtonInfo: '[data-tag-name="bbva-expandable-accordion-list-spherica"] [data-tag-name="bbva-expandable-accordion"]:nth-of-type(1)',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async searchWordWithinGlossary() {
        await this.input.waitForDisplayed({timeout: config.wait.XL});
        await this.input.setValue({value:'digo'});
    }

    async searchEspecificWordWithinGlossary(text) {
        await this.input.waitForDisplayed({timeout: config.wait.XL});
        await this.input.setValue({value: text});
    }

    async goToInfoTip(){
        await this.plusButton.waitForDisplayed({timeout: config.wait.L});
        await this.plusButton.scrollIntoView();
    }

    async displayTipInfo(){
        await this.plusButton.waitForDisplayed({timeout: config.wait.L});
        await this.plusButton.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'back button':
                await this.backButton.waitForDisplayed();
                break;
            case 'section title':
                await this.bbvaListHeader.waitForDisplayed();
                break;
            case 'drop down buttons':
                await this.headerAccordion.waitForDisplayed();
                break;
            case 'search icon':
                await this.searchIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'no result content':
                await this.noResultContent.waitForDisplayed();
                break;
            case 'plus button info':
                await this.plusButtonInfo.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new SecurityGlossary();
