import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

const wordKeys= {
    'consulted': 'consultado',
    'pending': 'pendiente',
    'done': 'realizado',
    'review': 'en revisión',
    'authorized': 'autorizado',
    'stopped': 'detenido',
    'rejected': 'rechazado',
    'canceled': 'cancelada'
};

@page('ocCarLoanTracking')
class OcCarLoanTracking extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanTracking[state="active"]',
            elements: {
                header: 'bbva-header-main[data-select=app__header]',
                exitBtn: 'bbva-header-main[data-select=app__header] #btn-right-primary',
                loanTitle: '.panel .title',
                loanStatus: '.panel .text',
                loanID: '.panel .bank-info',
                loanDetailsBtn: '.panel + [data-tag-name="bbva-link"]',
                notifMsgCont: '#notificationMessageMain',
                notifMsgIcon: '#notificationMessageMain [data-tag-name="bbva-icon"]',
                notifMsgText: '#notificationMessageMain .text',
                steps: {
                    properties: {root: '.steps li:nth-of-type(__NTH__)'},
                    statusIcon: '.circle',
                    title: '.title',
                    linkBtn: '[data-tag-name="bbva-link"]',
                    status: '[data-tag-name="bbva-badge-default"]',
                    text: '.text p',
                    notification: '.notification'
                },
                helpModal: {
                    properties: {root: 'bbva-help-modal[visible]'},
                    header: '#heading',
                    exitBtn: '#btn-right-primary',
                    icon: 'bbva-panel-info svg',
                    title: 'bbva-panel-info .title',
                    description: 'bbva-panel-info .description',
                    bulletPoints: 'bbva-aggregation-bullet-list',
                    text: 'bbva-aggregation-bullet-list + bbva-text',
                    notifIcon: 'bbva-notification-message svg',
                    notifText: 'bbva-notification-message .paragraph',
                    acceptBtn: '[data-tag-name=bbva-button-default]'
                }
            },
            requiredElements: [
                'header',
                'loanTitle'
            ]
        });
    }

    async _screenValidation({item, value=''} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan title':
                await this.loanTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan status':
                if(value){
                    await this.loanStatus.waitForText({text: wordKeys[value], exactMatch: false});
                } else {
                    await this.loanStatus.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'loan id':
                await this.loanID.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan details button':
                await this.loanDetailsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message container':
                if(value){
                    await this.notifMsgCont.waitForAttribute({attribute: 'variant', value: value});
                } else {
                    await this.notifMsgCont.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'notification message icon':
                await this.notifMsgIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message text':
                if(value==='success'){
                    await this.notifMsgText.waitForText({text: 'finalizó con éxito', exactMatch: false});
                } else if(value==='canceled'){
                    await this.notifMsgText.waitForText({text: 'cancelaste tu solicitud', exactMatch: false});
                } else if(value==='rejected basic'){
                    await this.notifMsgText.waitForText({text: 'fue rechazado. comunícate', exactMatch: false});
                } else if(value==='rejected documents'){
                    await this.notifMsgText.waitForText({text: 'revisamos los documentos', exactMatch: false});
                } else if(value==='rejected quotation'){
                    await this.notifMsgText.waitForText({text: 'realizaste cambios en tu cotización', exactMatch: false});
                } else {
                    await this.notifMsgText.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'arrangement fee information status icon':
                await this.steps.statusIcon.specifySelector({placeholder: '__NTH__', value: '1'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee information title':
                await this.steps.title.specifySelector({placeholder: '__NTH__', value: '1'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee information link button':
                await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '1'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee information status':
                if(value){
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '1'}).waitForText({text: wordKeys[value]});
                } else {
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '1'})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'arrangement fee information text':
                await this.steps.text.specifySelector({placeholder: '__NTH__', value: '1'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'arrangement fee tracking status':
                await this.steps.__root.specifySelector({placeholder: '__NTH__', value: '1'})
                    .waitForAttribute({attribute: 'class', value: `content ${value}`});
                break;
            case 'select account status icon':
                await this.steps.statusIcon.specifySelector({placeholder: '__NTH__', value: '2'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select account title':
                await this.steps.title.specifySelector({placeholder: '__NTH__', value: '2'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select account link button':
                await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '2'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select account status':
                if(value){
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '2'}).waitForText({text: wordKeys[value]});
                } else {
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '2'})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'select account text':
                await this.steps.text.specifySelector({placeholder: '__NTH__', value: '2'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select account subtext':
                if(value==='alert'){
                    await this.steps.notification.specifySelector({placeholder: '__NTH__', value: '2'})
                        .waitForText({text: 'no tienes cuentas disponibles', exactMatch: false});
                } else {
                    await this.steps.notification.specifySelector({placeholder: '__NTH__', value: '2'})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'select account tracking status':
                await this.steps.__root.specifySelector({placeholder: '__NTH__', value: '2'})
                    .waitForAttribute({attribute: 'class', value: `content ${value}`});
                break;
            case 'sign documents status icon':
                await this.steps.statusIcon.specifySelector({placeholder: '__NTH__', value: '3'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sign documents title':
                await this.steps.title.specifySelector({placeholder: '__NTH__', value: '3'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sign documents link button':
                await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '3'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sign documents status':
                if(value){
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '3'}).waitForText({text: wordKeys[value]});
                } else {
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '3'})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'sign documents tracking status':
                await this.steps.__root.specifySelector({placeholder: '__NTH__', value: '3'})
                    .waitForAttribute({attribute: 'class', value: `content ${value}`});
                break;
            case 'sign documents text':
                await this.steps.text.specifySelector({placeholder: '__NTH__', value: '3'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document verification status icon':
                await this.steps.statusIcon.specifySelector({placeholder: '__NTH__', value: '4'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document verification title':
                await this.steps.title.specifySelector({placeholder: '__NTH__', value: '4'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document verification status':
                if(value){
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '4'}).waitForText({text: wordKeys[value]});
                } else {
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '4'})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'document verification tracking status':
                await this.steps.__root.specifySelector({placeholder: '__NTH__', value: '4'})
                    .waitForAttribute({attribute: 'class', value: `content ${value}`});
                break;
            case 'document verification text':
                await this.steps.text.specifySelector({placeholder: '__NTH__', value: '4'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document verification subtext':
                await this.steps.notification.specifySelector({placeholder: '__NTH__', value: '4'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish contracting status icon':
                await this.steps.statusIcon.specifySelector({placeholder: '__NTH__', value: '5'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish contracting title':
                await this.steps.title.specifySelector({placeholder: '__NTH__', value: '5'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish contracting link button':
                await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '5'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish contracting status':
                if(value){
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '5'}).waitForText({text: wordKeys[value]});
                } else {
                    await this.steps.status.specifySelector({placeholder: '__NTH__', value: '5'})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'finish contracting tracking status':
                await this.steps.__root.specifySelector({placeholder: '__NTH__', value: '5'})
                    .waitForAttribute({attribute: 'class', value: `content ${value}`});
                break;
            case 'finish contracting text':
                await this.steps.text.specifySelector({placeholder: '__NTH__', value: '5'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal':
                await this.helpModal.__root.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'help modal header':
                await this.helpModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal exit button':
                await this.helpModal.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal icon':
                await this.helpModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal title':
                await this.helpModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal description':
                await this.helpModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal points':
                await this.helpModal.bulletPoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal text':
                await this.helpModal.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal notification icon':
                await this.helpModal.notifIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal notification text':
                await this.helpModal.notifText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal accept button':
                await this.helpModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async isSigningAvailable(){
        return await this.steps.status.specifySelector({placeholder: '__NTH__', value: '3'})
            .waitForText({timeout: config.wait.S, text: 'Pendiente', failOnError: false});
    }

    async goToSection(section){
        switch(section){
            case 'details':
                await (await this.loanDetailsBtn.waitForClickable({timeout: config.wait.L})).click();
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
                break;
            case 'down payment details':
                await (await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '1'})
                    .waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'account selection':
                await (await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '2'})
                    .waitForClickable({timeout: config.wait.L})).click();
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
                break;
            case 'sign documents':
                await (await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '3'})
                    .waitForClickable({timeout: config.wait.L})).click();
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
                break;
            case 'next steps':
                await (await this.steps.linkBtn.specifySelector({placeholder: '__NTH__', value: '5'})
                    .waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The step "${section}" is unknown. Cannot be processed.`);
        }
    }

    async closeModal(button = '') {
        switch(button) {
            case 'top':
                await (await (await this.helpModal.exitBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'bottom':
                await (await (await this.helpModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                await (await (await this.helpModal.exitBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async chooseExit(exitBtn){
        if(exitBtn){
            await currentPage.return(exitBtn);
        } else {
            await currentPage.return('bottom');
        }
    }
}

export default new OcCarLoanTracking();
