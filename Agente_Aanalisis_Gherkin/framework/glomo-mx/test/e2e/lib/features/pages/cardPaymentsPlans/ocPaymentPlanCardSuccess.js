import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
@page('ocPaymentPlanCardSuccessPage')
class OcPaymentPlanCardSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocPaymentPlanCardSuccessPage[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                panelInfo: '[data-tag-name="bbva-panel-info"]',
                listSimplePlanType: '[data-tag-name="bbva-list-simple"].success_plan_type_cards',
                listSimpleCardToAssociate: '[data-tag-name="bbva-list-simple"].success_card_to_associate_cards',
                listSimplePlanBalance: '[data-tag-name="bbva-list-simple"].success_plan_balance_cards',
                listSimpleTerm: '[data-tag-name="bbva-list-simple"].success_term_cards',
                listSimpleInitialPayment: '[data-tag-name="bbva-list-simple"].success_initial_payment_cards',
                listSimpleDeadline: '[data-tag-name="bbva-list-simple"].success_deadline_cards',
                listSimpleInterestRate: '[data-tag-name="bbva-list-simple"].success_interest_rate_cards',
                listSimpleMonthlyPayment: '[data-tag-name="bbva-list-simple"].success_monthly_payment_cards',
                notificationMessage: 'bbva-notification-message',
                defaultButton: '[data-tag-name="bbva-button-default"]'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'panel info':
                await this.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple plan type':
                await this.listSimplePlanType.scrollIntoView();
                await this.listSimplePlanType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple card associate':
                await this.listSimpleCardToAssociate.scrollIntoView();
                await this.listSimpleCardToAssociate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple plan balance':
                await this.listSimplePlanBalance.scrollIntoView();
                await this.listSimplePlanBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple term':
                await this.listSimpleTerm.scrollIntoView();
                await this.listSimpleTerm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple initial payment':
                await this.listSimpleInitialPayment.scrollIntoView();
                await this.listSimpleInitialPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple deadline':
                await this.listSimpleDeadline.scrollIntoView();
                await this.listSimpleDeadline.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple interest rate':
                await this.listSimpleInterestRate.scrollIntoView();
                await this.listSimpleInterestRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list simple monthly payment':
                await this.listSimpleMonthlyPayment.scrollIntoView();
                await this.listSimpleMonthlyPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notificationMessage.scrollIntoView();
                await this.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'default button':
                await this.defaultButton.scrollIntoView();
                await this.defaultButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new OcPaymentPlanCardSuccess();
