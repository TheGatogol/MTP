import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class BranchAppointmentSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-requestBranchAppointmentSuccess[state="active"]',
            elements: {
                header: '#titleZone',
                closeBtn: '#btnRight',
                img: '#header-section .icon.success cells-atom-icon-spherica',
                title: '#header-section .title',
                createdDate: '#body-section [data-selector=glomo-request-branch-appointment-values-list-customer-date-hour]',
                infoList: {
                    properties: {
                        root: '#body-section'
                    },
                    nameTitle: '[data-selector=glomo-request-branch-appointment-values-list-customer-name] .key',
                    userName: '[data-selector=glomo-request-branch-appointment-values-list-customer-name] .value',
                    tdpTitle: '[data-selector=glomo-request-branch-appointment-values-list-customer-appointment-name] .key',
                    tdp: '[data-selector=glomo-request-branch-appointment-values-list-customer-appointment-name] .value',
                    branchTitle: '[data-selector=glomo-request-branch-appointment-values-list-customer-branch] .key',
                    addressOne: '[data-selector=glomo-request-branch-appointment-values-list-customer-branch] .value',
                    addressTwo: '[data-selector=branchAddress] .value',
                    procedureTitle: '[data-selector=glomo-request-branch-appointment-operative-type-modal-main-title] .key',
                    procedure: '[data-selector=glomo-request-branch-appointment-operative-type-modal-main-title] .value',
                    zoneTitle: '[data-selector=glomo-request-branch-appointment-operative-type-subtitle-description] .key',
                    zone: '[data-selector=glomo-request-branch-appointment-operative-type-subtitle-description] .value',
                    dateTitle: '[data-selector=glomo-request-branch-appointment-values-list-customer-creation-date] .key',
                    date: '[data-selector=glomo-request-branch-appointment-values-list-customer-creation-date] cells-atom-date-spherica',
                    folioTitle: '[data-selector=glomo-request-branch-appointment-values-list-customer-id-spherica] .key',
                    folio: '[data-selector=glomo-request-branch-appointment-values-list-customer-id-spherica] .value',
                    bbvaText: '[data-selector=bank] span.value'
                },
                panelMsg: 'cells-icon-message-spherica',
                modalBtn: 'cells-icon-message-spherica .link',
                downloadReceipt: '[data-selector="share"] .link',
                cancelApptBtn: '[data-selector="delete"] .link',
                route: '[data-selector="route"] .link',
                exitBtn: '#primaryBtn',
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
                'header'
            ],
        });
    }

    async _screenValidation({item, value = '', _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'image':
                await this.img.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'receipt title':
                await this.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'date of receipt':
                await this.createdDate.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'name title':
                await this.infoList.nameTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'name':
                await this.infoList.userName.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'tdp title':
                await this.infoList.tdpTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'tdp code':
                await this.infoList.tdp.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch title':
                await this.infoList.branchTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'address first row':
                await this.infoList.addressOne.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'address second row':
                await this.infoList.addressTwo.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure title':
                await this.infoList.procedureTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'procedure':
                if(value!==''){
                    if(value==='contracts'){
                        await this.infoList.procedure.waitForText({text: 'contracts', exactMatch: false});
                    } else if(value==='payments or deposits'){
                        await this.infoList.procedure.waitForText({text: 'payments or deposits', exactMatch: false});
                    } else if(value==='collections or withdrawals'){
                        await this.infoList.procedure.waitForText({text: 'collections or withdrawals', exactMatch: false});
                    } else if(value==='queries or modifications'){
                        await this.infoList.procedure.waitForText({text: 'queries or modifications', exactMatch: false});
                    }
                } else {
                    await this.infoList.procedure.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'attention zone title':
                await this.infoList.zoneTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'attention zone':
                await this.infoList.zone.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'date title':
                await this.infoList.dateTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'date':
                await this.infoList.date.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'folio title':
                await this.infoList.folioTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'folio':
                await this.infoList.folio.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'bbva text':
                await this.infoList.bbvaText.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'message panel':
                await this.panelMsg.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'placeholder':
                await this.modalBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'download receipt button':
                await this.downloadReceipt.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'cancel appointment button':
                await this.cancelApptBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'show route button':
                await this.route.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout:config.wait.M});
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
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async openModal(modal=''){
        switch(modal){
            case 'branch suggestions':
                await (await this.modalBtn.waitForClickable({timeout:config.wait.M})).click();
                break;
            default:
                throw new Error(`There's no modal named as "${modal}"`);
        }
    }

    async openCancelationModal(){
        await (await this.cancelApptBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async cancelAppointment(isConfirmed=true){
        await this.openCancelationModal();
        const button = isConfirmed ? this.helpModal.acceptBtn : this.helpModal.closeBtn;
        await (await button.waitForClickable({timeout: config.wait.M})).click();
    }

    async downloadAppontmentReceipt() {
        await (await this.downloadReceipt.waitForDisplayed({timeout:config.wait.M})).click();
    }
}

export default new BranchAppointmentSuccess();
