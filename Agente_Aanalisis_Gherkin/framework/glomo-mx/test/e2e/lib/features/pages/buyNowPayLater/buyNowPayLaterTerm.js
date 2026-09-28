import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class BuyNowPayLaterTerm extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-paymentDashboardBnpl[state="active"]',
            elements: {
                header: 'div.wrapper.bg-color-principal',
                backButton: 'section [data-tag-name="bbva-header-main"] #btn-left-primary',
                provision: 'div.wrapper.bg-color-secondary .movements [id="__ID__"]',
                financingLineDetail: '.financing-line-detail-amount',
                cutOffDateButton: '#cutOffDateDisposition[role="button"]',
                nextPaymentDateButton: '#nextPaymentDateDisposition[role="button"]',
                lineDetailButtonAction: '#operatives-row #buttons [data-tag-name="bbva-button-action"]',
                financingLastMovements: '.wrapper.bg-color-secondary .movements',
                financingLineMovements: '.wrapper.bg-color-secondary .one-movement',
                filterLink: '.wrapper.bg-color-secondary #filter-link',
                filterStatus: '.filters .tag .remove-filter',
                filterEditBtn: '.filters .tag-edit #link',
                filterNoMovementsImage: '#filterResults div div.image span svg',
                filterNoMovementsText: '#filterResults div div.empty-description',
                latePayment: '#overduePayments',
                filterMovements: {
                    properties: {root: '#filterMovements'},
                    header: '.header-main',
                    crossBtn: '#btn-right-primary',
                    continueBtn: '[data-tag-name="bbva-button-default"]',
                    checkBoxStatus: '.container .box',
                },
                filterResults: {
                    properties: {root: '#filterResults'},
                    movementDispositions: '.movements',
                    dispositionsDetail: '.resumen-detail',
                    completedDispositions: '.success-text-color',
                    inProgressDispositions: '.default-text-color'
                },
                lineDetail: {
                    properties: {root: '#lineDetail'},
                    header: '.header-main',
                    backButton: '#btn-left-primary',
                    productLineDetail: '.list-default-render',
                },
                purchaseDetail: {
                    properties: {root: '#purchaseDetail'},
                    seeMoreLessBtn: 'bbva-expandable-panel .icon',
                    seePaymenHistoryBtn: '#payments-history .right-icon',
                    shareBtn: '#buttons [data-tag-name="bbva-button-action"]',
                    paymentHistorySection: '.header-accordion',
                    dispositionSection: '.wrapper',
                    dispositionProcessPanel: '.panel-process',
                },
                paymentsDateInformation: [
                    BbvaHelpModal,
                    {
                        root: {
                            web: '[data-tag-name="info-modal"] [visible]',
                            isWithoutRoot: true
                        },
                        additionalElements: {
                            crossBtn: '[data-tag-name="bbva-icon"][icon="bbva:close"]',
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async accessCutOffDate() {
        await this.cutOffDateButton.waitForDisplayed({timeout: config.wait.M});
        await this.cutOffDateButton.click();
    }

    async accessNextPaymentDate() {
        await this.nextPaymentDateButton.waitForDisplayed({timeout: config.wait.M});
        await this.nextPaymentDateButton.click();
    }

    async selectSection(section) {
        switch(section.toLowerCase()) {
            case 'cut off date':
                await this.accessCutOffDate();
                break;
            case 'next payment date':
                await this.accessNextPaymentDate();
                break;
            default:
                throw new Error(`${section} option is not available to navigate.`);
        }
    }

    async filterDispositionsByStatus(status) {
        await this.filterDispositionsElements();
        switch(status.toLowerCase()) {
            case 'completed':
                await this.filterDispositionsByCompleted();
                break;
            case 'in progress':
                await this.filterDispositionsByInProgress();
                break;
            default:
                throw new Error(`${status} option is not available to navigate.`);
        }
        await this.filterDispositionsContinue();
    }

    async filterResultsByStatus(status) {
        await this.filterDispositionsElements();
        await this.filterDispositionsContinue();
        switch(status.toLowerCase()) {
            case 'completed':
                await this.filterResultsByCompleted();
                break;
            case 'in progress':
                await this.filterResultsByInProgress();
                break;
            default:
                throw new Error(`${status} option is not available to navigate.`);
        }
    }

    async exitPaymentsInformationModal(option) {
        switch(option.toLowerCase()){
            case 'cross':
                await this.paymentsDateInformation.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                await this.paymentsDateInformation.acceptBtn.click();
                break;
            case 'accept':
                await this.paymentsDateInformation.additionalElements.crossBtn.waitForDisplayed({timeout: config.wait.M});
                await this.paymentsDateInformation.additionalElements.crossBtn.click();
                break;
            default:
                throw new Error(`${option} option is not available to navigate.`);
        }
    }

    async selectProvision() {
        await (await this.provision.specifySelector({placeholder: '__ID__', value: user.products.relatedContracts[0].provision})
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async goStatement() {
        await (await (await this.lineDetailButtonAction.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.L})).click();
    }

    async goLineDetail() {
        await (await (await this.lineDetailButtonAction.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async filterDispositionsElements() {
        await this.filterLink.waitForDisplayed({timeout: config.wait.M});
        await this.filterLink.click();
    }

    async filterDispositionsContinue() {
        await this.filterMovements.continueBtn.waitForDisplayed({timeout: config.wait.M});
        await this.filterMovements.continueBtn.click();
    }

    async filterDispositionsEdit() {
        await this.filterEditBtn.waitForDisplayed({timeout: config.wait.M});
        await this.filterEditBtn.click();
    }

    async clearFilterDispositions() {
        await this.filterDispositionsElements();
        await this.filterDispositionsContinue();
        await this.filterDispositionsEdit();
        await this.filterDispositionsByCompleted();
        await this.filterDispositionsByInProgress();
    }

    async filterResultsByCompleted() {
        await (await (await this.filterStatus.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async goBack() {
        await (await (await this.backButton.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async filterResultsByInProgress() {
        await (await (await this.filterStatus.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async filterDispositionsByCompleted() {
        await (await (await this.filterMovements.checkBoxStatus.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async filterDispositionsByInProgress() {
        await (await (await this.filterMovements.checkBoxStatus.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewDispositionDetailPaymentHistory() {
        await this.viewDispositionDetail();
        await this.viewPaymentHistory();
        await this.viewPaymentHistory();
    }

    async viewDispositionDetail() {
        await this.purchaseDetail.seeMoreLessBtn.waitForClickable({timeout: config.wait.M});
        await this.purchaseDetail.seeMoreLessBtn.click();
    }

    async viewPaymentHistory() {
        await this.purchaseDetail.paymentHistorySection.scrollIntoView({block: 'end'});
        await this.purchaseDetail.seePaymenHistoryBtn.waitForDisplayed({timeout: config.wait.M});
        await this.purchaseDetail.seePaymenHistoryBtn.click();
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'line detail':
                await this.lineDetail.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product type':
                await (await this.lineDetail.productLineDetail.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit line number':
                await (await this.lineDetail.productLineDetail.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated email':
                await (await this.lineDetail.productLineDetail.elements()).value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'holder name':
                await (await this.lineDetail.productLineDetail.elements()).value[3].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account':
                await (await this.lineDetail.productLineDetail.elements()).value[4].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financing actions':
                await this.financingLineDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financing line detail':
                await this.lineDetailButtonAction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financing movements by date':
                await this.financingLineMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financing movements panel':
                await this.financingLastMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit filter':
                await this.filterEditBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no movements image':
                await this.filterNoMovementsImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no movements text':
                await this.filterNoMovementsText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'completed dispositions':
                await this.filterResults.completedDispositions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in progress dispositions':
                await this.filterResults.inProgressDispositions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dispositions detail':
                await this.filterResults.dispositionsDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dispositions movements filter':
                await this.filterResults.movementDispositions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header movements':
                await this.filterMovements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements cross button':
                await this.filterMovements.crossBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements filter button':
                await (await this.filterMovements.continueBtn.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'completed filter check':
                await (await this.filterMovements.checkBoxStatus.elements()).value[0].waitForDisplayed({reverse: value === 'not visible'});
                break;
            case 'in progress filter check':
                await (await this.filterMovements.checkBoxStatus.elements()).value[1].waitForDisplayed({reverse: value === 'not visible'});
                break;
            case 'view more button':
                await this.purchaseDetail.seeMoreLessBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disposition section':
                await this.purchaseDetail.dispositionSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disposition process panel':
                await this.purchaseDetail.dispositionProcessPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment history section':
                await this.purchaseDetail.paymentHistorySection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share disposition button':
                await this.purchaseDetail.shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'late payment':
                await this.latePayment.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new BuyNowPayLaterTerm();
