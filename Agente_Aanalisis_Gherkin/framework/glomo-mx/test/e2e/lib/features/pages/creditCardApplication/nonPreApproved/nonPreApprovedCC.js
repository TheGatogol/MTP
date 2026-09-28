import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsModalCardAdviceSpherica from '../../../components/cells-modal-card-advice-spherica';

@page()
class NonPreApprovedCC extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'NonPreApprovedCC',
            root: '#cells-template-nonPreApprovedCreditCard[state="active"]',
            elements: {
                title: '.header__title',
                exitBtn: '#btnRight',
                credCardImg: 'cells-molecule-card-cover-spherica',
                cardTopDesc: '.header .main-title',
                descriptionTitle: 'cells-atom-subheader-spherica.subheader-main-text',
                descriptionText: '.main-text .text-main-description',
                amountLabel: '#amountInput .text-field__label',
                amountInput: 'div.content-input #input',
                defaultAmount: 'cells-atom-amount-spherica.amount-huge-decimals',
                eraseAllBtn: 'cells-st-button-spherica#icon-wrapper cells-atom-icon-spherica',
                basicAmountMsg: '.icon-message #notInline',
                errorAmountMsg: '.message-input #notInline',
                benefitsTitle: 'cells-atom-subheader-spherica.title-list',
                benefitsList: 'cells-lists-spherica',
                annualFeeTitle: '.list-info-keys cells-atom-subheader-spherica.list-keys-title:not(:has(cells-atom-icon-spherica))',
                annualFeeDesc: '.list-info-keys cells-key-values-spherica:not(.values-bold)',
                rateTitle: '.list-info-keys cells-atom-subheader-spherica.list-keys-title:has(cells-atom-icon-spherica)',
                rateDesc: '.list-info-keys cells-key-values-spherica.values-bold',
                contractSummary: '.custom-template cells-icon-message-spherica',
                modalInfoBtn: 'cells-atom-subheader-spherica iron-icon',
                modalContainer: 'cells-modal-help-spherica cells-alert-box-spherica',
                closeModalBtn: 'cells-modal-help-spherica #closeButton',
                modalHelpIcon: 'cells-modal-help-spherica cells-atom-icon-spherica[icon="coronita:help"] iron-icon',
                topModalInfoTitle: 'cells-modal-help-spherica cells-text-description-spherica.title-l:not(.margin-top-m) .title',
                topModalInfo: 'cells-modal-help-spherica cells-text-description-spherica.title-l:not(.margin-top-m) .description',
                topModalInfoTwo: 'cells-modal-help-spherica cells-text-description-spherica:not(.title-l) .description',
                bottomModalInfoTitle: 'cells-modal-help-spherica cells-text-description-spherica.title-l.margin-top-m .title',
                bottomModalInfo: 'cells-modal-help-spherica cells-text-description-spherica.title-l.margin-top-m .description',
                bottomModalInfoTwo: 'cells-modal-help-spherica cells-text-description-spherica:not(.title-l) .description',
                acceptModalBtn: 'cells-modal-help-spherica .btn',
                rejectionModalSpherica: CellsModalCardAdviceSpherica,
                finishBtn: 'cells-st-button-spherica.button-sticky',
            },
            requiredElements: [
                'title',
                'descriptionTitle',
                'finishBtn',
            ],
        });
    }

    async _screenValidation({item, value = '', _args} = {}) {
        switch (item.toLowerCase()) {
            case 'page title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credid card imgage':
                await this.credCardImg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card top description':
                await this.cardTopDesc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description title':
                await this.descriptionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description text':
                await this.descriptionText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount label':
                await this.amountLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount input':
                if (value === 'hidden') {
                    await this.amountInput.waitForDisplayed({reverse: true});
                } else {
                    await this.amountInput.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'default amount':
                await this.defaultAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'basic amount message':
                await this.basicAmountMsg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error amount message':
                if (value === 'less') {
                    await this.errorAmountMsg.waitForText({text: 'mínimo', exactMatch: false});
                } else if (value === 'no') {
                    await this.errorAmountMsg.waitForText({text: 'entre', exactMatch: false});
                } else if (value === 'more') {
                    await this.errorAmountMsg.waitForText({text: 'máximo', exactMatch: false});
                } else {
                    await this.errorAmountMsg.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'benefits title':
                await this.benefitsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits list':
                await this.benefitsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'annual fee title':
                await this.annualFeeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'annual fee description':
                await this.annualFeeDesc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interest rate title':
                await this.rateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal info button':
                await this.modalInfoBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rate description':
                await this.rateDesc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract summary':
                await this.contractSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish button':
                await this.finishBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal container':
                if (value === 'not visible') {
                    await this.modalContainer.waitForAttribute({attribute: 'opened', reverse: true});
                } else {
                    await this.modalContainer.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'close modal button':
                await this.closeModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal help icon':
                await this.modalHelpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'top modal info title':
                await this.topModalInfoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'top modal info':
                await this.topModalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second top modal info':
                await this.waitForElementsExist(this.topModalInfoTwo, config.wait.M);
                await (await this.topModalInfoTwo.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bottom modal info title':
                await this.bottomModalInfoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bottom modal info':
                await this.bottomModalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second bottom modal info':
                await this.waitForElementsExist(this.bottomModalInfoTwo, config.wait.M);
                await (await this.bottomModalInfoTwo.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rejection modal header':
                await this.rejectionModalSpherica.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rejection modal image':
                await this.rejectionModalSpherica.modalTitleIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rejection modal title':
                await this.rejectionModalSpherica.modalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rejection modal description':
                await this.rejectionModalSpherica.modalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rejection modal find atm':
                await this.rejectionModalSpherica.findAtmBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rejection modal accept button':
                await this.rejectionModalSpherica.confirmButtonsComponent.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept modal button':
                await this.acceptModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async changeCreditAmount(creditLine = '') {
        if (creditLine === '') {
            await (await this.eraseAllBtn.waitForClickable({timeout: config.wait.M})).click();
        } else {
            await (await this.amountInput.waitForClickable({timeout: config.wait.M})).setValue({value: creditLine});
        }
    }

    async cmpltNPACC() {
        await (await this.finishBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async openCreditInfoModal() {
        await (await this.modalInfoBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async closeModal() {
        await this.topModalInfo.waitForAnimation({timeout: config.wait.M});
        await (await this.closeModalBtn.waitForClickable({timeout: config.wait.XL})).click();
    }

    async abandonOffer() {
        await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async exitRejectionModal() {
        await this.rejectionModalSpherica.selectPrimaryButton();
    }

    async exitChoice(choice) {
        await this.dialogOperations.confirmDialog({isConfirmed: choice, expectToDisappear: true});
    }

    async retryModal(times) {
        let i = 0;
        while (i < times) {
            await (await this.errorDialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
            await this.fillOtp('11111111');
            i++;
        }
    }
}

export default new NonPreApprovedCC();
