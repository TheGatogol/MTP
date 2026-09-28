import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class CallMeBackAssistanceManager extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-callMeBackAssistanceManager[state="active"]',
            elements: {
                scheduleCallBtn: 'cells-modal-card-advice .actions #primaryBtn',
                firstScheduleRadioBtn: 'cells-radio-button:nth-of-type(1)',
                confirmBtn: 'cells-molecule-actions #primaryButton'
            },
            requiredElements: [
                'scheduleCallBtn'
            ]
        });
    }

    async scheduleCall() {
        await this.scheduleCallBtn.waitForClickable({timeout: config.wait.L});
        await this.scheduleCallBtn.click();
    }

    async selectSchedule() {
        await this.firstScheduleRadioBtn.waitForClickable({timeout: config.wait.L});
        await this.firstScheduleRadioBtn.click();
    }

    async confirmSchedule() {
        await this.confirmBtn.waitForDisplayed({timeout: config.wait.L});
        await this.confirmBtn.click();
    }
}

export default new CallMeBackAssistanceManager();
