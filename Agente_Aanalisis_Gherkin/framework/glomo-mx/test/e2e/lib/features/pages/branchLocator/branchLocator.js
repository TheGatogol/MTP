import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class BranchLocator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-branchLocator[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                map: '#atmMap #map',
                searchInput: 'cells-molecule-input #input',
                searchBtn: '#btnMainIcon',
                collapsibleList: '#list',
                btnShowList: '#list #btnShowList',
                btnShowMap: '#list #btnHideList',
                firstItemBranch: 'cells-collapsible-list #scrollContainer .cells-collapsible-list-item:nth-of-type(1)',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch(item.toLowerCase()) {
            case 'map branch':
                await this.map.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search branch input':
                await this.searchInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list branches':
                await this.collapsibleList.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async chooseBranch() {
        await this.firstItemBranch.waitForDisplayed({timeout: config.wait.M});
        await this.firstItemBranch.click();
    }

    async searchBranch() {
        await this.searchInput.waitForAnimation({timeout: config.wait.M});
        await this.searchInput.waitForDisplayed({timeout: config.wait.M});
        await this.searchInput.click();
    }

    async interactMap() {
        await this.collapsibleList.waitForDisplayed({timeout: config.wait.M});
        await this.collapsibleList.waitForAnimation({timeout: config.wait.M});
        await this.map.waitForDisplayed({ timeout: config.wait.M });
        await this.map.dragAndDrop({
            target: {
                x: {
                    value: 0,
                    offset: 0,
                    type: 'absolute'
                },
                y: {
                    value: 150,
                    offset: 0,
                    type: 'absolute'
                }
            },
            duration: 2000,
            offset: {
                x: 100,
                y: 200
            }
        });
        await this.btnShowList.waitForDisplayed({timeout: config.wait.M});
        await this.btnShowList.click();
        await this.btnShowMap.waitForDisplayed({timeout: config.wait.M});
        await this.btnShowMap.click();
    }
}

export default new BranchLocator();
