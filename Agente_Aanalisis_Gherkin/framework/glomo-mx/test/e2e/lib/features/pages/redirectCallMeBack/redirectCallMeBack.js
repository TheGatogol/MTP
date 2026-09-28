import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('redirectCallMeBack')
class RedirectCallMeBack extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-redirectCallMeBack[state="active"]',
            elements: {
                modal: '#widget-redirectCallMeBack [data-tag-name="bbva-help-modal"][visible]',
                scheduleACall:{
                    properties: {
                        root: '#widget-redirectCallMeBack #scheduleModal'
                    },
                    headerModal: '#helpModalHeader',
                    image: '[data-tag-name="bbva-clip-microillustration"]',
                    description: 'call-me-back-detail-info #description',
                    radioButton: '#call-me-back-schedule-call #accesibility1',
                    buttonConfirm: 'bbva-button-default',
                },
                requestReceived: {
                    properties: {
                        root: '#accesibilityModal #call-me-back-schedule-call-request-received'
                    },
                    headerModal: '#helpModalHeader',
                    image: '[data-tag-name="bbva-clip-microillustration"]',
                    description: 'call-me-back-detail-info #description',
                    buttonConfirm: 'bbva-button-default'
                },
                modalAssistanceManager: {
                    properties: {
                        root: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable'
                    },
                    headerModal: '#helpModalHeader',
                    lableText:'#title p',
                    buttonCallAdd: 'bbva-button-default',
                },
                requestModal: {
                    properties: {
                        root: '#widget-redirectCallMeBack #accesibilityModal'
                    },
                    headerModal: '#helpModalHeader',
                    image: 'div call-me-back-detail-info bbva-clip-microillustration',
                    imageCheckIcon: '#call-me-back-previous-request-received #helpModalTitle slot bbva-type-icon',
                    description: 'div call-me-back-detail-info #description p',
                    date: 'call-me-back-detail-info #date',
                    timer: 'call-me-back-detail-info [data-tag-name="bbva-progress-timer"]',
                    countdownTimer: '[data-tag-name="bbva-progress-timer"]',
                    infoMessage: 'bbva-notification-message',
                    understoodButton: '.modal-main .modal-footer slot bbva-button-default'
                },
                advisorNonWorking: {
                    headerModal: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable #helpModalHeader',
                    image: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable [data-tag-name="bbva-clip-microillustration"]',
                    title: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable call-me-back-detail-info #title p',
                    description: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable call-me-back-detail-info #description p',
                    scheduleCallButton: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable .modal-main .modal-footer slot bbva-button-default',
                    exitButton: '#widget-redirectCallMeBack #accesibilityAdvisorModalNonWorkingDay #manager-unavailable #helpModalHeader #btn-close'
                },
                buttonBackSpherica: '#accesibilityAdvisorModalNonWorkingDay #manager-unavailable  #helpModalHeader #btn-close',
                buttonExitSpherica: '#accesibilityAdvisorModalNonWorkingDay #manager-unavailable div div.content div div.modal-main div.modal-footer slot div bbva-button-default.footer-button.link'
            },
            requiredElements: [
                'modal'
            ]
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.requestReceived.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.requestReceived.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal description':
                await this.requestReceived.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.requestReceived.buttonConfirm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header schedule a call':
                await this.scheduleACall.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image schedule a call':
                await this.scheduleACall.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description schedule a call':
                await this.scheduleACall.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button':
                await this.scheduleACall.radioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button schedule a call':
                await this.scheduleACall.buttonConfirm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header check':
                await this.requestModal.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image check':
                await this.requestModal.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image check icon':
                await this.requestModal.imageCheckIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.requestModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.requestModal.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'timer':
                await this.requestModal.timer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'countdown timer':
                await this.requestModal.countdownTimer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.requestModal.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understood button':
                await this.requestModal.understoodButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'schedule header':
                await this.advisorNonWorking.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clock image':
                await this.advisorNonWorking.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.advisorNonWorking.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'non working description':
                await this.advisorNonWorking.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'schedule call button':
                await this.advisorNonWorking.scheduleCallButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.advisorNonWorking.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header not available':
                await this.modalAssistanceManager.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button back':
                await this.buttonBackSpherica.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text not available':
                await this.modalAssistanceManager.lableText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button call add':
                await this.modalAssistanceManager.buttonCallAdd.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit':
                await this.buttonExitSpherica.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async accessDate() {
        await this.modalAssistanceManager.buttonCallAdd.waitForDisplayed({timeout: config.wait.L});
        await this.modalAssistanceManager.buttonCallAdd.waitForClickable({timeout: config.wait.L});
        await this.modalAssistanceManager.buttonCallAdd.click({ useActions: true });
    }

    async scheduleCall() {
        await this.scheduleACall.radioButton.waitForDisplayed({timeout: config.wait.L});
        await this.scheduleACall.radioButton.waitForClickable({timeout: config.wait.L});
        await this.scheduleACall.radioButton.click({ useActions: true });
    }

    async confirmSchedule() {
        await this.scheduleACall.buttonConfirm.waitForClickable({timeout: config.wait.L});
        await this.scheduleACall.buttonConfirm.click({ useActions: true });
    }

    async confirmCall() {
        await this.scheduleCall();
        await this.confirmSchedule();
    }

    async closeCall() {
        await this.requestModal.understoodButton.waitForClickable({timeout: config.wait.L});
        await this.requestModal.understoodButton.click({ useActions: true });
    }

    async nonWorkingScheduleCall() {
        await this.advisorNonWorking.scheduleCallButton.waitForClickable({timeout: config.wait.L});
        await this.advisorNonWorking.scheduleCallButton.click({useActions: true});
    }
}

export default new RedirectCallMeBack();
