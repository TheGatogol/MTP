import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaPanelInfoSpherica from '../../components/bbva-panel-info-spherica';
@page()
class LeadMortgageReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mortgageReview[state="active"]',
            elements: {
                successAlert: BbvaPanelInfoSpherica,
                header: '#successHeader h1',
                amount: '#successAmount',
                monthlyPayment: '#successMonthlyPayment',
                term: '#successTerm',
                destination: '#successDestination',
                commissionOpening: '#successOpeningCommission',
                deferredCommission: '#successDeferredCommission',
                monthlyRate: '#successMonthlyRate',
                cat: '#successCat',
                dueDate: '#successDueDate',
                folio: '#successFolio',
                message: '#successNotificationMessage',
                email: '#successEmail',
                btnAtention: '[data-tag-name="bbva-button-row-spherica"]',
                btnExit: '#btn-close',
            },
            requiredElements: [
                'header'
            ]

        });
    }

    async _screenValidation({item, value, visibility}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'success':
                await this.successAlert.image.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'title':
                await this.successAlert.title.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'date':
                if(!this.isSpherica){
                    await this.successAlert.description.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                }
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'monthly payment':
                await this.monthlyPayment.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'term':
                await this.term.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'destination':
                await this.destination.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'commission opening':
                await this.commissionOpening.scrollIntoView();
                await this.commissionOpening.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'deferred commission':
                await this.deferredCommission.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'monthly rate':
                await this.monthlyRate.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'cat':
                await this.cat.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'due date':
                await this.dueDate.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'message':
                await this.message.scrollIntoView();
                await this.message.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'email':
                await this.email.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'button call atention':
                await this.btnAtention.scrollIntoView();
                await this.btnAtention.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'button exit':
                await this.btnExit.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'sticky call atention':
                await this.btnAtention.scrollIntoView();
                if(value === 'call me') {
                    await this.btnAtention.waitForText({text:'Quiero que me llame un asesor', exactMatch:false});
                } else {
                    await this.btnAtention.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new LeadMortgageReview();
