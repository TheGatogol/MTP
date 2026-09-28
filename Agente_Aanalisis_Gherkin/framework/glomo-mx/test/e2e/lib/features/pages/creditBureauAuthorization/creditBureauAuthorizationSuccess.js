import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class CreditBureauAuthorizationSuccess extends AbstractGlomoPage {
    
    constructor(){
        super({
            root: '#cells-template-historyCreditReceipt[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    }
                },
                successIcon: '#avatarImg',
                successTitle: 'div[data-selector="cells-successful-response-main-title"] span:nth-child(1)',
                date: 'div[data-selector="cells-successful-response-main-title"] #date',
                successText: 'li[data-selector="cells-successful-response-top-info-"] span.key',
                folioTitle: 'li[data-selector="Folio"] span.key',
                folioValue: 'li[data-selector="Folio"] span.value',
                messageIcon: '.message #principalIcon',
                messageText: '.message #notInline',
                exitBtn: '#primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item} = {}){
        switch(item.toLowerCase()){
            case 'success icon':
                await this.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success text':
                await this.successText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio title':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folioValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message icon':
                await this.messageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message text':
                await this.messageText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async exitScreen(button){
        switch(button.toLowerCase()){
            case 'accept':
                await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'x':
                await this.header.actionRight();
                break;
            default:
                throw new Error(`Button '${button}' not found.`);
        }
    }
}

export default new CreditBureauAuthorizationSuccess();
