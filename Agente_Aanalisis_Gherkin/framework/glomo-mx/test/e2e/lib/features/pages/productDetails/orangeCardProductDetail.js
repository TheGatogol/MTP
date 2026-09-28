import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('orangeCardProductDetail')
class OrangeCardProductDetail extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-cardDetail[state="active"]',
            elements: {

                // Header
                title: '#return-main-card div.header',
                back: '#return-main-card [data-id="iconsLeft"]',
                header: '#return-main-card .header #heading',

                cardOperationsDialog: [
                    BbvaHelpModal,
                    {   modifiers: '[visible]',
                        additionalElements: {
                            buttonModal: '[text*="-card-modal-button"]',
                            buttonClose: '#btn-close',
                            modalLabel: '.header #text',
                            contentModal: '[slot="slot-content"]',
                            title: '[text*="-card-modal-header"]'
                        }
                    }
                ],
                movementsTypes: {
                    properties: {
                        root: '[data-tag-name="card-information-transactions-list-searching-enrichment-cards-mx"]'
                    },
                    movement: '.main-view-container .cards-container [data-tag-name="card-information-transactions-list-searching-enrichment-card"][item="item-0"]',

                },

                // Control Buttons
                securityBar: '.container-main',
                switchButton: '.container-main #onOffBtn [data-tag-name="bbva-type-link"]',
                onOffButton: '#onOffBtn [class="rounded-icon "]',
                offOnButton: '#onOffBtn [class="rounded-icon off-card"]',
                generateDigitalCard: '#adviceToolTip .link-right [data-tag-name="bbva-type-link"]',
                payDigitalCard: '#adviceToolTip .custom-button-card [text="bbva-feature-product-detail-cards-mx-header-digital-card-buy-button"]',
                catControlButton: '#buttonRowFeatured #buttons bbva-button-action [text="bbva-feature-product-detail-cards-mx-operation-edit-limits"]',
                linkcardBanner: '[data-tag-name="card-entry-point"] [data-tag-name="bbva-type-link"]',
                financingLineButton: '#purchase-carousel-container #show-footer-link',

                // Card description
                cardInfo: '.card-number-floating [data-tag-name="bbva-type-text"][alignment="left"]',
                infoCardBar: '#panel-container',
                buttonLink: 'bbva-feature-product-detail-cards-mx card-detail div.product-detail-container card-panel-details div.main-container div div.floating div #firstLintNext',
                cardAlias: '[class="floating "] [data-tag-name="bbva-type-text"][alignment="left"]',
                cardImage: '.clip-card-container.card-close',
                cardImageFull: '.clip-card-container.card-open',
                cardNumber: '.card-number-floating [alignment="left"] p.text',
                cardNumberFull: '.clip-card-container.card-open .container .holder .holder-number',
                cardDateLabel: '[class="card-number-floating "] [text="bbva-feature-product-detail-cards-mx-card-details-panel-expiration-text"]',
                cardDateFullLabel: '[class="clip-card-container card-open"] .container .holder .time',
                cardDate: '[class="card-number-floating "] div [data-tag-name="bbva-type-text"]',
                cardHolderName: '.clip-card-container.card-open .holder-top .holder-name',
                notMovements: '.main-view-container [data-tag-name="card-information-transactions-list-searching-enrichment-cards-container"] .no-movement-container',
                notMovementsDebitCard: '#no-transactions-preview',
                associatedAccount: '.row #associtateAccountLabel',
                associatedAccountValue: '.row #associtateAccount',
                digitalCardButton: 'cells-product-summary-cardorange #digitalCardButton',
                emptyMovementsCard: '.main-view-container [data-tag-name="card-information-transactions-list-searching-enrichment-no-movement"]',
                emptyMovementsImg:  '.main-view-container [data-tag-name="card-information-transactions-list-searching-enrichment-no-movement"] [data-tag-name="bbva-clip-microillustration"]',
                labelWithoutMovements: '.main-view-container [data-tag-name="card-information-transactions-list-searching-enrichment-no-movement"] [data-tag-name="bbva-type-text"]',
                maskedAmount: 'bbva-type-amount[mask]',
                currentAvailableBalanceMaskedAmount: '.amount-wrapper bbva-type-amount[mask]',
                disposedAvailableBalanceMaskedAmount: '.floating bbva-type-amount[mask]',
                rewardAmount: 'cells-rewards-card-info [mask]',
                inactiveStatus: '#status-title',

                //Card Actions
                cardHelpToolTipBtn: '#tooltip .footer-container',
                helpScreen: '#tooltip',
                modalError: '.product-detail-container .notification-error-message bbva-notification-message[variant="error"]',
                phoneBBVA: '.orange-error-box__message__button button[data-selector="call-bbva-button"]',
                retryButton: 'bbva-feature-product-detail-cards-mx card-detail div.product-detail-container div.pad-default bbva-expandable-accordion div.accordion-content bbva-notification-message div.link bbva-type-link',
                copyPanAction: '#copyBtn',
                greenToast: '[data-tag-name="bbva-notification-container"] [data-tag-name="bbva-notification-toast"] #dialogTitle',
                cardDetailAction: '#moreInfo',
                cardStatusMsg: '#status-description',
                progressBar: '.progress-bar',
                lastMovements: '[data-tag-name="card-information-transactions-list-searching-enrichment-cards-mx"]',
                seeAllMovements: '[data-tag-name="bbva-button-default"][text="card-information-transactions-list-searching-enrichment-cards-mx-main-view-container-see-all-movements-button-text"]',
                allMovementsDebit: '[data-tag-name="bbva-feature-transactions-list-accounts-mx"] #all-movements-btn',
                helpAllMovements: '[data-tag-name="bbva-feature-transactions-list-accounts-mx"] all-movements-modal #all-transactions-modal #btn-info',
                helpAllMovementMessage: '[data-tag-name="bbva-feature-transactions-list-accounts-mx"] modal-info .modal-main #helpModalContent',
                movementInTransit: '.main-view-container .cards-container card-information-transactions-list-searching-enrichment-card[item="item-0"] .special-tags-container bbva-badge-default[text="card-information-transactions-list-searching-enrichment-cards-mx-pending-movement-badge-text"]',
                currentMovementsToCategories: '#current',
                categories: '[id="por categoría"]',
                dates: '[id="por fecha"]',
                iWantLabel: '.main-view-container card-information-transactions-list-searching-enrichment-card[item="item-0"] .special-tags-container',
                pobPromotionMessage: '.main-view-container card-information-transactions-list-searching-enrichment-card[item="item-4"] [data-tag-name="bbva-badge-default"]',
                errorMovements: '.main-view-container card-information-transactions-list-searching-enrichment-cards-container',
                movements: '[class="transaction-list__item"][id="__ID__"]',
                additionalCardFooter: '#requestLinkAdditionalCard',
                additionalCard: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-accordion"]',
                    },
                    foldAdditionalCcModule: '.header-accordion .right-icon',
                    additionalCcList: '.accordion-content',
                    additionalCardTitle: 'div.row.row-link',
                    additionalCardImage: '[data-tag-name="bbva-clip-card"] #cardImage',
                    additionalCardAmount: '.card-detail [data-tag-name="bbva-type-amount"] div.amount-wrapper span.sr-only',
                    lockedAdditionalCard: '.row.row-link [status="blocked"]',
                    inactiveAdditionalCard: '.row.row-link [status=""]',
                    offAdditionalCard: '.row.row-link [status="off"]',
                },

                infoModalMessage: '[data-tag-name="bbva-expandable-accordion"]  div.accordion-content  [data-tag-name="bbva-notification-message"]',
                additionalCardOff: '[data-id="__DATA_SELECTOR__"] [status="off"]',
                additionalCardDetailItem: '[data-id="__DATA_SELECTOR__"]',
                movementClarificationsTransit: 'cells-transactions-list div.transaction-list__item[data-selector*="__CONCEPT__"i]',
                rewardsLandingAccess: '#pointsInfoId',
                accessFlexibleFinancing: '.list-offer [data-tag-name="bbva-type-link"]',
                movementWithLabelp: '[text="bbva-feature-transactions-list-cards-mx-transaction-card-points-badge"]',

                // Card Messa
                messageInfo: '.notification-error-message [class="container-text   "] .link ',

                // Available Balance Debit Card
                cardDetailPanel: {
                    properties: {
                        root: 'card-detail card-panel-details div.main-container .floating .amount-wrapper',
                    },
                    availableBalanceLabelDc: 'bbva-type-text p',
                    availableBalanceAmountDc: 'bbva-type-amount .integer',
                },
                switchActionButtonDebitCard: '.container-main #onOffBtn [data-tag-name="bbva-type-link"]',
                activateDigitalCardsDebitCard: '.container-main .custom-button-card.link-right [data-tag-name="bbva-type-link"]',

                // Available Balance Credit Card
                availableBalanceLabelCc: '.amount-wrapper [text="bbva-feature-product-detail-cards-mx-card-details-panel-current-balances"]',
                availableBalanceAmountCc: '.amount-wrapper .amount-wrapper',

                // Disposed Balance
                disposedBalanceLabel: '.row [text="bbva-feature-product-detail-cards-mx-card-details-panel-disposed-balance"]',
                disposedBalanceAmount: '.floating .row .amount-wrapper',

                // Granted Limit
                balanceModalLabel: '#balanceInFavorWrapper .tooltip bbva-type-text',
                balanceModalAmount: '#balanceInFavorWrapper bbva-type-amount ',
                balanceFavourBtn: '#helpBtn',

                //Operative Module
                operationsModule: '.operation-list',
                operationsButtonRow: '.operation-list [data-tag-name="bbva-button-row"]',
                cardActivationButton: '.label-container [text="bbva-feature-product-detail-cards-mx-operation-card-activation"]',
                blockCardBtn: 'div.operation-list #buttonRowFeatured [text^="bbva-feature-product-detail-cards-mx-operation-block"]',
                viewMoreIcon: '[text="bbva-feature-product-detail-cards-mx-operation-view-more"]',
                firstOperatives: '#buttonRowFeatured',
                editLimitButton: '#buttonRowFeatured [text="bbva-feature-product-detail-cards-mx-operation-edit-limits"]',
                nipNumber: '#buttonRowFeatured [text="bbva-feature-product-detail-cards-mx-operation-show-pin"]',
                parentalControlBtn: '.items [text="bbva-feature-product-detail-cards-mx-operation-parental-control"]',

                // Credit Module
                creditTitle: 'cells-text-description[data-selector="title-0-0"]',
                creditLabel: 'div span[data-selector="values-key-0-0-0"]',
                grantedCreditLabel: '[data-tag-name="card-panel-details"] #panel-container div.line.balance  [data-tag-name="bbva-type-text"]',
                amountGrantedCredit: '[data-tag-name="card-panel-details"] #panel-container div.line.balance [data-tag-name="bbva-type-amount"]',
                paymentDetailsTitle: 'cells-text-description[data-selector="title-1-0"]',
                paydayLimitLabel: 'div[data-selector="value-1-0-0"] span',
                paydayLimit: 'div[data-selector="value-1-0-0"] __DATA_SELECTOR__',
                cutOffDateLabel: 'span[data-selector="values-key-1-0-1"]',
                cutOffDate: 'cells-atom-date span[id="date"]',
                paymentOptions: 'p[data-selector="title-0"]',
                paymentDetailBanner: 'card-detail #nextPaymentHelp',
                minimumAmountLabel: 'span[data-selector="values-key-1-2-0"]',
                minimumAmount: 'div[data-selector="value-1-2-0"] span.amount-wrapper',
                minimumAmountTooltip: 'cells-atom-icon[data-selector="values-infoLabel-icon-1-2-0"] iron-icon',
                minimumAmountAvoidFeeLabel: 'span[data-selector="values-key-1-2-1"]',
                minimumAmountAvoidFeeAmount: 'div[data-selector="value-1-2-1"] cells-atom-amount span.amount-wrapper',
                offersBanner: 'div[data-item="OICL"]',
                paymentDetailButton: '#nextPaymentHelp',
                cardSimulateButton: '.line-container-next-pay .center.pad-bottom [data-tag-name="bbva-type-link"]',
                minmumPaymentButton: '#minimumPaymentClarificationsTypeLink',
                creditModule: '#expandButton iron-icon',
                calculateInterestButton: 'bbva-feature-product-detail-cards-mx card-detail div.line-container-next-pay div.pad-bottom bbva-type-link',

                productSummary: {
                    lockedLabel: '#status-title',
                    minusLabel: 'card-detail card-panel-details div.amount-wrapper bbva-type-amount',
                },

                // Points Module
                pointsModuleBanner: {
                    properties: {
                        root: 'cells-rewards-card-info'
                    },
                    pointsAmount: 'div.content-text p#text-points',
                    detailPointsButton: 'div.content-header cells-st-button button',
                },

                // Finance Transaction Multipurchase
                bannerMultipurchase: '#goToDeferPurchasesId',

                //OnBoarding Modal
                titleHeader: 'cells-modal-slider cells-bottom-modal div header#header div.heading',
                sliderButton1: 'button[data-index="0"]',
                sliderButton2: 'button[data-index="1"]',
                sliderButton3: 'button[data-index="2"]',
                descriptionModule: 'cells-image-card a.modal-card',
                iconCaculateInterest: 'cells-modal-slider #SliderGroup #slide-0 cells-image-card #imageImg #sizedImgDiv',
                closeButton: 'cells-modal-slider cells-bottom-modal#bottomModal button#closeButton cells-atom-icon iron-icon',
                acceptButton: 'div.slider-button-box cells-st-button:nth-child(1) button',

                //transfer Button
                operationTransfer: 'cells-operations-list .list__item[data-selector="transfer"] button',

                //paycard Button
                operationPaycard: '#buttonRowFeatured #buttons [text="bbva-feature-product-detail-cards-mx-operation-pay-credit-card"]',

                //display additional cards
                additionalCardsButton: '[data-tag-name="additional-card"]',

                //monthly Statement Button
                monthlyStatementBtn: '#buttonRowFeatured [text="bbva-feature-product-detail-cards-mx-operation-account-status"]',

                //Finance Transaction Multipurchase Debit
                interestedButton: '#productDetailCardsMx  #banner',
                financingLineCard: '#purchase-carousel-container',
                multipurchaseDebit: {
                    properties: { root: '[data-tag-name="card-transaction-servicing-finance-debit-multipurchase-mx"]' },
                    linkDefer: '.featured-movement [data-tag-name="bbva-type-link"]',
                    linkDeferShowMore: '[data-tag-name="bbva-carousel-default"] #carouselSlides div[aria-labelledby="slide-5"] [data-tag-name="bbva-type-link"]',
                    financingLineText: '.featured-movement-title [data-tag-name="bbva-type-text"] .text',
                },

                //Clarifications
                movementBlockPaymentCard: '.main-view-container .cards-container card-information-transactions-list-searching-enrichment-card[item="item-0"]',

                //All movements debit
                movementsDebit: {
                    properties: { root: '[data-tag-name="bbva-feature-transactions-list-accounts-mx"]' },
                    seeAllMovementsButton: 'div.transactions-li .all-movements-btn [data-tag-name="bbva-button-default"]',
                    itemListMovements: 'div.transactions-li [data-tag-name="transaction-list"] [data-tag-name="transaction-item"] div.transaction-container[id=__TRANSACTION_ID__]',
                    lastMovementAllMovements: '[data-tag-name="all-movements-modal"] div.all-transactions-modal [data-tag-name="transaction-list"] [data-tag-name="transaction-item"]',
                    itemListAllMovements: '[data-tag-name="all-movements-modal"] div.all-transactions-modal [data-tag-name="transaction-list"] [data-tag-name="transaction-item"] div.transaction-container[id=__TRANSACTION_ID__]',
                    lastMovementItem: 'div.transactions-li [data-tag-name="transaction-list"] [data-tag-name="transaction-item"]',
                },
                moreInfoCardDetail: {

                    // Card description
                    image: 'bbva-clip-card-data',
                    number: 'more-info bbva-clip-card-data .holder-number',
                    date: 'more-info bbva-clip-card-data .holder .time span',
                    holderName: 'more-info bbva-clip-card-data .holder-top bbva-type-text span',

                    // Fields
                    cardType: {
                        properties: { root: '#item-productType' },
                        label: 'bbva-type-text p',
                        value: 'bbva-type-text.align-right h5 span',
                    },
                    cardAlias: {
                        properties: { root: '#item-alias' },
                        label: 'bbva-type-text p',
                        value: 'bbva-type-text.align-right h5 span'
                    },
                    associateProducts: {
                        properties: { root: '#item-product' },
                        label: 'bbva-type-text p',
                        value: 'bbva-type-text.align-right h5 span',
                    },
                    cardNumber: {
                        properties: { root: '#item-cardNumber' },
                        label: 'bbva-type-text p',
                        value: 'bbva-type-text.align-right h5 span',
                    },
                    cardDate: {
                        properties: { root: '#item-expirationDate' },
                        label: 'bbva-type-text p',
                        value: 'bbva-type-text.align-right h5 span',
                    },
                    cardHolder: {
                        properties: { root: '#holderInfo' },
                        label: 'bbva-type-text h5',
                        value: 'custom-simple-list bbva-type-text.align-right',
                    },
                    creditLimit: {
                        properties: { root: '#creditLimit' },
                        label: 'bbva-type-text h5',
                        value: 'custom-simple-list bbva-type-text.align-right',

                    },
                    copyPanNumberButton: ' widget-card-more-info #item-cardNumber div.link',
                    greenToast: 'bbva-feature-product-detail-cards-mx bbva-notification-container',
                    paymentMethodLabel: '#paymentMethod bbva-type-text p',
                    paymentMethodValue: '#paymentMethod bbva-type-text.align-right h5 span',
                    cardAnnuityLabel: '#commission-item-annuity bbva-type-text p',
                    cardAnnuityValue: '#commission-item-annuity bbva-type-text.align-right h5 span',
                    collectionExpensesLabel: '#commission-item-collectionExpenses bbva-type-text p',
                    collectionExpensesValue: '#commission-item-collectionExpenses bbva-type-text.align-right h5 span',
                    replacementLabel: '#commission-item-theftLose bbva-type-text p',
                    replacementValue: '#commission-item-theftLose bbva-type-text.align-right h5 span',
                },
                operatives: {
                    payCardButton: '#payCard',
                    btnBack: '[class="transition-container   "] #btn-close',
                    editAliasButton: '#editAlias',
                    editLimits: '#editLimits',
                    viewNipButton: '#nipNumbers',
                    editAvailableCreditLimit: 'cells-operations-list li[data-selector="editAvailableCreditLimit"] button',
                    statementEnquiryBtn: '#accountStatus',
                    blockCard: '#blockCard',
                    promotionsAdvancedPaymentsBtn: '#promotionsAdvancedPayments',
                    cutOffDate: '#cardCutOffDate',
                },

                standIn:{
                    properties: { root: '[data-tag-name="bbva-help-modal"][visible]' },
                    imageStandIn: '#helpModalTitle div.microillustration-container',
                    titleStandIn: '#helpModalTitle [data-tag-name="bbva-type-text"]#title-text',
                    acceptButton: '.transition-container .help-modal .modal-main .modal-footer [text="bbva-feature-product-detail-cards-mx-stand-id-modal-button"]',
                },
            },
            requiredElements: [
                'securityBar'
            ]
        });
    }

    async moreInfoCard() {
        await this.cardInfo.waitForDisplayed({ timeout: config.wait.XL });
        await this.cardInfo.click();
    }

    async copyCardNumber() {
        await this.copyPanAction.waitForDisplayed({ timeout: config.wait.XL });
        await this.copyPanAction.click();
    }

    async cardDetailInfo() {
        await this.cardDetailAction.waitForClickable({ timeout: config.wait.M });
        await this.cardDetailAction.click();
    }

    async selectMovementByDataSelector(dataSelector) {
        switch (dataSelector) {
            case 'block payment card':
            case 'block card':
                await this.movementBlockPaymentCard.waitForClickable({ timeout: config.wait.L });
                await this.movementBlockPaymentCard.click();
                break;
            case 'in transit transaction':
                await this.movementInTransit.waitForDisplayed({timeout: config.wait.M});
                await this.movementInTransit.click();
                break;
            default:
                await this.movementsTypes.movement.waitForDisplayed({ timeout: config.wait.L });
                await this.movementsTypes.movement.click();
        }
    }

    async _screenValidation({ item, value, _args } = {}) {
        const { notVisible } = _args;
        let dataSelector;
        const reverseWaitForDisplayed = value === 'not visible';
        switch (item.toLowerCase()) {
            case 'item list movements':
                await this.movementsDebit.itemListMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'onoff action':
                if (value.toLowerCase() === 'enable') {
                    await this.switchButton.waitForClickable({ timeout: config.wait.M });
                    break;
                } else {
                    await this.switchButton.waitForEnabled({ timeout: config.wait.M, reverse: true });
                    break;
                }
            case 'generate digital card action':
                if (value.toLowerCase() === 'enable') {
                    await this.generateDigitalCard.waitForClickable({ timeout: config.wait.M });
                    break;
                } else if (value.toLowerCase() === 'disable') {
                    await this.generateDigitalCard.waitForDisabled({ timeout: config.wait.S });
                    break;
                } else {
                    await this.generateDigitalCard.waitForNotDisplayed();
                    break;
                }
            case 'digital card payment':
                if (value.toLowerCase() === 'enable') {
                    await this.payDigitalCard.waitForClickable({ timeout: config.wait.M });
                    break;
                } else if (value.toLowerCase() === 'disable') {
                    await this.payDigitalCard.waitForEnabled({ timeout: config.wait.M, reverse: true });
                    break;
                } else {
                    await this.payDigitalCard.waitForNotDisplayed();
                    break;
                }
            case 'pan number':
                if (value.toLowerCase() !== 'enable') {
                    await this.cardNumber.waitForNotDisplayed;
                } else {
                    await this.cardNumber.waitForDisplayed({ timeout: config.wait.S });
                }
                break;
            case 'card number':
                await this.cardNumberFull.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card alias':
                if (value.toLowerCase() !== 'enable') {
                    await this.cardAlias.waitForDisplayed({ timeout: config.wait.S, reverse: true });
                } else {
                    await this.cardAlias.waitForDisplayed({ timeout: config.wait.S });
                }
                break;
            case 'minus label':
                await this.productSummary.minusLabel.waitForDisplayed({ timeout: config.wait.M, reverse: value.toLowerCase() === 'invisible' });
                break;
            case 'card image':
                await this.cardImage.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'invisible' });
                break;
            case 'card image full':
                await this.cardImageFull.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'invisible' });
                break;
            case 'statement enquiry card':
                await this.monthlyStatementBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'current available amount label':
                await this.cardDetailPanel.availableBalanceLabelDc.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'invisible' });
                break;
            case 'current available balance amount':
                await this.cardDetailPanel.availableBalanceAmountDc.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'invisible' });
                break;
            case 'available amount label':
                await this.availableBalanceLabelCc.waitForDisplayed({ timeout: config.wait.S, reverse: !(value === 'enable') });
                break;
            case 'available amount value':
                await this.availableBalanceAmountCc.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'invisible' });
                break;
            case 'disposed amount label':
                await this.disposedBalanceLabel.waitForDisplayed({ timeout: config.wait.S, reverse: !(value === 'enable') });
                break;
            case 'disposed amount value':
                await this.disposedBalanceAmount.waitForDisplayed({ timeout: config.wait.S, reverse: !(value === 'enable') });
                break;
            case 'balance label':
                if (value.toLowerCase() === 'enable') {
                    await this.balanceModalLabel.waitForDisplayed({ timeout: config.wait.S });
                } else {
                    await this.balanceModalLabel.waitForNotDisplayed();
                }
                break;
            case 'balance value':
                if (value.toLowerCase() === 'enable') {
                    await this.balanceModalAmount.waitForDisplayed({ timeout: config.wait.S });
                } else {
                    await this.balanceModalAmount.waitForNotDisplayed();
                }
                break;
            case 'security bar':
                await this.securityBar.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info card bar':
                await this.infoCardBar.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expiration date label':
                if (value.toLowerCase() === 'enable') {
                    await this.cardDateLabel.waitForEnabled({ timeout: config.wait.L });
                } else {
                    await this.cardDateLabel.waitForNotDisplayed();
                }
                break;
            case 'expiration date value':
                if (value.toLowerCase() === 'enable') {
                    await this.cardDate.waitForEnabled({ timeout: config.wait.L });
                } else {
                    await this.cardDate.waitForNotDisplayed();
                }
                break;
            case 'inactive label':
                await this.inactiveStatus.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'invisible'
                });
                break;
            case 'inactive status':
                await this.inactiveStatus.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'invisible'
                });
                break;
            case 'expiration date full label':
                await this.cardDateFullLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'alias value':
                await this.cardAlias.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'operatives toolbar':
                await this.operationsModule.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'operatives toolbar buttons':
                await this.operationsButtonRow.waitForEnabled({ reverse: value === 'disable' });
                break;
            case 'operatives toolbar card on':
                await this.operationsModule.scrollIntoView();
                await this.operationsModule.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'bbva call link':
                await this.phoneBBVA.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'card help popup':
                notVisible ? await this.helpScreen.waitForNotDisplayed() : await this.helpScreen.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal error':
                await this.modalError.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'retry link':
                await this.retryButton.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'off title':
                await this.inactiveStatus.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message error':
                await this.messageError.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'retry button':
                await this.buttonError.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'holder name value':
                await this.cardHolderName.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'copy pan action':
                await this.copyPanAction.waitForDisplayed({
                    reverse: value === 'visible',
                    timeout: config.wait.M,
                });
                break;
            case 'detail card action':
                await this.cardDetailAction.waitForDisplayed({
                    reverse: value === 'visible',
                    timeout: config.wait.M,
                });
                break;
            case 'quick controls':
                await this.onOffButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'switch on':
                if (value === 'visible') {
                    await this.offOnButton.waitForClickable({ timeout: config.wait.L });
                    break;
                } else {
                    notVisible ? await this.offOnButton.waitForNotDisplayed() : await this.offOnButton
                        .waitForDisplayed({ timeout: config.wait.M, reverse: true });
                    break;
                }
            case 'switch off':
                if (value === 'visible') {
                    await this.onOffButton.waitForClickable({ timeout: config.wait.L });
                    break;
                } else {
                    await this.onOffButton.waitForDisplayed({ timeout: config.wait.M, reverse: true });
                    break;
                }
            case 'help label':
            case 'retry modal':
                await this.cardOperationsDialog.additionalElements.modalLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal':
                await this.cardOperationsDialog.additionalElements.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'retry modal error':
                await this.dialogOperations.container.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'turn on link':
                await this.cardOperationsDialog.additionalElements.buttonModal.scrollIntoView();
                await this.cardOperationsDialog.additionalElements.buttonModal.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'retry action':
                notVisible ? await this.dialogOperations.acceptBtn.waitForNotDisplayed() : await this.dialogOperations.acceptBtn
                    .waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'exit link':
            case 'cancel':
                await this.cardOperationsDialog.additionalElements.buttonClose.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'cancel modal error':
                await this.dialogOperations.cancelBtn.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'credit card progress':
                await this.progressBar.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'invisible' });
                break;
            case 'status description':
                await this.cardStatusMsg.waitForDisplayed({ timeout: config.wait.S, reverse: value === 'invisible' });
                break;
            case 'status title':
                await this.inactiveStatus.waitForDisplayed({ timeout: config.wait.S, reverse: value === 'invisible' });
                break;
            case 'credit title':
                await this.creditTitle.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'credit label':
                await this.creditLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'granted credit label':
                await this.grantedCreditLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'amount granted credit':
                await this.amountGrantedCredit.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'payment details title':
                await this.paymentDetailsTitle.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'payday limit label':
                await this.paydayLimitLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'payday limit':
                dataSelector = 'span[data-selector="values-other-1-0-0"]';
                if ((await this.paydayLimit.specifySelector({ placeholder: '__DATA_SELECTOR__', value: dataSelector }).getText()).match(/\d+ [a-z]+/i)) {
                    await this.paydayLimit.specifySelector({ placeholder: '__DATA_SELECTOR__', value: dataSelector }).waitForDisplayed({ timeout: config.wait.M });
                } else {
                    const dataSelector = 'cells-atom-date span[id="date"]';
                    await this.paydayLimit.specifySelector({ placeholder: '__DATA_SELECTOR__', value: dataSelector }).waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'cut off date label':
                await this.cutOffDateLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'cut off date':
                await this.cutOffDate.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'payment options':
                await this.paymentOptions.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'payment detail banner':
                await this.paymentDetailBanner.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'minimum amount label':
                await this.minimumAmountLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'minimum amount':
                await this.minimumAmount.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'minimum amount tooltip':
                await this.minimumAmountTooltip.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'minimum amount avoid fees label':
                await this.minimumAmountAvoidFeeLabel.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'minimum amount avoid fees':
                await this.minimumAmountAvoidFeeAmount.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'card simulate button':
                await this.cardStatusMsg.waitForDisplayed({ timeout: config.wait.S, reverse: value === 'invisible' });
                break;
            case 'offers banner':
                notVisible ? await this.offersBanner.waitForNotDisplayed() :
                    await this.offersBanner.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'payment help screen':
                await this.cardOperationsDialog.additionalElements.contentModal.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'description help screen':
                await this.cardOperationsDialog.additionalElements.contentModal.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'header help screen':
                await this.cardOperationsDialog.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'points banner':
                notVisible ? await this.pointsModuleBanner.waitForNotDisplayed({ timeout: config.wait.S }) :
                    await this.pointsModuleBanner.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'points detail':
                await this.pointsModuleBanner.detailPointsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'onboarding header':
                await this.titleHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'slider 1':
                await this.sliderButton1.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'slider 2':
                await this.sliderButton2.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'slider 3':
                await this.sliderButton3.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'not movements':
                if (value.toLowerCase() === 'debit') {
                    await this.notMovementsDebitCard.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.notMovements.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'all movements button':
                notVisible ? await this.seeAllMovements.waitForNotDisplayed() :
                    await this.seeAllMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error message modal':
                await this.errorMovements.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'credit module':
                await this.creditModule.waitForDisplayed({ timeout: config.wait.M, reverse: true });
                break;
            case 'associated account label':
                await this.associatedAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'associated account value':
                await this.associatedAccountValue.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'additional credit card list':
                await this.additionalCard.additionalCcList.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'current movements categories':
                await this.currentMovementsToCategories.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'previous movements categories':
                await this.currentMovementsToCategories.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'last movements categories':
                await this.currentMovementsToCategories.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'last movements':
                await this.lastMovements.scrollIntoView();
                await this.lastMovements.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'fold button':
                await this.additionalCard.foldAdditionalCcModule.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'request additional credit card button':
                notVisible ? await this.additionalCardFooter.waitForDisplayed({ timeout: config.wait.L, reverse: true }) :
                    await this.additionalCardFooter.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'operative additional':
                await this.additionalCard.inactiveAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'blocked additional':
                await this.additionalCard.lockedAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expired additional':
                await this.additionalCard.lockedAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'canceled additional':
                await this.additionalCard.lockedAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'pending delivery additional':
            case 'pending embossing additional':
            case 'inactive additional':
                await this.additionalCard.inactiveAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'off additional':
                await this.additionalCard.offAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon interest':
                await this.iconCaculateInterest.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pending activation additional':
                await this.additionalCard.inactiveAdditionalCard.waitForDisplayed({timeout: config.wait.M});
                await this.iconCaculateInterest.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'additional card title':
                await this.additionalCard.additionalCardTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'additional card image':
                await this.additionalCard.additionalCardImage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'additional card amount':
                await this.additionalCard.additionalCardAmount.waitForDisplayed({ timeout: config.wait.M });
                await this.additionalCard.inactiveAdditionalCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info modal message':
                await this.infoModalMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'stolen operative additional':
            case 'lost operative additional':
            case 'current operative additional':
            case 'pdt.receipt.s operative additional':
            case 'pdt.shipment operative additional':
            case 'pdt.shipment2 operative additional':
                dataSelector = global.storage.additionalCardId.cardId;
                await this.additionalCard.additionalCcList.waitForDisplayed({ timeout: config.wait.L });
                await this.additionalCardDetailItem.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).waitForDisplayed({ timeout: config.wait.XXXL });
                break;
            case 'off operative additional':
                dataSelector = global.storage.additionalCardId.cardId;
                await this.additionalCard.additionalCcList.waitForDisplayed({ timeout: config.wait.L });
                await this.additionalCardOff.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).waitForDisplayed({ timeout: config.wait.XXXL });
                break;
            case 'pdt.stamp inactive additional':
            case 'pdt.delivery inactive additional':
            case 'pdt.delivery2 inactive additional':
            case 'pdt.receipt.s inactive additional':
                dataSelector = global.storage.additionalCardId.cardId;
                await this.additionalCard.additionalCcList.waitForDisplayed({ timeout: config.wait.L });
                await this.additionalCardDetailItem.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).waitForDisplayed({ timeout: config.wait.XXXL });
                break;
            case 'tj.stolen blocked additional':
            case 'tj.lost blocked additional':
            case 'expired blocked additional':
            case 'expired2 blocked additional':
                dataSelector = global.storage.additionalCardId.cardId;
                await this.additionalCard.additionalCcList.waitForDisplayed({ timeout: config.wait.L });
                await this.additionalCardDetailItem.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).waitForDisplayed({ timeout: config.wait.XXXL });
                break;
            case 'green toast':
                await this.greenToast.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'modify operational limits entry point':
                if (value.toLowerCase() === 'enabled') {
                    await this.editLimitButton.waitForEnabled({ timeout: config.wait.L });
                } else if (value.toLowerCase() === 'disabled') {
                    await this.firstOperatives.waitForDisplayed({ timeout: config.wait.L });
                    await this.firstOperatives.waitForAttribute({ attribute: 'aria-disabled' });
                } else {
                    await this.editLimitButton.waitForNotDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'cat control button':
                await this.catControlButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'calculate interest button':
                await this.calculateInterestButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'locked label':
                await this.productSummary.lockedLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message locked':
                await this.cardStatusMsg.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty movements image':
                await this.emptyMovementsImg.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty movements card':
                await this.emptyMovementsCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label without movements':
                await this.labelWithoutMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'back button':
                await this.back.waitForDisplayed({ timeout: config.wait.M,
                    reverse: reverseWaitForDisplayed
                });
                break;
            case 'masked amount':
                await (await this.maskedAmount.waitForDisplayed({ timeout: config.wait.M })).waitForProperty({ property: 'mask', value: true, timeout: config.wait.M });
                break;
            case 'current available balance masked amount':
                await this.currentAvailableBalanceMaskedAmount.waitForProperty({ property: 'mask', value: true, timeout: config.wait.M });
                break;
            case 'disposed available balance masked amount':
                await this.disposedAvailableBalanceMaskedAmount.waitForProperty({ property: 'mask', value: true, timeout: config.wait.M });
                break;
            case 'obfuscated card number as title with 4 last digits':
                await this.cardNumber.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'nip number':
                if (value.toLowerCase() === 'enable') {
                    await this.nipNumber.waitForClickable({ timeout: config.wait.L });
                } else {
                    await this.nipNumber.waitForDisplayed({ timeout: config.wait.S, reverse: true });
                }
                break;
            case 'switch debit card':
                await this.switchActionButtonDebitCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'activate digital card debit card':
                await this.activateDigitalCardsDebitCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card block management':
                await this.blockCardBtn.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not visible' });
                break;
            case 'card location button':
                await this.buttonLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close button':
                await this.header.secondaryBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text card':
                await this.textCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'i want label':
                await this.iWantLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'target audience purchase message':
                await this.pobPromotionMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card activation button':
                await this.cardActivationButton.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not visible' });
                break;
            case 'view more button':
                await this.viewMoreIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'financing line text':
                await this.multipurchaseDebit.financingLineText.scrollIntoView({ block: 'center' });
                await this.multipurchaseDebit.financingLineText.waitForAnimation({ timeout: config.wait.M, interval: config.wait.XS });
                break;
            case 'show footer link':
                await this.accessFlexibleFinancing.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'financing line show more link':
                await this.multipurchaseDebit.linkDefer.scrollIntoView({ block: 'center' });
                await this.multipurchaseDebit.linkDefer.waitForAnimation({ timeout: config.wait.M, interval: config.wait.XS });
                break;
            case 'financing line link defer':
                await this.multipurchaseDebit.linkDeferShowMore.scrollIntoView({ block: 'center' });
                await this.multipurchaseDebit.linkDeferShowMore.waitForAnimation({ timeout: config.wait.M, interval: config.wait.XS });
                break;
            case 'financing line card':
                await this.financingLineCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'first movement':
                await this.movement.scrollIntoView();
                await this.movement.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'second movement':
                await this.movements.specifySelector({ placeholder: '__ID__', value: global.user.movements.second }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'third movement':
                await this.movements.specifySelector({ placeholder: '__ID__', value: global.user.movements.third }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'fourth movement':
                await this.movements.specifySelector({ placeholder: '__ID__', value: global.user.movements.fourth }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'uncategorized transaction':
            case 'refund transaction':
            case 'credit card installment transaction':
                await this.movementsTypes.movement.scrollIntoView({block: 'nearest'});
                await this.movementsTypes.movement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in transit transaction':
                await this.movementInTransit.scrollIntoView({block: 'nearest'});
                await this.movementInTransit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help message':
                if (value === 'credit') {
                    await this.cardOperationsDialog.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.helpAllMovementMessage.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'card image more info':
                await this.moreInfoCardDetail.image.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card number more info':
                await this.moreInfoCardDetail.number.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card date':
                await this.moreInfoCardDetail.date.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card holder name':
                await this.moreInfoCardDetail.holderName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card type label':
                await this.moreInfoCardDetail.cardType.label.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card type value':
                await this.moreInfoCardDetail.cardType.value.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card alias label':
                await this.moreInfoCardDetail.cardAlias.label.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'card alias value':
                await this.moreInfoCardDetail.cardAlias.value.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'associate products label':
                await this.moreInfoCardDetail.associateProducts.label.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'associate products value':
                await this.moreInfoCardDetail.associateProducts.value.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card number label':
                await this.moreInfoCardDetail.cardNumber.label.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card number value':
                await this.moreInfoCardDetail.cardNumber.value.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card date label':
                await this.moreInfoCardDetail.cardDate.label.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card date value':
                await this.moreInfoCardDetail.cardDate.value.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card holder label':
                await this.moreInfoCardDetail.cardHolder.label.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card holder value':
                await this.moreInfoCardDetail.cardHolder.value.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'credit limit label':
                await this.moreInfoCardDetail.creditLimit.label.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'credit limit value':
                await this.moreInfoCardDetail.creditLimit.value.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'copy button':
                await this.moreInfoCardDetail.copyPanNumberButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'green toast more info':
                await this.moreInfoCardDetail.greenToast.waitForDisplayed({ timeout: config.wait.M, reverse: true });
                break;
            case 'payment method label':
                await this.moreInfoCardDetail.paymentMethodLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'payment method value':
                await this.moreInfoCardDetail.paymentMethodValue.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'annuity label':
                await this.moreInfoCardDetail.cardAnnuityLabel.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'annuity value':
                await this.moreInfoCardDetail.cardAnnuityValue.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'collection expenses label':
                await this.moreInfoCardDetail.collectionExpensesLabel.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'collection expenses value':
                await this.moreInfoCardDetail.collectionExpensesValue.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'replacement label':
                await this.moreInfoCardDetail.replacementLabel.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'replacement value':
                await this.moreInfoCardDetail.replacementValue.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'limit button state':
                await this.operatives.editLimits.waitForDisabled({ timeout: config.wait.M, reverse: value !== 'disabled' });
                break;
            case 'edit credit limits':
                await this.operatives.editAvailableCreditLimit.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForDisplayed });
                break;
            case 'statement enquiry card operative':
                await this.statementEnquiryBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button view nip':
                await this.operatives.viewNipButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button back':
                await this.operatives.btnBack.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button block and reposition card':
                await this.operatives.blockCard.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button edit alias':
                await this.operatives.editAliasButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button expense control':
                await this.operatives.editLimits.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header standin':
                await this.cardOperationsDialog.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'image modal standin':
                await this.standIn.imageStandIn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal standin':
                await this.standIn.titleStandIn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button modal standin':
                await this.standIn.acceptButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    message: `Element ${item} IS NOT DEFINED for [ORANGE CARD PRODUCT DETAIL]`,
                    key: item,
                    args: arguments[0]
                });
        }
    }

    async accessToOperative(operative) {
        switch (operative.toLowerCase()) {
            case 'credit card payment':
                await this.goToPayCard();
                break;
            case 'statement enquiry':
                await this.operatives.statementEnquiryBtn.waitForClickable({ timeout: config.wait.M });
                await this.operatives.statementEnquiryBtn.click();
                break;
            case 'limits update':
                await this.goToCardLimits();
                break;
            case 'edit alias':
                await this.operatives.editAliasButton.waitForDisplayed({ timeout: config.wait.L });
                await this.operatives.editAliasButton.click({scrollOptions: { block: 'nearest'} });
                break;
            case 'pin view':
                await this.operatives.viewNipButton.waitForDisplayed({ timeout: config.wait.L });
                await this.operatives.viewNipButton.click({scrollOptions: { block: 'nearest'} });
                break;
            case 'block card':
                await this.operatives.blockCard.waitForClickable({ timeout: config.wait.M });
                await this.operatives.blockCard.click();
                break;
            case 'cut off date':
                await this.operatives.cutOffDate.waitForClickable();
                await this.operatives.cutOffDate.click();
                break;
            default:
                throw new Error(`Access to ${operative} is not implemented yet`);
        }
    }

    async retryAccess(times) {
        if (times !== undefined) {
            times = 3;
            for (let p = 0; p < times; p++) {
                await (await this.retryButton.waitForClickable({ timeout: config.wait.M })).click();
                await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L });
            }
            await this.modalError.waitForDisplayed({
                timeout: config.wait.M,
                errorMessage: 'Error modal is not visible after three retries'
            });
        } else {
            await (await this.retryButton.waitForClickable({ timeout: config.wait.M })).click();
            await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L });
        }
    }

    async retryOnOff() {
        await this.cardOperationsDialog.additionalElements.buttonModal.waitForClickable({ timeout: config.wait.S });
        await this.cardOperationsDialog.additionalElements.buttonModal.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M });
    }

    async cancelCurrentOperation() {
        await this.cardOperationsDialog.confirmDialog({ isConfirmed: false });
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.XXXL });
    }

    async onOffSwitch(onOff, state) {
        await this.infoCardBar.waitForEnabled({ timeout: config.wait.M });
        await this.securityBar.waitForDisplayed({ timeout: config.wait.M });
        switch (onOff.toLowerCase()) {
            case 'off':
                await this.onOffButton.waitForClickable({ timeout: config.wait.L });
                await this.onOffButton.click();
                await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.XXL });
                if (state === 'successfully') {
                    await this.retryOnOff();
                }
                else if (state === 'success') {
                    await this.closeAlert(true);
                }
                break;
            case 'on':
                await this.offOnButton.waitForClickable({ timeout: config.wait.L });
                await this.offOnButton.click();
                await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.XXL });
                if (state === 'successfully') {
                    await this.retryOnOff();
                }
                break;
            default:
                throw new Error('Switch on/off is not visible at the moment. Verify services status');
        }
    }

    async closeOnOffModal() {
        await this.closeToast();
    }

    async closeToast() {
        await this.cardAlias.waitForClickable({ timeout: config.wait.L });
        await this.cardAlias.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L });
    }

    async closeHelpModalScreen() {
        await this.helpScreen.waitForClickable({ timeout: config.wait.M });
        await this.helpScreen.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L });
    }

    async closeTooltipDigitalCard() {
        if (storage.tooltipHide !== true) {
            await this.helpScreen.waitForDisplayed({ timeout: config.wait.L });
            await this.cardHelpToolTipBtn.waitForClickable({ timeout: config.wait.L });
            await this.cardHelpToolTipBtn.click();
            await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L });
        }
        storage.tooltipHide = true;
    }

    async favourBalance() {
        await this.balanceFavourBtn.waitForClickable({ timeout: config.wait.M });
        await this.balanceFavourBtn.click();
    }

    async goBack() {
        await this.back.waitForClickable({ timeout: config.wait.M });
        await this.back.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L });
    }

    async continueProcess() {
        await this.cardOperationsDialog.additionalElements.buttonModal.waitForClickable({ timeout: config.wait.S });
        await this.cardOperationsDialog.additionalElements.buttonModal.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M });
    }

    async closeOperative() {
        await this.closeModal();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M });
    }

    async closeAlert(isConfirmed = false) {
        await this.dialogOperations.confirmDialog({ isConfirmed });
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M });
    }

    async accessToAllMovements() {
        await this.seeAllMovements.waitForDisplayed({ timeout: config.wait.M });
        await this.seeAllMovements.waitForAnimation({ timeout: config.wait.M });
        await this.seeAllMovements.waitForExist({ timeout: config.wait.M });
        await this.seeAllMovements.scrollIntoView({ block: 'end' });
        await this.seeAllMovements.waitForDisplayed({ timeout: config.wait.L });
        await this.seeAllMovements.waitForEnabled({ timeout: config.wait.L });
        await this.seeAllMovements.click({useActions: true});
    }

    async selectMovementProductDetail(movementType) {
        if (movementType) {
            await this.selectMovementByDataSelector(movementType);
        } else {
            await this.movementsTypes.movement.waitForClickable({ timeout: config.wait.L });
            await this.movementsTypes.movement.click();
        }
    }

    async selectMovementProductDetailForTransit(movementSelector) {
        const movementExist = user.products.cards[0].movements.find(currentElement => currentElement.data.concept === movementSelector);
        if (user.products.cards[0].movements && movementExist) {
            const element = this.movementClarificationsTransit.specifySelector({ placeholder: '__CONCEPT__', value: movementSelector });
            await element.waitForDisplayed({ timeout: config.wait.M });
            await element.click();
        }
    }

    async accessToCategories() {
        await this.categories.waitForDisplayed({ timeout: config.wait.L });
        await this.categories.click();
    }

    async accessToDates() {
        await this.dates.waitForDisplayed({timeout: config.wait.M});
        await this.dates.click();
    }

    async displayCreditCardModule() {
        await this.additionalCardsButton.waitForEnabled({ timeout: config.wait.M });
        await this.cardSimulateButton.scrollIntoView({ block: 'start' });
        await this.cardSimulateButton.waitForAnimation({ timeout: config.wait.M });
        await this.cardSimulateButton.waitForDisplayed({ timeout: config.wait.M });
    }

    async accessPaymentDetailTooltip() {
        await this.paymentDetailBanner.waitForClickable({ timeout: config.wait.M });
        await this.paymentDetailBanner.click();
    }

    async verifyFormatDate(dateFormat) {
        let exp;
        let dataSelector;
        let dateFormatValue;
        switch (dateFormat.toLowerCase()) {
            case 'day of month':
                dataSelector = 'span[id="date"]';
                dateFormatValue = await this.paydayLimit.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).getText();
                exp = /\d+ [a-z]+/i;
                dateFormatValue.match(exp);
                break;
            case 'number of days':
                dataSelector = 'span[data-selector="values-other-1-0-0"]';
                dateFormatValue = await this.paydayLimit.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).getText();
                exp = /\d+ [a-z]+ [a-z]+/i;
                dateFormatValue.match(exp);
                break;
            case 'expired':
                dataSelector = 'span[data-selector="values-other-1-0-0"]';
                dateFormatValue = await this.paydayLimit.specifySelector({
                    placeholder: '__DATA_SELECTOR__',
                    value: dataSelector
                }).getText();
                exp = /[a-z]+/i;
                dateFormatValue.match(exp);
                break;
            default:
                throw new Error('Date format value do not match with the expected value');
        }
    }

    async verifyFormatPoints(pointsFormat) {
        let exp;
        let pointsFormatValue;
        switch (pointsFormat.toLowerCase()) {
            case 'points':
                pointsFormatValue = await this.pointsModuleBanner.pointsAmount.getText();
                exp = /[a-z]+ \d+ [a-z]+/i;
                pointsFormatValue.match(exp);
                break;
            case 'no points':
                pointsFormatValue = await this.pointsModuleBanner.pointsAmount.getText();
                exp = /[0-9]+ [a-z]+ [a-z]+/i;
                pointsFormatValue.match(exp);
                break;
            default:
                throw new Error('Points format value do not match with the expected value');
        }
    }

    async viewMoreOperatives() {
        await this.operationsModule.waitForClickable({ timeout: config.wait.M });
        await this.viewMoreIcon.waitForClickable({ timeout: config.wait.M });
        await this.viewMoreIcon.click();
    }

    async verifyAliasCardName(newAlias) {
        await this.cardAlias.waitForDisplayed({ timeout: config.wait.XXL });
        await this.cardAlias.waitForText({ text: newAlias, errorMessage: 'The card alias value is different' });
    }

    async locateModulePoints() {
        await this.pointsModuleBanner.waitForEnabled({ timeout: config.wait.M });
        await this.pointsModuleBanner.scrollIntoView({ block: 'start' });
        await this.pointsModuleBanner.waitForAnimation({ timeout: config.wait.M });
    }

    async accessOnboarding() {
        await this.displayCreditCardModule();
        await this.cardSimulateButton.click();
    }

    async accessMinimumPayment() {
        await this.displayCreditCardModule();
        await this.minmumPaymentButton.click();
    }

    async simulateInterestOnboardingSlideStep2() {
        await this.sliderButton2.waitForClickable({ timeout: config.wait.M });
        await this.sliderButton2.click();
    }

    async simulateInterestOnboardingSlideStep3() {
        await this.sliderButton3.waitForClickable({ timeout: config.wait.M });
        await this.sliderButton3.click();
    }

    async accessAcceptTerms() {
        await this.sliderButton2.waitForClickable({ timeout: config.wait.M });
        await this.sliderButton2.click();
        await this.descriptionModule.waitForAnimation({ timeout: config.wait.M });
        await this.sliderButton3.waitForClickable({ timeout: config.wait.M });
        await this.sliderButton3.click();
        await this.descriptionModule.waitForAnimation({ timeout: config.wait.M });
    }

    async exitOnboarding() {
        await this.closeButton.waitForClickable({ timeout: config.wait.M });
        await this.closeButton.click();
    }

    async acceptTerms() {
        await this.accessAcceptTerms();
        await this.acceptButton.waitForClickable({ timeout: config.wait.L });
        await this.acceptButton.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M });
    }

    async accessDynamicCvv() {
        const isBusinessDebitCard = Object.prototype.hasOwnProperty.call(global.user, 'tags') && global.user.tags[0] === 'business_debit_card';
        if (isBusinessDebitCard) {
            await this.generateDigitalCard.waitForClickable({ timeout: config.wait.M });
            await this.generateDigitalCard.click();
        } else {
            await this.payDigitalCard.waitForClickable({ timeout: config.wait.M });
            await this.payDigitalCard.click();
        }
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L });
    }

    async displayAdditionalCcModule() {
        await this.additionalCardsButton.waitForClickable({ timeout: config.wait.L });
        await this.additionalCardsButton.click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.XL });
    }

    async accessAdditionalCard() {
        const dataSelector = global.storage.additionalCardId.cardId;
        await this.additionalCard.additionalCcList.waitForDisplayed({ timeout: config.wait.XXXL });
        await this.additionalCardDetailItem.specifySelector({
            placeholder: '__DATA_SELECTOR__',
            value: dataSelector
        }).waitForDisplayed({ timeout: config.wait.XXXL });
        await this.additionalCardDetailItem.specifySelector({
            placeholder: '__DATA_SELECTOR__',
            value: dataSelector
        }).click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.XL });
    }

    async modifyOperationalLimits() {
        await this.editLimitButton.waitForDisplayed({ timeout: config.wait.L });
        await this.editLimitButton.waitForClickable({ timeout: config.wait.L });
        await this.editLimitButton.click();
    }

    async initiateTransfersProductDetail() {
        await this.operationsModule.waitForClickable({ timeout: config.wait.L });
        await this.operationTransfer.waitForClickable({ timeout: config.wait.L });
        await this.operationTransfer.click();
    }

    async cardActivationOperatives() {
        await this.cardActivationButton.waitForDisplayed({ timeout: config.wait.M });
        await this.cardActivationButton.click();
    }

    async accessDigitalCard() {
        await this.generateDigitalCard.waitForDisplayed({ timeout: config.wait.L });
        await this.generateDigitalCard.click({useActions: true});
    }

    async accessButtonLink() {
        await this.buttonLink.waitForDisplayed({ timeout: config.wait.L });
        await this.buttonLink.click();
    }

    async accessFinanceMultipurchase() {
        await this.waitForElementsExist(this.bannerMultipurchase, config.wait.M);
        await (await this.bannerMultipurchase.elements()).value[0].waitForDisplayed({ timeout: config.wait.M });
        await (await this.bannerMultipurchase.elements()).value[0].scrollIntoView({ block: 'center' });
        await (await this.bannerMultipurchase.elements()).value[0].click();

    }

    async accessStatementCard() {
        await (await this.monthlyStatementBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accesscardLocation() {
        await (await this.buttonLink.waitForDisplayed()).click();
    }

    async accessRewardsLandingDetail() {
        await this.rewardsLandingAccess.waitForExist({ timeout: config.wait.XXXL });
        await this.rewardsLandingAccess.scrollIntoView({ block: 'center' });
        await this.rewardsLandingAccess.waitForDisplayed({ timeout: config.wait.L });
        await this.rewardsLandingAccess.waitForAnimation({ timeout: config.wait.L });
        await this.rewardsLandingAccess.waitForClickable({ timeout: config.wait.L });
        await this.rewardsLandingAccess.click();
    }

    async waitForLoaded(timeOut = config.wait.XL) {
        return super.waitForLoaded(timeOut, this.noDialog);
    }

    async selectDigitalCard() {
        await this.digitalCardButton.waitForClickable({ timeout: config.wait.L });
        await this.digitalCardButton.click();
    }

    async standInSwitchCard() {
        await this.switchButton.waitForDisplayed({ timeout: config.wait.XL });
        await this.switchButton.click();
    }

    async standInOperativeCard() {
        await this.operationPaycard.waitForDisplayed({ timeout: config.wait.M });
        await this.operationPaycard.scrollIntoView({ block: 'nearest' });
        await this.operationPaycard.click({ useActions: true });
    }

    async standInMessageInfo() {
        await this.messageInfo.waitForDisplayed({ timeout: config.wait.XL });
        await this.messageInfo.click();
    }

    async selectPaymentDetail() {
        await this.paymentDetailButton.scrollIntoView();
        await this.paymentDetailButton.waitForExist({ timeout: config.wait.L });
        await this.paymentDetailButton.click();
        await this.cardOperationsDialog.additionalElements.buttonClose.click();
    }

    async closeModalPaymentDetail() {
        await this.paymentDetailButton.scrollIntoView();
        await this.paymentDetailButton.waitForExist({ timeout: config.wait.M });
        await this.paymentDetailButton.click();
        await this.cardOperationsDialog.additionalElements.buttonClose.click();
    }

    async selectCalculateInterest() {
        await (await this.calculateInterestButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async errorOnOff(onOff) {
        await this.infoCardBar.waitForEnabled({ timeout: config.wait.M });
        await this.securityBar.waitForDisplayed({ timeout: config.wait.M });
        switch (onOff.toLowerCase()) {
            case 'off':
                await (await this.onOffButton.waitForClickable({ timeout: config.wait.M })).click();
                break;
            case 'on':
                await (await this.offOnButton.waitForClickable({ timeout: config.wait.M })).click();
                break;
            default:

                throw new Error('Switch on/off is not visible at the moment. Verify services status');
        }
    }

    async accessFlexibleFinancingDashboard() {
        await this.accessFlexibleFinancing.waitForExist({ timeout: config.wait.L });
        await this.accessFlexibleFinancing.waitForDisplayed({ timeout: config.wait.L });
        await this.accessFlexibleFinancing.waitForAnimation({ timeout: config.wait.L });
        await this.accessFlexibleFinancing.waitForEnabled({ timeout: config.wait.L });
        await this.accessFlexibleFinancing.click({ useActions: false, scrollOptions: { block: 'center' } });
    }

    async requestAdditionalCard() {
        await this.additionalCardFooter.waitForDisplayed({ timeout: config.wait.M });
        await this.additionalCardFooter.click();
    }

    async goToParentalControl() {
        await (await this.parentalControlBtn.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accessFinanceTransactionMultipurchaseDebit() {
        await this.interestedButton.waitForDisplayed({timeout: config.wait.L});
        await this.interestedButton.waitForAnimation({timeout: config.wait.L});
        await this.interestedButton.scrollIntoView({block: 'end'});
        await this.interestedButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async accessMovementFinanceTransactionMultipurchaseDebit(button) {
        switch (button) {
            case 'defer':
                await this.multipurchaseDebit.linkDefer.scrollIntoView({ block: 'center' });
                await this.multipurchaseDebit.linkDefer.waitForAnimation({ timeout: config.wait.M, interval: config.wait.XS });
                await this.multipurchaseDebit.linkDefer.click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            case 'show more':
                await this.multipurchaseDebit.linkDeferShowMore.waitForExist({ timeout: config.wait.M });
                await this.multipurchaseDebit.linkDeferShowMore.scrollIntoView({ block: 'center' });
                await this.multipurchaseDebit.linkDeferShowMore.waitForAnimation({ timeout: config.wait.M, interval: config.wait.XS });
                await this.multipurchaseDebit.linkDeferShowMore.click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            default:
                throw new Error(`${button} button is not available to option to...`);
        }
    }

    async counterMovements(movement) {
        const valueReverse = movement === '0';

        await this.accessFlexibleFinancing.waitForDisplayed({ timeout: config.wait.M });
        await this.accessFlexibleFinancing.scrollIntoView({ block: 'nearest' });
        await this.multipurchaseDebit.linkDefer.waitForDisplayed({ timeout: config.wait.M, reverse: valueReverse });

    }

    async selectMovementWant(option) {
        const element = option === 'none' ? this.movementsTypes.movement : this.movementWithLabelp;
        await this.waitForElementsExist(element);
        const movements = await element.elements();
        await movements.value[0].scrollIntoView({ block: 'center' });
        await movements.value[0].click();
    }

    async selectLinkcardRequestBanner() {
        await this.linkcardBanner.waitForDisplayed({ timeout: config.wait.M });
        await this.linkcardBanner.click();
    }

    async accessFinancingLine() {
        await this.financingLineCard.scrollIntoView({ block: 'end' });
        await this.financingLineButton.waitForDisplayed({ timeout: config.wait.M });
        await this.financingLineButton.click();
    }

    async closeModal() {
        await this.cardOperationsDialog.additionalElements.buttonClose.waitForDisplayed({ timeout: config.wait.M });
        await this.cardOperationsDialog.additionalElements.buttonClose.click();
    }

    async openAllMovementsDebitCard() {
        await this.allMovementsDebit.waitForDisplayed({ timeout: config.wait.M });
        await this.allMovementsDebit.click();
    }

    async helpAllMovementsDebitCard() {
        await this.helpAllMovements.waitForDisplayed({ timeout: config.wait.M });
        await this.helpAllMovements.click();
    }

    async seeLastMovementDetail() {
        await this.movementsDebit.lastMovementItem.scrollIntoView();
        await this.movementsDebit.lastMovementItem.waitForClickable({ timeout: config.wait.L });
        await this.movementsDebit.lastMovementItem.click();
    }

    async seeMovementDetail({ selectedNum }) {
        const movement = this.movementsDebit.itemListMovements.specifySelector({ placeholder: '__TRANSACTION_ID__', value: `M_${selectedNum}` });
        await movement.scrollIntoView();
        await movement.waitForClickable({ timeout: config.wait.L });
        await movement.click();
    }

    async seeMovementDetailFromAllTransactions({ selectedNum } = {}) {
        await this.movementsDebit.seeAllMovementsButton.scrollIntoView({ block: 'end' });
        await this.movementsDebit.seeAllMovementsButton.waitForClickable({ timeout: config.wait.L });
        await this.movementsDebit.seeAllMovementsButton.click();
        const movement = selectedNum
            ? this.movementsDebit.itemListAllMovements.specifySelector({ placeholder: '__TRANSACTION_ID__', value: `M_${selectedNum}` })
            : this.movementsDebit.lastMovementAllMovements;
        await movement.scrollIntoView();
        await movement.waitForClickable({ timeout: config.wait.L });
        await movement.click();
    }

    async accessToCardBlockManagement(){
        await this.title.waitForDisplayed({timeout: config.wait.M});
        await this.blockCardBtn.waitForDisplayed({timeout: config.wait.M});
        await this.blockCardBtn.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async copyPanNumber() {
        await this.moreInfoCardDetail.copyPanNumberButton.waitForDisplayed({ timeout: config.wait.M });
        await this.moreInfoCardDetail.copyPanNumberButton.click();
    }

    async goToPayCard() {
        await this.operatives.payCardButton.waitForDisplayed();
        await this.operatives.payCardButton.click();
    }

    async accessEditAlias() {
        await this.operatives.editAliasButton.waitForDisplayed({ timeout: config.wait.L });
        await this.operatives.editAliasButton.click();
    }

    async goToCardLimits() {
        await this.operatives.editLimits.waitForDisplayed({ timeout: config.wait.L });
        await this.operatives.editLimits.click();
    }

    async goPinRequest() {
        await (await this.operatives.viewNipButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async goPromotionsAdvancedPayments() {
        await this.operatives.promotionsAdvancedPaymentsBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.operatives.promotionsAdvancedPaymentsBtn.click();
    }

    async accessViewNip() {
        await this.operatives.viewNipButton.waitForDisplayed({ timeout: config.wait.L });
        await this.operatives.viewNipButton.click();
    }

    async accessBlockAndReplacement() {
        await this.operatives.blockCard.waitForDisplayed({ timeout: config.wait.L });
        await this.operatives.blockCard.click();
    }
}
export default new OrangeCardProductDetail();
