import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('SustainabilityGlossary')
class SustainabilityGlossary extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-sustainabilityGlossary[state="active"]',
            elements: {
                back: 'cells-molecule-header #btnLeft',
                header: 'cells-molecule-header',
                searcher: 'bbva-form-predictive',
                wordsList: 'bbva-expandable-accordion-list',
                inputSearch: '.search .input input[slot=_input]',
                btnSearch: '.search .input .wrapper .action',
                wordBMSbutton: 'bbva-expandable-accordion-list bbva-expandable-accordion[row-title="BMS"]',
                categoryB: 'bbva-expandable-accordion-list bbva-list-header[heading="B"]',
                wordBbutton: 'bbva-expandable-accordion-list bbva-expandable-accordion[row-title="Biodegradable"] button.header-accordion',
                wordScrollbutton: 'bbva-expandable-accordion-list bbva-expandable-accordion[row-title="Sostenibilidad"] button.header-accordion',
                wordAnybutton: 'bbva-expandable-accordion-list bbva-expandable-accordion[row-title="Biomasa"] button.header-accordion',
                errorText: 'bbva-panel-info .title',
                errorMessage: 'bbva-panel-info .description',
            },
            requiredElements: [
                'header', 'searcher', 'wordsList'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'searcher':
                await this.searcher.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'wordslist':
                await this.wordsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn search':
                await this.btnSearch.waitForVisible(config.wait.M);
                break;
            case 'slot to search':
                await this.inputSearch.waitForVisible(config.wait.M);
                break;       
            case 'wordbmsbutton':
                await this.wordBMSbutton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'wordbbutton':
                await this.wordBbutton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'errortext':
                await this.errorText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'errormessage':
                await this.errorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async setWordsGlossary(words) {
        await this.inputSearch.setValue({value: words, slow: true});
    }

    async moreInformation() {
        await this.wordBbutton.waitForDisplayed({timeout: config.wait.M});
        await this.wordBbutton.waitForClickable({timeout: config.wait.M});
        await this.wordBbutton.click();
    }

    async selectedWord() {
        await this.wordBbutton.waitForDisplayed({timeout: config.wait.M});
        await this.wordBbutton.waitForClickable({timeout: config.wait.M});
        await this.wordBbutton.click();
    }

    async selectedAnyWord() {
        await this.wordAnybutton.waitForDisplayed({timeout: config.wait.M});
        await this.wordAnybutton.waitForClickable({timeout: config.wait.M});
        await this.wordAnybutton.click();
        await this.wordAnybutton.waitForAnimation({timeout: config.wait.XL});
    }

    async scrollAllPage() {
        await this.wordScrollbutton.scrollIntoView();
        await this.wordScrollbutton.waitForDisplayed({timeout: config.wait.M});
        await this.wordScrollbutton.waitForAnimation({timeout: config.wait.XL});
    }

    async selectedAnotherWord() {
        await this.wordBbutton.waitForDisplayed({timeout: config.wait.M});
        await this.wordBbutton.waitForClickable({timeout: config.wait.M});
        await this.wordBbutton.click();
    }

    async goBack(){
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

}
export default new SustainabilityGlossary();
