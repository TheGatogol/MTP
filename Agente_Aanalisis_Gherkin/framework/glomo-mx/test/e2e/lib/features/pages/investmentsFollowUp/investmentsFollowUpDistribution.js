import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

const LIST_PRODUCTS = ['0006IN9901', '0015SI8302', '0007IN9420', '0008SI5691'];
const LIST_FAMILIES = ['Depósito', 'Fondo de inversión'];
const TXT_PRODUCTS = 'products';
const TXT_PRODUCT = 'product';

@page()
class InvestmentsFollowUpDistribution extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-investmentsFollowUpDistribution[state="active"]',
            elements: {
                // LitElement feature
                followUpInvestmentsDistributionOfInvestments:
                    'follow-up-investments-distribution-of-investments',
                selectorByProduct:
                    'follow-up-investments-distribution-of-investments #tabs #tab-0',
                selectorByFamily:
                    'follow-up-investments-distribution-of-investments #tabs #tab-1',
                distributionByProduct:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] [data-tag-name="bbva-data-visualization-donut"]',
                distributionByFamily:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] [data-tag-name="bbva-data-visualization-donut"] ',
                thirdProductOfPieChart:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] [data-tag-name="bbva-data-visualization-donut"] #chart > svg > g > g:nth-child(3)',
                secondFamilyOfPieChart:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] [data-tag-name="bbva-data-visualization-donut"] #chart > svg > g > g:nth-child(2)',
                listProducts:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] > ul > li',
                listFamilies:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] > ul > li',
                thirdProductLegend:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] li:nth-child(3) [data-tag-name="bbva-list-legend"]',
                secondFamilyLegend:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] li:nth-child(2) [data-tag-name="bbva-list-legend"]',
                secondProductOfList:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] li:nth-child(2) [data-tag-name="bbva-list-legend"]',
                secondFamilyOfList:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] li:nth-child(2) [data-tag-name="bbva-list-legend"]',
                infoProductDonut:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] [data-tag-name="bbva-data-visualization-donut"] .middle-donut-content bbva-type-text',
                infoFamilyDonut:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] [data-tag-name="bbva-data-visualization-donut"] .middle-donut-content bbva-type-text',
            },
            elementsSpherica: {
                listProducts:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] follow-up-investments-distribution-of-investments-list-legend',
                listFamilies:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] follow-up-investments-distribution-of-investments-list-legend',
                thirdProductLegend:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] follow-up-investments-distribution-of-investments-list-legend:nth-child(4) [data-tag-name="bbva-type-link"]',
                secondFamilyLegend:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] follow-up-investments-distribution-of-investments-list-legend:nth-child(3) [data-tag-name="bbva-type-link"]',
                secondProductOfList:
                    'follow-up-investments-distribution-of-investments [slot="content-0"] follow-up-investments-distribution-of-investments-list-legend:nth-child(3) [data-tag-name="bbva-type-link"]',
                secondFamilyOfList:
                    'follow-up-investments-distribution-of-investments [slot="content-1"] follow-up-investments-distribution-of-investments-list-legend:nth-child(3) [data-tag-name="bbva-type-link"]',
            },
            requiredElements: ['followUpInvestmentsDistributionOfInvestments'],
        });
    }

    async _screenValidation({item, _args}) {
        switch (item.toLowerCase()) {
            case 'follow up investments distribution of investments':
                await this.followUpInvestmentsDistributionOfInvestments.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: _args.notVisible
                });
                break;
            case 'selector by product':
                await this.selectorByProduct.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            case 'selector by family':
                await this.selectorByFamily.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            case 'distribution by product':
                await this.distributionByProduct.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            case 'distribution by family':
                await this.distributionByFamily.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            case 'list products':
                await this.listProducts.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            case 'list families':
                await this.listFamilies.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async changeSection(type) {
        let listElements = null;
        let infoForVerification = [];

        if (type === TXT_PRODUCTS) {
            await (await this.selectorByProduct
                .waitForDisplayed({timeout: config.wait.L}))
                .click();
            listElements = this.listProducts;
            infoForVerification = LIST_PRODUCTS;
        } else {
            await (await this.selectorByFamily
                .waitForDisplayed({timeout: config.wait.L}))
                .click();
            listElements = this.listFamilies;
            infoForVerification = LIST_FAMILIES;
        }

        await listElements.waitForDisplayed({timeout: config.wait.L});
        await this._checkListItems(listElements, infoForVerification);
    }

    async _checkListItems(list, infoForVerification) {
        const textList = this.isSpherica() ? await list.getAttribute({name: 'text-heading'}) : await list.getText();
        const finalTextList = typeof textList === 'string' ? [textList] : textList;

        if (
            finalTextList.some(
                (element) =>
                    !infoForVerification.find(
                        (info) => info === element.split('\n')[0]
                    )
            )
        ) {
            throw new Error(`The list isn't correct: '${list}'`);
        }
    }

    async selectAnItemList(typeItem) {
        if (typeItem === TXT_PRODUCT) {
            await (await this.secondProductOfList.waitForDisplayed({timeout: config.wait.L})).click();
        } else {
            await (await this.secondFamilyOfList.waitForDisplayed({timeout: config.wait.L})).click();
        }
    }

    async selectAnItemPieChart(typeItem) {
        if (typeItem === TXT_PRODUCT) {
            await (await this.thirdProductOfPieChart
                .waitForClickable({timeout: config.wait.L}))
                .click();
        } else {
            await (await this.secondFamilyOfPieChart
                .waitForClickable({timeout: config.wait.L}))
                .click();
        }
    }

    async displayItemInPie(typeItem) {
        let infoItemList = null;
        let infoItemPie = null;

        if (typeItem === TXT_PRODUCT) {
            await this.distributionByProduct.waitForDisplayed({timeout: config.wait.L});
            infoItemList = await this.secondProductOfList.getAttribute({name: 'label'});
            infoItemPie = await this.distributionByProduct.getAttribute({name: 'text'});
        } else {
            await this.distributionByFamily.waitForDisplayed({timeout: config.wait.L});
            infoItemList = await this.secondFamilyOfList.getAttribute({name: 'label'});
            infoItemPie = await this.distributionByFamily.getAttribute({name: 'text'});
        }

        if (infoItemList !== infoItemPie) {
            throw new Error(
                `The selected '${typeItem}' isn't correct: '${infoItemList}'`
            );
        }
    }

    async displayItemInList(typeItem) {
        const linkSelected =
            typeItem === TXT_PRODUCT
                ? await this.thirdProductLegend.getAttribute({
                    name: 'link-selected',
                })
                : await this.secondFamilyLegend.getAttribute({
                    name: 'link-selected',
                });

        if (linkSelected !== '') {
            const labelSelected =
                typeItem === TXT_PRODUCT
                    ? await this.thirdProductLegend.getAttribute({name: 'label'})
                    : await this.secondFamilyLegend.getAttribute({name: 'label'});

            throw new Error(
                `The selected '${typeItem}' does not mark the item in the list correctly: '${labelSelected}'`
            );
        }
    }
}

export default new InvestmentsFollowUpDistribution();
