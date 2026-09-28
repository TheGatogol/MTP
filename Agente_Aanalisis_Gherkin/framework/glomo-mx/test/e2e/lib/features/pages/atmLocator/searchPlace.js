import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class SearchPlace extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-searchPlace[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                inputPlace: 'cells-molecule-input #input',
                inputPlaceList: 'cells-input-place #suggestions',
                inputPlaceListResult: 'cells-input-place #suggestions .results-item-query',
                googleMark: 'cells-input-place .by-google',
                resetInputBtn: '.secondary-icon',
                noResultsImg: '.emptyListImage img',
                noResultText: '.emptyListImage span'
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                inputPlace: 'cells-molecule-input-spherica #input',
                inputPlaceList: 'cells-input-place-spherica #suggestions',
                inputPlaceListResult: 'cells-input-place-spherica #suggestions .results-item-query',
                googleMark: 'cells-input-place-spherica .by-google'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close modal button':
                await this.header.waitForDisplayed({isBtnRight: true, isBtnLeft: false});
                break;
            case 'search address input':
                await this.inputPlace.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'results view container':
                await this.inputPlaceListResult.waitForNotDisplayed({timeout: config.wait.L});
                break;
            case 'powered by google mark':
                await this.googleMark.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'list address':
                await this.inputPlaceListResult.waitForText({timeout: config.wait.L, value: 'Polanco, Polanco I Sección, Ciudad de México, CDMX, México'});
                break;
            case 'no results found image':
                await this.noResultsImg.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'no results found description text':
                await this.noResultText.waitForText({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async typePlace(place) {
        await this.inputPlace.setValue({value: place});
        await this.inputPlaceListResult.waitForDisplayed({timeout: config.wait.L});
    }

    async typeNoResult() {
        await this.inputPlace.setValue({value: 'kdljhasldaslkdj'});
        await this.noResultsImg.waitForDisplayed({timeout: config.wait.L});
        await this.noResultText.waitForDisplayed({timeout: config.wait.L});
    }

    async selectListItem() {
        await (await this.inputPlaceListResult.waitForDisplayed({timeout: config.wait.L})).click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async resetInput() {
        await (await this.resetInputBtn.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async closeSearch() {
        await this.header.waitForDisplayed({isBtnRight: true});
        await this.header.actionRight();
    }
}

export default new SearchPlace();
