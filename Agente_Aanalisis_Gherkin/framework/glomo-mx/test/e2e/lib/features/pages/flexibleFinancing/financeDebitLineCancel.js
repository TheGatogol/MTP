import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';

const REASON = {
    DATE_NOT_FLEXIBLE: 'date pay',
    HIGH_FEE: 'high commission',
    LOW_LIMIT: 'low limit',
    COMPLICATED_PAYMENT: 'complicate process',
    OTHER: 'other',
};

@page('financeDebitLineCancel')
class FinanceDebitLineCancel extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-financeDebitLineCancel[state="active"]',
            elements: {
                onboarding: {
                    properties: {
                        root: '[data-selector="modal-onboarding"]',
                    },
                    header: '.modal-header #helpModalHeader[text="Cancelar línea"] .header',
                    close: '.modal-header #helpModalHeader[text="Cancelar línea"] #btn-close',
                    icon: '.onboarding-wrapper [data-tag-name="bbva-clip-microillustration"]',
                    title: '.onboarding-wrapper .modal-title',
                    text: '.onboarding-wrapper .modal-text',
                    list: '.onboarding-wrapper [data-tag-name="bbva-list-bullet"]',
                    continue: '.modal-footer [data-tag-name="bbva-button-default"]',
                    saveMyLine: '.modal-footer [data-tag-name="bbva-button-default"].link',
                },
                headerSecondary: '.multistep [data-tag-name="bbva-header-main"][variant="modal-initial"] .header',
                closeHeaderSecondary: '.multistep [data-tag-name="bbva-header-main"][variant="modal-initial"] #btn-close',
                preFilledStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#prefilled-step',
                    },
                    title: '#headingLabel',
                    accountNumber: '[data-tag-name="bbva-badge-reference"]',
                    limitAmount: '[data-tag-name="bbva-type-amount"]',
                    info: '[data-tag-name="bbva-notification-help"]',
                },
                stepOne: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#step-1',
                    },
                    detailTitle: '#headingLabel',
                    detailText: '.reasons-message',
                    reasonsList: '.reasons-container',
                    reasonChoise: '[data-tag-name="bbva-form-radio-button-input"][value="_REASON_"]',
                    reasonDetailCollapsed: '.reasons-container-collapsed',
                    selectedReason: '.summary',
                    changeReasonLink: '[data-tag-name="bbva-type-link"]',
                    continue: '[data-tag-name="bbva-button-default"]',
                },
                stepTwo: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#step-2',
                    },
                    headerTitle: '.header #headingLabel',
                    detailTitle: '#headingLabel',
                    detailText: '.detail-message',
                    productName: '.detail-container .text',
                    infoAmountLimit: '[data-tag-name="bbva-type-amount"]',
                    info: '[data-tag-name="bbva-notification-message"]',
                    consultDetailLink: '[data-tag-name="bbva-type-link"]',
                    continue: '[data-tag-name="bbva-button-default"]',
                },
                cancelLineButton: '.confirmation-summary [data-tag-name="bbva-button-default"]',
                voucher: [
                    BbvaHelpModal,
                    {
                        modifiers: '[data-selector="modal-receiptModal"]',
                        additionalElements: {
                            icon: '.success-section bbva-clip-microillustration[microillustration="success"]',
                            title: '.receipt-wrapper .receipt-title',
                            detail: '.receipt-wrapper .box-item .key-value-content  [data-tag-name="bbva-type-text"][alignment="right"]',
                            shareButton: '.receipt-footer [accessibility-text="Descargar informe"] [data-tag-name="bbva-button-action"]',
                            email: 'bbva-notification-message',
                        },
                    },
                ],
                halfHelpModal:
                    [
                        BbvaHelpModal,
                        {
                            modifiers: '[data-selector="modal-__ACTION__"]',
                            additionalElements: {
                                closeHeader: '#btn-close',
                                icon: '[data-tag-name="bbva-type-icon"].title-icon',
                                text: '#helpModalContent',
                                button: '.modal-footer [data-tag-name="bbva-button-default"]',
                                link: '.modal-footer [data-tag-name="bbva-button-default"].link',
                            },
                        },
                    ],
                fullHelpModal:
                    [
                        BbvaHelpModal,
                        {
                            modifiers: '[data-selector="modal-errorMaximumRetriesModalDisableCallBbva"][aria-label="Cancelar línea"]',
                            additionalElements: {
                                header: '#heading',
                                closeHeader: '#btn-close',
                                icon: '[data-tag-name="bbva-type-icon"].title-icon',
                                text: '#helpModalContent',
                                link: '.modal-footer [data-tag-name="bbva-type-link"]',
                            },
                        },
                    ],
            },
            requiredElements: [
                'root',
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header secondary':
                await this.preFilledStep.title.waitForAnimation();
                await this.preFilledStep.title.scrollIntoView({block: 'nearest'});
                await this.headerSecondary.waitForDisplayed();
                break;
            case 'close header secondary':
                await this.closeHeaderSecondary.waitForDisplayed();
                break;
            case 'title prefilled':
                await this.waitForElementsExist(this.preFilledStep.title, config.wait.M);
                await (await this.preFilledStep.title.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account prefilled':
                await this.preFilledStep.accountNumber.waitForDisplayed();
                break;
            case 'limit amount prefilled':
                await this.preFilledStep.limitAmount.waitForDisplayed();
                break;
            case 'info text prefilled':
                await this.preFilledStep.info.waitForDisplayed();
                break;
            case 'title detail reasons':
                await this.waitForElementsExist(this.stepOne.detailTitle, config.wait.M);
                await (await this.stepOne.detailTitle.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text detail reasons':
                await this.stepOne.detailText.waitForDisplayed();
                break;
            case 'reasons list':
                await this.stepOne.reasonsList.waitForDisplayed();
                break;
            case 'continue reasons':
                await this.stepOne.continue.waitForDisplayed();
                break;
            case 'reason selected':
                await this.stepOne.selectedReason.waitForDisplayed();
                break;
            case 'change reason':
                await this.waitForElementsExist(this.stepOne.changeReasonLink, config.wait.M);
                await (await this.stepOne.changeReasonLink.elements()).value[0].waitForDisplayed();
                break;
            case 'title text selected':
                await this.stepTwo.detailTitle.waitForDisplayed();
                break;
            case 'detail text selected':
                await this.stepTwo.detailText.waitForDisplayed();
                break;
            case 'product name selected':
                await this.waitForElementsExist(this.stepTwo.productName, config.wait.M);
                await (await this.stepTwo.productName.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                await (await this.stepTwo.productName.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                await (await this.stepTwo.productName.elements()).value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit amount selected':
                await this.stepTwo.infoAmountLimit.waitForDisplayed();
                break;
            case 'info detail selected':
                await this.stepTwo.info.waitForDisplayed();
                break;
            case 'continue selected':
                await this.stepTwo.continue.waitForDisplayed();
                break;
            case 'icon voucher':
                await this.voucher.icon.waitForDisplayed();
                break;
            case 'title voucher':
                await this.voucher.additionalElements.title.waitForDisplayed();
                break;
            case 'date voucher':
                await this.waitForElementsExist(this.voucher.additionalElements.detail, config.wait.M);
                await (await this.voucher.additionalElements.detail.elements()).value[0].waitForDisplayed();
                break;
            case 'account voucher':
                await this.waitForElementsExist(this.voucher.additionalElements.detail, config.wait.M);
                await (await this.voucher.additionalElements.detail.elements()).value[1].waitForDisplayed();
                break;
            case 'operation type voucher':
                await this.waitForElementsExist(this.voucher.additionalElements.detail, config.wait.M);
                await (await this.voucher.additionalElements.detail.elements()).value[2].waitForDisplayed();
                break;
            case 'contract voucher':
                await this.waitForElementsExist(this.voucher.additionalElements.detail, config.wait.M);
                await (await this.voucher.additionalElements.detail.elements()).value[3].waitForDisplayed();
                break;
            case 'reason voucher':
                await this.waitForElementsExist(this.voucher.additionalElements.detail, config.wait.M);
                await (await this.voucher.additionalElements.detail.elements()).value[4].waitForDisplayed();
                break;
            case 'operation folio':
                await this.waitForElementsExist(this.voucher.additionalElements.detail, config.wait.M);
                await (await this.voucher.additionalElements.detail.elements()).value[5].waitForDisplayed();
                break;
            case 'email':
                await this.voucher.additionalElements.email.waitForDisplayed({timeout: config.wait.L, reverse: value === 'not visible'});
                break;
            case 'to share button':
                await this.voucher.additionalElements.shareButton.waitForExist();
                await this.voucher.additionalElements.shareButton.scrollIntoView();
                await this.voucher.additionalElements.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title half modal':
                await (await this.halfHelpModal.header.specifySelector({placeholder: '__ACTION__', value: 'confirmLeave'})).waitForDisplayed();
                break;
            case 'close half modal':
                await (await this.halfHelpModal.additionalElements.closeHeader.specifySelector({placeholder: '__ACTION__', value: 'confirmLeave'})).waitForDisplayed();
                break;
            case 'icon half modal':
                await (await this.halfHelpModal.additionalElements.icon.specifySelector({placeholder: '__ACTION__', value: 'confirmLeave'})).waitForDisplayed();
                break;
            case 'description half modal':
                await (await this.halfHelpModal.additionalElements.text.specifySelector({placeholder: '__ACTION__', value: 'confirmLeave'})).waitForDisplayed();
                break;
            case 'exit half modal':
                await (await this.halfHelpModal.acceptBtn.specifySelector({placeholder: '__ACTION__', value: 'confirmLeave'})).waitForDisplayed();
                break;
            case 'continue operation half modal':
                await (await this.halfHelpModal.additionalElements.link.specifySelector({placeholder: '__ACTION__', value: 'confirmLeave'})).waitForDisplayed({reverse: value === 'not visible'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueCancelationOnboarding() {
        await this.onboarding.continue.waitForDisplayed({timeout: config.wait.M});
        await this.onboarding.continue.waitForAnimation({timeout: config.wait.M});
        await this.onboarding.continue.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async selectReason(reason) {
        const value = await this.getPropertyNameByValue(reason);
        await this.stepOne.reasonChoise.specifySelector({placeholder: '_REASON_', value: value}).click({useActions: false});
    }

    async getPropertyNameByValue(reason) {
        return Object.keys(REASON).find(key => REASON[key] === reason);
    }

    async continueCancelationReason() {
        await this.stepOne.continue.waitForDisplayed({timeout: config.wait.M});
        await this.stepOne.continue.waitForAnimation({timeout: config.wait.M});
        await this.stepOne.continue.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async continueCancelationDetail() {
        await this.stepTwo.continue.waitForDisplayed({timeout: config.wait.M});
        await this.stepTwo.continue.waitForAnimation({timeout: config.wait.M});
        await this.stepTwo.continue.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async cancelLine() {
        await this.cancelLineButton.waitForDisplayed({timeout: config.wait.M});
        await this.cancelLineButton.waitForAnimation({timeout: config.wait.M});
        await this.cancelLineButton.click({useActions: false, scrollOptions: {block: 'end'}});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.M});
    }

    async fillsOtp(otp) {
        await this.fillOtp(otp);
        await this.voucher.additionalElements.shareButton.waitForDisplayed({timeout: config.wait.M});
    }

    async retryModal(times) {
        const retryButton = await this.halfHelpModal.acceptBtn.specifySelector({placeholder: '__ACTION__', value: 'errorRetryShortModal'});
        let i = 0;
        while (i < times) {
            await (await (await retryButton.waitForDisplayed({timeout: config.wait.M})).waitForAnimation({timeout: config.wait.M})).click({scrollOptions: {block: 'nearest'}});
            i++;
        }
        await this.fullHelpModal.additionalElements.icon.scrollIntoView({block: 'start', timeout: config.wait.M});
    }

    async toShare() {
        await this.voucher.additionalElements.shareButton.waitForClickable();
        await this.voucher.additionalElements.shareButton.click();
    }

    async keepLine() {
        await this.onboarding.saveMyLine.waitForClickable();
        await this.onboarding.saveMyLine.click();
    }

    async exitScreen() {
        await this.waitForElementsExist(this.preFilledStep.title, config.wait.M);
        await (await (await (await this.preFilledStep.title.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).waitForAnimation({timeout: config.wait.M})).scrollIntoView({block: 'nearest'});
        await (await (await this.closeHeaderSecondary.waitForDisplayed({timeout: config.wait.M})).waitForAnimation({timeout: config.wait.M})).click();
    }

    async continueHalfHelpModal({action}) {
        await (await (await this.halfHelpModal.additionalElements.link.specifySelector({placeholder: '__ACTION__', value: action})).waitForClickable({timeout: config.wait.M})).click();
    }

    async confirmHalfHelpModal({action}) {
        const element = await this.halfHelpModal.acceptBtn.specifySelector({placeholder: '__ACTION__', value: action});
        await (await element.waitForDisplayed({timeout: config.wait.M})).click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async closeDialog() {
        const element = await this.halfHelpModal.additionalElements.closeHeader.specifySelector({placeholder: '__ACTION__', value: 'overduePayments'});
        await (await element.waitForDisplayed({timeout: config.wait.M})).click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async modifyReason() {
        await this.stepOne.changeReasonLink.waitForClickable();
        await this.stepOne.changeReasonLink.click();
        await this.selectReason('high commission');
        await this.continueCancelationReason();
    }

    async consultDetails() {
        await this.stepTwo.consultDetailLink.waitForClickable();
        await this.stepTwo.consultDetailLink.click();
    }

}

export default new FinanceDebitLineCancel();
