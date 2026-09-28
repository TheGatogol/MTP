import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('InvestAdvisoryProductDetail')
class InvestAdvisoryProductDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-investAdvisoryProductDetail[state="active"]',
            elements: {
                properties: {
                    root: '[data-tag-name="account-information-product-detail-invest-mx"]'
                },
                mainPage: '[data-tag-name="account-information-product-detail-invest-mx"] #productDetail',
                productDetail: {
                    properties: {
                        root: '[data-tag-name="account-information-product-detail-invest-product-detail"]'
                    },
                    header: '[variant="first-level-sequential"]',
                    back: '#btn-menu',
                    alias: '#carouselTextAlias',
                    amount: '#carouselTextAmount',
                    detailsLink: '#detailContractLink',
                    nextFund: 'div:nth-child(4).steps .chevron-next',
                    contributionButton: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]:nth-child(1)',
                    withdrawalButton: '[data-tag-name="bbva-button-row"] div#buttons span:nth-child(2) [data-tag-name="bbva-button-action"] .label-container',
                    contractDetailButton: '[data-tag-name="bbva-type-link"]#detailContractLink[tabindex="0"]',
                    liqFundButton: 'div.portfolio-list[id="0"]',
                    cplusFundButton: 'div.portfolio-list[id="0"]',
                    gfFundButton: 'div.portfolio-list[id="1"]',
                    crFundButton: 'div.portfolio-list[id="2"]',
                    fundsNotLoadedWarning: '.wrapper-icon-title [data-tag-name="bbva-type-icon"]',
                    fundsNotLoadedRetry: '#retryButton',
                    helpButtonTermsAndConditions: '#rate-icon-button',
                    portfolioStrategyTerms: [BbvaHelpModal, {
                        modifiers: '#portfolioStrategyTerms[visible]',
                        additionalElements: {
                            header: '#helpModalHeader',
                            close: '#btn-close',
                            infoIcon: '[data-tag-name="bbva-type-icon"]',
                            title: '#title-text',
                            termAssociatedFund: '#associatedFund',
                            termAmountInvested: '#amountInvested',
                            termPercentagePortfolio: '#percentagePortfolio',
                        }
                    }],
                },
                contractDetails: {
                    properties: {
                        root: '[data-tag-name="account-information-product-detail-invest-contract-detail"]'
                    },
                    header: '[data-tag-name="bbva-header-main"] #heading [data-tag-name="bbva-type-text"]#text',
                    generalCategory: 'div.data:nth-child(3) [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    serviceLabel: 'div.data:nth-child(3) div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    service: 'div.data:nth-child(3) div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    aliasLabel: 'div.data:nth-child(3) div.simple-list:nth-child(3) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    alias: 'div.data:nth-child(3) div.simple-list:nth-child(3) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    editAliasButton: '#edit-alias',
                    contractNumberLabel: 'div.data:nth-child(3) div.simple-list:nth-child(4) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    contractNumber: 'div.data:nth-child(3) div.simple-list:nth-child(4) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    copyContractNumberButton: '#contract',
                    investmentServiceLabel: 'div.data:nth-child(3) div.simple-list:nth-child(5) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    investmentService: 'div.data:nth-child(3) div.simple-list:nth-child(5) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    associatedAccountCategory: 'div.data:nth-child(5) [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    accountLabel: 'div.data:nth-child(5) div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    account: 'div.data:nth-child(5) div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    copyAccountButton: '#account',
                    successToast: '[data-tag-name="bbva-notification-toast"][show]'
                },
                fundDetail: {
                    properties: {
                        root: '[data-tag-name="account-information-product-detail-invest-fund-detail"]'
                    },
                    fundHeader: '[data-tag-name="bbva-header-main"] #heading [data-tag-name="bbva-type-text"]#text',
                    investedAmount: '.header-product-detail-strategies',
                    fundKey: 'div.simple-list-fund:nth-child(4) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    generalCategory: '[data-tag-name="bbva-header-category"]:nth-child(7) [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    generalDetails: '.simple-list:nth-child(8)',
                    associatedAccountCategory: 'div.data [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    accountDetails: '.simple-list-link',
                    fundConditions: '[data-tag-name="bbva-header-category"]:nth-child(14) [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    fundConditionsSchedule: '.simple-list:nth-child(15)',
                    fundConditionsLiquidity: '.simple-list:nth-child(16)',
                    fundConditionsNotice: '[data-tag-name="bbva-notification-help"]',
                    fundReturns: '[data-tag-name="bbva-header-category"]:nth-child(19) [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    fundReturnsLastMonth: '.vertical-list:nth-child(20) ',
                    fundReturnsLastYear: '.vertical-list:nth-child(21) '
                },
                modalError: {
                    properties: {
                        root: ' [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"]'
                    },
                    title: '[data-tag-name="bbva-type-title"]',
                    message: '[data-tag-name="bbva-type-message"]',
                    button: 'button#btn-close'
                }
            },
            elementsSpherica: {
                contractDetails: {
                    generalCategory: '.detail-contract-container [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    serviceLabel: '.detail-contract-container div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    service: '.detail-contract-container div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    aliasLabel: '.detail-contract-container div.simple-list:nth-child(3) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    alias: '.detail-contract-container div.simple-list:nth-child(3) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    contractNumberLabel: '.detail-contract-container div.simple-list:nth-child(4) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    contractNumber: '.detail-contract-container div.simple-list:nth-child(4) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    investmentServiceLabel: '.detail-contract-container div.simple-list:nth-child(5) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    investmentService: '.detail-contract-container div.simple-list:nth-child(5) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    associatedAccountCategory: '.title-contract-bottom [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    accountLabel: '.title-contract-bottom div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(1)',
                    account: '.title-contract-bottom div.simple-list:nth-child(2) div.columns [data-tag-name="bbva-type-text"]:nth-child(2)',
                    back: '#btn-menu'
                },
                fundDetail: {
                    fundKey: 'div.simple-list-fund:nth-child(2) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    generalCategory: '.header-product-detail-general',
                    generalDetails: '.simple-list',
                    associatedAccountCategory: '.header-product-detail-account',
                    fundConditions: '.header-product-detail-conditions',
                    fundConditionsSchedule: '.simple-list-horizontal:nth-child(2)',
                    fundConditionsLiquidity: '.simple-list-horizontal:nth-child(3)',
                    fundReturns: '.header-product-detail-historic',
                    fundReturnsLastMonth: '.vertical-list:nth-child(2)',
                    fundReturnsLastYear: '.vertical-list:nth-child(3)',
                },
                unavailableInformation: [BbvaHelpModal, {
                    modifiers: '[modal-type="error"][visible]',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]',
                        close: '#btn-close',
                        warningIcon: '.modal-title [data-tag-name="bbva-type-icon"] ',
                        title: '.modal-title [data-tag-name="bbva-type-text"]',
                        text: '.content:nth-child(1) [data-tag-name="bbva-type-text"]',
                        retry: '[data-tag-name="bbva-button-default"]',
                    }
                }],
            },
            requiredElements: [
                'mainPage'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'main page':
                await this.mainPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract detail button':
                await this.productDetail.contractDetailButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details header':
                await this.contractDetails.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details general category':
                await this.contractDetails.generalCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details service label':
                await this.contractDetails.serviceLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details service':
                await this.contractDetails.service.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details alias label':
                await this.contractDetails.aliasLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details alias':
                await this.contractDetails.alias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details edit alias':
                await this.contractDetails.editAliasButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details contract number label':
                await this.contractDetails.contractNumberLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details contract number':
                await this.contractDetails.contractNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details copy contract':
                await this.contractDetails.copyContractNumberButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details investment service label':
                await this.contractDetails.investmentServiceLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details investment service':
                await this.contractDetails.investmentService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details associated account':
                await this.contractDetails.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details account label':
                await this.contractDetails.accountLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details account':
                await this.contractDetails.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract details copy account':
                await this.contractDetails.copyAccountButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'copy contract number success toast':
            case 'copy savings account success toast':
            case 'copy associated account success toast':
                await this.contractDetails.successToast.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invested amount':
                await this.fundDetail.investedAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity fund key':
            case 'capital preservation fund key':
            case 'flow generation fund key':
            case 'capital growth fund key':
                await this.fundDetail.fundKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'general category':
                await this.fundDetail.generalCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'general details':
                await this.fundDetail.generalDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account category':
                await this.fundDetail.associatedAccountCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account details':
                await this.fundDetail.accountDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund conditions':
                await this.fundDetail.fundConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund conditions schedule':
                await this.fundDetail.fundConditionsSchedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund conditions liquidity':
                await this.fundDetail.fundConditionsLiquidity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund conditions notice':
                await this.fundDetail.fundConditionsNotice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund returns':
                await this.fundDetail.fundReturns.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund returns last month':
                await this.fundDetail.fundReturnsLastMonth.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund returns last year':
                await this.fundDetail.fundReturnsLastYear.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity header':
            case 'flow generation header':
            case 'capital preservation header':
            case 'capital growth header':
                await this.fundDetail.fundHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity fund strategy':
                await this.productDetail.liqFundButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital preservation fund strategy':
                await this.productDetail.cplusFundButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'flow generation fund strategy':
                await this.productDetail.gfFundButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product detail header':
                await this.productDetail.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product detail back button':
                await this.productDetail.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product detail alias':
                await this.productDetail.alias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product detail amount':
                await this.productDetail.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product detail details link':
                await this.productDetail.detailsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable information header':
                await this.unavailableInformation.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable information close button':
                await this.unavailableInformation.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable information warning icon':
                await this.unavailableInformation.additionalElements.warningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable information title':
                await this.unavailableInformation.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable information text':
                await this.unavailableInformation.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable information retry button':
                await this.unavailableInformation.additionalElements.retry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'funds not loaded warning':
                await this.productDetail.fundsNotLoadedWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'funds not loaded retry button':
                await this.productDetail.fundsNotLoadedRetry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal header':
                await this.productDetail.portfolioStrategyTerms.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal close icon':
                await this.productDetail.portfolioStrategyTerms.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal info icon':
                await this.productDetail.portfolioStrategyTerms.additionalElements.infoIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal title':
                await this.productDetail.portfolioStrategyTerms.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal term associated fund':
                await this.productDetail.portfolioStrategyTerms.additionalElements.termAssociatedFund.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal term amount invested':
                await this.productDetail.portfolioStrategyTerms.additionalElements.termAmountInvested.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'portfolio strategy modal term percentage portfolio':
                await this.productDetail.portfolioStrategyTerms.additionalElements.termPercentagePortfolio.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessContractDetail() {
        await (await this.productDetail.contractDetailButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async reviewStrategyLiquidity() {
        await (await this.productDetail.liqFundButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async reviewStrategyCapitalPreservation() {
        await (await this.productDetail.cplusFundButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async reviewStrategyFlowGeneration() {
        await (await this.productDetail.gfFundButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async reviewStrategyCapitalGrowth() {
        await (await this.productDetail.crFundButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async closeModalError() {
        await (await this.modalError.button.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async buyFunds() {
        await (await this.productDetail.contributionButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async buyFundsWithdrawal() {
        await (await (await this.productDetail.withdrawalButton.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async editAlias() {
        await (await this.contractDetails.editAliasButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async copyContractNumber() {
        await this.accessContractDetail();
        await (await this.contractDetails.copyContractNumberButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async copyAccountNumber() {
        await this.accessContractDetail();
        await (await this.contractDetails.copyAccountButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async goNextFund() {
        await (await (await this.productDetail.nextFund.waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async reviewStrategy(strategy) {
        switch (strategy.toLowerCase()) {
            case 'liquidity':
                await this.goNextFund();
                await this.reviewStrategyLiquidity();
                break;
            case 'capital preservation':
                await this.reviewStrategyCapitalPreservation();
                break;
            case 'flow generation':
                await this.reviewStrategyFlowGeneration();
                break;
            case 'capital growth':
                await this.reviewStrategyCapitalGrowth();
                break;
            default:
                throw new Error(`${strategy} is not a valid strategy`);
        }
    }

    async goBack() {
        await (await this.contractDetails.back.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async closeDialog() {
        await (await this.unavailableInformation.additionalElements.close
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async openTermsAndConditions() {
        await (await this.productDetail.helpButtonTermsAndConditions.waitForDisplayed({timeout: config.wait.M})).click();
    }
}

export default new InvestAdvisoryProductDetail();
