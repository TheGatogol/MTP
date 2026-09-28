import { Commands, page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class BranchAppointment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-requestBranchAppointment[state="active"]',
            elements: {
                header: '#titleZone',
                exitBtn: '#btnRight',
                branchTitle: 'glomo-operative-info-spherica .title',
                branchName: 'glomo-operative-info-spherica .subtitle',
                branchAddress: 'glomo-operative-info-spherica .operative-info',
                stepProcedureType: {
                    properties: {
                        root: '#operativeStep'
                    },
                    title: 'h2',
                    changeBtn: '#changeBtn',
                    count: '.cells-step__header-step-number',
                    text: 'div p',
                    modalBtn: '.tooltip-button',
                    typeProcedure: '#input-0',
                    typeSubText: 'cells-icon-message .message',
                    zoneTitle: '.subtitle-description',
                    zone: '.subtitle-description + span',
                    continueBtn: '.full[variant="primary"] button'
                },
                contractsOpt: '#CONTRACTS',
                paymentDepositsOpt: 'li[id="PAYMENTS_OR_DEPOSITS"]',
                chargesWithdrawalsOpt: '#COLLECTIONS_OR_WITHDRAWALS',
                queriesModifOpt: '#QUERIES_OR_MODIFICATIONS',
                stepDateAndHour: {
                    properties: {
                        root: '#timeStep'
                    },
                    title: 'h2',
                    changeBtn: '#changeBtn',
                    count: '.cells-step__header-step-number',
                    text: 'div p',
                    dateSelect: '#input-0',
                    hourSelect: '#input-1',
                    panelMsg: 'cells-icon-message-spherica',
                    modalBtn: '#Btn',
                    continueBtn: '.full[variant="primary"] button',
                    errorPanelIcon: '[type="error"] #principalIcon',
                    errorPanelMsg: '[type="error"] .message',
                    errorPanelBtn: '[type="error"] #BtnInfoMessageInputs'
                },
                date: 'li[id="__DATE__"]',
                hour: 'li[id="__HOUR__:00"]',
                summary: {
                    operative: {
                        properties: {
                            root: '#operativeStep .filled'
                        },
                        procedureTitle: 'cells-key-values-spherica:nth-of-type(1) .key',
                        procedure: 'cells-key-values-spherica:nth-of-type(1) .value',
                        zoneTitle: 'cells-key-values-spherica:nth-of-type(2) .key',
                        zone: 'cells-key-values-spherica:nth-of-type(2) .value'
                    },
                    timeDate: {
                        properties: {
                            root: '#timeStep .filled'
                        },
                        dateTitle: 'cells-key-values-spherica:nth-of-type(1) .key',
                        date: 'cells-key-values-spherica:nth-of-type(1) .value',
                        timeTitle: 'cells-key-values-spherica:nth-of-type(2) .key',
                        time: 'cells-key-values-spherica:nth-of-type(2) .value'
                    }
                },
                helpModalAcceptBtn: '.help-modal bbva-button-default',
                helpModalCancelBtn: '.help-modal bbva-link',
                scheduleBtn: '#collapser .positive[variant="primary"]',
                helpModal: {
                    properties: {
                        root: 'bbva-help-modal-spherica'
                    },
                    icon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    title: '[data-tag-name="bbva-header-main"] .header [data-tag-name="bbva-type-text"]',
                    description: '#helpModalContent',
                    acceptBtn: '[data-tag-name="bbva-button-default"]',
                    closeBtn: '[data-tag-name="bbva-button-default"][variant="link"]'
                }
            },
            defaultSphericaElements: ['GlomoAlertManager'],
            requiredElements: [
                'header',
                'branchTitle'
            ],
        });
    }

    async _screenValidation({item, value = '', _args} = {}) {
        switch (item.toLowerCase()) {
            case 'branch title':
                await this.branchTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch name':
                await this.branchName.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch address':
                await this.branchAddress.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step title':
                await this.stepProcedureType.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step change button':
                await this.stepProcedureType.changeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step count':
                await this.stepProcedureType.count.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step description':
                await this.stepProcedureType.text.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step modal button':
                await this.stepProcedureType.modalBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step procedure selector':
                if(value!==''){
                    if(value==='contracts'){
                        await this.stepProcedureType.typeProcedure.
                            waitForAttribute({attribute:'item-selected', value:'Contrataciones'});
                    } else if(value==='payments or deposits'){
                        await this.stepProcedureType.typeProcedure.
                            waitForAttribute({attribute:'item-selected', value:'Pagos, depósitos y reposiciones'});
                    } else if(value==='collections or withdrawals'){
                        await this.stepProcedureType.typeProcedure.
                            waitForAttribute({attribute:'item-selected', value:'Cobros, retiros y NIP'});
                    } else if(value==='queries or modifications'){
                        await this.stepProcedureType.typeProcedure.
                            waitForAttribute({attribute:'item-selected', value:'Consultas y modificaciones'});
                    }
                } else {
                    await this.stepProcedureType.typeProcedure.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'contracts procedure selector':
                await this.contractsOpt.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'payments and deposits procedure selector':
                await this.paymentDepositsOpt.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'charges and withdrawals procedure selector':
                await this.chargesWithdrawalsOpt.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'queries and modifications procedure selector':
                await this.queriesModifOpt.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure subtext':
                if(value!==''){
                    if(value==='contracts text'){
                        await this.stepProcedureType.typeSubText.waitForAttribute({attribute:'aria-label',
                            value:'glomo-request-branch-appointment-operative-type-contracts-description'});
                    } else if(value==='payments or deposits text'){
                        await this.stepProcedureType.typeSubText.waitForAttribute({attribute:'aria-label',
                            value:'glomo-request-branch-appointment-operative-type-payments-or-deposits-description'});
                    } else if(value==='collections or withdrawals text'){
                        await this.stepProcedureType.typeSubText.waitForAttribute({attribute:'aria-label',
                            value:'glomo-request-branch-appointment-operative-type-collections-or-withdrawals-description'});
                    } else if(value==='queries or modifications text'){
                        await this.stepProcedureType.typeSubText.waitForAttribute({attribute:'aria-label',
                            value:'glomo-request-branch-appointment-operative-type-queries-or-modifications-description'});
                    }
                } else {
                    await this.stepProcedureType.typeSubText.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'procedure step attention zone title':
                await this.stepProcedureType.zoneTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step attention zone':
                await this.stepProcedureType.zone.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure step continue button':
                if(value!==''){
                    await this.stepProcedureType.continueBtn.waitForAttribute({attribute:'disabled', reverse:value==='enabled'});
                } else {
                    await this.stepProcedureType.continueBtn.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'time step title':
                await this.stepDateAndHour.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step change button':
                await this.stepDateAndHour.changeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step counter':
                await this.stepDateAndHour.count.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step description':
                await this.stepDateAndHour.text.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step date selector':
                await this.stepDateAndHour.dateSelect.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'date selector options':
                if(value==='weekend day'){
                    await this.date.specifySelector({placeholder: '__DATE__', value: '2023-03-25'})
                        .waitForDisplayed({timeout:config.wait.M});
                } else if(value==='hidden saturday'){
                    await this.date.specifySelector({placeholder: '__DATE__', value: '2023-04-01'})
                        .waitForDisplayed({timeout:config.wait.M, reverse:true});
                } else if(value==='hidden sunday'){
                    await this.date.specifySelector({placeholder: '__DATE__', value: '2023-04-02'})
                        .waitForDisplayed({timeout:config.wait.M, reverse:true});
                } else {
                    await this.date.specifySelector({placeholder: '__DATE__', value: new Date().toJSON().slice(0, 10)})
                        .waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'time step hour selector':
                await this.stepDateAndHour.hourSelect.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'hour selector options':
                await this.hour.specifySelector({placeholder: '__HOUR__', value: '15:00'}).waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step panel message':
                await this.stepDateAndHour.panelMsg.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step modal button':
                await this.stepDateAndHour.modalBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'time step continue button':
                if(value!==''){
                    await this.stepDateAndHour.continueBtn.waitForAttribute({attribute:'disabled', reverse:value==='enabled'});
                } else {
                    await this.stepDateAndHour.continueBtn.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'modal container':
                if(value==='not visible'){
                    await this.dialogOperations.container.waitForAttribute({attribute:'aria-hidden', value:'true'});
                } else {
                    await this.dialogOperations.container.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'summary procedure title':
                await this.summary.operative.procedureTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary procedure':
                if(value==='changed'){
                    await this.summary.operative.procedure.waitForText({text: 'Pagos, depósitos y reposiciones', exactMatch: false});
                } else {
                    await this.summary.operative.procedure.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'summary zone title':
                await this.summary.operative.zoneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary zone':
                await this.summary.operative.zone.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary date title':
                await this.summary.timeDate.dateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary date':
                await this.summary.timeDate.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary time title':
                await this.summary.timeDate.timeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary time':
                if(value==='changed'){
                    await this.summary.timeDate.time.waitForText({text: '15:30', exactMatch: false});
                } else {
                    await this.summary.timeDate.time.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'schedule appointment button':
                await this.scheduleBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal icon':
                await this.helpModal.icon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'help modal title':
                await this.helpModal.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'help modal description':
                await this.helpModal.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'help modal cancel button':
                await this.helpModal.acceptBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'help modal close button':
                await this.helpModal.closeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'error panel icon':
                await this.stepDateAndHour.errorPanelIcon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'error panel message':
                await this.stepDateAndHour.errorPanelMsg.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'error panel button':
                await this.stepDateAndHour.errorPanelBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }

    async continueProcess(step = this.currentStep) {
        if(!step) step = 'stepProcedureType';
        const stepList = ['stepProcedureType', 'stepDateAndHour', 'summary'];
        await (await this[step].continueBtn.waitForClickable({timeout: config.wait.M})).click();
        this.setCurrentStep(stepList[stepList.indexOf(step) + 1]);
    }

    async openModal(modal=''){
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.M, reverse:true});
        let step;
        switch(modal){
            case 'queue suggestions':
                step = 'stepProcedureType';
                break;
            case 'branch suggestions':
                step = 'stepDateAndHour';
                break;
            default:
                throw new Error(`There's no modal named as "${modal}"`);
        }
        await (await this[step].modalBtn.waitForClickable({timeout:config.wait.M})).click();
    }

    async openOptionsMenu(menu){
        switch(menu){
            case 'procedures':
                await (await this.stepProcedureType.typeProcedure.waitForClickable({timeout:config.wait.M})).click();
                break;
            case 'date':
                await (await this.stepDateAndHour.dateSelect.waitForClickable({timeout:config.wait.M})).click();
                break;
            case 'time':
                await (await this.stepDateAndHour.hourSelect.waitForClickable({timeout:config.wait.M})).click();
                break;
            default:
                throw new Error(`There's no option named as "${menu}"`);
        }
    }

    async selectProcedure(procedureName=''){
        let procedure;
        switch(procedureName){
            case 'contracts':
                procedure = 'contractsOpt';
                break;
            case 'payments or deposits':
                procedure = 'paymentDepositsOpt';
                break;
            case 'collections or withdrawals':
                procedure = 'chargesWithdrawalsOpt';
                break;
            case 'queries or modifications':
                procedure = 'queriesModifOpt';
                break;
            default:
                throw new Error(`There's no option named as "${procedure}"`);
        }
        await this.openOptionsMenu('procedures');
        await (await this[procedure].waitForClickable({timeout:config.wait.M})).click();
    }

    async selectDay(date=''){
        if(!date){
            const tomorrow  = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            date = tomorrow.toJSON().slice(0, 10);
        }
        await this.openOptionsMenu('date');
        await (await this.date.specifySelector({placeholder: '__DATE__', value: date}).waitForClickable({timeout:config.wait.M})).click();
    }

    async selectHour(time=''){
        if((time.split(':')[1]%15)>0)
            throw new Error('The desired hour is not a multiple of 15 minutes');
        await this.openOptionsMenu('time');
        await (await this.hour.specifySelector({placeholder: '__HOUR__', value: time}).waitForClickable({timeout:config.wait.L})).click();
    }

    async goToStep(step){
        switch(step){
            case 'time and date':
                if(!this.currentStep){
                    this.setCurrentStep('stepProcedureType');
                }
                if(this.currentStep==='stepProcedureType'){
                    await this.selectProcedure('contracts');
                    await this.continueProcess();
                    await this.stepDateAndHour.text.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'summary':
                await this.goToStep('time and date');
                if(this.currentStep==='stepDateAndHour'){
                    await this.selectHour('15:00');
                    await this.continueProcess();
                    await this.scheduleBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new Error(`The step "${step}" is unknown. Cannot be processed.`);
        }
    }

    async scheduleAppointment(){
        await (await this.scheduleBtn.waitForClickable({timeout:config.wait.M})).click();
    }

    async accessFromSummary(section){
        switch(section){
            case 'procedure':
                await (await this.stepProcedureType.changeBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'time':
                await (await this.stepDateAndHour.changeBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The option "${section}" is unknown. Cannot be processed.`);
        }
    }

    async changeSummary(section){
        switch(section){
            case 'procedure':
                await this.accessFromSummary('procedure');
                await this.selectProcedure('payments or deposits');
                await this.continueProcess('stepProcedureType');
                break;
            case 'time':
                await this.accessFromSummary('time');
                await (await this.helpModalAcceptBtn.waitForClickable({timeout: config.wait.M})).click();
                await this.selectHour('15:30');
                await this.continueProcess('stepDateAndHour');
                break;
            default:
                throw new Error(`The option "${section}" is unknown. Cannot be processed.`);
        }
    }

    async closeApptForm(isConfirmed=true){
        const button = isConfirmed ? this.helpModal.acceptBtn : this.helpModal.closeBtn;
        await (await button.waitForClickable({timeout: config.wait.M})).click();
    }

    async leaveTheProcess(){
        await (await (await this.exitBtn.waitForAnimation({timeout: config.wait.M})).waitForClickable({timeout: config.wait.M})).click();
    }

    async retryModal(times){
        let i = 0;
        while (i < times) {
            await (await this.stepDateAndHour.errorPanelBtn.waitForClickable({timeout: config.wait.M})).click();
            await Commands.pause({time: config.wait.S});
            i++;
        }
    }
}

export default new BranchAppointment();
