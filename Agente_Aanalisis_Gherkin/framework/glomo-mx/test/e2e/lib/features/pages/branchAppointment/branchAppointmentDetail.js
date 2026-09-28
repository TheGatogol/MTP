import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class BranchAppointmentDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-requestBranchAppointmentDetail[state="active"]',
            elements: {
                header: '#titleZone',
                backBtn: '#btnLeft',
                panelTitle: '#detailContainer bbva-type-text-spherica:nth-of-type(1)',
                panelCode: '#detailContainer bbva-type-text-spherica:nth-of-type(2)',
                panelDate: '#detailContainer bbva-type-text-spherica:nth-of-type(3)',
                panelHour: '#detailContainer bbva-type-text-spherica:nth-of-type(4)',
                apptStatus: '#detailContainer bbva-badge-default-spherica',
                downloadBtn: '[data-selector="download"]',
                cancelBtn: '[data-selector="cancel"]',
                panelMsg: 'cells-icon-message-spherica',
                panelMsgIcon: '#principalIcon',
                panelMsgText: '#notInline',
                suggestionsModal: 'cells-st-link-spherica',
                nameTitle: '[data-selector="main-key-values-info-0"] .key',
                userName: '[data-selector="main-key-values-info-0"] .value-item',
                branchTitle: '[data-selector="main-key-values-info-1"] .key',
                branchName: '[data-selector="main-key-values-info-1"] .value-item',
                procedureTitle: '[data-selector="main-key-values-info-2"] .key',
                procedure: '[data-selector="main-key-values-info-2"] .value-item',
                zoneTitle: '[data-selector="main-key-values-info-3"] .key',
                zone: '[data-selector="main-key-values-info-3"] .value-item',
                dateTitle: '[data-selector="main-key-values-info-4"] .key',
                date: '[data-selector="main-key-values-info-4"] .value-item',
                hourTitle: '[data-selector="main-key-values-info-5"] .key',
                hour: '[data-selector="main-key-values-info-5"] .value-item',
                turnCodeTitle: '[data-selector="main-key-values-info-6"] .key',
                turnCode: '[data-selector="main-key-values-info-6"] .value-item',
                folioTitle: '[data-selector="main-key-values-info-7"] .key',
                folio: '[data-selector="main-key-values-info-7"] .value-item',
                bbvaText: '[data-selector="additonal-info-7"]',
                helpModal: {
                    properties: { root: 'bbva-help-modal-spherica' },
                    icon: 'bbva-core-icon',
                    title: '.title-text',
                    description: '#helpModalContent',
                    acceptBtn: 'bbva-button-default',
                    closeBtn: 'bbva-link'
                }
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel title':
                await this.panelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel appointment code':
                await this.panelCode.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel date':
                await this.panelDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel hour':
                await this.panelHour.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'appointment status':
                await this.apptStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'download button':
                await this.downloadBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel appointment button':
                await this.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel message':
                await this.panelMsg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel message icon':
                await this.panelMsgIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel message text':
                await this.panelMsgText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'suggestions modal button':
                await this.suggestionsModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name title':
                await this.nameTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'user name':
                await this.userName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'branch title':
                await this.branchTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'branch name':
                await this.branchName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'procedure title':
                await this.procedureTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'procedure':
                await this.procedure.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'zone title':
                await this.zoneTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'zone':
                await this.zone.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date title':
                await this.dateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hour title':
                await this.hourTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hour':
                await this.hour.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'turn code title':
                await this.turnCodeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'turn code':
                await this.turnCode.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio title':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bbva text':
                await this.bbvaText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openCancelationModal() {
        await (await this.cancelBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async cancelAppointment(isConfirmed = true) {
        await this.openCancelationModal();
        const button = isConfirmed ? this.helpModal.acceptBtn : this.helpModal.closeBtn;
        await (await button.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new BranchAppointmentDetail();
