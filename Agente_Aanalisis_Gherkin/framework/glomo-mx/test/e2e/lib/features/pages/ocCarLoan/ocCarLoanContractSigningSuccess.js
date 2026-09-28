import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('ocCarLoanContractSigningSuccess')
class OcCarLoanContractSigningSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanContractSigningSuccess[state="active"]',
            elements: {
                header: 'bbva-header-main #heading',
                exitBtn: 'bbva-header-main #btn-right-primary',
                successIcon: 'bbva-panel-info svg',
                successTitle: 'bbva-panel-info .title',
                successDesc: 'bbva-panel-info .description',
                successDate: 'bbva-panel-info + bbva-text',
                reqAmountTitle: '[label="bbva-oc-car-loan-requested-amount"] dt',
                reqAmount: '[label="bbva-oc-car-loan-requested-amount"] dd',
                loanNumTitle: '[label="bbva-oc-car-loan-title"] dt',
                loanNum: '[label="bbva-oc-car-loan-title"] dd',
                openingDateTitle: '[label="bbva-multistep-oc-car-loan-opening-date"] dt',
                openingDate: '[label="bbva-multistep-oc-car-loan-opening-date"] dd',
                creditNameTitle: '[label="bbva-oc-car-loan-credit-name"] dt',
                creditName: '[label="bbva-oc-car-loan-credit-name"] dd',
                reqDateTitle: '[label="bbva-oc-car-loan-request-date"] dt',
                reqDate: '[label="bbva-oc-car-loan-request-date"] dd',
                reqLifeTitle: '[label="bbva-oc-car-loan-validity-of-the-request"] dt',
                reqLife: '[label="bbva-oc-car-loan-validity-of-the-request"] dd',
                termTitle: '[label="bbva-oc-car-loan-term"] dt',
                term: '[label="bbva-oc-car-loan-term"] dd',
                paydayTitle: '[label="bbva-oc-car-loan-payday"] dt',
                payday: '[label="bbva-oc-car-loan-payday"] dd',
                accountTitle: '[label="bbva-oc-car-loan-charge-account"] dt',
                account: '[label="bbva-oc-car-loan-charge-account"] dd',
                irrPayTitle: '[label="bbva-oc-car-loan-irregular-payment"] dt',
                irrPay: '[label="bbva-oc-car-loan-irregular-payment"] dd',
                monthPayTitle: '[label="bbva-oc-car-loan-monthly-payment"] dt',
                monthPay: '[label="bbva-oc-car-loan-monthly-payment"] dd',
                firstMonthPayTitle: '[label="Pago mensual periodo 1"] dt',
                firstMonthPay: '[label="Pago mensual periodo 1"] dd',
                secMonthPayTitle: '[label="Pago mensual periodo 2"] dt',
                secMonthPay: '[label="Pago mensual periodo 2"] dd',
                guarValueTitle: '[label="bbva-oc-car-loan-guaranteed-value"] dt',
                guarValue: '[label="bbva-oc-car-loan-guaranteed-value"] dd',
                quoteNumTitle: '[label="bbva-oc-car-loan-quote-number"] dt',
                quoteNum: '[label="bbva-oc-car-loan-quote-number"] dd',
                agencyTitle: '[label="bbva-oc-car-loan-agency"] dt',
                agency: '[label="bbva-oc-car-loan-agency"] dd',
                brandTitle: '[label="bbva-oc-car-loan-vehicle-brand"] dt',
                brand: '[label="bbva-oc-car-loan-vehicle-brand"] dd',
                subBrandTitle: '[label="bbva-oc-car-loan-vehicle-sub-brand"] dt',
                subBrand: '[label="bbva-oc-car-loan-vehicle-sub-brand"] dd',
                modelTitle: '[label="bbva-oc-car-loan-vehicle-model"] dt',
                model: '[label="bbva-oc-car-loan-vehicle-model"] dd',
                typeTitle: '[label="bbva-oc-car-loan-vehicle-type"] dt',
                type: '[label="bbva-oc-car-loan-vehicle-type"] dd',
                versionTitle: '[label="bbva-oc-car-loan-vehicle-version"] dt',
                version: '[label="bbva-oc-car-loan-vehicle-version"] dd',
                costTitle: '[label="bbva-oc-car-loan-vehicle-cost"] dt',
                cost: '[label="bbva-oc-car-loan-vehicle-cost"] dd',
                downPayTitle: '[label="bbva-oc-car-loan-down-payment"] dt',
                downPay: '[label="bbva-oc-car-loan-down-payment"] dd',
                reqAmountForCarTitle: '[label="bbva-oc-car-loan-amount-to-request"] dt',
                reqAmountForCar: '[label="bbva-oc-car-loan-amount-to-request"] dd',
                accImpTitle: '[label="bbva-oc-car-loan-import-of-accessories"] dt',
                accImp: '[label="bbva-oc-car-loan-import-of-accessories"] dd',
                extWrntTitle: '[label="bbva-oc-car-loan-extended-warranty"] dt',
                extWrnt: '[label="bbva-oc-car-loan-extended-warranty"] dd',
                aestAccTitle: '[label="bbva-oc-car-loan-extended-warranty"] dt',
                aestAcc: '[label="bbva-oc-car-loan-extended-warranty"] dd',
                lifInsurerTitle: '[label="bbva-oc-car-loan-life-insurance-company"] dt',
                lifInsurer: '[label="bbva-oc-car-loan-life-insurance-company"] dd',
                lifInsTypeTitle: '[label="bbva-oc-car-loan-type-of-life-insurance"] dt',
                lifInsType: '[label="bbva-oc-car-loan-type-of-life-insurance"] dd',
                lifInsCostTitle: '[label="bbva-oc-car-loan-life-insurance-amount"] dt',
                lifInsCost: '[label="bbva-oc-car-loan-life-insurance-amount"] dd',
                damInsurerTitle: '[label="bbva-oc-car-loan-damage-insurance-company"] dt',
                damInsurer: '[label="bbva-oc-car-loan-damage-insurance-company"] dd',
                damInsTypeTitle: '[label="bbva-oc-car-loan-type-of-damage-insurance"] dt',
                damInsType: '[label="bbva-oc-car-loan-type-of-damage-insurance"] dd',
                damInsCostTitle: '[label="bbva-oc-car-loan-damage-insurance-amount"] dt',
                damInsCost: '[label="bbva-oc-car-loan-damage-insurance-amount"] dd',
                annualIntRateTitle: '[label="bbva-oc-car-loan-interest-rate"] dt',
                annualIntRate: '[label="bbva-oc-car-loan-interest-rate"] dd',
                annualIntRatePtOneTitle: '[label="Tasa de interés anual fija sin IVA periodo 1"] dt',
                annualIntRatePtOne: '[label="Tasa de interés anual fija sin IVA periodo 1"] dd',
                annualIntRatePtTwoTitle: '[label="Tasa de interés anual fija sin IVA periodo 2"] dt',
                annualIntRatePtTwo: '[label="Tasa de interés anual fija sin IVA periodo 2"] dd',
                arrFeeTitle: '[label="bbva-multistep-oc-car-loan-commission-for-opening"] dt',
                arrFee: '[label="bbva-multistep-oc-car-loan-commission-for-opening"] dd',
                catWithoutIVATitle: '[label="bbva-oc-car-loan-cat-without-informative-vat"] dt',
                catWithoutIVA: '[label="bbva-oc-car-loan-cat-without-informative-vat"] dd',
                catWithoutIVAPtOneTitle: '[label="CAT sin IVA informativo periodo 1"] dt',
                catWithoutIVAPtOne: '[label="CAT sin IVA informativo periodo 1"] dd',
                catWithoutIVAPtTwoTitle: '[label="CAT sin IVA informativo periodo 2"] dt',
                catWithoutIVAPtTwo: '[label="CAT sin IVA informativo periodo 2"] dd',
                totalPaymentTitle: '[label="bbva-oc-car-loan-total-amount-to-pay"] dt',
                totalPayment: '[label="bbva-oc-car-loan-total-amount-to-pay"] dd',
                totalPaymentPtOneTitle: '[label="Importe total a pagar periodo 1"] dt',
                totalPaymentPtOne: '[label="Importe total a pagar periodo 1"] dd',
                totalPaymentPtTwoTitle: '[label="Importe total a pagar periodo 2"] dt',
                totalPaymentPtTwo: '[label="Importe total a pagar periodo 2"] dd',
                folioTitle: '[label="bbva-multistep-oc-car-loan-operation-folio"] dt',
                folio: '[label="bbva-multistep-oc-car-loan-operation-folio"] dd',
                notifIcon: 'bbva-notification-message svg',
                notifMsg: 'bbva-notification-message .paragraph',
                emailDocInfo: 'bbva-notification-message + bbva-text',
                email: 'bbva-notification-message + bbva-text + bbva-text',
                downloadBtn: 'bbva-button-row',
                acceptBtn: '[data-tag-name=bbva-button-default]'
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item, value=''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success description':
                await this.successDesc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success date':
                await this.successDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested amount title':
                await this.reqAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested amount':
                await this.reqAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan number title':
                await this.loanNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan number':
                await this.loanNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'opening date title':
                await this.openingDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'opening date':
                await this.openingDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit name title':
                await this.creditNameTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit name':
                if(value==='future value'){
                    await this.creditName.waitForText({text: 'valor futuro', exactMatch: false});
                } else if(value==='bike'){
                    await this.creditName.waitForText({text: 'financiamiento de motos', exactMatch: false});
                } else if(value==='rec bike'){
                    await this.creditName.waitForText({text: 'brp motos mm', exactMatch: false});
                } else {
                    await this.creditName.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'requested date title':
                await this.reqDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested date':
                await this.reqDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request life title':
                await this.reqLifeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request life':
                await this.reqLife.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term title':
                await this.termTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term':
                await this.term.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay day title':
                await this.paydayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay day':
                await this.payday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account title':
                await this.accountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                if(value){
                    await this.account.waitForText({text: value, exactMatch: false});
                } else {
                    await this.account.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'irregular payments title':
                await this.irrPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'irregular payments':
                await this.irrPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly payments title':
                await this.monthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly payments':
                await this.monthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period title':
                await this.firstMonthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period':
                await this.firstMonthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second monthly pay period title':
                await this.secMonthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second monthly pay period':
                await this.secMonthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value title':
                await this.guarValueTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value':
                await this.guarValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quote number title':
                await this.quoteNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quote number':
                await this.quoteNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'agency title':
                await this.agencyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'agency':
                await this.agency.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car brand title':
                await this.brandTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car brand':
                await this.brand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sub brand title':
                await this.subBrandTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sub brand':
                await this.subBrand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car model title':
                await this.modelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car model':
                await this.model.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car type title':
                await this.typeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car type':
                await this.type.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car version title':
                await this.versionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car version':
                await this.version.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car cost title':
                await this.costTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car cost':
                await this.cost.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'down payment title':
                await this.downPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'down payment':
                await this.downPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested amount for the car title':
                await this.reqAmountForCarTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested amount for the car':
                await this.reqAmountForCar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accesories import title':
                await this.accImpTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accesories import':
                await this.accImp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'extended warranty title':
                await this.extWrntTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'extended warranty':
                await this.extWrnt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'aesthetic accesories title':
                await this.aestAccTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'aesthetic accesories':
                await this.aestAcc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance insurer title':
                await this.lifInsurerTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'life insurance insurer':
                if(value && value !== 'hidden'){
                    await this.lifInsurer.waitForText({text: value, exactMatch: false});
                } else {
                    await this.lifInsurer.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                }
                break;
            case 'life insurance type title':
                await this.lifInsTypeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance type':
                if(value==='his own'){
                    await this.lifInsType.waitForText({text: 'por cuenta del cliente', exactMatch: false});
                } else if(value==='cash'){
                    await this.lifInsType.waitForText({text: 'contado', exactMatch: false});
                } else if(value==='financed'){
                    await this.lifInsType.waitForText({text: 'financiado', exactMatch: false});
                } else {
                    await this.lifInsType.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'life insurance cost title':
                await this.lifInsCostTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'life insurance cost':
                await this.lifInsCost.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'damage insurance insurer title':
                await this.damInsurerTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'damage insurance insurer':
                if(value && value !== 'hidden'){
                    await this.damInsurer.waitForText({text: value, exactMatch: false});
                } else {
                    await this.damInsurer.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                }
                break;
            case 'damage insurance type title':
                await this.damInsTypeTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'damage insurance type':
                if(value==='his own'){
                    await this.damInsType.waitForText({text: 'por cuenta del cliente', exactMatch: false});
                } else if(value==='cash'){
                    await this.damInsType.waitForText({text: 'contado', exactMatch: false});
                } else if(value==='financed'){
                    await this.damInsType.waitForText({text: 'financiado', exactMatch: false});
                } else if(value==='multiyear'){
                    await this.damInsType.waitForText({text: 'multianual', exactMatch: false});
                } else {
                    await this.damInsType.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                }
                break;
            case 'damage insurance cost title':
                await this.damInsCostTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'damage insurance cost':
                await this.damInsCost.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'annual interest rate title':
                await this.annualIntRateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'annual interest rate':
                await this.annualIntRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period annual interest rate title':
                await this.annualIntRatePtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period annual interest rate':
                await this.annualIntRatePtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period annual interest rate title':
                await this.annualIntRatePtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period annual interest rate':
                await this.annualIntRatePtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee title':
                await this.arrFeeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee':
                await this.arrFee.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cat without iva title':
                await this.catWithoutIVATitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cat without iva':
                await this.catWithoutIVA.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva title':
                await this.catWithoutIVAPtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva':
                await this.catWithoutIVAPtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva title':
                await this.catWithoutIVAPtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva':
                await this.catWithoutIVAPtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total payment title':
                await this.totalPaymentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total payment':
                await this.totalPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period total payment title':
                await this.totalPaymentPtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period total payment':
                await this.totalPaymentPtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period total payment title':
                await this.totalPaymentPtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period total payment':
                await this.totalPaymentPtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio title':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification icon':
                await this.notifIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notifMsg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email documents information':
                await (await this.emailDocInfo.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email':
                await this.email.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'download button':
                await this.downloadBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async return(position = 'top'){
        switch(position){
            case 'top':
                await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'bottom':
                await (await this.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The position "${position}" is unknown. Cannot be processed.`);
        }
    }
}

export default new OcCarLoanContractSigningSuccess();
