import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';

@page()
class Pockets extends AbstractGlomoPage {
    constructor() {

        super({
            root: '#cells-template-pocketsList[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                createPocket: 'li[data-selector="createPocket"] button',
                sortPocket: 'li[data-selector="sortPockets"] button',
                subTitle: 'cells-atom-subheader span.heading',
                amount: 'cells-atom-subheader .amount-wrapper',
                pockets: 'ul > li:nth-child(1) > cells-product-item',
                fullPocket: 'ul > li:nth-child(3) > cells-product-item',
                genericPocket: 'li__NTH__ cells-product-item',
                pocketLimitModal: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            icon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            info: 'div.paragraph-template [data-selector="paragraph-template-text"]:not([style="display: none;"])',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                subTitle: 'cells-atom-subheader-spherica span.heading',
                amount: 'cells-atom-subheader-spherica .amount-wrapper',
                pockets: 'ul > li:nth-child(1) > cells-product-item-spherica',
                fullPocket: 'ul > li:nth-child(3) > cells-product-item-spherica',
                genericPocket: 'li__NTH__ cells-product-item-spherica',
                pocketLimitModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            icon: '.paragraph-template cells-atom-icon-spherica',
                            info: '.paragraph-template [data-selector="paragraph-template-text"]',
                        }
                    }
                ]
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            requiredElements: [
                'header',
                'pockets'
            ],
        });
    }

    async continueToCreatePocket() {
        await (await (await this.createPocket.waitForDisplayed({timeout: config.wait.XL}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToPocketDetail({activity}) {
        const is = {activity};
        if (is) {
            await (await this.fullPocket.waitForDisplayed({timeout: config.wait.M}))
                .click();
        } else {
            await (await this.pockets.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async maxLimitCreatePocket() {
        await (await (await this.createPocket.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToSortPocket() {
        await (await this.sortPocket.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async choosePocketByName(pocketName) {
        await (await (await this.genericPocket.specifySelector({
            placeholder: '__NTH__',
            value: ''
        }).elementByText({text: pocketName})).waitForClickable({timeout: config.wait.XL})).click();
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative create pocket':
                await this.createPocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative short pocket':
                if (value !== 'disabled') {
                    await this.sortPocket.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'pocket title':
                await this.subTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket list':
                await this.pockets.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'pocket limit icon':
                await this.pocketLimitModal.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket limit info':
                await this.pocketLimitModal.additionalElements.info.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }
}

export default new Pockets();
