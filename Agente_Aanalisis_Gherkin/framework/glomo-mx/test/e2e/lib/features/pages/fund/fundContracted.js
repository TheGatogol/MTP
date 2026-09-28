import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundContractedDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-fundInformationFundsDetail[state="active"]',
            elements: {
                buyOption:'#buttons .list-item.items',
                bondsPriceTooltip:'#bonds-price',
                operationScheduleTooltip:'#operation-schedule',
                fundLiquidityIncreaseTooltip:'#fund-liquidity-increase',
                fundLiquidityWithdrawalTooltip:'#fund-liquidity-withdrawal',
                investmentAccountTooltip:'#investment-account',
                priceToolTip: {
                    properties: {
                        root: '[header-text="Precio por título"]'
                    },
                    titleModalTooltip:'.help-modal',
                    closeButtonTooltip:'[data-id="iconsRight"]',
                    infoTooltip:'.modal-content'
                },
                operationSchedule: {
                    properties: {
                        root: '[header-text="Horario de operación"]'
                    },
                    titleSchedule:'.help-modal',
                    buttonSchedule:'[data-id="iconsRight"]',
                    infoSchedule:'.modal-content'
                },
                liquidityIncreaseModal: {
                    properties: {
                        root: '[header-text="Liquidez del fondo para comprar"]'
                    },
                    titleIncrease:'.help-modal',
                    buttonIncrease:'[data-id="iconsRight"]',
                    infoIncrease:'.modal-content'
                },

                liquidityWithdrawalModal: {
                    properties: {
                        root: '[header-text="Liquidez del fondo para vender"]'
                    },
                    titleWithdrawal:'.help-modal',
                    buttonWithdrawal:'[data-id="iconsRight"]',
                    infoWithdrawal:'.modal-content'
                },
                investmentAccountModal: {
                    properties: {
                        root: '[header-text="Cuenta de inversión y depósito"]'
                    },
                    titleAccount:'.help-modal',
                    buttonAccount:'[data-id="iconsRight"]',
                    infoAccount:'.modal-content'
                },

            },
            requiredElements: [
                'bondsPriceTooltip'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title bonds price':
                await this.priceToolTip.titleModalTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button price':
                await this.priceToolTip.closeButtonTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info price':
                await this.priceToolTip.infoTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title operation schedule':
                await this.operationSchedule.titleSchedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button operation':
                await this.operationSchedule.buttonSchedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info operation':
                await this.operationSchedule.infoSchedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title increase':
                await this.liquidityIncreaseModal.titleIncrease.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button increase':
                await this.liquidityIncreaseModal.buttonIncrease.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info increase':
                await this.liquidityIncreaseModal.infoIncrease.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title withdrawal':
                await this.liquidityWithdrawalModal.titleWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button withdrawal':
                await this.liquidityWithdrawalModal.buttonWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info withdrawal':
                await this.liquidityWithdrawalModal.infoWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title account':
                await this.investmentAccountModal.titleAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button account':
                await this.investmentAccountModal.buttonAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info account':
                await this.investmentAccountModal.infoAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBuySection() {
        await this.waitForElementsExist(this.buyOption, config.wait.M);
        await (await this.buyOption.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.buyOption.elements()).value[0].click();
    }

    async goTooltip(tooltip) {
        switch (tooltip.toLowerCase()) {
            case 'bonds price':
                await this.bondsPriceTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.bondsPriceTooltip.click();
                break;
            case 'operation schedule':
                await this.operationScheduleTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.operationScheduleTooltip.click();
                break;
            case 'liquidity increase':
                await this.fundLiquidityIncreaseTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.fundLiquidityIncreaseTooltip.click();
                break;
            case 'liquidity withdrawal':
                await this.fundLiquidityWithdrawalTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.fundLiquidityWithdrawalTooltip.click();
                break;
            case 'investment account':
                await this.investmentAccountTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.investmentAccountTooltip.click();
                break;
            default:
                throw new Error(`${tooltip} element is not available to option to...`);
        }
    }

}

export default new FundContractedDetail();
