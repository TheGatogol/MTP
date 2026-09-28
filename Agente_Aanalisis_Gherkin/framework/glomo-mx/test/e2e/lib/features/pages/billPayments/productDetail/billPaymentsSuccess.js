import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class BillPaymentsSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-billPaymentsSuccess[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                successfullResponse: 'cells-successful-response-spherica',
                successTitle: '#header-section h2.title',
                successDate: '#header-section p.subtitle',
                successAmount: '#header-section cells-atom-amount-spherica[data-selector="cells-successful-response-charge-amount"]',
                successName: '#body-section ul li:nth-of-type(1) span.value',
                successID: '#body-section ul li:nth-of-type(2) span.value',
                successBillNumber: '#body-section ul li:nth-of-type(3) span.value',
                successAlias: '#body-section ul li:nth-of-type(4) span.value',
                successOperation: '#body-section ul li:nth-of-type(4) span.value',
                sucessOperationStored: '#body-section > ul > li:nth-of-type(5) > span.value',
                successOrigin: '#body-section ul li:nth-of-type(5) span.key',
                successOriginStored: '#body-section ul li:nth-of-type(6) cells-molecule-mask-spherica',
                successOriginMaskedStored: '#body-section ul li:nth-of-type(5) cells-molecule-mask-spherica',
                successMaskedNum: '#body-section ul li:nth-of-type(5) cells-molecule-mask-spherica',
                successMaskedStored: '#body-section ul li:nth-of-type(6) div.wrapper span.number',
                successCIE: '#body-section ul li:nth-of-type(7) span.value',
                successCIEStored: '#body-section ul li:nth-of-type(7) span.value',
                successOperationNum: '#body-section ul li:nth-of-type(8) span.value',
                successOperationNumStored: '#body-section ul li:nth-of-type(8) span.value',
                successShare: 'ul li:nth-of-type(1) button',
                successSave: 'ul li:nth-of-type(2) button',
                successToast: 'cells-modal-alert-spherica[type="success"]',
                billPaymentsServiceModal: 'cells-modal-new-recipient-service-selector-spherica #modal',
                inputAlias: 'cells-molecule-input-spherica.invalid-normal-color #input',
                acceptAliasBtn: 'div.selectedOptionBox cells-st-button-spherica.secondary button',
                exitButton: 'cells-successful-response-spherica #primaryBtn',
            },
            requiredElements: ['header', 'successfullResponse']
        });
    }

    async exitSuccessScreen() {
        await this.exitButton.waitForClickable({timeout: config.wait.L});
        await this.exitButton.click();
    }
    
    async saveService(alias = 'Frequent') {
        await this.successSave.waitForClickable({timeout: config.wait.L});
        await this.successSave.click();
        await this.inputAlias.waitForDisplayed({timeout: config.wait.L});
        await this.inputAlias.setValue({value: alias, slow: true});
        await this.acceptAliasBtn.waitForClickable({timeout: config.wait.L});
        await this.acceptAliasBtn.click();
    }

    async saveServiceWithoutAlias() {
        await this.successSave.waitForClickable({timeout: config.wait.L});
        await this.successSave.click();
        await this.acceptAliasBtn.waitForClickable({timeout: config.wait.L});
        await this.acceptAliasBtn.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfull receipt':
                await this.successfullResponse.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.successDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.successAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name':
                await this.successName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'id':
                await this.successID.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference':
                await this.successBillNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alias':
                await this.successAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation':
                await this.successOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation stored':
                await this.sucessOperationStored.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin':
                await this.successOrigin.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin stored':
                await this.successOriginStored.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin masked stored':
                await this.successOriginMaskedStored.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'masked number':
                await this.successMaskedNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'masked number stored':
                await this.successMaskedStored.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cie':
                await this.successCIE.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cie stored':
                await this.successCIEStored.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number':
                await this.successOperationNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number stored':
                await this.successOperationNumStored.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save':
                await this.successSave.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share':
                await this.successShare.scrollIntoView();
                await this.successShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'toast message':
                await this.successToast.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal':
                await this.billPaymentsServiceModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.inputAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BillPaymentsSuccess();
