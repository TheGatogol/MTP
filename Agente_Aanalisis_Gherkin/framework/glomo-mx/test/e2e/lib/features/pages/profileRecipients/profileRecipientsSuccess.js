import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class ProfileRecipientsSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-recipientsReview[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                icon: '.head-icon-white',
                date:'div.main-text-head.bold',
                beneficiaries:'.otherInfo',
                account:'.additional-info',
                close:'.actions cells-st-button',
                closeButton: 'bbva-header-main #btn-right-primary'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon':
                await this.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'beneficiaries':
                await this.beneficiaries.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close':
                await this.close.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBackDasboard() {
        await this.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.closeButton.click();
    }

    async accessDashboard() {
        await this.close.waitForDisplayed({timeout: config.wait.M});
        await this.close.click();
    }
}

export default new ProfileRecipientsSuccess();
