import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../../components/bbva-header-main-spherica.js';

@page('payrollAccountLink')
class PayrollAccountLink extends AbstractGlomoPage {

    constructor() {

        super({
            root: '#cells-template-payrollLink[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                back: 'bbva-header-main #btn-right-primary',
                panelDescription: '#benefits-panel-description',
                headerCategory: '#benefits-category',
                descriptionCategory: '#benefits-texts-description',
                benefitList: '#benefits-list',
                infoMessage: '#benefits-notification',
                continueButton: '#btnPayrollLink',
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                back: 'bbva-header-main-spherica #btn-close',
                continueButton: '#btnPayrollLink',
            },
            requiredElements: [
                'panelDescription',
            ],
        });
    }

    async showPayrollAccountLinkBenefits() {
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
        await this.continueButton.scrollIntoView({block: 'end'});
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel description':
                await this.panelDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header category':
                await this.headerCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description category':
                await this.descriptionCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefit list':
                await this.benefitList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits notification':
                await (await this.infoMessage.scrollIntoView()).waitForDisplayed(config.wait.M);
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new PayrollAccountLink();
