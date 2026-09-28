import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager.js';

import BbvaHeaderMain from '../../components/bbva-header-main';

@page('MovementsDetail')
class MovementsDetail extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-cardTransactionDetail[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                transactionAmount: '.panel-info-container bbva-type-amount[data-tag-name="bbva-type-amount"]',
                movementDetails: {
                    properties: {
                        root: 'bbva-help-modal#targetAudienceModal'
                    },
                    pobPromotionHeaderModal: ' #helpModalHeader',
                    headerExitButton: '#helpModalHeader #btn-right-primary',
                    headerFaqsButton: '#helpModalHeader #btn-right-secondary',
                    panelImage: '[data-tag-name="bbva-panel-offer"][slot="slot-content"] div.content-panel div.content-image',
                    panelTitle: '[data-tag-name="bbva-panel-offer"][slot="slot-content"] div.content-panel div.content-text [data-tag-name="bbva-text"].title',
                    panelDescription: '[data-tag-name="bbva-panel-offer"][slot="slot-content"] div.content-panel div.content-text slot [data-tag-name="bbva-text"].description-content',
                    purchaseAmount: '[data-tag-name="bbva-aggregation-simple-list"][slot="slot-content"] [data-tag-name="bbva-list-simple"]:nth-of-type(1)',
                    amountToPayWithPoints: '[data-tag-name="bbva-aggregation-simple-list"][slot="slot-content"] [data-tag-name="bbva-list-simple"]:nth-of-type(2)',
                    amountToPayWithCard: '[data-tag-name="bbva-aggregation-simple-list"][slot="slot-content"] [data-tag-name="bbva-list-simple"]:nth-of-type(3)',
                    pointsToUseInformation: '[data-tag-name="bbva-aggregation-simple-list"][slot="slot-content"] [data-tag-name="bbva-notification-help"]:nth-of-type(2)',
                    promotionComparative: '[data-tag-name="bbva-panel-comparative"][slot="slot-content"]',
                    effectiveDate: '[data-tag-name="bbva-list-simple"][slot="slot-content"] div.wrapper dl dd.wrapper-description [data-tag-name="bbva-text"]',
                    useMyPointsButton: '[data-tag-name="bbva-button-default"][slot="slot-content"]',
                },
                movementDetailContainer: {
                    properties: {
                        root: '[data-tag-name="card-information-transaction-detail-enrichment-information"]'
                    },
                    dateMovementTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-operation-date-label"]',
                    dateMovementValue: '[id^="operationDate"]',
                    amountMovementTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-default-amount-in-foreign-currency-label"]',
                    amountMovementValue: '[id="totalAmountLabel"]',
                    creditDetailCardTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-business-type-label"]',
                    creditDetailCardValue: '[id="businessTypeLabel"]',
                    operationTypeTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-operation-type-label"]',
                    operationTypeValue: '[id="operationTypeLabel"]',
                    cardUsedTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-card-used-label"]',
                    additionalValue: '[text="card-information-transaction-detail-enrichment-cards-mx-card-used-types-adicional-text"]',
                    operationFolioTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-operation-folio-label"]',
                    cardTermination: '[text="card-information-transaction-detail-enrichment-cards-mx-content-enriched-card-termination-label"]',
                    amountPayWithCard: '[text="card-information-transaction-detail-enrichment-cards-mx-content-amount-paid-by-card-label"]',
                    amountPayWithPoints: '[text="card-information-transaction-detail-enrichment-cards-mx-content-enriched-amount-paid-with-bbva-points-label"]',
                    amountForeignCurrency: '[text="card-information-transaction-detail-enrichment-cards-mx-content-enriched-amount-in-foreign-currency-label"]',
                    amountLocalCurrency: '[text="card-information-transaction-detail-enrichment-cards-mx-content-amount-in-pesos-label"]',
                    withdrawnAmountTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-amount-withdrawn-label"]',
                    chargedAmountTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-amount-charged-label"]',
                    associatedCardTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-default-card-termination-label"]',
                    associatedCardValue: '[id="cardTerminationLabel"]',
                    branchCashWithdrawalValue: '[text*="oficina"]',
                    pointsUsed: '[text="card-information-transaction-detail-enrichment-cards-mx-content-enriched-bbva-points-used-label"]',
                    pointsEarned: '[text="card-information-transaction-detail-enrichment-cards-mx-content-enriched-bbva-points-earned-label"]',
                    conceptTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-concept-label"]',
                    operationDateTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-accounted-date-label"]',
                    descriptionTitle: '[text="card-information-transaction-detail-enrichment-cards-mx-content-description-label"]',
                },

                // Buttons
                headerText: 'bbva-header-main[text="card-information-transaction-detail-enrichment-cards-mx-main-header-text"] .button-1 ',
                acceptBtn: '[data-tag-name="card-information-transaction-detail-enrichment-cards-mx"] .help-modal #btn-close',
                infoTransaction: 'cells-transaction-detail.cardDetailTransactions div.transaction-info',
                headerDateValue: '.panel-info-container .operation-date[data-tag-name="bbva-type-text"]',
                iconInfo: '[data-tag-name="card-information-transaction-detail-enrichment-panel-info"] .badge-container [data-tag-name="bbva-type-icon"]',
                effectiveDateTitle: 'cells-key-values[data-selector="cells-transaction-detail-accounted-date"] div.key',
                effectiveDateValue: 'cells-key-values[data-selector="cells-transaction-detail-accounted-date"] div.value',
                debitDetailCardTitle: 'cells-key-values[data-selector*="cells-transaction-detail-description"] div.key',
                debitDetailCardValue: 'cells-key-values[data-selector*="cells-transaction-detail-description"] div.value',
                movementInTransitLabel: '.badge-container bbva-badge-default[text="card-information-transaction-detail-enrichment-cards-mx-badges-movement-in-transit-text"]',
                physicalPurchaseValue: '[text="card-information-transaction-detail-enrichment-cards-mx-content-purchase-type-physical-value"]',
                digitalPurchaseValue: '[text="card-information-transaction-detail-enrichment-cards-mx-content-purchase-type-digital-value"]',
                infoModalInTransit: '[text="card-information-transaction-detail-enrichment-cards-mx-movement-in-transit-modal-body-text"]',
                inTransitButton: '.badge-container bbva-type-icon',
                errorDetailMessage: 'bbva-notification-message[data-tag-name="bbva-notification-message"]',
                atmNumberTitle: 'cells-key-values[data-selector="cells-transaction-detail-store-terminal"] div.key',
                atmNumberValue: 'cells-key-values[data-selector="cells-transaction-detail-store-terminal"] div.value',
                infoTransactionTitle: 'cells-key-values[data-selector="cells-transaction-detail-folio"] div.key',
                infoTransactionValue: 'cells-key-values[data-selector="cells-transaction-detail-folio"] div.value',
                associatedAccountTitle: 'cells-key-values[data-selector*="account"] div.key',
                associatedAccountValue: 'cells-key-values[data-selector*="account"] div.value',
                pendingTransactionButton: '.text-icon .panel-icon',
                clarificationsButton: '.button-row-container #claimAvailable',
                payWithPointsButton: '.button-row-container #payWithPoints',
                deferToMonthsButton: '.button-row-container #passToMonths',
                pobPromotionBanner: 'card-information-transaction-detail-enrichment-cards-mx [data-tag-name="card-information-transaction-detail-enrichment-savings-promotion-banner"]',

                cashWithdrawalValue: '.panel-info-container .concept:not([text*="sucursal"])',
                branchCashWithdrawalValue: '.panel-info-container .concept[text*="sucursal"]',
                mainPanelConcept: '.concept.is-enriched',
                mainPanelDate: '.operation-date.is-enriched',
                mainPanelAmount: '.panel-info-container .amount-wrapper .amount-content',

                movements: {
                    helpButton: '#btn-info',
                    movement: '.cards-container #item-list-0',
                    movementClarificationsTransit: '.cards-container [text*="__TEXT__"]',
                    noMovements: '[class="last-page-text"]',
                    entirePage: '[class="cards-container"]',
                },
                cardTransactionDetail: {
                    btnReturn: '#btn-back',
                    amountOfTransaction: '.panel-info-container bbva-type-amount[data-tag-name="bbva-type-amount"]',
                    movementDate: '.panel-info-container bbva-type-text.operation-date[data-tag-name="bbva-type-text"]',
                    retirementAccount: '[text="card-information-transaction-detail-enrichment-cards-mx-content-operation-type-label"]',
                    linkPayingWithAPoints: '.button-row-container #payWithPoints',
                    btnUsePointsFirst: '#targetAudienceModal bbva-button-default.u-margin-top--2',
                    btnIconX: '#targetAudienceModal #helpModalHeader #btn-right-primary',
                    btnHelpIcon: '#targetAudienceModal #helpModalHeader #btn-right-secondary',
                    iconPayWhitPoins: '#targetAudienceModal bbva-panel-offer .content-image',
                    textAmountPoins: '#targetAudienceModal bbva-text.u-margin--grid.u-margin-bottom--1',
                },
                cardTransactionDetailMap: {
                    staticMap:'#map.bbva-map-static-section',
                    onBoardingMap: '.message-map-container',
                    dynamicMap: '#map.bbva-map-dynamic-section',
                    onBoardingInfo: '.message-map-info',
                    merchantDetailButton: '.bbva-map-dynamic-section-button-alert bbva-button-default',
                    addressPanel: '.map-layer.map-dynamic-layer .address-panel',
                    addressCopyLink: '.map-layer.map-dynamic-layer bbva-type-link',
                    addressCopiedMessage: '[alert-text="card-information-transaction-detail-enrichment-cards-mx-map-address-copied-text"]',
                    expandablePanel: '.information-container .expandable-panel'
                },
                merchantInformation:{

                    placeInfoHeader: '#helpModalHeader[text="card-information-transaction-detail-enrichment-cards-mx-places-modal-header-text"]',
                    placeInfoBtnClose: '#helpModalHeader[text="card-information-transaction-detail-enrichment-cards-mx-places-modal-header-text"][variant="modal-initial"] .button-1 [data-id="iconsRight"]',
                    callMerchantButton: '.places-button-row #callMerchant',
                    goToWebsiteButton: '.places-button-row #goToWebsite',
                    titleInfoPanel: '.places-info-panel.panel-info-container .title-info-panel',
                    withoutInfo: '[text="card-information-transaction-detail-enrichment-cards-mx-places-modal-without-information-text"]'

                },
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            buttonExit: '#modal #modal #closeButton',
                            buttonCancel: '#modal #cancelButton',
                            buttonAccept: '#modal #acceptButton',
                        }
                    }
                ],
            },
            requiredElements: [
                'headerText'
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        const reverseWaitForVisible = value === 'hidden';
        switch (item.toLowerCase()) {
            case 'header':
                await this.headerText.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'button back':
                await this.header.btnBack.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'header amount value':
                await this.transactionAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header date movement':
                await this.headerDateValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation type title':
                await this.movementDetailContainer.operationTypeTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'description title':
                await this.movementDetailContainer.descriptionTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'operation type value':
                await this.movementDetailContainer.operationTypeValue.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'card used title':
                await this.movementDetailContainer.cardUsedTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'additional card value':
                await this.movementDetailContainer.additionalValue.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'card termination title':
                await this.movementDetailContainer.cardTermination.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'amount pay with card title':
                await this.movementDetailContainer.amountPayWithCard.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'amount pay with points title':
                await this.movementDetailContainer.amountPayWithPoints.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'amount foreign currency title':
                await this.movementDetailContainer.amountForeignCurrency.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'amount local currency title':
                await this.movementDetailContainer.amountLocalCurrency.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'points used title':
                await this.movementDetailContainer.pointsUsed.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'points earned title':
                await this.movementDetailContainer.pointsEarned.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'concept title':
                await this.movementDetailContainer.conceptTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'operation date title':
                await this.movementDetailContainer.operationDateTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'debit card transaction title':
                await this.debitDetailCardTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debit card transaction value':
                await this.debitDetailCardValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card transaction title':
                await this.movementDetailContainer.creditDetailCardTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card transaction value':
                await this.movementDetailContainer.creditDetailCardValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.movementDetailContainer.amountMovementTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount value':
                await this.movementDetailContainer.amountMovementValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date operation title':
                await this.movementDetailContainer.dateMovementTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date operation value':
                await this.movementDetailContainer.dateMovementValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'effective date title':
                await this.effectiveDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'effective date value':
                await this.effectiveDateValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info transaction title':
                await this.infoTransactionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info transaction value':
                await this.infoTransactionValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account title':
                await this.associatedAccountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account value':
                await this.associatedAccountValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in transit modal':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated card title':
                await this.movementDetailContainer.associatedCardTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated card value':
                await this.movementDetailContainer.associatedCardValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'atm number title':
                await this.atmNumberTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'atm number value':
                await this.atmNumberValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'target audience purchase banner':
                await this.pobPromotionBanner.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal header':
                await this.movementDetails.pobPromotionHeaderModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal faqs button':
                await this.movementDetails.headerFaqsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal panel image':
                await this.movementDetails.panelImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal panel title':
                await this.movementDetails.panelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal panel description':
                await this.movementDetails.panelDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal purchase amount':
                await this.movementDetails.purchaseAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal amount to pay with points':
                await this.movementDetails.amountToPayWithPoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal amount to pay with card':
                await this.movementDetails.amountToPayWithCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal points to use information message':
                await this.movementDetails.pointsToUseInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal promotion comparative':
                await this.movementDetails.promotionComparative.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal effective date':
                await this.movementDetails.effectiveDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pob modal use my points button':
                await this.movementDetails.useMyPointsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarifications button':
                await this.clarificationsButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'link pay with points':
                await this.payWithPointsButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'concept main panel':
                await this.mainPanelConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date main panel':
                await this.mainPanelDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount main panel':
                await this.mainPanelAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio operation title':
                await this.movementDetailContainer.operationFolioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in transit button':
                await this.inTransitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in transit label':
                await this.movementInTransitLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'physical purchase value':
                await this.physicalPurchaseValue.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'digital purchase value':
                await this.digitalPurchaseValue.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'cash withdrawal value':
                await this.cashWithdrawalValue.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'branch cash withdrawal value':
                await this.branchCashWithdrawalValue.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'charged amount title':
                await this.movementDetailContainer.chargedAmountTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'withdrawn amount title':
                await this.movementDetailContainer.withdrawnAmountTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'info modal in transit':
                await this.infoModalInTransit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message detail':
                await this.errorDetailMessage.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'button return':
                await this.cardTransactionDetail.btnReturn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount of transaction':
                await this.cardTransactionDetail.amountOfTransaction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement date':
                await this.cardTransactionDetail.movementDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retirement account':
                await this.cardTransactionDetail.retirementAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button use points':
                await this.cardTransactionDetail.btnUsePointsFirst.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon smile':
                await this.cardTransactionDetail.iconPayWhitPoins.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text amount poins':
                await this.cardTransactionDetail.textAmountPoins.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dynamic map':
                await this.cardTransactionDetailMap.dynamicMap.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address copy link':
                await this.cardTransactionDetailMap.addressCopyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address copied message':
                await this.cardTransactionDetailMap.addressCopiedMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'merchant detail header':
                await this.merchantInformation.placeInfoHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'merchant detail close button':
                await this.merchantInformation.placeInfoBtnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call merchant button':
                await this.merchantInformation.callMerchantButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'go to website button':
                await this.merchantInformation.goToWebsiteButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'title info panel':
                await this.merchantInformation.titleInfoPanel.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'without info':
                await this.merchantInformation.withoutInfo.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openModalInfo() {
        await this.iconInfo.waitForClickable({timeout: config.wait.M});
        await this.iconInfo.click();
    }

    async inTransitHelp() {
        await this.pendingTransactionButton.waitForDisplayed({timeout: config.wait.L});
        await this.pendingTransactionButton.waitForClickable({timeout: config.wait.M});
        await this.pendingTransactionButton.click();
    }

    async accessClarificationsCare() {
        await this.clarificationsButton.waitForDisplayed({timeout: config.wait.L});
        await this.clarificationsButton.waitForClickable({timeout: config.wait.M});
        await this.clarificationsButton.click();
    }

    async accessPayWithPoints(isPobPromotion) {
        if (isPobPromotion) {
            await (await (await this.movementDetails.useMyPointsButton.waitForDisplayed({timeout: config.wait.L}))
                .waitForClickable({timeout: config.wait.L}))
                .click();
            await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
        } else {
            await this.payWithPointsButton.waitForClickable({timeout: config.wait.L});
            await this.payWithPointsButton.click();
            await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
        }
    }

    async closePobModal() {
        await (await (await this.movementDetails.headerExitButton.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async accessFaqs() {
        await (await (await this.movementDetails.headerFaqsButton.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async accessFinanceTransaction() {
        await this.deferToMonthsButton.waitForClickable({timeout: config.wait.L});
        await this.deferToMonthsButton.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
    }

    async selectMovementProductDetailForTransit(movementSelector){
        await this.movements.noMovements.waitForDisplayed({timeout: config.wait.M});
        await this.movements.noMovements.scrollIntoView({block: 'end'});
        await this.movements.entirePage.waitForDisplayed({timeout: config.wait.M});
        await this.movements.entirePage.scrollIntoView({block: 'end'});
        const movementExist = user.products.cards[0].movements.find( currentElement => currentElement.data.concept === movementSelector);
        if(user.products.cards[0].movements && movementExist) {
            await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
            const auxElement = this.movements.movementClarificationsTransit.specifySelector({placeholder: '__TEXT__', value: movementSelector});
            await (await (await auxElement.waitForDisplayed({timeout: config.wait.M})).waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async selectMovement() {
        await this.movements.movement.waitForDisplayed({timeout: config.wait.L});
        await this.movements.movement.waitForClickable({timeout: config.wait.L});
        await this.movements.movement.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async helpModal() {
        await this.movements.helpButton.waitForClickable({timeout: config.wait.M});
        await this.movements.helpButton.click();
    }
    async returnMoviments() {
        await this.cardTransactionDetail.btnReturn.waitForClickable({timeout: config.wait.M});
        await this.cardTransactionDetail.btnReturn.click();
    }

    async selectPayWhith() {
        await this.cardTransactionDetail.linkPayingWithAPoints.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetail.linkPayingWithAPoints.click();
    }

    async clousePay() {
        await this.cardTransactionDetail.btnIconX.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetail.btnIconX.click();
    }

    async selectUseMyPoins() {
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS});
        await this.cardTransactionDetail.btnUsePointsFirst.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetail.btnUsePointsFirst.scrollIntoView();
        await this.cardTransactionDetail.btnUsePointsFirst.click();
    }

    async selectHelp() {
        await this.cardTransactionDetail.btnHelpIcon.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetail.btnHelpIcon.click();
    }

    async exitModal() {
        await this.dialogOperations.additionalElements.buttonExit.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.buttonExit.click();
    }

    async exitSecondaryModal() {
        await this.dialogOperations.additionalElements.buttonCancel.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.buttonCancel.click();
    }

    async acceptModal() {
        await this.dialogOperations.additionalElements.buttonAccept.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.buttonAccept.click();
    }

    async openModaInTransitModal() {
        await this.inTransitButton.waitForDisplayed({timeout: config.wait.M});
        await this.inTransitButton.click();
    }

    async accessTransactionLocation() {
        await this.cardTransactionDetailMap.staticMap.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetailMap.staticMap.click();
    }

    async copyMerchantAddress() {
        await this.cardTransactionDetailMap.addressCopyLink.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetailMap.addressCopyLink.click();
    }

    async merchantDetails() {
        await this.cardTransactionDetailMap.merchantDetailButton.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetailMap.merchantDetailButton.click();
    }

    async expandableSection() {
        await this.cardTransactionDetailMap.staticMap.waitForDisplayed({timeout: config.wait.M});
        await this.cardTransactionDetailMap.expandablePanel.click();
    }
}

export default new MovementsDetail();
