import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class OcMetaseguraSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocMetaseguraOfferSuccess[state="active"]',
            name: 'bbva-metasegura-successful-hiring-spherica',
            elements: {
                properties: {root: 'bbva-metasegura-successful-hiring-spherica'},
                header: '[data-tag-name="bbva-header-main"]',
                coreTitle: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                date: '#operationDate',
                coreText: '[data-tag-name="bbva-type-text"]:nth-child(3)',
                payments: '.header-info [data-tag-name="bbva-type-amount"]',
                coreSubText: '[data-tag-name="bbva-type-text"].panel-message',
                midSectionImg: '[data-tag-name="bbva-type-icon"]',
                policyTitle: '#policyNumber dl dt [data-tag-name="bbva-type-text"]',
                policyNumber: '#policyNumber dl dd [data-tag-name="bbva-type-text"]',
                goalTitle: '#savingGoal dl dt [data-tag-name="bbva-type-text"]',
                goal: '#savingGoal dl dd [data-tag-name="bbva-type-text"]',
                termTitle: '#term dl dt [data-tag-name="bbva-type-text"]',
                term: '#term dl dd [data-tag-name="bbva-type-text"]',
                payFreqTitle: '#frecuency dl dt [data-tag-name="bbva-type-text"]',
                payFreq: '#frecuency dl dd [data-tag-name="bbva-type-text"]',
                benefTitleOne: '#beneficiary-0 dl dt [data-tag-name="bbva-type-text"]',
                benefOne: '#beneficiary-0 dl dd [data-tag-name="bbva-type-text"]',
                benefTitleTwo: '#beneficiary-1 dl dt [data-tag-name="bbva-type-text"]',
                benefTwo: '#beneficiary-1 dl dd [data-tag-name="bbva-type-text"]',
                benefTitleThree: '#beneficiary-2 dl dt [data-tag-name="bbva-type-text"]',
                benefThree: '#beneficiary-2 dl dd [data-tag-name="bbva-type-text"]',
                benefTitleFour: '#beneficiary-3 dl dt [data-tag-name="bbva-type-text"]',
                benefFour: '#beneficiary-3 dl dd [data-tag-name="bbva-type-text"]',
                methodPayTitle: '#paymentMethod dl dt [data-tag-name="bbva-type-text"]',
                methodPay: '#paymentMethod dl dd [data-tag-name="bbva-type-text"]',
                startTitle: '#startDate dl dt [data-tag-name="bbva-type-text"]',
                startDate: '#startDate dl dd [data-tag-name="bbva-type-text"]',
                endTitle: '#endDate dl dt [data-tag-name="bbva-type-text"]',
                endDate: '#endDate dl dd [data-tag-name="bbva-type-text"]',
                folioNumTitle: '#operationNumber dl dt [data-tag-name="bbva-type-text"]',
                folioNum: '#operationNumber dl dd [data-tag-name="bbva-type-text"]',
                bbvaTitle: '#operationNumber dl dd [data-tag-name="bbva-type-text"][text*="BBVA"]',
                contactNum30Day: '.contact-numbers bbva-notification-message:nth-child(1)',
                contactNumDeath: '.contact-numbers bbva-notification-message:nth-child(2)',
                emailText: '#emailInfo dl dt [data-tag-name="bbva-type-text"]',
                email: '#emailInfo dl dd [data-tag-name="bbva-type-text"]',
                shareBtn: '[data-tag-name="bbva-button-action"]',
                closeBtn: '[data-tag-name="bbva-header-main"] button#btn-right-primary'
            },
            requiredElements: [
                'header',
                'coreTitle'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel title':
                await this.coreTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel text':
                await this.coreText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payments':
                await this.payments.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel subtext':
                await this.coreSubText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mid section image':
                await this.midSectionImg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy title':
                await this.policyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy number':
                await this.policyNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal title':
                await this.goalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal':
                await this.goal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term title':
                await this.termTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract term':
                await this.term.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment frequency title':
                await this.payFreqTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment frequency':
                await this.payFreq.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first beneficiary title':
                await this.benefTitleOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first beneficiary':
                await this.benefOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second beneficiary title':
                await this.benefTitleTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second beneficiary':
                await this.benefTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'third beneficiary title':
                await this.benefTitleThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'third beneficiary':
                await this.benefThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fourth beneficiary title':
                await this.benefTitleFour.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fourth beneficiary':
                await this.benefFour.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'method of payment title':
                await this.methodPayTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'method of payment':
                await this.methodPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract start title':
                await this.startTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract start date':
                await this.startDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract end title':
                await this.endTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract end date':
                await this.endDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio number title':
                await this.folioNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio number':
                await this.folioNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bbva bold title':
                await this.bbvaTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact number before 30 days':
                await this.contactNum30Day.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact number for beneficiaries':
                await this.contactNumDeath.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email text':
                await this.emailText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email':
                await this.email.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeSuccessPage() {
        await (await this.closeBtn.waitForClickable({timeout: config.wait.L})).click();
    }
}

export default new OcMetaseguraSuccess();
