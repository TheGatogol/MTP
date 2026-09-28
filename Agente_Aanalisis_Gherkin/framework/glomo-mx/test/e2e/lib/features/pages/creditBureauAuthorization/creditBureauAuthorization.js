import AbstractGlomoPage from '../abstract-glomo-page';
import { ElementNotFoundError, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class CreditBureauAuthorization extends AbstractGlomoPage {
    
    constructor(){
        super({
            root: '#cells-template-historyCredit[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    }
                },
                dialogOperations: [
                    GlomoAlertManager
                ],
                headerIcon: 'img[title="headerImage"]',
                headerTitle: '.product-summary h1',
                headerText: '.product-summary .text',
                mainTitle: 'main span[slot="heading"]',
                mainText: '.cells-step-card-checklist-contract-header-section',
                authorizationLink: 'div[role="link"]',
                authorizationCheckbox: '.checkbox__preaccepted',
                acceptBtn: 'button[data-selector="cells-step-card-checklist-contract-continue"]',
                cancelBtn: '.btn-call-me-back button'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value} = {}){
        switch(item.toLowerCase()){
            case 'icon':
                await this.headerIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header title':
                await this.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header text':
                await this.headerText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main text':
                await this.mainText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization link':
                await this.authorizationLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization checkbox':
                await this.authorizationCheckbox.waitForDisplayed({timeout: config.wait.M});
                value === 'true' ? this.authorizationCheckbox.checked : !this.authorizationCheckbox.checked;
                break;
            case 'accept button':
                await (await this.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'cancel button':
                await (await this.cancelBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async enterModal(){
        await (await this.authorizationLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async exitMoreInfoModal(button){
        switch(button.toLowerCase()){
            case 'accept':
                await this.dialogOperations.confirmDialog({isConfirmed: true});
                break;
            case 'cancel':
                await (await this.dialogOperations.cancelBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'x':
                await this.dialogOperations.closeDialog();
                break;
            default:
                throw new ElementNotFoundError(`The button ${button} wasn't found`);
        }
    }

    async checkCheckbox(times){
        for(let i=0; i<times; i++){
            await (await this.authorizationCheckbox.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async closeOperative(){
        await (await this.cancelBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async giveAuthorization(){
        await (await this.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.fillOtp('11111111');
    }

    async retryOperative(times){
        for(let i=0; i<times; i++){
            await this.dialogOperations.confirmDialog({isConfirmed: true});
            if(i !== 2){
                await this.giveAuthorization();
            }
        }
    }
}

export default new CreditBureauAuthorization();
