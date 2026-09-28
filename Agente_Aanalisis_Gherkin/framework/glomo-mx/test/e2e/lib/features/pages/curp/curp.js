import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page('CurpPage')
class CurpPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-curpPage[state="active"]',
            elements: {
                back: 'cells-molecule-header-spherica #btnRight',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                linkNoticePrivacy: '#stepCardInputMessageContainer .link-margin cells-st-button-spherica',
                buttonContinue: ' cells-step-input-message-spherica #enterAmountBtn',

                dialogOperations: [
                    GlomoAlertManager
                ],
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async goNoticePrivacy() {
        await this.linkNoticePrivacy.waitForDisplayed({timeout: config.wait.M});
        await this.linkNoticePrivacy.click();
    }

    async goBack() {
        await this.back.waitForClickable({timeout: config.wait.M});
        await this.back.click();
    }

    async continueInsertCurp() {
        await this.buttonContinue.waitForAnimation({timeout: config.wait.L});
        await this.buttonContinue.scrollIntoView();
        await this.buttonContinue.waitForEnabled({timeout: config.wait.L});
        await this.buttonContinue.click({timeout: config.wait.XL});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async cancelLeaveTheProcess() {
        await this.dialogOperations.confirmDialog({isConfirmed: false});
    }

}

export default new CurpPage();
