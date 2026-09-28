import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class BtraderPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-bbvaTraderProductDetail[state="active"]',
            elements: {
                modalFilterOrderList: [
                    BbvaHelpModal,
                    {
                        root: {
                            web: '[id-modal="order-list-filter-modal"]',
                            isWithoutRoot: true
                        },
                        additionalElements: {
                            orderListPendingRadioButton: '[data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"][value="PENDING"]',
                            orderListFilterOrdersAccept: 'div > div.modal-main > div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"][text="stock-information-bbva-trader-order-list-filter-button-text"]',
                            orderListCanceledRadioButton: '[data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"][value="CANCELED"]',
                            orderListFilterExit: '#helpModalHeader[text="stock-information-bbva-trader-order-list-filter-header"] #btn-close',
                        }
                    }
                ],
                productDetail: 'stock-information-bbva-trader-product-detail',
                headerProductDetail: '[data-tag-name="stock-information-bbva-trader"] section [data-tag-name="bbva-header-main"]#header-product-detail',
                productDetailContainer:{
                    properties:{root:'stock-information-bbva-trader-product-detail'},
                    alias: 'div.container  > .content0 > div > bbva-type-text:nth-child(1)',
                    contractValue: 'div.container  > .content0 > div > div:nth-child(2)',
                    performanceMonthPositive: 'div.container  > .content0 > div > div [data-tag-name="bbva-badge-variability"][color="success"]',
                    performanceMonthNegative: 'div.container  > .content0 > div > div [data-tag-name="bbva-badge-variability"][status="decrease"]',
                    operatives: 'div.row-buttons',
                    buttonBuy: 'div.row-buttons > .four-buttons #buttons span.list-item:nth-child(1) [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"]',
                    buttonOrders: 'div.row-buttons > .four-buttons #buttons span.list-item:nth-child(2) [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"]',
                    buttonTransfer: 'div.row-buttons > .four-buttons #buttons span.list-item:nth-child(3) [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"]',
                    buttonEditAlias: 'div.row-buttons > .four-buttons #buttons span.list-item:nth-child(4) [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"]',
                    textTitleInfoBalanceModal: 'stocks-info-modal div.content [data-tag-name="bbva-header-main"] div.header-main div.header h1',
                    exitInfoBalanceModal: 'stocks-info-modal div.content [data-tag-name="bbva-header-main"] div.header-main div.header-icons',
                    titleBodyInfoBalanceModal: 'stocks-info-modal div.content div.modal-main div.modal-container div.modal-title [data-tag-name="bbva-type-text"]',
                    bulletBodyInfoBalanceModalOne: 'stocks-info-modal div.content div.modal-main div.modal-container div.modal-content div.slot-content',
                },
                balanceInformationToInvest: 'div.list-container > div.list-item > [data-tag-name="bbva-type-link"][aria-label="Ayuda"]',
                noTitlesText: 'div.no-content-container > [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-investment-list-no-content"]',
                searchIssuerText: 'div.no-content-container > [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-investment-list-no-content-search"]',
                searchButtonNoTitles: 'div.no-content-container > [data-tag-name="bbva-type-link"]',
                userPortfolio: 'stock-information-bbva-trader-investment-list',
                investmentListContainer: {
                    properties: { root: 'stock-information-bbva-trader-investment-list' },
                    investmentList: '[data-tag-name="bbva-expandable-accordion"] div#showInvestmentList',
                    investmentDetailConteiner: '#accordionOthers > div.portfolio-header > [data-tag-name="bbva-type-text"]',
                    lastAmount: '[data-tag-name="bbva-expandable-accordion"]#accordionInvestment div#showInvestmentList > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) > div > [data-tag-name="bbva-type-amount"]',
                    otherMarkets: '[data-tag-name="bbva-expandable-accordion"]#accordionOthers [data-tag-name="bbva-core-heading"] button.header-accordion',
                    otherMarketsCashTodayTooltip: '[data-tag-name="bbva-expandable-accordion"]#accordionOthers > div #AMOUNT_TODAY > div > [data-tag-name=bbva-type-link]',
                    otherMarketsExpires24Tooltip: '[data-tag-name="bbva-expandable-accordion"]#accordionOthers > div #AMOUNT_24HRS > div > [data-tag-name=bbva-type-link]',
                    otherMarketsExpires48Tooltip: '[data-tag-name="bbva-expandable-accordion"]#accordionOthers > div #AMOUNT_48HRS > div > [data-tag-name=bbva-type-link]',
                    otherMarketsExpiresModal: '[data-tag-name="stocks-info-modal"]',
                    otherMarketsExpiresModalClose: '[data-tag-name="stocks-info-modal"] div.content  div.modal-header #btn-close',
                    otherMarketsExpiresModalTitle: '[data-tag-name="stocks-info-modal"] div.content div.modal-main div.modal-container div#helpModalTitle [data-tag-name="bbva-type-text"]',
                    otherMarketsExpiresModalText: '[data-tag-name="stocks-info-modal"] div.content div.modal-main div.modal-container div#helpModalContent div.slot-content',
                },
                shareApple: '#showInvestmentList > [data-tag-name="bbva-list-swipe"] > div > div.space-between.padding-top-16 > [data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-text"][text="AAPL *"]',
                shareNaftrac: '#showInvestmentList > [data-tag-name="bbva-list-swipe"] > div > div.space-between.padding-top-16 > [data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-text"][text="NAFTRAC ISHRS"]',
                shareAppleSwipe: '#showInvestmentList > [data-tag-name="bbva-list-swipe"]:nth-child(1)',
                shareAppleSwipeBuyButton: '#showInvestmentList > [data-tag-name="bbva-list-swipe"]:nth-child(1) div.actions-wrapper.opened > div.actions.actions-operative > div > div:nth-child(1) > [data-tag-name="bbva-button-action"]',
                shareAppleSwipeSaleButton: '#showInvestmentList > [data-tag-name="bbva-list-swipe"]:nth-child(1) div.actions-wrapper.opened > div.actions.actions-operative > div > div:nth-child(2) > [data-tag-name="bbva-button-action"]',
                investmentDetail: '#investment-detail',
                investmentDetailContainer: {
                    properties:{root:'#investment-detail'},
                    investmentDetailAlias: 'div.container > div > div > [data-tag-name="bbva-type-text"]:nth-child(1)',
                    investmentDetailContractValue: 'div.container div.content0 > div > div:nth-child(2)',
                    investmentDetailPerformance: 'div.container div.content0 div div:nth-child(3)',
                    investmentDetailOperatives: 'div.row-buttons',
                    investmentDetailHeaderTitle: 'div > div.content > section > div.modal-header > slot.header-slot > [data-tag-name="bbva-header-main"] header > div #heading',
                    investmentDetailBuyOperative: 'div.row-buttons #buttons > span > [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"][text="Comprar títulos"]',
                    investmentDetailSellOperative: 'div.row-buttons #buttons > span > [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"][text="Vender títulos"]',
                    investmentDetailBalanceToInvestmentModalTitle: '[data-tag-name="stocks-info-modal"] div.content  div.modal-header #heading',
                    investmentDetailBalanceToInvestmentModalClose: '[data-tag-name="stocks-info-modal"] div.content  div.modal-header #btn-close',
                    investmentDetailBalanceToInvestmentModalText: '[data-tag-name="stocks-info-modal"] div.content div.modal-main div.modal-container div#helpModalTitle [data-tag-name="bbva-type-text"]',
                    investmentDetailBalanceToInvestmentModalBullets: '[data-tag-name="stocks-info-modal"] div.content div.modal-main div.modal-container div#helpModalContent div.slot-content',
                },
                investmentDetailPortfolio: 'div > div.title-container > [data-tag-name="bbva-core-heading"] > bbva-type-text[text="stock-information-bbva-trader-investment-detail-stock-mark-header"]',
                investmentDetailMarketpositions: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-investment-detail-best-postures-header"]',
                investmentDetailBalanceToInvestmentTooltip: 'div > div > div > [data-tag-name="bbva-type-link"][aria-label="stock-information-bbva-trader-investment-detail-text-accessibility-available-balance"]',
                stockSearch: 'stocks-searching-modal',
                stockSearchHeaderTitle: 'stocks-searching-modal div div.content div.modal-header [data-tag-name="bbva-type-text"]',
                stockSearchClose: 'stocks-searching-modal div.content div.modal-header',
                stockSearchInput: 'stocks-searching-modal #searchInput [data-tag-name="bbva-form-text"] input',
                stockSearchIssuerListItem: '[data-tag-name="bbva-help-modal"] > div > div.content-body > div:nth-child(1) > [data-tag-name="bbva-type-link"]',
                stockSearchIssuerList: '[data-tag-name="bbva-help-modal"] > div > div.content-body',
                stockSearchTextWithoutResult: 'stocks-searching-modal div bbva-type-text[text="stock-information-bbva-trader-searching-no-content-title"]',
                stockSearchTextRetry: 'stocks-searching-modal div  bbva-type-text[text="stock-information-bbva-trader-searching-no-content-text"]',
                textHeaderOrderList: 'div > div.content > section > div.modal-header > slot.header-slot > [data-tag-name="bbva-header-main"][text="stock-information-bbva-trader-order-list-header"] header > div > div.header > #heading[aria-label="Mis órdenes"] ',
                orderDateIndicator: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][font-style="italic"]',
                orderListFilterOrdersAccept: '[data-tag-name="order-list-filter-modal"] [data-tag-name="bbva-help-modal"] div > div.modal-main > div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]',
                orderListFilterTag: '#filter-0',
                orderListFilterTagEditLink: '#clear-all-link',
                orderListFilterTagCancel: '#remove-filter-0',
                orderListShare: '#scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(2) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(1) > [data-tag-name="bbva-type-link"]',
                orderListBackMiniButton: '[data-tag-name="bbva-header-main"][text="stock-information-bbva-trader-order-list-header"] header > div > div.header-icons.left-group > #btn-back > [data-tag-name="bbva-type-icon"]',
                orderListContainer: {
                    properties: { root: '#order-list-container' },
                    filterOrdersButton: 'div > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container > div.filter-row-button-container > [data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                    filterOrdersText: 'div > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container > div.filter-row-button-container > [data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                    orderStatus: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"]',
                    informationOrderCardOne: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(1) > [data-tag-name="bbva-list-swipe"]',
                    textHeaderFilterOrderList: 'div .content .transition-container .modal-header',
                    orderListFilterExit: 'div #btn-close',
                    orderPendingTypeLimited: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-book"]',
                    orderExecutedTypeLimited: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(4) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-book"]',
                    orderMonitoringTypeLimited: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(0) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="Limitada"]',
                    orderCanceledTypeLimited: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(6) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="Limitada"]',
                    orderPendingTypeConditioned: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="Condicionada"]',
                    orderExecutedTypeConditioned: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(3) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-conditioned"]',
                    orderMonitoringTypeConditioned: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(5) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-conditioned"]',
                    orderCanceledTypeConditioned: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(7) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(4) [data-tag-name="bbva-type-text"][text="Condicionada"]',
                    informationOrderCardExecutedLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(4) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardPendingLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(1) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardMonitoringLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(0) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardCanceledLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(6) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardExecutedCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(3) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardPendingCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(0) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardMonitoringCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(2) > [data-tag-name="bbva-list-swipe"]',
                    informationOrderCardCanceledCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div.order-list-card-container:nth-child(7) > [data-tag-name="bbva-list-swipe"]',
                    orderStatusPendingLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-pending"]',
                    orderStatusMonitoringLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(3) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"][text="Monitoreo"]',
                    orderStatusExecutedLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(4) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"]',
                    orderStatusCanceledLim: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(6) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"][text="Cancelada"]',
                    orderStatusPendingCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(2) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"][text="Pendiente"]',
                    orderStatusMonitoringCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(5) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"]',
                    orderStatusExecutedCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(3) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"]',
                    orderStatusCanceledCon: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(6) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(6) [data-tag-name="bbva-type-text"][text="Cancelada"]',
                    orderDetailAccessLink: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(1) [data-tag-name="bbva-type-link"]',
                    orderDetailHeaderText: '[data-tag-name="bbva-header-main"][text="Mis órdenes"]',
                    orderDetailCardMonitoring: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(1) [data-tag-name="bbva-type-link"]',
                    orderDetailCardExecuted: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(1) [data-tag-name="bbva-type-link"]',
                    orderDetailCardExecutedPurchase: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(1) [data-tag-name="bbva-type-link"]',
                    orderDetailCardCanceledPurchase: 'div.container > [data-tag-name="stock-information-bbva-trader-order-list"] div.order-list-container #scrollingList > [data-tag-name="bbva-transition-container"] > div:nth-child(1) > [data-tag-name="bbva-list-swipe"] > div > div:nth-child(1) [data-tag-name="bbva-type-link"]',
                },
                orderDetailOrderStatus: 'div.panel-container > div > [data-tag-name="bbva-type-text"].order-status',
                orderDetailHeaderText: '#order-detail [data-tag-name="bbva-header-main"][text="Detalle de la orden"]',
                orderDetailOrderStatusEarring: 'div.panel-container > div > [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-detail-pending"]',
                orderDetailOrderStatusMonitoring: 'div.panel-container > div > [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-detail-monitored"]',
                orderDetailOrderStatusExecuted: 'div.panel-container > div > [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-detail-executed"]',
                orderDetailOrderStatusCanceled: 'div.panel-container > div > [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-detail-canceled"]',
                orderDetailPurchaseStatus: 'div.panel-container > div.padding-top-4 [data-tag-name="bbva-type-text"][text="Compra"]',
                orderDetailSaleStatus: 'div.panel-container > div.padding-top-4 [data-tag-name="bbva-type-text"][text="Venta"]',
                orderDetailTypeOrderLimited: 'stock-information-bbva-trader-order-detail div [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-detail-limit"]',
                orderDetailTypeOrderCondicioned: 'stock-information-bbva-trader-order-detail div [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-detail-conditioned"]',
                orderDetailCancelStockButton: '[data-tag-name="stock-information-bbva-trader-order-detail"] #buttons > span > [data-tag-name="bbva-button-action"]',
                orderDetailDetailsTitle: 'div.order-detail-header > [data-tag-name="bbva-header-category"]',
                orderDetailDetails: 'stock-information-bbva-trader-order-detail div > bbva-type-text[text="stock-information-bbva-trader-order-detail-folio"]',
                orderDetailBackMiniButton: 'div > div.content > section > div.modal-header > slot.header-slot > [data-tag-name="bbva-header-main"][text="Detalle de la orden"] #btn-back',
                orderDetailToolTipTotalsTitlesToolTip: 'stock-information-bbva-trader-order-detail div > div > [data-tag-name="bbva-type-link"][aria-label="Quantity"]',
                orderDetailToolTipTotalsTitlesInformation: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-order-detail-modal-header"] header > div #heading',
                orderDetailToolTipTotalsTitlesClose: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-order-detail-modal-header"] header > div > div.header-icons.right-group',
                orderDetailToolTipTotalsTitlesText: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-main > div.modal-container #helpModalTitle > slot #title-text h2.text.lines',
                orderDetailToolTipTotalsTitlesTextBody: '[data-tag-name="bbva-help-modal"] > div > bbva-type-text[text="stock-information-bbva-trader-order-detail-modal-title-quantities"]',
                orderDetailToolTipAssignedTitlesToolTip: 'stock-information-bbva-trader-order-detail div > div > [data-tag-name="bbva-type-link"][aria-label="Quantity In Custody"]',
                orderDetailToolTipAssignedTitlesToolTipCanceled: 'stock-information-bbva-trader-order-detail div > div > [data-tag-name="bbva-type-link"][aria-label="Pending Quantity"]',
                orderDetailToolTipAssignedTitlesInformation: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-product-detail-info-modal-header"] header > div #heading',
                orderDetailToolTipAssignedTitlesClose: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-product-detail-info-modal-header"] header > div > div.header-icons.right-group',
                orderDetailToolTipAssignedTitlesText: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-main > div.modal-container #helpModalTitle > slot #title-text h2.text.lines',
                orderDetailToolTipAssignedTitlesTextBody: '[data-tag-name="bbva-help-modal"] > div > bbva-type-text[text="stock-information-bbva-trader-order-detail-modal-title-quantity-in-custody"]',
                orderDetailToolTipPendingTitlesToolTip: 'stock-information-bbva-trader-order-detail div > div > [data-tag-name="bbva-type-link"][aria-label="Pending Quantity"]',
                orderDetailToolTipPendingTitlesInformation: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-product-detail-info-modal-header"] header > div #heading',
                orderDetailToolTipPendingTitlesClose: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-product-detail-info-modal-header"] header > div > div.header-icons.right-group',
                orderDetailToolTipPendingTitlesText: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-main > div.modal-container #helpModalTitle > slot #title-text h2.text.lines',
                orderDetailToolTipPendingTitlesTextBody: '[data-tag-name="bbva-help-modal"] > div > bbva-type-text[text="stock-information-bbva-trader-order-detail-modal-title-pending-quantity"]',
                orderDetailToolTipCanceledTitlesToolTip: 'stock-information-bbva-trader-order-detail div > div > [data-tag-name="bbva-type-link"][aria-label="Pending Quantity"]',
                orderDetailToolTipCanceledTitlesInformation: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-order-detail-modal-header"] header > div > div.header #heading #text[data-tag-name="bbva-type-text"]',
                orderDetailToolTipCanceledTitlesClose: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-header > slot #helpModalHeader[text="stock-information-bbva-trader-order-detail-modal-header"] header > div > div.header-icons.right-group ',
                orderDetailToolTipCanceledTitlesText: 'div > div.content > section.transition-container.half-height > div.help-modal > div.modal-main > div.modal-container #helpModalTitle > slot #title-text h2.text.lines',
                orderDetailToolTipCanceledTitlesTextBody: '[data-tag-name="bbva-help-modal"] > div > bbva-type-text[text="stock-information-bbva-trader-order-detail-cancel-modal-description"]',

                CancelStockAccessLink: '[data-tag-name="stock-information-bbva-trader-order-detail"] [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
            },
            elementsSpherica:{
                orderListPendingRadioButton: '#order-list-container [data-tag-name="bbva-form-radio-button-input"][value="PENDING"]',
                orderListFilterOrdersAccept: '#order-list-container order-list-filter-modal bbva-help-modal div.help-modal div.modal-main [data-tag-name="bbva-button-default"]',
                orderListCanceledRadioButton: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="CANCELED"]',
                productDetailContainer:{
                    alias: 'stock-information-bbva-trader-panel-detail div.container div.content:nth-child(1) div [data-tag-name="bbva-type-text"]',
                    contractValue: 'stock-information-bbva-trader-panel-detail div.container div:nth-child(2)',
                    performanceMonthPositive: 'stock-information-bbva-trader-panel-detail [data-tag-name="bbva-badge-variability"][color="success"]',
                    performanceMonthNegative: 'stock-information-bbva-trader-panel-detail [data-tag-name="bbva-badge-variability"][status="decrease"]',
                    textTitleInfoBalanceModal: '#helpModalHeader #heading bbva-type-text',
                    exitInfoBalanceModal: '[data-tag-name="stocks-info-modal"] #helpModalHeader div.header-icons.right-group',
                },
                noTitlesText: '#accordionInvestment div.investment-list stock-information-bbva-trader-panel-info div div bbva-type-text p',
                balanceInformationToInvest: 'stock-information-bbva-trader-product-detail [data-tag-name="stock-information-bbva-trader-list-simple"] [data-tag-name="bbva-type-link"]',
                shareApple: '#accordionInvestment [data-tag-name="bbva-list-swipe"] [data-tag-name="stock-information-bbva-trader-list-default"]',
                shareAppleSwipe: '#accordionInvestment [data-tag-name="bbva-list-swipe"]',
                shareAppleSwipeBuyButton: '#accordionInvestment [data-tag-name="bbva-list-swipe"]:nth-child(1) div.actions-wrapper > div.actions.actions-operative > div > div:nth-child(1) > [data-tag-name="bbva-button-action"]',
                shareAppleSwipeSaleButton: '#accordionInvestment [data-tag-name="bbva-list-swipe"]:nth-child(1) div.actions-wrapper > div.actions.actions-operative > div > div:nth-child(2) > [data-tag-name="bbva-button-action"]',
                shareNaftrac: '#accordionInvestment [data-tag-name="bbva-list-swipe"]:nth-child(2)',
                headerCollapse: '#accordionInvestment bbva-core-heading > button',
                investmentListAmount: '#accordionInvestment div.investment-list-total stock-information-bbva-trader-list-default bbva-type-amount',
                investmentListContainer: {
                    investmentList: '#accordionInvestment div.investment-list',
                    investmentDetailConteiner: '#accordionInvestment stock-information-bbva-trader-list-default [data-tag-name="bbva-type-amount"]',
                    otherMarkets: '#accordionOthers',
                    otherMarketsCashTodayTooltip: '#AMOUNT_TODAY div.left-side [data-tag-name=bbva-type-link]',
                    otherMarketsExpires24Tooltip: '#AMOUNT_24HRS div.left-side [data-tag-name=bbva-type-link]',
                    otherMarketsExpires48Tooltip: '#AMOUNT_48HRS div.left-side [data-tag-name=bbva-type-link]',
                },
                searchIssuerText: 'stock-information-bbva-trader-panel-info div.container [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-investment-list-no-content-search"]',
                searchButtonNoTitles: 'stock-information-bbva-trader-panel-info div.container [data-tag-name="bbva-type-link"]',
                investmentDetailContainer: {
                    investmentDetailBuyOperative: '[data-tag-name="stock-information-bbva-trader-investment-detail"] [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-investment-list-buy-stocks"]',
                    investmentDetailSellOperative: '[data-tag-name="stock-information-bbva-trader-investment-detail"] [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-investment-list-sell-stocks"]',
                },
                stockSearchError: '[data-tag-name="stocks-searching-modal"] [data-tag-name="stock-information-bbva-trader-panel-info"] [data-tag-name="bbva-type-text"]',
                investmentDetailBalanceToInvestmentTooltip:'#investment-detail [data-tag-name="stock-information-bbva-trader-list-simple"]:nth-child(7) [data-tag-name="bbva-type-link"]',
                textHeaderOrderList:'#order-list-container bbva-header-main[text="stock-information-bbva-trader-order-list-header"] div#heading #text',
                orderListFilterTagEditLink: '#order-list-container stock-information-bbva-trader-order-list [data-tag-name="bbva-form-filter"] [data-tag-name="bbva-type-link"]',
                orderListBackMiniButton: '#order-list-container [data-tag-name="bbva-header-main"] div.header-icons button#btn-back',
                orderListContainer: {
                    orderStatus: 'stock-information-bbva-trader-order-list bbva-list-swipe bbva-badge-default bbva-type-text',
                    informationOrderCardOne: 'div.container stock-information-bbva-trader-order-list [data-tag-name="bbva-list-swipe"]',
                    textHeaderFilterOrderList: 'section [data-tag-name="bbva-header-main"] header #text',
                    orderListFilterExit: 'order-list-filter-modal bbva-help-modal div.help-modal #helpModalHeader #btn-close',
                    orderPendingTypeLimited: 'div.order-list-container [data-tag-name="bbva-list-swipe"]:nth-child(1)',
                    orderExecutedTypeLimited: 'bbva-list-swipe:nth-child(4) div.bottom-row [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-book"]',
                    orderExecutedTypeConditioned: 'bbva-list-swipe:nth-child(3) div.bottom-row [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-conditioned"]',
                    orderMonitoringTypeConditioned: 'bbva-list-swipe:nth-child(5) div.bottom-row [data-tag-name="bbva-type-text"][text="stock-information-bbva-trader-order-list-status-conditioned"]',
                    orderStatusPendingLim: 'bbva-list-swipe:nth-child(1) div.bottom-row bbva-badge-default [data-tag-name="bbva-type-text"][text="Pendiente"]',
                    orderStatusExecutedCon: 'bbva-list-swipe:nth-child(1) div.bottom-row bbva-badge-default [data-tag-name="bbva-type-text"][text="Ejecutada"]',
                    orderStatusMonitoringCon: 'bbva-list-swipe:nth-child(5) div.bottom-row bbva-badge-default [data-tag-name="bbva-type-text"][text="Monitoreo"]',
                    orderStatusExecutedLim: 'bbva-list-swipe:nth-child(1) div.bottom-row bbva-badge-default [data-tag-name="bbva-type-text"][text="Ejecutada"]',
                    orderDetailAccessLink: 'stock-information-bbva-trader-order-list bbva-list-swipe stock-information-bbva-trader-list-default',
                    orderDetailCardMonitoring: 'div.container stock-information-bbva-trader-order-list [data-tag-name="bbva-list-swipe"]',
                    orderDetailCardCanceledPurchase: 'div.container stock-information-bbva-trader-order-list [data-tag-name="bbva-list-swipe"]',
                },
                orderDetailOrderStatusMonitoring: '#order-detail stock-information-bbva-trader-order-detail stock-information-bbva-trader-panel-detail bbva-badge-default [data-tag-name="bbva-type-text"][text="Monitoreo"]',
                orderDetailOrderStatusExecuted: '#order-detail stock-information-bbva-trader-order-detail stock-information-bbva-trader-panel-detail bbva-badge-default [data-tag-name="bbva-type-text"][text="Ejecutada"]',
                orderDetailOrderStatusEarring: '#order-detail stock-information-bbva-trader-order-detail stock-information-bbva-trader-panel-detail bbva-badge-default [data-tag-name="bbva-type-text"][text="Pendiente"]',
                orderDetailOrderStatusCanceled: '#order-detail stock-information-bbva-trader-order-detail stock-information-bbva-trader-panel-detail bbva-badge-default [data-tag-name="bbva-type-text"][text="Cancelada"]',
                orderDetailPurchaseStatus: '#order-detail stock-information-bbva-trader-order-detail stock-information-bbva-trader-panel-detail div.content:nth-child(2) [data-tag-name="bbva-type-text"][text="Compra"]',
                orderDetailSaleStatus: '#order-detail stock-information-bbva-trader-panel-detail div.container div.content:nth-child(2) [data-tag-name="bbva-type-text"][text="Venta"]',
                orderDetailToolTipTotalsTitlesToolTip: '#order-detail #quantity [data-tag-name="bbva-type-link"][aria-label="Quantity"]',
                orderDetailToolTipAssignedTitlesToolTip: '#order-detail #quantityInCustody [data-tag-name="bbva-type-link"][aria-label="Quantity In Custody"]',
                orderDetailToolTipAssignedTitlesInformation: '#order-detail bbva-help-modal #helpModalHeader header #heading',
                orderDetailToolTipAssignedTitlesClose: '#order-detail stocks-info-modal bbva-help-modal #helpModalHeader header div.header-icons.right-group',
                orderDetailToolTipPendingTitlesToolTip: '#order-detail #pendingQuantity [data-tag-name="bbva-type-link"][aria-label="Pending Quantity"]',
                orderDetailToolTipPendingTitlesInformation: '#order-detail stock-information-bbva-trader-order-detail stocks-info-modal bbva-help-modal #helpModalHeader header #heading',
                orderDetailToolTipPendingTitlesClose: '#order-detail stock-information-bbva-trader-order-detail stocks-info-modal bbva-help-modal #helpModalHeader div.header-icons.right-group',
                orderDetailToolTipCanceledTitlesToolTip: '#order-detail #pendingQuantity [data-tag-name="bbva-type-link"][aria-label="Pending Quantity"]',
                orderDetailToolTipCanceledTitlesInformation: '#order-detail stocks-info-modal bbva-help-modal #helpModalHeader header div.header #heading',
                orderDetailToolTipCanceledTitlesClose: '#order-detail stock-information-bbva-trader-order-detail stocks-info-modal bbva-help-modal #helpModalHeader div.header-icons.right-group',
                orderDetailToolTipTotalsTitlesInformation: '#order-detail bbva-help-modal #helpModalHeader header div.header #heading',
                orderDetailToolTipTotalsTitlesClose: '#order-detail stocks-info-modal bbva-help-modal #helpModalHeader div.header-icons.right-group',
            },
            requiredElements: [
                '__root',
            ]
        });
    }
    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'alias':
                await this.productDetailContainer.alias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header product detail':
                await this.headerProductDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product detail':
                await this.productDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number':
                await this.productDetailContainer.contractValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'performance':
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
                if (value === 'positive') {
                    await this.productDetailContainer.performanceMonthPositive.waitForDisplayed({timeout: config.wait.L});
                } else {
                    await this.productDetailContainer.performanceMonthNegative.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'operatives btrader':
                await this.productDetailContainer.operatives.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button buy':
                await this.productDetailContainer.buttonBuy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button orders':
                await this.productDetailContainer.buttonOrders.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button transfer':
                await this.productDetailContainer.buttonTransfer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit alias':
                await this.productDetailContainer.buttonEditAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link information invest':
                await this.balanceInformationToInvest.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title information modal':
                await this.productDetailContainer.textTitleInfoBalanceModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit information modal':
                await this.productDetailContainer.exitInfoBalanceModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title body information modal':
                await this.productDetailContainer.titleBodyInfoBalanceModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullet one information modal':
                await this.productDetailContainer.bulletBodyInfoBalanceModalOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock market investment detail':
                await this.investmentListContainer.investmentDetailConteiner.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment list':
                await this.investmentListContainer.investmentList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets list':
                await this.investmentListContainer.otherMarkets.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'user portfolio':
                await this.userPortfolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment list header collapse':
                await this.headerCollapse.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment list amount':
                await this.investmentListAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail share':
                await this.shareApple.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'last amount':
                await this.investmentListContainer.lastAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets cash today tooltip':
                await this.investmentListContainer.otherMarketsCashTodayTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets expires 24 tooltip':
                await this.investmentListContainer.otherMarketsExpires24Tooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets expires 48 tooltip':
                await this.investmentListContainer.otherMarketsExpires48Tooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets expires modal':
                await this.investmentListContainer.otherMarketsExpiresModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets expires modal close':
                await this.investmentListContainer.otherMarketsExpiresModalClose.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'investment other markets expires modal title':
                await this.investmentListContainer.otherMarketsExpiresModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment other markets expires modal text':
                await this.investmentListContainer.otherMarketsExpiresModalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail':
                await this.investmentDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail header title':
                await this.investmentDetailContainer.investmentDetailHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail alias':
                await this.investmentDetailContainer.investmentDetailAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail contract value':
                await this.investmentDetailContainer.investmentDetailContractValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail performance':
                await this.investmentDetailContainer.investmentDetailPerformance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail portfolio':
                await this.investmentDetailPortfolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail operatives':
                await this.investmentDetailContainer.investmentDetailOperatives.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail buy titles operative':
                await this.investmentDetailContainer.investmentDetailBuyOperative.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail sell titles operative':
                await this.investmentDetailContainer.investmentDetailSellOperative.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail market positions':
                await this.investmentDetailMarketpositions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail balance to investment tooltip':
                await this.investmentDetailBalanceToInvestmentTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail balance to investment modal title':
                await this.investmentDetailContainer.investmentDetailBalanceToInvestmentModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail balance to investment modal close':
                await this.investmentDetailContainer.investmentDetailBalanceToInvestmentModalClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail balance to investment modal text':
                await this.investmentDetailContainer.investmentDetailBalanceToInvestmentModalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment detail balance to investment modal bullets':
                await this.investmentDetailContainer.investmentDetailBalanceToInvestmentModalBullets.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search':
                await this.stockSearch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search header title':
                await this.stockSearchHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search input':
                await this.stockSearchInput.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'stock search header close':
                await this.stockSearchClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search issuer list item':
                await this.stockSearchIssuerListItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search issuer list':
                await this.stockSearchIssuerList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search text without result':
                await this.stockSearchTextWithoutResult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search text retry':
                await this.stockSearchTextRetry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'stock search error':
                await this.stockSearchError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'textbox searching':
                await this.textBoxSearching.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header orderlist':
                await this.textHeaderOrderList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'filter orderlist':
                await this.orderListContainer.filterOrdersText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'filter orderlist button':
                await this.orderListContainer.filterOrdersButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order date indicator':
                await this.orderDateIndicator.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order status':
                await this.orderListContainer.orderStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information order card one':
                await this.orderListContainer.informationOrderCardOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'filter order list accept':
                await this.orderListFilterOrdersAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title filter order list':
                await this.orderListContainer.textHeaderFilterOrderList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order list filter tag':
                await this.orderListFilterTag.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order list filter tag edit link':
                await this.orderListFilterTagEditLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order list filter tag cancel':
                await this.orderListFilterTagCancel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order list filter exit':
                await this.orderListContainer.orderListFilterExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order list back mini':
                await this.orderListBackMiniButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail button':
                await this.orderListContainer.orderDetailAccessLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail header':
                await this.orderDetailHeaderText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail order status':
                await this.orderDetailOrderStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail order status pending':
                await this.orderDetailOrderStatusEarring.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail order status monitoring':
                await this.orderDetailOrderStatusMonitoring.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail order status executed':
                await this.orderDetailOrderStatusExecuted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail order status canceled':
                await this.orderDetailOrderStatusCanceled.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail purchase status':
                await this.orderDetailPurchaseStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail sale status':
                await this.orderDetailSaleStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail cancel order button':
                await this.orderDetailCancelStockButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail type order limited':
                await this.orderDetailTypeOrderLimited.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail type order condicioned':
                await this.orderDetailTypeOrderCondicioned.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail details title':
                await this.orderDetailDetailsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail details':
                await this.orderDetailDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail monitoring card':
                await this.orderListContainer.orderDetailCardMonitoring.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail executed card':
                await this.orderListContainer.orderDetailCardExecuted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail executed purchase card':
                await this.orderListContainer.orderDetailCardExecutedPurchase.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail canceled purchase card':
                await this.orderListContainer.orderDetailCardCanceledPurchase.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order cancel button':
                await this.CancelStockAccessLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail back mini':
                await this.orderDetailBackMiniButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no titles text':
                await this.noTitlesText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search issuer text':
                await this.searchIssuerText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search issuer button':
                await this.searchButtonNoTitles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to totals titles tooltip':
                await this.orderDetailToolTipTotalsTitlesToolTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to assigned titles tooltip':
                await this.orderDetailToolTipAssignedTitlesToolTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to totals titles tooltip for canceled':
                await this.orderDetailToolTipTotalsTitlesToolTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to assigned titles tooltip for canceled':
                await this.orderDetailToolTipAssignedTitlesToolTipCanceled.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to pending titles tooltip':
                await this.orderDetailToolTipPendingTitlesToolTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to canceled titles tooltip':
                await this.orderDetailToolTipCanceledTitlesToolTip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to totals titles information':
                await this.orderDetailToolTipTotalsTitlesInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to totals titles close':
                await this.orderDetailToolTipTotalsTitlesClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to totals titles text':
                await this.orderDetailToolTipTotalsTitlesText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to totals titles text body':
                await this.orderDetailToolTipTotalsTitlesTextBody.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to assigned titles information':
                await this.orderDetailToolTipAssignedTitlesInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to assigned titles close':
                await this.orderDetailToolTipAssignedTitlesClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to assigned titles text':
                await this.orderDetailToolTipAssignedTitlesText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to assigned titles text body':
                await this.orderDetailToolTipAssignedTitlesTextBody.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to pending titles information':
                await this.orderDetailToolTipPendingTitlesInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to pending titles close':
                await this.orderDetailToolTipPendingTitlesClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to pending titles text':
                await this.orderDetailToolTipPendingTitlesText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to pending titles text body':
                await this.orderDetailToolTipPendingTitlesTextBody.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to canceled titles information':
                await this.orderDetailToolTipCanceledTitlesInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to canceled titles close':
                await this.orderDetailToolTipCanceledTitlesClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to canceled titles text':
                await this.orderDetailToolTipCanceledTitlesText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order detail balance to canceled titles text body':
                await this.orderDetailToolTipCanceledTitlesTextBody.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async selectOperative(operation, issuer) {
        if (operation === 'purchases' || operation === 'sell' || operation === 'stop') {
            if (issuer) {
                await this.accessInvestmentDetailBtrader(issuer);
            }
            const operativeButton = operation === 'purchases'
                ? this.investmentDetailContainer.investmentDetailBuyOperative
                : this.investmentDetailContainer.investmentDetailSellOperative;
            await (await operativeButton.waitForClickable({timeout: config.wait.L})).click();
        } else if (operation === 'cancel') {
            await (await this.productDetailContainer.buttonOrders.waitForClickable({timeout: config.wait.L})).click();
            await (await this.orderListContainer.orderDetailAccessLink.waitForClickable({timeout: config.wait.L})).click();
            await (await this.CancelStockAccessLink.waitForClickable({timeout: config.wait.L})).click();
        }
    }

    async accessOrderListFilter(edit) {
        if (edit) {
            await (await this.orderListFilterTagEditLink.waitForClickable({timeout: config.wait.L})).click();
        } else {
            await (await this.orderListContainer.filterOrdersButton.waitForClickable({timeout: config.wait.L})).click();
        }
    }

    async filterOrderList({action, type, edit = false} = {}) {
        await this.accessOrderListFilter(edit);
        if (action === 'filters') {
            switch (type) {
                case 'pending orders':
                    if (this.isSpherica()) {
                        await (await this.orderListPendingRadioButton.waitForClickable({timeout: config.wait.M})).click();
                    } else {
                        await (await this.modalFilterOrderList.additionalElements.orderListPendingRadioButton
                            .waitForClickable({timeout: config.wait.M}))
                            .click();
                    }
                    break;
                case 'canceled orders':
                    if (this.isSpherica()) {
                        await this.orderListCanceledRadioButton.scrollIntoView();
                        await (await this.orderListCanceledRadioButton.waitForClickable({timeout: config.wait.M})).click();
                    } else {
                        await (await this.modalFilterOrderList.additionalElements.orderListCanceledRadioButton
                            .waitForClickable({timeout: config.wait.M})).click();
                    }
                    break;
                default:
                    throw new Error(`Filter type ${type} is not recognized.`);
            }
            if (this.isSpherica()) {
                await (await this.orderListFilterOrdersAccept.waitForClickable({timeout: config.wait.M})).click();
            } else {
                await (await this.modalFilterOrderList.additionalElements.orderListFilterOrdersAccept.waitForClickable({timeout: config.wait.M})).click();
            }
        }
        if (action === 'close') {
            if (this.isSpherica()) {
                await (await this.orderListContainer.orderListFilterExit.waitForClickable({timeout: config.wait.M})).click();
            } else {
                await (await this.modalFilterOrderList.additionalElements.orderListFilterExit.waitForClickable({timeout: config.wait.M})).click();
            }
        }
    }

    async accessOrderListBtrader() {
        await (await this.productDetailContainer.buttonOrders.waitForClickable({timeout: config.wait.M})).click();
    }

    async orderListSelect(type) {
        const orderTypes = {
            'pendiente limitada': {
                element: this.orderListContainer.orderPendingTypeLimited,
                status: this.orderListContainer.orderStatusPendingLim
            },
            'ejecutada condicionada': {
                element: this.orderListContainer.orderExecutedTypeConditioned,
                status: this.orderListContainer.orderStatusExecutedCon
            },
            'monitoreo condicionada': {
                element: this.orderListContainer.orderMonitoringTypeConditioned,
                status: this.orderListContainer.orderStatusMonitoringCon
            },
            'ejecutada limitada': {
                element: this.orderListContainer.orderExecutedTypeLimited,
                status: this.orderListContainer.orderStatusExecutedLim
            }
        };

        const order = orderTypes[type];
        if (!order) {
            throw new Error('Invalid type');
        }

        await order.element.waitForDisplayed({timeout: config.wait.L});
        await order.element.scrollIntoView();
        await order.status.waitForDisplayed({timeout: config.wait.L});
    }

    async accessOrderDetail(type) {
        await this.orderListContainer.filterOrdersButton.waitForDisplayed({timeout: config.wait.M});

        switch (type) {
            case 'a first order':
                if (this.isSpherica()) {
                    await (await this.orderListContainer.orderPendingTypeLimited.waitForClickable({timeout: config.wait.M})).click();
                    break;
                } else {
                    await (await this.orderListContainer.orderDetailAccessLink.waitForClickable({timeout: config.wait.M})).click();
                    break;
                }
            case 'a monitoring order':
                await (await this.orderListContainer.orderDetailCardMonitoring.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'a canceled purchase order':
                await (await this.orderListContainer.orderDetailCardCanceledPurchase.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Order type ${type} is not recognized.`);
        }
    }

    async openTooltipOrderDetail(type) {
        if(type === 'totals'){
            await (await this.orderDetailToolTipTotalsTitlesToolTip.waitForClickable({timeout: config.wait.M})).click();
        }else if(type === 'assigned'){
            await (await this.orderDetailToolTipAssignedTitlesToolTip.waitForClickable({timeout: config.wait.M})).click();
        }else if(type === 'pending'){
            await (await this.orderDetailToolTipPendingTitlesToolTip.waitForClickable({timeout: config.wait.M})).click();
        }else if(type === 'canceled'){
            await (await this.orderDetailToolTipCanceledTitlesToolTip.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async orderDetailBack() {
        await (await this.orderDetailBackMiniButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async showBalanceInformationToInvest() {
        await this.balanceInformationToInvest.waitForClickable({timeout: config.wait.M});
        await this.balanceInformationToInvest.click();
    }
    async exitBalanceInformationToInvest() {
        await this.showBalanceInformationToInvest();
        await this.productDetailContainer.exitInfoBalanceModal.waitForClickable({timeout: config.wait.M});
        await this.productDetailContainer.exitInfoBalanceModal.click();
    }

    async openOtherMarketsList() {
        await (await this.investmentListContainer.otherMarkets.waitForClickable({timeout: config.wait.M})).click();
        await this.investmentListContainer.otherMarkets.waitForAnimation({timeout: config.wait.M});
    }
    async openExpiresTodayModal() {
        await this.openOtherMarketsList();
        await (await this.investmentListContainer.otherMarketsCashTodayTooltip.waitForClickable({timeout: config.wait.M})).click();
    }
    async openExpires24Modal() {
        await this.openOtherMarketsList();
        await (await this.investmentListContainer.otherMarketsExpires24Tooltip.waitForClickable({timeout: config.wait.M})).click();
    }
    async openExpires48Modal() {
        await this.openOtherMarketsList();
        await (await this.investmentListContainer.otherMarketsExpires48Tooltip.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessInvestmentDetailBtrader(issuer) {
        if (issuer === 'naftrac') {
            await (await this.shareNaftrac.waitForClickable({timeout: config.wait.M})).click();
        }else if(issuer === 'other markets'){
            await this.openOtherMarketsList();
        }else if(issuer === 'apple' || issuer === 'investment'){
            await (await this.shareApple.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async saleAppleShareWithSwipe(){
        await (await this.shareAppleSwipeSaleButton.waitForClickable({timeout: config.wait.M})).click();
    }
    async openSwipeAppleShare(){
        await this.shareAppleSwipe.waitForDisplayed({timeout: config.wait.M});
        if (this.isSpherica()) {
            await this.swipeElement(this.shareAppleSwipe, 'left');
        } else {
            await this.shareAppleSwipe.execute({script: () => this.setAttribute('opening', 'left')});
        }
    }

    async selectOperativeSwipe(operation) {
        switch (operation) {
            case 'sell':
                await (await this.shareAppleSwipeSaleButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'buy':
                await (await this.shareAppleSwipeBuyButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Operation ${operation} is not recognized.`);
        }
    }

    async openBalanceToInvestmentModal() {
        await (await this.investmentDetailBalanceToInvestmentTooltip.waitForClickable({timeout: config.wait.M})).click();
    }

    async searchIssuerStock(issuer, action) {
        await (await this.productDetailContainer.buttonBuy.waitForClickable({timeout: config.wait.M})).click();
        await (await this.stockSearchInput.waitForClickable({timeout: config.wait.M})).click();
        await this.stockSearchInput.setValue({value: issuer, slow: true});

        if(action === 'and selects it'){
            await this.stockSearchIssuerList.waitForDisplayed({timeout: config.wait.M});
            await (await this.stockSearchIssuerListItem.waitForClickable({timeout: config.wait.M})).click();
        }else if(action === 'and exit to searching'){
            await (await this.stockSearchClose.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async accessEditAliasBtrader() {
        await (await this.productDetailContainer.buttonEditAlias.waitForClickable({timeout: config.wait.L})).click();
    }

    async orderListFilterCancel() {
        await (await this.orderListFilterTagCancel.waitForClickable({timeout: config.wait.L})).click();
    }

    async orderListBack() {
        await (await this.orderListBackMiniButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async showModalInformation(type) {
        switch (type) {
            case 'today':
                await this.openExpiresTodayModal();
                break;
            case '24':
                await this.openExpires24Modal();
                break;
            case '48':
                await this.openExpires48Modal();
                break;
            default:
                throw new Error(`Modal type "${type}" is not recognized.`);
        }
    }
}
export default new BtraderPage();
