import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page()
class BtraderPurchaseAndSellPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-bbvaTraderPurchaseSale[state="active"]',
            elements: {
                purchaseAndSell: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible]',
                purchaseLimitedShare: '#trader-order-type > [data-tag-name="bbva-form-radio-button"]:nth-child(1)',
                purchaseConditionedShare: '#trader-order-type > [data-tag-name="bbva-form-radio-button"]:nth-child(2)',
                purchaseTypePurchaseContinueButton: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] > div:nth-child(2) #expandable-multistep > div:nth-child(1) > [data-tag-name="bbva-expandable-step"]:nth-child(2) div.content div.order-type-container [data-tag-name="bbva-button-default"]',
                purchaseInputTitlesNumber: '#order-detail #numberTitles [data-tag-name="bbva-form-number"] input',
                purchaseInputTitlesNumberNotification: 'div.content #order-detail #numberTitles [data-tag-name="bbva-form-number"] [data-tag-name="bbva-notification-help"]',
                purchaseInputTitlesNumberMessageError: 'div.content #order-detail #numberTitles [data-tag-name="bbva-form-number"] div.message.error',
                purchaseInputDate: '#order-detail #settlementDateCalendar',
                purchaseConditionedInputMinPrice: '#order-detail #minimumPrice [data-tag-name="bbva-form-amount"] input',
                purchaseConditionedInputObjectivePrice: '#order-detail #targetPrice [data-tag-name="bbva-form-amount"] input',
                purchaseConditionedInputObjectivePriceMessageError: '#order-detail #targetPrice div.message.error',
                purchaseConditionedInputLosePrice: '#order-detail #stopLoss [data-tag-name="bbva-form-amount"] input',
                purchaseConditionedInputLosePriceMessagePrice: '#order-detail #stopLoss [data-tag-name="bbva-form-amount"] div.message.error',
                purchaseConditionedSellText: '#order-detail [data-tag-name="bbva-type-text"]:nth-child(11)',
                purchaseInputMinPrice: '#order-detail #minimumPrice [data-tag-name="bbva-form-amount"] input',
                purchaseBuyContinueButton: '#order-detail [data-tag-name="bbva-button-default"][text="trading-stocks-purchase-and-sale-stocks-continue"]',
                purchaseConditionedBuyContinueButton: '#expandable-multistep #order-detail [data-tag-name="bbva-button-default"][text="trading-stocks-purchase-and-sale-stocks-continue"]',
                purchaseConfirmHeaderText: '#expandable-multistep > div.confirmation-area > [data-tag-name="trading-stocks-purchase-and-sale-panel-button"] div > [data-tag-name="bbva-type-text"]',
                purchaseConfirmAmount: '#expandable-multistep > div.confirmation-area > [data-tag-name="trading-stocks-purchase-and-sale-panel-button"] [data-tag-name="bbva-type-amount"]',
                purchaseConfirmText: '#expandable-multistep > div.confirmation-area > [data-tag-name="trading-stocks-purchase-and-sale-panel-button"] div > div > [data-tag-name="bbva-type-text"]',
                purchaseConfirmCostsAndCommisionsTooltip: 'div > div.panel-container_icon-label > [data-tag-name="bbva-type-link"] > [data-tag-name="bbva-type-icon"]',
                purchaseConfirmBuyButton: '#expandable-multistep > div.confirmation-area > [data-tag-name="trading-stocks-purchase-and-sale-panel-button"] div > [data-tag-name="bbva-button-default"]',
                purchaseConfirmInfoModalClose: '[data-tag-name="short-info-modals"] [data-tag-name="bbva-header-main"][text="Incluye costos y comisiones"] #btn-close',
                purchaseConfirmScreenOrderSendText: '[data-tag-name="receipt-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-type-text"]#trading-stocks-purchase-and-sale-panel-process-title',
                purchaseConfirmScreenAmount: '[data-tag-name="receipt-modal"] [data-tag-name="bbva-help-modal"] > div.content > [data-tag-name="trading-stocks-purchase-and-sale-panel-process"] div > [data-tag-name="bbva-type-amount"]',
                purchaseConfirmScreenOrderDetailText: '[data-tag-name="receipt-modal"] [data-tag-name="bbva-help-modal"] > div.content > [data-tag-name="bbva-header-category"]:nth-child(3)',
                purchaseConfirmScreenInfoBox: '[data-tag-name="receipt-modal"] [data-tag-name="bbva-help-modal"] > div.content > div.notification-message-container',
                purchaseCommisionsTooltip: '#order-detail div:nth-child(13) > div > [data-tag-name="bbva-type-link"]',
                purchaseIvaTooltip: '#order-detail div:nth-child(14) > div > div > [data-tag-name="bbva-type-link"]',
                purchaseCostsAndCommisionsTooltip: '#order-detail div.market-card-amount >[data-tag-name="bbva-type-link"]',

                purchaseSummaryCancelBuy: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] div.custom-header #header-main header #btn-close',
                purchaseSummary: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] > div:nth-child(2) #expandable-multistep',
                purchaseSummaryIssuerInfoStep: '#expandable-multistep [data-tag-name="bbva-expandable-step"].finished',
                purchaseSummaryOrderTypeStep: '#expandable-multistep [data-tag-name="bbva-expandable-step"].after-prefilled',
                purchaseSummaryOrderTypeStepHeader: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] > div:nth-child(2) #expandable-multistep div:nth-child(1) > [data-tag-name="bbva-expandable-step"]:nth-child(2) #heading',
                purchaseSummaryOrderDetailStep: '#expandable-multistep [data-tag-name="bbva-expandable-step"]:nth-child(3)',
                purchaseOrderTypeTexbox: '#order-detail div.notification-container > [data-tag-name="bbva-notification-message"]',
                purchaseBuyTitlesHeader: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] div.custom-header #header-main header #heading',
                purchaseInputFill: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] > div:nth-child(2) #expandable-multistep > div:nth-child(1) > [data-tag-name="bbva-expandable-step"]:nth-child(3) div.content #order-detail #numberTitles [data-tag-name="bbva-form-number"] input',
                purchaseOrderTypeModify: '#expandable-multistep [data-tag-name="bbva-expandable-step"]:nth-child(2) #editButton',
                purchaseOrderDetailModify: '#expandable-multistep [data-tag-name="bbva-expandable-step"]:nth-child(3) #editButton',
                purchaseSummaryOrderTypeStepSubHeader: '[data-tag-name="bbva-type-text"][text="trading-stocks-purchase-and-sale-type-oder-description"]',

                purchaseInfoModalClose: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-header #helpModalHeader #btn-close',
                purchaseInfoModalHeaderTitle: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-header #helpModalHeader h1#heading',
                purchaseInfoModalText: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-container #helpModalContent',

                purchaseErrorModalHeader: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-header #helpModalHeader h1#heading',
                purchaseErrorModalText: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-container #helpModalContent',
                purchaseErrorModalButton: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-footer [data-tag-name="bbva-button-default"]',

                purchaseInputsModalHeaderTitle: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-header #helpModalHeader h1#heading',
                purchaseInputsModalText: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-container #helpModalContent',
                purchaseInputsModalButton: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-button-default"]',

                purchaseExitModalExitButton: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-button-default"]',
                purchaseExitModalContinueButton: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-main div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-type-link"]',

                sellContinueButton: 'div > [data-tag-name="bbva-button-default"][text="trading-stocks-purchase-and-sale-stocks-continue"]',

                orderCancelModal: '[data-tag-name="cancel-modal"]',
                orderCancelConfirmModalExit: '[data-tag-name="cancel-modal"] [data-tag-name="bbva-help-modal"] div > div.content div > div.modal-main > div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-type-link"]',
                orderCancelConfirmModalConfirm: '[data-tag-name="cancel-modal"] [data-tag-name="bbva-help-modal"] div > div.content div > div.modal-main > div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-button-default"][text="trading-stocks-purchase-and-sale-error-simulation-modal-button"]',
                orderCancelConfirmModalClose: '[data-tag-name="cancel-modal"] [data-tag-name="bbva-help-modal"][header-text="trading-stocks-purchase-and-sale-cancel-order-title"]  #helpModalHeader[text="trading-stocks-purchase-and-sale-cancel-order-title"] #btn-close',
                cancelReceiptModalClose: '[data-tag-name="cancel-receipt-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader[text="trading-stocks-purchase-and-sale-cancel-order-receipt-header"] #btn-close',

                cancelSuccessTitle: 'div > bbva-type-text:nth-child(2)[text="trading-stocks-purchase-and-sale-cancel-order-receipt-panel-title"]',
                cancelSuccessInfobox: '[data-tag-name="bbva-help-modal"][header-text="trading-stocks-purchase-and-sale-cancel-order-receipt-header"] > div.content > div.notification-message-container > [data-tag-name="bbva-notification-message"]',
                cancelTradingSuccessModal: '#helpModalHeader[text="trading-stocks-purchase-and-sale-cancel-order-receipt-header"] div.header-icons.right-group > #btn-close',
                cancelSuccessTypeOperativeBuy: '[data-tag-name="bbva-help-modal"] > div > trading-stocks-purchase-and-sale-list-amount:nth-child(8) div.list-container > bbva-type-text:nth-child(2)[text="Compra"]',
                cancelSuccessTypeOperativeSale: '[data-tag-name="bbva-help-modal"] > div > trading-stocks-purchase-and-sale-list-amount:nth-child(8) div.list-container > bbva-type-text:nth-child(2)[text="Venta"]',

            },
            elementsSpherica: {
                cancelSuccessTitle: '#trading-stocks-purchase-and-sale-panel-process-title',
                cancelSuccessInfobox: '[data-tag-name="bbva-notification-message"]',
                cancelStockModalReturn: '[data-tag-name="bbva-button-default"][variant="link"]',

                purchaseLimitedShare: '#trader-order-type li [data-tag-name="bbva-form-radio-button-input"]',
                purchaseConditionedShare: '#trader-order-type li:nth-child(2) [data-tag-name="bbva-form-radio-button-input"]',
                purchaseTypePurchaseContinueButton: '[data-tag-name="select-order-type"] [data-tag-name="bbva-button-default"]',
                purchaseConfirmScreenOrderDetailText: '#trading-stocks-purchase-and-sale-panel-process-title',
                purchaseCommisionsTooltip: '#order-detail div.list-container:nth-child(3) [data-tag-name="bbva-type-link"',
                purchaseIvaTooltip: '#order-detail div.list-container:nth-child(4) [data-tag-name="bbva-type-link"]',

                purchaseSummary: '#expandable-multistep',
                purchaseSummaryCancelBuy: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-header-main"][variant="modal-initial"] #btn-close',
                purchaseBuyTitlesHeader: '[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-header-main"][variant="modal-initial"] header',
                purchaseSummaryOrderTypeStepHeader: '[data-tag-name="bbva-expandable-step"].after-prefilled #heading',
                purchaseOrderDetailModify: '[data-tag-name="bbva-expandable-step"]:nth-child(3) #editButton',
                purchaseConditionedSellText: '#order-detail [data-tag-name="bbva-type-text"]:nth-child(3)',

                purchaseExitModalContinueButton: '[data-tag-name="bbva-button-default"][variant="link"]',
                purchaseInputFill: '#numberTitles input',
                purchaseInputsModalHeaderTitle: '#helpModalHeader bbva-type-text[tag="h1"]',
                purchaseInfoModalHeaderTitle: '#helpModalHeader bbva-type-text[tag="h1"]',
                purchaseErrorModalHeader: '#helpModalHeader bbva-type-text[tag="h1"]',
                purchaseInputTitlesNumber: '#order-detail #numberTitles [data-tag-name="bbva-form-text"] input',
                purchaseInputTitlesNumberNotification: 'div.content #order-detail #numberTitles [data-tag-name="bbva-form-text"] [data-tag-name="bbva-notification-help"]',
                purchaseInputTitlesNumberMessageError: 'bbva-notification-help.message-error',
                purchaseInsufficientBalanceModalHeader:'#trading-multi-step short-info-modals bbva-help-modal #helpModalHeader #text h1',
                purchaseInsufficientBalanceModalText: '#trading-multi-step short-info-modals bbva-help-modal > div > bbva-type-text span',
                purchaseInsufficientBalanceModalCloseIcon: 'trading-stocks-purchase-and-sale #trading-multi-step [data-tag-name="short-info-modals"] [data-tag-name="bbva-help-modal"][visible] div.modal-header #helpModalHeader #btn-close',
                purchaseInsufficientBalanceModalCloseText: '#trading-multi-step short-info-modals [data-tag-name="bbva-help-modal"][visible] #helpModalHeader #btn-close > bbva-type-text span',
                sellContinueButton: '.order-type-container [data-tag-name="bbva-button-default"]'
            },
            requiredElements: [
                '__root',
            ]
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'purchase and sell':
                await this.purchaseAndSell.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase limited share':
                await this.purchaseLimitedShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase conditioned share':
                await this.purchaseConditionedShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase conditioned sell text':
                await this.purchaseConditionedSellText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase input number of titles':
                await this.purchaseInputTitlesNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase input titles error message':
                await this.purchaseInputTitlesNumberMessageError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase conditioned input objective price':
                await this.purchaseConditionedInputObjectivePrice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase conditioned input objective price message error':
                await this.purchaseConditionedInputObjectivePriceMessageError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase conditioned input lose price':
                await this.purchaseConditionedInputLosePrice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase conditioned input lose price message error':
                await this.purchaseConditionedInputLosePriceMessagePrice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase type purchase continue button':
                await this.purchaseTypePurchaseContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm screen order send text':
                await this.purchaseConfirmScreenOrderSendText.scrollIntoView();
                await this.purchaseConfirmScreenOrderSendText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm screen amount':
                await this.purchaseConfirmScreenAmount.scrollIntoView();
                await this.purchaseConfirmScreenAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm buy button':
                await this.purchaseConfirmBuyButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm screen order detail text':
                await this.purchaseConfirmScreenOrderDetailText.scrollIntoView();
                await this.purchaseConfirmScreenOrderDetailText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm screen info box':
                await this.purchaseConfirmScreenInfoBox.scrollIntoView();
                await this.purchaseConfirmScreenInfoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm header text':
                await this.purchaseConfirmHeaderText.scrollIntoView();
                await this.purchaseConfirmHeaderText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm amount':
                await this.purchaseConfirmAmount.scrollIntoView();
                await this.purchaseConfirmAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm text':
                await this.purchaseConfirmText.scrollIntoView();
                await this.purchaseConfirmText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm ':
                await this.purchaseConfirmText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm button ':
                await this.purchaseBuyContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase confirm costs and commisions tooltip':
                await this.purchaseConfirmCostsAndCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase summary':
                await this.purchaseSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase summary issuer info step':
                await this.purchaseSummaryIssuerInfoStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase summary order type step':
                await this.purchaseSummaryOrderTypeStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase summary order type step header':
                await this.purchaseSummaryOrderTypeStepHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase summary order type step sub header':
                await this.purchaseSummaryOrderTypeStepSubHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase summary order detail step':
                await this.purchaseSummaryOrderDetailStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase order type texbox':
                await this.purchaseOrderTypeTexbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase cancel buy':
                await this.purchaseSummaryCancelBuy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase buy titles header':
                await this.purchaseBuyTitlesHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase input fill':
                await this.purchaseInputFill.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase info modal header title':
                await this.purchaseInfoModalHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase info modal text':
                await this.purchaseInfoModalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase info modal close':
                await this.purchaseInfoModalClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase error modal header':
                await this.purchaseErrorModalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase error modal text':
                await this.purchaseErrorModalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase error modal button':
                await this.purchaseErrorModalButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase insufficient balance modal header':
                await this.purchaseInsufficientBalanceModalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase insufficient balance modal text':
                await this.purchaseInsufficientBalanceModalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase insufficient balance modal close':
                await this.purchaseInsufficientBalanceModalCloseIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase insufficient balance modal close text':
                await this.purchaseInsufficientBalanceModalCloseText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase info modal button':
                await this.purchaseErrorModalButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase inputs modal header title':
                await this.purchaseInputsModalHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase inputs modal header text':
                await this.purchaseInputsModalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase inputs modal header button':
                await this.purchaseInputsModalButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order cancel exit modal button':
                await this.orderCancelConfirmModalExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order cancel success title':
                await this.cancelSuccessTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order cancel success infobox':
                await this.cancelSuccessInfobox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order confirm info modal close':
                await this.purchaseConfirmInfoModalClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase schedule screen title':
                await this.s.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase schedule screen close':
                await this.s.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase schedule screen description text':
                await this.s.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase schedule screen schedule text':
                await this.s.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase schedule screen accept':
                await this.s.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel Trading Success Modal':
                await this.cancelTradingSuccessModal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async returnTo(page, action) {
        if(page === 'order detail'){
            switch (action) {
                case 'close modal cancellation':
                    await (await this.cancelReceiptModalClose.waitForDisplayed({timeout: config.wait.M})).click();
                    break;
                case 'reject cancellation':
                    await this.cancelStockModalReturn.waitForDisplayed({timeout: config.wait.M});
                    await (await this.cancelStockModalReturn.waitForAnimation({timeout: config.wait.S})).click({useActions: true});
                    break;
                default:
                    throw new Error(`Action ${action} is not recognized in return order list`);
            }
        }

        if(page === 'investment detail'){
            switch (action) {
                case 'cancel the operation':
                    await (await this.purchaseSummaryCancelBuy.waitForDisplayed({timeout: config.wait.M})).click();
                    break;
                case 'cancel the operation and confirm':
                    await (await this.purchaseSummaryCancelBuy.waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.purchaseExitModalExitButton.waitForDisplayed({timeout: config.wait.M})).click();
                    break;
                default:
                    throw new Error(`Action ${action} is not recognized in return investment detail`);
            }
        }
    }

    async cancelModalAction(action){
        await this.orderCancelModal.waitForDisplayed({timeout: config.wait.L});
        switch (action) {
            case 'confirm':
                await (await this.orderCancelConfirmModalConfirm.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
                break;
            case 'cancel':
                if (this.isSpherica()) {
                    await (await this.cancelStockModalReturn.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
                } else {
                    await (await this.orderCancelConfirmModalExit.waitForClickable({timeout: config.wait.M})).click();
                }
                break;
            case 'exit modal':
                await (await this.orderCancelConfirmModalClose.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error('Invalid action');
        }
    }

    async purchaseShare(quantity, price, type, action, objectivePrice = '2780', losePrice = '2760') {
        if (type === 'limited') {
            await this.purchaseInputTitlesNumber.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseInputTitlesNumber.setValue({value: quantity});
            await this.purchaseInputMinPrice.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseInputMinPrice.setValue({value: price, slow: true});
            await this.purchaseAndSell.click();
        }
        else if(type === 'conditioned'){
            await this.purchaseInputTitlesNumber.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseInputTitlesNumber.setValue({value: quantity});
            await this.purchaseConditionedInputMinPrice.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseConditionedInputMinPrice.setValue({value: price, slow: true});
            await this.purchaseConditionedInputObjectivePrice.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseConditionedInputObjectivePrice.setValue({value: objectivePrice, slow: true});
            await this.purchaseConditionedInputLosePrice.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseConditionedInputLosePrice.setValue({value: losePrice, slow: true});
            await this.purchaseAndSell.click();
        }

        if (action === 'finish') {
            await this.purchaseBuyContinueButton.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.waitForEnabled({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.click();
            await this.purchaseConfirmBuyButton.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseConfirmBuyButton.click();
        }else if(action === 'continue'){
            await this.purchaseBuyContinueButton.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.waitForEnabled({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.click();
        }
    }

    async createOrderType(type, action) {
        if(action === 'sell') {
            switch (type) {
                case 'limited':
                    await this.sellContinueButton.waitForDisplayed({timeout: config.wait.M});
                    await this.sellContinueButton.waitForAnimation({timeout: config.wait.M});
                    await this.sellContinueButton.waitForClickable({timeout: config.wait.M});
                    await this.sellContinueButton.click({useActions: false, scrollOptions: {block: 'end'}});
                    break;
                default:
                    throw new Error(`Type ${type} is not recognized in the sell`);
            }
        }else if(action === 'purchases'){
            switch(type){
                case 'limited':
                    await this.purchaseLimitedShare.waitForDisplayed({timeout: config.wait.M});
                    await this.purchaseLimitedShare.waitForAnimation({timeout: config.wait.M});
                    await this.purchaseLimitedShare.click({useActions: false, scrollOptions: {block: 'end'}});
                    await this.purchaseTypePurchaseContinueButton.waitForDisplayed({timeout: config.wait.M});
                    await this.purchaseTypePurchaseContinueButton.waitForAnimation({timeout: config.wait.M});
                    await this.purchaseTypePurchaseContinueButton.click({useActions: false, scrollOptions: {block: 'end'}});
                    break;
                case 'conditioned':
                    await this.purchaseConditionedShare.waitForDisplayed({timeout: config.wait.M});
                    await this.purchaseConditionedShare.click();
                    await this.purchaseTypePurchaseContinueButton.waitForDisplayed({timeout: config.wait.M});
                    await this.purchaseTypePurchaseContinueButton.click();
                    break;
                default:
                    throw new Error(`Type ${type} is not recognized in the purchase`);
            }
        }
    }

    async exitAndResume(){
        await this.purchaseShare('1', '2670', 'limited');
        await this.cancelBuy();
        await this.purchaseExitModalContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseExitModalContinueButton.click();
    }

    async modifyStep(step, fill){
        if(fill === 'fills'){
            await this.purchaseShare('1', '2670', 'limited', 'continue');
        }

        if(step === 'order type'){
            if (this.isSpherica()){
                await this.purchaseOrderTypeModify.scrollIntoView();
            } else {
                await this.purchaseOrderTypeModify.waitForDisplayed({timeout: config.wait.M});
            }
            await this.purchaseOrderTypeModify.click();
        }
        else if(step === 'order detail'){
            if (this.isSpherica()){
                await this.purchaseOrderDetailModify.scrollIntoView();
            } else {
                await this.purchaseOrderDetailModify.waitForDisplayed({timeout: config.wait.M});
            }
            await this.purchaseOrderDetailModify.click();
            await this.purchaseInputFill.setValue({value: ' '});
            await this.purchaseBuyContinueButton.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.waitForEnabled({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.click();

        }
        else if(step === 'order detail inputs modify'){
            if (this.isSpherica()){
                await this.purchaseOrderDetailModify.scrollIntoView();
            } else {
                await this.purchaseOrderDetailModify.waitForDisplayed({timeout: config.wait.M});
            }
            await this.purchaseOrderDetailModify.click();
            await this.purchaseInputFill.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseInputFill.clearValue();
            await this.purchaseInputFill.setValue({value: '2'});
            await this.purchaseBuyContinueButton.waitForDisplayed({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.waitForEnabled({timeout: config.wait.M});
            await this.purchaseBuyContinueButton.click();

        }
    }

    async fillDataWithRange(range){
        if(range === 'greater than range'){
            await this.purchaseShare('1', '500', 'limited');
        }
        else if(range === 'out of range'){
            await this.purchaseShare('1', '300', 'limited');
        }
    }

    async fillDataWithTargetPrice(target){
        if(target === 'greater'){
            await this.purchaseShare('1', '2760', 'conditioned', '', '30', '');
        }
        else if(target === 'less'){
            await this.purchaseShare('1', '2760', 'conditioned', '', '', '3000');
        }
    }

    async continueBuy() {
        await this.purchaseBuyContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseBuyContinueButton.waitForEnabled({timeout: config.wait.M});
        await this.purchaseBuyContinueButton.click();
    }

    async confirmProcess() {
        await this.purchaseConfirmBuyButton.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseConfirmBuyButton.click();
    }

    async cancelBuy() {
        await this.purchaseSummaryCancelBuy.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseSummaryCancelBuy.click();
    }

    async changeDate(){
        await this.purchaseInputDate.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseInputDate.click();
    }

    async showInfoModal(modal) {
        switch (modal) {
            case 'commisions':
                await this.purchaseCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseCommisionsTooltip.click();
                await this.purchaseInfoModalClose.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseInfoModalClose.click();
                break;
            case 'iva':
                await this.purchaseIvaTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseIvaTooltip.click();
                await this.purchaseInfoModalClose.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseInfoModalClose.click();
                break;
            case 'costs and commisions':
                await this.purchaseCostsAndCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseCostsAndCommisionsTooltip.click();
                await this.purchaseInfoModalClose.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseInfoModalClose.click();
                break;
            case 'conts and commisions from summary':
                await this.purchaseShare('1', '2770', 'limited', 'continue');
                await this.purchaseConfirmCostsAndCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseConfirmCostsAndCommisionsTooltip.click();
                await this.purchaseConfirmInfoModalClose.waitForDisplayed({timeout: config.wait.M});
                await this.purchaseConfirmInfoModalClose.click();
                break;
            case 'sell commisions':
                await this.sellShare();
                await this.purchaseCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                await (await this.purchaseCommisionsTooltip.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'sell iva':
                await this.sellShare();
                await this.purchaseIvaTooltip.waitForDisplayed({timeout: config.wait.M});
                await (await this.purchaseIvaTooltip.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'sell costs and commisions':
                await this.sellShare();
                await this.purchaseCostsAndCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                await (await this.purchaseCostsAndCommisionsTooltip.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'conts and commisions from summary in sell':
                await this.sellShare();
                await this.continueBuy();
                await this.purchaseConfirmCostsAndCommisionsTooltip.waitForDisplayed({timeout: config.wait.M});
                await (await this.purchaseConfirmCostsAndCommisionsTooltip.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error('Invalid modal');
        }
    }

    async sellShare( titleNumber = '1', minPrice = '2770', action = '') {
        await this.purchaseInputTitlesNumberNotification.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseInputTitlesNumber.setValue({value: titleNumber});
        await this.purchaseInputMinPrice.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseInputMinPrice.setValue({value: minPrice, slow: true});
        await this.purchaseAndSell.click({useActions: false, scrollOptions: {block: 'end'}});

        if(action === 'finish the sell'){
            await this.continueBuy();
            await this.confirmProcess();
        }else if(action ==='modify the order detail'){
            await this.continueBuy();
            await this.modifyStep('order detail inputs modify');
        } else if(action === 'continue'){
            await this.continueBuy();
        }
    }

    async orderCancelModalSuccessTrading() {
        await (await this.cancelTradingSuccessModal.waitForClickable({timeout: config.wait.L})).click();
    }
}
export default new BtraderPurchaseAndSellPage();
