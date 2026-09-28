import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, Commands} from '@csqe/radish';

class DisabilityVideocallHearingTacticalCalling extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-disabilityVideocallHearingTacticalCalling[state="active"]',
            elements: {
                dmDVHT: 'bbva-manager-disability-videocall#dmDVHTC',
                modalHeader: {
                    title: '#slotModal #helpModalHeader #text',
                    buttonRightPrimary: '#slotModal #helpModalHeader #btn-right-primary [icon]',
                },
                startVideocall: {
                    microillustration: '[data-tag-name="bbva-panel-info"].dimentions-image #image',
                    title: '[data-tag-name="bbva-panel-info"].dimentions-image [data-tag-name="bbva-text"].title',
                    description: '[data-tag-name="bbva-panel-info"].dimentions-image [data-tag-name="bbva-text"].description',
                    timer: '[data-tag-name="bbva-progress-timer"] div.wrapper.vertical div.figure div.time'
                },
                timeoutStartVideoCall: {
                    properties: {root:'#slotModal[data-tag-name="bbva-help-modal"][visible]'},
                    microillustration: '[data-tag-name="bbva-panel-info"]',
                    infoData: '[data-tag-name="bbva-notification-message"]',
                }
            },
            requiredElements: [
                'modalHeader',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.modalHeader.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right header':
                await this.modalHeader.buttonRightPrimary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration videocall':
                await this.startVideocall.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title videocall':
                await this.startVideocall.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description videocall':
                await this.startVideocall.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'timer':
                await this.startVideocall.timer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration timeout':
                await this.timeoutStartVideoCall.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title timeout':
                await this.startVideocall.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description timeout':
                await this.startVideocall.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info data timeout':
                await this.timeoutStartVideoCall.infoData.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async timeoutLobby(timeout) {
        if (Number.isNaN(Number(timeout))) {
            throw new Error('Timeout must be a number');
        } 
        await this.dmDVHT.execute({script: (time) => this.timeout = Number(time), args:[timeout]});
        await Commands.pause({time: config.wait.S});
        await this.startVideocall.timer.waitForAnimation({timeout: config.wait.XXL});

    }
    
    async waitForAnalytics(){
        await this.timeoutStartVideoCall.infoData.waitForDisplayed({timeout: config.wait.M});
    }
}

export default new DisabilityVideocallHearingTacticalCalling();
