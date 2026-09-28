import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class SearchBranch extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-searchPlacePage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                exitBtn: '#btnRight',
                searchInput: '#input',
                searchBtn: '#btnMainIcon',
                listBranch: '#suggestions',
                emptyList: '.empty-list-image',
                branchItem: '.results-item:nth-of-type(1)',
                noResult: '.emptyListImage img',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch(item.toLowerCase()) {
            case 'branch list':
                await this.listBranch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty list':
                await this.emptyList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no result image':
                await this.noResult.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async backToMap(flag) {
        if (flag) {
            await this.branchItem.waitForDisplayed({timeout: config.wait.M});
            await this.branchItem.click();
        }
        await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
        await this.exitBtn.click();
    }

    async searchBranch(search) {
        if (search!=='nothing') {
            await this.searchInput.waitForDisplayed({timeout: config.wait.M});
            await this.searchInput.setValue({value: search, slow: true});
        }
        await this.searchBtn.waitForDisplayed({timeout: config.wait.M});
        await this.searchBtn.click();
    }

    async selectFirstSearchOption() {
        await (await this.branchItem.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }
}

export default new SearchBranch();
