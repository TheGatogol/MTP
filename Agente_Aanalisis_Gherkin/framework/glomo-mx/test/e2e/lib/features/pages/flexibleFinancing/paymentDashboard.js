import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('paymentDashboard')
class PaymentDashboard extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-paymentDashboard[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"][position="fixed"]',
                operativesList: '[data-tag-name="bbva-help-modal"] .container-link [data-tag-name="bbva-type-link"]',
                deferrableTab: '#tab-default #tab-0[aria-selected="false"]',
                deferrablePurchase: '.deferrable-list-movements .movement-row [data-tag-name="bbva-type-link"]',
                openFinancingReceipt: '[data-tag-name="bbva-expandable-accordion"][heading-level="2"]:not([id="payments-history"]) .header-accordion [data-tag-name="bbva-type-icon"]',
                helpCutOffDate: '[data-tag-name="bbva-button-default"]#cutOffDate',
                helpNextPaymentDate: '[data-tag-name="bbva-button-default"]#nextPaymentDate',
                btnPaymentHistory: '#purchaseDetail #payments-history button [data-tag-name="bbva-type-icon"]',
                modal: {
                    properties: {root: '[data-tag-name="bbva-help-modal"][visible]'},
                    exitButton: '#btn-close'
                },
                deferredPurchase: '.panel[slot="content-1"] .movements [movement-id="MICROLOAN_AMOUNT"][data-tag-name="movement-detail"] [data-tag-name="bbva-type-link"].entity-link',
                btnFilter: '.finance-payment-dashboard-container [data-tag-name="bbva-tab-default"] [data-tag-name="bbva-type-link"]#filter-link',
                tagInProgress: '[data-id="filters"] .tag [text="card-transaction-servicing-finance-payment-dashboard-ACTIVE"]',
                checkBoxInProgress: '[data-selector="modal-filterModal"] [data-tag-name="bbva-form-checkbox"][label="En curso"] [data-tag-name="bbva-form-checkbox-input"]',
                checkBoxFilled: '[data-selector="modal-filterModal"] [data-tag-name="bbva-form-checkbox"][label="Completados"] [data-tag-name="bbva-form-checkbox-input"]',
                tagCompleted: '[data-id="filters"] .tag [text="card-transaction-servicing-finance-payment-dashboard-SETTLED"]',
                btnFilterPurchases: '[data-tag-name="bbva-button-default"][text="Filtrar"]',
                filterTitle: '[visible] [data-tag-name="bbva-header-main"][id="helpModalHeader"] #heading [data-tag-name="bbva-type-text"][tag="h1"]',
                btnSeeMore: '#purchaseDetail [data-tag-name="bbva-expandable-panel"] [data-tag-name="bbva-type-text"]',
                removeTags: '.tag-clear-all',
                btnAspa: '#remove-filter-1 [data-tag-name="bbva-type-icon"]',
                titleNoDeferrals: '[data-tag-name="bbva-type-text"][text="card-transaction-servicing-finance-payment-dashboard-ACTIVE-empty"]',
                textNoDeferrals: '[data-tag-name="bbva-type-text"][text="card-transaction-servicing-finance-payment-dashboard-filter-info"]',
                lineDetail: {
                    properties: {root: '.finance-payment-dashboard-container [data-tag-name="bbva-transition-container"].line-detail'},
                    header: '.modal-header [data-tag-name="bbva-header-main"]',
                    back: '.modal-header [data-id="iconsLeft"]',
                    text: {
                        properties: {root: '[data-tag-name="line-detail"]'},
                        general: '[data-tag-name="bbva-type-text"][text="card-transaction-servicing-finance-payment-dashboard-line-general"]',
                        owner: '[data-tag-name="bbva-type-text"][text="card-transaction-servicing-finance-payment-dashboard-line-headline"]',
                        associatedAccount: '.group-text [data-tag-name="bbva-type-text"][text="Cuenta de Ahorro"]',
                    },
                },
                deferralMonth: '#purchaseDetail #payments-history div.payments-item [data-tag-name="bbva-type-text"]',
                deferralAmount: '#purchaseDetail #payments-history div.payments-item [data-tag-name="bbva-type-amount"]',
                deferralStatus: '#purchaseDetail #payments-history [data-tag-name="bbva-badge-default"]',
                linkKnowMore: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                fullDeferredPurchase: '.panel[slot="content-1"] .movements [movement-id="MICROLOAN_AMOUNT"] [data-tag-name="bbva-type-link"].entity-link',
                filter: {
                    btnEdit: '[option-link="Editar"] [data-tag-name="bbva-type-link"]',
                    labelStatus: '[id="filter-0"][size="M"]',
                    labelFilterResult: '[data-tag-name="bbva-type-text"][text="Últimos movimientos"]',
                    labelResultTitle: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                },
                financingLineDetail: '.financing-line-detail',
                operativesRowButton: '#operatives-row #buttons span [data-tag-name="bbva-button-action"]',
                operativeButton: '.more-buttons[data-tag-name="bbva-button-row"] .list-item [data-tag-name="bbva-button-action"]',
                showAccountStatus: '[data-tag-name="see-more-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-row"] .listitem-button [data-tag-name="bbva-button-action"]',
                movementCourse: '.one-movement [data-tag-name="bbva-link"][size="S"]',
                shareDeferredMovementDetail: '#purchaseDetail [data-tag-name="bbva-button-row"] #buttons span [data-tag-name="bbva-button-action"]',
            },
            requiredElements: [
                'financingLineDetail'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.scrollIntoView();
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financing line detail':
                await this.financingLineDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'postpone purchases':
                await this.waitForElementsExist(this.operativeButton, config.wait.M);
                await (await this.operativeButton.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'advance payment':
                await this.waitForElementsExist(this.operativeButton, config.wait.M);
                await (await this.operativeButton.elements()).value[1].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'view account statement':
                await this.waitForElementsExist(this.operativeButton, config.wait.M);
                await (await this.operativeButton.elements()).value[2].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'line detail header':
                await this.lineDetail.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'line detail button back':
                await this.lineDetail.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text general':
                await this.lineDetail.text.general.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text owner':
                await this.lineDetail.text.owner.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text associated account':
                await this.lineDetail.text.associatedAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button edit':
                await this.filter.btnEdit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text state':
                await this.filter.labelStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text date':
                await this.filter.labelFilterResult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text result':
                await this.filter.labelResultTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title of':
                await this.filterTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check disabled progress':
                await this.checkBoxInProgress.waitForAttribute({attribute: 'aria-checked', value: 'false', timeout: config.wait.M});
                break;
            case 'tag in progress':
                await this.tagInProgress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check disabled completed':
                await this.checkBoxFilled.waitForAttribute({attribute: 'aria-checked', value: 'false', timeout: config.wait.M});
                break;
            case 'tag completed':
                await this.tagCompleted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'remove tags':
                await this.removeTags.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button filter':
                await this.btnFilterPurchases.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button filter disabled':
                await this.btnFilterPurchases.waitForDisabled({timeout: config.wait.M});
                break;
            case 'text title':
                await this.titleNoDeferrals.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text information':
                await this.textNoDeferrals.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deferral month':
                await this.deferralMonth.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deferral amount':
                await this.deferralAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deferral status':
                await this.deferralStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectOperative(operativeNumber, target) {
        let elementToClick = '';
        elementToClick = target ? (await this.operativeButton.elements()).value[operativeNumber] : (await this.showAccountStatus.elements())
            .value[operativeNumber];
        await elementToClick.waitForDisplayed({timeout: config.wait.L});
        await elementToClick.waitForAnimation({timeout: config.wait.L});
        await elementToClick.waitForEnabled({timeout: config.wait.L});
        await elementToClick.waitForClickable({timeout: config.wait.L});
        await elementToClick.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async accessOperative(option) {
        let result = 0;
        let operativeTarget = false;
        await (await this.operativeButton.waitForDisplayed({timeout: config.wait.L})).waitForAnimation({timeout: config.wait.L});
        await this.waitForElementsExist(this.operativeButton, config.wait.M);
        result = (await this.operativeButton.elements()).value.length;
        operativeTarget = result <= 3;
        switch (option) {
            case 'cancelLine':
                if (operativeTarget) {
                    await this.selectOperative(2, true);
                } else {
                    await this.selectOperative(3, true);
                    await this.waitForElementsExist(this.operativesList, config.wait.M);
                    await (await this.operativesList.elements()).value[4].waitForDisplayed({timeout: config.wait.L});
                    await (await this.operativesList.elements()).value[4].waitForClickable({timeout: config.wait.M});
                    await (await this.operativesList.elements()).value[4].click();
                }
                break;
            case 'PayOverdueBalance':
            case 'differentPurchase':
                await this.selectOperative(0, true);
                break;
            case 'AnticipatePayments':
            case 'advancePayment':
                await this.selectOperative(1, true);
                break;
            case 'viewAccountStatement':
            case 'monthlyStatementEnquiry':
                await this.selectOperative(2, true);
                break;
            case 'seeLineDetail':
                if (operativeTarget) {
                    await this.selectOperative(2, true);
                } else {
                    await this.selectOperative(3, true);
                    await this.waitForElementsExist(this.operativesList, config.wait.M);
                    await (await this.operativesList.elements()).value[5].waitForDisplayed({timeout: config.wait.L});
                    await (await this.operativesList.elements()).value[5].waitForClickable({timeout: config.wait.M});
                    await (await this.operativesList.elements()).value[5].click();
                }
                break;
            case 'moreOperatives':
                await this.selectOperative(3, true);
                break;
            case 'monthlyPayment':
                await this.waitForElementsExist(this.operativesList, config.wait.M);
                await (await this.operativesList.elements()).value[3].waitForDisplayed({timeout: config.wait.L});
                await (await this.operativesList.elements()).value[3].waitForClickable({timeout: config.wait.M});
                await (await this.operativesList.elements()).value[3].click();
                break;
            default:
                throw new Error(`The option ${option} is not defined`);
        }
    }

    async shareMovementDetail() {
        await (await (await this.shareDeferredMovementDetail.waitForDisplayed()).waitForClickable()).click();
    }

    async accessHelp() {
        await this.openFinancingReceipt.waitForDisplayed({timeout: config.wait.L});
        await this.openFinancingReceipt.waitForAnimation({timeout: config.wait.L});
        await this.openFinancingReceipt.press();
        await this.helpCutOffDate.waitForDisplayed({timeout: config.wait.M});
        await this.helpCutOffDate.waitForAnimation({timeout: config.wait.M});
        await this.helpCutOffDate.scrollIntoView({block: 'center'});
        await this.helpCutOffDate.waitForClickable({timeout: config.wait.M});
        await this.helpCutOffDate.click();
        await this.modal.exitButton.waitForDisplayed({timeout: config.wait.L});
        await this.modal.exitButton.waitForClickable({timeout: config.wait.M});
        await this.modal.exitButton.click();
        await this.helpNextPaymentDate.waitForDisplayed({timeout: config.wait.M});
        await this.helpNextPaymentDate.scrollIntoView({block: 'center'});
        await this.helpNextPaymentDate.waitForClickable({timeout: config.wait.M});
        await this.helpNextPaymentDate.click();
        await this.modal.exitButton.waitForDisplayed({timeout: config.wait.L});
        await this.modal.exitButton.waitForClickable({timeout: config.wait.M});
        await this.modal.exitButton.click();
    }

    async purchaseInProgress(type) {
        switch (type) {
            case 'deferred purchase':
                await this.deferredPurchase.scrollIntoView({block: 'center'});
                await this.deferredPurchase.click();
                break;
            case 'full deferred purchase':
                await this.waitForElementsExist(this.fullDeferredPurchase, config.wait.M);
                await (await this.fullDeferredPurchase.elements()).value[1].waitForDisplayed({timeout: config.wait.L});
                await (await this.fullDeferredPurchase.elements()).value[1].scrollIntoView({block: 'center'});
                await (await this.fullDeferredPurchase.elements()).value[1].waitForAnimation({timeout: config.wait.L});
                await (await this.fullDeferredPurchase.elements()).value[1].click();
                break;
            default:
                throw new Error(`The option ${type} is not defined`);
        }
    }

    async seeMore() {
        await this.btnSeeMore.waitForDisplayed({timeout: config.wait.L});
        await this.btnSeeMore.waitForClickable({timeout: config.wait.M});
        await this.btnSeeMore.click();
    }

    async paymentHistory() {
        await this.btnPaymentHistory.scrollIntoView({block: 'nearest'});
        await this.btnPaymentHistory.waitForDisplayed({timeout: config.wait.M});
        await this.btnPaymentHistory.waitForAnimation({timeout: config.wait.M});
        await this.btnPaymentHistory.click();
    }

    async filterFunction() {
        await (await (await this.btnFilter.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectDeferrablePurchase() {
        await (await this.deferrableTab.waitForDisplayed({timeout: config.wait.L}))
            .click();
        await (await (await this.deferrablePurchase.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
    }

    async selectFilterType(option) {
        const checkInProgress = this.checkBoxInProgress;
        const checkFilled = this.checkBoxFilled;
        const filterButton = this.btnFilterPurchases;
        const checkAndClickCheckbox = async (checkbox) => {
            await checkbox.waitForDisplayed({timeout: config.wait.L});
            await checkbox.waitForClickable({timeout: config.wait.M});
            await checkbox.click();
        };
        const clickFilterButton = async () => {
            await filterButton.waitForDisplayed({timeout: config.wait.L});
            await filterButton.waitForClickable({timeout: config.wait.M});
            await filterButton.click();
        };
        switch (option) {
            case 'in progress':
                await checkAndClickCheckbox(checkFilled);
                await checkAndClickCheckbox(checkInProgress);
                await clickFilterButton();
                break;
            case 'completed':
                await clickFilterButton();
                break;
            case 'both':
                await checkAndClickCheckbox(checkInProgress);
                break;
            case 'none':
                await checkAndClickCheckbox(checkFilled);
                await clickFilterButton();
                break;
            default:
                throw new Error(`The option ${option} is not defined`);
        }
    }

    async accessModalAspa() {
        await this.btnAspa.waitForDisplayed({timeout: config.wait.L});
        await this.btnAspa.waitForClickable({timeout: config.wait.M});
        await this.btnAspa.click();
    }

    async accessModTextInfo() {
        await this.linkKnowMore.waitForDisplayed({timeout: config.wait.L});
        await this.linkKnowMore.scrollIntoView({block: 'center'});
        await this.linkKnowMore.waitForDisplayed({timeout: config.wait.L});
        await this.linkKnowMore.waitForAnimation({timeout: config.wait.M});
        await this.linkKnowMore.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.modal.exitButton.waitForDisplayed({timeout: config.wait.L});
        await this.modal.exitButton.waitForClickable({timeout: config.wait.M});
        await this.modal.exitButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }
}

export default new PaymentDashboard();
