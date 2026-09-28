import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundContractedDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-fundContractedDetail[state="active"]',
            elements: {
                //SUMMARY
                summary: {
                    properties: {
                        root: 'cells-product-summary'
                    },
                    currentBalance: '.summary-content [data-selector="cells-key-values-atom-amount-0"]',
                    fundId: '.optional-items .item-container:nth-child(1) .value-simple',
                    totalTitles: '.optional-items .item-container:nth-child(2) .value-simple',
                    titlePrice: '.optional-items .item-container:nth-child(3) cells-atom-amount',
                    date: '.optional-items .item-container:nth-child(4) .value-simple',
                },

                //OPERATIVES
                operatives: {
                    properties: {
                        root: 'cells-operations-list'
                    },
                    contributionOperative: '.list__item[data-selector="CONTRIBUTION"]',
                    withdrawalOperative: '.list__item[data-selector="WITHDRAWAL"]',
                },

                //ADITIONAL INFO
                additionalInfo: {
                    properties: {
                        root: 'cells-product-more-info'
                    },
                    classificationNumber: '.funds-list-detail-fund-classification',
                    serialNumber: '.funds-list-detail-serie',
                    investmentHorizon: '.funds-list-detail-investment-horizon',
                    contractNumber: '.cells-product-more-info-contact-title',
                    accountNumber: '.funds-list-detail-investment-deposit-account',
                    operationSchedule: '.funds-list-detail-hours-operation',
                    liquidityIncrease: '.funds-list-detail-fund-liquidity-increase',
                    liquidityRedeem: '.funds-list-detail-fund-liquidity-redeem',
                    riskLevel: '.funds-list-detail-risk-level',
                    lastMonthPerformance: '.funds-list-detail-last-month-performance',
                    lastYearPerformance: '.funds-list-detail-last-year-performance'
                }
            },
            elementsSpherica: {
                summary: {
                    properties: {
                        root: 'cells-product-summary-spherica'
                    },
                    titlePrice: '.optional-items .item-container:nth-child(3) cells-atom-amount-spherica',
                },
                operatives: {
                    properties: {
                        root: 'cells-operations-list-spherica'
                    },
                },
                additionalInfo: {
                    properties: {
                        root: 'cells-product-more-info-spherica'
                    },
                    lastMonthPerformance: '.funds-list-detail-last-month-performance',
                    lastYearPerformance: '.funds-list-detail-last-year-performance'
                },

            },
            requiredElements: [
                'summary.currentBalance'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'current balance':
                await this.summary.currentBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund':
                await this.summary.fundId.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number of titles':
                await this.summary.totalTitles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total price of titles':
                await this.summary.titlePrice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.summary.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'classification':
                await this.additionalInfo.classificationNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'serial number':
                await this.additionalInfo.serialNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment horizon':
                await this.additionalInfo.investmentHorizon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number':
                await this.additionalInfo.contractNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.additionalInfo.accountNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation hours':
                await this.additionalInfo.operationSchedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity increase':
                await this.additionalInfo.liquidityIncrease.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity redeem':
                await this.additionalInfo.liquidityRedeem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'risk level':
                await this.additionalInfo.riskLevel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last month performance':
                await this.additionalInfo.lastMonthPerformance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last yeat performance':
                await this.additionalInfo.lastYearPerformance.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessOperative(operative) {
        let el;
        switch(operative.toLowerCase()) {
            case 'contribution':
                el = this.operatives.contributionOperative;
                break;

            case 'withdrawal':
                el = this.operatives.withdrawalOperative;
                break;

            default:
                throw new ScreenValidationKeyNotFound({key: operative, args: arguments[0]});
        }
        await el.waitForDisplayed({timeout: config.wait.L});
        await el.click();
    }

    async accessFundContribution() {
        await this.operatives.contributionOperative.waitForDisplayed({timeout: config.wait.L});
        await this.operatives.contributionOperative.click();
    }
}

export default new FundContractedDetail();
