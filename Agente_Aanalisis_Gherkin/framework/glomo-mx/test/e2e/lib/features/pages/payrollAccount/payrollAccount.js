import AbstractGlomoPage from '../abstract-glomo-page.js';
import {page} from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';
import GlomoAlertManager from '../../components/glomo-alert-manager.js';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica.js';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica.js';

@page('payrollAccount')
class PayrollAccount extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-payroll[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                banner: 'bbva-card-banner',

                //main page
                requestChangeButton: '#btnPortability',
                requestPayrollLinkButton: '#btnOfferPayrollLink',

                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            buttonExit: '#modal #modal #closeButton',
                            buttonAccept: '#modal #acceptButton',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMainSpherica
                    }
                },
                back: 'bbva-header-main-spherica #btn-close',
                requestChangeButton: '#btnPortability',
                requestPayrollLinkButton: '#btnOfferPayrollLink',
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async accessChangePayroll() {
        await this.requestChangeButton.waitForClickable({timeout: config.wait.L});
        await this.requestChangeButton.click();
    }

    async accessPayrollOnboarding(){
        await this.requestPayrollLinkButton.waitForClickable({timeout: config.wait.L});
        await this.requestPayrollLinkButton.click();
    }

    async exitCurpValidation(button) {
        switch (button.toLowerCase()) {
            case 'header':
                await this.dialogOperations.additionalElements.buttonExit.waitForClickable({timeout: config.wait.M});
                await this.dialogOperations.additionalElements.buttonExit.click();
                break;
            case 'modal':
                await this.dialogOperations.additionalElements.buttonAccept.waitForClickable({timeout: config.wait.M});
                await this.dialogOperations.additionalElements.buttonAccept.click();
                break;
            default:
                throw new Error(`Button ${button} not found`);
        }
    }

    async leaveProcessAtSecondTry() {
        const backButton = this.isSpherica() ? this.back : this.header.back;
        await backButton.waitForClickable({timeout: config.wait.M});
        await backButton.click();
        await this.closeDialog();
        await backButton.waitForClickable({timeout: config.wait.M});
        await backButton.click();
        await this.confirmDialog({isConfirmed: true});
    }

    async closeDialog() {
        await this.dialogOperations.closeBtn.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.closeBtn.click();
    }

    async confirmDialog({isConfirmed}) {
        if (isConfirmed) {
            await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M});
            await this.dialogOperations.acceptBtn.click();
        } else {
            await this.dialogOperations.cancelBtn.waitForClickable({timeout: config.wait.M});
            await this.dialogOperations.cancelBtn.click();
        }
    }
}

export default new PayrollAccount();
