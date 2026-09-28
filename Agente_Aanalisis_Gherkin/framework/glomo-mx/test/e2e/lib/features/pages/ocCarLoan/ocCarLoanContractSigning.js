import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('ocCarLoanContractSigning')
class OcCarLoanContractSigning extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanContractSigning[state="active"]',
            elements: {
                header: 'bbva-header-main[data-select=app__header]',
                exitBtn: 'bbva-header-main[data-select=app__header] #btn-right-primary',
                details: {
                    properties: {root: '#contract-step-1'},
                    header: '#heading',
                    amountTitle: '.amount-title',
                    amount: '.amount',
                    creditNameTitle: '[label="Nombre del crédito"] dt',
                    creditName: '[label="Nombre del crédito"] dd',
                    folioTitle: '[label="Número de solicitud"] dt',
                    folio: '[label="Número de solicitud"] dd',
                    requestDateTitle: '[label="Fecha de solicitud"] dt',
                    requestDate: '[label="Fecha de solicitud"] dd',
                    reqLifeTitle: '[label="Vigencia de la solicitud"] dt',
                    reqLife: '[label="Vigencia de la solicitud"] dd',
                    termTitle: '[label="Plazo"] dt',
                    term: '[label="Plazo"] dd',
                    paydayTitle: '[label="Día de pago"] dt',
                    payday: '[label="Día de pago"] dd',
                    irrPayTitle: '[label="Pago irregular"] dt',
                    irrPay: '[label="Pago irregular"] dd',
                    monthPayTitle: '[label="Pago mensual"] dt',
                    monthPay: '[label="Pago mensual"] dd',
                    firstMonthPayTitle: '[label="Pago mensual periodo 1"] dt',
                    firstMonthPay: '[label="Pago mensual periodo 1"] dd',
                    secMonthPayTitle: '[label="Pago mensual periodo 2"] dt',
                    secMonthPay: '[label="Pago mensual periodo 2"] dd',
                    guarValueTitle: '[label="Valor garantizado"] dt',
                    guarValue: '[label="Valor garantizado"] dd',
                    carDetailsTitle: '.detail-section:nth-of-type(3) .step-1-section-title',
                    quoteNumTitle: '[label="Número de cotización"] dt',
                    quoteNum: '[label="Número de cotización"] dd',
                    agencyTitle: '[label="Agencia"] dt',
                    agency: '[label="Agencia"] dd',
                    brandTitle: '[label="Marca del vehículo"] dt',
                    brand: '[label="Marca del vehículo"] dd',
                    subBrandTitle: '[label="Submarca del vehículo"] dt',
                    subBrand: '[label="Submarca del vehículo"] dd',
                    modelTitle: '[label="Modelo del vehículo"] dt',
                    model: '[label="Modelo del vehículo"] dd',
                    typeTitle: '[label="Tipo de vehículo"] dt',
                    type: '[label="Tipo de vehículo"] dd',
                    versionTitle: '[label="Versión del vehículo"] dt',
                    version: '[label="Versión del vehículo"] dd',
                    costTitle: '[label="Costo del vehículo"] dt',
                    cost: '[label="Costo del vehículo"] dd',
                    downPayTitle: '[label="Enganche"] dt',
                    downPay: '[label="Enganche"] dd',
                    reqAmountForCarTitle: '[label="Importe a solicitar del vehículo"] dt',
                    reqAmountForCar: '[label="Importe a solicitar del vehículo"] dd',
                    accCostTitle: '[label="Importe de accesorios"] dt',
                    accCost: '[label="Importe de accesorios"] dd',
                    extWrntTitle: '[label="Garantía extendida"] dt',
                    extWrnt: '[label="Garantía extendida"] dd',
                    aestAccTitle: '[label="Accesorios estética"] dt',
                    aestAcc: '[label="Accesorios estética"] dd',
                    lifeInsTitle: '.detail-section:nth-of-type(4) .step-1-section-title',
                    lifInsurerTitle: '.detail-section:nth-of-type(4) [label="Aseguradora"] dt',
                    lifInsurer: '.detail-section:nth-of-type(4) [label="Aseguradora"] dd',
                    lifInsTypeTitle: '.detail-section:nth-of-type(4) [label="Tipo de seguro"] dt',
                    lifInsType: '.detail-section:nth-of-type(4) [label="Tipo de seguro"] dd',
                    lifInsCostTitle: '.detail-section:nth-of-type(4) [label="Importe del seguro"] dt',
                    lifInsCost: '.detail-section:nth-of-type(4) [label="Importe del seguro"] dd',
                    damInsTitle: '.detail-section:nth-of-type(5) .step-1-section-title',
                    damInsurerTitle: '.detail-section:nth-of-type(5) [label="Aseguradora"] dt',
                    damInsurer: '.detail-section:nth-of-type(5) [label="Aseguradora"] dd',
                    damInsTypeTitle: '.detail-section:nth-of-type(5) [label="Tipo de seguro"] dt',
                    damInsType: '.detail-section:nth-of-type(5) [label="Tipo de seguro"] dd',
                    damInsCostTitle: '.detail-section:nth-of-type(5) [label="Importe del seguro"] dt',
                    damInsCost: '.detail-section:nth-of-type(5) [label="Importe del seguro"] dd',
                    ratesNCostsTitle: '.detail-section:nth-of-type(6) .step-1-section-title',
                    annualIntRateTitle: '[label="Tasa de interés anual fija sin IVA"] dt',
                    annualIntRate: '[label="Tasa de interés anual fija sin IVA"] dd',
                    annualIntRatePtOneTitle: '[label="Tasa de interés anual fija sin IVA periodo 1"] dt',
                    annualIntRatePtOne: '[label="Tasa de interés anual fija sin IVA periodo 1"] dd',
                    annualIntRatePtTwoTitle: '[label="Tasa de interés anual fija sin IVA periodo 2"] dt',
                    annualIntRatePtTwo: '[label="Tasa de interés anual fija sin IVA periodo 2"] dd',
                    arrFeeTitle: '[label="Comisión por apertura"] dt',
                    arrFee: '[label="Comisión por apertura"] dd',
                    catWithoutIVATitle: '[label="CAT sin IVA informativo"] dt',
                    catWithoutIVA: '[label="CAT sin IVA informativo"] dd',
                    catWithoutIVASubText: '[label="CAT sin IVA informativo"] + .list-info',
                    catWithoutIVAPtOneTitle: '[label="CAT sin IVA informativo periodo 1"] dt',
                    catWithoutIVAPtOne: '[label="CAT sin IVA informativo periodo 1"] dd',
                    catWithoutIVAPtOneSubText: '[label="CAT sin IVA informativo periodo 1"] + .list-info',
                    catWithoutIVAPtTwoTitle: '[label="CAT sin IVA informativo periodo 2"] dt',
                    catWithoutIVAPtTwo: '[label="CAT sin IVA informativo periodo 2"] dd',
                    catWithoutIVAPtTwoSubText: '[label="CAT sin IVA informativo periodo 2"] + .list-info',
                    totalPaymentTitle: '[label="Importe total a pagar"] dt',
                    totalPayment: '[label="Importe total a pagar"] dd',
                    totalPaymentPtOneTitle: '[label="Importe total a pagar periodo 1"] dt',
                    totalPaymentPtOne: '[label="Importe total a pagar periodo 1"] dd',
                    totalPaymentPtTwoTitle: '[label="Importe total a pagar periodo 2"] dt',
                    totalPaymentPtTwo: '[label="Importe total a pagar periodo 2"] dd',
                    accountTitle: '.account-title',
                    account: '#__ID__-account',
                },
                contract: {
                    properties: {root: '#contract-step-2'},
                    header: '.heading',
                    changeBtn: '#editButton',
                    guideText: '.guide-text',
                    contractTermsBtn: '#contract-terms',
                    coverContractBtn: '#cover-contract',
                    creditContractBtn: '#credit-contract',
                    directDebitFormatBtn: '#direct-debit-format',
                    exhibitBtn: '#exhibit',
                    amortizationBtn: '#amortization-table',
                    promissoryNoteBtn: '#promissory-note',
                    checkOne: '[name="check-1"]',
                    checkTwo: '[name="check-2"]',
                    checkThree: '[name="check-3"]',
                    checkFour: '[name="check-4"]',
                    notifIcon: '.notification svg',
                    notifText: '.notification .paragraph',
                    acceptBtn: '[data-tag-name="bbva-button-default"]'
                },
                helpModal: {
                    properties: {root: 'bbva-help-modal[visible]'},
                    header: '#heading',
                    closeBtn: '#btn-right-primary',
                    icon: '.title-icon',
                    title: '#title-text',
                    content: '#helpModalContent',
                    bulletPoints: 'bbva-aggregation-bullet-list',
                    acceptBtn: '[data-tag-name=bbva-button-default]',
                    cancelBtn: '[data-tag-name="bbva-link"]'
                },
                acceptBtn: '#button'
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
            case 'details header':
                await this.details.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details amount title':
                await this.details.amountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details amount':
                await this.details.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details credit name title':
                await this.details.creditNameTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details credit name':
                if(value==='future value'){
                    await this.details.creditName.waitForText({text: 'valor futuro', exactMatch: false});
                } else if(value==='bike'){
                    await this.details.creditName.waitForText({text: 'financiamiento de motos', exactMatch: false});
                } else if(value==='rec bike'){
                    await this.details.creditName.waitForText({text: 'brp motos mm', exactMatch: false});
                } else {
                    await this.details.creditName.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'details folio title':
                await this.details.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details folio':
                await this.details.folio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details request date title':
                await this.details.requestDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details request date':
                await this.details.requestDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details request life title':
                await this.details.reqLifeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details request life':
                await this.details.reqLife.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details term title':
                await this.details.termTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details term':
                await this.details.term.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details payday title':
                await this.details.paydayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details payday':
                await this.details.payday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details irregular payments title':
                await this.details.irrPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details irregular payments':
                await this.details.irrPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details monthly payments title':
                await this.details.monthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details monthly payments':
                await this.details.monthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period title':
                await this.details.firstMonthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period':
                await this.details.firstMonthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second monthly pay period title':
                await this.details.secMonthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second monthly pay period':
                await this.details.secMonthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value title':
                await this.details.guarValueTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value':
                await this.details.guarValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car details section title':
                await this.details.carDetailsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details quote number title':
                await this.details.quoteNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details quote number':
                await this.details.quoteNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details agency title':
                await this.details.agencyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details agency':
                await this.details.agency.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details brand title':
                await this.details.brandTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details brand':
                await this.details.brand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details sub brand title':
                await this.details.subBrandTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details sub brand':
                await this.details.subBrand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details model title':
                await this.details.modelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details model':
                await this.details.model.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details car type title':
                await this.details.typeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details car type':
                await this.details.type.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details car version title':
                await this.details.versionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details car version':
                await this.details.version.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details car cost title':
                await this.details.costTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details car cost':
                await this.details.cost.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details down poayment title':
                await this.details.downPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details down poayment':
                await this.details.downPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details requested amount for car title':
                await this.details.reqAmountForCarTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details requested amount for car':
                await this.details.reqAmountForCar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accesories import title':
                await this.details.accCostTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accesories import':
                await this.details.accCost.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details extended warranty title':
                await this.details.extWrntTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details extended warranty':
                await this.details.extWrnt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details aesthetic accessories title':
                await this.details.aestAccTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details aesthetic accessories':
                await this.details.aestAcc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance section title':
                await this.details.lifeInsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details life insurer title':
                await this.details.lifInsurerTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'details life insurer':
                if(value!=='' && value!=='hidden'){
                    await this.details.lifInsurer.waitForText({text: value, exactMatch: false});
                } else {
                    await this.details.lifInsurer.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                }
                break;
            case 'details life insurance type title':
                await this.details.lifInsTypeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details life insurance type':
                if(value==='his own'){
                    await this.details.lifInsType.waitForText({text: 'por cuenta del cliente', exactMatch: false});
                } else if(value==='cash'){
                    await this.details.lifInsType.waitForText({text: 'contado', exactMatch: false});
                } else if(value==='financed'){
                    await this.details.lifInsType.waitForText({text: 'financiado', exactMatch: false});
                } else {
                    await this.details.lifInsType.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'details life insurance cost title':
                await this.details.lifInsCostTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'details life insurance cost':
                await this.details.lifInsCost.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'damage insurance section title':
                if(value==='hidden'){
                    await this.details.damInsTitle.waitForText({text: 'tasas y costos', exactMatch: false});
                } else {
                    await this.details.damInsTitle.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'details damage insurer title':
                await this.details.damInsurerTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'details damage insurer':
                if(value && value !== 'hidden'){
                    await this.details.damInsurer.waitForText({text: value, exactMatch: false});
                } else {
                    await this.details.damInsurer.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                }
                break;
            case 'details damage insurance type title':
                await this.details.damInsTypeTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'details damage insurance type':
                if(value==='his own'){
                    await this.details.damInsType.waitForText({text: 'por cuenta del cliente', exactMatch: false});
                } else if(value==='cash'){
                    await this.details.damInsType.waitForText({text: 'contado', exactMatch: false});
                } else if(value==='financed'){
                    await this.details.damInsType.waitForText({text: 'financiado', exactMatch: false});
                } else if(value==='multiyear'){
                    await this.details.damInsType.waitForText({text: 'multianual', exactMatch: false});
                } else {
                    await this.details.damInsType.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                }
                break;
            case 'details damage insurance cost title':
                await this.details.damInsCostTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'details damage insurance cost':
                await this.details.damInsCost.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'rates and costs section title':
                await this.details.ratesNCostsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details annual interes rate title':
                await this.details.annualIntRateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details annual interes rate':
                await this.details.annualIntRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period annual interest rate title':
                await this.details.annualIntRatePtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period annual interest rate':
                await this.details.annualIntRatePtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period annual interest rate title':
                await this.details.annualIntRatePtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period annual interest rate':
                await this.details.annualIntRatePtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details arrangement fee title':
                await this.details.arrFeeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details arrangement fee':
                await this.details.arrFee.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details cat without iva title':
                await this.details.catWithoutIVATitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details cat without iva':
                await this.details.catWithoutIVA.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details cat without iva subtext':
                await this.details.catWithoutIVASubText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva title':
                await this.details.catWithoutIVAPtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva':
                await this.details.catWithoutIVAPtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva subtext':
                await this.details.catWithoutIVAPtOneSubText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva title':
                await this.details.catWithoutIVAPtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva':
                await this.details.catWithoutIVAPtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva subtext':
                await this.details.catWithoutIVAPtTwoSubText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details total payment title':
                await this.details.totalPaymentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details total payment':
                await this.details.totalPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period total payment title':
                await this.details.totalPaymentPtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period total payment':
                await this.details.totalPaymentPtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period total payment title':
                await this.details.totalPaymentPtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period total payment':
                await this.details.totalPaymentPtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account section title':
                await this.details.accountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details account':
                if(value==='external'){
                    await this.details.account.specifySelector({placeholder: '__ID__', value: 'external'}).waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.details.account.specifySelector({placeholder: '__ID__', value: 'bbva'}).waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'contract header':
                await this.contract.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract change button':
                await this.contract.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract guide text':
                await this.contract.guideText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract contract terms button':
                await this.contract.contractTermsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract conver contract button':
                await this.contract.coverContractBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract credit contract button':
                await this.contract.creditContractBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract direct debit form button':
                await this.contract.directDebitFormatBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract exhibits button':
                await this.contract.exhibitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract amortization button':
                await this.contract.amortizationBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract promissory note button':
                await this.contract.promissoryNoteBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract first check':
                await this.contract.checkOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract second check':
                await this.contract.checkTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract third check':
                await this.contract.checkThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract third check text':
                if(value==='both insurances'){
                    await this.contract.checkThree.waitForText({text: 'contratar el seguro de vida y de daños conforme', exactMatch: false});
                } else if(value==='only life insurance'){
                    await this.contract.checkThree.waitForText({text: 'contratar el seguro de vida conforme', exactMatch: false});
                } else if(value==='only damage insurance'){
                    await this.contract.checkThree.waitForText({text: 'contratar el seguro de daños conforme', exactMatch: false});
                } else {
                    await this.contract.checkThree.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'contract fourth check':
                await this.contract.checkFour.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'contract notification icon':
                await this.contract.notifIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract notification text':
                await this.contract.notifText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract accept button':
                await this.contract.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal header':
                await this.helpModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal close button':
                await this.helpModal.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal icon':
                await this.helpModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal title':
                await this.helpModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal content':
                await this.helpModal.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal bullet points':
                if(value==='rec bike'){
                    await this.helpModal.bulletPoints.waitForText({text: 'seguro de vida BBVA', exactMatch: false});
                } else {
                    await this.helpModal.bulletPoints.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'help modal accept button':
                await this.helpModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal cancel button':
                await this.helpModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    _setCurrentStatus(status) {
        this.currentStatus = status;
    }

    async _checkInsurances(){
        const ownInsText= 'por cuenta del cliente';
        return !(await this.details.lifInsType.waitForText({text: ownInsText, exactMatch:false, failOnError:false, timeout:config.wait.S}) &&
            await this.details.damInsType.waitForText({text: ownInsText, exactMatch:false, failOnError:false, timeout:config.wait.S}));
    }

    async completeCheck(){
        if(this.currentStatus!=='completed'){
            await (await this.contract.checkOne.waitForClickable({timeout: config.wait.L})).click();
            await (await this.contract.checkTwo.waitForClickable({timeout: config.wait.L})).click();
            await (await this.contract.checkThree.waitForClickable({timeout: config.wait.L})).click();
            if(await this._checkInsurances())
                await (await this.contract.checkFour.waitForClickable({timeout: config.wait.L})).click();
            this._setCurrentStatus('completed');
        }
        await (await this.contract.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async finishSigning(){
        if(this.currentStatus!=='completed')
            await this.completeCheck();
        await (await this.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.fillOtp('11111111');
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async editSection(section){
        if(section==='conditions'){
            await (await (await this.contract.changeBtn.scrollIntoView()).waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            throw new Error(`The section "${section}" is unknown`);
        }
    }

    async goBack(outcome = 'accept'){
        await this.openModal('exit');
        await this.closeModal(outcome);
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async openModal(modal){
        switch(modal){
            case 'terms and conditions':
                await (await this.contract.contractTermsBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'exit':
                await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The modal "${modal}" is unknown. Cannot be processed.`);
        }
        await this.helpModal.icon.waitForAnimation({timeout: config.wait.M});
    }

    async closeModal(option){
        switch(option){
            case 'top':
                await (await this.helpModal.closeBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'accept':
            case 'bottom':
                await (await this.helpModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'cancel':
                await (await this.helpModal.cancelBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The button "${option}" is unknown. Cannot be processed.`);
        }
        await this.helpModal.__root.waitForDisplayed({timeout:config.wait.M, reverse:true});
    }

    async openPDF(pdfName){
        if(pdfName==='contract cover'){
            await (await this.contract.coverContractBtn.waitForClickable({timeout: config.wait.M})).click();
        } else {
            throw new Error(`The pdf "${pdfName}" is unknown`);
        }
    }
}

export default new OcCarLoanContractSigning();
