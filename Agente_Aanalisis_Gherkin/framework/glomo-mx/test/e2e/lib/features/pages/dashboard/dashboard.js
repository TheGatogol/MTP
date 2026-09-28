import {Commands, ScreenValidationKeyNotFound, utils, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaWidgetCarouselAem from '../../components/bbva-widget-carousel-aem';
import CellsNavigationBar from '../../components/cells-navigation-bar';
import CellsNavigationBarSpherica from '../../components/cells-navigation-bar-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsOcBanner from '../../components/cells-oc-banner';
import CellsOcBannerSpherica from '../../components/cells-oc-banner-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import BbvaHelpModal from '../../components/bbva-help-modal';
import FeedbackClientVoiceConnect from '../../components/feedback-client-voice-connect-gl';
import TransitionContainerExperienceSection from '../../components/transition-container-list-experience-section';
import TransitionContainerListSmartServicing from '../../components/transition-container-list-smart-servicing';

/* Error messages */
const DEPOSIT_NUMBER_ERR = '[ERR] [DASHBOARD] [DEPOSIT] The number does not display';
const DEPOSIT_AVAILABLE_BALANCE_AMOUNT_ERR = '[ERR] [DASHBOARD] [DEPOSIT] The available balance amount is not the expected one';
const DEPOSIT_ALIAS_ERR = '[ERR] [DASHBOARD] [DEPOSIT] The visible name is not the expected one';
const DEPOSIT_AVAILABLE_BALANCE_AMOUNT_CURRENCY_ERR = '[ERR] [DASHBOARD] [DEPOSIT] The available balance currency is not the expected one';
const FUND_NUMBER_ERR = '[ERR] [DASHBOARD] [FUND] The number does not display';
const FUND_AVAILABLE_BALANCE_AMOUNT_ERR = '[ERR] [DASHBOARD] [FUND] The available balance amount is not the expected one';
const FUND_ALIAS_ERR = '[ERR] [DASHBOARD] [FUND] The visible name is not the expected one';
const FUND_AVAILABLE_BALANCE_AMOUNT_CURRENCY_ERR = '[ERR] [DASHBOARD] [FUND] The available balance currency is not the expected one';
const INSURANCE_FREQUENCY_ERR = '[ERR] [DASHBOARD] [INSURANCE] The label insurance frequency does not display';
const INSURANCE_NAME_ERR = '[ERR] [DASHBOARD] [INSURANCE] The module name is not the expected one';
const INSURANCE_NUMBER_ERR = '[ERR] [DASHBOARD] [INSURANCE]  The number does not display';
const INSURANCE_AMOUNT_ERR = '[ERR] [DASHBOARD] [INSURANCE]  The available balance amount does not display';

const FOOTER_TABS = {
    HOME: 'home',
    CHECK_UP: 'pfmCheckup',
    ADD: 'add',
    MAIL: 'mail',
    CONTACT: 'contact',
};

const VIEW_MODE = {
    ALL_MERCHANTS: 'all-merchants',
    ONE_MERCHANT: 'one-merchant',
    CHARGEBACKS: 'chargebacks'
};

const currencyDescriptions = {
    MXN: 'Cuentas en pesos',
    USD: 'Cuentas en dólares',
    EUR: 'Cuentas en euros'
};

const ariaLabelHeaderProduct = {
    'dashboard_equity' : 'Contratos patrimoniales',
    'equity_dashboards' : 'Contratos patrimoniales',
    'dashboard_united_linked' : 'Multiestrategia libre',
    'dashboard_unit_linked' : 'Multiestrategia libre',
    'dashboard_cards' : 'Tarjetas',
    'operationals' : 'Tarjetas',
    'dashboard_deposits' : 'Inversiones a Plazo',
    'dashboard_funds' : 'FONDOS DE INVERSIÓN',
    'dashboard_loans' : 'Créditos'
};

/* PATHS */
const ACCOUNTS_ITEM_PATH = 'global-products-list#__skeleton__ div.products cells-product-item[data-currency="__currency__"]';
const ACCOUNTS_ITEM_PATH_SPHERICA = 'global-products-list-spherica#__skeleton__ div.products cells-product-item-spherica[data-currency="__currency__"]';
const ACCOUNTS_ITEM_PATH_INFO = `${ACCOUNTS_ITEM_PATH} div.item div.item__info`;
const ACCOUNTS_ITEM_PATH_INFO_SPHERICA = `${ACCOUNTS_ITEM_PATH_SPHERICA} div.item div.item__info`;
const ACCOUNTS_ITEM_PATH_QUANTITIES = `${ACCOUNTS_ITEM_PATH} div.item div.item__quantities`;
const ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA = `${ACCOUNTS_ITEM_PATH_SPHERICA} div.item div.item__quantities`;
const ACCOUNTS_ITEM_PATH_HEADER = 'global-products-list#__skeleton__ div.products cells-atom-subheader span[aria-label="__arialabelheader__"]';
const ACCOUNTS_ITEM_PATH_HEADER_SPHERICA = 'global-products-list-spherica#__skeleton__ div.products cells-atom-subheader-spherica span[aria-label="__arialabelheader__"]';
const ACCOUNTS_ITEM_PATH_HEADER_BUTTON = `${ACCOUNTS_ITEM_PATH_HEADER} ~ cells-st-button.transparent:not([hidden]) button`;
const ACCOUNTS_ITEM_PATH_HEADER_ADDITIONAL = `${ACCOUNTS_ITEM_PATH_HEADER} ~ div.products-header__additional`;
const ACCOUNTS_ITEM_PATH_HEADER_ADDITIONAL_SPHERICA = `${ACCOUNTS_ITEM_PATH_HEADER_SPHERICA} ~ div.products-header__additional`;
const NOTIFICATIONS_ITEM = 'cells-notifications.card div.wrapper';
const NOTIFICATIONS_ITEM_SPHERICA = 'cells-notifications-spherica.card div.wrapper';
let idAccounts;

@page('Dashboard')
class Dashboard extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dashboard[state="active"]',
            name: 'dashboard',
            elements: {
                dashboardFutura:'#futuraDashboard',
                dashboardBody:'cells-organism-menu-sidebar',
                transfer: '#dashboard_header cells-operations-list-indicators cells-operations-list .list .list__item[data-selector="transfer"]',
                transferFutura:'[id="transfers"]',
                opportunities: '#dashboard_header cells-operations-list-indicators cells-operations-list .list .list__item[data-selector="opportunities"]',
                cardlessWithdrawal: '#dashboard_header cells-operations-list-indicators cells-operations-list .list .list__item[data-selector="cardLessWithdraw"]',
                refactorTransfer: 'div#refactorTransfers',
                operations: '#container-frequentActions',
                operationsMore: '#dashboard_header cells-operations-list-indicators cells-operations-list .list .list__item[data-selector="operationsMore"]',
                operationsMoreFutura:'#frequentActions [data-tag-name="bbva-carousel-default"] #moreActions',
                requestMoney: '#dashboard_header cells-operations-list-indicators cells-operations-list .list .list__item[data-selector="requestMoney"]',

                faqsBtn: '#btnRightSecondary',
                fundsSubHeaderText: '#skeleton9 cells-atom-subheader:nth-of-type(1) span[slot=heading]',
                fundsSubHeaderBalance: '#skeleton9 cells-atom-subheader:nth-of-type(1) cells-atom-amount',
                firstFundType: '#skeleton9 cells-product-item:nth-of-type(1) .item__info .item__title .item__name',
                firstFundAmount: '#skeleton9 cells-product-item:nth-of-type(1) .item__quantities cells-atom-amount',
                firstFundNumber: '#skeleton9 cells-product-item:nth-of-type(1) .item__info .item__title .item__additional',
                fundsPesos: '#skeleton9 div.products:nth-of-type(1) cells-atom-subheader span',
                fundsDollars: '#skeleton9 div.products:nth-of-type(2) cells-atom-subheader span',
                fundsContainer: '#skeleton9 cells-product-item',
                fundName: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] cells-heading.item__name',
                fundLiteral: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] span.amount-label',
                fundAmount: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] div.item__quantities cells-atom-amount',
                instantCash: '#dashboard-banner #banner section div.banner__main cells-st-button button',
                activeAccounts: '#skeleton1 cells-product-item.activated',
                cardOff: 'cells-product-item.off.name-one-line',

                //ocAccess
                ocAccessFuturaCard:'#nbo .card-offer-content',
                ocAccessFutura:'#nbo .card-offer-content [aria-label="¡Me interesa! __OFFER__"]',
                ocAccessClose:'#nbo [data-tag-name="bbva-button-close"]',
                ocAccess: {
                    component: {
                        ComponentClass: CellsOcBanner,
                        args: {
                            root: 'cells-oc-banner#dashboard-banner'
                        }
                    }
                },
                futuraNboSection: '#nbo',
                futuraNbo: {
                    properties: { root: '#nbo-collection' },
                    futuraNboIdentifier: '#carouselTwoColumns #carouselSlides',
                    futuraNboIconMore: '[data-tag-name="bbva-type-icon"]',
                    futuraNboLookingMoreText: '#carouselTwoColumns [data-tag-name="bbva-type-text"][tag="h3"]',
                    futuraNboText: '#carouselTwoColumns .panel-offer-wrapper [data-tag-name="bbva-type-text"][tag="span"]',
                    futuraNboLinkViewMore: 'bbva-header-category .options-right bbva-type-link',
                    futuraNboCloseButton: '#carouselTwoColumns .swiper-slide-active [data-tag-name="bbva-button-close"]',
                },

                // Income x Expenses card
                incomesTitle: 'glomo-incomes-expenses-summary-card div.main__body #progressBarComparator #incomeAmount .iconTitle',
                incomesAmount: 'glomo-incomes-expenses-summary-card div.main__body #progressBarComparator #incomeAmount .divAmount',
                incomesProgressBar: 'glomo-incomes-expenses-summary-card div.main__body #progressBarComparator #incomeAmount .divChart',
                expensesTitle: 'glomo-incomes-expenses-summary-card div.main__body #progressBarComparator #incomeAmount .iconTitle',
                expensesAmount: 'glomo-incomes-expenses-summary-card div.main__body #progressBarComparator #incomeAmount .divAmount',
                expensesProgressBar: 'glomo-incomes-expenses-summary-card div.main__body #progressBarComparator #incomeAmount .divChart',
                incomesExpensesPFMAccess: 'glomo-incomes-expenses-summary-card button.link.titleHeader',

                //deposits
                depositPesosTitle: '#skeleton9 div.products:nth-of-type(1) cells-atom-subheader',
                depositDollarsTitle: '#skeleton9 div.products:nth-of-type(2) cells-atom-subheader',
                depositName: 'cells-product-item[data-selector="__LAST_DIGITS__"] cells-heading.item__name',
                typeProduct: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] cells-heading.item__data-type',
                depositNumber: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] div.item__data .number',
                depositDueDate: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] div.expiration-date',
                depositAmount: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] div.item__quantities cells-atom-amount',
                depositLiteral: '#skeleton9 cells-product-item[data-selector="__LAST_DIGITS__"] span.amount-label',
                depositContainer: '#skeleton9 cells-product-item',

                emailValidationBanner: '#email-validation-banner:not([hidden]) div.banner-opened',
                emailValidationBannerCloseBtn: '#email-validation-banner:not([hidden]) cells-st-button.banner__exit',
                emailValidationBannerLink: '#email-validation-banner:not([hidden]) .banner__main button.banner__link',
                emailValidationBannerText: '#email-validation-banner:not([hidden]) p.banner__text',

                page: '',
                scroll: '',
                softToken: '#softTokenDoesNotExistForWeb',
                avatar: 'cells-contact-avatar div.wrapper',
                avatarImage: '.cells-contact-avatar__image',
                avatarText: '.cells-contact-avatar__initial',
                lifePoints: '.text',
                greeting: '#header #titleZone',

                // use :not to select the greeting message instead of the initials in the avatar circle
                sidebarButton: '[slot=app__header] #btnRight',
                sidebarButtonFutura: '#btn-menu',

                // Products
                buttonProductos:'[data-select="futuraDashboard"] #tab-1',
                products: 'global-products-list .products',
                cardOfferNBA: '[data-tag-name="bbva-carousel-default"] .carousel-container #carouselSlides [data-tag-name="app-info-structure-home-next-best-action-gl-list-offer"]',
                numberProduct:'app-info-structure-home-core-gl [data-tag-name="app-info-structure-home-dashboard-gl-product-container"] [number="__LAST_DIGITS__"]',
                numberProductLoans: '[family-container="loans"] [contract-id="__DATA_ID__"]',
                numberAccount: '[data-tag-name="app-info-structure-home-dashboard-gl-product-basic"] [text="__LAST_DIGITS__"]',
                modules: 'global-products-list cells-atom-subheader span[slot=heading]',
                lastDigits: 'cells-product-item[data-selector*="__LAST_DIGITS__"i]',
                dashboardCommonAccount: '#skeleton1 cells-product-item[data-id="__DATA_ID__"]',
                firstAccount: '#skeleton1 cells-product-item',
                firstCard: '#skeleton2 cells-product-item',
                secondAccount: '#skeleton1 cells-product-item[data-id="2022220014020050140000000"]',
                dashboardCreditAccount: '#skeleton1 cells-product-item[data-id="__DATA_ID__"]',
                dashboardCreditCard: '#skeleton2 cells-product-item[data-selector="__DATA_ID__"i]',
                dashboardLoan: '',
                dashboardFirstLoan: '#skeleton4 cells-product-item',
                dashboardDeposit: '',
                profileInitials: '',
                allowModalButton: '',
                visibleNameByLastDigists: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] cells-heading.item__name',
                descriptionByLastDigists: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] cells-molecule-mask div.wrapper',
                balanceBox: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper',
                balanceByLastDigists: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span:not([hidden])',
                balanceAmountByLastDigists: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span:not([hidden]):not(.currency)',
                balanceByLastDigistsCurrency: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span.currency:not([hidden])',
                balanceLabelByLastDigists: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-label',
                productDataId: 'cells-product-item[data-id="__DATA_ID__"]',
                productDataIdFutura: 'app-info-structure-home-dashboard-gl [contract-id="__DATA_ID__"]',
                agreementByLastDigists: 'cells-product-item[data-selector*="__LAST_DIGITS__"] div.item__secondary-amount span.amount-label',
                closeModal: 'cells-notifications #rightButton button',
                assistanceButton: '.message #bottomButton button',
                footerLinkProductsList: 'global-products-list cells-link-list#light',
                footerLinkProductsListFutura:'[data-tag-name="app-info-structure-home-dashboard-gl-family-link"] [data-tag-name="bbva-type-link"]',

                // Credit Card
                $label: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-label',
                US$label: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__secondary-amount span.amount-label',
                debtCurrencyDollars: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.currency.currency--left',
                debtCurrencyUYDollars: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__secondary-amount span.currency.currency--left',
                debitNumberFutura: 'app-info-structure-home-dashboard-gl-card-basic[card-id="VD"][card-mask="__LAST_DIGITS__"]',
                numberFutura: '[card-mask="__LAST_DIGITS__"]',
                number: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] cells-molecule-mask span.number',
                status: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.status',
                debtDollars: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span:not([hidden])',
                debtUYDollars: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] div.item__secondary-amount span.amount-wrapper span:not([hidden])',
                selectCard: '#NQuIahTNnwe_OeKyn6EvL4YG4pIfyXXzKqSK7Q1aFfw',

                // Additional Card
                cardInfo: 'cells-product-item.activate[data-is-additional-card="true"]',
                cardInfoFutura: '[family-container="cards"] [card-status="pending"]',
                cardInfoOperative: 'cells-product-item.operative[data-is-additional-card="true"]',
                cardInfoOff: 'cells-product-item.off[data-is-additional-card="true"]',
                nameCard: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] cells-heading.item__name',
                imgCard: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] img',
                numberCard: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] .number',
                additionalLabel: 'cells-product-item[data-selector*="__LAST_DIGITS__"i] .amount',

                // Loans
                loan: '#skeleton4 cells-product-item:nth-of-type(1)',
                loanPersonal: '#skeleton4 [data-selector="Personal - 00746777009600789181"]',
                loanSubHeaderText: '#skeleton4 cells-atom-subheader:nth-of-type(1) span[slot=heading]',
                loanSubHeaderBalance: '#skeleton4 cells-atom-subheader:nth-of-type(1) cells-atom-amount',
                firstLoanType: '#skeleton4 cells-product-item:nth-of-type(1) .item__info .item__title .item__name',
                firstLoanAmount: '#skeleton4 cells-product-item:nth-of-type(1) .item__quantities cells-atom-amount',
                firstLoanNumber: '#skeleton4 cells-product-item:nth-of-type(1) .item__info .item__title .item__additional',
                firstLoanMaturityDate: '#skeleton4 cells-product-item:nth-of-type(1) .expiration-date',
                loanSecondSubHeaderBalance: '#skeleton4 cells-atom-subheader:nth-of-type(2) span[slot=heading]',
                amountLabelLoan: '#skeleton4 cells-product-item .item__quantities .item__amount .amount-label',

                //Mortgage Payment
                mortgagePayment: 'cells-product-item [data-selector*="__MORTGAGE_CREDITS__"i]',

                // Insurances
                headerTitle: '#skeleton8 section > div > cells-atom-subheader > span',
                productTitle: '#skeleton8 section > div > cells-product-item div.column > div > div.item__info > div.item__title > div.item__name > span',
                policyNumber: '#skeleton8 section > div > cells-product-item div.column > div > div.item__quantities > div',
                policyNumberLabel: '#skeleton8 div.products [data-product-type="INSURANCE"] div.column div.item__info',

                // Current trip
                currentTripCard: 'cells-trip-header div.main__body',
                currentTripTitle: 'cells-trip-header cells-heading.trip-header__title',
                currentTripImage: 'cells-trip-header iron-image#bgImg img',
                currentTripLink: 'cells-trip-header cells-st-button.link button',

                // Banners
                offersBannersDescriptions: 'p.banner__description',
                offersBannersType: 'cells-st-button[data-selector*="__OFFER_TYPE__"]',
                dataProtectionBanner: '#data-protection-banner div.banner-opened',
                dataProtectionBannerConsultButton: '#data-protection-banner button.banner__link',
                dataProtectionBannerCloseButton: '#data-protection-banner cells-st-button.banner__exit',
                interestedButton: '#dashboard-banner #banner section div.banner__main cells-st-button button',

                //Business Inteligence Overview Card
                businessInteligenceOverviewCard: '[data-tag-name="payments-business-inteligence-overview"] [data-tag-name="payments-business-inteligence-overview-card"] [data-tag-name="bbva-header-category"]',
                businessInteligenceOverviewOneMerchantAccess: '[data-tag-name="payments-business-inteligence-overview-card"] [data-tag-name="payments-business-inteligence-overview-item-detail"]:first-of-type',
                businessInteligenceOverviewChargebacksAccess: '[data-tag-name="payments-business-inteligence-overview-card"] [data-tag-name="payments-business-inteligence-overview-item-link"]',
                futuraYouProducts: '[data-select="futuraDashboard"] #tabs #tab-1',
                businessInteligenceOverviewAllMerchantsAccess: '[data-select="futuraDashboard"] [data-tag-name="bbva-type-link"][text="Ver mi negocio"]',
                //helpSection
                helpIcon: ' [data-select="app__header"] button#btnRightSecondary',
                helpIconFutura: '[data-tag-name="bbva-header-main"] #btn-help',

                //Insurances
                nameInsurance: 'cells-product-item[data-selector*="__LAST_DIGITS__"] cells-heading.item__name',
                numberInsurance: 'cells-product-item[data-selector*="__LAST_DIGITS__"] .number',
                amountInsurance: 'cells-product-item[data-selector*="__LAST_DIGITS__"] div.item__primary-amount span.amount-wrapper span:not([hidden])',
                insuranceFrequency: 'cells-product-item[data-selector*="__LAST_DIGITS__"] div.item__primary-amount span.amount-label',
                overdueView: 'cells-product-item[data-selector*="__LAST_DIGITS__"] .text-right-image',

                // Deposits
                due: 'cells-product-item[data-selector*="__LAST_DIGITS__"] div[slot=text-below-image]',
                currency: 'cells-product-item[data-selector*="__LAST_DIGITS__"] span.currency',
                literal: 'cells-product-item[data-selector*="__LAST_DIGITS__"] span.amount-label',
                depositValue: 'cells-product-item[data-selector*="__LAST_DIGITS__"] span.amount-wrapper',

                //Equity
                equity: '#skeleton3 cells-product-item',
                equityFutura: '#equityContract [data-tag-name="app-info-structure-home-dashboard-gl-product-basic"]',

                //Btrader
                btrader: '#skeleton11 cells-product-item',
                btraderContractOne: '#skeleton11 section > div > cells-product-item[data-id="Td-tykaA8AqC0dXrBOM4DZ4yIMHfRgKVQvF9FNn_ZXaPeR4qqBh3kQ"]',
                btraderContractTwo: '#skeleton11 section > div > cells-product-item[data-id="Td-tykaA8AoLZWgluK9MOsrczwJHqvRQEEcTpI8Egw-KG3YqFtS9fA"] ',
                btraderContainer: '#skeleton11 section > div',

                //Menu PE frequent operations Button
                btnFrequentOp: 'cells-navigation-bar .list .list__item a[href="#/frequent-operations"]',

                //Unit Linked
                unitLinked: '#skeleton7 cells-product-item',
                unitLinkedFutura:'[family-container="patrimoniales"] #mlb [data-tag-name="app-info-structure-home-dashboard-gl-product-basic"]',
                unitShowBalance: '#skeleton7 #on',
                unitLoadingError: '#skeleton7 section div div cells-icon-message #notInline',
                unitRetry: '#skeleton7 section div div cells-icon-message div cells-st-button button',

                //Transfer
                originTransferDashboard: 'cells-operations-list .list__item[data-selector="transfer"] button',

                // OTP sms
                otpSmsInput: {
                    web: 'cells-sign#sign #user-input-pwd #ironInput input',
                    isWithoutRoot: true,
                },
                otpSmsConfirmButton: {
                    web: 'cells-st-button#accept button.btn',
                    isWithoutRoot: true,
                },
                // Experiences
                experiencesCarousel:BbvaWidgetCarouselAem,
                experiencesCarouselFutura: '[smart-space-id="home_experiences"]',
                experiencesCarouselHidden: 'bbva-widget-carousel-aem[hidden]',
                experiencesCarouselErrorMessage: 'bbva-widget-carousel-aem [data-tag-name=bbva-notification-message]',

                // Footer
                footer: [
                    CellsNavigationBar,
                    {
                        itemList: {
                            [FOOTER_TABS.HOME]: 'dashboard',
                            [FOOTER_TABS.CHECK_UP]: 2,
                            [FOOTER_TABS.ADD]: 3,
                            [FOOTER_TABS.MAIL]: 4,
                            [FOOTER_TABS.CONTACT]: 5,
                        },
                    }
                ],

                investmentsFollowUp: '#skeleton9 cells-link-list .content button',
                investAdvisoryTitle: '#skeleton9 span span[slot=heading]',
                investAdvisory: '#skeleton9 cells-product-item[data-type="invest-advisory-item-tap"]',
                investAdvisoryFutura: '[family-container="investments"] [number="__LAST_DIGITS__"]',

                // DASHBOARD
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                        args: {
                            modifiers: '#appHeader'
                        }
                    }
                },
                title: 'global-products-list#__skeleton__ div.products cells-atom-subheader span[aria-label="__arialabelheader__"]',
                titleAmount: `${ACCOUNTS_ITEM_PATH_HEADER_ADDITIONAL} cells-atom-amount span.amount-wrapper`,
                titleCurrencyAmount: `${ACCOUNTS_ITEM_PATH_HEADER_ADDITIONAL} cells-atom-amount span.amount-wrapper span.currency:not([hidden])`,
                alias: `${ACCOUNTS_ITEM_PATH_INFO} div.item__title div.item__name span.item__label`,
                amount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__amount cells-atom-amount span.amount-wrapper`,
                accountBalance: '#skeleton1 [id="__ID__"]',
                goalAlias: 'cells-product-item[data-sub-product-type="0004"]  div.item__title div.item__name span.item__label',
                goalAmount: 'cells-product-item[data-sub-product-type="0004"] div.item__amount cells-atom-amount span.amount-wrapper',
                goalAccount: ' cells-product-item[data-sub-product-type="0004"] .item__additional .number',
                currencyAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__amount cells-atom-amount span.amount-wrapper span.currency:not([hidden])`,
                numberContract: `${ACCOUNTS_ITEM_PATH_INFO} div.item__title div.item__additional div.item__data cells-molecule-mask div.wrapper span.number`,
                label: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__amount span.amount-label`,
                alert: `${ACCOUNTS_ITEM_PATH} ul.additional-list li.__alert__ span:nth-of-type(1)`,
                cardImage: `${ACCOUNTS_ITEM_PATH_INFO} div.item__title div.item__additional div.item__image cells-molecule-card-cover-ccds-wrapper cells-molecule-card-cover iron-image#image img#img`,
                primaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__primary-amount cells-atom-amount span.amount-wrapper`,
                currencyPrimaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__primary-amount cells-atom-amount span.amount-wrapper span.currency:not([hidden])`,
                labelPrimaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__primary-amount span.amount-label`,
                secondaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__secondary-amount cells-atom-amount span.amount-wrapper`,
                currencySecondaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__secondary-amount cells-atom-amount span.amount-wrapper span.currency:not([hidden])`,
                labelSecondaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES} div.item__secondary-amount`,
                iconVirtualCard: `${ACCOUNTS_ITEM_PATH} [data-selector="cells-molecule-card-cover-img"]`,
                messageStatusRight: `${ACCOUNTS_ITEM_PATH} div[slot="text-right-image"]`,
                messageStatusBelow: `${ACCOUNTS_ITEM_PATH} div[slot="text-below-image"]`,
                overlayCardImage: `${ACCOUNTS_ITEM_PATH_INFO} div.item__title div.item__additional div.item__image cells-molecule-card-cover-ccds-wrapper cells-molecule-card-cover div.icon-text-container cells-atom-icon iron-icon`,
                toggleButton: ACCOUNTS_ITEM_PATH_HEADER_BUTTON,
                rewardsLandingAccess:'[data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                rewardsLandingAccessDescription: '[data-tag-name="dashboard-rewards"] [data-tag-name="bbva-panel-container"] .description',
                disableButton: '#skeleton3 #off',
                advised: '#skeleton3 section',
                invest: '#skeleton9 section [class="products "]',
                legal: '#skeleton1 section [class="products "]',
                activity: '#skeleton9 section [class="products "]',
                messageExpired: '#skeleton2 section [class="text-right-image status locked"]',

                //Notifications
                iconNotificationCard: `${NOTIFICATIONS_ITEM} iron-icon svg`,
                headingNotificationCard: `${NOTIFICATIONS_ITEM} div.message cells-heading.message__heading`,
                messageNotificationCard: `${NOTIFICATIONS_ITEM} div.message span.message__body`,
                buttonNotificationCard: `${NOTIFICATIONS_ITEM} div.message cells-st-button#bottomButton button`,
                closeButtonNotificationCard: `${NOTIFICATIONS_ITEM} cells-st-button.close-button button`,

                // Experiences Section
                carouselBbva: 'carousel-aem bbva-header-category[option-link]',
                carouselHeader: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"] [data-tag-name="bbva-header-category"][aria-disabled="false"][option-link] div.header-category div [data-tag-name="bbva-core-heading"]',
                metasSavingGoalsSlide: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"] [data-tag-name="bbva-carousel-swipe"]:nth-of-type(1)',
                metasSavingGoalsSlideDescription: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"] [data-tag-name="bbva-carousel-swipe"]:nth-of-type(1) .swiper-wrapper [data-tag-name="bbva-panel-offer"] .content-text',
                metasSavingGoalsSlideImage: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"] [data-tag-name="bbva-carousel-swipe"]:nth-of-type(1) .swiper-wrapper [data-tag-name="bbva-panel-offer"] .content-image',
                metasSavingGoalsSlideTitle: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"]  [data-tag-name="bbva-carousel-swipe"]:nth-of-type(1) .swiper-wrapper [data-tag-name="bbva-panel-offer"] .title',
                metasSavingGoalsSlideMetasLink: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"] [data-tag-name="bbva-carousel-swipe"]:nth-of-type(1) .swiper-wrapper [data-tag-name="bbva-panel-offer"] [data-tag-name="bbva-link"]',
                metasSavingGoalsSlideMetasLinkFutura: '[smart-space-id="home_experiences"] [data-internal-id="goals"] [data-tag-name="bbva-type-link"]',
                financialEducationLink: 'bbva-widget-carousel-aem [data-tag-name="carousel-aem"] [data-tag-name="bbva-carousel-swipe"]:nth-of-type(1) .swiper-wrapper [data-tag-name="bbva-panel-offer"] [data-tag-name="bbva-link"]',
                financialEducationLinkFutura:'[smart-space-id="home_experiences"] [name="financialEducation"] [data-tag-name="bbva-type-link"]',

                //Loan Relocation
                buttonLoanRelocation: '#dashboard-banner #banner section div.banner__main cells-st-button button.banner__link',
                textLoanRelocation: '#dashboard-banner #banner section div.banner__main p.banner__description',

                //Cases errors
                dashboardErrorHeading: 'cells-aggregation-error .heading-container',
                dashboardErrorMessage: 'cells-aggregation-error .message-container',
                dashboardRetryButton: 'cells-aggregation-error .buttons-container cells-st-button button',
                dashboardExitButton: 'cells-aggregation-error .buttons-container .secondary button',

                //Expenses Group
                panelExpensesGroup: '[data-tag-name="bbva-panel-offer"]',
                linkExpensesGroup: '[data-tag-name="bbva-panel-offer"] [data-tag-name="bbva-link"]',
                linkExpensesGroupFutura:'[smart-space-id="home_experiences"] [name="Grupo de gastos"] [data-tag-name="bbva-type-link"]',
                textExpensesGroupFutura:'[smart-space-id="home_experiences"] [name="Grupo de gastos"] [data-tag-name="bbva-type-text"]',
                imageExpensesGroupFutura:'[smart-space-id="home_experiences"] [name="Grupo de gastos"] [data-tag-name="bbva-banner-image"]',
                // Always On
                standInNotificationStatus: 'bbva-notification-status',

                //English App
                toastNotification: 'bbva-notification-toast.language-settings-notification-toast',

                dialogOperations: [
                    GlomoAlertManager
                ],
                frequentOperationsNoBalanceModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#frequentOperations',
                    }
                ],

                //Frequent operations
                btnFrequentOperations: 'cells-notifications #bottomButton button',
                firstViewBtn: 'bbva-technicalcore-footer-visibility #container .container-button-footer.overlay-button-footer-in bbva-button-default',

                // Coach Section
                coachSection: '#financialCoach',
                coachWidget: '[data-tag-name="app-info-structure-home-financial-coach-gl"]',
                coachWidgetLink: '[data-tag-name="app-info-structure-home-financial-coach-gl-list-link"]',

                //Financial Health
                homeFinancialHealth: '#container-financialHealth',
                widgetAdviceFinancialHealth: {
                    properties: {
                        root: '#container-financialHealth #financialHealth [data-tag-name="advice-home-advice-gl"]'
                    },
                    financialHealthWidgetLink: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                    financialHealthWidgetExpenses: '[data-tag-name="bbva-carousel-default"] .carousel-container #carouselSlides [data-tag-name="advice-home-advice-gl-card-carousel"][internal-id="FUPGEXP"]',
                    financialHealthWidgetIncomes: '[data-tag-name="bbva-carousel-default"] .carousel-container #carouselSlides [data-tag-name="advice-home-advice-gl-card-carousel"][internal-id="FUPGINC"]',
                    financialHealthWidgetInvestments: '[data-tag-name="bbva-carousel-default"] .carousel-container #carouselSlides [data-tag-name="advice-home-advice-gl-card-carousel"][internal-id="FUPGINV"]',
                },
                //Futura Dashboard
                futura: {
                    properties: { root: '#futuraDashboard' },
                    homeCore: {
                        properties: { root: '[data-tag-name="app-info-structure-home-core-gl"]' },
                        header: {
                            properties: { root: '[data-tag-name="bbva-header-main"]' },
                            showModeEyeIcon: '.left-group .icon#btn-show',
                            hideModeEyeIcon: '.left-group .icon#btn-hide',
                            intelligentModeEyeIcon: '.left-group .icon#btn-show-automatic',
                            homeTitle: '.header #heading bbva-type-text#text',
                            menuIconFutura:'#btn-menu',
                            blueIcon:'#btn-blue',
                            blueHelpButton: '#btn-help',
                        },
                        standInFuturaNotificationStatus: '.essential-mode [data-tag-name="bbva-notification-status"]',
                        essentialModeFeaturedMessage: '#tab-default-navigation div.panel.sticky-panel [data-tag-name="bbva-notification-message"]',
                        essentialModeFeaturedKnowMoreLink:'#tab-default-navigation div.panel.sticky-panel [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                        essentialModeProductsMessage: '#dashboard [data-tag-name="bbva-notification-message"]',
                        essentialModeProductsKnowMoreLink:'#dashboard [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                        tabs: {
                            properties: { root: '#tab-default-navigation' },
                            futuraTabButtonFeatured: '#tab-0',
                            yourProductsSectionButton: '#tab-1',
                        },
                        nba: {
                            properties: { root: '#nba' },
                            section: '[data-tag-name="app-info-structure-home-next-best-action-gl"]',
                            carousel: {
                                properties: { root: '[data-tag-name="bbva-carousel-default"]' },
                                slides: {
                                    properties: { root: '#carouselSlides' },
                                    firstCardCarouselNextBestAction: '#carouselSlides',
                                    titleFirstCardNextBestAction: '.swiper-slide-active [data-tag-name="app-info-structure-home-next-best-action-gl-list-offer"] [data-tag-name="bbva-type-text"] h2',
                                    descriptionFirstCardNextBestAction: '.swiper-slide-active [data-tag-name="app-info-structure-home-next-best-action-gl-list-offer"] [data-tag-name="bbva-type-text"]',
                                    linkFirstCardNextBestAction: '.swiper-slide-active [data-tag-name="app-info-structure-home-next-best-action-gl-list-offer"] [data-tag-name="bbva-type-link"]',
                                    closeButtonNextBestActions: '.swiper-slide-active [data-tag-name="bbva-button-close"]',
                                },
                                steps: {
                                    properties: { root: '.steps' },
                                    bestActionsLabel:'[data-tag-name="bbva-step-bar"]',
                                    counterCarouselItemsNextBestActions: '.steps-container [data-tag-name="bbva-type-text"]',
                                    buttonNextCardNextBestAction: '.chevrons [data-tag-name="bbva-button-default"].chevron-button.chevron-next',
                                    buttonLastCardNextBestAction: '.chevrons [data-tag-name="bbva-button-default"].chevron-button.chevron-prev',
                                }
                            }
                        },
                        mainProductsSection: '#mainCard',
                        mainProducts: {
                            properties: { root: '[data-tag-name="app-info-structure-home-main-card-gl"]#mainCard-collection' },
                            title: 'bbva-header-category .title-container [data-tag-name="bbva-type-text"]',
                            carousel: {
                                properties: { root: 'bbva-carousel-default#carouselMainCard' },
                                contractLink: 'app-info-structure-home-main-card-gl-last-card #see-all-link',
                                stepBar: 'bbva-type-text span',
                                chevronsButtons: '.chevrons',
                                chevronNext: '.chevrons .chevron-next',
                                chevronPrev: '.chevrons .chevron-prev',
                                labelNumber: '.steps-container bbva-type-text'
                            },
                            accounts: {
                                properties: { root: 'bbva-carousel-default#carouselMainCard [data-tag-name="app-info-structure-home-main-card-gl-account-basic"][contract-id="__CONTRACT-ID__"]' },
                                alias: '.header bbva-type-text',
                                number: '.header bbva-badge-reference',
                                amounts: '.amount-section .total-amount bbva-type-amount',
                                maskedAmounts: '.amount-section .total-amount bbva-type-amount[mask]',
                                balance: '#amount-section-tlp bbva-type-text',
                                movementsButton: 'app-info-structure-home-main-card-gl-movements .movements-link-container app-info-structure-home-main-card-gl-list-link',
                                billsButton: 'app-info-structure-home-main-card-gl-movements .analysis-link-container app-info-structure-home-main-card-gl-list-link',
                                pockets: '.pocket-section bbva-badge-default',
                            },
                            cards: {
                                properties: { root: 'bbva-carousel-default#carouselMainCard [data-tag-name="app-info-structure-home-main-card-gl-basic-card"][contract-id="__CONTRACT-ID__"]' },
                                alias: '.header bbva-type-text',
                                number: '.header bbva-badge-reference',
                                amounts: '.credit-total-amount bbva-type-amount',
                                maskedAmounts: '.credit-total-amount bbva-type-amount[mask]',
                                balance: '#amount-section-tlp bbva-type-text',
                                creditProgressBar: 'bbva-data-visualization-bar',
                                creditIcon: '.card-header .clip-container bbva-clip-card .image-card',
                                statusCard: 'bbva-badge-default',
                                movementsButton: 'app-info-structure-home-main-card-gl-movements .movements-link-container app-info-structure-home-main-card-gl-list-link',
                                billsButton: 'app-info-structure-home-main-card-gl-movements .analysis-link-container app-info-structure-home-main-card-gl-list-link'
                            },
                            loans: {
                                properties: { root: 'bbva-carousel-default#carouselMainCard [data-tag-name="app-info-structure-home-main-card-gl-loan-basic"]' },
                                title: ' [data-tag-name="bbva-type-text"]',
                                productReference: ' [data-tag-name="bbva-badge-reference"]',
                                amount: ' [data-tag-name="bbva-type-amount"]',
                                pendingText: ' [data-tag-name="bbva-type-text"]',
                                stepBar: ' [data-tag-name="bbva-type-text"] span'
                            }
                        },
                        smartServicingSection: '#smartServicing',
                        yourTodayShortcuts: {
                            properties: { root: 'app-info-structure-home-smart-servicing-gl#smartServicing-collection' },
                            title: 'app-info-structure-smart-servicing-gl-carousel bbva-header-category .title-container [data-tag-name="bbva-type-text"]',
                            card: {
                                properties: { root: 'bbva-carousel-default#carouselSmartServicing [data-tag-name="app-info-structure-smart-servicing-gl-card"][data-internal*="__ITEM-ID__"]' },
                                amounts: 'bbva-type-amount',
                                maskedAmounts: 'bbva-type-amount[mask]',
                            }
                        },
                        investmentSection: '#financialHealth',
                        financialHealth: {
                            properties: { root: '[data-tag-name="advice-home-advice-gl"]#financialHealth-collection' },
                            title: ' bbva-header-category .title-container [data-tag-name="bbva-type-text"]',
                            card: {
                                properties: { root: 'bbva-carousel-default [data-tag-name="advice-home-advice-gl-card-carousel"]' },
                                amounts: 'bbva-type-amount',
                                maskedAmounts: 'bbva-type-amount[mask]',
                                date: '#date-range [data-tag-name="bbva-type-text"]'
                            }
                        },
                    },
                    yourProducts: {
                        properties: { root: 'app-info-structure-home-dashboard-gl' },
                        accountsIncomesExpensesLink: '[family-container="accounts"] app-info-structure-home-dashboard-gl-family-link__HIDDEN_STATE__',
                        redeemPointsLink: '[data-tag-name="dashboard-rewards"] [data-tag-name="bbva-panel-container"]__HIDDEN_STATE__',
                        accounts: {
                            properties: { root: '[family-container=accounts] app-info-structure-home-dashboard-gl-product-account-family app-info-structure-home-dashboard-gl-product-family' },
                            title: 'bbva-header-category .title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                            card: {
                                properties: { root: '[role=list] app-info-structure-home-dashboard-gl-product-basic app-info-structure-home-dashboard-gl-product-container[contract-id="__CONTRACT-ID__"]' },
                                amounts: '#main-info .first-line bbva-type-amount',
                                alias: '#main-info .first-line bbva-type-text',
                                account: '#main-info .second-line bbva-badge-reference',
                                balanceLabel: '#main-info .second-line .align-end'
                            }
                        },
                        cards: {
                            properties: { root: '[family-container^=cards]' },
                            title: 'app-info-structure-home-dashboard-gl-product-family bbva-header-category .title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                            card: {
                                properties: { root: '[role=list] app-info-structure-home-dashboard-gl-card-basic app-info-structure-home-dashboard-gl-product-container[contract-id="__CONTRACT-ID__"]' },
                                amounts: '#main-info .first-line bbva-type-amount#main-amount',
                                alias: '#main-info .first-line bbva-type-text',
                                account: '#main-info .second-line bbva-badge-reference',
                                balanceLabel: '#main-info .second-line .align-end'
                            }
                        },
                        loans: {
                            properties: { root: '[family-container=loans] app-info-structure-home-dashboard-gl-product-family' },
                            title: 'bbva-header-category .title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                            card: {
                                properties: { root: '[role=list] app-info-structure-home-dashboard-gl-product-basic app-info-structure-home-dashboard-gl-product-container[contract-id="__CONTRACT-ID__"]' },
                                amounts: '#main-info .first-line bbva-type-amount',
                                alias: '#main-info .first-line bbva-type-text',
                                account: '#main-info .second-line bbva-badge-reference'
                            }
                        },
                        deposits: {
                            properties: { root: '[family-container=investments]' },
                            title: 'app-info-structure-home-dashboard-gl-product-family[family-name=Inversiones] bbva-header-category .title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                            card: {
                                properties: { root: '[role=list] app-info-structure-home-dashboard-gl-product-basic app-info-structure-home-dashboard-gl-product-container[contract-id="__CONTRACT-ID__"]' },
                                amounts: '#main-info .first-line bbva-type-amount',
                                alias: '#main-info .first-line bbva-type-text',
                                account: '#main-info .second-line bbva-badge-reference'
                            }
                        }
                    }
                },
                homeNextBestActions: '#nba',

                // Edufin Entrypoint
                homeEdufin: '#container-tipsFinanceProfiling',
                widgetEdufinEntrypoint: {
                    properties: {
                        root: '#container-tipsFinanceProfiling #tipsFinanceProfiling [data-tag-name="user-info-tips-finance-profiling-mx"] '
                    },
                    microillustration: '.entrypoint-container .panel-container-horizontal [data-tag-name="bbva-clip-microillustration"]',
                    description: '.entrypoint-container .panel-container-horizontal [data-tag-name="bbva-type-text"]',
                    edufinWidgetLink: '.entrypoint-container .panel-container-horizontal .type-link-bg [data-tag-name="bbva-type-link"]',
                },
                // Home Experiences
                listHomeExperience: TransitionContainerExperienceSection,
                futuraExperiencesSection: '#experiences',
                futuraExperiencesCarousel: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] #carouselSlides',
                futuraExperiencesLastCard: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide-active',
                futuraExperiencesNextCard: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide-active',
                futuraExperiencesUniqueCard: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide-active',
                futuraExperiencesCounter: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] .steps-container [data-tag-name="bbva-type-text"]',
                futuraExperiencesButtonNext: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] .steps .chevrons [data-tag-name="bbva-button-default"].chevron-button.chevron-next',
                futuraExperiencesButtonPrev: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] .steps .chevrons [data-tag-name="bbva-button-default"].chevron-button.chevron-prev',
                futuraExperiencesFirstCard: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide-active',
                futuraExperiencesViewAll: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"]',
                futuraExperiencesTitle: '#experiences #experiences-collection [data-tag-name="app-info-structure-experiences-section-gl-carousel"] .title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',

                // Home Frequent Actions
                futuraFrequentActionsSlides: '#frequentActions #frequentActions-collection [data-tag-name="bbva-carousel-default"] #carouselSlides',
                futuraFrequentActionTransfers: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#transfers',
                futuraFrequentActionBillPayments: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#billPayments',
                futuraFrequentActionCardlessWithdrawal: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#cardlessWithdrawal',
                futuraFrequentActionCreditCardPayment: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#cardCreditCardPayment',
                futuraFrequentActionMobileTopUp: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#mobileTopUp',
                futuraFrequentActionAtmLocator: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#atmLocator',
                futuraFrequentActionCardlessInquiry: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#cardlessWithdrawalHistoric',
                futuraFrequentActionInternationalTransfers: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#internationalTransfers',
                futuraFrequentActionGiftCard: '#frequentActions #frequentActions-collection [data-tag-name="bbva-button-row"]#blackhawkPurchase',
                futuraFrequentActionsTitle: '#frequentActions #frequentActions-collection [data-tag-name="bbva-header-category"] .title-container [data-tag-name="bbva-type-text"]',
                frequentActions: '#frequentActions',

                // Tabs
                futuraProductsTab: {
                    properties: { root: '#tab-default-navigation [data-tag-name="app-info-structure-home-dashboard-gl"]' },

                    futuraProductsAccountsTitle: '[data-tag-name="app-info-structure-home-dashboard-gl-product-family"] [data-tag-name="bbva-header-category"]',
                    futuraProductsAccountsAlias: 'section[family-container="accounts"] #main-info .first-line [data-tag-name="bbva-type-text"]',
                    futuraProductsAccountsAmount: 'section[family-container="accounts"]  #main-info .first-line [data-tag-name="bbva-type-amount"]',
                    futuraProductsAccountsAccount: 'section[family-container="accounts"]  #main-info .second-line [data-tag-name="bbva-badge-reference"]',

                    futuraProductsCardsTitle: '[data-tag-name="app-info-structure-home-dashboard-gl-product-family"] [data-tag-name="bbva-header-category"]',
                    futuraProductsCardsAlias: 'section[family-container^="cards"] #main-info .first-line [data-tag-name="bbva-type-text"]',
                    futuraProductsCardsAmount: 'section[family-container^="cards"]  #main-info .first-line [data-tag-name="bbva-type-amount"]',
                    futuraProductsCardsAccount: 'section[family-container^="cards"]  #main-info .second-line [data-tag-name="bbva-badge-reference"]',

                    futuraProductsLoansTitle: '[data-tag-name="app-info-structure-home-dashboard-gl-product-family"] [data-tag-name="bbva-header-category"]',
                    futuraProductsLoansAlias: 'section[family-container="loans"] #main-info .first-line [data-tag-name="bbva-type-text"]',
                    futuraProductsLoansAmount: 'section[family-container="loans"]  #main-info .first-line [data-tag-name="bbva-type-amount"]',
                    futuraProductsLoansAccount: 'section[family-container="loans"]  #main-info .second-line [data-tag-name="bbva-badge-reference"]',

                    futuraProductsInvestmentsTitle: '[data-tag-name="app-info-structure-home-dashboard-gl-product-family"] [data-tag-name="bbva-header-category"]',
                    futuraProductsInvestmentsAlias: 'section[family-container="investments"] #main-info .first-line [data-tag-name="bbva-type-text"]',
                    futuraProductsInvestmentsAmount: 'section[family-container="investments"]  #main-info .first-line [data-tag-name="bbva-type-amount"]',
                    futuraProductsInvestmentsAccount: 'section[family-container="investments"]  #main-info .second-line [data-tag-name="bbva-badge-reference"]',
                },

                // Smart Servicing
                futuraSmartServicingSection: '#smartServicing',
                futuraSmartServicing: {
                    properties: { root: '#smartServicing-collection' },
                    futuraSmartServicingSelector: '[data-tag-name="app-info-structure-smart-servicing-gl-carousel"] #carouselSlides',
                    futuraSmartServicingFirstCard: '[data-tag-name="app-info-structure-smart-servicing-gl-carousel"] .swiper-slide-active',
                    futuraSmartServicingSecondCard: '[data-tag-name="app-info-structure-smart-servicing-gl-carousel"] .swiper-slide-next',
                    futuraSmartServicingViewAll: '[data-tag-name="app-info-structure-smart-servicing-gl-carousel"] #headerCarouselSmartServicing .options-right [data-tag-name="bbva-type-link"]',
                    futuraSmartServicingCloseButton: '[data-tag-name="app-info-structure-smart-servicing-gl-carousel"] #carouselSmartServicing #carouselSlides .swiper-slide-active [data-tag-name="bbva-button-close"]'
                },
                listSmartServicing: TransitionContainerListSmartServicing,

                // SVPS
                futuraSvpsSection: '#svps',
                futuraSvps: {
                    properties: { root: '#svps-collection' },
                    futuraSvpsImage: '[data-tag-name="app-info-structure-svps-gl"] [data-tag-name="app-info-structure-svps-gl-carousel"] [data-tag-name="bbva-carousel-default"] [data-tag-name="app-info-structure-svps-gl-card-collection"] .content-image',
                    futuraSvpsTitle: '[data-tag-name="app-info-structure-svps-gl"] [data-tag-name="app-info-structure-svps-gl-carousel"] [data-tag-name="bbva-carousel-default"] [data-tag-name="app-info-structure-svps-gl-card-collection"] [tag="h3"]',
                    futuraSvpsText: '[data-tag-name="app-info-structure-svps-gl"] [data-tag-name="app-info-structure-svps-gl-carousel"] [data-tag-name="bbva-carousel-default"] [data-tag-name="app-info-structure-svps-gl-card-collection"] [data-tag-name="bbva-type-text"]',
                    futuraSvpsSubtitle: '[data-tag-name="app-info-structure-svps-gl"] [data-tag-name="app-info-structure-svps-gl-carousel"] [data-tag-name="bbva-type-text"]',
                    futuraSvpsSteps: '[data-tag-name="app-info-structure-svps-gl"] [data-tag-name="app-info-structure-svps-gl-carousel"] [data-tag-name="bbva-carousel-default"] [data-tag-name="bbva-type-text"]'
                },

            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica,
                        args: {
                            modifiers: '#appHeader'
                        }
                    }
                },

                feedbackClient: FeedbackClientVoiceConnect,
                messageStatusRight: `${ACCOUNTS_ITEM_PATH_SPHERICA} .text-right-image`,
                toggleButton: `${ACCOUNTS_ITEM_PATH_HEADER_SPHERICA} ~ cells-st-button-spherica.link:not([hidden]) button`,
                oldDashboard: '#oldDashboard',
                standInNotificationStatus: 'bbva-notification-status[data-select="oldDashboardHeader"]',
                ocAccess: {
                    component: {
                        ComponentClass: CellsOcBannerSpherica,
                        args: {
                            root: 'cells-oc-banner-spherica#dashboard-banner'
                        }
                    }
                },
                transfer: '#oldDashboard cells-operations-list-indicators-spherica cells-operations-list-spherica .list .list__item[data-selector="transfer"]',
                opportunities: '#oldDashboard cells-operations-list-indicators-spherica cells-operations-list-spherica .list .list__item[data-selector="opportunities"]',
                cardlessWithdrawal: '#oldDashboard cells-operations-list-indicators-spherica cells-operations-list-spherica .list .list__item[data-selector="cardLessWithdraw"]',
                operationsMore: '#oldDashboard cells-operations-list-indicators-spherica cells-operations-list-spherica .list .list__item[data-selector="operationsMore"]',
                requestMoney: '#oldDashboard cells-operations-list-indicators-spherica cells-operations-list-spherica .list .list__item[data-selector="requestMoney"]',
                fundsSubHeaderBalance: '#skeleton9 cells-atom-subheader:nth-of-type(1) cells-atom-amount-spherica',
                firstFundType: '#skeleton9 cells-product-item-spherica:nth-of-type(1) .item__info .item__title .item__name',
                firstFundAmount: '#skeleton9 cells-product-item-spherica:nth-of-type(1) .item__quantities cells-atom-amount-spherica',
                firstFundNumber: '#skeleton9 cells-product-item-spherica:nth-of-type(1) .item__info .item__title .item__additional',
                fundsPesos: '#skeleton9 div.products:nth-of-type(1) cells-atom-subheader-spherica span',
                fundsDollars: '#skeleton9 div.products:nth-of-type(2) cells-atom-subheader-spherica span',
                fundsContainer: '#skeleton9 cells-product-item-spherica',
                fundName: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] cells-heading.item__name',
                fundLiteral: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] span.amount-label',
                fundAmount: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] div.item__quantities cells-atom-amount-spherica',
                instantCash: '#dashboard-banner #banner section div.banner__main cells-st-button-spherica button',
                activeAccounts: '#skeleton1 cells-product-item-spherica.activated',
                cardOff: 'cells-product-item-spherica.off.name-one-line',

                //deposits
                depositPesosTitle: '#skeleton9 div.products:nth-of-type(1) cells-atom-subheader-spherica',
                depositDollarsTitle: '#skeleton9 div.products:nth-of-type(2) cells-atom-subheader-spherica',
                depositName: 'cells-product-item-spherica[data-selector="__LAST_DIGITS__"] cells-heading.item__name',
                typeProduct: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] cells-heading.item__data-type',
                depositNumber: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] div.item__data .number',
                depositDueDate: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] div.expiration-date',
                depositAmount: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] div.item__quantities cells-atom-amount',
                depositLiteral: '#skeleton9 cells-product-item-spherica[data-selector="__LAST_DIGITS__"] span.amount-label',
                depositContainer: '#skeleton9 cells-product-item-spherica',
                emailValidationBannerCloseBtn: '#email-validation-banner:not([hidden]) cells-st-button-spherica.banner__exit',

                // Products
                products: 'global-products-list-spherica .products',
                modules: 'global-products-list-spherica cells-atom-subheader-spherica span[slot=heading]',
                lastDigits: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i]',
                dashboardCommonAccount: '#skeleton1 cells-product-item-spherica[data-id="__DATA_ID__"]',
                firstAccount: '#skeleton1 cells-product-item-spherica',
                firstCard: '#skeleton2 cells-product-item-spherica',
                secondAccount: '#skeleton1 cells-product-item-spherica[data-id="2022220014020050140000000"]',
                dashboardCreditAccount: '#skeleton1 cells-product-item-spherica[data-id="__DATA_ID__"]',
                dashboardCreditCard: '#skeleton2 cells-product-item-spherica[data-selector="__DATA_ID__"i]',
                dashboardFirstLoan: '#skeleton4 cells-product-item-spherica',
                visibleNameByLastDigists: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] cells-heading.item__name',
                descriptionByLastDigists: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] cells-molecule-mask-spherica div.wrapper',
                balanceBox: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper',
                balanceByLastDigists: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span:not([hidden])',
                balanceAmountByLastDigists: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span:not([hidden]):not(.currency)',
                balanceByLastDigistsCurrency: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span.currency:not([hidden])',
                balanceLabelByLastDigists: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-label',
                productDataId: 'cells-product-item-spherica[data-id="__DATA_ID__"]',
                agreementByLastDigists: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] div.item__secondary-amount span.amount-label',
                closeModal: 'cells-notifications-spherica #rightButton button',
                footerLinkProductsList: 'global-products-list-spherica cells-link-list-spherica#light',

                // Credit Card
                $label: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-label',
                USlabel: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__secondary-amount span.amount-label',
                debtCurrencyDollars: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.currency.currency--left',
                debtCurrencyUYDollars: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__secondary-amount span.currency.currency--left',
                number:'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] cells-molecule-mask-spherica span.number',
                status: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.status',
                debtDollars: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__primary-amount span.amount-wrapper span:not([hidden])',
                debtUYDollars: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] div.item__secondary-amount span.amount-wrapper span:not([hidden])',

                // Additional Card
                cardInfo: 'cells-product-item-spherica.activate[data-is-additional-card="true"]',
                cardInfoOperative: 'cells-product-item-spherica.operative[data-is-additional-card="true"]',
                cardInfoOff: 'cells-product-item-spherica.off[data-is-additional-card="true"]',
                nameCard: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] cells-heading.item__name',
                imgCard: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] img',
                numberCard: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] .number',
                additionalLabel: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"i] .amount',

                // Loans
                loan: '#skeleton4 cells-product-item-spherica:nth-of-type(1)',
                loanSubHeaderText: '#skeleton4 cells-atom-subheader-spherica:nth-of-type(1) span[slot=heading]',
                loanSubHeaderBalance: '#skeleton4 cells-atom-subheader-spherica:nth-of-type(1) cells-atom-amount',
                firstLoanType: '#skeleton4 cells-product-item-spherica:nth-of-type(1) .item__info .item__title .item__name',
                firstLoanAmount: '#skeleton4 cells-product-item-spherica:nth-of-type(1) .item__quantities cells-atom-amount',
                firstLoanNumber: '#skeleton4 cells-product-item-spherica:nth-of-type(1) .item__info .item__title .item__additional',
                firstLoanMaturityDate: '#skeleton4 cells-product-item-spherica:nth-of-type(1) .expiration-date',
                loanSecondSubHeaderBalance: '#skeleton4 cells-atom-subheader-spherica:nth-of-type(2) span[slot=heading]',
                amountLabelLoan: '#skeleton4 cells-product-item-spherica .item__quantities .item__amount .amount-label',

                //Mortgage Payment
                mortgagePayment: 'cells-product-item-spherica [data-selector*="__MORTGAGE_CREDITS__"i]',

                // Insurances
                headerTitle: '[family-container="insurances"] [data-tag-name="bbva-header-category"]',
                productTitle: '[family-container="insurances"] [class="first-line"]',
                policyNumber: '[family-container="insurances"] [data-tag-name="bbva-type-amount"]',
                policyNumberLabel: '[family-container="insurances"] [class=" second-line "]',

                // Current trip
                currentTripLink: 'cells-trip-header cells-st-button-spherica.link button',

                // Banners
                offersBannersType: 'cells-st-button-spherica[data-selector*="__OFFER_TYPE__"]',
                dataProtectionBannerCloseButton: '#data-protection-banner cells-st-button-spherica.banner__exit',
                interestedButton: '#dashboard-banner #banner section div.banner__main cells-st-button-spherica button',
                bannerSkeleton: '[data-select="futuraDashboard"] #container-nbo .spherica-skeleton-base',
                futuraBanner: '[data-select="futuraDashboard"] #container-nbo #nbo-collection [id="card-__OFFER__"]',
                cardOfferNBO: '[data-select="futuraDashboard"] #container-nbo #nbo-collection [data-tag-name="bbva-carousel-default"] #carouselTwoColumns [data-tag-name="app-info-structure-home-customized-offers-gl-card-offer"]',

                //Insurances
                nameInsurance: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] cells-heading.item__name',
                numberInsurance: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] .number',
                amountInsurance: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] div.item__primary-amount span.amount-wrapper span:not([hidden])',
                insuranceFrequency: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] div.item__primary-amount span.amount-label',
                overdueView: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] .text-right-image',

                // Deposits
                due: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] div[slot=text-below-image]',
                currency: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] span.currency',
                literal: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] span.amount-label',
                depositValue: 'cells-product-item-spherica[data-selector*="__LAST_DIGITS__"] span.amount-wrapper',

                //Equity
                equity: '#skeleton3 cells-product-item-spherica',

                //Btrader
                btrader: '#skeleton11 cells-product-item-spherica',
                btraderContractOne: '#skeleton11 section > div > cells-product-item-spherica[data-id="Td-tykaA8AqC0dXrBOM4DZ4yIMHfRgKVQvF9FNn_ZXaPeR4qqBh3kQ"]',
                btraderContractTwo: '#skeleton11 section > div > cells-product-item-spherica[data-id="Td-tykaA8AoLZWgluK9MOsrczwJHqvRQEEcTpI8Egw-KG3YqFtS9fA"]',

                //Menu PE frequent operations Button
                btnFrequentOp: 'cells-navigation-bar-spherica .list .list__item a[href="#/frequent-operations"]',

                //Unit Linked
                unitLinked: '#skeleton7 cells-product-item-spherica',
                unitRetry: '#skeleton7 section div div cells-icon-message div cells-st-button-spherica button',

                //Transfer
                originTransferDashboard: 'cells-operations-list-spherica .list__item[data-selector="transfer"] button',

                // OTP sms
                otpSmsConfirmButton: {
                    web: 'cells-st-button-spherica#accept button.btn',
                    isWithoutRoot: true,
                },

                investmentsFollowUp: '#skeleton9 cells-link-list-spherica .content button',
                investmentsFollowUpFutura: 'section[family-container="investments"] #see-expense-analysis-link [data-tag-name="bbva-type-link"]',
                investAdvisory: '#skeleton9 cells-product-item-spherica[data-type="invest-advisory-item-tap"]',

                // Follow Up Investments Global Financial
                experiencesPatrimonialBalance: '[smart-space-id="home_experiences"] [name="Tu inversión patrimonial en un solo lugar"] bbva-type-link[data-tag-name="bbva-type-link"][tabindex="0"]',
                linkPatrimonialBalance: '#investment-patrimonial-link [data-tag-name="bbva-type-link"]',

                // DASHBOARD

                title: 'global-products-list-spherica#__skeleton__ div.products cells-atom-subheader-spherica span[aria-label="__arialabelheader__"]',
                titleAmount: `${ACCOUNTS_ITEM_PATH_HEADER_ADDITIONAL_SPHERICA} cells-atom-amount-spherica span.amount-wrapper`,
                titleCurrencyAmount: `${ACCOUNTS_ITEM_PATH_HEADER_ADDITIONAL_SPHERICA} cells-atom-amount-spherica span.amount-wrapper span.currency:not([hidden])`,
                alias: `${ACCOUNTS_ITEM_PATH_INFO_SPHERICA} div.item__title div.item__name span.item__label`,
                amount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__amount cells-atom-amount-spherica span.amount-wrapper`,
                goalAlias: 'cells-product-item-spherica[data-sub-product-type="0004"]  div.item__title div.item__name span.item__label',
                goalAmount: 'cells-product-item-spherica[data-sub-product-type="0004"] div.item__amount cells-atom-amount span.amount-wrapper',
                goalAccount: 'cells-product-item-spherica[data-sub-product-type="0004"] .item__additional .number',
                currencyAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__amount cells-atom-amount-spherica span.amount-wrapper span.currency:not([hidden])`,
                numberContract: `${ACCOUNTS_ITEM_PATH_INFO_SPHERICA} div.item__title div.item__additional div.item__data cells-molecule-mask-spherica div.wrapper span.number`,
                label: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__amount span.amount-label`,
                alert: `${ACCOUNTS_ITEM_PATH_SPHERICA} ul.additional-list li.__alert__ span:nth-of-type(1)`,
                cardImage: `${ACCOUNTS_ITEM_PATH_INFO_SPHERICA} div.item__title div.item__additional div.item__image cells-molecule-card-cover-ccds-wrapper-spherica cells-molecule-card-cover-spherica iron-image#image img#img`,
                primaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__primary-amount cells-atom-amount-spherica span.amount-wrapper`,
                currencyPrimaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__primary-amount cells-atom-amount-spherica span.amount-wrapper span.currency:not([hidden])`,
                labelPrimaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__primary-amount span.amount-label`,
                secondaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__secondary-amount cells-atom-amount-spherica span.amount-wrapper`,
                currencySecondaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__secondary-amount cells-atom-amount-spherica span.amount-wrapper span.currency:not([hidden])`,
                labelSecondaryAmount: `${ACCOUNTS_ITEM_PATH_QUANTITIES_SPHERICA} div.item__secondary-amount`,
                iconVirtualCard: `${ACCOUNTS_ITEM_PATH_SPHERICA} [data-selector="cells-molecule-card-cover-img"]`,
                messageStatusBelow: `${ACCOUNTS_ITEM_PATH_SPHERICA} div[slot="text-below-image"]`,
                overlayCardImage: `${ACCOUNTS_ITEM_PATH_INFO_SPHERICA} div.item__title div.item__additional div.item__image cells-molecule-card-cover-ccds-wrapper-spherica cells-molecule-card-cover-spherica div.icon-text-container cells-atom-icon iron-icon`,

                //Notifications
                iconNotificationCard: `${NOTIFICATIONS_ITEM_SPHERICA} iron-icon svg`,
                headingNotificationCard: `${NOTIFICATIONS_ITEM_SPHERICA} div.message cells-heading.message__heading`,
                messageNotificationCard: `${NOTIFICATIONS_ITEM_SPHERICA} div.message span.message__body`,
                buttonNotificationCard: `${NOTIFICATIONS_ITEM_SPHERICA} div.message cells-st-button-spherica#bottomButton button`,
                closeButtonNotificationCard: `${NOTIFICATIONS_ITEM_SPHERICA} cells-st-button-spherica.close-button button`,

                //Loan Relocation
                buttonLoanRelocation: '#dashboard-banner #banner section div.banner__main cells-st-button-spherica button.banner__link',

                //Frequent operations
                btnFrequentOperations: 'cells-notifications-spherica #bottomButton button',

                //NBO
                nbo: {
                    properties: { root: '#container-nbo' },
                    section: '#nbo',
                    cardContractProductsSectionDataAuthorization: '[text="Autorizando la consulta podrías recibir ofertas diseñadas para ti "]',
                    buttonCpsda: 'button[aria-label="¡Me interesa! Consulta de datos"]',
                    cardContractProductsSectionProfileRecipients: '[description-text="Completa tu perfil y decide quien recibe tu dinero"]',
                    buttonCpspr: '[description-text="Completa tu perfil y decide quien recibe tu dinero"] button',
                    nboSelectorOffer:'[description-text="__OFFER__"] button',
                    nboSelectorOfferByName:'button[aria-label="Consultar __OFFER__"]',
                    buttonCreditCardCHolder: '[aria-label="¡Me interesa! TARJETA DE CREDITO"]',
                },
                //NBA
                nba: {
                    properties: { root: '#container-nba' },
                    section: '#nba',
                    nbaSelectorOffer:'bbva-type-link[aria-label="¡Me interesa! __OFFER__"]',
                    cardContractProductsSectionDataAuthorization: '[text="Consulta de datos"]',
                    linkCpsda: 'bbva-type-link[aria-label="¡Me interesa! Consulta de datos"]',
                    cardContractProductsSectionProfileRecipients: '#carouselSlides [body-text="Completa tu perfil y decide quien recibe tu dinero"]',
                    buttonCpspr: '[aria-label="Agregar beneficiarios Tarea sin finalizar"]',
                    nbaSelectorOfferRecipients:'bbva-type-link[aria-label="__OFFER__"]',
                    buttonCreditCardCHolder: '[aria-label="¡Me interesa! TARJETA DE CREDITO"]',
                },

                //Principal products
                onlyCardPrincipalProduct: '#mainCard-collection #carouselMainCard [contract-id="__DATA_ID__"]',
                numberPrincipalProductsFutura:'#mainCard-collection #carouselMainCard bbva-badge-reference[number="__LAST_DIGITS__"]',

                //alertmanager
                dialogOperationsSpherica: [
                    GlomoAlertManagerSpherica
                ],
                // Footer
                footer: [
                    CellsNavigationBarSpherica,
                    {
                        itemList: {
                            [FOOTER_TABS.HOME]: 'dashboard',
                            [FOOTER_TABS.CHECK_UP]: 2,
                            [FOOTER_TABS.ADD]: 3,
                            [FOOTER_TABS.MAIL]: 4,
                            [FOOTER_TABS.CONTACT]: 5,
                        },
                    }
                ],
            },
            requiredElements: [
                '__root',
            ],
        });
        this.noDialog = true;
        this.FOOTER_TABS = FOOTER_TABS;
    }

    async isFutura() {
        return global.user.homeFutura !== false;
    }

    async followMetaLink() {
        const element = await this.isFutura() ? this.metasSavingGoalsSlideMetasLinkFutura : this.metasSavingGoalsSlideMetasLink;
        await (await (await (await element
            .waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView())
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async accessFinancialEducation() {
        const element = await this.isFutura() ? this.financialEducationLinkFutura : this.financialEducationLink;
        await (await (await (await element
            .waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView())
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async accessFooterPFM() {
        await this.footer.waitForDisplayed({timeout: config.wait.M});
        await this.footer.accessKnownTab({tab: FOOTER_TABS.CHECK_UP});
    }

    async accessFooterNTL() {
        await this.footer.accessKnownTab({tab: FOOTER_TABS.MAIL});
    }

    async accessAccount() {
        await (await this.firstAccount.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessCardDetail() {
        await (await this.firstCard.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async accessMyInvestments() {
        await this.selectMyProducts();
        if (await this.isFutura()) {
            await this.investmentsFollowUpFutura.waitForDisplayed({timeout: config.wait.L});
            await this.investmentsFollowUpFutura.waitForAnimation({timeout: config.wait.L});
            await this.investmentsFollowUpFutura.waitForEnabled({timeout: config.wait.L});
            await this.investmentsFollowUpFutura.click();
        }
        else{
            await this.investmentsFollowUp.waitForDisplayed({timeout: config.wait.L});
            await this.investmentsFollowUp.waitForAnimation({timeout: config.wait.L});
            await this.investmentsFollowUp.waitForEnabled({timeout: config.wait.L});
            await this.investmentsFollowUp.click();
        }
    }

    async accessInvestAdvisoryProductDetail() {
        if (await this.isFutura()) {
            const { contract } = global.user;
            await this.selectMyProducts();
            const investAdvisoryContract = this.investAdvisoryFutura.specifySelector({ placeholder: '__LAST_DIGITS__', value: contract || '8635' });
            await investAdvisoryContract.waitForDisplayed({ timeout: config.wait.M });
            await investAdvisoryContract.scrollIntoView();
            await investAdvisoryContract.waitForAnimation({ timeout: config.wait.M });
            await investAdvisoryContract.click();
        }
        else {
            await this.investAdvisory.waitForDisplayed({ timeout: config.wait.M });
            await this.investAdvisory.waitForAnimation({ timeout: config.wait.M });
            await this.investAdvisory.click();
        }

    }

    async accessFooterTab(tabName) {
        await this.footer.accessKnownTab({tab: tabName});
    }

    async accessPFM() {
        await this.selectMyProducts();
        await this.footerLinkProductsListFutura.waitForDisplayed({timeout: config.wait.L});
        await this.footerLinkProductsListFutura.click();
    }

    async accessPFMFromWidget() {
        await this.homeFinancialHealth.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        await this.widgetAdviceFinancialHealth.financialHealthWidgetLink.waitForDisplayed({timeout: config.wait.L});
        await this.widgetAdviceFinancialHealth.financialHealthWidgetLink.click();
    }

    async accessPFMDashboard(accessFrom) {
        await this.waitUntilProductsLoaded();
        await this.setPFMLocalStorage(accessFrom.includes('onboarding'));
        if (accessFrom.includes('progressbar')) {
            await this.accessPFM();
        } else if (accessFrom.includes('widget')) {
            await this.accessPFMFromWidget();
        } else if (accessFrom.includes('mainCard')) {
            await this.accessMainCardPFM();
        } else if (accessFrom.includes('creditCard')) {
            await this.accessMainCardPFMCreditCard();
        }else{
            await this.accessFooterPFM();
        }
    }

    async selectByContractId(contractId) {
        await (await (await this.futura.yourProducts.accounts.card.__root.specifySelector({ placeholder: '__CONTRACT-ID__', value: contractId })).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectCardByContractId(contractId) {
        await (await (await this.futura.yourProducts.cards.card.__root.specifySelector({ placeholder: '__CONTRACT-ID__', value: contractId })).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectLoanByContractId(contractId) {
        await (await (await this.futura.yourProducts.loans.card.__root.specifySelector({ placeholder: '__CONTRACT-ID__', value: contractId })).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectInvestmentByContractId(contractId) {
        await (await (await this.futura.yourProducts.deposits.card.__root.specifySelector({ placeholder: '__CONTRACT-ID__', value: contractId })).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async goCategorizationFromWidget(access) {
        await this.waitUntilProductsLoaded();
        await this.homeFinancialHealth.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        if (access.includes('home link expenses')) {
            await this.widgetAdviceFinancialHealth.financialHealthWidgetExpenses.waitForDisplayed({timeout: config.wait.M});
            await this.widgetAdviceFinancialHealth.financialHealthWidgetExpenses.click();
        } else {
            await this.widgetAdviceFinancialHealth.financialHealthWidgetIncomes.waitForDisplayed({timeout: config.wait.M});
            await this.widgetAdviceFinancialHealth.financialHealthWidgetIncomes.click();
        }
    }

    async setPFMLocalStorage(showOnboarding) {
        if (!showOnboarding) {
            await Commands.execute({ script: (arg1, arg2) => { localStorage[arg1] = arg2; },
                args: ['pfm_welcome_tutorial', JSON.stringify(global.user.localstorage['onboardingDone'])],
            });
        }
    }

    async waitForLoaded(timeOut = config.wait.XXXL) {
        return super.waitForLoaded(timeOut, this.noDialog);
    }

    async waitUntilIncomesExpensesCardLoaded() {
        await this.incomesTitle.waitForDisplayed({timeout: config.wait.L});
    }

    async selectMyProducts() {
        if (await this.isFutura()) {
            await this.buttonProductos.waitForDisplayed({ timeout: config.wait.XL });
            await this.buttonProductos.scrollIntoView({block: 'center'});
            try {
                await (await this.buttonProductos.waitForClickable({ timeout: config.wait.M })).click({useActions: false});
            }
            catch (error) {
                await this.buttonProductos.execute({script: function() { this.click(); }});
            }
        }
    }

    async selectTypeProduct(account) {
        const accountName = _.isString(account) ? account : account.number;
        const selector = _.isString(account) ? this.numberAccount : this.numberProduct;
        const element = selector.specifySelector({ placeholder: '__LAST_DIGITS__', value: accountName });
        await element.click();
    }

    async validateLinkState(linkElement, state) {
        const modifiedElement = linkElement.specifySelector({ placeholder: '__HIDDEN_STATE__', value: state === 'hidden' ? '[hidden]' : '' });
        await modifiedElement.waitForDisplayed({ timeout: config.wait.M, reverse: state === 'hidden' });

    }

    async selectByLastDigits(account) {
        storage['selectedProduct'] = account;
        await this.selectMyProducts();
        if(await this.isFutura()){
            await this.selectTypeProduct(account);
        }else{
            storage['selectedProduct'] = account;
            const accountName = _.isString(account) ? account : `${account.alias} - ${account.number}`;
            const element = this.lastDigits.specifySelector({placeholder: '__LAST_DIGITS__', value: accountName});
            await this.waitByLastDigits(element);
            await element.click();
        }
    }

    async selectLoansByLastDigits(account) {
        const isMonoProduct = global.user.monoproduct || false;
        let typeProduct;

        if (isMonoProduct) {
            typeProduct = this.onlyCardPrincipalProduct;
        } else {
            await this.selectMyProducts();
            typeProduct = this.numberProductLoans;
        }
        await typeProduct.specifySelector({ placeholder: '__DATA_ID__', value: account.id }).click();
    }

    async accessLoan() {
        await (await this.loan.scrollIntoView({ block: 'start' }));
        await (await this.loan.waitForVisible({ timeout: config.wait.M }));
        await (await this.loan.click());
    }

    async selectCardByLastDigits(panNumber, standIn = false) {
        const isMonoProduct = global.user.monoproduct || false;
        let cardNumber;
        let selector;

        if (isMonoProduct) {
            selector = this.numberPrincipalProductsFutura;
        } else {
            await this.selectMyProducts();
            selector = await this.isFutura() ? this.numberFutura : this.number;
        }

        if (user.products) {
            const cardNumberDM = user.products.cards;
            for (const cardId of cardNumberDM) {
                if (cardId.cardId === panNumber) {
                    panNumber = cardId.number;
                }
            }
            if (storage['tooltipHide'] !== true) {
                storage['tooltipHide'] = false;
            }
            storage['selectedProduct'] = panNumber;
            cardNumber = _.isString(panNumber) ? panNumber : `${panNumber.title.name} - ${panNumber.number}`;
        } else {
            cardNumber = panNumber;
        }
        if (standIn) {
            await this.validateStandInAccess();
        }

        const element = selector.specifySelector({placeholder: '__LAST_DIGITS__', value: cardNumber});
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.scrollIntoView({block: 'nearest'});
        await element.waitForAnimation({timeout: config.wait.M});
        await element.click();
    }

    async selectAdditionalCard() {
        if( await this.isFutura()) {
            await this.selectMyProducts();
            await (await this.cardInfoFutura.waitForDisplayed({timeout: config.wait.L})).click();
        }
        else{
            await (await this.cardInfo.waitForDisplayed({timeout: config.wait.L})).click();
        }
    }

    async selectAdditionalCardViewAdditional() {
        await this.selectMyProducts();
        const element = this.numberFutura.specifySelector({ placeholder: '__LAST_DIGITS__', value: '4101803000729522' });
        await element.click();

    }

    async selectByDataId(dataId) {
        const isFutura= await this.isFutura();
        const selector = isFutura ? this.productDataIdFutura : this.productDataId;
        const element = selector.specifySelector({placeholder: '__DATA_ID__', value: dataId});
        await this.selectMyProducts();
        await this.waitByLastDigits(element);
        await element.click();
    }

    async showBalances(currency) {
        await (await this.toggleButton.specifySelector({
            placeholder: '__skeleton__',
            value: global.user.skeleton
        })
            .specifySelector({placeholder: '__currency__', value: (currency || 'no-currency')})
            .specifySelector({placeholder: '__arialabelheader__', value: ariaLabelHeaderProduct[global.user.tags[1]] || currencyDescriptions[currency] || ''})
            .waitForExist({timeout: config.wait.XXL}))
            .click({useActions: false, scrollOptions: {block:'center', behavior: 'smooth'}});
    }

    async hideBalances() {
        await this.disableButton.waitForClickable({timeout: config.wait.M});
        await this.disableButton.click({useActions: false, scrollOptions: {block:'center', behavior: 'smooth'}});
    }

    async waitUntilSpinnerVeil(
        {timeoutToAppear = config.wait.XS, timeoutToDisappear = config.wait.XL} = {},
    ) {
        await super.waitUntilSpinnerVeil({timeoutToAppear, timeoutToDisappear});
    }

    async waitByLastDigits(lastDigits) {
        const element = typeof lastDigits === 'string'
            ? this.card.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits})
            : lastDigits;

        await element.waitForDisplayed({timeout: config.wait.XXXL});
        await element.scrollIntoView({block: 'nearest'});
        await element.waitForAnimation({timeout: config.wait.XL});
    }

    async moduleDisplays(moduleTitle) {
        await this.modules.waitForText({text: moduleTitle.toUpperCase(), timeout: config.wait.XL});
    }

    async waitUntilProductsLoaded() {
        if (!(await this.isFutura())) {
            await this.products.waitForDisplayed({timeout: config.wait.XL});
        }
    }

    async validateMoreModules(nameModule) {
        const nameParts = nameModule.split(', ');
        if(await this.isFutura()){
            await this.waitUntilProductsLoaded();
        }
        for (const newNameModules of nameParts) {
            await this.moduleDisplays(newNameModules);
        }
    }

    async assertIsVisible(element) {
        await this[element].waitForDisplayed({timeout: config.wait.M, errorMessage: `The ${element} is not visible.`});
    }

    async assertIsNotVisible(element) {
        return this[element].waitForNotDisplayed();
    }

    //DASHBOARD TRANSFER
    async actionTransferDashboard() {
        await this.originTransferDashboard.click();
    }

    async showBalancesUnitLinked() {
        await this.unitShowBalance.waitForDisplayed({timeout: config.wait.L});
        await this.unitShowBalance.click();
    }

    async accessToOperative({operative, section}) {
        switch (operative) {
            case 'transfer':
                if(await this.isFutura()){
                    if (section) {
                        await this.accessSmartServicingOption(section);
                    } else {
                        await this.operations.scrollIntoView({block: 'nearest'});
                        await this.transferFutura.waitForDisplayed({timeout: config.wait.M});
                        await this.transferFutura.click();
                    }
                }
                else{
                    await (await (await this.transfer.waitForAnimation({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M})).click();
                }
                break;
            case 'opportunities':
                await (await this.opportunities.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M});
                await this.opportunities.click({useActions: false, scrollOptions: {block:'nearest'}});
                break;
            case 'cardlessWithdrawal':
                await (await (await this.cardlessWithdrawal.waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'operationsMore':
                if (await this.isFutura()) {
                    await this.scrollToOperationsMoreFutura();
                    await (await this.operationsMoreFutura.waitForDisplayed({timeout: config.wait.M})).click();
                }
                else {
                    await (await (await this.operationsMore.waitForAnimation({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M})).click();
                }
                break;
            case 'refactorTransfer':
                await this.refactorTransfer.waitForDisplayed({timeout: config.wait.XL});
                await this.refactorTransfer.click();
                break;
            case 'requestMoney':
                await this.requestMoney.waitForDisplayed({timeout: config.wait.XL});
                await this.requestMoney.click();
                break;
            default:
                throw new Error(`${operative} operative is not implemented`);
        }
    }

    async accessPatrimonialBalance({entrypoint}) {
        switch (entrypoint) {
            case 'experiencesPatrimonialBalance':
                await (await (await this.experiencesPatrimonialBalance.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M})).click();
                break;
            case 'linkPatrimonialBalance':
                await this.selectMyProducts();
                await (await (await this.linkPatrimonialBalance.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${entrypoint} entrypoint is not implemented`);
        }
    }

    async scrollToOperationsMoreFutura() {
        if (!await this.operationsMoreFutura.isExisting()) {
            await this.operations.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        }
        await (await this.operationsMoreFutura.scrollIntoView({block: 'center', inline: 'end'}));
    }

    async _screenValidation({item, value, currency} = {}) {
        const LOCAL_CURRENCY = 'MXN';
        let element;
        let lastDigits;
        let expectedValue;
        const currencyAbbreviation = currency;
        const skeleton = global.user && global.user.skeleton;
        const currencySymbol = {
            MXN: '$',
            USD: 'US$'
        };
        let idElement;
        switch (item) {
            case 'button loan relocation':
                await this.buttonLoanRelocation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text loan relocation':
                await this.textLoanRelocation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'dashboard body':
                await this.dashboardBody.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'Transfer operative':
                if (await this.isFutura()) {
                    await this.transferFutura.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                }
                else {
                    await this.transfer.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                }
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'text area feedback':
                await this.feedbackClient.mainModal.textArea.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button send feedback':
                await this.feedbackClient.mainModal.button.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating from 5 starts feedback':
                await this.feedbackClient.selectRatingMainModal(5, false);
                break;
            case 'checkbox options feedback':
                await this.feedbackClient.checkboxOptions();
                break;
            case 'header thankyou feedback':
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback':
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback':
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback':
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback':
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Opportunities operative':
                await this.opportunities.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'CardLess with draw operative':
                await this.cardlessWithdrawal.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible'
                });
                break;
            case 'More operatives':
                if (await this.isFutura()) {
                    await this.scrollToOperationsMoreFutura();
                    await this.operationsMoreFutura.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                }
                else{
                    await this.operationsMore.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                }

                break;
            case 'Cuentas a plazo':
                await this.moduleDisplays(item);
                break;
            case 'Deposit alias':
                expectedValue = user.products.deposits[0].title.name;
                lastDigits = `${user.products.deposits[0].title.name} - ${user.products.deposits[0].number}`;
                element = this.visibleNameByLastDigists.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                await element.waitForDisplayed({timeout: config.wait.L});
                await element.verifyText({text: expectedValue, errorMessage: DEPOSIT_ALIAS_ERR});
                break;
            case 'Deposit last 4 number':
                expectedValue = user.products.deposits[0].number.substring(user.products.deposits[0].number.length - 4);
                lastDigits = `${user.products.deposits[0].title.name} - ${user.products.deposits[0].number}`;
                if( await this.isFutura()) {
                    element = this.numberFutura.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                }
                else{
                    element = this.number.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                }
                return element.verifyText({text: expectedValue, errorMessage: DEPOSIT_NUMBER_ERR});
            case 'Deposit balance':
                expectedValue = user.products.deposits[0].currentBalances[0].amount;
                lastDigits = `${user.products.deposits[0].title.name} - ${user.products.deposits[0].number}`;
                element = this.balanceAmountByLastDigists.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                return element.verifyText({
                    text: expectedValue.toLocaleString(undefined, {minimumFractionDigits: 2}),
                    errorMessage: DEPOSIT_AVAILABLE_BALANCE_AMOUNT_ERR
                });
            case 'Balance label':
                lastDigits = `${user.products.deposits[0].title.name} - ${user.products.deposits[0].number}`;
                element = this.balanceLabelByLastDigists.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                return element.waitForDisplayed();
            case 'Currency':
                expectedValue = user.products.deposits[0].currencies[0].currency;
                lastDigits = `${user.products.deposits[0].title.name} - ${user.products.deposits[0].number}`;
                element = this.balanceByLastDigistsCurrency.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                return element.verifyText({
                    text: utils.currencies.byISO({iso: expectedValue}).symbol,
                    errorMessage: DEPOSIT_AVAILABLE_BALANCE_AMOUNT_CURRENCY_ERR
                });
            case 'Fund module':
                await this.moduleDisplays('Fondos mutuos');
                break;
            case 'Fund alias':
                expectedValue = user.products.investmentFunds[0].funds[0].title.name;
                lastDigits = `${user.products.investmentFunds[0].funds[0].title.name} - ${user.products.investmentFunds[0].funds[0].fundId}`;
                element = this.visibleNameByLastDigists.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                await element.waitForDisplayed({timeout: config.wait.L});
                await element.verifyText({text: expectedValue, errorMessage: FUND_ALIAS_ERR});
                break;
            case 'Fund last 4 number':
                expectedValue = user.products.investmentFunds[0].funds[0].fundId.substring(user.products.investmentFunds[0].funds[0].fundId.length - 4);
                lastDigits = `${user.products.investmentFunds[0].funds[0].title.name} - ${user.products.investmentFunds[0].funds[0].fundId}`;
                if( await this.isFutura()) {
                    element = this.numberFutura.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                }
                else{
                    element = this.number.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                }
                return element.verifyText({text: expectedValue, errorMessage: FUND_NUMBER_ERR});
            case 'Fund balance':
                expectedValue = user.products.investmentFunds[0].funds[0].assets.amount;
                lastDigits = `${user.products.investmentFunds[0].funds[0].title.name} - ${user.products.investmentFunds[0].funds[0].fundId}`;
                element = this.balanceAmountByLastDigists.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                return element.verifyText({
                    text: expectedValue.toLocaleString(undefined, {minimumFractionDigits: 2}),
                    errorMessage: FUND_AVAILABLE_BALANCE_AMOUNT_ERR
                });
            case 'Fund balance label':
                lastDigits = `${user.products.investmentFunds[0].funds[0].title.name} - ${user.products.investmentFunds[0].funds[0].fundId}`;
                element = this.balanceLabelByLastDigists.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                return element.waitForDisplayed();
            case 'buy now pay later':
                await this.productDataId.specifySelector({
                    placeholder: '__DATA_ID__',
                    value: 'Xn50ugM40RSZUkVZ1vo1Bjj698YlYI7E'
                }).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Fund currency':
                expectedValue = user.products.investmentFunds[0].funds[0].currency.id;
                lastDigits = `${user.products.investmentFunds[0].funds[0].title.name} - ${user.products.investmentFunds[0].funds[0].fundId}`;
                element = this.balanceByLastDigistsCurrency.specifySelector({
                    placeholder: '__LAST_DIGITS__',
                    value: lastDigits
                });
                return element.verifyText({
                    text: utils.currencies.byISO({iso: expectedValue}).symbol,
                    errorMessage: FUND_AVAILABLE_BALANCE_AMOUNT_CURRENCY_ERR
                });
            case 'loan sub header text':
                await this.assertIsVisible('loanSubHeaderText');
                break;
            case 'loan amount label':
                await this.assertIsVisible('amountLabelLoan');
                break;
            case 'loan sub header balance':
                await this.assertIsVisible('loanSubHeaderBalance');
                break;
            case 'first loan type':
                await this.assertIsVisible('firstLoanType');
                break;
            case 'first loan amount':
                await this.assertIsVisible('firstLoanAmount');
                break;
            case 'first loan number':
                await this.assertIsVisible('firstLoanNumber');
                break;
            case 'first loan maturity date':
                await this.assertIsVisible('firstLoanMaturityDate');
                break;
            case 'loan usd sub header balance':
                // Since the customer has only a USD loan the usd subheader should not be shown.
                await this.assertIsNotVisible('loanSecondSubHeaderBalance');
                break;
            case 'Insurance module':
                await this.validateMoreModules(value);
                break;
            case 'Products Loan':
                idElement = this.numberProductLoans.specifySelector({ placeholder: '__DATA_ID__', value: 'yEAHmSLzjObL2tHP0yAr5tt6UTbHVwMi' });
                await idElement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Insurance name':
                expectedValue = user.products.insurances[0].product.name.toLowerCase();
                expectedValue = expectedValue.charAt(0).toUpperCase() + expectedValue.slice(1);
                lastDigits = `${expectedValue} - ${user.products.insurances[0].number}`;
                element = this.nameInsurance.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                await element.waitForDisplayed({timeout: config.wait.L});
                await element.verifyText({text: expectedValue, errorMessage: INSURANCE_NAME_ERR});
                break;
            case 'Insurance number':
                expectedValue = user.products.insurances[0].number.substring(user.products.insurances[0].number.length - 4);
                lastDigits = `${user.products.insurances[0].number}`;
                element = this.numberInsurance.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                return element.verifyText({text: expectedValue, errorMessage: INSURANCE_NUMBER_ERR});
            case 'Insurance amount': {
                expectedValue = user.products.insurances[0].detail.specificAmounts[0].amounts[0].amount;
                const currency = utils.currencies.byISO({iso: user.products.insurances[0].detail.specificAmounts[0].amounts[0].currency}).symbol;
                const expectedAmountBalanceInsurance = `${currency}${expectedValue.toFixed(2)}`;
                lastDigits = `${user.products.insurances[0].number}`;
                element = this.amountInsurance.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                return element.verifyText({
                    text: expectedAmountBalanceInsurance.toLocaleString(undefined, {minimumFractionDigits: 2}),
                    errorMessage: INSURANCE_AMOUNT_ERR
                });
            }
            case 'Insurance frequency':
                lastDigits = `${user.products.insurances[0].number}`;
                element = this.insuranceFrequency.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                return element.verifyText({text: value, errorMessage: INSURANCE_FREQUENCY_ERR});
            case 'Insurance Overdue label':
                lastDigits = `${user.products.insurances[0].number}`;
                element = this.overdueView.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits});
                return value === 'true' ? await element.waitForDisplayed() : await element.waitForNotDisplayed();
            case 'funds sub header text':
                await this.assertIsVisible('fundsSubHeaderText');
                break;
            case 'funds sub header balance':
                await this.assertIsVisible('fundsSubHeaderBalance');
                break;
            case 'first fund type':
                await this.assertIsVisible('firstFundType');
                break;
            case 'first fund amount':
                await this.assertIsVisible('firstFundAmount');
                break;
            case 'first fund number':
                await this.assertIsVisible('firstFundNumber');
                break;
            case 'funds pesos':
                await this.fundsPesos.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'funds dollars':
                await this.fundsDollars.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'deposit in pesos title':
                await this.depositPesosTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'deposit in dollars title':
                await this.depositDollarsTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'accounts in pesos':
                await this.moduleDisplays('CUENTAS ($)');
                break;
            case 'accounts in dollars':
                await this.moduleDisplays('CUENTAS (U$S)');
                break;
            case 'accounts in euros':
                await this.moduleDisplays('CUENTA (€)');
                break;
            case 'cards':
                await this.moduleDisplays('TARJETAS');
                break;
            case 'deposits in dollars':
                await this.moduleDisplays('PLAZO FIJO (U$S)');
                break;
            case 'loans':
                await this.moduleDisplays('PRÉSTAMOS ($)');
                break;
            case 'Banner Image':
                await this.ocAccess.image.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Oc Access':
                await this.ocAccessFuturaCard.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Banner Date':
                return value === 'visible' ? await this.ocAccess.date.waitForVisible({timeout: config.wait.L}) : await this.ocAccess.date.waitForNotDisplayed();
            case 'Banner Description':
                await this.ocAccess.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Banner Amount':
                await this.ocAccess.amount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Banner Link':
                await this.ocAccess.link.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Banner Close Button':
                await this.ocAccess.closeBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon Home':
                await this.footer.isTabPresent({tab: FOOTER_TABS.HOME});
                break;
            case 'icon Heart':
                await this.footer.isTabPresent({tab: FOOTER_TABS.CHECK_UP});
                break;
            case 'icon Add':
                await this.footer.isTabPresent({tab: FOOTER_TABS.ADD});
                break;
            case 'icon Mail':
                await this.footer.isTabPresent({tab: FOOTER_TABS.MAIL});
                break;
            case 'icon Contact':
                await this.footer.isTabPresent({tab: FOOTER_TABS.CONTACT});
                break;
            case 'products':
                await this.products.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'greeting':
                await this.header.waitForDisplayed({timeout: config.wait.XXXL});
                break;
            case 'help button':
                await this.header.faqsBtn.waitForDisplayed({
                    timeout: config.wait.XXL,
                    reverse: value === 'not visible'
                });
                break;
            case 'sidebar':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'experiences carousel':
                await this.experiencesCarouselFutura.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible'});
                break;
            case 'experiences carousel error message':
                await this.experiencesCarouselErrorMessage.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'title':
                await (await (await this.title.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: (currencyAbbreviation || 'no-currency')})
                    .specifySelector({placeholder: '__arialabelheader__', value: ariaLabelHeaderProduct[user.tags[1]] || currencyDescriptions[currencyAbbreviation] || ''})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'title amount':
                await (await (await this.titleAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__arialabelheader__', value: ariaLabelHeaderProduct[user.tags[1]] || currencyDescriptions[currencyAbbreviation] || ''})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                await (await this.titleCurrencyAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__arialabelheader__', value: ariaLabelHeaderProduct[user.tags[1]] || currencyDescriptions[currencyAbbreviation] || ''})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: currencySymbol[currencyAbbreviation]});
                break;
            case 'alias':
                await (await this.alias.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || 'undefined'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'amount':
                await (await this.amount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: /\d/});
                await (await this.currencyAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: currencySymbol[currencyAbbreviation]});
                break;
            case 'masked amount':
                await (await this.amount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: /(\D)\1{3}/});
                await (await this.currencyAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: currencySymbol[currencyAbbreviation]});
                break;
            case 'number':
                await (await this.numberContract.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || 'undefined'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'label amount':
                await (await this.label.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'exceded alert':
                await (await (await this.alert.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__alert__', value: 'alert'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'overflowed alert':
                await (await (await this.alert.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__alert__', value: 'error'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'restricted alert':
                await (await (await this.alert.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__alert__', value: 'error'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'error alert':
                await (await (await this.alert.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__alert__', value: 'error'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'info alert':
                await (await (await this.alert.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__alert__', value: 'alert'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'blocked alert':
                await (await (await this.alert.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .specifySelector({placeholder: '__alert__', value: 'error'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'card image':
                await (await this.cardImage.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || 'undefined'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForDisplayed();
                break;
            case 'primary amount':
                await (await this.primaryAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: /\d/});
                await (await this.currencyPrimaryAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: currencySymbol[currencyAbbreviation]});
                break;
            case 'label primary amount':
                await (await this.labelPrimaryAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'secondary amount':
                await (await this.secondaryAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText({text: /\d/});
                await (await this.currencySecondaryAmount.specifySelector({
                    placeholder: '__skeleton__',
                    value: skeleton
                })
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForDisplayed({timeout: config.wait.XXL}))
                    .waitForText({text: currencySymbol[currencyAbbreviation]});
                break;
            case 'label secondary amount':
                await (await this.labelSecondaryAmount.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'icon virtual card':
                await (await this.iconVirtualCard.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || 'undefined'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForDisplayed();
                break;
            case 'status message right':
                await (await this.messageStatusRight.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || 'undefined'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'status message below':
                await (await this.messageStatusBelow.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || LOCAL_CURRENCY})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForText();
                break;
            case 'overlay card image':
                await (await this.overlayCardImage.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: currencyAbbreviation || 'undefined'})
                    .waitForExist({timeout: config.wait.XXL}))
                    .waitForDisplayed();
                break;
            case 'show/hide button':
                await (await (await this.toggleButton.specifySelector({placeholder: '__skeleton__', value: skeleton})
                    .specifySelector({placeholder: '__currency__', value: (currencyAbbreviation || 'no-currency')})
                    .specifySelector({placeholder: '__arialabelheader__', value: ariaLabelHeaderProduct[user.tags[1]] || currencyDescriptions[currencyAbbreviation] || ''})
                    .waitForExist({timeout: config.wait.XXL}))
                    .scrollIntoView())
                    .waitForText();
                break;
            case 'header title':
                await this.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product title':
                await this.productTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy number':
                await this.policyNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy number label':
                await this.policyNumberLabel.scrollIntoView();
                await this.policyNumberLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'Incomes title':
                await this.incomesTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Incomes amount':
                await this.incomesAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Incomes progress bar':
                await this.incomesProgressBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Expenses title':
                await this.expensesTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Expenses amount':
                await this.expensesAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Expenses progress bar':
                await this.expensesProgressBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Incomes x expenses PFM access':
                await this.incomesExpensesPFMAccess.waitForVisible({
                    timeout: config.wait.M,
                    reverse: value === 'not visible'
                });
                break;
            case 'Balance Box':
                await this.balanceBox.waitForDisplayed({timeout: config.wait.XXL, reverse: value === 'not visible'});
                break;
            case 'icon notification':
                await this.iconNotificationCard.waitForDisplayed({reverse: value === 'no-visible'});
                break;
            case 'Transfer Dashboard':
                await this.originTransferDashboard.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'heading notification': {
                const heading = await this.headingNotificationCard.waitForDisplayed({
                    timeout: config.wait.XXL,
                    reverse: value === 'no-visible'
                });
                if (heading && value !== 'no-visible') {
                    await heading.waitForText();
                }
                break;
            }
            case 'message notification': {
                const message = await this.messageNotificationCard.waitForDisplayed({timeout: config.wait.XXL, reverse: value === 'no-visible'});
                if (message && value !== 'no-visible') {
                    await message.waitForText({reverse: value === 'no-visible'});
                }
                break;
            }
            case 'credit bureau authorization notification':
                await this.messageNotificationCard.waitForText({text: 'historial crediticio', exactMatch: false, timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'navigate button': {
                const navigate = await this.buttonNotificationCard.waitForClickable({timeout: config.wait.XXL, reverse: value === 'no-visible'});
                if (navigate && value !== 'no-visible') {
                    await navigate.waitForText({reverse: value === 'no-visible'});
                }
                break;
            }
            case 'close button notification':
                await this.closeButtonNotificationCard.waitForClickable({reverse: value === 'no-visible'});
                break;
            case 'dashboard error heading':
                await this.dashboardErrorHeading.waitForClickable({reverse: value === 'no-visible'});
                break;
            case 'dashboard error message':
                await this.dashboardErrorMessage.waitForClickable({reverse: value === 'no-visible'});
                break;
            case 'dashboard retry button':
                await this.dashboardRetryButton.waitForClickable({reverse: value === 'no-visible'});
                break;
            case 'dashboard exit button':
                await this.dashboardExitButton.waitForClickable({reverse: value === 'no-visible'});
                break;
            case 'goal alias':
                await this.goalAlias.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'goal account':
                await this.goalAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal amount':
                await this.goalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'experiences header':
                await this.carouselHeader.scrollIntoView();
                await this.carouselHeader.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'metas saving goals slide':
                await this.metasSavingGoalsSlide.scrollIntoView();
                await this.metasSavingGoalsSlide.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'metas saving goals image':
                await this.metasSavingGoalsSlideImage.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'metas saving goals title':
                await this.metasSavingGoalsSlideTitle.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'metas saving goals description':
                await this.metasSavingGoalsSlideDescription.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'metas saving goals link':
                if( await this.isFutura()) {
                    await this.metasSavingGoalsSlideMetasLinkFutura.waitForDisplayed({timeout: config.wait.XL});
                }
                else{
                    await this.metasSavingGoalsSlideMetasLink.waitForDisplayed({timeout: config.wait.XL});
                }
                break;
            case 'refactorTransfer':
                await this.refactorTransfer.waitForDisplayed({reverse: value === 'no-visible'});
                break;
            case 'balance status': {
                const selectorAccount = this.accountBalance.specifySelector({placeholder: '__ID__', value: idAccounts});
                await selectorAccount.waitForDisplayed({timeout: config.wait.XL});
                break;
            }
            case 'stand in modal button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'stand in modal image':
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'stand in modal title':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'stand in modal description':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'stand in header banner':
                if (await this.isFutura()) {
                    await this.futura.homeCore.standInFuturaNotificationStatus.waitForDisplayed({timeout: config.wait.L});
                } else {
                    await this.standInNotificationStatus.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'essential mode featured message':
                await this.futura.homeCore.essentialModeFeaturedMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode featured know more link':
                await this.futura.homeCore.essentialModeFeaturedKnowMoreLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode products message':
                await this.futura.homeCore.essentialModeProductsMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'essential mode products know more link':
                await this.futura.homeCore.essentialModeProductsKnowMoreLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts incomes expenses link':
                await this.validateLinkState(this.futura.yourProducts.accountsIncomesExpensesLink, value);
                break;
            case 'redeem points link':
                await this.validateLinkState(this.futura.yourProducts.redeemPointsLink, value );
                break;
            case 'modal button':
                await this.dialogOperationsSpherica.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal image':
                await this.dialogOperationsSpherica.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                await this.dialogOperationsSpherica.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car loan contract number':
                await this.loan.waitForAttribute({attribute: 'data-number', value: `${global.user.contractNum}`});
                break;
            case 'carousel bbva':
                await this.carouselBbva.waitForDisplayed({timeout: config.wait.XL, reverse: value === 'not visible'});
                break;
            case 'section cards':
                await this.dashboardCreditCard.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'multistrategy':
                if( await this.isFutura()) {
                    await this.unitLinkedFutura.waitForDisplayed({timeout: config.wait.XL});
                }
                else{
                    await this.unitLinked.waitForDisplayed({timeout: config.wait.XL});
                }
                break;
            case 'loading error':
                await this.unitLoadingError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry error':
                await this.unitRetry.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation modal header':
                await this.frequentOperationsNoBalanceModal.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation modal microilustration':
                await this.frequentOperationsNoBalanceModal.image.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation modal title':
                await this.frequentOperationsNoBalanceModal.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation modal description':
                await this.frequentOperationsNoBalanceModal.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation modal accept button':
                await this.frequentOperationsNoBalanceModal.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation modal cancel button':
                await this.frequentOperationsNoBalanceModal.cancelBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'frequent operation message':
                await this.checkOperationMessage(value);
                break;
            case 'advised':
                await this.advised.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'invest':
                await this.invest.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'legal':
                await this.legal.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'activity':
                await this.activity.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'messageExpired':
                await this.messageExpired.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card off':
                await this.cardOff.scrollIntoView({block: 'center'});
                await this.cardOff.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'btrader':
                await this.btrader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btrader container':
                await this.btraderContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btrader contract one':
                await this.btraderContractOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btrader contract two':
                await this.btraderContractTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multiple frequent services button':
                await this.btnFrequentOperations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'coach section':
                await this.coachSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await this.coachWidget.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'coach section link':
                await this.coachSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await this.coachWidgetLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer investment banner': {
                await this.nbo.section.waitForExist({ timeout: config.wait.M });
                await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                const banner = this.futuraBanner.specifySelector({placeholder: '__OFFER__', value: global.user.offerId});
                await banner.waitForClickable(config.wait.M);
                break;
            }
            case 'nba offer': {
                await this.nba.section.waitForExist({ timeout: config.wait.M });
                await this.nba.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                const nbaOffer = this.nba.nbaSelectorOffer.specifySelector({placeholder: '__OFFER__', value: global.user.offerName});
                await nbaOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            }
            case 'NBO section':
                await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await this.nbo.section.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBO data query':
                await this.nbo.cardContractProductsSectionDataAuthorization.scrollIntoView({block: 'center'});
                await this.nbo.cardContractProductsSectionDataAuthorization.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBO button data query':
                await this.nbo.buttonCpsda.scrollIntoView({block: 'center'});
                await this.nbo.buttonCpsda.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBA button cpspr':
                await this.nba.buttonCpspr.scrollIntoView({block: 'center'});
                await this.nba.buttonCpspr.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBA section':
                await this.nba.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await this.nba.section.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBA data query':
                await this.nba.cardContractProductsSectionDataAuthorization.scrollIntoView({block: 'center'});
                await this.nba.cardContractProductsSectionDataAuthorization.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBA button data query':
                await this.nba.linkCpsda.scrollIntoView({block: 'center'});
                await this.nba.linkCpsda.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBA profile recipients':
                await this.nba.cardContractProductsSectionProfileRecipients.scrollIntoView({block: 'center'});
                await this.nba.cardContractProductsSectionProfileRecipients.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'NBA button cpsda':
                await this.nba.buttonCpsda.scrollIntoView({block: 'center'});
                await this.nba.buttonCpsda.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financial health widget link':
                await this.widgetAdviceFinancialHealth.financialHealthWidgetExpenses.scrollIntoView();
                await this.widgetAdviceFinancialHealth.financialHealthWidgetLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financial health widget expenses':
                await this.widgetAdviceFinancialHealth.financialHealthWidgetExpenses.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financial health widget incomes':
                await this.widgetAdviceFinancialHealth.financialHealthWidgetIncomes.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financial health widget investments':
                await (await this.widgetAdviceFinancialHealth.financialHealthWidgetInvestments.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            // futura
            case 'show mode eye icon':
                await this.futura.homeCore.header.showModeEyeIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hide mode eye icon':
                await this.futura.homeCore.header.hideModeEyeIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home title':
                await this.futura.homeCore.header.homeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'menu button futura':
                await this.sidebarButtonFutura.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'blue icon':
                await this.futura.homeCore.header.blueIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'featured button':
                await this.futura.homeCore.tabs.futuraTabButtonFeatured.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'your products section button':
                await this.futura.homeCore.tabs.yourProductsSectionButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main products title':
                await this.futura.homeCore.mainProductsSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await (await this.futura.homeCore.mainProducts.title.waitForExist({timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of main products':
                await this.waitForAmountsOfMainProducts();
                break;
            case 'masked amounts of main products':
                await this.waitForAmountsOfMainProducts({masked: true});
                break;
            case 'your today shortcuts title':
                await this.futura.homeCore.smartServicingSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await (await this.futura.homeCore.yourTodayShortcuts.title.waitForExist({timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of your today shortcuts':
                await this.waitForAmountsOfYourTodayShortcuts();
                break;
            case 'masked amounts of your today shortcuts':
                await this.waitForAmountsOfYourTodayShortcuts({masked: true});
                break;
            case 'financial health title':
                await this.futura.homeCore.investmentSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await (await this.futura.homeCore.financialHealth.title.waitForExist({timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of financial health':
                await this.waitForAmountsOfFinancialHealth();
                break;
            case 'masked amounts of financial health':
                await this.waitForAmountsOfFinancialHealth({masked: true});
                break;
            // Your products
            case 'accounts family title':
                await (await this.futura.yourProducts.accounts.title.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of accounts':
                await this.waitForDataOfProduct({product: 'accounts', accountDetails: 'amounts' });
                break;
            case 'masked amounts of accounts':
                await this.waitForDataOfProduct({product: 'accounts', masked: true, accountDetails: 'amounts'});
                break;
            case 'alias of accounts':
                await this.waitForDataOfProduct({product: 'accounts', accountDetails: 'alias', masked: false });
                break;
            case 'balance label of accounts':
                await this.waitForDataOfProduct({product: 'accounts', accountDetails: 'balanceLabel' });
                break;
            case 'cards family title':
                await (await this.futura.yourProducts.cards.title.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of cards': {
                await this.waitForDataOfProduct({product: 'cards', accountDetails: 'amounts'});
                break;
            }
            case 'alias of cards':
                await this.waitForDataOfProduct({product: 'cards', accountDetails: 'alias' });
                break;
            case 'balance label of cards':
                await this.waitForDataOfProduct({product: 'cards', accountDetails: 'balanceLabel' });
                break;
            case 'masked amounts of cards': {
                await this.waitForDataOfProduct({product: 'accounts', masked: true, accountDetails: 'amounts'});
                break;
            }
            case 'loans family title':
                await (await this.futura.yourProducts.loans.title.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of loans':
                await this.waitForDataOfProduct({product: 'loans', accountDetails: 'amounts'});
                break;
            case 'masked amounts of loans':
                await this.waitForDataOfProduct({product: 'loans', masked: true, accountDetails: 'amounts'});
                break;
            case 'deposits family title':
                await (await this.futura.yourProducts.deposits.title.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts of deposits':
                await this.waitForDataOfProduct({product: 'deposits', accountDetails: 'amounts'});
                break;
            case 'masked amounts of deposits':
                await this.waitForDataOfProduct({product: 'deposits', masked: true, accountDetails: 'amounts'});
                break;

            case 'Banner Link futura':
                await this.linkExpensesGroupFutura.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Banner Image futura':
                await this.imageExpensesGroupFutura.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Banner Text futura':
                await this.textExpensesGroupFutura.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Edufin Microillustration':
                await this.homeEdufin.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await this.widgetEdufinEntrypoint.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Edufin Description':
                await this.widgetEdufinEntrypoint.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Edufin Button':
                await this.widgetEdufinEntrypoint.edufinWidgetLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'nba card close button':
                await this.futura.homeCore.nba.carousel.slides.closeButtonNextBestActions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'nba card title promotion':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForDisplayed({text: 'Reduce tus pagos con Puntos BBVA', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba previous item button':
                await this.futura.homeCore.nba.carousel.steps.buttonLastCardNextBestAction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'nba next item button':
                await this.futura.homeCore.nba.carousel.steps.buttonNextCardNextBestAction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link offer title i am interested':
                await this.futura.homeCore.nba.carousel.slides.linkFirstCardNextBestAction.waitForText({text: '¡Me interesa!', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item fifth of fifth on next best actions':
                await this.futura.homeCore.nba.carousel.steps.counterCarouselItemsNextBestActions.waitForText({text: '5 de 5', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item one of fourth on next best actions':
                await this.futura.homeCore.nba.carousel.steps.counterCarouselItemsNextBestActions.waitForText({text: '1 de 4', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item three to three on next best actions':
                await this.futura.homeCore.nba.carousel.steps.counterCarouselItemsNextBestActions.waitForText({text: '3 de 3', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item two to fourt on nest best actions':
                await this.futura.homeCore.nba.carousel.steps.counterCarouselItemsNextBestActions.waitForText({text: '2 de 4', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item one to two on nest best actions':
                await this.futura.homeCore.nba.carousel.steps.counterCarouselItemsNextBestActions.waitForText({text: '1 de 2', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item fourt to fourt on nest best actions':
                await this.futura.homeCore.nba.carousel.steps.counterCarouselItemsNextBestActions.waitForText({text: '4 de 4', exactMatch: true, timeout: config.wait.M});
                break;
            case 'link offer title learn more':
                await this.futura.homeCore.nba.carousel.slides.linkFirstCardNextBestAction.waitForText({text: '¡Saber Más!', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba card title Seguro de dispositivos':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForText({text: 'Seguro de dispositivos', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba card title Incremento de línea de crédito':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForText({text: 'Incremento de línea de crédito', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba card title Préstamo de nómina':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForText({text: 'Préstamo de nómina', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba card title Tarjeta de crédito':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForText({text: 'Tarjeta de crédito', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba card title sustainability':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForText({text: 'Sostenibilidad', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba card title financial health':
                await this.futura.homeCore.nba.carousel.slides.titleFirstCardNextBestAction.waitForText({text: 'Salud Financiera', exactMatch: true, timeout: config.wait.M});
                break;
            case 'nba description card':
                await this.futura.homeCore.nba.carousel.slides.descriptionFirstCardNextBestAction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carousel experiences section':
                await this.futuraExperiencesCarousel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title list experience section':
                await this.listHomeExperience.titleListExperienceSection.waitForText({text: 'Experiencias', exactMatch: true, timeout: config.wait.M});
                break;
            case 'title carousel experience section':
                await this.futuraExperiencesTitle.waitForText({text: 'Experiencias', exactMatch: true, timeout: config.wait.M});
                break;
            case 'header list experience section':
                await this.listHomeExperience.headerTransaction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link to view all experience section':
                await this.futuraExperiencesViewAll.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back mini button experience section':
                await this.listHomeExperience.headerTransaction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'item two to four on experiences section':
                await this.futuraExperiencesCounter.waitForText({text: '2 de 4', exactMatch: true, timeout: config.wait.M});
                break;
            case 'item four to four on experiences section':
                await this.futuraExperiencesCounter.waitForText({text: '4 de 4', exactMatch: true, timeout: config.wait.M});
                break;
            case 'button next card to experiences section':
                await this.futuraExperiencesButtonNext.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button previous card to experiences section':
                await this.futuraExperiencesButtonPrev.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list experiences section':
                await this.listHomeExperience.headerTransaction.waitForDisplayed({timeout: config.wait.M});
                await this.listHomeExperience.listContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last card experiences section':
                await this.futuraExperiencesLastCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'next card experiences section':
                await this.futuraExperiencesNextCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unique card in the experiences section':
                await this.futuraExperiencesUniqueCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carousel experience section disappear':
                await this.futuraExperiencesCarousel.waitForNotDisplayed();
                break;
            case 'frequent actions section':
                await this.frequentActions.waitForExist({timeout: config.wait.M});
                await this.frequentActions.scrollIntoView({behavior: 'smooth', block: 'nearest'});
                await this.futuraFrequentActionsSlides.waitForExist({timeout: config.wait.M});
                await this.futuraFrequentActionsSlides.scrollIntoView({block:'center'});
                await this.futuraFrequentActionsSlides.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title frequent actions':
                await this.futuraFrequentActionsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action send money dimo':
                await this.futuraFrequentActionTransfers.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action pay service or tax':
                await this.futuraFrequentActionBillPayments.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action card less withdrawal':
                await this.futuraFrequentActionCardlessWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action credit card payment':
                await this.futuraFrequentActionCreditCardPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action recharge and packages':
                await this.futuraFrequentActionMobileTopUp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action branches and atms':
                await this.swipeElement(this.futuraFrequentActionsSlides, 'right');
                await this.futuraFrequentActionAtmLocator.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action card less withdrawal inquiry':
                await this.futuraFrequentActionCardlessInquiry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action international transfers':
                await this.futuraFrequentActionInternationalTransfers.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent action buy gift card':
                await this.futuraFrequentActionGiftCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title product account':
                await this.futuraProductsTab.futuraProductsAccountsTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'alias product account':
                await this.futuraProductsTab.futuraProductsAccountsAlias.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account product account':
                await this.futuraProductsTab.futuraProductsAccountsAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount product account':
                await this.futuraProductsTab.futuraProductsAccountsAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title product card':
                await this.futuraProductsTab.futuraProductsCardsTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'alias product card':
                await this.futuraProductsTab.futuraProductsCardsAlias.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account product card':
                await this.futuraProductsTab.futuraProductsCardsAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount product card':
                await this.futuraProductsTab.futuraProductsCardsAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title product loan':
                await this.futuraProductsTab.futuraProductsLoansTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'alias product loan':
                await this.futuraProductsTab.futuraProductsLoansAlias.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account product loan':
                await this.futuraProductsTab.futuraProductsLoansAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount product loan':
                await this.futuraProductsTab.futuraProductsLoansAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title product investment':
                await this.futuraProductsTab.futuraProductsInvestmentsTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'alias product investment':
                await this.futuraProductsTab.futuraProductsInvestmentsAlias.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account product investment':
                await this.futuraProductsTab.futuraProductsInvestmentsAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount product investment':
                await this.futuraProductsTab.futuraProductsInvestmentsAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'date advice section':
                await this.futura.homeCore.financialHealth.card.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon nbo':
                await this.futuraNbo.futuraNboIconMore.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title nbo':
                await this.futuraNbo.futuraNboLookingMoreText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text nbo':
                await this.futuraNbo.futuraNboText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'my products button':
                await this.buttonProductos.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'blue flag disabled':
                await this.futura.homeCore.header.blueIcon.waitForNotDisplayed();
                break;
            case 'help button futura':
                await this.helpIconFutura.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'svps element subtitle':
                await this.futuraSvpsSection.scrollIntoView({block: 'start'});
                await this.futuraSvpsSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'svps image item':
                await this.futuraSvpsImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'svps steps':
                await this.futuraSvpsSteps.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'svps collection title':
                await this.futuraSvpsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'svps collection text':
                await this.futuraSvpsText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'svps not visible':
                await this.futuraSvpsSection.scrollIntoView({block: 'end'});
                await this.futuraSvpsSubtitle.waitForNotDisplayed({timeout: config.wait.M});
                break;
            case 'carousel smart servicing':
                await this.futuraSmartServicing.futuraSmartServicingSelector.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carousel smart servicing disappear':
                await this.futuraSmartServicing.futuraSmartServicingSelector.waitForNotDisplayed();
                break;
            case 'first card smart servicing disappear':
                await this.futuraSmartServicing.futuraSmartServicingSecondCard.waitForNotDisplayed();
                break;
            case 'list smart servicing':
                await this.listSmartServicing.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'item list smart servicing disappear':
                await this.listSmartServicing.firstItemListTitle.waitForNotDisplayed();
                break;
            case 'close card smart servicing':
                await this.futuraSmartServicing.futuraSmartServicingCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home main card section':
                await this.futura.homeCore.mainProductsSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main card loan title':
                await this.attemptViewScrollMainCard('end');
                await this.futura.homeCore.mainProducts.loans.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main card loan product':
                await this.futura.homeCore.mainProducts.loans.productReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main card loan amount':
                await this.futura.homeCore.mainProducts.loans.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main card loan pending':
                await this.futura.homeCore.mainProducts.loans.pendingText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main card loan buttons':
                await this.futura.homeCore.mainProducts.loans.stepBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'customized offers':
                await this.futuraNboSection.scrollIntoView({block: 'end'});
                await this.futuraNboSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'smart servicing section':
                await this.futuraSmartServicingSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financial health section':
                await this.futura.homeCore.investmentSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'smart value propositons section':
                await this.futuraSvpsSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'next best action section':
                await this.futura.homeCore.nba.section.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alias account main card':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'alias'});
                break;
            case 'number account main card':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'number'});
                break;
            case 'balance label main card':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'balance'});
                break;
            case 'button movements main card':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'movementsButton', value });
                break;
            case 'button bills main card':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'billsButton', value});
                break;
            case 'pockets account main card':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'pockets'});
                break;
            case 'credit icon':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'creditIcon'});
                break;
            case 'credit progressbar':
                await this.waitForAmountsOfMainProducts({masked: false, element: 'creditProgressBar'});
                break;
            case 'main card button next':
                await this.futura.homeCore.mainProducts.carousel.chevronNext.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main card button previous':
                await this.futura.homeCore.mainProducts.carousel.chevronPrev.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'toast notification':
                await this.toastNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
    async accessToInstantCash() {
        await this.instantCash.scrollIntoView({block: 'end'});
        await this.instantCash.waitForClickable(config.wait.M);
        await this.instantCash.click();
    }

    async accessesTheirProducts() {
        await (await this.futura.homeCore.tabs.yourProductsSectionButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async activeDiscreetMode() {
        await this.futura.homeCore.header.homeTitle.waitForDisplayed({timeout: config.wait.M});
        await (await this.futura.homeCore.header.showModeEyeIcon.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async deactiveDiscreetMode() {
        await this.futura.homeCore.header.homeTitle.waitForDisplayed({timeout: config.wait.M});
        await (await this.futura.homeCore.header.hideModeEyeIcon.waitForDisplayed({timeout: config.wait.M})).click();
        if (await this.futura.homeCore.header.intelligentModeEyeIcon.isExisting()) {
            await (await this.futura.homeCore.header.intelligentModeEyeIcon.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async waitForAmountsOfMainProducts({masked = false, element = 'amounts', value = false } = {}) {
        const expectedField = masked ? 'Masked Amounts' : 'Amounts';
        for (const productType in global.user.futura_collections.home_maincard) {
            const card = this.futura.homeCore.mainProducts[productType];
            const el = masked ? card.maskedAmounts : card[element];
            const products = global.user.futura_collections.home_maincard[productType];
            for (const product of products) {
                const errorMessage = `Failed to validate ${expectedField} visibility. The element is not displayed after ${config.wait.M} ms in Home > Main Products for Product Type ${productType.toUpperCase()}, Contract ID ${product.contractId}, Position: ${products.indexOf(product)}.`;
                await (await el.specifySelector({placeholder: '__CONTRACT-ID__', value: product.contractId})).specifySelector({placeholder: '__HIDDEN_STATE__', value: value === 'hidden' ? '[hidden]' : ''}).waitForDisplayed({timeout: config.wait.M, reverse: value === 'hidden', errorMessage});
            }
        }
    }

    async waitForAmountsOfYourTodayShortcuts({masked = false} = {}) {
        const expectedField = masked ? 'Masked Amounts' : 'Amounts';
        const {card} = this.futura.homeCore.yourTodayShortcuts;
        const el = masked ? card.maskedAmounts : card.amounts;
        const items = global.user.futura_collections.home_smart_servicing.slice(0, 3);
        for(const item of items) {
            const errorMessage = `Failed to validate ${expectedField} visibility. The element is not displayed after ${config.wait.M} ms in Home > Your Today Shortcuts for Item ID ${item.id}, Position: ${items.indexOf(item)}.`;
            await (await el.specifySelector({placeholder: '__ITEM-ID__', value: item.id})).waitForDisplayed({timeout: config.wait.M, errorMessage});
        }
    }

    async waitForAmountsOfFinancialHealth({masked = false} = {}) {
        const {card} = this.futura.homeCore.financialHealth;
        const el = await this.waitForElementsExist(masked ? card.maskedAmounts : card.amounts);
        for (const amount of (await el.elements()).value) {
            await amount.waitForDisplayed({timeout: config.wait.M});
        }
    }

    async waitForDataOfProduct({product, accountDetails, masked = false } = {}) {
        const products = global.user.products[product];
        const cards = product === 'cards' ? products.filter(card => card.productId !== 'VD') : products;
        for (const card of cards) {
            if (accountDetails === 'amounts'){
                await (await this.futura.yourProducts[product].card[accountDetails].specifySelector({placeholder: '__CONTRACT-ID__', value: card.contractId}).waitForDisplayed({timeout: config.wait.M})).waitForProperty({property: 'mask', value: masked, timeout: config.wait.M});
            } else {
                await (await this.futura.yourProducts[product].card[accountDetails].specifySelector({placeholder: '__CONTRACT-ID__', value: card.contractId}).waitForDisplayed({timeout: config.wait.M}));
            }
        }
    }

    async scrollToOffer(){
        const banner = this.futuraBanner.specifySelector({placeholder: '__OFFER__', value: global.user.offerId});
        await this.operations.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        await banner.waitForDisplayed({timeout: config.wait.M});
    }

    async enterOffer(offer) {
        if (await this.isFutura()) {
            await this.nbo.section.waitForExist({ timeout: config.wait.M });
            await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            const typeOffer= this.ocAccessFutura.specifySelector({placeholder: '__OFFER__', value: offer});
            await typeOffer.waitForDisplayed({timeout: config.wait.M});
            await typeOffer.click();
        }
        else{
            await this.ocAccess.accessOffer(offer);
        }

    }

    async closeOffer() {
        if(await this.isFutura()){
            await this.ocAccessClose.waitForDisplayed({timeout: config.wait.M});
            await this.ocAccessClose.click();
        }
        else{
            await this.ocAccess.closeOffer();
        }
    }

    async offerIsClosed() {
        await this.ocAccess.waitForBannerVisibility(true);
    }

    async closeEmailValidationBanner() {
        await this.emailValidationBannerCloseBtn.waitForDisplayed({timeout: config.wait.M});
        await this.emailValidationBannerCloseBtn.waitForEnabled({timeout: config.wait.M});
        await this.emailValidationBannerCloseBtn.click();
    }

    async clickEmailValidationBannerLink() {
        await this.emailValidationBannerLink.waitForDisplayed({timeout: config.wait.M});
        await this.emailValidationBannerLink.waitForEnabled({timeout: config.wait.M});
        await this.emailValidationBannerLink.click();
    }

    async accessToSidebar() {
        if(await this.isFutura()) {
            await this.sidebarButtonFutura.waitForAnimation({timeout: config.wait.M});
            await this.sidebarButtonFutura.click();
        }
        else {
            await this.sidebarButton.waitForAnimation({timeout: config.wait.M});
            await this.sidebarButton.click();
        }
    }

    async goToFaqs() {
        await this.faqsBtn.waitForEnabled({timeout: config.wait.M});
        await this.faqsBtn.click();
    }

    async closeNotificationCard() {
        await this.closeButtonNotificationCard.waitForDisplayed({timeout: config.wait.L});
        await this.closeButtonNotificationCard.click();
    }

    async openNotificationCard() {
        await this.buttonNotificationCard.waitForDisplayed({timeout: config.wait.L});
        await this.buttonNotificationCard.waitForAnimation({timeout: config.wait.L});
        await this.buttonNotificationCard.click();
    }

    async openHelpSearch() {
        if (await this.isFutura()) {
            await this.helpIconFutura.waitForDisplayed({ timeout: config.wait.L });
            await this.helpIconFutura.click();
        }
        else {
            await this.helpIcon.waitForDisplayed({ timeout: config.wait.L });
            await this.helpIcon.click();
        }
    }

    async updateAppSettingsInLocalStorage() {
        if ((typeof global.user.app_settings === 'object') && (global.user.app_settings !== null)) {
            await Commands.execute({
                script: (key, val) => localStorage.setItem(key, val),
                args: ['app_settings', JSON.stringify(global.user.app_settings)]
            });
        }
        if ((typeof global.user.dashboard === 'object') && (global.user.dashboard !== null)) {
            await Commands.execute({
                script: (key, val) => localStorage.setItem(key, val),
                args: ['dashboard', JSON.stringify(global.user.dashboard)]
            });
        }
    }

    async retryModal() {
        await (await this.dashboardRetryButton.waitForClickable()).click();
    }

    async accessEquity() {
        if(await this.isFutura()) {
            await this.selectMyProducts();
            if (await this.equityFutura.isExisting()) {
                await this.equityFutura.scrollIntoView();
                await this.equityFutura.waitForDisplayed({timeout: config.wait.M});
                await (await this.equityFutura.waitForClickable({timeout: config.wait.M})).click();
                return;
            }

            const equityId = global.user?.products?.equityContract?.[0]?.id;
            if (equityId) {
                const productByDataId = this.productDataIdFutura.specifySelector({
                    placeholder: '__DATA_ID__',
                    value: equityId,
                });
                await this.waitByLastDigits(productByDataId);
                await productByDataId.click();
                return;
            }

            await this.equityFutura.waitForDisplayed({timeout: config.wait.L});
            await (await this.equityFutura.waitForClickable({timeout: config.wait.M})).click();
        }else{
            await this.equity.scrollIntoView();
            await this.equity.waitForDisplayed({timeout: config.wait.L});
            await (await this.equity.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async accessBtrader() {
        await this.selectMyProducts();
        await this.btrader.scrollIntoView();
        await this.btrader.waitForDisplayed({timeout: config.wait.L});
        await (await this.btrader.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessUnitLinked() {
        if(await this.isFutura()) {
            await this.selectMyProducts();

            await this.unitLinkedFutura.scrollIntoView();

            await (await this.unitLinkedFutura.waitForDisplayed({timeout: config.wait.M})).click();
        }
        else{
            await this.unitLinked.scrollIntoView();
            await (await this.unitLinked.waitForDisplayed({timeout: config.wait.M})).click();
        }

    }

    async showAmount(amount) {
        switch (amount) {
            case '$0.00':
                idAccounts = user.products[0].accounts[0].id;
                break;
            case '$1,000,000.00':
                idAccounts = user.products[0].accounts[1].id;
                break;
            case '$0.06':
                idAccounts = user.products[0].accounts[2].id;
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: amount, args: arguments[0]});
        }
        return idAccounts;
    }

    async accessCreditCard() {
        await this.selectMyProducts();
        const elemenetFutura= this.numberFutura.specifySelector({placeholder: '__LAST_DIGITS__', value: '4772103001132877'});
        const element = await this.isFutura() ? elemenetFutura : this.selectCard;
        await element.scrollIntoView();
        await element.waitForClickable({timeout: config.wait.M});
        await element.click();
    }

    async accessRewardsLanding() {
        if( await this.isFutura()) {
            await this.futuraYouProducts.waitForDisplayed({timeout: config.wait.M});
            await this.futuraYouProducts.click();
            await this.rewardsLandingAccess.waitForDisplayed({timeout: config.wait.XL});
            await this.rewardsLandingAccess.scrollIntoView({block: 'end'});
            await this.rewardsLandingAccess.click();
        }
        else {
            await this.rewardsLandingAccess.waitForDisplayed({timeout: config.wait.XL});
            await this.rewardsLandingAccess.scrollIntoView({block: 'end'});
            await this.rewardsLandingAccess.click();
        }
    }

    async setCrashReport() {
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: ['losses_report_request_id', 'B00650973']
        });
    }

    async accessTransactionList({ viewMode }) {
        switch (viewMode) {
            case VIEW_MODE.ALL_MERCHANTS:
                await this.futuraYouProducts.waitForDisplayed({ timeout: config.wait.M });
                await this.futuraYouProducts.click();
                await this.businessInteligenceOverviewAllMerchantsAccess.waitForDisplayed({ timeout: config.wait.XL });
                await this.businessInteligenceOverviewAllMerchantsAccess.scrollIntoView();
                await this.businessInteligenceOverviewAllMerchantsAccess.click();
                break;
            case VIEW_MODE.ONE_MERCHANT:
                await this.businessInteligenceOverviewOneMerchantAccess.waitForDisplayed({ timeout: config.wait.XL });
                await this.businessInteligenceOverviewOneMerchantAccess.scrollIntoView();
                await this.businessInteligenceOverviewOneMerchantAccess.click();
                break;
            case VIEW_MODE.CHARGEBACKS:
                await this.businessInteligenceOverviewChargebacksAccess.waitForDisplayed({ timeout: config.wait.XL });
                await this.businessInteligenceOverviewChargebacksAccess.scrollIntoView();
                await this.businessInteligenceOverviewChargebacksAccess.click();
                break;
            default:
                throw new Error(`The viewMode ${viewMode} is not implemented for navigation.`);
        }
    }

    async accessManagerAssistance() {
        await (await this.assistanceButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessFinanceTransactionMultipurchaseDebit() {
        await this.interestedButton.waitForDisplayed({ timeout: config.wait.M });
        await this.interestedButton.waitForAnimation({ timeout: config.wait.M });
        await this.interestedButton.scrollIntoView();
        await this.interestedButton.click({useActions: false, scrollOption: {block: 'neares'}});
    }

    async checkOperationMessage(operationType) {
        const messages = {
            'interbank transfer': 'interbankTransfer',
            'own transfer': 'ownTransfer',
            'external credit card payment': 'externalCreditCardPayment',
            'interbank transfer last amount': 'interbankTransferLastAmount',
            'own transfer last amount': 'ownTransferLastAmount',
            'external credit card payment last amount': 'externalCreditCardPaymentLastAmount',
            'multiple operations': 'multipleOperations',
            'service payment high certainty biweekly': 'servicePaymentHighCertaintyBiweekly',
            'service payment high certainty monthly': 'servicePaymentHighCertaintyMonthly',
            'service payment high certainty bimonthly': 'servicePaymentHighCertaintyBimonthly',
            'service payment high certainty quarterly': 'servicePaymentHighCertaintyQuarterly',
            'service payment low certainty biweekly': 'servicePaymentLowCertaintyBiweekly',
            'service payment low certainty monthly': 'servicePaymentLowCertaintyMonthly',
            'service payment low certainty bimonthly': 'servicePaymentLowCertaintyBimonthly',
            'service payment low certainty quarterly': 'servicePaymentLowCertaintyQuarterly',
            'multiple frequent services': 'messageMultipleFrequentOperations',
            'service payment arcus biweekly': 'servicePaymentArcusBiweekly',
            'service payment arcus monthly': 'servicePaymentArcusMonthly',
            'service payment arcus bimonthly': 'servicePaymentArcusBimonthly',
            'service payment arcus quarterly': 'servicePaymentArcusQuarterly'
        };
        let textCard = global.user[messages[operationType]];
        if (operationType === 'own transfer' || operationType === 'own transfer last amount') {
            textCard = global.user[messages[operationType]].replace('&#58;', ':');
        }
        await this.messageNotificationCard.waitForDisplayed({timeout: config.wait.M});
        await this.messageNotificationCard.waitForText({text: textCard});
    }

    async accessLoanPersonalDetail() {
        await this.selectMyProducts();
    }

    async accessExpensesGroup() {
        if (await this.isFutura()) {
            await this.linkExpensesGroupFutura.scrollIntoView();
            await this.linkExpensesGroupFutura.waitForDisplayed({timeout: config.wait.M});
            await this.linkExpensesGroupFutura.click();
        }
        else {
            await this.panelExpensesGroup.waitForDisplayed({timeout: config.wait.M});
            await this.panelExpensesGroup.scrollIntoView();
            await this.linkExpensesGroup.waitForDisplayed({timeout: config.wait.M});
            await this.linkExpensesGroup.click();
        }

    }

    async validateStandInAccess() {
        await this.standInNotificationStatus.waitForDisplayed({timeout: config.wait.M});
        await this.firstAccount.waitForDisplayed({timeout: config.wait.M});
    }

    async accessFrequentServicePayment() {
        await this.btnFrequentOperations.waitForEnabled({timeout: config.wait.S});
        await this.btnFrequentOperations.click();
    }

    async accessContractProductsSectionDataAuthorization(access) {
        if (access === 'nbo') {
            await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            await this.nbo.buttonCpsda.scrollIntoView({block: 'center'});
            await this.nbo.buttonCpsda.waitForDisplayed({timeout: config.wait.M});
            await this.nbo.buttonCpsda.click();
        } else {
            await this.nba.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            await this.nba.linkCpsda.scrollIntoView({block: 'center'});
            await this.nba.linkCpsda.waitForDisplayed({timeout: config.wait.M});
            await this.nba.linkCpsda.click();
        }
    }

    async opportunitiesCarouselAccess(access){
        if (access === 'nbo') {
            await this.nbo.section.waitForExist({ timeout: config.wait.M });
            await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            const banner = this.futuraBanner.specifySelector({placeholder: '__OFFER__', value: global.user.offerId});
            await banner.waitForDisplayed({timeout: config.wait.M});
            await banner.click();
        } else {
            await this.nba.section.waitForExist({ timeout: config.wait.M });
            await this.nba.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            const typeOffer = this.nba.nbaSelectorOffer.specifySelector({placeholder: '__OFFER__', value: global.user.offerName});
            await typeOffer.waitForDisplayed({timeout: config.wait.M});
            await typeOffer.click();
        }
    }

    async accessLoanAndMortgageTrackingNboOffer() {
        await this.nbo.section.waitForExist({ timeout: config.wait.M });
        await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        const nboOffer = this.nbo.nboSelectorOfferByName.specifySelector({placeholder: '__OFFER__', value: global.user.listOffers.name});
        await nboOffer.waitForDisplayed({timeout: config.wait.M});
        await nboOffer.click();
    }

    async accessCreditCardHolder(section) {
        if (!this[section]){
            throw new Error(`The section ${section} is not implemented for navigation.`);
        }

        await this[section].section.scrollIntoView({block: 'center'});
        await this[section].buttonCreditCardCHolder.scrollIntoView({block: 'center'});
        await this[section].buttonCreditCardCHolder.waitForDisplayed({timeout: config.wait.M});
        await this[section].buttonCreditCardCHolder.click();
    }

    async accessContractProductsSectionProfileRecipients(access) {
        if (access === 'nbo') {
            await this.nbo.section.waitForExist();
            await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            const typefferNBO = this.nbo.nboSelectorOffer.specifySelector({placeholder: '__OFFER__', value: global.user.offers.offerNBO});
            await typefferNBO.waitForDisplayed({timeout: config.wait.M});
            await typefferNBO.click();
        } else {
            await this.nba.section.waitForExist();
            await this.nba.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
            const typefferNBA = this.nba.nbaSelectorOfferRecipients.specifySelector({placeholder: '__OFFER__', value: global.user.offers.offerNBA});
            await typefferNBA.waitForDisplayed({timeout: config.wait.M});
            await typefferNBA.click();
        }
    }

    async accessPortabilityN2() {
        await this.nbo.section.waitForExist({timeout: config.wait.M});
        await this.nbo.section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        const offerBannerN2 = this.futuraBanner.specifySelector({placeholder: '__OFFER__', value: global.user.offerId});
        await offerBannerN2.waitForClickable({timeout: config.wait.M});
        await offerBannerN2.click();
    }

    async accessHomeCoachSection() {
        await this.coachSection.waitForDisplayed({timeout: config.wait.M});
        await this.coachSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        await this.coachWidget.waitForDisplayed({timeout: config.wait.M});
        await this.coachWidgetLink.waitForDisplayed({timeout: config.wait.M});
        await this.coachWidgetLink.waitForClickable({timeout: config.wait.M});
        await this.coachWidgetLink.click();
    }

    async goFinancialHealthWidget() {
        await this.homeFinancialHealth.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        await this.widgetAdviceFinancialHealth.__root.waitForDisplayed({timeout: config.wait.M});
    }

    async accessEdufin() {
        await this.homeEdufin.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        await this.widgetEdufinEntrypoint.edufinWidgetLink.waitForDisplayed({timeout: config.wait.L});
        await this.widgetEdufinEntrypoint.edufinWidgetLink.click();
    }

    async confirmLogout() {
        await this.dialogOperationsSpherica.confirmDialog();
    }

    async selectRating() {
        await this.feedbackClient.selectRating();
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    async resolvedWithoutQuestion() {
        await this.feedbackClient.resolvedWithoutQuestion();
    }

    async closeFormFeedback(option) {
        await this.feedbackClient.closeFormFeedback(option);
    }

    async changeRateAndSend() {
        await this.feedbackClient.changeRateAndSend();
    }

    async selectTheRating() {
        await this.feedbackClient.selectRating();
    }

    async sendFeedback() {
        await this.feedbackClient.sendFeedback();
    }

    async attemptViewScrollNextBestAction() {
        await this.futura.homeCore.nba.section.waitForDisplayed({timeout: config.wait.M});
        await this.futura.homeCore.nba.section.scrollIntoView({behavior: 'smooth', block:'nearest'});
    }

    async accessHomeNextBestAction() {
        await this.attemptViewScrollNextBestAction();
        await this.futura.homeCore.nba.carousel.steps.buttonNextCardNextBestAction.waitForDisplayed({timeout: config.wait.M});
        await this.futura.homeCore.nba.carousel.steps.buttonNextCardNextBestAction.click();
    }

    async accessHomeLastCardNextBestAction(){
        await this.attemptViewScrollNextBestAction();
        await this.futura.homeCore.nba.carousel.steps.buttonLastCardNextBestAction.waitForClickable({timeout: config.wait.M});
        await this.futura.homeCore.nba.carousel.steps.buttonLastCardNextBestAction.click();
    }

    async closeCardNextBestAction(){
        await this.attemptViewScrollNextBestAction();
        await this.futura.homeCore.nba.carousel.slides.closeButtonNextBestActions.waitForClickable({timeout: config.wait.M});
        await this.futura.homeCore.nba.carousel.slides.closeButtonNextBestActions.click();
        await this.futura.homeCore.nba.carousel.steps.buttonNextCardNextBestAction.waitForAnimation({timeout: config.wait.M});
    }

    async accessPromotionCard() {
        await this.futura.homeCore.nba.carousel.slides.linkFirstCardNextBestAction.waitForClickable({timeout: config.wait.M});
        await this.futura.homeCore.nba.carousel.slides.linkFirstCardNextBestAction.waitForAnimation({timeout: config.wait.M});
        await this.futura.homeCore.nba.carousel.slides.linkFirstCardNextBestAction.click();
    }

    async accessOfferDashboard({ option }) {
        await this.bannerSkeleton.waitForDisplayed({timeout: config.wait.M});
        switch (option) {
            case 'NBA':
                await this.cardOfferNBA.click();
                break;
            case 'NBO':
                await this.bannerSkeleton.scrollIntoView();
                await this.cardOfferNBO.click();
                break;
            default:
                throw new Error(`The viewMode ${option} is not implemented for navigation.`);
        }
    }

    async viewCarouselHomeExperience(){
        await (await this.futuraExperiencesSection.waitForExist({timeout: config.wait.M})).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    async accesslastCardExperienceSection(){
        await this.viewCarouselHomeExperience();
        await this.swipeElement(this.futuraExperiencesFirstCard, 'right');
    }

    async accessNextCardExperienceSection(){
        await this.viewCarouselHomeExperience();
        await this.futuraExperiencesButtonNext.waitForDisplayed({timeout: config.wait.M});
        await this.futuraExperiencesButtonNext.click();
    }

    async accessHomeExperienceOption(optionSelected) {
        await this.viewCarouselHomeExperience();
        if (optionSelected === 'carousel') {
            await this.futuraExperiencesFirstCard.waitForDisplayed({timeout: config.wait.M});
            await this.futuraExperiencesFirstCard.click();
        } else {
            await this.futuraExperiencesViewAll.waitForDisplayed({timeout: config.wait.M});
            await this.futuraExperiencesViewAll.click();
        }
    }

    async showProductsFutura() {
        await this.buttonProductos.isEnabled({timeout: config.wait.M});
        await this.buttonProductos.waitForDisplayed({timeout: config.wait.M});
        await this.buttonProductos.click();
    }

    async accessFaqsFutura(){
        await this.futura.homeCore.nba.carousel.steps.bestActionsLabel.waitForDisplayed({timeout: config.wait.M});
        await this.helpIconFutura.waitForDisplayed({timeout: config.wait.M});
        await this.helpIconFutura.click();
    }

    async viewCarouselSmartServicing(){
        await this.attemptViewScrollMainCard('start');
        await this.futuraSmartServicingSection.scrollIntoView({block:'center'});
        await this.futuraSmartServicing.futuraSmartServicingSelector.waitForDisplayed({timeout: config.wait.M});
    }

    async attemptViewScrollMainCard(customBlock){
        await this.futura.homeCore.mainProductsSection.waitForExist({timeout: config.wait.M});
        await this.futura.homeCore.mainProductsSection.scrollIntoView({block: customBlock});
    }

    async viewNboCard(){
        await this.attemptViewScrollMainCard('center');
        await this.futuraNboSection.scrollIntoView({block:'center'});
        await this.futuraNbo.futuraNboIdentifier.waitForDisplayed({timeout: config.wait.M});
    }

    async closeNboCard(){
        await this.attemptViewScrollMainCard('center');
        await this.futuraNbo.futuraNboIdentifier.waitForDisplayed({timeout: config.wait.M});
        await this.futuraNbo.futuraNboCloseButton.waitForDisplayed({timeout: config.wait.M});
        await this.futuraNbo.futuraNboCloseButton.click();
    }

    async accessOpportunitiesPageFromCollectionHome(fromAccess){
        if (fromAccess === 'mainCard') {
            await this.futura.homeCore.mainProducts.carousel.contractLink.waitForDisplayed({timeout: config.wait.M});
            await this.futura.homeCore.mainProducts.carousel.contractLink.click();
        }
        if (fromAccess === 'nbo') {
            await this.attemptViewScrollMainCard('center');
            await this.futuraNbo.futuraNboIdentifier.waitForDisplayed({timeout: config.wait.M});
            await this.futuraNbo.futuraNboLinkViewMore.waitForDisplayed({timeout: config.wait.M});
            await this.futuraNbo.futuraNboLinkViewMore.click();
        }
    }

    async viewAllCreditCardStatus(statusCard){
        await this.attemptViewScrollMainCard('center');
        const product = global.user.futura_collections.home_maincard.cards[0];
        const textStatusCard = {
            off: 'Apagada',
            locked: 'Bloqueada',
            pending: 'Pendiente de activar',
            overdue: 'Vencida'
        };
        await this.futura.homeCore.mainProductsSection.waitForDisplayed({timeout: config.wait.M});
        await (await this.futura.homeCore.mainProducts.cards.statusCard.specifySelector({placeholder: '__CONTRACT-ID__', value: product.contractId})).waitForText({text: textStatusCard[statusCard]});
    }

    async accessListAllSmartServicing() {
        await this.viewCarouselSmartServicing();
        await this.futuraSmartServicing.futuraSmartServicingViewAll.waitForDisplayed({timeout: config.wait.M});
        await this.futuraSmartServicing.futuraSmartServicingViewAll.click();
    }

    async closeItemSmartServcing(fromSelect) {
        switch(fromSelect) {
            case 'carousel':
                await this.futuraSmartServicing.futuraSmartServicingCloseButton.waitForDisplayed({timeout: config.wait.M});
                await this.futuraSmartServicing.futuraSmartServicingCloseButton.click();
                break;
            case 'list':
                await this.listSmartServicing.discardItem();
                break;
            default:
                throw new Error(`The option ${fromSelect} is not implemented`);
        }
    }

    async existFromListSmartServicing() {
        await this.listSmartServicing.selectOperation();
        await this.listSmartServicing.exitList();
    }

    async accessSmartServicingOption(optionSelected) {
        await this.viewCarouselSmartServicing();
        switch(optionSelected) {
            case 'carousel':
                await this.futuraSmartServicing.futuraSmartServicingFirstCard.scrollIntoView({block: 'center'});
                await this.futuraSmartServicing.futuraSmartServicingFirstCard.waitForDisplayed({timeout: config.wait.M});
                await this.futuraSmartServicing.futuraSmartServicingFirstCard.click();
                break;
            case 'list':
                await this.listSmartServicing.selectOperation();
                break;
            default:
                throw new Error(`The option ${optionSelected} is not implemented`);
        }
    }

    async accessInvestmentSection(){
        await this.goFinancialHealthWidget();
        await this.widgetAdviceFinancialHealth.financialHealthWidgetInvestments.waitForDisplayed({timeout: config.wait.M});
        await this.widgetAdviceFinancialHealth.financialHealthWidgetInvestments.click();
    }

    async accessAllMovementsMainCard(){
        await this.attemptViewScrollMainCard('nearest');
        const account = global.user.futura_collections.home_maincard.accounts[0];
        const movementsButton = await this.futura.homeCore.mainProducts.accounts.movementsButton.specifySelector({placeholder: '__CONTRACT-ID__', value: account.contractId});
        await movementsButton.waitForDisplayed({ timeout: config.wait.M });
        await movementsButton.click();
    }

    async accessAllMovementsMainCardCreditCard(){
        await this.attemptViewScrollMainCard('nearest');
        const productCard = global.user.futura_collections.home_maincard.cards[0];
        const movementsButton = await this.futura.homeCore.mainProducts.cards.movementsButton.specifySelector({placeholder: '__CONTRACT-ID__', value: productCard.contractId});
        await movementsButton.waitForDisplayed({ timeout: config.wait.M });
        await movementsButton.click();
    }

    async accessMainCardPFM(){
        const products = global.user.futura_collections.home_maincard.accounts[0];
        const billsButton = await this.futura.homeCore.mainProducts.accounts.billsButton.specifySelector({placeholder: '__CONTRACT-ID__', value: products.contractId});
        await billsButton.waitForDisplayed({ timeout: config.wait.M });
        await billsButton.click();
    }

    async accessMainCardPFMCreditCard(){
        const product = global.user.futura_collections.home_maincard.cards[0];
        const billsButton = await this.futura.homeCore.mainProducts.cards.billsButton.specifySelector({placeholder: '__CONTRACT-ID__', value: product.contractId});
        await billsButton.waitForDisplayed({ timeout: config.wait.M });
        await billsButton.click();
    }

    async interactSlideMainCardCarousel(numberScroll, directionScoll) {
        for (let index = 1; index < parseInt(numberScroll); index++) {
            if (directionScoll === 'next') {
                await this.nextItemMainCardCarousel();
            }
            if (directionScoll === 'previous') {
                await this.prevItemMainCardCarousel();
            }
        }
    }

    async nextItemMainCardCarousel(){
        await this.futura.homeCore.mainProducts.carousel.chevronNext.waitForDisplayed({timeout: config.wait.M});
        await this.futura.homeCore.mainProducts.carousel.chevronNext.click();
    }

    async prevItemMainCardCarousel(){
        await this.futura.homeCore.mainProducts.carousel.chevronPrev.waitForDisplayed({timeout: config.wait.M});
        await this.futura.homeCore.mainProducts.carousel.chevronPrev.click();
    }
}

export default new Dashboard();
