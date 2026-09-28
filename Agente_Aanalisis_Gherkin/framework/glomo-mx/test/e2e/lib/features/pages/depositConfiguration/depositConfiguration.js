import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositConfiguration extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'DepositConfiguration',
            root: '#cells-template-depositConfiguration[state="active"]',
            elements: {
                titleDepositConfiguration: 'cells-molecule-header-spherica',
                radioRenovation: '#radio',
                btnContinueProcess: '#continueButton',
                btnContinueotp: 'cells-summary-view-spherica #collapser cells-st-button-spherica.positive.full.full  button'
            },
            requiredElements: [
                'titleDepositConfiguration',
            ],
        });
    }

    async selectNewInstruction() {
        await this.radioRenovation.waitForClickable({timeout: config.wait.L});
        await this.radioRenovation.click();
    }

    async continueDepositConfiguration() {
        await this.btnContinueProcess.waitForClickable({timeout: config.wait.L});
        await this.btnContinueProcess.click();
    }

    async selectInstructionAndContinue() {
        await this.radioRenovation.waitForClickable({timeout: config.wait.L});
        await this.radioRenovation.click();
        await this.btnContinueProcess.waitForClickable({timeout: config.wait.L});
        await this.btnContinueProcess.click();
    }

    async selectRenovation() {
        await this.radioRenovation.waitForClickable({timeout: config.wait.L});
        await this.radioRenovation.click();
        await this.btnContinueProcess.waitForClickable({timeout: config.wait.L});
        await this.btnContinueProcess.click();
        await this.btnContinueotp.waitForClickable({timeout: config.wait.L});
        await this.btnContinueotp.click();
    }

    async fillOtp(code = '32275680') {
        await super.fillOtp(code);
    }

}

export default new DepositConfiguration();
