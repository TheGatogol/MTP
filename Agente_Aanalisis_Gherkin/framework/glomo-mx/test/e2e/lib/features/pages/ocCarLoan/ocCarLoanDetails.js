import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('ocCarLoanDetails')
class OcCarLoanDetails extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanRequestDetails[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"][data-select=app__header]',
                exitBtn: '[data-tag-name="bbva-header-main"][data-select=app__header] #btn-right-primary',
                generalTitle: 'bbva-header-category:nth-of-type(1)',
                general: {
                    properties: { root: 'bbva-aggregation-simple-list:nth-of-type(1)'},
                    productTitle: '[label="Producto"] dt',
                    product: '[label="Producto"] dd',
                    creditNameTitle: '[label="Nombre del crédito"] dt',
                    creditName: '[label="Nombre del crédito"] dd',
                    requestNumTitle: '[label="Número de solicitud"] dt',
                    requestNum: '[label="Número de solicitud"] dd',
                    copyReqNumBtn: '[label="Número de solicitud"] [data-tag-name="bbva-link"]',
                    reqDateTitle: '[label="Fecha de solicitud"] dt',
                    reqDate: '[label="Fecha de solicitud"] dd',
                    reqLifeTitle: '[label="Vigencia de la solicitud"] dt',
                    reqLife: '[label="Vigencia de la solicitud"] dd',
                    reqLifeModalBtn: '[label="Vigencia de la solicitud"] [data-tag-name=bbva-core-icon]',
                    reqAmountTitle: '[label="Importe a solicitar"] dt',
                    reqAmount: '[label="Importe a solicitar"] dd',
                    reqAmountModalBtn: '[label="Importe a solicitar"] [data-tag-name=bbva-core-icon]',
                    termTitle: '[label="Plazo"] dt',
                    term: '[label="Plazo"] dd',
                    paydayTitle: '[label="Día de pago"] dt',
                    payday: '[label="Día de pago"] dd',
                    paydayModalBtn: '[label="Día de pago"] [data-tag-name=bbva-core-icon]',
                    irrPayTitle: '[label="Pago irregular"] dt',
                    irrPay: '[label="Pago irregular"] dd',
                    irrPayModalBtn: '[label="Pago irregular"] [data-tag-name=bbva-core-icon]',
                    monthPayTitle: '[label="Pago mensual"] dt',
                    monthPay: '[label="Pago mensual"] dd',
                    monthPayModalBtn: '[label="Pago mensual"] [data-tag-name=bbva-core-icon]',
                    firstMonthPayTitle: '[label="Pago mensual periodo 1"] dt',
                    firstMonthPay: '[label="Pago mensual periodo 1"] dd',
                    firstMonthPayModalBtn: '[label="Pago mensual periodo 1"] [data-tag-name=bbva-core-icon]',
                    secMonthPayTitle: '[label="Pago mensual periodo 2"] dt',
                    secMonthPay: '[label="Pago mensual periodo 2"] dd',
                    guarValueTitle: '[label="Valor garantizado"] dt',
                    guarValue: '[label="Valor garantizado"] dd',
                    guarValueModalBtn: '[label="Valor garantizado"] [data-tag-name=bbva-core-icon]',
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
                    downPayModalBtn: '[label="Enganche"] [data-tag-name=bbva-core-icon]',
                    reqAmountForCarTitle: '[label="Importe a solicitar del vehículo"] dt',
                    reqAmountForCar: '[label="Importe a solicitar del vehículo"] dd',
                    accCostTitle: '[label="Importe de accesorios"] dt',
                    accCost: '[label="Importe de accesorios"] dd',
                    extWrntTitle: '[label="Garantía extendida"] dt',
                    extWrnt: '[label="Garantía extendida"] dd',
                    extWrntModalBtn: '[label="Garantía extendida"] [data-tag-name=bbva-core-icon]',
                    aestAccTitle: '[label="Accesorios estética"] dt',
                    aestAcc: '[label="Accesorios estética"] dd',
                    aestAccModalBtn: '[label="Accesorios estética"] [data-tag-name=bbva-core-icon]',
                },
                toastIcon: 'bbva-notification-toast svg',
                toastText: 'bbva-notification-toast .text',
                lifeInsTitle: 'bbva-header-category:nth-of-type(2)',
                lifeIns: {
                    properties: { root: 'bbva-aggregation-simple-list:nth-of-type(2)'},
                    insurerTitle: '[label="Aseguradora"] dt',
                    insurer: '[label="Aseguradora"] dd',
                    insTypeTitle: '[label="Tipo de seguro"] dt',
                    insType: '[label="Tipo de seguro"] dd',
                    costTitle: '[label="Importe del seguro"] dt',
                    cost: '[label="Importe del seguro"] dd',
                },
                propInsTitle: 'bbva-header-category:nth-of-type(3)',
                propIns: {
                    properties: { root: 'bbva-aggregation-simple-list:nth-of-type(3)'},
                    insurerTitle: '[label="Aseguradora"] dt',
                    insurer: '[label="Aseguradora"] dd',
                    insTypeTitle: '[label="Tipo de seguro"] dt',
                    insType: '[label="Tipo de seguro"] dd',
                    insTypeModalBtn: '[label="Tipo de seguro"] [data-tag-name=bbva-core-icon]',
                    costTitle: '[label="Importe del seguro"] dt',
                    cost: '[label="Importe del seguro"] dd',
                },
                ratesNCostsTitle: 'bbva-header-category:nth-of-type(4)',
                ratesNCosts: {
                    properties: { root: 'bbva-aggregation-simple-list:nth-of-type(4)'},
                    annualIntRateTitle: '[label="Tasa de interés anual fija sin IVA"] dt',
                    annualIntRate: '[label="Tasa de interés anual fija sin IVA"] dd',
                    annualIntRatePtOneTitle: '[label="Tasa de interés anual fija sin IVA periodo 1"] dt',
                    annualIntRatePtOne: '[label="Tasa de interés anual fija sin IVA periodo 1"] dd',
                    annualIntRatePtTwoTitle: '[label="Tasa de interés anual fija sin IVA periodo 2"] dt',
                    annualIntRatePtTwo: '[label="Tasa de interés anual fija sin IVA periodo 2"] dd',
                    arrFeeTitle: '[label="Comisión por apertura"] dt',
                    arrFee: '[label="Comisión por apertura"] dd',
                    arrFeeModalBtn: '[label="Comisión por apertura"] [data-tag-name=bbva-core-icon]',
                    catWithoutIVATitle: '[label="CAT sin IVA informativo"] dt',
                    catWithoutIVA: '[label="CAT sin IVA informativo"] dd',
                    catWithoutIVAPtOneTitle: '[label="CAT sin IVA informativo periodo 1"] dt',
                    catWithoutIVAPtOne: '[label="CAT sin IVA informativo periodo 1"] dd',
                    catWithoutIVAPtTwoTitle: '[label="CAT sin IVA informativo periodo 2"] dt',
                    catWithoutIVAPtTwo: '[label="CAT sin IVA informativo periodo 2"] dd',
                    totalPaymentTitle: '[label="Importe total a pagar"] dt',
                    totalPayment: '[label="Importe total a pagar"] dd',
                    totalPaymentPtOneTitle: '[label="Importe total a pagar periodo 1"] dt',
                    totalPaymentPtOne: '[label="Importe total a pagar periodo 1"] dd',
                    totalPaymentPtTwoTitle: '[label="Importe total a pagar periodo 2"] dt',
                    totalPaymentPtTwo: '[label="Importe total a pagar periodo 2"] dd',
                },
                helpModal: {
                    properties: {root: 'bbva-help-modal[visible]'},
                    header: '#heading',
                    closeBtn: '#btn-right-primary',
                    icon: '.title-icon',
                    title: '#title-text',
                    text: 'p.text',
                    content: '#helpModalContent',
                    acceptBtn: '[data-tag-name=bbva-button-default]'
                },
                catWIVA: 'bbva-divider + bbva-text',
                catRefinWIVA: 'bbva-divider + bbva-text + bbva-text',
                notifIcon: 'bbva-notification-message [data-tag-name="bbva-icon"]',
                notifMsg: 'bbva-notification-message .paragraph',
                notifLinkBtn: 'bbva-notification-message [data-tag-name="bbva-link"]'
            },
            requiredElements: [
                'header',
                'exitBtn'
            ]
        });
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.generalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product title':
                await this.general.productTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product':
                await this.general.product.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit name title':
                await this.general.creditNameTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit name':
                if(value==='future value'){
                    await this.general.creditName.waitForText({text: 'valor futuro', exactMatch: false});
                } else if(value==='bike'){
                    await this.general.creditName.waitForText({text: 'financiamiento de motos', exactMatch: false});
                } else if(value==='rec bike'){
                    await this.general.creditName.waitForText({text: 'brp motos mm', exactMatch: false});
                } else {
                    await this.general.creditName.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'request number title':
                await this.general.requestNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request number':
                await this.general.requestNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'copy request number button':
                await this.general.copyReqNumBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request date title':
                await this.general.reqDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request date':
                await this.general.reqDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request life title':
                await this.general.reqLifeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request life':
                await this.general.reqLife.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request life modal button':
                await this.general.reqLifeModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested total amount title':
                await this.general.reqAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested total amount':
                await this.general.reqAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested total amount modal button':
                await this.general.reqAmountModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term title':
                await this.general.termTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term':
                await this.general.term.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay day title':
                await this.general.paydayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay day':
                await this.general.payday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay day modal button':
                await this.general.paydayModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'irregular pay title':
                await this.general.irrPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'irregular pay':
                await this.general.irrPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'irregular pay modal button':
                await this.general.irrPayModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly pay title':
                await this.general.monthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly pay':
                await this.general.monthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly pay modal button':
                await this.general.monthPayModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period title':
                await (await this.general.firstMonthPayTitle.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period':
                await this.general.firstMonthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first monthly pay period modal button':
                await this.general.firstMonthPayModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second monthly pay period title':
                await this.general.secMonthPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second monthly pay period':
                await this.general.secMonthPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value title':
                await this.general.guarValueTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value':
                await this.general.guarValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'guaranteed value modal button':
                await this.general.guarValueModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quote number title':
                await this.general.quoteNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quote number':
                await this.general.quoteNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'agency title':
                await this.general.agencyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'agency':
                await this.general.agency.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'brand title':
                await this.general.brandTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'brand':
                await this.general.brand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sub brand title':
                await this.general.subBrandTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sub brand':
                await this.general.subBrand.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'model title':
                await this.general.modelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'model':
                await this.general.model.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type title':
                await this.general.typeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type':
                await this.general.type.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'version title':
                await this.general.versionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'version':
                await this.general.version.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost title':
                await this.general.costTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost':
                await this.general.cost.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'down payment title':
                await this.general.downPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'down payment':
                await this.general.downPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'down payment modal button':
                await this.general.downPayModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested amount for car title':
                await this.general.reqAmountForCarTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'requested amount for car':
                await this.general.reqAmountForCar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost of accessories title':
                await this.general.accCostTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost of accessories':
                await this.general.accCost.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'extended warranty title':
                await this.general.extWrntTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'extended warranty':
                await this.general.extWrnt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'extended warranty modal button':
                await this.general.extWrntModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'aesthetic accessories title':
                await this.general.aestAccTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'aesthetic accessories':
                await this.general.aestAcc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'aesthetic accessories modal button':
                await this.general.aestAccModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'toast icon':
                await this.toastIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'toast text':
                await this.toastText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance title':
                await (await this.lifeInsTitle.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance insurer title':
                await this.lifeIns.insurerTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'life insurance insurer':
                await this.lifeIns.insurer.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'life insurance type title':
                await this.lifeIns.insTypeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'life insurance type':
                if(value==='his own'){
                    await this.lifeIns.insType.waitForText({text: 'por cuenta del cliente', exactMatch: false});
                } else if(value==='cash'){
                    await this.lifeIns.insType.waitForText({text: 'contado', exactMatch: false});
                } else {
                    await this.lifeIns.insType.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'life insurance cost title':
                await this.lifeIns.costTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'life insurance cost':
                await this.lifeIns.cost.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'property insurance title':
                if(value==='hidden'){
                    await this.propInsTitle.waitForAttribute({attribute: 'hidden'});
                } else {
                    await this.propInsTitle.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'property insurance section':
                if(value==='hidden'){
                    await this.propIns.__root.waitForAttribute({attribute: 'hidden'});
                } else {
                    await this.propIns.__root.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'property insurance insurer title':
                await this.propIns.insurerTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'property insurance insurer':
                await this.propIns.insurer.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'property insurance type title':
                await this.propIns.insTypeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'property insurance type':
                if(value==='his own'){
                    await this.propIns.insType.waitForText({text: 'por cuenta del cliente', exactMatch: false});
                } else if(value==='cash'){
                    await this.propIns.insType.waitForText({text: 'contado', exactMatch: false});
                } else if(value==='multiyear'){
                    await this.propIns.insType.waitForText({text: 'multianual', exactMatch: false});
                } else {
                    await this.propIns.insType.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'property insurance type modal button':
                await this.propIns.insTypeModalBtn.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'property insurance cost title':
                await this.propIns.costTitle.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'property insurance cost':
                await this.propIns.cost.waitForDisplayed({timeout: config.wait.M, reverse: value==='hidden'});
                break;
            case 'rates and cost title':
                await this.ratesNCostsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'annual interest rate title':
                await this.ratesNCosts.annualIntRateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'annual interest rate':
                await this.ratesNCosts.annualIntRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period annual interest rate title':
                await (await this.ratesNCosts.annualIntRatePtOneTitle.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period annual interest rate':
                await this.ratesNCosts.annualIntRatePtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period annual interest rate title':
                await this.ratesNCosts.annualIntRatePtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period annual interest rate':
                await this.ratesNCosts.annualIntRatePtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee title':
                await this.ratesNCosts.arrFeeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee':
                await this.ratesNCosts.arrFee.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee modal button':
                await this.ratesNCosts.arrFeeModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cat without iva title':
                await this.ratesNCosts.catWithoutIVATitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cat without iva':
                await this.ratesNCosts.catWithoutIVA.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva title':
                await this.ratesNCosts.catWithoutIVAPtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period cat without iva':
                await this.ratesNCosts.catWithoutIVAPtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva title':
                await this.ratesNCosts.catWithoutIVAPtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period cat without iva':
                await this.ratesNCosts.catWithoutIVAPtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total payment title':
                await this.ratesNCosts.totalPaymentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total payment':
                await this.ratesNCosts.totalPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period total payment title':
                await this.ratesNCosts.totalPaymentPtOneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first period total payment':
                await this.ratesNCosts.totalPaymentPtOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period total payment title':
                await this.ratesNCosts.totalPaymentPtTwoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second period total payment':
                await this.ratesNCosts.totalPaymentPtTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal':
                await this.helpModal.__root.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
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
            case 'help modal text':
                if(value==='rec bike'){
                    await this.helpModal.text.waitForText({text: 'seguro de vida', exactMatch: false});
                } else {
                    await this.helpModal.text.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'help modal content':
                await this.helpModal.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal accept button':
                await this.helpModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cat summary':
                await (await this.catWIVA.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cat refinanced':
                await this.catRefinWIVA.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification icon':
                await this.notifIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notifMsg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification modal button':
                await this.notifLinkBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack(){
        await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async closeModal(exitBtn = ''){
        if(exitBtn==='top' &&
            await this.helpModal.__root.waitForAttribute({attribute: 'id', value: 'fullModal', failOnError: false})){
            await (await this.helpModal.closeBtn.waitForClickable({timeout: config.wait.M})).click();
        } else {
            await (await this.helpModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
        }
        await this.helpModal.__root.waitForDisplayed({timeout:config.wait.M, reverse:true});
    }

    async copyFolio(){
        await (await this.general.copyReqNumBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async openModal(modal){
        switch(modal.toLowerCase()){
            case 'request valid time':
                await (await this.general.reqLifeModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'requested total amount':
                await (await this.general.reqAmountModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'pay days':
                await (await this.general.paydayModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'irregular payments':
                await (await this.general.irrPayModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'monthly payment':
                await (await this.general.monthPayModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'guaranteed value':
                await (await this.general.guarValueModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'down payment':
                await (await this.general.downPayModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'extended warranty':
                await (await this.general.extWrntModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'aesthetic accessories':
                await (await this.general.aestAccModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'property damage insurance type':
                await (await this.propIns.insTypeModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'arrangement fees':
                await (await this.ratesNCosts.arrFeeModalBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'other coverage information':
                await (await this.notifLinkBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The modal "${modal}" is unknown. Cannot be processed.`);
        }
        await (await this.helpModal.__root.waitForDisplayed({timeout:config.wait.M})).waitForAnimation({timeout:config.wait.M});
    }
}

export default new OcCarLoanDetails();
